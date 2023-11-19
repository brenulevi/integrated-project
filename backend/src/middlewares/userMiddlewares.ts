import { Router, Request, Response, NextFunction } from "express";

const router = Router();

import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";

export interface CustomRequest extends Request {
    payload: string | JwtPayload;
};

export interface CustomPayload extends JwtPayload {
    uid : string;
}

export async function verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
        const { token } = req.cookies;

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        (req as CustomRequest).payload = decoded;
        next();
    } catch (err) {
        res.status(403).json({ error: "Invalid token" });
    }
}