// import axios from "axios";

import { BACKEND_DATABASE_URL } from "../constants/api_constants";
import { TodoArray } from "../models";

// export const fetchPosts = () => axios.get<TodoArray>(BACKEND_DATABASE_URL);

export * as usersAPI from "./usersAPI";
export * as sectionsAPI from "./sectionsAPI";
export * as todosAPI from "./todosAPI";
