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
