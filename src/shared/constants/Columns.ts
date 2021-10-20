/* COLUMNS type for react-table */

// TODO: Need to update this in the future
// KEY: It is important to write "as const" for "accessor", or else there will be errors when using it in "useTable"
export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id" as const,
  },
  {
    Header: "Group",
    accessor: "group" as const,
  },
  {
    Header: "Tags",
    accessor: "tag" as const,
  },
  {
    Header: "Title",
    accessor: "title" as const,
  },
  {
    Header: "Description",
    accessor: "description" as const,
  },
  {
    Header: "Due Date",
    accessor: "due_date" as const,
  },
  {
    Header: "Board Order",
    accessor: "boardOrder" as const,
  },
  {
    Header: "Table Order",
    accessor: "tableOrder" as const,
  },
];
