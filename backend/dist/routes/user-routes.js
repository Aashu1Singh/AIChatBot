import express from "express";
import { getAllUser, loginUser, signupUser } from "../controllers/user-controller.js";
import { loginValidator, signupValidator, validate } from "../middleware/validator.js";
const userRouter = express.Router();
userRouter.route("/").get(getAllUser);
userRouter.route("/signup").post(validate(signupValidator), signupUser);
userRouter.route("/login").post(validate(loginValidator), loginUser);
export default userRouter;
//# sourceMappingURL=user-routes.js.map