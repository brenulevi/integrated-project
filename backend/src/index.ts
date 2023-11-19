import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

import adminRoutes from "./routes/adminRoutes";
import userRoutes from "./routes/userRoutes";

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

const PORT: any = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));