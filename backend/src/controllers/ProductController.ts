import { Request, Response } from "express";

export function getProduct(req: Request, res: Response) {
    res.json({ message: "Hello Product" });
}