import { Router } from "express";

import { getAllUsers, getUserById } from "../controllers/userController";

// instantiate router
const userRouter = Router();

// routes
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);

export default userRouter;
