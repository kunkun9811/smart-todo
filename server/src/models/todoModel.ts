import mongoose, { Schema, model } from "mongoose";

enum Priority {
  LOW,
  MED,
  HIGH,
}

export interface Todo {
  // id: mongoose.Types.ObjectId; // id of current datum NOTE: I don't think I include this, this will be generated by mongodb
  userId: mongoose.Types.ObjectId; // id of the user this data belongs to
  groupId: mongoose.Types.ObjectId; // groupId (aka column's name)
  sectionId: mongoose.Types.ObjectId; // id of the section this datum belongs to
  tags: number[]; // tag numbers, fixed range of [0,6]
  title: string; // title of the current datum
  description: string; // description of the current datum
  due_date: string; // due date of the current datum
  priority: Priority; // 0-low, 1-medium, 2-high
  columnPos: number; // default sorting will be sort by this, this could later be modified by drag and drop functionalities
}

const TodoSchema = new Schema<Todo>({
  // id: mongoose.Types.ObjectId,
  userId: mongoose.Types.ObjectId,
  groupId: mongoose.Types.ObjectId,
  sectionId: mongoose.Types.ObjectId,
  tags: [Number],
  title: String,
  description: String,
  due_date: Date,
  priority: Number,
  columnPos: Number,
});

export default model("Todo", TodoSchema);
