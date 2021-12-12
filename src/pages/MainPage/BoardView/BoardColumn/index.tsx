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
import { TodoArray, Todo, Section } from "../../../../shared/models";

/* redux imports */
import { useSelector } from "react-redux";
import { State } from "../../../../state";

/* parameters */
// --- group ---
// group id
// group name
// group color

/* local interfaces/models */
interface BoardColumnStates {
  groupName: Todo["groupName"];
  groupColor: Todo["groupColor"];
}

/* local initial states */
const initialState: BoardColumnStates = {
  groupName: "",
  groupColor: "",
};

// NOTE: this is saying "this functino takes in parameter 'TodoArray'" and at the actualy
// parameter we destructure out the interface TodoArray. KEY: Hint: look at the interface for TodoArray
const BoardColumn: React.FC<TodoArray> = ({ data }) => {
  // MUI styles
  const classes = useStyles();

  // redux states
  const section: Section = useSelector((state: State) => state.sections).filter((s: Section) => s.id === data[0].sectionId)[0];

  const [groupName, setGroupName] = useState<BoardColumnStates["groupName"]>(initialState.groupName);
  const [groupColor, setGroupColor] = useState<BoardColumnStates["groupColor"]>(initialState.groupColor);

  /* effects */
  useEffect(() => {
    if (data !== undefined && section !== undefined) {
      const groupId = data[0].groupId;
      setGroupName(section.groupsInfo[groupId].groupName);
      setGroupColor(section.groupsInfo[groupId].groupColor);
    }
  }, [section, data]);

  return (
    <BoardColumnContainer>
      {/* column info */}
      <BoardColumnInfoContainer>
        <BoardColumnInfoWrapper>
          <BoardColumnGroupNameContainer>
            <BoardColumnGroupNameWrapper groupColor={groupColor}>
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

      {data.map((itemInfo: Todo) => (
        <BoardCard {...itemInfo} key={itemInfo["id"]} />
      ))}
    </BoardColumnContainer>
  );
};

export default BoardColumn;
