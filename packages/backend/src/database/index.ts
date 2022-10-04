import { PrismaClient } from "@prisma/client";

export default class PrismaDB extends PrismaClient {
    private static _instance: PrismaDB = new PrismaClient({
        errorFormat: "pretty",
        log: ["info"],
        rejectOnNotFound: false,
    });

    private constructor() {
        super();
    }

    public static get instance() {
        return PrismaDB._instance;
    }
}
