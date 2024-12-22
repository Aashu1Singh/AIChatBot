import express from "express";
import { getAllUser } from "../controllers/user-controller.js";

const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.post("/signup", );

export default userRouter;
