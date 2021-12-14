import { Router } from "express";

import { getAllUsers } from "../controllers/userController";

// DEBUG:
// import { addUserTest } from "../controllers/userController";

// instantiate router
const userRouter = Router();

// routes
userRouter.get("/", getAllUsers);

// DEBUG: test route
// userRouter.post("/", addUserTest);

export default userRouter;
