import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async ({ params, locals }) => {
    return { ...params, userid: locals.userid };
};
