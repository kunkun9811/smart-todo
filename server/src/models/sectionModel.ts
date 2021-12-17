import mongoose, { Schema, model } from "mongoose";

/* local interfaces */
interface TagColor {
  color: string;
  text: string;
}
interface Group {
  id: mongoose.Types.ObjectId;
  groupName: string;
  groupColor: string;
}

export interface Section {
  userId: mongoose.Types.ObjectId; // indicates which user OWNS this section
  sectionName: string;
  sortBy: number;
  sortDirection: number; // TODO: this might be able to just be boolean, cuz it's only ascending + descending
  tagColors: TagColor[];
  groupsInfo: Group[];
}

const GroupInfoSchema = new Schema<Group>({
  id: mongoose.Types.ObjectId,
  groupName: String,
  groupColor: String,
});

/* mirror of local interfaces in mongoose.Schema */
const TagColorSchema = new Schema<TagColor>({
  color: String,
  text: String,
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
