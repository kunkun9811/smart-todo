import React, { useMemo } from "react";
import { useTable } from "react-table";
import {
  TableDatum,
  TableDataArray,
  ColumnsStructure,
} from "../../../shared/models";
import { COLUMNS } from "../../../shared/constants/Columns";
//TODO: this will be coming from parent, so the below data shouldn't be from MOCK_DATA in the future
import MOCK_DATA from "../../../mock-data/todos.json";

const TableView: React.FC<TableDataArray> = ({ data }) => {
  const columns = useMemo(() => COLUMNS, []);
  const mock_data = useMemo(() => MOCK_DATA, []);

  // TODO: ugh
  const tableInstance = useTable({ columns: columns });

  return <div></div>;
};

export default TableView;
