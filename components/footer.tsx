import Link from "next/link";
import {
	FaFacebookSquare as Facebook,
	FaInstagram as Instagram,
	FaLinkedin as Linkedin,
} from "react-icons/fa";
import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
	return (
		<footer className={cn("pt-20 pb-6 text-center text-white", className)}>
			<div className="container mx-auto">
				<p className="text-sm mb-2">
					&copy; {new Date().getFullYear()} TU Delft Women's Basketball | All
					rights reserved.
				</p>
				{/* Optional: Social Media Links */}
				<div className="flex justify-center space-x-4">
					<Link href="#" aria-label="Facebook">
						<Facebook className="h-5 w-5 hover:text-blue-500 transition-colors" />
					</Link>
					<Link href="#" aria-label="Instagram">
						<Instagram className="h-5 w-5 hover:text-pink-500 transition-colors" />
					</Link>
					<Link href="#" aria-label="LinkedIn">
						<Linkedin className="h-5 w-5 hover:text-blue-700 transition-colors" />
					</Link>
				</div>
			</div>
		</footer>
	);
}
