/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                blue: {
                    950: '#04030B',
                },
                teal: {
                    550: '#00e0bb',
                },
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            animation: {
                'shiny-ball': 'shiny-ball 3s linear infinite',
            },
            keyframes: {
                'shiny-ball': {
                    '0%': { transform: 'rotate(0deg); scale(1)', opacity: '0.7' },
                    '50%': { opacity: '0.4', transform: 'scale(1.2)' },
                    '100%': { transform: 'rotate(360deg); scale(1)', opacity: '0.7' },
                },
            },
        },
    },
    plugins: [],
};
