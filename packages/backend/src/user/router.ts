import { Router } from "express";
import { getPlayerInfo } from "./controller/player";

const router = Router();

/**
 * @swagger
 * /{name}:
 *   title: GetUserById
 *   get:
 *     description: Get user information
 *     responses:
 *       200:
 *         description: The user information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 12
 *     parameters:
 *      - in: path
 *        name: userId
 */
router.get("/:userId", getPlayerInfo);

export default router;
