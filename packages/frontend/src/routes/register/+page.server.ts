import type { Actions, PageServerLoad } from "./$types.js";
import { redirect } from "@sveltejs/kit";
import { invalid } from "@sveltejs/kit";
import * as db from "$api/db";

export const actions: Actions = {
    default: async ({ request, event }) => {
        const formData = await request.formData();
        const email = formData.get("email");
        const username = formData.get("username");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirm-password");

        if (password !== confirmPassword) {
            return invalid(400, {
                error: true,
                message: "Password confirm do not match",
            });
        }

        const [error, data] = await db.register({ email, username, password });

        if (error) {
            return invalid(400, { error: true, message: error.message });
        }

        if (data) {
            throw redirect(303, "/login");
        }
    },
};