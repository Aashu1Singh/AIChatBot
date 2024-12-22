import express from "express";
import { getAllChats } from "../controllers/chat-controller.js";
const chatRouter = express.Router();
chatRouter.get("/", getAllChats);
export default chatRouter;
//# sourceMappingURL=chat-routes.js.map