import { Router } from "express";

import { addUser, deleteUser, getAllUsers, getUserById } from "../controllers/userController";

// instantiate router
const userRouter = Router();

// routes
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", addUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
