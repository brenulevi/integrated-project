import { Request, Response } from "express";

export async function getEmployee(req: Request, res: Response) {
    const { id } = req.params;
}

export async function getAllEmployees(req: Request, res: Response) {
    res.json({ message: "Hello Admin" });
}

export async function createEmployee(req: Request, res: Response) {
    res.json({ message: "Hello Admin" });
}

export async function editEmployee(req: Request, res: Response) {
    res.json({ message: "Hello Admin" });
}

export async function deleteEmployee(req: Request, res: Response) {
    res.json({ message: "Hello Admin" });
}