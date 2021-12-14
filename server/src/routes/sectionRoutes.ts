import { Router } from "express";

import { getAllSections } from "../controllers/sectionController";

// instantiate router
const sectionRouter = Router();

// routes
sectionRouter.get("/", getAllSections);

export default sectionRouter;
