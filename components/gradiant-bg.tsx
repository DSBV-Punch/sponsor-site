// components/mobile-padding.tsx
export function GradientBG({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-gradient-to-br from-purple-500 via-red-300 to-pink-800 min-h-screen overflow-hidden relative">
			<div className="absolute inset-0 pointer-events-none bg-[url('/patterns/bball.svg')] bg-center opacity-10 animate-[pan_20s_linear_infinite]"></div>

			{children}
		</div>
	);
}
