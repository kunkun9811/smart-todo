import {
  BoardColumnContainer,
  BoardColumnInfoContainer,
  BoardColumnInfoWrapper,
  BoardColumnGroupNameContainer,
  BoardColumnGroupNameWrapper,
  BoardColumnGroupNameText,
  BoardColumnMoreButtonWrapper,
  BoardColumnAddButtonWrapper,
  // BoardColumnCardContainer,
  OptionsButton,
  AddButton,
  useStyles,
} from "./Styles";
import BoardCard from "./BoardCard";
import { TodoArray, Todo, Group } from "../../../../shared/models";

/* local params */
interface BoardColumnParams {
  data: TodoArray["data"];
  group: Group;
}

// NOTE: this is saying "this functino takes in parameter 'TodoArray'" and at the actualy
// parameter we destructure out the interface TodoArray. KEY: Hint: look at the interface for TodoArray
// TODO: For this functional component, also pass in the corresponding group
const BoardColumn: React.FC<BoardColumnParams> = ({ data, group }) => {
  // MUI styles
  const classes = useStyles();

  // methods
  const optionsHandler = () => {
    console.log(`Clicked Options Button for "${group.groupName}"`);
  };

  const addNewTodoHandler = () => {
    console.log(group);
  };

  return (
    <BoardColumnContainer>
      {/* column info */}
      <BoardColumnInfoContainer>
        <BoardColumnInfoWrapper>
          <BoardColumnGroupNameContainer>
            <BoardColumnGroupNameWrapper groupColor={group.groupColor}>
              <BoardColumnGroupNameText>{group.groupName}</BoardColumnGroupNameText>
            </BoardColumnGroupNameWrapper>
          </BoardColumnGroupNameContainer>
          <BoardColumnMoreButtonWrapper>
            <OptionsButton onClick={optionsHandler} className={classes.columnButton} />
          </BoardColumnMoreButtonWrapper>
          <BoardColumnAddButtonWrapper>
            <AddButton onClick={addNewTodoHandler} className={classes.columnButton} />
          </BoardColumnAddButtonWrapper>
        </BoardColumnInfoWrapper>
      </BoardColumnInfoContainer>

      {data.map((itemInfo: Todo) => (
        <BoardCard {...itemInfo} key={itemInfo["_id"]} />
      ))}
    </BoardColumnContainer>
  );
};

export default BoardColumn;
