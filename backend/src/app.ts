import { config } from "dotenv";
import express from "express";
import appRouter from "./routes/index.js";

config();

const app = express();
app.use(express.json());

app.use("/", appRouter);

export default app;
