import { SponsorshipOpportunities } from "@/components/sponsorship-oppurtunities";
import { WhySponsor } from "@/components/why-sponsor";
import { ContactCTA } from "@/components/contact-cta";
import { GradientBG } from "@/components/gradiant-bg";

export default function SponsorshipPage() {
	return (
		<main className="relative">
			<SponsorshipOpportunities />
			<WhySponsor />
			<ContactCTA />
		</main>
	);
}
