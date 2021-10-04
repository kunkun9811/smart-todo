import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  BoardColumnContainer,
  BoardColumnInfoContainer,
  BoardColumnInfoWrapper,
  BoardColumnGroupNameContainer,
  BoardColumnGroupNameWrapper,
  BoardColumnGroupNameText,
  BoardColumnMoreButtonWrapper,
  BoardColumnAddButtonWrapper,
  BoardColumnCardContainer,
  useStyles,
} from "./Styles";
import BoardCard from "./BoardCard";

// TODO: might wanna set min-height and min-width of card to be larger
const BoardColumn = () => {
  const classes = useStyles();

  return (
    <BoardColumnContainer>
      {/* column info */}
      <BoardColumnInfoContainer>
        <BoardColumnInfoWrapper>
          <BoardColumnGroupNameContainer>
            <BoardColumnGroupNameWrapper>
              <BoardColumnGroupNameText>Tag</BoardColumnGroupNameText>
            </BoardColumnGroupNameWrapper>
          </BoardColumnGroupNameContainer>
          <BoardColumnMoreButtonWrapper>
            <MoreHorizIcon className={classes.columnButton} />
          </BoardColumnMoreButtonWrapper>
          <BoardColumnAddButtonWrapper>
            <AddIcon className={classes.columnButton} />
          </BoardColumnAddButtonWrapper>
        </BoardColumnInfoWrapper>
      </BoardColumnInfoContainer>

      {/* cards TODO: [10/3/2021] - need to add functionalities and style for board card */}
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
    </BoardColumnContainer>
  );
};

export default BoardColumn;
