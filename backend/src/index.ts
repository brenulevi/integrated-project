import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app: Express = express();

app.use(cors({
    credentials: true, origin: "http://localhost:3000"
}));
app.use(express.json());
app.use(cookieParser());

import userRoutes from "./routes/userRoutes";

app.use("/user", userRoutes);

const PORT: string | undefined = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));