import { useEffect } from "react";
import { TodoArray, Section } from "../models";
import { BACKEND_DATABASE_URL } from "../constants/api_constants";

// redux imports
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { TodosActionCreators } from "../../state";

// TODO: this needs to take in "sectionId" parameter
const usePopulateTodos = (sectionId: Section["_id"]): void => {
  /* redux variables */
  // redux dispatch function
  const dispatch = useDispatch();
  // get action creators
  const { ClearTodos, PopulateTodos } = bindActionCreators(TodosActionCreators, dispatch);

  /* effects */
  // NOTE: usePopulateTodos is only called ONCE on application start. We do not want load
  // todos from API multiple times
  useEffect(() => {
    // if sectionId has not been retrieved from the backend, return
    if (sectionId.length === 0) return;

    // make sure todos redux state is cleared
    ClearTodos();
    PopulateTodos(sectionId);

    // // TODO: extract this logic into "api"
    // // TODO: [12/5/2021] might need to change this when migrating to mongodb
    // const url = BACKEND_DATABASE_URL + `todos?userId=${user._id}&sectionId=${currentSection?._id}`;

    // fetch(url, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data: TodoArray["data"]) => {
    //     // TODO: This is currently coded for "json-server" specifically.
    //     // When using mongodb or SQL, need to do this filtering on the database side (aka in the backend)
    //     PopulateTodos(data);
    //   })
    //   .catch((err: string) => {
    //     console.warn(`[Unable to Populate Todos] => error message: ${err}`);
    //   });
  }, [sectionId]);
};

export default usePopulateTodos;
