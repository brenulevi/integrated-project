import { Router } from "express";

const router: Router = Router();

import { getAdmin } from "../controllers/AdminController";

router.get("/", getAdmin);

export default router;