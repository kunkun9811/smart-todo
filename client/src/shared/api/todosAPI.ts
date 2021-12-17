import axios, { Axios, AxiosResponse } from "axios";
import { BACKEND_DATABASE_URL } from "../constants/api_constants";
import { ResponseMessage, Section } from "../models";

const url = BACKEND_DATABASE_URL + "todos";

// TODO: need to update this
export const fetchAllTodos = async () => {};
export const getTodoById = async () => {};

export const getTodosBySectionId = async (sectionId: Section["_id"]): Promise<ResponseMessage> =>
  axios.get(`${url}/section/${sectionId}`).then((res: AxiosResponse) => res.data);
