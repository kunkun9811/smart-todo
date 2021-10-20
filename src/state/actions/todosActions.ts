import { Datum, DataArray } from "../../shared/models";
import { TodosActionTypes } from "../action-types";

// action types
interface PopulateTodosAction {
  type: TodosActionTypes.POPULATE_TODOS;
  payload: DataArray;
}

interface AddTodoAction {
  type: TodosActionTypes.ADD_TODO;
  payload: Datum; // TODO: [9/29/2021] maybe update the type to "todo" class
}

// action type
export type TodosActions = AddTodoAction | PopulateTodosAction;
