import PrismaDB from "@/database/index";
import { Request, Response } from "express";

export async function getGameByUser(req: Request, res: Response) {
    const { authorid } = req.params;

    const games = await PrismaDB.instance.game.findMany({
        where: {
            authorId: BigInt(authorid),
        },
    });

    return res.send({ data: games });
}

export async function createGame(req: Request, res: Response) {
    const { name, description, categoryId, authorId, image } = req.body;

    console.log("body: ", req.body);

    await PrismaDB.instance.game.create({
        data: {
            name,
            description,
            categoryId,
            authorId,
            image,
            path: `/game/${name}`,
        },
    });

    return res.status(201).send({ message: "Create game successfully" });
}
