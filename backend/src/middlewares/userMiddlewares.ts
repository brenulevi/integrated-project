import { Request, Response, NextFunction } from "express";

import jwt, { JwtPayload } from "jsonwebtoken";
import { Positions, User } from "../models/User";

interface CustomJwtPayload extends JwtPayload {
    cpf?: string;
}

export interface CustomRequest extends Request {
    cpf?: string;
}

export async function verifyToken(req: CustomRequest, res: Response, next: NextFunction) {
    try {
        let { token } = req.headers;
        if (!token)
            return res.status(404).json({ error: "Invalid token" })

        const decoded: CustomJwtPayload = jwt.verify(token as string, process.env.JWT_SECRET as string) as CustomJwtPayload;
        
        req.cpf = decoded.cpf;

        next();
    } catch (err) {
        res.status(403).json({ error: "Invalid token" });
    }
}

export async function verifySuper(req: CustomRequest, res: Response, next: NextFunction) {
    try {
        const user = await User.getByCpf(req.cpf as string);
        if(user?.getPosition() === Positions.Employee)
            return res.status(403).json({ error: "Admin only" });
        next();
    } catch (err) {
        res.status(403).json({ error: err });
    }
}