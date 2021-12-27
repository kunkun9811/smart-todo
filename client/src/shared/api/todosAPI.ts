import axios, { AxiosResponse } from "axios";
import { BACKEND_DATABASE_URL } from "../constants/api_constants";
import { NewTodo, ResponseMessage, Section, Todo } from "../models";

const url = BACKEND_DATABASE_URL + "todos";

/* GET */
// TODO: need to update this
export const fetchAllTodos = async () => {};
export const getTodoById = async () => {};

export const getTodosBySectionId = async (sectionId: Section["_id"]): Promise<ResponseMessage> =>
  axios.get(`${url}/section/${sectionId}`).then((res: AxiosResponse) => res.data);

/* POST */
export const addNewTodo = async (newTodo: NewTodo): Promise<ResponseMessage> => axios.post(url, newTodo).then((res: AxiosResponse) => res.data);
