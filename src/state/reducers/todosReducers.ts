import { TodosActionTypes } from "../action-types";
import { TodosActions } from "../actions";
import { DataArray } from "../../shared/models/";

// NOTE: state's type is an array of TableData type => look at [models/tabledata.ts]
// TODO: [9/29/2021] maybe change this to a class of "todo" in the future
const initialState: DataArray["data"] = [];

const reducer = (state = initialState, action: TodosActions): DataArray["data"] => {
  switch (action.type) {
    case TodosActionTypes.ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
