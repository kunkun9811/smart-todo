import { useEffect } from "react";
import { Section } from "../models";
import { BACKEND_DATABASE_URL } from "../constants/API";

// redux imports
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { TodosActionCreators } from "../../state";

// TODO: this needs to take in "sectionId" parameter
const usePopulateTodos = (section: Section): void => {
  /* redux variables */
  // redux dispatch function
  const dispatch = useDispatch();
  // get action creators
  const { ClearTodos, PopulateTodos } = bindActionCreators(TodosActionCreators, dispatch);

  /* effects */
  // NOTE: usePopulateTodos is only called ONCE on application start. We do not want load
  // todos from API multiple times
  useEffect(() => {
    ClearTodos();
    const url = BACKEND_DATABASE_URL + "todos"; // TODO: [12/5/2021] might need to change this when migrating to mongodb
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        PopulateTodos(data);
      })
      .catch((err: string) => {
        console.warn(`[Unable to Populate Todos] => error message: ${err}`);
      });
  }, [section]);
};

export default usePopulateTodos;
