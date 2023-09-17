import { Router } from "express";

const router: Router = Router();

import { getEmployee } from "../controllers/EmployeeController";

router.get("/", getEmployee);

export default router;