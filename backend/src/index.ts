import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

import adminRoutes from "./routes/adminRoutes";
import employeeRoutes from "./routes/employeeRoutes";
import serviceRoutes from "./routes/serviceRoutes";
import productRoutes from "./routes/productRoutes";

app.use("/admin", adminRoutes);
app.use("/employee", employeeRoutes);
app.use("/service", serviceRoutes);
app.use("/product", productRoutes);

const PORT: any = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));