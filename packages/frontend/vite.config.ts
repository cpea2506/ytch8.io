import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
    plugins: [sveltekit()],
    optimizeDeps: {
        include: ["lodash.get", "lodash.isequal", "lodash.clonedeep"],
    },
};

export default config;
