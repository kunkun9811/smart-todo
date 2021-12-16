import { User } from "../../shared/models/user.interface";
import { UserActionTypes } from "../action-types";
import { UserActions } from "../actions";

/* local initial state */
const initialState: User = {
  _id: "",
  username: "",
  currentSectionId: "",
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
