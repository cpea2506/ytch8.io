import { Router } from "express";
import {
    createCategory,
    createFirstCategoryList,
    getAllCategory,
} from "./controller";

const router = Router();

router.post("/", createCategory);
router.post("/init", createFirstCategoryList);
router.get("/", getAllCategory);

export default router;
