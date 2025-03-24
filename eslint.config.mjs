import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		files: [
			"app/page.tsx",
			"components/navbar.tsx",
			"components/highlight-section.tsx",
			"components/call-to-action.tsx",
			"components/sponsorship-oppurtunities.tsx",
			"components/hero-section.tsx",
		],
		rules: {
			"@typescript-eslint/no-unused-vars": "off", // Disable for unused variables
			"react/no-unescaped-entities": "off", // Disable for unescaped apostrophes
		},
	},
];

export default eslintConfig;
