import { Router } from "express";

const router: Router = Router();

import { loginUser, registerUser, getLoggedUser } from "../controllers/UserController";

import { verifyToken } from "../middlewares/userMiddlewares";

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/me", verifyToken, getLoggedUser);

export default router;