import { Router } from "express";
import {
  signup,
  signin,
  forgotpassword,
  //   otpverify,
  resetpassword,
} from "../controllers/userController.js";
import { authenticateToken } from "../middleware/tokenValidationMiddleware.js";
import { refreshToken } from "../controllers/authcontrollers.js";

const userRouter = Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
// userRouter.post("/refresh-token", refreshToken);
userRouter.post("/forgot-password", forgotpassword);

userRouter.post("/reset-password", resetpassword);


userRouter.use(authenticateToken);

export { userRouter };
