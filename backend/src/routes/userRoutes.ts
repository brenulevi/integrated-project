import { Router, Request, Response } from "express";

const router: Router = Router();

import { loginUser, registerUser } from "../controllers/UserController";

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/test", (req: Request, res: Response) => {
    res.json(req.cookies);
})

export default router;