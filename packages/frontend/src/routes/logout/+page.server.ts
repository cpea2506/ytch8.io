import type { PageServerLoad } from "./$types.js";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ cookies, locals }) => {
    cookies.delete("userid", { path: "/" });
    locals.userid = null;

    throw redirect(303, "/");
};
