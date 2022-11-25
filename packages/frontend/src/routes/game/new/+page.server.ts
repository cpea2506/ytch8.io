import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.userid) {
        throw redirect(302, "/login");
    }
};
