// actions/sendEmail.ts
"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
// Keep email templates if you created them
// import { render } from "@react-email/render";
// import ContactFormEmail from "@/emails/ContactFormEmail";
// import ConfirmationEmail from "@/emails/ConfirmationEmail";

// Input validation schema (remains the same)
const contactFormSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters long"),
	email: z.string().email("Invalid email address"),
	subject: z.string().min(3, "Subject must be at least 3 characters long"),
	message: z.string().min(10, "Message must be at least 10 characters long"),
});

// --- Nodemailer Configuration ---
const user = process.env.GOOGLE_EMAIL_USER;
const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
const refreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;
const toEmail = process.env.EMAIL_TO;

// Basic check for environment variables
if (!user || !clientId || !clientSecret || !refreshToken || !toEmail) {
	console.error("Missing Google OAuth or EMAIL_TO environment variables");
	// Throw an error or handle appropriately during server startup/initialization
	// For now, we'll let it fail later if needed, but a check here is good.
}

// Create Nodemailer transporter using OAuth2
// Nodemailer handles the token refresh automatically with these credentials
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true, // use SSL
	auth: {
		type: "OAuth2",
		user: user,
		clientId: clientId,
		clientSecret: clientSecret,
		refreshToken: refreshToken,
		// accessToken: '...', // Optional: Provide an access token directly (usually not needed with refresh token)
	},
});
// --- End Nodemailer Configuration ---

export async function sendEmailAction(formData: {
	name: string;
	email: string;
	subject: string;
	message: string;
}) {
	// 1. Validate input
	const validatedFields = contactFormSchema.safeParse(formData);

	if (!validatedFields.success) {
		console.error(
			"Validation Error:",
			validatedFields.error.flatten().fieldErrors
		);
		return {
			success: false,
			message: "Validation failed. Please check your input.",
		};
	}

	// Check again here before attempting to send
	if (!user || !clientId || !clientSecret || !refreshToken || !toEmail) {
		console.error(
			"Server configuration error: Missing Google OAuth or EMAIL_TO environment variables"
		);
		return { success: false, message: "Server configuration error." };
	}

	const { name, email, subject, message } = validatedFields.data;

	// 2. Construct Email Content (Using simple strings here, adapt if using react-email)
	const emailHtmlToOwner = `
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <hr>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
    <hr>
    <p>Reply directly to ${email}.</p>
  `;

	const emailHtmlToSender = `
    <h1>Message Received!</h1>
    <p>Hi ${name},</p>
    <p>Thanks for contacting us regarding "${subject}". We've received your message and will get back to you as soon as possible.</p>
    <hr>
    <p>[Your University Basketball Team Name]</p>
  `;

	// 3. Define Mail Options
	const mailOptionsOwner = {
		from: `"${name} (via Website)" <${user}>`, // Sender name + your email
		to: toEmail, // Your receiving address
		subject: `New Contact Form: ${subject}`,
		replyTo: email, // Set reply-to to the sender's email
		html: emailHtmlToOwner,
	};

	const mailOptionsSender = {
		from: `"[Your Team Name]" <${user}>`, // Your team name + your email
		to: email, // Sender's email address
		subject: `Message Received: ${subject}`,
		html: emailHtmlToSender,
	};

	try {
		// 4. Send Emails using Nodemailer
		console.log("Attempting to send email to owner...");
		const infoOwner = await transporter.sendMail(mailOptionsOwner);
		console.log("Email sent to owner:", infoOwner.response);

		console.log("Attempting to send confirmation to sender...");
		const infoSender = await transporter.sendMail(mailOptionsSender);
		console.log("Confirmation email sent to sender:", infoSender.response);

		return { success: true, message: "Email sent successfully!" };
	} catch (error) {
		console.error("Nodemailer Send Email Error:", error);
		// Provide a more generic error to the client
		return {
			success: false,
			message: "Failed to send email. Please try again later.",
		};
	}
}
