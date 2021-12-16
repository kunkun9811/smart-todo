import { useEffect } from "react";
import { BACKEND_DATABASE_URL } from "../constants/api_constants";

// redux imports
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { UserActionCreators } from "../../state";

const useInitializeUserInfo = () => {
  const dispatch = useDispatch();
  const { InitializeUser } = bindActionCreators(UserActionCreators, dispatch);

  useEffect(() => {
    // TODO: extract this logic into "api"
    // DEBUG: TODO: Currently, I am hardcoding the curUserId. This should be from
    // database when user login. And then we will use the userId to get userInfo.
    // OR maybe when user login, we get userInfo directly
    const userId = "1";
    const url: string = BACKEND_DATABASE_URL + "users/" + userId;

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((userData) => {
        // DEBUG:
        console.log("---userData---");
        console.log(userData);
        InitializeUser(userData);
      })
      .catch((err: string) => {
        console.warn(`[Unable to get user info] => error message: ${err}`);
      });
  }, []);
};

export default useInitializeUserInfo;
