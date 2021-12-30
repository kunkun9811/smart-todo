import { Request, Response } from "express";
import { User } from "../models/userModel";
import { ResponseMessage } from "../shared/interfaces/responseMessage.interface";
import { createResMsg, isObjectIdValid } from "../shared/helperFunctions";
import mongoose from "mongoose";

import userModel from "../models/userModel";
import sectionModel, { Section } from "../models/sectionModel";
import { getSectionsByUserId } from "./sectionController";
import { InternalReturn } from "../shared/interfaces/internalReturn.interface";
import { StatusCodes } from "http-status-codes";

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

  // add new user
  try {
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

/* function parameters - all the modifiable user properties*/
// NOTE:
// client will pass in the desired properties to update. Not all properties need to be passed in.
interface modfiableUserProperties {
  _id: User["_id"];
  username: User["username"];
  currentSectionId: User["currentSectionId"];
}

export const updateUser = async (req: Request, res: Response) => {
  // get body
  // NOTE: if any of the properties above are not specified, then mongodb will not update those properties.
  // Namely, mongoDB will not update any particular properties if the corresponding passed in values are "undefined" or "null"
  // We could pass this directly into "findByIdAndUpdate" below
  const { _id, username, currentSectionId } = req.body;

  // check if id + currentSectionId are valid
  if (!isObjectIdValid(_id)) {
    const msgText = `The user id is not provided or the id is not valid`;
    console.warn(`---${msgText}---`);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(400).json(msg);
  }

  if (!isObjectIdValid(currentSectionId)) {
    const msgText = `The currentSectionId is not provided or the id is not valid`;
    console.warn(`---${msgText}---`);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(400).json(msg);
  }

  try {
    // grab current user info
    const user: User | null = await userModel.findById(_id);
    if (!user) {
      const msgText = `User with id=${_id} does not exist`;
      console.warn(`---${msgText}---`);
      const msg: ResponseMessage = createResMsg([], msgText);
      return res.status(404).json(msg);
    }

    // check if section exists
    const currentSection: Section | null = await sectionModel.findById(currentSectionId);
    if (!currentSection) {
      const msgText = `Section with id=${currentSectionId} does not exist`;
      console.warn(msgText);
      const msg: ResponseMessage = createResMsg([], msgText);
      return res.status(StatusCodes.NOT_FOUND).json(msg);
    }

    // check if user has permission to access this section
    // TODO: [12/29/2021] in the future, permission checks need to be more rigorous/additional logic
    const userSections: Section[] = await getSectionsByUserId(_id).then((intRet: InternalReturn) => intRet.data);
    const section: Section | undefined = userSections.find((s: Section) => s._id === currentSectionId);
    if (!section) {
      const msgText = `The user does not have permission to access the section with id=${currentSectionId}`;
      console.warn(`---${msgText}---`);
      const msg: ResponseMessage = createResMsg([], msgText);
      return res.status(StatusCodes.FORBIDDEN).json(msg);
    }

    const newInfo: modfiableUserProperties = {
      _id,
      username,
      currentSectionId,
    };
    const updatedUser = await userModel.findByIdAndUpdate(_id, newInfo, { new: true });
    console.log(`---updated user with id=${newInfo._id}---`);
    console.log(updatedUser);
    const msg: ResponseMessage = createResMsg(updatedUser, "");
    res.status(200).json(msg);
  } catch (e) {
    const msgText = `Unable to update user with id=${_id}. Something went wrong on the server side`;
    console.warn(`---${msgText}---`);
    console.warn(e);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(500).json(msg);
  }
};
