import type { Actions, PageServerLoad } from "./$types.js";
import * as db from "$api/db/index.js";
import { invalid, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.userid) {
        throw redirect(303, "/");
    }
};

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");

        const [error, result] = await db.login({ data: { email, password } });

        if (error) {
            return invalid(400, { error: true, message: error.message });
        }

        if (result) {
            cookies.set("userid", result.data);

            throw redirect(303, "/");
        }
    },
};
