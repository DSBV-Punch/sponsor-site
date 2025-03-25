import { TeamDisplay } from "@/components/team-section";

const teamMembers = [
	{
		name: "Jane Doe",
		jerseyNumber: "12",
		studyProgram: "Aerospace Engineering",
		position: "Guard",
		bio: "Jane is a talented player passionate about aerospace engineering and women in STEM.",
		imageUrl: "/images/player1.jpg", // Replace with your actual image
		linkedinUrl: "https://www.linkedin.com/in/janedoe", // Add LinkedIn URL
		socialUrl: "https://instagram.com/janedoe", // Add social URL
	},
	{
		name: "Sarah Smith",
		jerseyNumber: "5",
		studyProgram: "Computer Science",
		position: "Forward",
		bio: "Sarah is a dedicated athlete with a passion for coding and cybersecurity.",
		imageUrl: "/images/player2.jpg", // Replace with your actual image
		linkedinUrl: "https://www.linkedin.com/in/sarahsmith", // Add LinkedIn URL
		socialUrl: "https://instagram.com/sarahsmith", // Add social URL
	},
	{
		name: "Jane Doe",
		jerseyNumber: "12",
		studyProgram: "Aerospace Engineering",
		position: "Guard",
		bio: "Jane is a talented player passionate about aerospace engineering and women in STEM.",
		imageUrl: "/images/player1.jpg", // Replace with your actual image
		linkedinUrl: "https://www.linkedin.com/in/janedoe", // Add LinkedIn URL
		socialUrl: "https://instagram.com/janedoe", // Add social URL
	},
	{
		name: "Sarah Smith",
		jerseyNumber: "5",
		studyProgram: "Computer Science",
		position: "Forward",
		bio: "Sarah is a dedicated athlete with a passion for coding and cybersecurity.",
		imageUrl: "/images/player2.jpg", // Replace with your actual image
		linkedinUrl: "https://www.linkedin.com/in/sarahsmith", // Add LinkedIn URL
		socialUrl: "https://instagram.com/sarahsmith", // Add social URL
	},
	{
		name: "Jane Doe",
		jerseyNumber: "12",
		studyProgram: "Aerospace Engineering",
		position: "Guard",
		bio: "Jane is a talented player passionate about aerospace engineering and women in STEM.",
		imageUrl: "/images/player1.jpg", // Replace with your actual image
		linkedinUrl: "https://www.linkedin.com/in/janedoe", // Add LinkedIn URL
		socialUrl: "https://instagram.com/janedoe", // Add social URL
	},
	{
		name: "Sarah Smith",
		jerseyNumber: "5",
		studyProgram: "Computer Science",
		position: "Forward",
		bio: "Sarah is a dedicated athlete with a passion for coding and cybersecurity.",
		imageUrl: "/images/player2.jpg", // Replace with your actual image
		linkedinUrl: "https://www.linkedin.com/in/sarahsmith", // Add LinkedIn URL
		socialUrl: "https://instagram.com/sarahsmith", // Add social URL
	},
	{
		name: "Jane Doe",
		jerseyNumber: "12",
		studyProgram: "Aerospace Engineering",
		position: "Guard",
		bio: "Jane is a talented player passionate about aerospace engineering and women in STEM.",
		imageUrl: "/images/player1.jpg", // Replace with your actual image
		linkedinUrl: "https://www.linkedin.com/in/janedoe", // Add LinkedIn URL
		socialUrl: "https://instagram.com/janedoe", // Add social URL
	},
	{
		name: "Sarah Smith",
		jerseyNumber: "5",
		studyProgram: "Computer Science",
		position: "Forward",
		bio: "Sarah is a dedicated athlete with a passion for coding and cybersecurity.",
		imageUrl: "/images/player2.jpg", // Replace with your actual image
		linkedinUrl: "https://www.linkedin.com/in/sarahsmith", // Add LinkedIn URL
		socialUrl: "https://instagram.com/sarahsmith", // Add social URL
	},
	{
		name: "Jane Doe",
		jerseyNumber: "12",
		studyProgram: "Aerospace Engineering",
		position: "Guard",
		bio: "Jane is a talented player passionate about aerospace engineering and women in STEM.",
		imageUrl: "/images/player1.jpg", // Replace with your actual image
		linkedinUrl: "https://www.linkedin.com/in/janedoe", // Add LinkedIn URL
		socialUrl: "https://instagram.com/janedoe", // Add social URL
	},
	{
		name: "Sarah Smith",
		jerseyNumber: "5",
		studyProgram: "Computer Science",
		position: "Forward",
		bio: "Sarah is a dedicated athlete with a passion for coding and cybersecurity.",
		imageUrl: "/images/player2.jpg", // Replace with your actual image
		linkedinUrl: "https://www.linkedin.com/in/sarahsmith", // Add LinkedIn URL
		socialUrl: "https://instagram.com/sarahsmith", // Add social URL
	},
	{
		name: "Jane Doe",
		jerseyNumber: "12",
		studyProgram: "Aerospace Engineering",
		position: "Guard",
		bio: "Jane is a talented player passionate about aerospace engineering and women in STEM.",
		imageUrl: "/images/player1.jpg", // Replace with your actual image
		linkedinUrl: "https://www.linkedin.com/in/janedoe", // Add LinkedIn URL
		socialUrl: "https://instagram.com/janedoe", // Add social URL
	},
	{
		name: "Sarah Smith",
		jerseyNumber: "5",
		studyProgram: "Computer Science",
		position: "Forward",
		bio: "Sarah is a dedicated athlete with a passion for coding and cybersecurity.",
		imageUrl: "/images/player2.jpg", // Replace with your actual image
		linkedinUrl: "https://www.linkedin.com/in/sarahsmith", // Add LinkedIn URL
		socialUrl: "https://instagram.com/sarahsmith", // Add social URL
	},
	// Add more team members here
];

export default function WTeamSection() {
	return (
		<div className="container mx-auto py-12">
			<TeamDisplay teamMembers={teamMembers} />
		</div>
	);
}
