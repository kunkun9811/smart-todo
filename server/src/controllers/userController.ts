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
    return res.status(200).json(msg);
  } catch (e) {
    console.warn("---Unable to retrieve ALL USERS----");
    console.warn(e);
    const msg: ResponseMessage = createResMsg([], "Could not get all users. Something went wrong on the server side.");
    return res.status(500).json(msg);
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
    return res.status(400).json(msg);
  }

  try {
    const user: User | null = await userModel.findById(id);
    if (!user) {
      console.warn(`---User with id=${id} does not exist---`);
      const msg: ResponseMessage = createResMsg([], `User with id=${id} does not exist`);
      return res.status(404).json(msg);
    } else {
      console.log(`---User with id=${id}---`);
      console.log(user);
      const msg: ResponseMessage = createResMsg(user, "");
      return res.status(200).json(msg);
    }
  } catch (e) {
    console.warn(`---Could not retrieve info for User id = ${id}---`);
    console.warn(e);
    const msg: ResponseMessage = createResMsg([], `Could not retrieve info for User id = ${id}. Something went wrong on the server side.`);
    return res.status(500).json(msg);
  }
};

export const addUser = async (req: Request, res: Response) => {
  // get request body
  const { username, currentSectionId } = req.body;

  // set headers
  res.setHeader("Content-Type", "application/json");

  // check if username exist
  // NOTE: we don't check "currentSectionId", because at first there are no "sections"
  if (!username || username.length === 0) {
    const msgText = "Unable to add a new user. Did not provide username";
    console.warn(`---${msgText}---`);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(400).json(msg);
  }

  // check if username already exists
  const query = { username };
  const queryResult: User[] = await userModel.find(query);
  if (queryResult.length != 0) {
    const msgText = `User with username=${username} already exists`;
    console.warn(`--${msgText}--`);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(409).json(msg);
  }

  // add new user
  try {
    const user: User = new userModel({ username, currentSectionId });
    await user.save();
    console.log("---Added User---");
    console.log(user);
    const msg: ResponseMessage = createResMsg(user, "");
    return res.status(201).json(msg);
  } catch (e) {
    const msgText = `Unable to add new user. Something went wrong on the server side`;
    console.warn(`---${msgText}---`);
    console.warn(e);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(500).json(msg);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  // get params
  const { id } = req.params;

  // set headers
  res.setHeader("Content-Type", "application/json");

  // check if _id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const msgText = `The user id is not provided or the id is not valid`;
    console.warn(`---${msgText}---`);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(400).json(msg);
  }

  try {
    const deletedUser: User | null = await userModel.findByIdAndDelete(id);
    console.log(`---Deleted User with id=${id}---`);
    console.log(deletedUser);
    const msg: ResponseMessage = createResMsg(deletedUser, "");
    return res.status(200).json(msg);
  } catch (e) {
    const msgText = `Unable to delete user with id=${id}. Something went wrong on the server side`;
    console.warn(`---${msgText}---`);
    console.warn(e);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(500).json(msg);
  }
};
