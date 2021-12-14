import mongoose, { Schema, model } from "mongoose";

enum TagColorsKey {
  TAG_1 = 1,
  TAG_2,
  TAG_3,
  TAG_4,
  TAG_5,
  TAG_6,
  TAG_7,
}

interface TagColor {
  color: string;
  text: string;
}

interface Section {
  // id: number;
  userId: mongoose.Types.ObjectId; // indicates which user OWNS this section
  sectionName: string;
  sortBy: number;
  sortDirection: number; // TODO: this might be able to just be boolean, cuz it's only ascending + descending
  tagColors: {
    [tagNum in TagColorsKey]: TagColor;
  };
  groupsInfo: {
    [groupId: string]: {
      groupName: string;
      groupColor: string;
    };
  };
}

const sectionSchema = new Schema<Section>({
  userId: mongoose.Types.ObjectId,
  sectionName: String,
  sortBy: Number,
  sortDirection: Number, // TODO: this might be able to just be boolean, cuz it's only ascending + descending
  tagColors: {
    Number: {
      color: String,
      text: String,
    },
  },
  groupsInfo: {
    string: {
      groupName: String,
      groupColor: String,
    },
  },
});

export default model("Section", sectionSchema);
