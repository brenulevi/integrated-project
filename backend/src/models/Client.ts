import db from "../database";

export class Client {
    private cpf: string;
    private name: string;
    private phone: string;

    constructor(cpf: string, name: string, phone: string) {
        this.cpf = cpf;
        this.name = name;
        this.phone = phone;
    }

    public async save() {

    }

    public static async getAll() : Promise<Array<Client> | null> {
        const response = await db.query("SELECT cpf FROM client");
        if(response.rowCount === 0)
            return null;
        return response.rows;
    }
}