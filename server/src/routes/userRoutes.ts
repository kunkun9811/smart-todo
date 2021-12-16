import { Router } from "express";

import { getAllUsers, getUserById } from "../controllers/userController";

// DEBUG:
// import { addUserTest } from "../controllers/userController";

// instantiate router
const userRouter = Router();

// routes
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);

// DEBUG: test route
// userRouter.post("/", addUserTest);

export default userRouter;
