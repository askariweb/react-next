module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	purge: {
		enabled: false, 
	},
	theme: {
        screen:{
            sm:'480px',
            md:'768px',
            lg:'976px',
            xl:'1440px',

        },
		container: {
			center: true,
		},
		extend: {},
	},
	plugins: [],
};
