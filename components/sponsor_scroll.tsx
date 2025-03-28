// components/SponsorScroll.tsx
"use client"; // Required for react-slick and its hooks

import React from "react";
import Slider from "react-slick"; // Import the Slider component
import Image from "next/image";
import Link from "next/link";

// --- React Slick CSS Imports ---
// IMPORTANT: Ensure these are imported globally, typically in layout.tsx or globals.css
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

// Define the structure for a single sponsor
interface Sponsor {
	name: string;
	type: "gold" | "silver" | "bronze"; // Kept for data structure, less relevant for display
	imagePath: string; // e.g., '/sponsors/logo-company-a.png'
	url: string; // e.g., 'https://www.companya.com'
}

// --- HARDCODED SPONSOR DATA ---
// !!! IMPORTANT: Replace this with your actual sponsor data !!!
const sponsorData: Sponsor[] = [
	{
		name: "Gold Sponsor Example",
		type: "gold",
		imagePath: "/images/sponsors/gold.png", // Replace with actual path e.g., /sponsors/gold-logo.png
		url: "https://goldsponsor.example.com", // Replace with actual URL
	},
	{
		name: "Silver Sponsor Example",
		type: "silver",
		imagePath: "/images/sponsors/silver.png", // Replace with actual path e.g., /sponsors/silver-logo.svg
		url: "https://silversponsor.example.com", // Replace with actual URL
	},
	{
		name: "Bronze Sponsor Example",
		type: "bronze",
		imagePath: "/images/sponsors/bronze.png", // Replace with actual path e.g., /sponsors/bronze-logo.jpg
		url: "https://bronzesponsor.example.com", // Replace with actual URL
	},
	{
		name: "Gold Sponsor Example",
		type: "gold",
		imagePath: "/images/sponsors/gold.png", // Replace with actual path e.g., /sponsors/gold-logo.png
		url: "https://goldsponsor.example.com", // Replace with actual URL
	},
	{
		name: "Silver Sponsor Example",
		type: "silver",
		imagePath: "/images/sponsors/silver.png", // Replace with actual path e.g., /sponsors/silver-logo.svg
		url: "https://silversponsor.example.com", // Replace with actual URL
	},
	{
		name: "Bronze Sponsor Example",
		type: "bronze",
		imagePath: "/images/sponsors/bronze.png", // Replace with actual path e.g., /sponsors/bronze-logo.jpg
		url: "https://bronzesponsor.example.com", // Replace with actual URL
	},
	{
		name: "Gold Sponsor Example",
		type: "gold",
		imagePath: "/images/sponsors/gold.png", // Replace with actual path e.g., /sponsors/gold-logo.png
		url: "https://goldsponsor.example.com", // Replace with actual URL
	},
	{
		name: "Silver Sponsor Example",
		type: "silver",
		imagePath: "/images/sponsors/silver.png", // Replace with actual path e.g., /sponsors/silver-logo.svg
		url: "https://silversponsor.example.com", // Replace with actual URL
	},
	{
		name: "Bronze Sponsor Example",
		type: "bronze",
		imagePath: "/images/sponsors/bronze.png", // Replace with actual path e.g., /sponsors/bronze-logo.jpg
		url: "https://bronzesponsor.example.com", // Replace with actual URL
	},
	{
		name: "Gold Sponsor Example",
		type: "gold",
		imagePath: "/images/sponsors/x.png", // Replace with actual path e.g., /sponsors/gold-logo.png
		url: "https://goldsponsor.example.com", // Replace with actual URL
	},
	{
		name: "Silver Sponsor Example",
		type: "silver",
		imagePath: "/images/sponsors/silver.png", // Replace with actual path e.g., /sponsors/silver-logo.svg
		url: "https://silversponsor.example.com", // Replace with actual URL
	},
	{
		name: "Bronze Sponsor Example",
		type: "bronze",
		imagePath: "/images/sponsors/bronze.png", // Replace with actual path e.g., /sponsors/bronze-logo.jpg
		url: "https://bronzesponsor.example.com", // Replace with actual URL
	},
	// Add more sponsors as needed. More sponsors = smoother infinite scroll.
];
// --- END OF HARDCODED SPONSOR DATA ---

