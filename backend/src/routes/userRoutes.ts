import { Router } from "express";

const router: Router = Router();

import { registerUser, loginUser, getUser, getAllUsers, editMyUser, getLoggedUser, editUser, deleteUser } from "../controllers/UserController";

import { verifySuper, verifyToken } from "../middlewares/userMiddlewares";

router.post("/login", loginUser);
router.get("/me", verifyToken, getLoggedUser);
router.get("/:cpf", verifyToken, getUser);
router.put("/", verifyToken, editMyUser);

router.post("/register", verifyToken, verifySuper, registerUser);
router.put("/:cpf", verifyToken, verifySuper, editUser);
router.delete("/:cpf", verifyToken, verifySuper, deleteUser);
router.get("/", verifyToken, verifySuper, getAllUsers);

export default router;