import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";

import db from "../database";

export enum Positions {
    Employee,
    Manager
};

export class User {
    private cpf: string;
    private username: string;
    private email: string;
    private name: string;
    private password: string;
    private position: Positions;

    constructor(cpf: string, username: string, email: string, name: string, password: string, position: Positions) {
        this.cpf = cpf;
        this.username = username;
        this.email = email;
        this.name = name;
        this.password = password;
        this.position = position;
    }

    // Save an user to database
    public async save(): Promise<User | boolean> {
        if (await User.getByCpf(this.getCpf()))
            return false;

        const hashedPassword = await hash(this.getPassword(), 10);

        await db.query("INSERT INTO employee (cpf, name, email, password, username, position) values ($1, $2, $3, $4, $5, $6)",
            [this.cpf, this.name, this.email, hashedPassword, this.username, this.position]);

        return this;
    }

    public static async login(username: string, password: string): Promise<string | boolean> {
        const userToLogin = await User.getByUsername(username);
        if (!userToLogin)
            return false;

        if (! await compare(password, userToLogin.getPassword()))
            return false;

        const token = sign({ cpf: userToLogin.getCpf() }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

        return token;
    }

    public static async getAll(): Promise<Array<User> | null> {
        const response = await db.query("SELECT * FROM employee");
        if (response.rowCount === 0)
            return null;

        const data: any = response.rows as Array<User>;

        return data;
    }

    // Get an user from database based on *cpf* query
    public static async getByCpf(query: string): Promise<User | null> {
        const response = await db.query("SELECT * FROM employee WHERE cpf=$1", [query]);
        if (response.rowCount === 0)
            return null;

        const data: any = response.rows[0];
        return new User(data.cpf, data.username, data.email, data.name, data.password, data.position);
    }

    // Get an user from database based on *email* query
    public static async getByEmail(query: string): Promise<User | null> {
        const response = await db.query("SELECT * FROM employee WHERE email=$1", [query]);
        if (response.rowCount == 0)
            return null;

        const data: any = response.rows[0];
        return new User(data.cpf, data.username, data.email, data.name, data.password, data.position);
    }

    // Get an user from database based on *username* query
    public static async getByUsername(query: string): Promise<User | null> {
        const response = await db.query("SELECT * FROM employee WHERE username=$1", [query]);
        if (response.rowCount == 0)
            return null;

        const data: any = response.rows[0];
        return new User(data.cpf, data.username, data.email, data.name, data.password, data.position);
    }

    public static async editUser(cpf: string, key: string, value: string): Promise<boolean> {
        const userQuery = await User.getByCpf(cpf);

        if (!userQuery)
            return false;

        const response = await db.query(`UPDATE employee SET ${key}=$1 WHERE cpf=$2 RETURNING *`, [value, cpf]);

        console.log(response);
        
        return true;
    }

    // Getters
    public getCpf(): string { return this.cpf; }
    public getName(): string { return this.name; }
    public getUsername(): string { return this.username; }
    public getEmail(): string { return this.email; }
    public getPassword(): string { return this.password; }
    public getPosition(): Positions { return this.position; }
}