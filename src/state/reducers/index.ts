import { combineReducers } from "redux";
import todosReducer from "./todosReducers";

const reducers = combineReducers({
  todos: todosReducer,
});

export default reducers;
