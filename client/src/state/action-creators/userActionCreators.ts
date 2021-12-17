import { User } from "../../shared/models/user.interface";
import { UserActionTypes } from "../action-types";
import { UserActions } from "../actions";
import { Dispatch } from "redux";

// api
import { getUserById } from "../../shared/api/usersAPI";
import { ResponseMessage } from "../../shared/models";

export const InitializeUser = (id: string) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      const response: ResponseMessage = await getUserById(id);

      // TODO: figure out how to get only the DATA part using axios
      // I'm thinking about dealing with all the status code checking on
      // the API side and then return just the data part
      // DEBUG:
      console.log("-----------response------------");
      console.log(response);

      const user: User = response.data;

      // DEBUG:
      console.log("~~~~~~~~user");
      console.log(user);

      dispatch({
        type: UserActionTypes.INITIALIZE_USER,
        payload: user,
      });
    } catch (e) {
      console.warn(`---Unable to initialize USER redux state---`);
      console.warn(e);
    }
  };
};
