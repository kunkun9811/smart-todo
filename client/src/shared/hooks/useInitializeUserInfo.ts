import { useEffect } from "react";
import { BACKEND_DATABASE_URL } from "../constants/api_constants";

// redux imports
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { UserActionCreators } from "../../state";
import { User } from "../models";

const useInitializeUserInfo = () => {
  const dispatch = useDispatch();
  const { InitializeUser } = bindActionCreators(UserActionCreators, dispatch);

  useEffect(() => {
    // TODO: extract this logic into "api"
    // DEBUG: TODO: Currently, I am hardcoding the curUserId. This should be from
    // database when user login. And then we will use the userId to get userInfo.
    // OR maybe when user login, we get userInfo directly
    const userId = "61b6e0682a490fa66f7c4b21";
    InitializeUser(userId);
  }, []);
};

export default useInitializeUserInfo;
