// actions/sendEmail.ts
"use server";

import React from "react"; // Import React for React.createElement
import { z } from "zod";
import nodemailer from "nodemailer";
import { render } from "@react-email/render"; // To render React components to HTML
import ConfirmationEmail from "@/emails/ConfirmationEmail"; // Adjust path if needed
import ContactFormEmail from "@/emails/ContactFormEmail"; // Adjust path if needed

// --- Environment Variable Check ---
const user = process.env.GOOGLE_EMAIL_USER;
const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
const refreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;
const toEmail = process.env.EMAIL_TO;

const missingEnvVars = [
	!user && "GOOGLE_EMAIL_USER",
	!clientId && "GOOGLE_OAUTH_CLIENT_ID",
	!clientSecret && "GOOGLE_OAUTH_CLIENT_SECRET",
	!refreshToken && "GOOGLE_OAUTH_REFRESH_TOKEN",
	!toEmail && "EMAIL_TO",
].filter(Boolean);

if (missingEnvVars.length > 0) {
	console.error(
		`FATAL SERVER ERROR: Missing environment variables: ${missingEnvVars.join(", ")}`
	);
}
// --- End Environment Variable Check ---

// Input validation schema
const contactFormSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters." }),
	email: z.string().email({ message: "Please enter a valid email address." }),
	subject: z
		.string()
		.min(3, { message: "Subject must be at least 3 characters." }),
	message: z
		.string()
		.min(10, { message: "Message must be at least 10 characters." }),
});

// Define the return type for the action
interface ActionResult {
	success: boolean;
	message: string;
	errors?: Partial<Record<keyof z.infer<typeof contactFormSchema>, string>>;
}

// --- Nodemailer Transporter Setup ---
let transporter: nodemailer.Transporter | null = null;
if (user && clientId && clientSecret && refreshToken) {
	transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			type: "OAuth2",
			user: user,
			clientId: clientId,
			clientSecret: clientSecret,
			refreshToken: refreshToken,
		},
		// logger: true, // Keep for debugging if needed
		// debug: true,  // Keep for debugging if needed
	});
} else {
	console.error(
		"Nodemailer transporter could not be created due to missing OAuth credentials."
	);
}
// --- End Nodemailer Transporter Setup ---

export async function sendEmailAction(
	formData: z.infer<typeof contactFormSchema>
): Promise<ActionResult> {
	if (!transporter) {
		return {
			success: false,
			message: "Server configuration error: Email service not available.",
		};
	}
	if (!toEmail) {
		return {
			success: false,
			message: "Server configuration error: Recipient email not configured.",
		};
	}

	const validatedFields = contactFormSchema.safeParse(formData);

	if (!validatedFields.success) {
		const fieldErrors: Partial<Record<keyof typeof formData, string>> = {};
		for (const issue of validatedFields.error.issues) {
			if (issue.path[0]) {
				fieldErrors[issue.path[0] as keyof typeof formData] = issue.message;
			}
		}
		console.warn("Validation Failed:", fieldErrors);
		return {
			success: false,
			message: "Please correct the errors below.",
			errors: fieldErrors,
		};
	}

	const { name, email, subject, message } = validatedFields.data;

	let emailHtmlToSender: string;
	let emailHtmlToOwner: string;

	try {
		// 3. Render Email Templates - AWAIT the result using React.createElement
		console.log("Rendering email templates using React.createElement...");

		// Render the owner notification email
		emailHtmlToOwner = await render(
			React.createElement(ContactFormEmail, { name, email, subject, message })
		);

		// Render the sender confirmation email
		emailHtmlToSender = await render(
			React.createElement(ConfirmationEmail, { name, subject })
		);

		console.log("Email templates rendered successfully.");

		// Optional check
		if (
			typeof emailHtmlToSender !== "string" ||
			typeof emailHtmlToOwner !== "string"
		) {
			console.error(
				"Error: Failed to render email content to string after await."
			);
			return {
				success: false,
				message: "Internal server error creating email content.",
			};
		}
	} catch (renderError: unknown) {
		console.error("Error rendering email templates:", renderError);
		return {
			success: false,
			message: "Internal server error preparing email.",
		};
	}

	try {
		// 4. Define Mail Options
		const mailOptionsOwner = {
			from: `"${name} [Contact Form]" <${user}>`, // Use configured user email
			to: toEmail, // Your team's receiving address
			subject: `New Contact Form: ${subject}`,
			replyTo: email, // Set reply-to to the sender's email
			html: emailHtmlToOwner, // Use the rendered HTML string for owner
		};

		const mailOptionsSender = {
			from: `"Sponsor Punch Basketball" <${user}>`, // Use configured user email
			to: email, // Sender's email address
			subject: `Message Received: ${subject}`,
			html: emailHtmlToSender, // Use the rendered HTML string for sender
		};

		// 5. Send Emails
		console.log(
			`Attempting to send emails from ${user} to ${toEmail} and ${email}`
		);
		const [infoOwner, infoSender] = await Promise.all([
			transporter.sendMail(mailOptionsOwner),
			transporter.sendMail(mailOptionsSender),
		]);

		console.log("Email sent to owner:", infoOwner.response);
		console.log("Confirmation email sent to sender:", infoSender.response);

		return {
			success: true,
			message: "Message sent successfully! Check your inbox.",
		};
	} catch (error: unknown) {
		console.error("Nodemailer Send Email Error:", error);

		let userMessage =
			"Failed to send email due to a server error. Please try again later.";
		if (error && typeof error === "object" && "code" in error) {
			const errorCode = (error as { code: unknown }).code;
			console.error("Error Code:", errorCode);
			if (errorCode === "EAUTH") {
				userMessage =
					"Authentication failed. Please check server configuration.";
			} else if (errorCode === "EENVELOPE") {
				userMessage =
					"Invalid email address provided. Please check recipient addresses.";
			}
		} else if (error instanceof Error) {
			console.error("Error Message:", error.message);
		}

		return {
			success: false,
			message: userMessage,
		};
	}
}
