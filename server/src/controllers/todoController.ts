import { Request, Response } from "express";
import todoModel, { Todo } from "../models/todoModel";
import sectionModel, { Group, Section } from "../models/sectionModel";
import { ResponseMessage } from "../shared/interfaces/responseMessage.interface";
import { createResMsg } from "../shared/helperFunctions";
import mongoose, { Schema } from "mongoose";
import { resolveSoa } from "dns";
import { group } from "console";
import userModel, { User } from "../models/userModel";

/* GET */
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

/* POST */
export const addTodo = async (req: Request, res: Response) => {
  // get request body
  const { userId, groupId, sectionId, tags, title, description, due_date, priority, columnPos } = req.body;

  console.log(req.body);
  console.log(`userId = ${userId}`);
  console.log(`groupId = ${groupId}`);
  console.log(`sectionId = ${sectionId}`);
  console.log(`tags = ${tags}`);
  console.log(`title = ${title}`);
  console.log(`description = ${description}`);
  console.log(`due_date = ${due_date}`);
  console.log(`priority = ${priority}`);
  console.log(`columnPos = ${columnPos}`);

  // set headers
  res.setHeader("Content-Type", "application/json");

  // check if all data are provided
  // TODO: due_date & priority might not need to be provided
  if (
    userId === undefined ||
    groupId === undefined ||
    sectionId === undefined ||
    tags === undefined ||
    title === undefined ||
    description === undefined ||
    due_date === undefined ||
    priority === undefined ||
    columnPos === undefined
  ) {
    const msgText = "Not all user information is provided";
    console.warn(`---${msgText}---`);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(400).json(msg);
  }

  // check if userId + groupId + sectionId are valid
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    const msgText = "User id is invalid";
    console.warn(`---${msgText}---`);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(400).json(msg);
  }

  if (!mongoose.Types.ObjectId.isValid(groupId)) {
    const msgText = "Group id is invalid";
    console.warn(`---${msgText}---`);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(400).json(msg);
  }

  if (!mongoose.Types.ObjectId.isValid(sectionId)) {
    const msgText = "Section id is invalid";
    console.warn(`---${msgText}---`);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(400).json(msg);
  }

  try {
    // check if userId + groupId + sectionId all exist
    const user: User | null = await userModel.findById(userId);
    const section: Section | null = await sectionModel.findById(sectionId);
    const group: Group | undefined = section?.groups.find((g: Group) => {
      console.log(`${g.id} ?== ${groupId}`);
      return `${g.id}` === `${groupId}`;
    });

    if (!user) {
      const msgText = `User with id=${userId} does not exist`;
      console.warn(`---${msgText}---`);
      const msg: ResponseMessage = createResMsg([], msgText);
      return res.status(400).json(msg);
    }

    if (!section) {
      const msgText = `Section with id=${sectionId} does not exist`;
      console.warn(`---${msgText}---`);
      const msg: ResponseMessage = createResMsg([], msgText);
      return res.status(400).json(msg);
    }

    if (!group) {
      const msgText = `Group with id=${groupId} does not exist`;
      console.warn(`---${msgText}---`);
      const msg: ResponseMessage = createResMsg([], msgText);
      return res.status(400).json(msg);
    }

    // add new todo
    const todo: Todo = new todoModel({ userId, groupId, sectionId, tags, title, description, due_date, priority, columnPos });
    await todo.save();
    console.log("---Added Todo---");
    console.log(todo);
    const msg: ResponseMessage = createResMsg(todo, "");
    return res.status(201).json(msg);
  } catch (e) {
    const msgText = "Unable to add a new todo. Something went wrong on the server side.";
    console.warn(`---${msgText}---`);
    console.warn(e);
    const msg: ResponseMessage = createResMsg([], msgText);
    return res.status(500).json(msg);
  }
};
