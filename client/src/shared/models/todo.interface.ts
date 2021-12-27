export enum Priority {
  LOW,
  MED,
  HIGH,
}

export interface NewTodo {
  userId: string; // id of the user this data belongs to
  groupId: string; // groupId (aka column's name)
  sectionId: string; // id of the section this datum belongs to
  tags: number[]; /// tag numbers, fixed range of [0,6]
  title: string; // title of the current datum
  description: string; // description of the current datum
  due_date: string; // due date of the current datum
  priority: Priority; // 0-low, 1-medium, 2-high

  // TODO: [12/16/2021] need to add to database
  columnPos: number; // default sorting will be sort by this, this could later be modified by drag and drop functionalities
}

export interface Todo extends NewTodo {
  _id: string; // id of current datum
}

export interface TodoArray {
  data: Todo[];
}

/* NOTE: DEPRECATED: was for table view */
// export interface ColumnsStructure {
//   Header: string;
//   accessor: string;
// }
