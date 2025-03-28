// emails/ConfirmationEmail.tsx
import * as React from "react";
import {
	Body,
	Button,
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
// Replace with your actual data
const BRAND_COLOR = "#DC2626"; // Example: Tailwind's red-600
const LOGO_URL = "https://your-website.com/path/to/your-logo.png"; // IMPORTANT: Use a public URL
const TEAM_NAME = "TU Delft Basketball Teams"; // Or your specific team name
const WEBSITE_URL = "https://sponsor.punch-basketball.nl"; // Your website URL
// --- End Configuration ---

interface ConfirmationEmailProps {
	name: string; // Sender's name
	subject: string; // Subject they submitted
}

export const ConfirmationEmail: React.FC<Readonly<ConfirmationEmailProps>> = ({
	name,
	subject,
}) => (
	<Html>
		<Head />
		<Preview>We've received your message regarding "{subject}"</Preview>
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
					<Heading style={heading}>Thanks for Reaching Out!</Heading>

					<Text style={paragraph}>Hi {name},</Text>

					<Text style={paragraph}>
						Thank you for contacting the {TEAM_NAME}. We confirm that we've
						successfully received your message regarding:
					</Text>

					<Text style={subjectText}>"{subject}"</Text>

					<Text style={paragraph}>
						Our team will review your inquiry and get back to you as soon as
						possible.
					</Text>

					{/* Optional: Button linking back to the website */}
					<Section style={buttonContainer}>
						<Button style={button} href={WEBSITE_URL}>
							Visit Our Website
						</Button>
					</Section>

					<Text style={paragraph}>
						Best regards,
						<br />
						The {TEAM_NAME}
					</Text>
				</Section>

				<Hr style={hr} />

				{/* Footer Section */}
				<Section style={footerSection}>
					<Text style={footerText}>
						You received this email because you submitted a contact form on the{" "}
						<Link href={WEBSITE_URL} style={footerLink}>
							{TEAM_NAME} website
						</Link>
						.
					</Text>
					<Text style={footerText}>
						© {new Date().getFullYear()} {TEAM_NAME}
					</Text>
				</Section>
			</Container>
		</Body>
	</Html>
);

export default ConfirmationEmail;

// --- Styles ---
// Note: Inline styles are generally preferred for email client compatibility.

const main = {
	backgroundColor: "#f4f4f7", // Lighter gray background
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
	textAlign: "center" as const, // Center the logo
	padding: "20px 0",
};

const contentSection = {
	padding: "0 32px", // Add horizontal padding to content
};

const heading = {
	color: "#18181b", // Darker heading
	fontSize: "28px",
	fontWeight: "bold",
	textAlign: "center" as const,
	margin: "30px 0",
};

const paragraph = {
	color: "#3f3f46", // Slightly lighter text color
	fontSize: "15px",
	lineHeight: "1.6", // More line spacing
	margin: "16px 0",
};

const subjectText = {
	...paragraph,
	fontStyle: "italic",
	color: "#71717a", // Muted color for the subject quote
	padding: "10px 20px",
	backgroundColor: "#f4f4f5", // Light background for emphasis
	borderRadius: "4px",
	margin: "20px 0",
};

const buttonContainer = {
	textAlign: "center" as const,
	margin: "32px 0",
};

const button = {
	backgroundColor: BRAND_COLOR,
	borderRadius: "6px",
	color: "#fff",
	fontSize: "15px",
	fontWeight: "bold",
	textDecoration: "none",
	textAlign: "center" as const,
	padding: "12px 24px",
};

const hr = {
	borderColor: "#e4e4e7",
	margin: "26px 0",
	width: "100%",
};

const footerSection = {
	padding: "0 32px",
};

const footerText = {
	color: "#a1a1aa", // Lighter footer text
	fontSize: "12px",
	lineHeight: "1.5",
	textAlign: "center" as const,
	margin: "10px 0",
};

const footerLink = {
	color: "#71717a", // Slightly darker link in footer
	textDecoration: "underline",
};
