import { User } from "../../shared/models/user";
import { UserActionTypes } from "../action-types";
import { UserActions } from "../actions";

/* local initial state */
const initialState: User = {
  id: -1,
  username: "",
  currentSectionId: -1,
};

const userReducer = (state: User = initialState, action: UserActions): User => {
  switch (action.type) {
    case UserActionTypes.INITIALIZE_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
