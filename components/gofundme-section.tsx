"use client";

import { Button } from "@/components/ui/button";
import { HeartIcon } from "@heroicons/react/24/solid";

export function GoFundMeSection() {
	const raisedAmount = 1910; // Replace with current amount raised
	const goalAmount = 8500; // Replace with the goal amount
	const progress = ((raisedAmount / goalAmount) * 100).toFixed(2); // Calculate percentage

	return (
		<section className="py-16 bg-blue-50">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-semibold mb-4 text-blue-800">
					Support Our Journey Directly
				</h2>
				<p className="text-gray-700 mb-8">
					Every contribution, big or small, helps us cover essential travel and
					participation costs for the European University Championship in
					Bologna.
				</p>

				{/* Progress Component */}
				<div className="relative w-full max-w-md mx-auto mb-8">
					<div className="bg-gray-200 rounded-full overflow-hidden h-6">
						{/* Increased height of the progress bar */}
						<div
							className="bg-gradient-to-r from-green-400 to-blue-500 h-6 rounded-full transition-all duration-500 ease-out"
							style={{ width: `${progress}%` }}
						></div>
					</div>
					<div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between text-base font-medium text-gray-700 px-3">
						{/* Added horizontal padding */}
						<span className="">€{raisedAmount}</span>
						<span className="">€{goalAmount}</span>
					</div>
				</div>

				<Button size="lg" className="bg-red-500 hover:bg-red-700 text-white">
					<a
						href="https://gofund.me/6ed35a79"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center"
					>
						<HeartIcon className="h-5 w-5 mr-2" />
						Donate on GoFundMe
					</a>
				</Button>
			</div>
		</section>
	);
}
