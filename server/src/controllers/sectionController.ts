import { Request, Response } from "express";
import mongoose from "mongoose";

import sectionModel from "../models/sectionModel";

export const getAllSections = async (req: Request, res: Response) => {
  try {
    const sections = await sectionModel.find();
    console.log(sections);
    res.status(200).json(sections);
  } catch (e) {
    console.log(e);
  }
};
