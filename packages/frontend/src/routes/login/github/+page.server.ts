import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "$env/static/private";
import * as db from "$api/database/index.js";
import type { PageServerLoad } from "./$types.js";
import { error, invalid, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ url, cookies }) => {
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");

    if (code && state) {
        const [tokenError, accessToken] = await db.gh.getAccesToken({
            client_id: GITHUB_CLIENT_ID,
            client_secret: GITHUB_CLIENT_SECRET,
            code,
            state,
        });

        if (tokenError) {
            throw error(400, tokenError);
        }

        const [userError, { name, login, avatar_url }] = await db.gh.getUser(
            accessToken,
        );

        if (userError) {
            throw error(400, userError);
        }

        const [loginError, result] = await db.gh.login({
            name,
            login,
            avatar_url,
        });

        if (loginError) {
            return invalid(400, { error: true, message: loginError.message });
        }

        if (result) {
            cookies.set("userid", result.data, { path: "/" });

            throw redirect(302, "/");
        }
    }
};
