/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
	safelist: [
		{
			pattern: /(bg|to|from)-(green|blue|gray)-(400|700)/,
		},
	],
}
