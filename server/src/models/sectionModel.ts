import mongoose, { Schema, model, Document } from "mongoose";
import { User } from "./userModel";

/* local interfaces */
interface TagColor {
  color: string;
  text: string;
}
export interface Group {
  id: mongoose.Types.ObjectId;
  groupName: string;
  groupColor: string;
}

export interface Section extends Document {
  userId: User["_id"]; // indicates which user OWNS this section
  sectionName: string;
  sortBy: number;
  sortDirection: number; // TODO: this might be able to just be boolean, cuz it's only ascending + descending
  tagColors: TagColor[];
  groupsInfo: Group[];
}

/* mirror of local interfaces in mongoose.Schema */
const GroupInfoSchema = new Schema<Group>({
  id: mongoose.Types.ObjectId,
  groupName: String,
  groupColor: String,
});

const TagColorSchema = new Schema<TagColor>({
  color: String,
  text: String,
});

/* to be exported schema */
const SectionSchema = new Schema<Section>(
  {
    userId: { type: mongoose.Types.ObjectId, required: true },
    sectionName: { type: String, required: true },
    sortBy: { type: Number, required: true },
    sortDirection: { type: Number, required: true }, // TODO: this might be able to just be boolean, cuz it's only ascending + descending
    tagColors: { type: [TagColorSchema], required: true },
    groupsInfo: { type: [GroupInfoSchema], required: true },
  },
  {
    versionKey: false, // NOTE: [12/17/2021] - versionKey or "__v" property is turned off
  }
);

export default model("Section", SectionSchema);
