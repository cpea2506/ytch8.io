import { Router } from "express";
import { getGameByUser } from "./controller";

const router = Router();

router.get("/:authorid", getGameByUser);

export default router;
