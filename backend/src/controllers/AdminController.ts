import { Request, Response } from "express";

export function getAdmin(req: Request, res: Response) {
    res.json({ message: "Hello Admin" });
}