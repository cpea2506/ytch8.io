import axios from "$api/index.js";
import { fetchPcall } from "./utils.js";

export async function getUser(userid: string) {
    return await fetchPcall(axios.get, `/user/${userid}`);
}

export async function login(data: User) {
    return await fetchPcall(axios.post, "/user/login", data);
}

export async function register(data: User) {
    return await fetchPcall(axios.post, "/user/register", data);
}
