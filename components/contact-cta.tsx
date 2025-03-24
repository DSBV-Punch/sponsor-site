// components/contact-section.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactCTA() {
	return (
		<section className="mt-12">
			<h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
			<p className="text-gray-700 mb-4">
				Ready to explore partnership opportunities? Get in touch with us today!
			</p>
			<Link href="/contact">
				<Button>Contact Us</Button>
			</Link>
		</section>
	);
}
