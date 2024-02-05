/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			"fontFamily": {
				'Inter': ['Inter', 'sans-serif'],
				'GeneralSans': ['GeneralSans-Semibold', 'sans-serif'],
				'GeneralSans-Regular': ['GeneralSans-Regular', 'sans-serif']
			},
			"lineHeight": {
				'160': '160%',
			},
			screens: {
				'lg-sm': '992px'
			}
		},
	},
	plugins: [],
}