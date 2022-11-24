import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const userid = event.cookies.get("userid");

    event.locals.userid = userid;

    return resolve(event);
};
