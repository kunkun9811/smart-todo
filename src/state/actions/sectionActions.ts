/* NOTE: this file describes how each ACTION in SECTION should be called */

import { Section } from "../../shared/models/section";
import { SectionActionTypes } from "../action-types";

interface UpdateSectionAction {
  type: SectionActionTypes.UPDATE_SECTION;
  payload: Section;
}

// combine different combination of actions and export it
export type SectionActions = UpdateSectionAction;
