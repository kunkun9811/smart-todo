/* NOTE: this file contains ALL the "Action Creators" for TodosReducer */
import { TodoArray, Todo } from "../../shared/models";
import { TodosActionTypes } from "../action-types";
import { TodosActions } from "../actions";
import { Dispatch } from "redux"; // KEY: get the "Dispatch type" from redux

export const AddTodo = (todo: Todo) => {
  return (dispatch: Dispatch<TodosActions>) => {
    dispatch({
      type: TodosActionTypes.ADD_TODO,
      payload: todo,
    });
  };
};

export const PopulateTodos = (todos: TodoArray["data"]) => {
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
