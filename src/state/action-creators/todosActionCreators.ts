/* Contain all the "Action Creators" for TodosReducer */
import { Datum } from "../../shared/models";
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
