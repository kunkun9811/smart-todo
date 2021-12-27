import { Router } from "express";

import { getAllTodos, getTodoByid, getTodosBySectionId, addTodo } from "../controllers/todoController";

// instantiate router
const todoRouter = Router();

// routes
todoRouter.get("/", getAllTodos);
todoRouter.get("/:id", getTodoByid);
todoRouter.get("/section/:sectionId", getTodosBySectionId);
todoRouter.post("/", addTodo);

export default todoRouter;
