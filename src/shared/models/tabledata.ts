// TODO: [9/24/2021] might need to update this
// TODO: [9/29/2021] maybe change this to a class of "todo" in the future
export interface TableDatum {
  id: number;
  description: string;
  due_date: string;
  priority: string;
}

export interface TableDataArray {
  data: TableDatum[];
}

export interface ColumnsStructure {
  Header: string;
  accessor: string;
}
