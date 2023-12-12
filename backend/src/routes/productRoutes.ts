import { Router } from "express";

const router : Router = Router();

import { deleteProduct, editProduct, getAllProducts, getProduct, registerProduct } from "../controllers/ProductController";

router.post("/", registerProduct);
router.get("/:id", getProduct);
router.get("/", getAllProducts);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

export default router;