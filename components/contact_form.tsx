// components/ContactForm.tsx
"use client";

import React, { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner"; // For displaying notifications

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
import { sendEmailAction } from "@/actions/sendEmail"; // Adjust path if needed

// Re-use or define the schema (can also be imported)
const contactFormSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters long"),
	email: z.string().email("Invalid email address"),
	subject: z.string().min(3, "Subject must be at least 3 characters long"),
	message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
	const [isPending, startTransition] = useTransition(); // For Server Action loading state

	const form = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	const onSubmit = (values: ContactFormValues) => {
		startTransition(async () => {
			try {
				const result = await sendEmailAction(values);

				if (result.success) {
					toast.success(result.message || "Message sent successfully!");
					form.reset(); // Clear form on success
				} else {
					toast.error(result.message || "Failed to send message.");
					// Handle specific field errors if returned from action
					// if (result.errors) { ... }
				}
			} catch (error) {
				console.error("Form submission error:", error);
				toast.error("An unexpected error occurred.");
			}
		});
	};

	return (
		<Card className="w-full max-w-2xl mx-auto">
			<div className="p-6 space-y-6">
				<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
					Interested in sponsoring our teams or have a question? <br /> Fill out
					the form below!
				</p>
			</div>
			<CardHeader>
				<CardTitle>Contact Us</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
						<FormField
							control={form.control}
							name="subject"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Subject</FormLabel>
									<FormControl>
										<Input placeholder="Sponsorship Inquiry" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
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
						<Button type="submit" disabled={isPending} className="w-full">
							{isPending ? "Sending..." : "Send Message"}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
