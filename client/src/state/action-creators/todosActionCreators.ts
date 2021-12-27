/* NOTE: this file contains ALL the "Action Creators" for TodosReducer */
import { Todo, Section, ResponseMessage, NewTodo } from "../../shared/models";
import { TodosActionTypes } from "../action-types";
import { TodosActions } from "../actions";
import { Dispatch } from "redux"; // KEY: get the "Dispatch type" from redux
import { addNewTodo, getTodosBySectionId } from "../../shared/api/todosAPI";

// TODO: hook this up with API
export const AddTodo = (newTodo: NewTodo) => {
  return async (dispatch: Dispatch<TodosActions>) => {
    try {
      const response: ResponseMessage = await addNewTodo(newTodo);
      const todo: Todo = response.data;
      dispatch({
        type: TodosActionTypes.ADD_TODO,
        payload: todo,
      });
    } catch (e) {
      console.warn(`---Unable to add a new todo---`);
      console.warn(e);
    }
  };
};

export const PopulateTodos = (sectionId: Section["_id"]) => {
  return async (dispatch: Dispatch<TodosActions>) => {
    try {
      const response: ResponseMessage = await getTodosBySectionId(sectionId);
      const todos: Todo[] = response.data;

      dispatch({
        type: TodosActionTypes.POPULATE_TODOS,
        payload: todos,
      });
    } catch (e) {
      console.warn("---Unable to retrieve todos by section id---");
      console.warn(e);
    }
  };
};

export const ClearTodos = () => {
  return (dispatch: Dispatch<TodosActions>) => {
    dispatch({
      type: TodosActionTypes.CLEAR_TODOS,
    });
  };
};
