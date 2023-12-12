import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import priceRoutes from "./routes/priceRoutes";
import serviceRoutes from "./routes/serviceRoutes";

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/price", priceRoutes);
app.use("/service", serviceRoutes);


const PORT: string | undefined = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));