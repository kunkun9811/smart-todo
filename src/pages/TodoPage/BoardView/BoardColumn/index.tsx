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
// --- group ---
// group id
// group name
// group color

/* local interfaces/models */
interface BoardColumnStates {
  groupName: Datum["groupName"];
}

/* local initial states */
const initialState: BoardColumnStates = {
  groupName: "",
};

// NOTE: this is saying "this functino takes in parameter 'DataArray'" and at the actualy
// parameter we destructure out the interface DataArray. KEY: Hint: look at the interface for DataArray
const BoardColumn: React.FC<DataArray> = ({ data }) => {
  const classes = useStyles();

  const [groupName, setGroupName] = useState<BoardColumnStates["groupName"]>(initialState.groupName);

  /* effects */
  useEffect(() => {
    setGroupName(data[0]["groupName"]);
  }, [data]);

  return (
    <BoardColumnContainer>
      {/* column info */}
      <BoardColumnInfoContainer>
        <BoardColumnInfoWrapper>
          <BoardColumnGroupNameContainer>
            <BoardColumnGroupNameWrapper>
              <BoardColumnGroupNameText>{groupName}</BoardColumnGroupNameText>
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

      {/* DEBUG: Mock View */}
      {/* <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard /> */}
      {/* TODO: need to change BoardCard */}
      {data.map((itemInfo: Datum) => (
        <BoardCard {...itemInfo} key={itemInfo["id"]} />
      ))}
    </BoardColumnContainer>
  );
};

export default BoardColumn;
