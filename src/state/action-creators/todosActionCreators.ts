/* NOTE: this file contains ALL the "Action Creators" for TodosReducer */
import { DataArray, Datum } from "../../shared/models";
import { TodosActionTypes } from "../action-types";
import { Dispatch } from "redux"; // KEY: get the "Dispatch type" from redux
import { TodosActions } from "../actions";

export const AddTodo = (todo: Datum) => {
  return (dispatch: Dispatch<TodosActions>) => {
    dispatch({
      type: TodosActionTypes.ADD_TODO,
      payload: todo,
    });
  };
};

export const PopulateTodos = (todos: DataArray["data"]) => {
  return (dispatch: Dispatch<TodosActions>) => {
    dispatch({
      type: TodosActionTypes.POPULATE_TODOS,
      payload: todos,
    });
  };
};

export const ClearTodos = () => {
  return (dispatch: Dispatch<TodosActions>) => {
    dispatch({
      type: TodosActionTypes.CLEAR_TODOS,
    });
  };
};
