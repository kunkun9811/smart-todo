// TODO: Need to update this in the future
// KEY: It is important to write "as const" for "accessor", or else there will be errors when using it in "useTable"
export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id" as const,
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
    Header: "Priority",
    accessor: "priority" as const,
  },
];
