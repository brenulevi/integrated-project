import { Request, Response } from "express";

import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";

import db from "../database";

import { CustomPayload, CustomRequest } from "../middlewares/userMiddlewares";

export async function loginUser(req: Request, res: Response) {
    const { username, password }: { username: string, password: string } = req.body;
    try {
        const data = await db.query("SELECT u.coduser, u.password FROM users u WHERE u.username=$1", [username]);

        if (data.rows.length === 0) {
            res.status(404).json({ error: "User don't exist" });
            return;
        }

        if (! await compare(password, data.rows[0].password)) {
            res.status(401).json({ error: "Invalid Credentials" });
            return;
        }

        const token: string = sign({ uid: data.rows[0].coduser }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

        res.status(200).json({ token });

    } catch (err: unknown) {
        console.error(err);
    }
}

export async function registerUser(req: Request, res: Response) {
    const { username, name, email, password }: { username: string, name: string, email: string, password: string } = req.body;

    try {
        const hashedPassword = await hash(password, 10);
        const response = await db.query("SELECT * FROM users WHERE username=$1 or email=$2", [username, email]);

        if (response.rows.length !== 0) {
            res.status(403).json({ error: "User already exist" });
            return;
        }

        const data = await db.query("INSERT INTO users (name, email, password, username) values ($1, $2, $3, $4)", [name, email, hashedPassword, username]);

        res.status(201).json({ status: "User created", data });
    } catch (err: unknown) {
        console.error(err);
    }
}

export async function getLoggedUser(req: Request, res: Response) {
    const { uid } = (req as CustomRequest).payload as CustomPayload;

    const data = await db.query("SELECT name, email, username FROM users WHERE coduser=$1", [uid]);

    res.status(200).json(data);
}