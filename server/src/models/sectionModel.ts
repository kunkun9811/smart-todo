import mongoose, { Schema, model } from "mongoose";

/* local interfaces */
interface TagColor {
  color: string;
  text: string;
}

interface GroupInfo {
  groupName: string;
  groupColor: string;
}

export interface Section {
  // id: number;
  userId: mongoose.Types.ObjectId; // indicates which user OWNS this section
  sectionName: string;
  sortBy: number;
  sortDirection: number; // TODO: this might be able to just be boolean, cuz it's only ascending + descending
  tagColors: TagColor[];
  groupsInfo: GroupInfo[];
}

/* mirror of local interfaces in mongoose.Schema */
const TagColorSchema = new mongoose.Schema<TagColor>({
  color: String,
  text: String,
});

const GroupInfoSchema = new mongoose.Schema<GroupInfo>({
  groupName: String,
  groupColor: String,
});

/* to be exported schema */
const SectionSchema = new Schema<Section>({
  userId: mongoose.Types.ObjectId,
  sectionName: String,
  sortBy: Number,
  sortDirection: Number, // TODO: this might be able to just be boolean, cuz it's only ascending + descending
  tagColors: [TagColorSchema],
  groupsInfo: [GroupInfoSchema],
});

export default model("Section", SectionSchema);
