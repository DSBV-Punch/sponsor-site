// emails/ContactFormEmail.tsx
import * as React from "react";
import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Text,
} from "@react-email/components";

// --- Configuration ---
// Use the same constants or define separately if needed
const BRAND_COLOR = "#DC2626"; // Example: Tailwind's red-600
const LOGO_URL = "https://your-website.com/path/to/your-logo.png"; // IMPORTANT: Use a public URL
const TEAM_NAME = "TU Delft Basketball Teams"; // Or your specific team name
const WEBSITE_URL = "https://sponsor.punch-basketball.nl"; // Your website URL
// --- End Configuration ---

interface ContactFormEmailProps {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
	name,
	email,
	subject,
	message,
}) => (
	<Html>
		<Head />
		<Preview>New Website Contact: {subject}</Preview>
		<Body style={main}>
			<Container style={container}>
				{/* Header Section with Logo */}
				<Section style={logoContainer}>
					<Img
						src={LOGO_URL}
						width="120"
						height="auto"
						alt={`${TEAM_NAME} Logo`}
					/>
				</Section>

				{/* Main Content Section */}
				<Section style={contentSection}>
					<Heading style={heading}>New Contact Form Submission</Heading>

					<Text style={paragraph}>
						A new message has been submitted via the website contact form:
					</Text>

					<Hr style={hr} />

					{/* Submitted Details */}
					<Section style={detailsSection}>
						<Text style={detailItem}>
							<strong>Name:</strong> {name}
						</Text>
						<Text style={detailItem}>
							<strong>Email:</strong>{" "}
							<Link href={`mailto:${email}`} style={emailLink}>
								{email}
							</Link>
						</Text>
						<Text style={detailItem}>
							<strong>Subject:</strong> {subject}
						</Text>
						<Text style={detailItem}>
							<strong>Message:</strong>
						</Text>
						{/* Preserve line breaks from the message */}
						<Text style={messageText}>
							{message.split("\n").map((line, index) => (
								<React.Fragment key={index}>
									{line}
									<br />
								</React.Fragment>
							))}
						</Text>
					</Section>

					<Hr style={hr} />

					<Text style={paragraph}>
						You can reply directly to this email to respond to {name} ({email}).
					</Text>
				</Section>

				{/* Footer Section */}
				<Section style={footerSection}>
					<Text style={footerText}>
						Received via the{" "}
						<Link href={WEBSITE_URL} style={footerLink}>
							{TEAM_NAME} website contact form
						</Link>
						.
					</Text>
				</Section>
			</Container>
		</Body>
	</Html>
);

export default ContactFormEmail;

// --- Styles (Similar to ConfirmationEmail, with minor adjustments) ---

const main = {
	backgroundColor: "#f4f4f7",
	fontFamily:
		'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const container = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	padding: "20px 0 48px",
	marginBottom: "64px",
	maxWidth: "580px",
	border: "1px solid #e4e4e7",
	borderRadius: "8px",
};

const logoContainer = {
	textAlign: "center" as const,
	padding: "20px 0",
};

const contentSection = {
	padding: "0 32px",
};

const heading = {
	color: "#18181b",
	fontSize: "24px", // Slightly smaller for internal notification
	fontWeight: "bold",
	textAlign: "center" as const,
	margin: "30px 0",
};

const paragraph = {
	color: "#3f3f46",
	fontSize: "15px",
	lineHeight: "1.6",
	margin: "16px 0",
};

const detailsSection = {
	margin: "24px 0",
};

const detailItem = {
	color: "#3f3f46",
	fontSize: "14px",
	lineHeight: "1.5",
	margin: "8px 0",
};

const emailLink = {
	color: BRAND_COLOR, // Use brand color for the mailto link
	textDecoration: "underline",
};

const messageText = {
	...detailItem,
	padding: "12px",
	backgroundColor: "#f4f4f5",
	borderRadius: "4px",
	whiteSpace: "pre-wrap" as const, // Helps preserve whitespace/line breaks
	wordBreak: "break-word" as const,
};

const hr = {
	borderColor: "#e4e4e7",
	margin: "26px 0",
	width: "100%",
};

const footerSection = {
	padding: "20px 32px 0 32px", // Add padding top
};

const footerText = {
	color: "#a1a1aa",
	fontSize: "12px",
	lineHeight: "1.5",
	textAlign: "center" as const,
	margin: "10px 0",
};

const footerLink = {
	color: "#71717a",
	textDecoration: "underline",
};
