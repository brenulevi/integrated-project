import { Router } from "express";

const router : Router = Router();

import { loginUser } from "../controllers/UserController";

router.post("/login", loginUser);

export default router;