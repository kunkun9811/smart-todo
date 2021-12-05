/* NOTE: Export all the action creators + the store in one file */

/* all the action creators */
/*
NOTE: [9/30/2021] If there's problem using the ones below, revert back to this and change exports
in [action-creators/index.ts] like so [export * from "./todosActionCreators"; // Todos slice Action Creators]
without the alias
 */
// export * as actionCreators from "./action-creators";
export { TodosActionCreators } from "./action-creators";
export { SectionActionCreators } from "./action-creators";

/* the store */
export * from "./store";

/* reducers - used to export the store's state type */
export * from "./reducers";
