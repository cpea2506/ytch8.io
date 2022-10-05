import { Request, Response } from "express";

export async function getPlayerInfo(req: Request, res: Response) {
    res.send("Ok");
}
