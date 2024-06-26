/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "utils/**/*.{ts,tsx}"],
  plugins: [require("tailwindcss-animate")],
}
