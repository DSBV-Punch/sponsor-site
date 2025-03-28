// app/page.tsx
"use client";

import { CallToAction } from "@/components/call-to-action";
import { Carousel } from "@/components/carousel";
import { CountdownTimer } from "@/components/countdown_timer";
import { GoFundMeSection } from "@/components/gofundme-section";
import { GradientBG } from "@/components/gradiant-bg";
import { Hero } from "@/components/hero-section";
import { Hero as Hero2 } from "@/components/hero-section-2";
import { HighlightSection } from "@/components/highlight-section";
import OurJourneySection from "@/components/our-journey-section";
import { SponsorScroll } from "@/components/sponsor_scroll";
import { SponsorshipOpportunities } from "@/components/sponsorship-oppurtunities";
import { WhySponsor } from "@/components/why-sponsor";

export default function Home() {
	return (
		<main className="relative">
			<Hero />
			{/* <Hero2 /> */}
			<HighlightSection />
			<CountdownTimer />
			<SponsorScroll />
			<SponsorshipOpportunities />
			<CallToAction />
			<GoFundMeSection />
			<OurJourneySection />
		</main>
	);
}
