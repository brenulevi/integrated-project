import { Request, Response } from "express";

import { Positions, User } from "../models/Users";
import { CustomRequest } from "../middlewares/userMiddlewares";

export async function loginUser(req: Request, res: Response) {
    const { username, password }: { username: string, password: string } = req.body;

    const token = await User.login(username, password);
    if (!token)
        return res.status(404).json({ error: "User not found" });

    return res.status(200).json({ token });
}

export async function registerUser(req: Request, res: Response) {
    const { cpf, username, name, email, password, position }: { cpf: string, username: string, name: string, email: string, password: string, position: Positions } = req.body;

    const newUser = new User(cpf, username, email, name, password, position);

    const response: User | boolean = await newUser.save();
    if (!response) {
        return res.status(403).json({ error: "User already exists" });
    }

    return res.status(201).json(response);
}

export async function getUser(req: Request, res: Response) {
    const { cpf } = req.params;

    const queryUser = await User.getByCpf(cpf);
    if (!queryUser)
        return res.status(404).json({ error: "User not found" });

    return res.status(200).json({
        name: queryUser.getName(),
        username: queryUser.getUsername(),
    });
}

export async function getLoggedUser(req: CustomRequest, res: Response) {

    const loggedUser = await User.getByCpf(req.cpf as string);
    if (!loggedUser)
        return res.status(404).json({ error: "User not found" });

    return res.status(200).json({
        name: loggedUser.getName(),
        username: loggedUser.getUsername(),
    });
}

export async function getAllUsers(req: Request, res: Response) {
    const users = await User.getAll();
    if (!users)
        return res.status(404).json({ error: "Users not found" });

    return res.status(200).json(users);
}

export async function editUser(req: Request, res: Response) {
    const { cpf } = req.params;
    const { name, password, username } = req.body;

    const result = await User.editUser(cpf, { name, password, username });
    console.log(result);
    if (!result)
        return res.status(404).json({ error: "User not found" });
    return res.status(200).json({ status: "User updated" });
}