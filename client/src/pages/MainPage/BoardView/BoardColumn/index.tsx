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
  // OptionsButton,
  // AddButton,
} from "./Styles";
import { useStyles } from "../../../../shared/styles/muiStyles";
import OptionsButton from "../../../../shared/components/OptionsButton";
import AddButton from "../../../../shared/components/AddButton";
import BoardCard from "./BoardCard";
import { TodoArray, Todo, Group, Section, User, NewTodo, Priority } from "../../../../shared/models";

/* redux imports */
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { TodosActionCreators, State } from "../../../../state";

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

  // redux states
  const user: User = useSelector((state: State) => state.user);
  const section: Section | undefined = useSelector((state: State) => state.sections).find((s: Section) => s._id === user.currentSectionId);

  // redux update functions
  const dispatch = useDispatch();
  const { AddTodo } = bindActionCreators(TodosActionCreators, dispatch);

  // methods
  const optionsHandler = () => {
    console.log(`Clicked Options Button for "${group.groupName}"`);
  };

  const addNewTodoHandler = () => {
    /* DEBUG: */
    console.log(group);
    const newTodo: NewTodo = {
      userId: user._id,
      groupId: group.id,
      sectionId: user.currentSectionId, // NOTE: using "user.currentSectionId" because typesciprt says ".find()" might return undefined
      tags: [0],
      title: "this is testing if add new todo works via frontend",
      description: "hi",
      due_date: Date(),
      priority: Priority.LOW,
      columnPos: 0,
    };
    AddTodo(newTodo);
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
            <OptionsButton onClick={optionsHandler} className={classes.button} />
          </BoardColumnMoreButtonWrapper>
          <BoardColumnAddButtonWrapper>
            <AddButton onClick={addNewTodoHandler} className={classes.button} />
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
