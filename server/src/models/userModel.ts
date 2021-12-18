import mongoose, { model, Schema, Document } from "mongoose";
import { Section } from "./sectionModel";

export interface User extends Document {
  // id: number; // userID
  username: string; // user's username
  currentSectionId: Section["_id"]; // indicates which section user is on currently, used to display the correct section on render
}

const UserSchema = new Schema<User>(
  {
    username: { type: String, required: true },
    currentSectionId: mongoose.Types.ObjectId,
  },
  {
    versionKey: false, // NOTE: [12/17/2021] - versionKey or "__v" property is turned off
  }
);

export default model("User", UserSchema);
