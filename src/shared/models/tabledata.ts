/* local interfaces/model */
export enum Priority {
  LOW,
  MED,
  HIGH,
}

// TODO: [9/24/2021] might need to update this
export interface Datum {
  id: number; //
  tags: string[]; // TODO: these will be "number[]"
  title: string; //
  description: string; //
  due_date: string; //
  priority: Priority; // 0-low, 1-medium, 2-high
  boardOrder: number; // TODO: change this to columnPos
  groupId: number; //
  groupName: string; //
  groupColor: string; //
}

export interface DataArray {
  data: Datum[];
}

export interface ColumnsStructure {
  Header: string;
  accessor: string;
}
