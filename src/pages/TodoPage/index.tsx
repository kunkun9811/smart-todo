import React, { useState, useRef } from "react";
import { TodoPageContainer } from "./Styles";
import { TableDatum, TableDataArray } from "../../shared/models";
import TableView from "./TableView";

//TODO: this will be coming from parent, so the below data shouldn't be from MOCK_DATA in the future
import MOCK_DATA from "../../mock-data/todos.json";

const initialState = {
  id: 0,
  description: "",
  dueDate: "",
  priority: "",
  // TODO: delete this later
  data: MOCK_DATA,
};

const TodoPage = () => {
  const [id, setId] = useState<TableDatum["id"]>(initialState.id);
  const [description, setDescription] = useState<TableDatum["description"]>(
    initialState.description
  );
  const [dueDate, setDueDate] = useState<TableDatum["due_date"]>(
    initialState.dueDate
  );
  const [priority, setPriority] = useState<TableDatum["priority"]>(
    initialState.priority
  );
  const [todos, setTodos] = useState<TableDataArray["data"]>(initialState.data);

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

    // add new todo
    setTodos((prevState) => {
      console.log("=========prevState=========");
      console.log(prevState);
      console.log("__________newTodo__________");
      console.log(newTodo);
      return [...prevState, newTodo];
    });

    // reset states
    setId(initialState.id);
    setDescription(initialState.description);
    setDueDate(initialState.dueDate);
    setPriority(initialState.priority);

    // clear input values
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  return (
    <TodoPageContainer>
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

      {/* table view */}
      <TableView data={todos} />
    </TodoPageContainer>
  );
};

export default TodoPage;
