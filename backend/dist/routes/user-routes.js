import express from "express";
import { getAllUser, signupUser } from "../controllers/user-controller.js";
import { signupValidator, validate } from "../middleware/validator.js";
const userRouter = express.Router();
userRouter.route("/").get(getAllUser);
userRouter.route("/signup").post(validate(signupValidator), signupUser);
export default userRouter;
//# sourceMappingURL=user-routes.js.map