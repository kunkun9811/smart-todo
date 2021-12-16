import { Request, Response } from "express";
import sectionModel, { Section } from "../models/sectionModel";
import userModel, { User } from "../models/userModel";
import { ResponseMessage } from "../shared/interfaces/responseMessage.interface";
import { createResMsg } from "../shared/helperFunctions";
import mongoose from "mongoose";

export const getAllSections = async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const sections = await sectionModel.find();
    console.log("---All Sections---");
    console.log(sections);
    const msg: ResponseMessage = createResMsg(sections, "");
    return res.status(200).json(msg);
  } catch (e) {
    console.warn("Unable to get All Sections. Something went wrong on the server side.");
    const msg: ResponseMessage = createResMsg([], "Unable to get All Sections. Something went wrong on the server side.");
    return res.status(500).json(msg);
  }
};

export const getSectionById = async (req: Request, res: Response) => {
  // get params
  const { id } = req.params;

  // set headers
  res.setHeader("Content-Type", "application/json");

  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.warn("---section id is invalid---");
    const msg: ResponseMessage = createResMsg([], "seciton id is invalid");
    return res.status(400).json(msg);
  }

  try {
    const section: Section | null = await sectionModel.findById(id);

    if (!section) {
      const msgText = `section with id=${id} does not exist`;
      console.warn(`---${msgText}---`);
      const msg: ResponseMessage = createResMsg([], msgText);
      return res.status(404).json(msg);
    } else {
      console.log(`---Section with id=${id}---`);
      console.log(section);
      const msg: ResponseMessage = createResMsg(section, "");
      return res.status(200).json(msg);
    }
  } catch (e) {
    const errMsg = `Unable to get Section with id=${id}. Something went wrong on the server side.`;
    console.warn(`---${errMsg}---`);
    console.warn(e);
    const msg: ResponseMessage = createResMsg([], errMsg);
    return res.status(500).json(msg);
  }
};

export const getSectionsByUserId = async (req: Request, res: Response) => {
  // get params
  const { userId } = req.params;

  // set hearders
  res.setHeader("Content-Type", "application/json");

  // check if userId is valid
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    console.warn("---passed in user id is invalid---");
    const msg: ResponseMessage = createResMsg([], "user id is invalid");
    return res.status(400).json(msg);
  }

  // check if there is an user with id = userId
  const user: User | null = await userModel.findById(userId);
  if (!user) {
    const msgText = `Tried to retrive sections for user with id=${userId} but this user does not exist`;
    console.warn(`---${msgText}---`);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(400).json(msg);
  }

  try {
    const query = { userId };
    const sections: Section[] | null = await sectionModel.find(query);

    console.log("---sections---");
    console.log(sections);

    // KEY: if there are no matching sections, we will just return empty array
    const msg: ResponseMessage = createResMsg(sections, "");
    return res.status(200).json(msg);
  } catch (e) {
    const errMsg = `Unable to get Sections for user id=${userId}. Something went wrong on the server side.`;
    console.warn(`---${errMsg}---`);
    console.warn(e);
    const msg: ResponseMessage = createResMsg([], errMsg);
    return res.status(500).json(msg);
  }
};
