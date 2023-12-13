import { Router } from "express";

const router : Router = Router();

import { deleteProduct, editProduct, getAllProducts, getProduct, registerProduct } from "../controllers/ProductController";
import { verifySuper, verifyToken } from "../middlewares/userMiddlewares";

router.post("/", verifyToken, registerProduct);
router.get("/:id", getProduct);
router.get("/", getAllProducts);
router.put("/:id", verifyToken, editProduct);
router.delete("/:id", verifyToken, deleteProduct);

export default router;