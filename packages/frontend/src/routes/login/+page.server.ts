import type { Actions } from "./$types.js";
import * as db from "$api/db";
import { invalid, redirect } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");

        const [error, result] = await db.login({ email, password });

        if (error) {
            return invalid(400, { error: true, message: error.message });
        }

        if (result) {
            cookies.set("sessionId", result.data);

            throw redirect(303, "/");
        }
    },
};
