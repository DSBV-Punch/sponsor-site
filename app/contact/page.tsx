// app/contact/page.tsx (or wherever you want the form)
import { ContactForm } from "@/components/contact_form";

export default function ContactPage() {
	return (
		<main className="relative container mx-auto pt-8 px-4 md:px-6 ">
			<div className="flex flex-col items-center space-y-4 text-center mb-12"></div>
			<ContactForm />
		</main>
	);
}
