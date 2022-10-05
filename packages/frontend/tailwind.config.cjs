/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{svelte, scss}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
};
