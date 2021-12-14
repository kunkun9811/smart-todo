import { Request, Response } from "express";
import mongoose from "mongoose";

import userModel from "../models/userModel";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find();
    console.log("---Users---");
    console.log(users);
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};

/* DEBUG: test */
// export const addUserTest = async (req: Request, res: Response) => {
//   const username: string = "thisIsTestAcc";
//   const currentSectionId: mongoose.Types.ObjectId = new mongoose.Types.ObjectId();

//   const newUser = new userModel({ username, currentSectionId });

//   try {
//     await newUser.save();

//     res.status(201).json(newUser);
//   } catch (e) {
//     console.log(`Could not add user => ${e}`);
//   }
// };
