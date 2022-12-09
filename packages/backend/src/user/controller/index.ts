import PrismaDB from "@/database/index";
import { Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";
import { GOOGLE_CLIENT_ID } from "@/config/env";

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

// export async function updateProfile(req: Request, res: Response) {
//     const { username, image } = req.body;
// }

export async function login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await PrismaDB.instance.user.findFirst({
        where: {
            email,
            password,
            external: null,
        },
        select: {
            id: true,
        },
    });

    if (!user) {
        return res.status(400).send({ message: "Wrong email or password!" });
    }

    return res.status(200).send({
        data: user.id.toString(),
        message: "Login successfully!",
    });
}

export async function loginWithGoogle(req: Request, res: Response) {
    const { credential } = req.body;

    const googleClient = new OAuth2Client({ clientId: GOOGLE_CLIENT_ID });

    const idToken = {
        idToken: credential,
        audient: GOOGLE_CLIENT_ID,
    };

    const ticket = await googleClient.verifyIdToken(idToken);
    const payload = ticket.getPayload();

    let user = await PrismaDB.instance.user.findUnique({
        where: {
            email: payload!.email,
        },
    });

    if (user) {
        return res.status(200).send({
            data: user!.id.toString(),
            message: "Login with Google successfully!",
        });
    }

    let newUser = await PrismaDB.instance.user.create({
        data: {
            username: payload?.name!,
            email: payload?.email!,
            image: payload?.picture,
            external: "Google",
            password: "random_bullshit",
        },
    });

    return res.status(201).send({
        data: newUser!.id.toString(),
        message: "Register with Google successfully!",
    });
}

export async function loginWithGithub(req: Request, res: Response) {
    const { login, avatar_url, name } = req.body;

    const email = login + "@gmail.com";

    let user = await PrismaDB.instance.user.findUnique({
        where: {
            email,
        },
    });

    if (user) {
        return res.status(200).send({
            data: user!.id.toString(),
            message: "Login with Github successfully!",
        });
    }

    let newUser = await PrismaDB.instance.user.create({
        data: {
            username: name,
            email: email,
            image: avatar_url,
            external: "Github",
            password: "random_bullshit",
        },
        select: {
            id: true,
        },
    });

    return res.status(201).send({
        data: newUser.id.toString(),
        message: "Register with Github successfully!",
    });
}
