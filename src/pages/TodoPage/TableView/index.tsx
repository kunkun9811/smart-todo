import React, { useMemo } from "react";
import { useTable, Column } from "react-table";
import {
  TableDatum,
  TableDataArray,
  ColumnsStructure,
} from "../../../shared/models";
import { COLUMNS } from "../../../shared/constants/Columns";
import { Table, THead, Tr, Th, Td } from "./Styles";

//TODO: this will be coming from parent, so the below data shouldn't be from MOCK_DATA in the future
// import MOCK_DATA from "../../../mock-data/todos.json";
//TODO: to be deleted and do my own styling
// import "./Tmp.css";

// export type TableProps = {
//   data: Array<any>;
//   columns: Array<Column>;
//   enableSorting?: boolean;
//   hideHeaders?: boolean;
// };

// TODO: [9/28/2021] Figure out why table is hidden when width is small

// TODO: need to uncomment and use this one instead
const TableView: React.FC<TableDataArray> = ({ data }) => {
  // const TableView = () => {
  const columns = useMemo(() => COLUMNS, []);
  const todos = useMemo(() => data, [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: columns, data: todos });

  // KEY: NOTE: tried my best explaining the complex react-table functionalities
  return (
    // apply/enable react-table props
    <Table {...getTableProps()}>
      <THead>
        {
          // loop over group of headers
          headerGroups.map((headerGroup) => (
            // apply/enable react-table header group properties
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {
                // loop over headers or columns in each header group
                headerGroup.headers.map((column) => (
                  // apply/enable react-table column properties
                  <Th {...column.getHeaderProps()}>
                    {
                      // render the header or column
                      column.render("Header")
                    }
                  </Th>
                ))
              }
            </Tr>
          ))
        }
      </THead>

      {/* Apply the table body props or the rows properties */}
      <tbody {...getTableBodyProps()}>
        {
          // loop over the table rows
          rows.map((row) => {
            prepareRow(row); // KEY: prepare row for display
            return (
              // apply/enable row properties
              <tr {...row.getRowProps()}>
                {
                  // loop over the cells of each row or you could say the column properties of each row
                  row.cells.map((cell) => {
                    // apply/enable cell props
                    return (
                      <Td {...cell.getCellProps()}>
                        {
                          // render cell contents
                          cell.render("Cell")
                        }
                      </Td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </Table>
  );
};

export default TableView;
