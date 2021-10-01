import React from "react";
import { TableDataArray } from "../../../shared/models";
import { useTable } from "react-table";

// TODO: kinda tired rn but I was about to do board view using react-table
const BoardView: React.FC<TableDataArray> = ({ data }) => {
  return (
    <div>
      <h1>Board View</h1>
      <ul>
        {data.map((datum) => (
          <li>{datum.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default BoardView;
