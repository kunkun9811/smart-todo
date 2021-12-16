import { Request, Response } from "express";
import { User } from "../models/userModel";
import { ResponseMessage } from "../shared/interfaces/responseMessage.interface";
import { createResMsg } from "../shared/helperFunctions";
import mongoose from "mongoose";

import userModel from "../models/userModel";

/* handlers */
// TODO: [12/14/2021] In order to get all users, this requires admin permission in the future
export const getAllUsers = async (req: Request, res: Response) => {
  // set hearders
  res.setHeader("Content-Type", "application/json");

  try {
    const users: User[] = await userModel.find();
    console.log("---Users---");
    console.log(users);
    const msg: ResponseMessage = createResMsg(users, "");
    res.status(200).json(msg);
  } catch (e) {
    console.warn("---Unable to retrieve ALL USERS----");
    console.warn(e);
    const msg: ResponseMessage = createResMsg([], "Could not get all users. Something went wrong on the server side.");
    res.status(500).json(msg);
  }
};

// TODO: [12/14/2021] Do proper login authentication in the future
export const getUserById = async (req: Request, res: Response) => {
  // get parameter
  const { id } = req.params;

  // set headers
  res.setHeader("Content-Type", "application/json");

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.warn(`---User id is invalid---`);
    const msg: ResponseMessage = createResMsg([], `User id is invalid`);
    res.status(400).json(msg);
  }
  try {
    const user: User | null = await userModel.findById(id);
    if (!user) {
      console.warn(`---User with id=${id} does not exist---`);
      const msg: ResponseMessage = createResMsg([], `User with id=${id} does not exist`);
      res.status(404).json(msg);
    } else {
      console.log(`---User with id=${id}---`);
      console.log(user);
      const msg: ResponseMessage = createResMsg(user, "");
      res.status(200).json(msg);
    }
  } catch (e) {
    console.warn(`---Could not retrieve info for User id = ${id}---`);
    console.warn(e);
    const msg: ResponseMessage = createResMsg([], `Could not retrieve info for User id = ${id}. Something went wrong on the server side.`);
    res.status(500).json(msg);
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
