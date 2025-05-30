"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { MobilePadding } from "./mobile-padding";

export function CallToAction() {
	return (
		<section className="relative py-24 bg-gray-900 text-white overflow-hidden">
			<MobilePadding>
				{/* Abstract Background Pattern */}
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.1),rgba(4,120,87,0.1))] z-0" />

				<div className="container relative mx-auto text-center z-10">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-6xl font-extrabold text-red-600 tracking-tight mb-8">
							Invest in Excellence
						</h1>
						<h2 className="text-4xl font-bold mb-4">
							Partner with TU Delft Basketball Teams
						</h2>
						<p className="text-xl text-gray-300 mb-12">
							Elevate your brand by supporting teams of exceptional
							student-athletes who embody dedication, teamwork, and academic
							achievement. Your investment fuels their journey to the European
							University Championship and showcases your commitment to
							excellence.
						</p>
						<Button
							size="lg"
							className="group bg-white text-gray-900 hover:bg-gray-100"
						>
							Discover Partnership Opportunities
							<ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
						</Button>
					</div>
				</div>
			</MobilePadding>
		</section>
	);
}
