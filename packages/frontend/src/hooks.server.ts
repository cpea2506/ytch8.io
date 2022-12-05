import type { Handle, HandleServerError } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const userid = event.cookies.get("userid");

    if (userid) {
        event.locals.userid = userid;
    }

    return await resolve(event);
};

export const handleError: HandleServerError = ({ error }) => {
    const err = error as App.Error;

    return {
        message:
            err?.message ||
            "Oops! Look what you make me generate this page! :D",
        code: err?.code ?? "UNKNOWN",
    };
};
