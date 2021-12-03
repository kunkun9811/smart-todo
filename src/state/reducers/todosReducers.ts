/* NOTE: this file contains ALL the TODOS REDUCER logic, which actually updates the store */

import { TodosActionTypes } from "../action-types";
import { TodosActions } from "../actions";
import { DataArray } from "../../shared/models/";

// NOTE: state's type is an array of TableData type => look at [models/tabledata.ts]
const initialState: DataArray["data"] = [];

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
