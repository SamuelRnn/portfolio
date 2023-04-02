/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				titles: 'Titles',
				accent: 'Accent',
			},
			colors: {
				accent: 'rgb(171 64 96)',
				main: {
					dark: 'rgb(17 17 17)',
					700: 'rgb(35, 30, 32)',
				},
			},
			width: {
				box: 'min(1024px, 100%)',
			},
		},
	},
	plugins: [],
}
