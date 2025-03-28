// emails/ContactFormEmail.tsx
import * as React from "react";
import {
	Html,
	Body,
	Head,
	Heading,
	Container,
	Text,
	Hr,
	Preview,
} from "@react-email/components";

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
		<Preview>New Contact Form Submission: {subject}</Preview>
		<Body style={main}>
			<Container style={container}>
				<Heading style={heading}>New Contact Form Submission</Heading>
				<Text style={paragraph}>
					You received a new message via the website:
				</Text>
				<Hr style={hr} />
				<Text style={paragraph}>
					<strong>Name:</strong> {name}
				</Text>
				<Text style={paragraph}>
					<strong>Email:</strong> {email}
				</Text>
				<Text style={paragraph}>
					<strong>Subject:</strong> {subject}
				</Text>
				<Text style={paragraph}>
					<strong>Message:</strong>
				</Text>
				<Text style={paragraph}>{message}</Text>
				<Hr style={hr} />
				<Text style={footer}>
					Reply directly to this email to contact {name} ({email}).
				</Text>
			</Container>
		</Body>
	</Html>
);

// Basic styles (inline for better email client compatibility)
const main = { backgroundColor: "#f6f9fc", fontFamily: "Arial, sans-serif" };
const container = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	padding: "20px 0 48px",
	width: "580px",
};
const heading = {
	fontSize: "24px",
	lineHeight: "1.3",
	fontWeight: "700",
	color: "#484848",
};
const paragraph = { fontSize: "14px", lineHeight: "1.4", color: "#484848" };
const hr = { borderColor: "#cccccc", margin: "20px 0" };
const footer = { color: "#8898aa", fontSize: "12px" };

export default ContactFormEmail; // Default export might be needed by some tools
