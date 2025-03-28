// components/ContactForm.tsx
"use client";

import React, { useState, useTransition, useEffect } from "react"; // Import useEffect
import { useSearchParams } from "next/navigation"; // Import useSearchParams
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sendEmailAction } from "@/actions/sendEmail";

// Schema remains the same
const contactFormSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters long"),
	email: z.string().email("Invalid email address"),
	subject: z.string().min(3, "Subject must be at least 3 characters long"),
	message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
	const [isPending, startTransition] = useTransition();
	const searchParams = useSearchParams(); // Get search params object

	// Initialize the form
	const form = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "", // Initialize subject as empty
			message: "",
		},
	});

	// Effect to set the subject from query params after component mounts
	useEffect(() => {
		const subjectFromQuery = searchParams.get("subject");
		if (subjectFromQuery) {
			// Use setValue to update the form field
			// shouldValidate: false prevents validation trigger on this set
			// shouldDirty: false prevents marking the form as dirty just from this prefill
			form.setValue("subject", subjectFromQuery, {
				shouldValidate: false,
				shouldDirty: false,
			});
		}
		// Run this effect only when searchParams changes (or on initial load)
		// Adding form to dependency array as per react-hook-form recommendations
	}, [searchParams, form]);

	const onSubmit = (values: ContactFormValues) => {
		startTransition(async () => {
			try {
				const result = await sendEmailAction(values);

				if (result.success) {
					toast.success(result.message || "Message sent successfully!");
					form.reset(); // Clear form on success
					// Optionally clear the subject query param from URL? (More complex)
				} else {
					toast.error(result.message || "Failed to send message.");
					// Handle specific field errors if returned from action
					if (result.errors) {
						Object.entries(result.errors).forEach(([field, message]) => {
							if (field in form.control.fields) {
								form.setError(field as keyof ContactFormValues, {
									type: "manual",
									message,
								});
							}
						});
					}
				}
			} catch (error) {
				console.error("Form submission error:", error);
				toast.error("An unexpected error occurred.");
			}
		});
	};

	return (
		<Card className="w-full max-w-2xl mx-auto">
			<CardHeader>
				<CardTitle>Contact Us</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						{/* Name Field */}
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder="Your Name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* Email Field */}
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder="your.email@example.com"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* Subject Field */}
						<FormField
							control={form.control}
							name="subject"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Subject</FormLabel>
									<FormControl>
										{/* Input value will be controlled by react-hook-form */}
										<Input placeholder="Sponsorship Inquiry" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* Message Field */}
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Tell us how you'd like to support the teams..."
											className="min-h-[100px]"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* Submit Button */}
						<Button
							type="submit"
							disabled={isPending}
							className="w-full"
							size="lg"
						>
							{isPending ? "Sending..." : "Send Message"}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
