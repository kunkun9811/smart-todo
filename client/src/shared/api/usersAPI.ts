import axios from "axios";
import { BACKEND_DATABASE_URL } from "../constants/api_constants";
import { User } from "../models";

const url = BACKEND_DATABASE_URL + "todos";

export const fetchAllUsers = (): Promise<User[]> => axios.get(url);
// export const getUserById = (): Promise<User> => axios.get(`${url}/`)
