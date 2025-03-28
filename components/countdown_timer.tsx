// components/CountdownTimer.tsx
"use client";

import React, { useState, useEffect } from "react";

// Represents the individual time units
interface TimeValues {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

// Represents the overall state of the countdown
interface CountdownState {
	timeLeft: TimeValues;
	isFinished: boolean;
}

interface CountdownTimerProps {
	// Optional message to display when the countdown finishes
	completionMessage?: string;
}

// *** HARDCODED TARGET DATE ***
// IMPORTANT: Set the correct target date/time for EUC 2025!
// Use ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ or timezone offset)
// Example: July 15, 2025 at 9:00 AM Central European Summer Time (CEST = UTC+2)
const EUC_START_DATE = "2025-07-06T09:00:00+02:00";
// const EUC_START_DATE = "2024-03-28T18:00:00+01:00"; // Example for testing completion

// Helper function to calculate time difference and finished state
const calculateCountdownState = (): CountdownState => {
	const difference = +new Date(EUC_START_DATE) - +new Date();

	if (difference > 0) {
		return {
			timeLeft: {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			},
			isFinished: false,
		};
	} else {
		// Time is up or has passed
		return {
			timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },
			isFinished: true,
		};
	}
};

export function CountdownTimer({
	completionMessage = "Let the games begin!", // Updated default message slightly
}: CountdownTimerProps) {
	// State now holds both timeLeft and isFinished flag
	const [countdownState, setCountdownState] = useState<CountdownState>(() =>
		calculateCountdownState()
	);
	const [isClient, setIsClient] = useState(false); // Ensure hydration safety

	useEffect(() => {
		// Set isClient to true only after mounting on the client
		setIsClient(true);

		// Calculate initial state immediately after mount on client
		// This ensures the client's current time is used accurately from the start
		setCountdownState(calculateCountdownState());

		// Only set up the interval if the countdown is not already finished
		let timer: NodeJS.Timeout | undefined;
		if (!calculateCountdownState().isFinished) {
			timer = setInterval(() => {
				setCountdownState(calculateCountdownState());
			}, 1000);
		} else {
			// If already finished on mount, ensure state reflects this
			setCountdownState({
				timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },
				isFinished: true,
			});
		}

		// Clear interval on component unmount
		return () => {
			if (timer) {
				clearInterval(timer);
			}
		};
	}, []); // Empty dependency array: effect runs only once on mount

	// Render nothing on the server or before hydration to prevent mismatch
	if (!isClient) {
		// You could render a static placeholder or skeleton here if desired
		// For simplicity, returning null avoids hydration errors.
		return null;
	}

	// Helper component for rendering each time unit
	const TimeUnit = ({ value, label }: { value: number; label: string }) => (
		<div className="flex flex-col items-center p-2 md:p-3 lg:p-4 bg-muted/50 rounded-lg min-w-[60px] md:min-w-[80px]">
			<span className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary tabular-nums">
				{/* Pad single digits with a leading zero */}
				{String(value).padStart(2, "0")}
			</span>
			<span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
				{label}
			</span>
		</div>
	);

	return (
		<section className="py-12 md:py-16">
			<div className="container mx-auto px-4 md:px-6 text-center">
				<h2 className="text-2xl md:text-3xl font-bold mb-6">
					{/* Change title slightly if finished */}
					{countdownState.isFinished
						? "The Championship is Here!"
						: "Countdown to Bologna!"}
				</h2>
				{/* Always render the timer display */}
				<div className="flex justify-center items-center gap-2 md:gap-4">
					<TimeUnit value={countdownState.timeLeft.days} label="Days" />
					<TimeUnit value={countdownState.timeLeft.hours} label="Hours" />
					<TimeUnit value={countdownState.timeLeft.minutes} label="Mins" />
					<TimeUnit value={countdownState.timeLeft.seconds} label="Secs" />
				</div>

				{/* Conditionally render the completion message below the timer if finished */}
				{countdownState.isFinished && (
					<div className="mt-6 text-center text-xl md:text-2xl font-semibold text-primary">
						{completionMessage}
					</div>
				)}
			</div>
		</section>
	);
}
