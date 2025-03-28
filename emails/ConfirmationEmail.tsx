// emails/ConfirmationEmail.tsx
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

interface ConfirmationEmailProps {
	name: string;
	subject: string;
}

export const ConfirmationEmail: React.FC<Readonly<ConfirmationEmailProps>> = ({
	name,
	subject,
}) => (
	<Html>
		<Head />
		<Preview>We've received your message: {subject}</Preview>
		<Body style={main}>
			<Container style={container}>
				<Heading style={heading}>Message Received!</Heading>
				<Text style={paragraph}>Hi {name},</Text>
				<Text style={paragraph}>
					Thanks for contacting us regarding "{subject}". We've received your
					message and will get back to you as soon as possible.
				</Text>
				<Hr style={hr} />
				<Text style={footer}>[Your University Basketball Team Name]</Text>
			</Container>
		</Body>
	</Html>
);

// Re-use or define styles similar to ContactFormEmail
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

export default ConfirmationEmail;
