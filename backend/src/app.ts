import { config } from "dotenv";
import express from "express";
import appRouter from "./routes/index.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(morgan("dev"));
app.use("/api", appRouter);

export default app;
