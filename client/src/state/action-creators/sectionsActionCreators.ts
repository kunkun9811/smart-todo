/* NOTE: this file contains ALL the "Action Creators" for SectionReducer */
import { Section } from "../../shared/models/section";
import { SectionsActionTypes } from "../action-types";
import { SectionsActions } from "../actions";
import { Dispatch } from "redux"; // KEY: get the "Dispatch type" from redux

export const InitializeSections = (sections: Section[]) => {
  return (dispatch: Dispatch<SectionsActions>) => {
    dispatch({
      type: SectionsActionTypes.INITIALIZE_SECTIONS,
      payload: sections,
    });
  };
};

export const AddSection = (section: Section) => {
  return (dispatch: Dispatch<SectionsActions>) => {
    dispatch({
      type: SectionsActionTypes.ADD_SECTION,
      payload: section,
    });
  };
};
