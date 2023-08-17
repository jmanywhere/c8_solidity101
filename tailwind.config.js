/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  theme: {
    extend: {},
  },
  daisyui:{
    base: false,
  },
  plugins: [require("daisyui")],
}

