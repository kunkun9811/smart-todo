import { Router } from "express";

import { getAllSections, getSectionById, getSectionsByUserIdMiddleware, getSectionsByUserId } from "../controllers/sectionController";

// instantiate router
const sectionRouter = Router();

// routes
sectionRouter.get("/", getAllSections);
sectionRouter.get("/:id", getSectionById);
sectionRouter.get("/user/:userId", getSectionsByUserIdMiddleware);

export default sectionRouter;
