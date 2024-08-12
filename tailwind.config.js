/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'system-ui', 'sans-serif']
		},
		extend: {
			spacing: {
				'header-height': '4rem'
			},
			colors: {
				'bg-body': '#F0F2F5',
				'text-color': '#404145'
			}
		},
	},
	plugins: [],
}
