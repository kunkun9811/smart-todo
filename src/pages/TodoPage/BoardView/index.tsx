import React from "react";
import { DataArray } from "../../../shared/models";
import { BoardViewMainContainer, BoardViewContentContainer } from "./Styles";
import BoardColumn from "./BoardColumn";

// TODO: [10/1/2021] Going to implement my own Kandan's View by using classes
const BoardView: React.FC<DataArray> = ({ data }) => {
  return (
    <BoardViewMainContainer>
      {/* DEBUG: Mock view */}
      {/* <BoardViewContentContainer>
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
      </BoardViewContentContainer> */}
      {/* NOTE: Official code */}
      <BoardViewContentContainer></BoardViewContentContainer>
    </BoardViewMainContainer>
  );
};

export default BoardView;
