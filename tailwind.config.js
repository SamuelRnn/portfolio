/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				main: '"Work Sans", sans-serif;',
			},
			fontWeight: {
				titles: '900',
			},
			colors: {
				accent: 'rgb(171 64 96)',
				main: {
					dark: 'rgb(17 17 17)',
					mid: 'rgb(26 24 29)',
				},
			},
			width: {
				box: 'min(1024px, 95%)',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
}
