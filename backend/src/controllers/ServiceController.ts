import { Request, Response } from "express";

import { Service } from "../models/Service";

export async function registerService(req: Request, res: Response) {
    const { status, model, material, budget, entryDate, cpf, promissedDate, soldDate, descr}: { status: string, model: string, material: string, budget: number, entryDate: Date, cpf: string, promissedDate: Date, soldDate: Date, descr: string} = req.body;

    const newService = new Service(status, model, material, budget, entryDate, cpf, promissedDate, soldDate, descr);

    const response = await newService.save();

    return res.status(201).json(response);
}

export async function getService(req: Request, res: Response) {

}

export async function getAllServices(req: Request, res: Response) {
    const Services = await Service.getAll();
    if (!Services)
        return res.status(404).json({ error: "Services not found" });

    return res.status(200).json(Services);
}

export async function editService(req: Request, res: Response) {
    const { id } = req.params;
    const { key, value } = req.body;

    const result = await Service.edit(id, key, value);
    if (!result)
        return res.status(404).json({ error: "Service not found" });
    return res.status(200).json({ status: "Service updated" });
}

export async function deleteService(req: Request, res: Response) {
    const { id } = req.params;

    const result = await Service.remove(id);
    if (!result)
        return res.status(400).json({ error: "Service not found" });
    return res.status(200).json({ status: "Service deleted" });
}