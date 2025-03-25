"use client";

import { useState } from "react";
import WTeamSection from "@/components/w-team-section";
import MTeamSection from "@/components/m-team-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MobilePadding } from "@/components/mobile-padding";
import { Carousel } from "@/components/carousel";

export default function TeamPage() {
	const [activeTab, setActiveTab] = useState("women");

	return (
		<main className="relative">
			<div className="container mx-auto py-12">
				<MobilePadding>
					<Carousel />
					<section className="mb-12">
						<h1 className="text-4xl font-bold text-center mb-8 text-white">
							Meet Our Teams
						</h1>
						<p className="text-white text-center text-lg">
							Get to know the incredible student-athletes who make up the TU
							Delft Basketball program.
						</p>
					</section>
				</MobilePadding>

				<div className="flex justify-center">
					<Tabs
						defaultValue="women"
						className="w-[450px] md:w-[1200px] flex justify-center"
					>
						<TabsList>
							<TabsTrigger value="women">Women's Team</TabsTrigger>
							<TabsTrigger value="men">Men's Team</TabsTrigger>
						</TabsList>
						<TabsContent value="women">
							<WTeamSection />
						</TabsContent>
						<TabsContent value="men">
							<MTeamSection />
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</main>
	);
}
