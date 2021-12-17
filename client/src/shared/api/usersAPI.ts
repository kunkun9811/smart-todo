import axios, { AxiosResponse } from "axios";
import { BACKEND_DATABASE_URL } from "../constants/api_constants";
import { ResponseMessage, User } from "../models";

const url = BACKEND_DATABASE_URL + "users";

// TODO: need to update fetchAllUsers so that it returns "Promise<ResponseMessage>"
export const fetchAllUsers = (): Promise<User[]> => axios.get(url);

// TODO: maybe handle differently based on status code
export const getUserById = (id: User["_id"]): Promise<ResponseMessage> => axios.get(`${url}/${id}`).then((res: AxiosResponse) => res.data);
