import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import router from "next/router";
import { MobilePadding } from "./mobile-padding";
export function Hero() {
	return (
		<section className="relative py-14 sm:py-64 overflow-hidden">
			<MobilePadding>
				<div className="absolute inset-0 bg-[url('/images/basketball-court.jpg')] bg-cover bg-center opacity-30 py-80" />
				<div className="container relative mx-auto text-center">
					<div className="max-w-2xl mx-auto">
						<h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl lg:text-6xl">
							Sponsor TU Delft Women's Basketball:
							<span className="text-red-600">Road to EUC Bologna 2025</span>
						</h1>
						<p className="mt-6 text-lg text-gray-700 mb-8">
							Help our exceptional team of student-athletes represent TU Delft
							at the European University Championship. Your support empowers
							women in STEM and sports while gaining international brand
							exposure.
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
			</MobilePadding>
		</section>
	);
}
