"use client";

import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Install lucide-react
import Link from "next/link";

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "Sponsorship", href: "/sponsorship" },
	{ label: "Team", href: "/team" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
];

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
			{/* Background color with slight transparency, blur effect and shadow */}
			<div className="container mx-auto py-4 px-6 flex items-center justify-between">
				{/* Logo (replace with your logo or text) */}
				<Link href="/" className="text-2xl font-bold text-gray-900">
					TU Delft Basketball
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-6">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
						>
							{item.label}
						</Link>
					))}
				</nav>

				{/* Mobile Navigation (Dialog) */}
				<Dialog open={isOpen} onOpenChange={setIsOpen}>
					<DialogTrigger asChild className="md:hidden">
						<Button variant="outline" size="icon">
							<Menu className="h-5 w-5" />
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-lg bg-white">
						{/* Add DialogTitle */}
						<DialogTitle>Navigation</DialogTitle>
						{/* Remove one of the buttons  */}
						<nav className="flex flex-col space-y-4 py-4">
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
									onClick={() => setIsOpen(false)}
								>
									{item.label}
								</Link>
							))}
						</nav>
					</DialogContent>
				</Dialog>
			</div>
		</header>
	);
}
