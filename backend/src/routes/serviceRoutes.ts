import { Router } from "express";

const router : Router = Router();

import { deleteService, editService, getAllServices, getService, registerService } from "../controllers/ServiceController";

router.post("/", registerService);
router.get("/:id", getService);
router.get("/", getAllServices);
router.put("/:id", editService);
router.delete("/:id", deleteService);

export default router;