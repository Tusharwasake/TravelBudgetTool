import { Router } from "express";
import { signup, signin } from "../controllers/userController.js";
const userRouter = Router();

userRouter.post("/signup", signup);
userRouter.get("/signin", signin);

userRouter.use()

export { userRouter };
