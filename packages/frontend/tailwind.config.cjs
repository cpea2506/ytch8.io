/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{svelte, scss}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["cmyk", "forest"],
        darkTheme: "forest",
    },
};
