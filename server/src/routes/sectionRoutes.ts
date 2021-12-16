import { Router } from "express";

import { getAllSections, getSectionById, getSectionsByUserId } from "../controllers/sectionController";

// instantiate router
const sectionRouter = Router();

// routes
sectionRouter.get("/", getAllSections);
sectionRouter.get("/:id", getSectionById);
sectionRouter.get("/user/:userId", getSectionsByUserId);

export default sectionRouter;
