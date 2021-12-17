import { useEffect } from "react";
import { User } from "../models";

// redux imports
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { SectionsActionCreators } from "../../state";

const useInitializeSections = (user: User): void => {
  const dispatch = useDispatch();
  const { InitializeSections } = bindActionCreators(SectionsActionCreators, dispatch);

  useEffect(() => {
    if (user._id.length === 0) return;
    InitializeSections(user._id);
  }, [user]);
};

export default useInitializeSections;
