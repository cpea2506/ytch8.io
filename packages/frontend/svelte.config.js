import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({ postcss: true }),

    kit: {
        trailingSlash: "always",
        adapter: adapter(),
        alias: {
            $components: "src/lib/components",
            $types: "src/lib/types",
            $styles: "src/lib/styles",
            $routes: "src/routes",
        },
    },
};

export default config;
