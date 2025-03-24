// components/our-journey-section.tsx

import { Medal, Flag, Globe } from "lucide-react";
import { MobilePadding } from "./mobile-padding";

export default function OurJourneySection() {
	return (
		<section className="w-full bg-white py-20 px-4">
			<MobilePadding>
				<div className="max-w-4xl mx-auto text-center">
					{/* Heading */}
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Our Journey to the European Stage
					</h2>

					{/* Intro Paragraphs */}
					<p className="text-gray-700 text-lg md:text-xl mb-4">
						We are the women’s basketball team of Delft University of
						Technology, proudly representing Punch in both national competitions
						and student tournaments.
					</p>
					<p className="text-gray-700 text-lg md:text-xl mb-8">
						In 2024, our hard work paid off when we became Dutch Student
						Champions at GNSK in Rotterdam — earning us a place at the{" "}
						<span className="font-semibold">
							European University Championships (EUC)
						</span>{" "}
						in Bologna, Italy.
					</p>
				</div>

				{/* Timeline-style Steps */}
				<div className="max-w-5xl mx-auto mt-10 grid gap-8 md:grid-cols-3 text-center">
					<div className="flex flex-col items-center">
						<Medal className="w-10 h-10 text-yellow-500 mb-2" />
						<h3 className="text-xl font-semibold">Dutch League Success</h3>
						<p className="text-gray-600 mt-2">
							Years of growth and competition in the Nederlandse Basketball Bond
							prepared us for the top level.
						</p>
					</div>

					<div className="flex flex-col items-center">
						<Flag className="w-10 h-10 text-red-500 mb-2" />
						<h3 className="text-xl font-semibold">GNSK 2024 Champions</h3>
						<p className="text-gray-600 mt-2">
							We took the title at the National Student Championships in
							Rotterdam 🏆 — securing our EUC spot.
						</p>
					</div>

					<div className="flex flex-col items-center">
						<Globe className="w-10 h-10 text-blue-600 mb-2" />
						<h3 className="text-xl font-semibold">EUC 2025: Bologna</h3>
						<p className="text-gray-600 mt-2">
							In July 2025, we’ll proudly represent TU Delft and the Netherlands
							against Europe’s best university teams.
						</p>
					</div>
				</div>
			</MobilePadding>
		</section>
	);
}
