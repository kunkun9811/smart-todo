import { User } from "../../shared/models/user";
import { UserActionTypes } from "../action-types";
import { UserActions } from "../actions";
import { Dispatch } from "redux";

export const InitializeUser = (user: User) => {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch({
      type: UserActionTypes.INITIALIZE_USER,
      payload: user,
    });
  };
};
