/* NOTE: DEPRECATED */

import { useEffect } from "react";
import { BACKEND_DATABASE_URL } from "../constants/API";

// redux imports
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; // DEBUG: to be deleted
import { bindActionCreators } from "redux";
import { TodosActionCreators } from "../../state";
import { State } from "../../state"; // DEBUG: to be deleted
import { DataArray } from "../models"; // DEBUG:

const usePopulateTodos = () => {
  /* redux variables */
  // redux dispatch function
  const dispatch = useDispatch();
  // get action creators
  const { ClearTodos, PopulateTodos } = bindActionCreators(TodosActionCreators, dispatch);
  // DEBUG: to be deleted
  const todos: DataArray["data"] = useSelector((state: State) => state.todos);

  /* effects */
  // TODO: [12/2/2021]: need to also add the dependent variable, not sure what yet. Right now it calls
  // the API on each render
  useEffect(() => {
    // NOTE: TODO: could I call this first and guaranteed it will finish before "PopulateTodos" ?
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

  // DEBUG: to be deleted
  useEffect(() => {
    console.log("--------todos populated---------");
    console.log(todos);
  }, [todos]);
};

export default usePopulateTodos;

// TODO: about to actually display Todos in board
