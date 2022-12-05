import PrismaDB from "@/database/index";
import { Request, Response } from "express";

export * from "./player";
export * from "./admin";

export async function register(req: Request, res: Response) {
    const { username, password, email } = req.body;

    const user = await PrismaDB.instance.user.findUnique({
        where: {
            email,
        },
    });

    if (user) {
        return res.status(404).send({ message: "This email has been used!" });
    }

    await PrismaDB.instance.user.create({
        data: {
            username,
            password,
            email,
        },
    });

    return res.status(201).send({ message: "Create account successfully" });
}

export async function login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await PrismaDB.instance.user.findFirst({
        where: {
            email,
            password,
        },
        select: {
            id: true,
        },
    });

    console.log(user);

    if (!user) {
        return res.status(400).send({ message: "Wrong email or password!" });
    }

    return res.status(200).send({
        data: user.id.toString(),
        message: "Login successfully!",
    });
}
