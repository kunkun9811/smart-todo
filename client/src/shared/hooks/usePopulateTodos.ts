import { useEffect } from "react";
import { TodoArray, Section, User } from "../models";
import { BACKEND_DATABASE_URL } from "../constants/api_constants";

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
    if (user._id.length === 0) return;

    // get the current section
    const currentSection: Section | undefined = sections.find((s: Section) => s._id === user.currentSectionId);

    // TODO: [12/16/2021] double check if I need additional handling process
    // if current section does not exist in user's sections pool, log the message.
    // Might need additional handling in the future, like render a page displaying the below message.
    if (!currentSection) {
      console.log(`Section with ID=${user.currentSectionId} does not exist`);
    }

    // make sure todos redux state is cleared
    ClearTodos();

    // TODO: extract this logic into "api"
    // TODO: [12/5/2021] might need to change this when migrating to mongodb
    const url = BACKEND_DATABASE_URL + `todos?userId=${user._id}&sectionId=${currentSection?._id}`;

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data: TodoArray["data"]) => {
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
