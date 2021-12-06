import { useEffect } from "react";
import { DataArray, Section, User } from "../models";
import { BACKEND_DATABASE_URL } from "../constants/API";

// redux imports
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { TodosActionCreators } from "../../state";

// TODO: this needs to take in "sectionId" parameter
const usePopulateTodos = (user: User, sections: Section[]): void => {
  /* redux variables */
  // redux dispatch function
  const dispatch = useDispatch();
  // get action creators
  const { ClearTodos, PopulateTodos } = bindActionCreators(TodosActionCreators, dispatch);

  /* effects */
  // NOTE: usePopulateTodos is only called ONCE on application start. We do not want load
  // todos from API multiple times
  useEffect(() => {
    // check if user id && sections is valid
    // TODO: [12/5/2021] might have a bug here in the future
    if (user.id < 0 || user.currentSectionId > sections.length) return;

    // make sure todos redux state is cleared
    ClearTodos();

    const currentSection = sections.filter((section: Section) => section.id === user.currentSectionId)[0];
    const url = BACKEND_DATABASE_URL + `todos?userId=${user.id}&sectionId=${currentSection.id}`; // TODO: [12/5/2021] might need to change this when migrating to mongodb

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data: DataArray["data"]) => {
        // TODO: This is currently coded for "json-server" specifically.
        // When using mongodb or SQL, need to do this filtering on the database side (aka in the backend)
        PopulateTodos(data);
      })
      .catch((err: string) => {
        console.warn(`[Unable to Populate Todos] => error message: ${err}`);
      });
  }, [user, sections]);
};

export default usePopulateTodos;
