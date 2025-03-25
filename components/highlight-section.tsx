"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	RocketLaunchIcon as RocketIcon,
	UsersIcon,
	ArrowTrendingUpIcon as TrendingUpIcon,
} from "@heroicons/react/24/solid"; // Install heroicons
import Image from "next/image";
import { MobilePadding } from "./mobile-padding";

const HighlightData = [
	{
		title: "Access Top Talent",
		description:
			"Connect with ambitious TU Delft students excelling in STEM and sports. Recruit your future leaders from our exceptional teams.",
		icon: RocketIcon,
		image: "/images/team-meeting.jpg", // Replace with your image
	},
	{
		title: "Boost Brand Visibility",
		description:
			"Gain international exposure at the prestigious European University Championship in Bologna, reaching a diverse and engaged audience.",
		icon: UsersIcon,
		image: "/images/bologna-city.jpg", // Replace with your image
	},
	{
		title: "Empower Students in STEM & Sports",
		description:
			"Champion equality and excellence by supporting students balancing demanding academics and athletic pursuits. Align your brand with a powerful message.",
		icon: TrendingUpIcon,
		image: "/images/women-stem.jpg", // Replace with your image
	},
];

export function HighlightSection() {
	return (
		<section className="py-16 bg-white">
			<MobilePadding>
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold mb-8 text-gray-800">
						Why Sponsor TU Delft Basketball Teams?
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{HighlightData.map((item, index) => (
							<Card
								key={index}
								className="shadow-md hover:shadow-lg transition-shadow duration-300"
							>
								<CardHeader>
									<CardTitle className="flex items-center justify-start text-xl font-medium">
										<item.icon className="h-6 w-6 mr-2 text-blue-500" />
										{item.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="text-gray-700">
									<div className="relative h-48 mb-4">
										<Image
											src={item.image}
											alt={item.title}
											layout="fill"
											className="rounded-md"
										/>
									</div>
									<p>{item.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</MobilePadding>
		</section>
	);
}
