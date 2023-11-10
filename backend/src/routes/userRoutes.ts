import { Router } from "express";

const router : Router = Router();

import { loginUser, registerUser } from "../controllers/UserController";

router.post("/login", loginUser);
router.post("/register", registerUser);

export default router;