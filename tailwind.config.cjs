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
      },
   },
   plugins: [],
};
