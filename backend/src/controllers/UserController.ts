import { Request, Response } from "express";

import db from "../database";

export async function loginUser(req: Request, res: Response)
{
    try {
        const data = await db.query("SELECT * FROM test;");
        res.json({ data });

    } catch(err: any) {
        console.error(err.message);
    }
}