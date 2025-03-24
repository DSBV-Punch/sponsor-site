import { SponsorshipOpportunities } from "@/components/sponsorship-oppurtunities";
import { WhySponsor } from "@/components/why-sponsor";
import { ContactCTA } from "@/components/contact-cta";

export default function SponsorshipPage() {
	return (
		<div className="container mx-auto py-12">
			<section className="mb-12">
				<h1 className="text-4xl font-bold text-center mb-8">
					Unlock Partnership Opportunities
				</h1>
				<p className="text-gray-700 text-center text-lg">
					Partner with TU Delft Women's Basketball and become a vital part of
					our journey to the European University Championship. We offer a range
					of sponsorship packages designed to elevate your brand and support our
					team's pursuit of excellence.
				</p>
			</section>

			<SponsorshipOpportunities />
			<WhySponsor />
			<ContactCTA />
		</div>
	);
}
