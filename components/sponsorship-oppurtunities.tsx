"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	HeartIcon as CheckCircleIcon,
	StarIcon,
	// SparklesIcon as DiamondIcon,
} from "@heroicons/react/24/solid";
import { Gem as DiamondIcon } from "lucide-react";
import { MobilePadding } from "./mobile-padding";

const SponsorshipPackages = [
	{
		name: "Gold Sponsor",
		price: "€5,000+",
		description:
			"Our highest level of partnership, offering maximum visibility and impact.",
		features: [
			"Prominent logo placement on team jerseys",
			"Dedicated social media posts and website mentions",
			"Opportunity to host a team event or workshop",
			"VIP access to all games and events",
			"Inclusion in press releases and media coverage",
		],
		icon: DiamondIcon,
		color: "yellow-500",
	},
	{
		name: "Silver Sponsor",
		price: "€2,500",
		description:
			"A valuable partnership with significant brand exposure and engagement.",
		features: [
			"Logo placement on team website and social media",
			"Regular social media mentions",
			"Opportunity to distribute promotional materials at games",
			"Tickets to all home games",
		],
		icon: StarIcon,
		color: "gray-300",
	},
	{
		name: "Bronze Sponsor",
		price: "€1,000",
		description: "A great way to support the team and gain brand recognition.",
		features: [
			"Logo placement on team website",
			"Social media shout-outs",
			"Tickets to select home games",
		],
		icon: CheckCircleIcon,
		color: "red-600",
	},
];

export function SponsorshipOpportunities() {
	return (
		<section className="py-16 bg-gray-50">
			<MobilePadding>
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold mb-8 text-gray-800">
						Sponsorship Opportunities
					</h2>
					<p className="text-gray-700 mb-8">
						Partner with TU Delft Women's Basketball and gain valuable exposure
						while supporting our team's journey to the European University
						Championship.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{SponsorshipPackages.map((packageItem, index) => (
							<Card
								key={index}
								className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
							>
								<CardHeader className="flex flex-col items-center">
									{/* Icon Above Title */}
									{packageItem.icon && (
										<packageItem.icon
											className={`h-8 w-8 mb-2 text-${packageItem.color} text-amber`}
										/>
									)}
									<CardTitle className="text-2xl font-semibold">
										{packageItem.name}
									</CardTitle>
								</CardHeader>
								<CardContent className="flex-grow">
									<div className="text-gray-700 mb-4">
										<p className="text-xl font-bold">{packageItem.price}</p>
										<p className="mt-2">{packageItem.description}</p>
									</div>
									<ul className="list-disc list-inside text-gray-600 mb-4">
										{packageItem.features.map((feature, i) => (
											<li key={i}>{feature}</li>
										))}
									</ul>
								</CardContent>
								{/* Button at the Same Level */}
								<div className="mt-auto p-4">
									<Button
										className={`w-full bg-red-600 hover:bg-red-900 text-white`}
									>
										Become a {packageItem.name}!
									</Button>
								</div>
							</Card>
						))}
					</div>
				</div>
			</MobilePadding>
		</section>
	);
}
