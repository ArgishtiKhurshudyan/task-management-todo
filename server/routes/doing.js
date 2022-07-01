import express from "express";
import {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from "./../controllers/doing.js";

const router = express.Router();

router.post("/", createTodo);
router.get("/", getTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
