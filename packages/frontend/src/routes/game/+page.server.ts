import type { PageServerLoad } from "../$types.js";

export const load: PageServerLoad = ({ locals }) => {
    return { userid: locals.userid };
};
