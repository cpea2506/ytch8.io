import { Router } from "express";
import { createGame, getGameByUser } from "./controller";

const router = Router();

router.get("/:authorid", getGameByUser);
router.post("/", createGame);

export default router;
