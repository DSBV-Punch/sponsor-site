// components/team-display.tsx
import Image from "next/image";
import Link from "next/link";
import {
	FaLinkedin as Linkedin,
	FaInstagram as Instagram,
} from "react-icons/fa";
import { MobilePadding } from "./mobile-padding";

interface TeamMember {
	name: string;
	jerseyNumber: string;
	studyProgram: string;
	position: string;
	bio: string;
	imageUrl: string;
	linkedinUrl?: string;
	socialUrl?: string;
}

interface TeamDisplayProps {
	teamMembers: TeamMember[];
}

export function TeamDisplay({ teamMembers }: TeamDisplayProps) {
	return (
		<MobilePadding>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{teamMembers.map((member, index) => (
					<div
						key={index}
						className="bg-white rounded-md shadow-md p-4 flex flex-col"
					>
						<div className="relative h-64 w-full mb-4">
							<Image
								src={member.imageUrl}
								alt={member.name}
								layout="fill"
								objectFit="cover"
								className="rounded-md"
							/>
						</div>
						<h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
						<p className="text-gray-600">
							<strong>Jersey:</strong> {member.jerseyNumber}
						</p>
						<p className="text-gray-600">
							<strong>Study:</strong> {member.studyProgram}
						</p>
						<p className="text-gray-600">
							<strong>Position:</strong> {member.position}
						</p>
						<p className="text-gray-700 mt-2">{member.bio}</p>

						{/* Social Links */}
						<div className="mt-4 flex justify-start space-x-4">
							{member.linkedinUrl && (
								<Link
									href={member.linkedinUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Linkedin className="text-blue-00 hover:text-blue-700" />
								</Link>
							)}
							{member.socialUrl && (
								<Link
									href={member.socialUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Instagram className="text-pink-500 hover:text-pink-700" />
								</Link>
							)}
						</div>
					</div>
				))}
			</div>
		</MobilePadding>
	);
}
