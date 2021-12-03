import { useEffect, useState } from "react";
import { TodoPageContainer } from "./Styles";
import { DataArray, Datum, Priority } from "../../shared/models";
import BoardView from "./BoardView";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { TodosActionCreators, State } from "../../state";
import usePopulateTodos from "../../shared/hooks/usePopulateTodos";

const initialState = {
  id: -1,
  group: "",
  tags: [],
  title: "",
  description: "",
  dueDate: "",
  priority: Priority.HIGH,
  boardOrder: -1,
  tagId: 0, // 0 means no tag/group
  tagName: "",
  tagColor: "",
};

const TodoPage = () => {
  /* redux variables */
  // redux dispatch
  const dispatch = useDispatch();
  // get action creators
  const { AddTodo } = bindActionCreators(TodosActionCreators, dispatch);
  // state in the store TODO: need to maybe delete the [todos] variable at line 37
  const todos: DataArray["data"] = useSelector((state: State) => state.todos);

  // states for user inputs
  const [id, setId] = useState<Datum["id"]>(initialState.id);
  const [group, setGroup] = useState<Datum["group"]>(initialState.group);
  const [tags, setTags] = useState<Datum["tags"]>(initialState.tags);
  const [title, setTitle] = useState<Datum["title"]>(initialState.title);
  const [description, setDescription] = useState<Datum["description"]>(initialState.description);
  const [dueDate, setDueDate] = useState<Datum["due_date"]>(initialState.dueDate);
  const [priority, setPriority] = useState<Datum["priority"]>(initialState.priority);
  const [boardOrder, setBoardOrder] = useState<Datum["boardOrder"]>(initialState.boardOrder);
  const [tagId, setTagId] = useState<Datum["tagId"]>(initialState.tagId);
  const [tagName, setTagName] = useState<Datum["tagName"]>(initialState.tagName);
  const [tagColor, setTagColor] = useState<Datum["tagColor"]>(initialState.tagColor);

  /* effects */
  // populate todos from database
  usePopulateTodos();

  /* methods */
  // add new todo from user inputs
  const addTodo = (): void => {
    if (description === "") {
      alert("Please enter the 'description'");
      return;
    }

    // check if inputs are all valid
    let logString = "";
    if (id === -1) logString += "Please Enter [id]\n";
    if (description.length === 0) logString += "Please Enter [description]\n";
    if (dueDate.length === 0) logString += "Please Enter [due date]\n";
    if (logString.length > 0) {
      alert(logString);
      return;
    }

    // construct new todo
    const newTodo: Datum = {
      id,
      group,
      tags,
      title,
      description,
      due_date: dueDate,
      priority,
      boardOrder,
      tagId,
      tagName,
      tagColor,
    };

    // update redux todos list
    AddTodo(newTodo);

    console.log("---Added New Todo!---");
    console.log(newTodo);

    // reset states
    setId(initialState.id);
    setDescription(initialState.description);
    setDueDate(initialState.dueDate);
    setPriority(initialState.priority);

    // clear input values
    Array.from(document.querySelectorAll("input")).forEach((input) => (input.value = ""));
  };

  // TODO: [12/2/2021] need to add more inputs
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
        type="date"
        placeholder="due date"
        onChange={(e) => {
          // NOTE: upon further research, JavaScript Date object acts strangely, so we need to process the input value first by changing '-' to '/' and
          // removing strings after 'T' if there is one since we do not care about exact time for now
          // refer to https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off?rq=1
          const formattedDateString = e.target.value.replace(/-/g, "/").replace(/T.+/, "");
          const date = new Date(formattedDateString);
          var month: string = (date.getMonth() + 1).toString();
          var day: string = date.getDate().toString();
          var year: string = date.getFullYear().toString();

          if (month.length < 2) month = "0" + month;
          if (day.length < 2) day = "0" + day;

          var newDate: string = [month, day, year].join("/");

          setDueDate(newDate);
        }}
      />
      {/* TODO: need to change this so that there are only 3 options, low, med, high */}
      <input
        id="priority"
        type="text"
        placeholder="priority"
        onChange={(e) => {
          setPriority(parseInt(e.target.value));
        }}
      />
      <button onClick={() => addTodo()}>Add</button>

      {/* board view/kanban board */}
      <BoardView data={todos} />
    </TodoPageContainer>
  );
};

export default TodoPage;
