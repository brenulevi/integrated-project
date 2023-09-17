import { Router } from "express";

const router: Router = Router();

import { getProduct } from "../controllers/ProductController";

router.get("/", getProduct);

export default router;