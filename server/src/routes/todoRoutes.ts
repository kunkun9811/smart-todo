import { Router } from "express";

import { getAllTodos } from "../controllers/todoController";

// instantiate router
const todoRouter = Router();

// routes
todoRouter.get("/", getAllTodos);

export default todoRouter;
