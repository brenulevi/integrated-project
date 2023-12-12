import { Request, Response } from "express";

import { Product } from "../models/Product";

export async function registerProduct(req: Request, res: Response) {
    const { model, material, weight, entryDate }: { model: string, material: string, weight: number, entryDate: Date } = req.body;

    const newProduct = new Product(model, material, weight, entryDate);

    const response = await newProduct.save();

    return res.status(201).json(response);
}

export async function getProduct(req: Request, res: Response) {

}

export async function getAllProducts(req: Request, res: Response) {
    const products = await Product.getAll();
    if(!products)
        return res.status(404).json({error: "Products not found"});

    return res.status(200).json(products);
}

export async function editProduct(req: Request, res: Response) {

}

export async function deleteProduct(req: Request, res: Response) {

}