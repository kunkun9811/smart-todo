import { ResponseMessage } from "./interfaces/responseMessage.interface";
import mongoose from "mongoose";

/* helper functions */
// Response Message Creator
export const createResMsg = (data: ResponseMessage["data"], message: ResponseMessage["message"]): ResponseMessage => ({ data, message });
