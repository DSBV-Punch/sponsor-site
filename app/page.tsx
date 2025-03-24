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
		<div className="bg-gradient-to-br from-purple-500 via-red-300 to-pink-800 min-h-screen overflow-hidden relative">
			<div className="absolute inset-0 pointer-events-none bg-[url('/patterns/bball.svg')] bg-center opacity-10 animate-[pan_10s_linear_infinite]"></div>

			<main className="relative">
				<Hero />
				{/* <Hero2 /> */}
				<HighlightSection />
				<SponsorshipOpportunities />
				<CallToAction />
				<GoFundMeSection />
				<OurJourneySection />
			</main>
		</div>
	);
}
