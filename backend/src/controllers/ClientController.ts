import { Request, Response } from "express";

import { Client } from "../models/Client";

export async function registerClient(req: Request, res: Response) {
    const { cpf, name, phone }: { cpf: string, name: string, phone: string } = req.body;

    const newPrice = new Client(cpf, name, phone);

    const response = await newPrice.save();

    return res.status(201).json(response);
}

export async function getAllClients(req: Request, res: Response) {
    const prices = await Client.getAll();
    if (!prices)
        return res.status(404).json({ error: "Prices not found" });

    return res.status(200).json(prices);
}