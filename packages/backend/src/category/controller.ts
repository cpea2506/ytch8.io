import PrismaDB from "@/database/index";
import { Request, Response } from "express";

export async function createCategory(req: Request, res: Response) {
    const { name } = req.body;

    await PrismaDB.instance.category.create({
        data: {
            name,
        },
    });

    return res.send({ message: "create category successfully" });
}

export async function getAllCategory(_req: Request, res: Response) {
    let category = await PrismaDB.instance.category.findMany();

    return res.send({
        data: category.map(({ id, name }) => ({ id: id.toString(), name })),
        message: "get all category successfully",
    });
}

export async function createFirstCategoryList(_req: Request, res: Response) {
    let firstList = [
        "Action",
        "Adventure",
        "Fighting",
        "Platformer",
        "Role Playing",
        "Shooter",
        "Simulation",
        "Survival",
        "Strategy",
        "Other",
    ];

    firstList.forEach(async (name) => {
        await PrismaDB.instance.category.create({
            data: {
                name,
            },
        });
    });

    return res.send({ message: "create category successfully" });
}
