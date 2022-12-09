import type { Actions, PageServerLoad } from "./$types.js";
import * as db from "$api/database/index.js";
import { invalid, redirect } from "@sveltejs/kit";
import { GITHUB_CLIENT_ID } from "$env/static/private";

const GH_AUTH_URL = "https://github.com/login/oauth/authorize";

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.userid) {
        throw redirect(303, "/");
    }
};

export const actions: Actions = {
    login: async ({ request, cookies }) => {
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");

        const [error, result] = await db.login({ email, password });

        if (error) {
            return invalid(400, { error: true, message: error.message });
        }

        if (result) {
            cookies.set("userid", result.data, { path: "/" });

            throw redirect(303, "/");
        }
    },
    loginWithGithub: () => {
        throw redirect(
            302,
            `${GH_AUTH_URL}?client_id=${GITHUB_CLIENT_ID}&state=2506`,
        );
    },
};
