import express from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import authRouter from "../src/routers/auth";
import productRouter from "../src/routers/product";
import categoryRouter from "../src/routers/category";
import cartRouter from "../src/routers/cart";
import { connectDB } from "../src/config/db";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

connectDB(process.env.DB_URI);

app.use("/api/v1/", authRouter);
app.use("/api/v1/", productRouter);
app.use("/api/v1/", categoryRouter);
app.use("/api/v1/", cartRouter);

export const handler = serverless(app);
