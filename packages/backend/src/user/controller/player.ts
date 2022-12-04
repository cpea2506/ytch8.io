import PrismaDB from "@/database/index";
import { Request, Response } from "express";

export async function getPlayerInfo(req: Request, res: Response) {
    const { userid } = req.params;

    const user = await PrismaDB.instance.user.findUnique({
        where: {
            id: BigInt(userid),
        },
        select: {
            username: true,
            email: true,
            image: true,
        },
    });

    return res.send({ data: user });
}

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

    if (user) {
        return res.status(200).send({
            data: user.id.toString(),
            message: "Login successfully!",
        });
    }

    return res.status(400).send({ message: "Wrong email or password!" });
}
