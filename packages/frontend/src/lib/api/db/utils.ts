/* eslint-disable  @typescript-eslint/no-explicit-any */

import { AxiosError } from "axios";

/** Calls the Axios function `f` with the given arguments in *protected mode* */
export async function fetchPcall(f: AxiosFunction, ...p: any) {
    try {
        const res = await f(...p);

        return [null, res.data];
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error(error.response?.data);
            console.error(error.message);

            return [error.response?.data, null];
        }
    }

    // how this can be touched?
    return [null, null];
}
