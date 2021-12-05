import React, { useEffect } from "react";
import { BACKEND_DATABASE_URL } from "../constants/API";

// redux imports
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { SectionActionCreators } from "../../state";

/* TODO: about to finish this */
const useInitializeSectionInfo = () => {
  const dispatch = useDispatch();
  const { UpdateSection } = bindActionCreators(SectionActionCreators, dispatch);

  useEffect(() => {}, []);
};

export default useInitializeSectionInfo;
