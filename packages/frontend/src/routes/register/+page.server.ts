import type { Actions, PageServerLoad } from "./$types.js";
import { redirect } from "@sveltejs/kit";
import { invalid } from "@sveltejs/kit";
import * as db from "$api/database/index.js";
import { GITHUB_CLIENT_ID } from "$env/static/private";

const GH_AUTH_URL = "https://github.com/login/oauth/authorize";

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.userid) {
        throw redirect(303, "/");
    }
};

export const actions: Actions = {
    register: async ({ request }) => {
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

    loginWithGithub: () => {
        throw redirect(
            302,
            `${GH_AUTH_URL}?client_id=${GITHUB_CLIENT_ID}&state=2506`,
        );
    },
};
