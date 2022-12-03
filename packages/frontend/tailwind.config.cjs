/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{svelte,scss}",
        "../../node_modules/flowbite-svelte/**/*.{svelte,html,js,ts}",
    ],
    plugins: [require("flowbite/plugin")],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                primary: "#ff2e51",
                secondary: "#2e8eff",
                dim: {
                    DEFAULT: "#cdcdcd",
                    100: "#606060",
                    200: "#858585",
                },
                white: {
                    DEFAULT: "#ffffff",
                    100: "#f4f4f4",
                },
            },
        },
    },
};
