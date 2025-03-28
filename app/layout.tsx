import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { GradientBG } from "@/components/gradiant-bg";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Sponsor EUC Bologna 2025",
	description:
		"Sponsor Punch Basketball (TU Delft's Student Basketball association} on their road to conquer EUC Bologna 2025",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				<GradientBG>
					{children}
					<Footer />
				</GradientBG>
				<ScrollToTop />
			</body>
		</html>
	);
}
