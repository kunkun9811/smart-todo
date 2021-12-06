import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import sectionReducer from "./sectionReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  todos: todosReducer,
  section: sectionReducer,
  user: userReducer,
});

export default reducers;

/* KEY: Type used by Pages and Components when accessing store's states */
export type State = ReturnType<typeof reducers>; // NOTE: ReturnType is a special syntax from Javscript
