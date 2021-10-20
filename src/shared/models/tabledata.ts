// TODO: [9/24/2021] might need to update this
// TODO: [9/29/2021] maybe change this to a class of "todo" in the future
export interface Datum {
  id: number;
  group: string;
  tags: string[];
  title: string;
  description: string;
  due_date: string;
  boardOrder: number;
  tableOrder: number;
}

export interface DataArray {
  data: Datum[];
}

export interface ColumnsStructure {
  Header: string;
  accessor: string;
}
