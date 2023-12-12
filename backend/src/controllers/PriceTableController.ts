import { Request, Response } from "express";

import { PriceTable } from "../models/PriceTable";

export async function registerPrice(req: Request, res: Response) {
    const { material, price}: {material: string, price: number} = req.body;

    const newPrice = new PriceTable(material, price);

    const response = await newPrice.save();

    return res.status(201).json(response);
}

export async function getPrice(req: Request, res: Response) {
    const { material } = req.params;

    const queryPrice = await PriceTable.getByMaterial(material);
    if (!queryPrice)
        return res.status(404).json({ error: "Price not found" });

    return res.status(200).json({
        material: queryPrice.getMaterial(),
        price: queryPrice.getPrice(),
    });
}

export async function getAllPrices(req: Request, res: Response) {
    const prices = await PriceTable.getAll();
    if(!prices)
        return res.status(404).json({error: "Prices not found"});

    return res.status(200).json(prices);
}

export async function editPrice(req: Request, res: Response) {
    const { material, price } = req.body;

    const result = await PriceTable.editPrice(material, price);
    if (!result) 
        return res.status(404).json({ error: "Material not found" });
    return res.status(200).json({ status: "Material updated" });
}