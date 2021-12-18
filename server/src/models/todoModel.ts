import mongoose, { Schema, model, Document } from "mongoose";
import { Group, Section } from "./sectionModel";
import { User } from "./userModel";

enum Priority {
  LOW,
  MED,
  HIGH,
}

export interface Todo extends Document {
  userId: User["_id"]; // id of the user this data belongs to
  groupId: Group["id"]; // groupId (aka column's name)
  sectionId: Section["_id"]; // id of the section this datum belongs to
  tags: number[]; // tag numbers, fixed range of [0,6]
  title: string; // title of the current datum
  description: string; // description of the current datum
  due_date: Date; // due date of the current datum
  priority: Priority; // 0-low, 1-medium, 2-high
  columnPos: number; // default sorting will be sort by this, this could later be modified by drag and drop functionalities
}

const TodoSchema = new Schema<Todo>(
  {
    userId: { type: mongoose.Types.ObjectId, required: true },
    groupId: { type: Schema.Types.ObjectId, required: true },
    sectionId: { type: mongoose.Types.ObjectId, required: true },
    tags: { type: [Number], required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    due_date: { type: Date, required: true },
    priority: { type: Number, required: true },
    columnPos: { type: Number, required: true },
  },
  {
    versionKey: false, // NOTE: [12/17/2021] - versionKey or "__v" property is turned off
  }
);

export default model("Todo", TodoSchema);
