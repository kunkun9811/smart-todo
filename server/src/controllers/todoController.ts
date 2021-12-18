import { Request, Response } from "express";
import todoModel, { Todo } from "../models/todoModel";
import sectionModel, { Section } from "../models/sectionModel";
import { ResponseMessage } from "../shared/interfaces/responseMessage.interface";
import { createResMsg } from "../shared/helperFunctions";
import mongoose, { Schema } from "mongoose";
import { resolveSoa } from "dns";

// TODO: need to update this
export const getAllTodos = async (req: Request, res: Response) => {
  // set headers
  res.setHeader("Content-Type", "application/json");

  try {
    const todos = await todoModel.find();
    console.log("---Get all todos---");
    console.log(todos);
    const msg: ResponseMessage = createResMsg(todos, "");
    res.status(200).json(msg);
  } catch (e) {
    const errMsg = "Unable to retrieve all todos. Something went wrong on the server side.";
    console.warn(`---${errMsg}---`);
    console.warn(e);
    const msg: ResponseMessage = createResMsg([], errMsg);
    res.status(500).json(msg);
  }
};

export const getTodoByid = async (req: Request, res: Response) => {
  // get params
  const { id } = req.params;

  // set headers
  res.setHeader("Content-Type", "application/json");

  // check if id is valid mongoose objectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const msgText = `---Todo id is invalid---`;
    console.warn(`---${msgText}---`);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(400).json(msg);
  }

  try {
    const todo: Todo | null = await todoModel.findById(id);
    if (!todo) {
      const msgText = `Todo with id=${id} does not exist`;
      console.log(`---${msgText}---`);
      const msg: ResponseMessage = createResMsg([], msgText);
      return res.status(404).json(msg);
    } else {
      console.log("---Todo---");
      console.log(todo);
      const msg: ResponseMessage = createResMsg(todo, "");
      return res.status(200).json(msg);
    }
  } catch (e) {
    const errMsg = `Unable to retrieve information for Todo with id=${id}. Something went worng on the server side.`;
    console.warn(`---${errMsg}---`);
    console.warn(e);
    const msg: ResponseMessage = createResMsg([], errMsg);
    return res.status(500).json(msg);
  }
};

export const getTodosBySectionId = async (req: Request, res: Response) => {
  // get params
  const { sectionId } = req.params;

  // set headers
  res.setHeader("Content-Type", "application/json");

  // check if sectionId is valid monogoose ObjectId
  if (!mongoose.Types.ObjectId.isValid(sectionId)) {
    const msgText = `Section id is not valid`;
    console.warn(`---${msgText}---`);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(400).json(msg);
  }

  // check if there is a section with id = sectionId
  const section: Section | null = await sectionModel.findById(sectionId);
  if (!section) {
    const msgText = `Tried to retrive todos for section with id=${sectionId} but this section does not exist`;
    console.warn(`---${msgText}---`);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(400).json(msg);
  }

  try {
    const query = { sectionId };
    const todos: Todo[] | null = await todoModel.find(query);

    console.log(`---todos in section with id=${sectionId}`);
    console.log(todos);

    // if there are no todos, just return empty todo array
    const msg: ResponseMessage = createResMsg(todos, "");
    res.status(200).json(msg);
  } catch (e) {
    const msgText = `Unable to retrieve todos in section with id=${sectionId}. Something went wrong on the server side.`;
    console.warn(`---${msgText}---`);
    console.warn(e);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(500).json(msg);
  }
};
