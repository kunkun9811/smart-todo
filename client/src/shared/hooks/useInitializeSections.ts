import React, { useEffect } from "react";
import { Section, User } from "../models";
import { BACKEND_DATABASE_URL } from "../constants/api_constants";

// redux imports
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { SectionsActionCreators } from "../../state";

const useInitializeSections = (user: User): void => {
  const dispatch = useDispatch();
  const { InitializeSections } = bindActionCreators(SectionsActionCreators, dispatch);

  useEffect(() => {
    if (user.id < 0) return;

    // TODO: [12/5/2021] need to change this when migrating to mongodb, currently it is querying according to json-server documentation
    const url = BACKEND_DATABASE_URL + "sections?userId=" + user.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data: Section[]) => {
        InitializeSections(data);
      })
      .catch((err: string) => {
        console.warn(`[Unable to populate sections => error message: ${err}]`);
      });
  }, [user]);
};

export default useInitializeSections;
