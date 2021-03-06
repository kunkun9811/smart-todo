/** TODO: about to check if everything works accordingly. Namely all the new custom hooks and redux logic */

import { useState } from "react";
import { MainPageContainer } from "./Styles";
import { User, Section, TodoArray, Todo, Priority } from "../../shared/models";
import BoardView from "./BoardView";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { TodosActionCreators, State } from "../../state";
import usePopulateTodos from "../../shared/hooks/usePopulateTodos";
import useInitializeUserInfo from "../../shared/hooks/useInitializeUserInfo";
import useInitializeSections from "../../shared/hooks/useInitializeSections";

const initialState = {
  id: "",
  sectionId: "",
  tags: [],
  title: "",
  description: "",
  dueDate: "",
  priority: Priority.HIGH,
  columnPos: -1,
  groupId: "", // empty string means no group/column
  groupName: "",
  groupColor: "",
};

const MainPage = () => {
  /* redux variables */
  // redux dispatch
  const dispatch = useDispatch();
  // get redux action creators
  const { AddTodo } = bindActionCreators(TodosActionCreators, dispatch);
  // get redux state
  const user: User = useSelector((state: State) => state.user);
  const sections: Section[] = useSelector((state: State) => state.sections);
  const todos: TodoArray["data"] = useSelector((state: State) => state.todos);

  // states for user inputs - TODO: [12/12/2021] make this into an object instead of so many different useStates
  const [id, setId] = useState<Todo["_id"]>(initialState.id);
  const [sectionId, setSectionId] = useState<Todo["sectionId"]>(initialState.sectionId); // TODO: this will be the NEW section's id, need to change this later when using mongoDB
  const [tags, setTags] = useState<Todo["tags"]>(initialState.tags);
  const [title, setTitle] = useState<Todo["title"]>(initialState.title);
  const [description, setDescription] = useState<Todo["description"]>(initialState.description);
  const [dueDate, setDueDate] = useState<Todo["due_date"]>(initialState.dueDate);
  const [priority, setPriority] = useState<Todo["priority"]>(initialState.priority);
  const [columnPos, setColumnPos] = useState<Todo["columnPos"]>(initialState.columnPos);
  const [groupId, setGroupId] = useState<Todo["groupId"]>(initialState.groupId);
  // const [groupName, setGroupName] = useState<string>(initialState.groupName);
  // const [groupColor, setGroupColor] = useState<string>(initialState.groupColor);

  /* effects */
  // get user data
  useInitializeUserInfo();
  // get current section data
  useInitializeSections(user);
  // populate todos from database
  usePopulateTodos(user.currentSectionId);

  /* methods */
  // add new todo from user inputs
  const addTodo = (): void => {
    if (description === "") {
      alert("Please enter the 'description'");
      return;
    }

    // check if inputs are all valid
    let logString = "";
    if (id.length === 0) logString += "Please Enter [id]\n";
    if (description.length === 0) logString += "Please Enter [description]\n";
    if (dueDate.length === 0) logString += "Please Enter [due date]\n";
    if (logString.length > 0) {
      alert(logString);
      return;
    }

    // construct new todo
    const newTodo: Todo = {
      _id: id,
      userId: user._id,
      sectionId,
      tags,
      title,
      description,
      due_date: dueDate,
      priority,
      columnPos,
      groupId,
      // groupName,
      // groupColor,
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

  // TODO: [12/2/2021] need to add more inputs
  return (
    <MainPageContainer>
      {/* TODO: [9/30/2021] Make Input Component in the future */}
      {/* TODO: [12/16/2021] Todo should not be manually inputted, it should be user's id */}
      <input
        id="id"
        type="text"
        placeholder="id"
        value={id ? id : 0}
        onChange={(e) => {
          setId(e.target.value);
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

      {/* TODO: [12/5/2021] in the future, I'd need to use sections[user.currentSectionId]["sectionStyle"] to determine whether it is a VIEW or a PAGE */}
      {/* board view/kanban board */}
      <BoardView data={todos} />
    </MainPageContainer>
  );
};

export default MainPage;
