import React, { useEffect } from "react";
import { Section, User } from "../models";
import { BACKEND_DATABASE_URL } from "../constants/API";

// redux imports
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { SectionActionCreators } from "../../state";

const useInitializeSectionInfo = (user: User): void => {
  const dispatch = useDispatch();
  const { UpdateSection } = bindActionCreators(SectionActionCreators, dispatch);

  useEffect(() => {
    const url = BACKEND_DATABASE_URL + "sections/" + user.currentSectionId; // TODO: [12/5/2021] might need to change this when migrating to mongodb
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data: Section) => {
        UpdateSection(data);
      })
      .catch((err: string) => {
        console.warn(`[Unable to initialize section info => error message: ${err}]`);
      });
  }, [user]);
};

export default useInitializeSectionInfo;
