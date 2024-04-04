/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				black: "#222222",
				beige2: "#EFECE3",
				blacky: "#656565",
				beige: "#E9E3D8",
				lightBeige: "#EFECE8",
			},

			fontFamily: {
				Source: ["DM Sans", "sans-serif"],
				Poppins: ["Poppins", "sans-serif"],
				IvyOra: ["IvyOra", "Arial", "sans-serif"],
				IvyLight: ["IvyOra Display", "IvyOra", "sans-serif"],
				SloopScript: ["SloopScript", "Arial", "sans-serif"],
				Inter: [],
			},
		},
		screens: {
			xs: "375px",
			xx: '425px',
			ss: "480px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1440px",
		},
	},
	plugins: [],
};
