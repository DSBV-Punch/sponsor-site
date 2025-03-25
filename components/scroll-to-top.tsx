// components/scroll-to-top.tsx
"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setVisible(window.scrollY > 200);
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			onClick={scrollToTop}
			className={`fixed bottom-4 right-4 z-50 p-3 rounded-full bg-black text-white shadow-lg transition-opacity ${
				visible ? "opacity-100" : "opacity-0 pointer-events-none"
			} hover:bg-gray-800`}
			aria-label="Scroll to top"
		>
			<ArrowUp className="w-10 h-10" />
		</button>
	);
}
