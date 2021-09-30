import { TodosActionTypes } from "../action-types";
import { TodosActions } from "../actions";
import { TableDataArray } from "../../shared/models/";

// NOTE: state's type is an array of TableData type => look at [models/tabledata.ts]
// TODO: [9/29/2021] maybe change this to a class of "todo" in the future
const initialState: TableDataArray["data"] = [];

const reducer = (state = initialState, action: TodosActions) => {
  switch (action.type) {
    case TodosActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
