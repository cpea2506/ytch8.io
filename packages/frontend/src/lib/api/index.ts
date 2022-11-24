import axios from "axios";
import { PUBLIC_API } from "$env/static/public";

const config = {
    baseURL: PUBLIC_API,
    timeout: 5000,
    headers: {
        "content-type": "application/json",
    },
    params: {},
};

const client = axios.create(config);

export default client;
