import { Router } from "express";

const router: Router = Router();

import { registerUser, loginUser, getUser, getAllUsers, editUser } from "../controllers/UserController";

import { verifySuper, verifyToken } from "../middlewares/userMiddlewares";

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/:cpf", verifyToken, getUser);
router.put("/:cpf", verifyToken, editUser);

// router.get("/", verifyToken, verifySuper, getAllUsers);

export default router;