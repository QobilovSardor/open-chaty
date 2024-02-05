/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			"fontFamily": {
				'Inter': 'Inter',
				'GeneralSans': 'GeneralSans-Semibold',
				'GeneralSans-Regular': 'GeneralSans-Regular'
			},
			"lineHeight": {
				'160': '160%',
			}
		},
	},
	plugins: [],
}