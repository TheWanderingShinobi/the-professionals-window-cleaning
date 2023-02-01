/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#1A202C",

					secondary: "#252C39",

					accent: "#C0E4F8",

					neutral: "#64666D",

					"base-100": "#FFFFFF",

					info: "#3ABFF8",

					success: "#36D399",

					warning: "#FBBD23",

					error: "#F87272",
				},
			},
		],
	},
	plugins: [require("@tailwindcss/forms")],
	plugins: [require("daisyui")],
};
