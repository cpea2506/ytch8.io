import type { PageServerLoad } from "./$types.js";
import * as db from "$api/database/index.js";

export const load: PageServerLoad = async () => {
    const [categoryError, category] = await db.getAllCategory();

    if (categoryError) {
        return;
    }

    return {
        genres: category.data,
    };
};
