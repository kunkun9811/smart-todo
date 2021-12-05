/* NOTE: this file describes how each Action for TODO should be called */

import { Datum, DataArray } from "../../shared/models";
import { TodosActionTypes } from "../action-types";

// action types
interface PopulateTodosAction {
  type: TodosActionTypes.POPULATE_TODOS;
  payload: DataArray["data"];
}

interface AddTodoAction {
  type: TodosActionTypes.ADD_TODO;
  payload: Datum; // TODO: [9/29/2021] maybe update the type to "todo" class
}

interface ClearTodosAction {
  type: TodosActionTypes.CLEAR_TODOS;
}

// combine different combination of actions and export it
export type TodosActions = AddTodoAction | PopulateTodosAction | ClearTodosAction;
