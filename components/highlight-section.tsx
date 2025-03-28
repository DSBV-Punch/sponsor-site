"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	RocketLaunchIcon as RocketIcon,
	UsersIcon,
	ArrowTrendingUpIcon as TrendingUpIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { MobilePadding } from "./mobile-padding";

const HighlightData = [
	{
		title: "Access Top Talent",
		description:
			"Connect with ambitious TU Delft students excelling in STEM and sports. Recruit your future leaders from our exceptional teams.",
		icon: RocketIcon,
		image: "/images/team-meeting.jpg",
	},
	{
		title: "Boost Brand Visibility",
		description:
			"Gain international exposure at the prestigious European University Championship in Bologna, reaching a diverse and engaged audience.",
		icon: UsersIcon,
		image: "/images/bologna-city.jpg",
	},
	{
		title: "Empower Students in STEM & Sports",
		description:
			"Champion equality and excellence by supporting students balancing demanding academics and athletic pursuits. Align your brand with a powerful message.",
		icon: TrendingUpIcon,
		image: "/images/students-stem.jpg",
	},
];

export function HighlightSection() {
	return (
		<section className="py-16 bg-gray-50">
			<MobilePadding>
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold mb-8 text-gray-900">
						Why Sponsor TU Delft Basketball Teams?
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{HighlightData.map((item, index) => (
							<Card
								key={index}
								className="shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg"
							>
								<CardHeader className="pb-2">
									<CardTitle className="flex items-center justify-start text-lg font-semibold text-gray-800">
										<item.icon className="h-5 w-5 mr-2 text-blue-600" />
										{item.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="text-gray-700">
									<div className="relative h-48 mb-4 rounded-md overflow-hidden">
										<Image
											src={item.image}
											alt={item.title}
											fill={true}
											style={{ objectFit: "cover" }}
											className="rounded-md transition-transform duration-300 hover:scale-105"
										/>
									</div>
									<p className="text-sm leading-relaxed">{item.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</MobilePadding>
		</section>
	);
}
