import type { LayoutLoad } from "./$types.js";

export const load: LayoutLoad = ({ url }) => {
    const currentRoute = url.pathname;

    return { currentRoute };
};
