import { User } from "../../shared/models/user";
import { UserActionTypes } from "../action-types";

// action types
interface InitializeUser {
  type: UserActionTypes.INITIALIZE_USER;
  payload: User;
}

// combine different combination of actions and export it
export type UserActions = InitializeUser;
