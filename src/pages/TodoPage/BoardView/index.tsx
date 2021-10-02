import React from "react";
import { TableDataArray } from "../../../shared/models";
import { BoardViewMainContainer, BoardViewColumn, BoardViewContentContainer, BoardViewCardContainer } from "./Styles";

// TODO: I don't believe react-table works with Kandan's Board View
// NOTE: [10/1/2021] Going to implement my own Kandan's View by using classes
const BoardView: React.FC<TableDataArray> = ({ data }) => {
  return (
    <BoardViewMainContainer>
      {/* DEBUG: Mock view */}
      {/* <BoardViewContentContainer>
        <BoardViewColumn>
          <BoardViewCardContainer />
          <BoardViewCardContainer />
          <BoardViewCardContainer />
          <BoardViewCardContainer />
        </BoardViewColumn>
        <BoardViewColumn>
          <BoardViewCardContainer />
          <BoardViewCardContainer />
        </BoardViewColumn>
        <BoardViewColumn>
          <BoardViewCardContainer />
          <BoardViewCardContainer />
          <BoardViewCardContainer />
          <BoardViewCardContainer />
          <BoardViewCardContainer />
        </BoardViewColumn>
      </BoardViewContentContainer> */}
    </BoardViewMainContainer>
  );
};

export default BoardView;
