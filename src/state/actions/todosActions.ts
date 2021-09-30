import { TableDatum } from "../../shared/models";
import { TodosActionTypes } from "../action-types";

// action types
interface AddTodoAction {
  type: TodosActionTypes.ADD_TODO;
  payload: TableDatum; // TODO: [9/29/2021] maybe update the type to "todo" class
}

// action type
export type TodosActions = AddTodoAction;
