import { Section } from "../../shared/models/section";
import { SectionsActionTypes } from "../action-types";
import { SectionsActions } from "../actions";

/* local initial state */
const initialState: Section[] = [];

const sectionReducer = (state: Section[] = initialState, action: SectionsActions): Section[] => {
  switch (action.type) {
    case SectionsActionTypes.INITIALIZE_SECTIONS:
      return action.payload;
    case SectionsActionTypes.ADD_SECTION:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default sectionReducer;
