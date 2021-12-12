// enum for different tags
// NOTE: for now only allow AT MOST 7 different tags
// TODO: [12/5/2021] could add more tags
export enum TagColorsKey {
  TAG_1 = 1,
  TAG_2,
  TAG_3,
  TAG_4,
  TAG_5,
  TAG_6,
  TAG_7,
}

// sort by types - currently supports 3
export enum SortByTypes {
  DEFAULT, // TODO: this will be by "columnPos"
  BY_NAME,
  BY_DUE_DATE,
}

// sort direction - either ascending or descending
export enum SortDirectionTypes {
  ASCENDING,
  DESCENDING,
}

export interface TagColor {
  color: string;
  text: string;
}

// Remember, it is
// Section
// -> Page
// -> View
export interface Section {
  id: number;
  userId: number; // indicates which user OWNS this section
  sectionName: string;
  sortBy: number;
  sortDirection: number; // TODO: this might be able to just be boolean, cuz it's only ascending + descending
  tagColors: {
    [tagNum in TagColorsKey]: TagColor;
  };
  groupsInfo: {
    [groupId: number]: {
      groupName: string;
      groupColor: string;
    };
  };
}
