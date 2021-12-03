/* NOTE: this file contains ALL the TODOS REDUCER logic, which actually updates the store */

import { TodosActionTypes } from "../action-types";
import { TodosActions } from "../actions";
import { DataArray } from "../../shared/models/";

// DEBUG:
import { Datum } from "../../shared/models/tabledata";

// NOTE: state's type is an array of TableData type => look at [models/tabledata.ts]
const initialState: DataArray["data"] = [];

// DEBUG:
const newTodo: Datum = {
  id: 111,
  group: "",
  tags: [],
  title: "",
  description: "",
  due_date: "12/12/2021",
  priority: 0,
  boardOrder: 0,
  tagId: 1111,
  tagName: "1111",
  tagColor: "red",
};

const reducer = (state: DataArray["data"] = initialState, action: TodosActions): DataArray["data"] => {
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

export default reducer;
