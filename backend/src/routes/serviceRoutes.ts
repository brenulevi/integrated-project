import { Router } from "express";

const router : Router = Router();

import { deleteService, editService, getAllServices, getService, registerService } from "../controllers/ServiceController";
import { verifySuper, verifyToken } from "../middlewares/userMiddlewares";

router.post("/", verifyToken, registerService);
router.get("/:id", getService);
router.get("/", getAllServices);
router.put("/:id", verifyToken, editService);
router.delete("/:id", verifyToken, deleteService);

export default router;