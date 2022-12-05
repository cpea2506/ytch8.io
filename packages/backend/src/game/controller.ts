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
