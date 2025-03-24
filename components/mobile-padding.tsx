// components/mobile-padding.tsx
export function MobilePadding({ children }: { children: React.ReactNode }) {
	return <div className="px-4 sm:px-0">{children}</div>;
}
