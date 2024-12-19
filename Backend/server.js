import express from "express";
import { userRouter } from "./routes/userRoutes.js";
import { db } from "./database/db.js";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use("/user", userRouter);

db();

app.listen(process.env.SERVER_PORT, () => {
  console.log("server has started http://localhost:3000");
});
