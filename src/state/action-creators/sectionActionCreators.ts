/* NOTE: this file contains ALL the "Action Creators" for SectionReducer */
import { Section } from "../../shared/models/section";
import { SectionActionTypes } from "../action-types";
import { SectionActions } from "../actions";
import { Dispatch } from "redux"; // KEY: get the "Dispatch type" from redux

export const UpdateSection = (section: Section) => {
  return (dispatch: Dispatch<SectionActions>) => {
    dispatch({
      type: SectionActionTypes.UPDATE_SECTION,
      payload: section,
    });
  };
};
