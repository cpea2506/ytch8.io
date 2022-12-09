import axios from "$api/index.js";
import { fetchPcall } from "./utils.js";

export async function getAllCategory() {
    return await fetchPcall(axios.get, `/category`);
}
