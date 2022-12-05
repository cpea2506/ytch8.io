import { Router } from "express";
import * as controller from "./controller";

const router = Router();

router.get("/:userid", controller.getPlayerInfo);
router.post("/register", controller.register);
router.post("/login", controller.login);

export default router;
