import axios from "$api/index.js";
import { fetchPcall } from "./utils.js";

export async function login(data: GoogleData) {
    return await fetchPcall(axios.post, "/user/login/google", data);

}

