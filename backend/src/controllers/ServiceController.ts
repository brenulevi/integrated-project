import { Request, Response } from "express";

export function getService(req: Request, res: Response) {
    res.json({ message: "Hello Service" });
}