import { config } from "dotenv";

let { error } = config();

if (error) {
    throw error.message;
}

export const { PORT } = process.env;
