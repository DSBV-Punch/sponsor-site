"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
	"/images/w1.jpg",
	"/images/w2.jpg",
	"/images/w3.jpg",
	"/images/w4.jpg",
];

export function Carousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: "linear",
	};
	return (
		<div className="bg-red-400 py-12 h-auto">
			<div className="mt-12 relative h-auto w-full max-w-2xl mx-auto">
				<Slider {...settings}>
					{images.map((image, index) => (
						<div
							key={index}
							className="rounded-xl overflow-hidden shadow-lg mb-6"
						>
							<Image
								src={image}
								alt="TU Delft Women's Basketball Team celebrating"
								width={800}
								height={600}
								style={{ objectFit: "cover" }}
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}
