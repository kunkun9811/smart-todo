/* NOTE: this file describes how each ACTION in SECTION should be called */

import { Section } from "../../shared/models/section.interface";
import { SectionsActionTypes } from "../action-types";

interface InitializeSectionsAction {
  type: SectionsActionTypes.INITIALIZE_SECTIONS;
  payload: Section[];
}

interface AddSectionAction {
  type: SectionsActionTypes.ADD_SECTION;
  payload: Section;
}

// combine different combination of actions and export it
export type SectionsActions = InitializeSectionsAction | AddSectionAction;
