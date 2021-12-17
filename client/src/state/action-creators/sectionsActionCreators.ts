/* NOTE: this file contains ALL the "Action Creators" for SectionReducer */
import { Section } from "../../shared/models/section.interface";
import { SectionsActionTypes } from "../action-types";
import { SectionsActions } from "../actions";
import { Dispatch } from "redux"; // KEY: get the "Dispatch type" from redux

// api
import { ResponseMessage } from "../../shared/models";
import { getSectionsByUserId } from "../../shared/api/sectionsAPI";

export const InitializeSections = (userId: string) => {
  return async (dispatch: Dispatch<SectionsActions>) => {
    try {
      const response: ResponseMessage = await getSectionsByUserId(userId);
      const sections: Section[] = response.data;
      dispatch({
        type: SectionsActionTypes.INITIALIZE_SECTIONS,
        payload: sections,
      });
    } catch (e) {
      console.warn("---Unable to retrieve sections by user id---");
      console.warn(e);
    }
  };
};

// TODO: need to integrate this with API
export const AddSection = (section: Section) => {
  return (dispatch: Dispatch<SectionsActions>) => {
    dispatch({
      type: SectionsActionTypes.ADD_SECTION,
      payload: section,
    });
  };
};
