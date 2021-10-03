import React from "react";
import { TableDataArray } from "../../../shared/models";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  BoardViewMainContainer,
  BoardViewContentContainer,
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

// TODO: I don't believe react-table works with Kandan's Board View
// NOTE: [10/1/2021] Going to implement my own Kandan's View by using classes
const BoardView: React.FC<TableDataArray> = ({ data }) => {
  // material UI custom styles
  const classes = useStyles();

  return (
    <BoardViewMainContainer>
      {/* DEBUG: Mock view */}
      <BoardViewContentContainer>
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
          <BoardViewColumnInfoContainer></BoardViewColumnInfoContainer>
          <BoardViewCardContainer />
          <BoardViewCardContainer />
        </BoardViewColumn>
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
          <BoardViewColumnInfoContainer></BoardViewColumnInfoContainer>
          <BoardViewCardContainer />
          <BoardViewCardContainer />
          <BoardViewCardContainer />
          <BoardViewCardContainer />
          <BoardViewCardContainer />
        </BoardViewColumn>
      </BoardViewContentContainer>
    </BoardViewMainContainer>
  );
};

export default BoardView;
