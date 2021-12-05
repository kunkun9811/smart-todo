import { TagColorsKey, SortByTypes, SortDirectionTypes, TagColor, Section } from "../../shared/models/section";
import { SectionActionTypes } from "../action-types";
import { SectionActions } from "../actions";

/* local state */
// all default tag colors will be these
const initialTagColors: Section["tagColors"] = {
  1: {
    color: "red",
    text: "",
  },
  2: {
    color: "orange",
    text: "",
  },
  3: {
    color: "yellow",
    text: "",
  },
  4: {
    color: "green",
    text: "",
  },
  5: {
    color: "blue",
    text: "",
  },
  6: {
    color: "indigo",
    text: "",
  },
  7: {
    color: "violet",
    text: "",
  },
};

const initialState: Section = {
  id: -1,
  sectionName: "",
  sortBy: SortByTypes.DEFAULT,
  sortDirection: SortDirectionTypes.ASCENDING,
  tagColors: initialTagColors,
};

const sectionReducer = (state: Section = initialState, action: SectionActions): Section => {
  switch (action.type) {
    case SectionActionTypes.UPDATE_SECTION:
      return action.payload;
    default:
      return state;
  }
};

export default sectionReducer;
