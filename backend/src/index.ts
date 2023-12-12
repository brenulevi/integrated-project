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

app.use("/user", userRoutes);
app.use("/product", productRoutes);

const PORT: string | undefined = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));