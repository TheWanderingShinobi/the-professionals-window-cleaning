/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#274c77",

          secondary: "#6096ba",

          accent: "#a3cef1",

          neutral: "#8b8c89",

          "base-100": "#e7ecef",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/forms")],
  plugins: [require("daisyui")],
};
