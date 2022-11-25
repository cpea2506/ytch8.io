import type { Actions, PageServerLoad } from "./$types.js";
import * as db from "$api/db";
import { invalid, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.userid) {
        throw redirect(303, "/");
    }

    const [error, data] = await db.getUser(locals.userid);

    if (error) {
        return;
    }

    return {
        user: data,
    };
};

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");

        const [error, result] = await db.login({ email, password });

        if (error) {
            return invalid(400, { error: true, message: error.message });
        }

        if (result) {
            cookies.set("userid", result.data);

            throw redirect(303, "/");
        }
    },
};
