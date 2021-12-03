import { useEffect, useState } from "react";
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
import { DataArray, Datum } from "../../../../shared/models";

/* parameters */
// --- tag ---
// tag id
// tag name
// tag color
// --- items/todos --- : this might be able to grab by tag name/group name from redux state

/* local interfaces/models */
interface BoardColumnStates {
  tagName: Datum["tagName"];
}

/* local initial states */
const initialState: BoardColumnStates = {
  tagName: "",
};

// NOTE: this is saying "this functino takes in parameter 'DataArray'" and at the actualy
// parameter we destructure out the interface DataArray. KEY: Hint: look at the interface for DataArray
const BoardColumn: React.FC<DataArray> = ({ data }) => {
  const classes = useStyles();

  const [tagName, setTagName] = useState<BoardColumnStates["tagName"]>(initialState.tagName);

  /* effects */
  useEffect(() => {
    setTagName(data[0]["tagName"]);
  }, []);

  return (
    <BoardColumnContainer>
      {/* column info */}
      <BoardColumnInfoContainer>
        <BoardColumnInfoWrapper>
          <BoardColumnGroupNameContainer>
            <BoardColumnGroupNameWrapper>
              {/* <BoardColumnGroupNameText>Tag</BoardColumnGroupNameText> */}
              <BoardColumnGroupNameText>{tagName}</BoardColumnGroupNameText>
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
      {/* DEBUG: Mock View */}
      {/* <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard /> */}
      {/* TODO: need to change BoardCard */}
      {data.map((info: Datum) => (
        // <BoardCard {...info} />
        <BoardCard />
      ))}
    </BoardColumnContainer>
  );
};

export default BoardColumn;

// TODO: about to start doing BoardCard, go to figma and understand the difference btw BoardCard and BoardCardView
// - ALSO, not sure if BoardCard is really rendering here, when I used mock view it is not showing.
