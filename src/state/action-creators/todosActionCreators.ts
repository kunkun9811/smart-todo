/* NOTE: this file contains ALL the "Action Creators" for TodosReducer */
import { DataArray, Datum } from "../../shared/models";
import { TodosActionTypes } from "../action-types";
import { TodosActions } from "../actions";
import { Dispatch } from "redux"; // KEY: get the "Dispatch type" from redux

export const AddTodo = (todo: Datum) => {
  return (dispatch: Dispatch<TodosActions>) => {
    dispatch({
      type: TodosActionTypes.ADD_TODO,
      payload: todo,
    });
  };
};

export const PopulateTodos = (todos: DataArray["data"]) => {
  // DEBUG:
  console.log("In PopulateTodos");
  console.log(todos);
  return (dispatch: Dispatch<TodosActions>) => {
    dispatch({
      type: TodosActionTypes.POPULATE_TODOS,
      payload: todos,
    });
  };
};

export const ClearTodos = () => {
  // DEBUG:
  console.log("In ClearTodos");
  return (dispatch: Dispatch<TodosActions>) => {
    dispatch({
      type: TodosActionTypes.CLEAR_TODOS,
    });
  };
};
