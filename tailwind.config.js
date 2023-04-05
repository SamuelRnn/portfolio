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
					900: 'rgb(26 26 28) ',
				},
			},
			width: {
				box: 'min(1024px, 100%)',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
}
