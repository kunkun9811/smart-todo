import React from "react";
import { TableDataArray } from "../../../shared/models";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  BoardViewMainContainer,
  BoardViewContentContainer,
  // BoardViewColumn,
  // BoardViewColumnInfoContainer,
  // BoardViedwColumnInfoWrapper,
  // BoardViewGroupNameContainer,
  // BoardViewGroupNameWrapper,
  // BoardViewGroupNameText,
  // BoardViewMoreButtonWrapper,
  // BoardViewAddButtonWrapper,
  // BoardViewCardContainer,
  // useStyles,
} from "./Styles";
import BoardColumn from "./BoardColumn";

// TODO: I don't believe react-table works with Kandan's Board View
// NOTE: [10/1/2021] Going to implement my own Kandan's View by using classes
const BoardView: React.FC<TableDataArray> = ({ data }) => {
  // material UI custom styles
  // const classes = useStyles();

  return (
    <BoardViewMainContainer>
      {/* DEBUG: Mock view */}
      <BoardViewContentContainer>
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
      </BoardViewContentContainer>
    </BoardViewMainContainer>
  );
};

export default BoardView;
