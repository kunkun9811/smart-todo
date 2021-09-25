import React, { useState } from "react";
import { TodoPageContainer } from "./Styles";

interface IState {
  todo: {
    description: string;
    priority: string;
  };
}

const TodoPage = () => {
  const [description, setDescription] =
    useState<IState["todo"]["description"]>("");
  const [priority, setPriority] = useState<IState["todo"]["priority"]>("");
  const [todos, setTodos] = useState<IState["todo"][]>([]);

  const addTodo = () => {
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

    const newTodo: IState["todo"] = {
      description,
      priority,
    };

    setTodos((prevState) => {
      console.log("=========prevState=========");
      console.log(prevState);
      console.log("__________newTodo__________");
      console.log(newTodo);
      return [...prevState, newTodo];
    });
  };

  return (
    <TodoPageContainer>
      <input
        id="description"
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
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
      <ul>
        {todos.map((todo, idx): JSX.Element => {
          return <li key={idx}>{`${todo.description} | ${todo.priority}`}</li>;
        })}
      </ul>
    </TodoPageContainer>
  );
};

export default TodoPage;
