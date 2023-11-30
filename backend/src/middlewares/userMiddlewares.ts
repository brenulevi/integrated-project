import { Router, Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

export async function verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
        let { token } = req.cookies;
        if (!token)
            token = req.headers.token;
        if (!token)
            return res.status(404).json({ error: "Invalid token" })

        jwt.verify(token, process.env.JWT_SECRET as string);

        next();
    } catch (err) {
        res.status(403).json({ error: "Invalid token" });
    }
}

export async function verifySuper(req: Request, res: Response, next: NextFunction) {
    next();
}