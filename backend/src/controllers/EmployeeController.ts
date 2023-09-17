import { Request, Response } from "express";

export function getEmployee(req: Request, res: Response) {
    res.json({ message: "Hello Employee" });
}