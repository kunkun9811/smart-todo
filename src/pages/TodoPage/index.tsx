import { useState } from "react";
import { TodoPageContainer } from "./Styles";
import { TableDataArray, TableDatum } from "../../shared/models";
import TableView from "./TableView";
import BoardView from "./BoardView";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { TodosActionCreators, State } from "../../state";

//TODO: [9/30/2021] the below data shouldn't be from MOCK_DATA in the future, [data] should be populated from database
import MOCK_DATA from "../../mock-data/todos.json";

const initialState = {
  id: 0,
  description: "",
  dueDate: "",
  priority: "",
  // TODO: [9/30/2021] delete this later, [data] should be populated from database
  data: MOCK_DATA,
};

const TodoPage = () => {
  /* redux variables */
  // redux dispatch
  const dispatch = useDispatch();
  // get action creators
  const { AddTodo } = bindActionCreators(TodosActionCreators, dispatch);
  // state in the store TODO: need to maybe delete the [todos] variable at line 37
  const todos = useSelector((state: State) => state.todos);

  // states for user inputs
  const [id, setId] = useState<TableDatum["id"]>(initialState.id);
  const [description, setDescription] = useState<TableDatum["description"]>(initialState.description);
  const [dueDate, setDueDate] = useState<TableDatum["due_date"]>(initialState.dueDate);
  const [priority, setPriority] = useState<TableDatum["priority"]>(initialState.priority);
  // const [todos, setTodos] = useState<TableDataArray["data"]>(initialState.data); // DEBUG: If want to just have mock_data populated, uncomment this

  // add new todo from user inputs
  const addTodo = (): void => {
    if (description === "" && priority === "") {
      alert("Please enter both the 'description' and the 'priority'");
      return;
    } else if (description === "") {
      alert("Please the 'description'");
      return;
    } else if (priority === "") {
      alert("Please enter the 'priority'");
      return;
    }

    // check if inputs are all valid
    let logString = "";
    if (id === 0) logString += "Please Enter [id]\n";
    if (description.length === 0) logString += "Please Enter [description]\n";
    if (dueDate.length === 0) logString += "Please Enter [due date]\n";
    if (priority.length === 0) logString += "Please Enter [Priority]\n";
    if (logString.length > 0) {
      alert(logString);
      return;
    }

    // construct new todo
    const newTodo: TableDatum = {
      id,
      description,
      due_date: dueDate,
      priority,
    };

    // update redux todos list
    AddTodo(newTodo);

    // reset states
    setId(initialState.id);
    setDescription(initialState.description);
    setDueDate(initialState.dueDate);
    setPriority(initialState.priority);

    // clear input values
    Array.from(document.querySelectorAll("input")).forEach((input) => (input.value = ""));
  };

  return (
    <TodoPageContainer>
      {/* TODO: [9/30/2021] Make Input Component in the future */}
      <input
        id="id"
        type="text"
        placeholder="id"
        value={id ? id : 0}
        onChange={(e) => {
          setId(parseInt(e.target.value));
        }}
      />
      <input
        id="description"
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        id="due_date"
        type="text"
        placeholder="due date"
        onChange={(e) => {
          setDueDate(e.target.value);
        }}
      />
      <input
        id="priority"
        type="text"
        placeholder="priority"
        onChange={(e) => {
          setPriority(e.target.value);
        }}
      />
      <button onClick={() => addTodo()}>Add</button>

      {/* TODO: [9/30/2021] - do conditional rendering */}
      {/* view type #1: table view */}
      {/* <TableView data={todos} /> */}

      {/* view type #2: board view/kanban board */}
      <BoardView data={todos} />
    </TodoPageContainer>
  );
};

export default TodoPage;
