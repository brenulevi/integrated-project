import db from "../database";

export class Product {
    private id?: string;
    private model: string;
    private material: string;
    private weight: number;
    private entryDate: Date;
    private soldDate?: Date | null;

    constructor(model: string, material: string, weight: number, entryDate: Date, id?: string, soldDate?: Date) {
        this.id = id;
        this.model = model;
        this.material = material;
        this.weight = weight;
        this.entryDate = entryDate;
        this.soldDate = soldDate;
    }

    public async save(): Promise<Product> {
        await db.query("INSERT INTO product (model, material, weight, entered) VALUES ($1, $2, $3, $4)",
            [this.model, this.material, this.weight, this.entryDate]);

        return this;
    }

    public static async getAll(): Promise<Array<Product> | null> {
        const response = await db.query("SELECT * FROM product ORDER BY id");
        if (response.rowCount === 0)
            return null;
        return response.rows;
    }

    public static async getById(query: string): Promise<Product | null> {
        const response = await db.query("SELECT * FROM product WHERE id=$1", [query]);
        if(response.rowCount === 0)
            return null;
        return response.rows[0];
    }

    public static async edit(id: string, key: string, value: string | number): Promise<boolean> {
        const prodQuery = await Product.getById(id);

        if (!prodQuery)
            return false;

        const response = await db.query(`UPDATE product SET ${key}=$1 WHERE id=$2 RETURNING *`, [value, id]);

        return true;
    }

    public static async remove(id: string): Promise<boolean> {
        const prodQuery = await Product.getById(id);

        if(!prodQuery)
            return false;

        const response = await db.query("DELETE FROM product WHERE id=$1", [id]);

        return true;
    }
}