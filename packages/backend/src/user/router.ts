import { Router } from "express";
import * as controller from "./controller";

const router = Router();

router.get("/:userid", controller.getPlayerInfo);
router.post("/login/google", controller.loginWithGoogle);
router.post("/login/github", controller.loginWithGithub);
router.post("/register", controller.register);
router.post("/login", controller.login);

export default router;
