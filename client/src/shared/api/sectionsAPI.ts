import axios, { AxiosResponse } from "axios";
import { BACKEND_DATABASE_URL } from "../constants/api_constants";
import { ResponseMessage, User } from "../models";

const url = BACKEND_DATABASE_URL + `sections`;

// TODO: need to update this
export const fetchAllSections = async () => {};

export const getSectionById = async () => {};

export const getSectionsByUserId = async (userId: User["_id"]): Promise<ResponseMessage> =>
  axios.get(`${url}/user/${userId}`).then((res: AxiosResponse) => res.data);
