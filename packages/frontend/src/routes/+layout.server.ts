import type { LayoutServerLoad } from "./$types.js";
import * as db from "$api/database/index.js";

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
