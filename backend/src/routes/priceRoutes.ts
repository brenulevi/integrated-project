import { Router } from "express";

const router : Router = Router();

import { editPrice, getAllPrices, getPrice, registerPrice } from "../controllers/PriceTableController";

router.post("/register", registerPrice);
router.get("/:material", getPrice);
router.get("/", getAllPrices);
router.put("/edit", editPrice);

export default router;