/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary': '#5AC7AA',
				'secondary':'#242A33',
				'secondary-dark': '#5AC7AA',
				'tertiary':'#E5BB85',
				'quaternary':'#D1D0CB',
				'custom-brown': '#5C4C43',
				'custom-pink': '#D6C7C9',
				'custom-blue': '#2E9CAF',
				'custom-green': '#5AC7AA',
				'custom-orange': '#FFB578',
				'custom-red': '#972118',
				'custom-violet': '#372150',
				'custom-lila': '#AE6B8D',
			  },
		},
	},
	plugins: [require("daisyui")],
}
