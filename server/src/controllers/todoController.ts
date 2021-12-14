import { Request, Response } from "express";
import mongoose from "mongoose";

import todoModel from "../models/todoModel";

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await todoModel.find();
    console.log(todos);
    res.status(200).json(todos);
  } catch (e) {
    console.log(e);
  }
};
