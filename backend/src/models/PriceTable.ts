import db from "../database";

export class PriceTable {
    private material: string;
    private price: number;

    constructor(material: string, price: number) {
        this.material = material;
        this.price = price;
    }

    public async save(): Promise<PriceTable> {
        await db.query("INSERT INTO priceTable (material, price) VALUES ($1, $2)",
            [this.material, this.price]);

        return this;
    }

    public static async getAll(): Promise<Array<PriceTable> | null> {
        const response = await db.query("SELECT * FROM priceTable");
        if (response.rowCount === 0)
            return null;
        return response.rows;
    }

    public static async getByMaterial(query: string): Promise<PriceTable | null> {
        const response = await db.query("SELECT * FROM priceTable WHERE material=$1", [query]);
        if (response.rowCount === 0)
            return null;

        const data: any = response.rows[0];
        return new PriceTable(data.material, data.price as number);
    }

    public static async editPrice(material: string, price: number): Promise<boolean> {
        const priceQuery = await PriceTable.getByMaterial(material);

        if (!priceQuery)
            return false;

        
        const response = await db.query(`UPDATE priceTable SET price=$1 WHERE material=$2 RETURNING *`, [price, material]);

        console.log(response);
        
        return true;
    }

    public getMaterial(): string { return this.material; }
    public getPrice(): number { return this.price; }
}