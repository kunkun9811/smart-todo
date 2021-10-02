import React, { useMemo } from "react";
import { TableDataArray } from "../../../shared/models";
import { useTable } from "react-table";
import { COLUMNS } from "../../../shared/constants/Columns";
import { Table, THead, HeadTr, TBody, BodyTr, Th, Td } from "./Styles";

const TableView: React.FC<TableDataArray> = ({ data }) => {
  // recommended/required to use useMemo to prevent react-table from too much refreshing
  const columns = useMemo(() => COLUMNS, []);
  const todos = useMemo(() => data, [data]);

  // react-table functions and properties
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns: columns, data: todos });

  // KEY: NOTE: tried my best explaining the complex react-table functionalities
  return (
    // apply/enable react-table props
    <Table {...getTableProps()}>
      <THead>
        {
          // loop over group of headers
          headerGroups.map((headerGroup) => (
            // apply/enable react-table header group properties
            <HeadTr {...headerGroup.getHeaderGroupProps()}>
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
            </HeadTr>
          ))
        }
      </THead>

      {/* Apply the table body props or the rows properties */}
      <TBody {...getTableBodyProps()}>
        {
          // loop over the table rows
          rows.map((row) => {
            prepareRow(row); // KEY: prepare row for display
            return (
              // apply/enable row properties
              <BodyTr {...row.getRowProps()}>
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
              </BodyTr>
            );
          })
        }
      </TBody>
    </Table>
  );
};

export default TableView;
