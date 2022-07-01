import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import todoRouter from "./routes/todo.js";
import doingRouter from "./routes/doing.js";
import doneRouter from "./routes/done.js";



dotenv.config();
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("you are connected MongoDB");
  } catch (error) {
    throw error;
  }
};

app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.use("/api/todo", todoRouter);
app.use("/api/doing", doingRouter);
app.use("/api/done", doneRouter);




app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`server is runing on port `);
});
