import { Router } from "express";

const router: Router = Router();

import { getService } from "../controllers/ServiceController";

router.get("/", getService);

export default router;