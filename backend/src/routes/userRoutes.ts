import { Router } from "express";

const router: Router = Router();

import { registerUser, loginUser, getUser, getAllUsers, editMyUser, getLoggedUser } from "../controllers/UserController";

import { verifySuper, verifyToken } from "../middlewares/userMiddlewares";

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/me", verifyToken, getLoggedUser);
router.get("/:cpf", verifyToken, getUser);
router.put("/", verifyToken, editMyUser);

// router.get("/", verifyToken, verifySuper, getAllUsers);

export default router;