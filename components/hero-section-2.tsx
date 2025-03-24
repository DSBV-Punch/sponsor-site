import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import router from "next/router";
export function Hero() {
	return (
		<section className="relative py-64 overflow-hidden">
			<div className="absolute inset-0 bg-[url('/images/basketball-court.jpg')] bg-cover bg-center opacity-30 py-80" />
			<div className="container relative mx-auto text-center">
				<div className="max-w-2xl mx-auto">
					{/* Headline */}
					<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
						Help TU Delft Women’s Basketball Team Reach the European
						Championship!🇪🇺🏀
					</h1>

					{/* Quick Summary */}
					<p className="text-lg md:text-xl text-gray-600 mb-8">
						After becoming Dutch student champions in 2024, Punch D1 has
						officially qualified for the European University Championship in
						Bologna 🇮🇹.
						<br className="hidden md:block" /> We’re seeking sponsors and
						supporters to help us get there!
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col md:flex-row justify-center gap-4">
						<Button
							onClick={() => router.push("/sponsor")}
							className="text-lg inline- px-6 py-3 h-full hover:bg-red-500"
						>
							Become a Sponsor ❤️
							<ArrowRight className="ml-2 w-5 h-5" />
						</Button>
						<Link
							href="https://gofund.me/6ed35a79"
							target="_blank"
							rel="noopener noreferrer"
							className="text-lg inline-block px-6 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition"
						>
							Support the Team ☕
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
