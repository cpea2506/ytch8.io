import * as db from "$api/database/index.js";
import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.userid) {
        throw redirect(302, "/login");
    }

    const [categoryError, category] = await db.getAllCategory();

    if (categoryError) {
        return;
    }

    return {
        genres: category.data,
    };
};

export const actions: Actions = {
    default: () => {
        return;
    },
};
