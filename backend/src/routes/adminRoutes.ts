import { Router } from "express";

const router: Router = Router();

import { getEmployee, getAllEmployees, createEmployee, editEmployee, deleteEmployee } from "../controllers/AdminController";

// Employee CRUD Routes
router.get("/employee/:id", getEmployee);
router.get("/employee/", getAllEmployees);
router.post("/employee", createEmployee);
router.put("/employee/:id", editEmployee);
router.delete("/employee/:id", deleteEmployee);

// Finance CRUD Routes

export default router; 