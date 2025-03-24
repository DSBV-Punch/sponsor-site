import { MobilePadding } from "./mobile-padding";

// components/why-sponsor.tsx
export function WhySponsor() {
	return (
		<section className="mb-12 bg">
			<MobilePadding>
				<h2 className="text-3xl font-semibold mb-6">Why Sponsor Us?</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Access to Tech Talent */}
					<div className="p-4 border rounded-md shadow-sm">
						<h3 className="text-xl font-semibold mb-2">Access Tech Talent</h3>
						<p className="text-gray-700">
							TU Delft is a top-tier university for engineering and innovation.
							Connect with ambitious students excelling in STEM.
						</p>
					</div>

					{/* Brand Visibility */}
					<div className="p-4 border rounded-md shadow-sm">
						<h3 className="text-xl font-semibold mb-2">Brand Visibility</h3>
						<p className="text-gray-700">
							Gain local and international exposure through our team's
							activities and the European University Championship.
						</p>
					</div>

					{/* Social Impact */}
					<div className="p-4 border rounded-md shadow-sm">
						<h3 className="text-xl font-semibold mb-2">Social Impact</h3>
						<p className="text-gray-700">
							Support women in STEM and sports, aligning your brand with
							equality and empowerment.
						</p>
					</div>

					{/* Unique Audience */}
					<div className="p-4 border rounded-md shadow-sm">
						<h3 className="text-xl font-semibold mb-2">Unique Audience</h3>
						<p className="text-gray-700">
							Reach a young, driven, and international audience of students and
							fans.
						</p>
					</div>
				</div>
			</MobilePadding>
		</section>
	);
}
