import db from "../database";

export class Service {
    private id?: string;
    private status: string;
    private model: string;
    private material: string;
    private budget: number;
    private entryDate: Date;
    private promissedDate?: Date | null;
    private soldDate?: Date | null;
    private descr?: string | null;
    private cpf: string;

    constructor( model: string, material: string, budget: number, entryDate: Date, cpf: string, promissedDate?: Date, descr?: string, id?: string) {
        this.id = id;
        this.model = model;
        this.material = material;
        this.budget = budget;
        this.entryDate = entryDate;
        this.promissedDate = promissedDate;
        this.descr = descr;
        this.cpf = cpf;
        this.status = "Fabricando";
        this.soldDate = null;
    }

    public async save(): Promise<Service> {
        await db.query("INSERT INTO service (status, model, material, budget, entered, promissed, sold, descr, cpf) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
            [this.status, this.model, this.material, this.budget, this.entryDate, (this.promissedDate === null? null : this.promissedDate), (this.soldDate === null ? null : this.soldDate), (this.descr === null ? null : this.descr),  this.cpf]);

        return this;
    }

    public static async getAll(): Promise<Array<Service> | null> {
        const response = await db.query("SELECT * FROM service NATURAL JOIN client ORDER BY id");
        if (response.rowCount === 0)
            return null;
        return response.rows;
    }

    public static async getById(query: string): Promise<Service | null> {
        const response = await db.query("SELECT * FROM service WHERE id=$1", [query]);
        if(response.rowCount === 0)
            return null;
        return response.rows[0];
    }

    public static async edit(id: string, key: string, value: string | number): Promise<boolean> {
        const prodQuery = await Service.getById(id);

        if (!prodQuery)
            return false;

        const response = await db.query(`UPDATE service SET ${key}=$1 WHERE id=$2 RETURNING *`, [value, id]);

        return true;
    }

    public static async remove(id: string): Promise<boolean> {
        const prodQuery = await Service.getById(id);

        if(!prodQuery)
            return false;

        const response = await db.query("DELETE FROM service WHERE id=$1", [id]);

        return true;
    }
}