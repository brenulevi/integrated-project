import { Router } from "express";

const router : Router = Router();

import { getAllClients } from "../controllers/ClientController";
import { verifySuper, verifyToken } from "../middlewares/userMiddlewares";

// router.post("/", verifyToken, registerProduct);
router.get("/", getAllClients);

export default router;