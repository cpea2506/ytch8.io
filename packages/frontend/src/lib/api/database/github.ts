import axios from "axios";
import ytchAxios from "$api/index.js";
import { fetchPcall } from "./utils.js";

const TOKEN_URL = "https://github.com/login/oauth/access_token";
const USER_URL = "https://api.github.com/user";

export async function getAccesToken(data: GithubData) {
    return await fetchPcall(axios.post, TOKEN_URL, data, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
}

export async function getUser(data: GithubAccessToken) {
    return await fetchPcall(axios.get, USER_URL, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${data.access_token}`,
        },
    });
}

export async function login(data: GithubResponse) {
    return await fetchPcall(ytchAxios.post, "/user/login/github", data);
}
