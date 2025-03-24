import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

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
				<div className="bg-gradient-to-br from-purple-500 via-red-300 to-pink-800 min-h-screen overflow-hidden relative">
					<div className="absolute inset-0 pointer-events-none bg-[url('/patterns/bball.svg')] bg-center opacity-10 animate-[pan_10s_linear_infinite]"></div>

					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