// Define optional props (only title now)
interface SponsorScrollProps {
	title?: string; // Optional title for the section
}

export function SponsorScroll({
	title = "Our Valued Sponsors", // Default title if not provided
}: SponsorScrollProps) {
	// Settings for the react-slick carousel
	const settings = {
		dots: false, // Hide dots navigation
		arrows: false, // Hide arrows navigation
		infinite: true, // Enable infinite looping
		speed: 3000, // Transition speed (controls speed in linear mode)
		autoplay: true, // Enable automatic scrolling
		autoplaySpeed: 0, // Use 0 for continuous scroll with linear easing
		cssEase: "linear", // Smooth continuous scroll effect
		draggable: true, // Allow dragging to scroll
		swipeToSlide: false, // Allow swiping part way
		pauseOnHover: false, // Pause autoplay on hover
		slidesToShow: 7, // Default number of slides visible
		slidesToScroll: 1, // Scroll one slide at a time
		variableWidth: false, // Keep false unless logos vary wildly & need exact width
		responsive: [
			// Adjust slidesToShow for different screen sizes
			{
				breakpoint: 1280, // xl screens
				settings: {
					slidesToShow: 7,
				},
			},
			{
				breakpoint: 1024, // lg screens
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 768, // md screens
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 640, // sm screens
				settings: {
					slidesToShow: 3,
				},
			},
		],
	};

	// Handle the case where the hardcoded data is empty
	if (!sponsorData || sponsorData.length === 0) {
		return (
			<section className="py-12 md:py-16 bg-muted/30">
				<div className="container mx-auto px-4 md:px-6 text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
					<p className="text-muted-foreground">Sponsors coming soon!</p>
				</div>
			</section>
		);
	}

	// Ensure enough slides for infinite loop if needed (helps with smaller datasets)
	const baseSlidesToShow = settings.slidesToShow || 1; // Get base slidesToShow
	const displaySponsors =
		sponsorData.length > baseSlidesToShow
			? sponsorData
			: [...sponsorData, ...sponsorData, ...sponsorData].slice(
					0,
					baseSlidesToShow + 1
			  ); // Duplicate if too few

	return (
		// Added overflow-hidden to prevent any potential edge case overflows
		<section className="py-12 md:py-16 bg-muted/30 overflow-hidden">
			<div className="container mx-auto px-4 md:px-6">
				<h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
					{title}
				</h2>
				{/* Apply Slider component */}
				<Slider {...settings}>
					{displaySponsors.map((sponsor, index) => (
						// Each child of Slider is a slide. Add padding here for spacing.
						<div key={`${sponsor.url}-${index}`} className="px-3 md:px-4">
							<Link
								href={sponsor.url}
								target="_blank"
								rel="noopener noreferrer"
								className="
                  block outline-none focus:outline-none 
                  transition transform hover:scale-105 
                "
								aria-label={`Visit ${sponsor.name}`}
								// Prevent dragging the link itself interfering with slider drag
								onDragStart={(e) => e.preventDefault()}
							>
								<Image
									src={sponsor.imagePath}
									alt={`${sponsor.name} logo`}
									width={200} // Provide a base width hint for next/image
									height={80} // Provide a base height hint (adjust to match h- class)
									className="
                    h-16 md:h-20   /* Fixed height for consistency */
                    w-auto          /* Width adjusts to maintain aspect ratio */
                    mx-auto         /* Center image within the padded div */
                    object-contain  /* Fits logo within bounds without stretching */
                    grayscale 
                    opacity-80 
                    hover:grayscale-0 
                    hover:opacity-100 
                    transition 
                    duration-300 
                    ease-in-out
                  "
									// Add unoptimized prop if experiencing issues with external/SVG images in dev
									// unoptimized={sponsor.imagePath.endsWith('.svg')}
								/>
							</Link>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
