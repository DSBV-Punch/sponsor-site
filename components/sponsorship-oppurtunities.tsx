// components/SponsorshipOpportunities.tsx
"use client";

import Link from "next/link"; // Import Link
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	HeartIcon as CheckCircleIcon,
	StarIcon,
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
		color: "yellow-500", // Note: text-yellow-500 needs to be used correctly
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
		color: "gray-400", // Adjusted for better visibility if needed
	},
	{
		name: "Bronze Sponsor",
		price: "€1,000",
		description: "A great way to support the teams and gain brand recognition.",
		features: [
			"Logo placement on team website",
			"Social media shout-outs",
			"Tickets to select home games",
		],
		icon: CheckCircleIcon,
		color: "orange-600", // Changed from red for bronze feel
	},
];

export function SponsorshipOpportunities() {
	return (
		<section id="sponsorship" className="py-16 bg-gray-50">
			{" "}
			{/* Added id */}
			<MobilePadding>
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold mb-8 text-gray-800">
						Sponsorship Opportunities
					</h2>
					<p className="text-gray-700 mb-8 max-w-3xl mx-auto">
						{" "}
						{/* Added max-width */}
						Partner with TU Delft Basketball and gain valuable exposure while
						supporting our teams' journey to the European University
						Championship. Choose the level that best suits your goals.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{SponsorshipPackages.map((packageItem, index) => {
							// Construct the subject query parameter
							const subjectQuery = encodeURIComponent(
								`${packageItem.name} Inquiry`
							);
							const contactHref = `/contact?subject=${subjectQuery}`;

							// Construct Tailwind color class dynamically (requires full class name)
							// Note: Dynamic class generation like `text-${packageItem.color}` might not work
							// with Tailwind's purging. Define full classes or use inline styles if needed.
							// Let's map them explicitly for safety:
							const iconColorClass =
								{
									"yellow-500": "text-yellow-500",
									"gray-400": "text-gray-400",
									"orange-600": "text-orange-600",
								}[packageItem.color] || "text-gray-500"; // Fallback color

							return (
								<Card
									key={index}
									className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col text-left" // Align text left
								>
									<CardHeader className="flex flex-col items-center text-center pt-6">
										{" "}
										{/* Center header */}
										{packageItem.icon && (
											<packageItem.icon
												className={`h-10 w-10 mb-3 ${iconColorClass}`} // Adjusted size/margin
												aria-hidden="true"
											/>
										)}
										<CardTitle className="text-2xl font-semibold">
											{packageItem.name}
										</CardTitle>
									</CardHeader>
									<CardContent className="flex-grow px-6 pb-6">
										{" "}
										{/* Adjusted padding */}
										<div className="text-center mb-4">
											{" "}
											{/* Center price/desc */}
											<p className="text-xl font-bold text-gray-800">
												{packageItem.price}
											</p>
											<p className="mt-2 text-gray-600">
												{packageItem.description}
											</p>
										</div>
										<ul className="space-y-2 text-gray-600 mb-6">
											{" "}
											{/* Use space-y */}
											{packageItem.features.map((feature, i) => (
												<li key={i} className="flex items-start">
													<CheckCircleIcon
														className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
														aria-hidden="true"
													/>
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</CardContent>
									{/* Button at the Same Level */}
									<div className="mt-auto p-6 pt-0">
										{" "}
										{/* Adjusted padding */}
										<Button
											asChild // Render the Link child
											className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3" // Adjusted styles
											size="lg" // Use shadcn size
										>
											<Link href={contactHref}>
												Become a {packageItem.name}!
											</Link>
										</Button>
									</div>
								</Card>
							);
						})}
					</div>
				</div>
			</MobilePadding>
		</section>
	);
}
