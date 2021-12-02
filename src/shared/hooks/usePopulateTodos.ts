/* NOTE: DEPRECATED */

import { useEffect } from "react";
import { BACKEND_DATABASE_URL } from "../constants/API";

// redux imports
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { TodosActionCreators } from "../../state";

const usePopulateTodos = () => {
  useEffect(() => {}, []);
};

export default usePopulateTodos;
