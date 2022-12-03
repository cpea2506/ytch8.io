import type { LayoutServerLoad } from "./$types.js";
import * as db from "$api/db/index.js";
import { redirect, type Actions } from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({ locals }) => {
    if (!locals.userid) {
        return;
    }

    const [error, result] = await db.getUser(locals.userid);

    if (error) {
        return;
    }

    return {
        user: result.data,
    };
};

export const actions: Actions = {
    logout: async ({ cookies, locals }) => {
        cookies.delete("userid");
        locals.userid = null;

        throw redirect(303, "/");
    },
};
