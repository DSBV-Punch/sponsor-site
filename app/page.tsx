// app/page.tsx
"use client";

import { CallToAction } from "@/components/call-to-action";
import { Carousel } from "@/components/carousel";
import { GoFundMeSection } from "@/components/gofundme-section";
import { Hero } from "@/components/hero-section";
import { Hero as Hero2 } from "@/components/hero-section-2";
import { HighlightSection } from "@/components/highlight-section";
import OurJourneySection from "@/components/our-journey-section";
import { SponsorshipOpportunities } from "@/components/sponsorship-oppurtunities";

export default function Home() {
	return (
		<main className="relative">
			<Hero />
			{/* <Hero2 /> */}
			<HighlightSection />
			<SponsorshipOpportunities />
			<CallToAction />
			<GoFundMeSection />
			<OurJourneySection />
		</main>
	);
}
