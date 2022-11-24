import axios from "$api/index.js";
import { AxiosError } from "axios";

export async function login(data: LoginUser) {
    try {
        const res = await axios.post("/user/login", data);

        return [null, res.data];
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error(error.response?.data);
            console.error(error.message);
            return [error.response?.data, null];
        }
    }
}

export async function register(data: RegisterUser) {
    try {
        const res = await axios.post("/user/register", data);

        return [null, res.data];
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error(error.response?.data);
            console.error(error.message);
            return [error.response?.data, null];
        }
    }
}
