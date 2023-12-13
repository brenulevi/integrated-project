import { Router } from "express";

const router : Router = Router();

import { editPrice, getAllPrices, getPrice, registerPrice } from "../controllers/PriceTableController";
import { verifySuper, verifyToken } from "../middlewares/userMiddlewares";

router.post("/register", verifyToken, registerPrice);
router.get("/:material", getPrice);
router.get("/", getAllPrices);
router.put("/edit", verifyToken, editPrice);

export default router;