export enum Priority {
  LOW,
  MED,
  HIGH,
}

export interface Datum {
  id: number; // id of current datum
  sectionId: number; // id of the section this datum belongs to
  tags: number[]; // tag numbers of range [1,7], specifies which tags current datum has
  title: string; // title of the current datum
  description: string; // description of the current datum
  due_date: string; // due date of the current datum
  priority: Priority; // 0-low, 1-medium, 2-high
  columnPos: number; // default sorting will be sort by this, this could later be modified by drag and drop functionalities
  groupId: number; // groupId (aka column's name)
  groupName: string; // groupName (aka column's name)
  groupColor: string; // groupColor (aka column's color)
}

export interface DataArray {
  data: Datum[];
}

export interface ColumnsStructure {
  Header: string;
  accessor: string;
}
