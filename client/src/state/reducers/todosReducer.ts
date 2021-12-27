/* NOTE: this file contains ALL the TODOS REDUCER logic, which actually updates the store */

import { Todo } from "../../shared/models";
import { TodosActionTypes } from "../action-types";
import { TodosActions } from "../actions";

// NOTE: state's type is an array of TableData type => look at [models/tabledata.ts]
const initialState: Todo[] = [];

const todosReducer = (state: Todo[] = initialState, action: TodosActions): Todo[] => {
  switch (action.type) {
    case TodosActionTypes.ADD_TODO:
      return [...state, action.payload];
    case TodosActionTypes.POPULATE_TODOS:
      return [...state, ...action.payload];
    case TodosActionTypes.CLEAR_TODOS:
      return [];
    default:
      return state;
  }
};

export default todosReducer;
