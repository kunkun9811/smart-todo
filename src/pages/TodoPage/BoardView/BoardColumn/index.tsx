import React from "react";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  BoardViewColumn,
  BoardViewColumnInfoContainer,
  BoardViedwColumnInfoWrapper,
  BoardViewGroupNameContainer,
  BoardViewGroupNameWrapper,
  BoardViewGroupNameText,
  BoardViewMoreButtonWrapper,
  BoardViewAddButtonWrapper,
  BoardViewCardContainer,
  useStyles,
} from "./Styles";

// TODO: might wanna set min-height and min-width of card to be larger
const BoardColumn = () => {
  const classes = useStyles();

  return (
    <BoardViewColumn>
      <BoardViewColumnInfoContainer>
        <BoardViedwColumnInfoWrapper>
          <BoardViewGroupNameContainer>
            <BoardViewGroupNameWrapper>
              <BoardViewGroupNameText>Tag</BoardViewGroupNameText>
            </BoardViewGroupNameWrapper>
          </BoardViewGroupNameContainer>
          <BoardViewMoreButtonWrapper>
            <MoreHorizIcon className={classes.columnButton} />
          </BoardViewMoreButtonWrapper>
          <BoardViewAddButtonWrapper>
            <AddIcon className={classes.columnButton} />
          </BoardViewAddButtonWrapper>
        </BoardViedwColumnInfoWrapper>
      </BoardViewColumnInfoContainer>
      <BoardViewCardContainer />
      <BoardViewCardContainer />
      <BoardViewCardContainer />
      <BoardViewCardContainer />
    </BoardViewColumn>
  );
};

export default BoardColumn;
