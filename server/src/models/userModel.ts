import mongoose, { model, Schema } from "mongoose";

export interface User {
  // id: number; // userID
  username: string; // user's username
  currentSectionId: mongoose.Types.ObjectId; // indicates which section user is on currently, used to display the correct section on render
}

const UserSchema = new Schema<User>({
  username: String,
  currentSectionId: mongoose.Types.ObjectId,
});

export default model("User", UserSchema);
