import express from "express";
import { userRouter } from "./routes/userRoutes.js";
import { db } from "./database/db.js";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use("/user", userRouter);

app.listen(process.env.SERVER_PORT, () => {
  try {
    console.log("server has started http://localhost:3000");
    db();
  } catch (error) {
    console.log(error.message);
  }
});
