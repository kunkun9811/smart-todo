/* NOTE: DEPRECATED */

import { useEffect } from "react";
import { BACKEND_DATABASE_URL } from "../constants/API";

// redux imports
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { TodosActionCreators } from "../../state";

const usePopulateTodos = () => {
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
    fetch(BACKEND_DATABASE_URL, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        PopulateTodos(data);
      })
      .catch((err: string) => {
        console.warn(`[Unable to Populate Todos] => ${err}`);
      });
  }, []);
};

export default usePopulateTodos;
