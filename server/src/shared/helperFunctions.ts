import { ResponseMessage } from "./interfaces/responseMessage.interface";
import mongoose from "mongoose";
import { InternalReturn } from "./interfaces/internalReturn.interface";

// mongoose ObjectId class
const ObjectId = mongoose.Types.ObjectId;

/* helper functions */
// Response Message creator
export const createResMsg = (data: ResponseMessage["data"], message: ResponseMessage["message"]): ResponseMessage => ({ data, message });

// Internal Return creator
export const createInternalReturn = (
  statusCode: InternalReturn["statusCode"],
  data: InternalReturn["data"],
  message: InternalReturn["message"]
): InternalReturn => ({
  statusCode,
  data,
  message,
});

// check whether passed in string is a mongoDB ObjectId
export const isObjectIdValid = (id: string): boolean => {
  if (ObjectId.isValid(id)) {
    const objId: string = new ObjectId(id).toString();

    // DEBUG:
    console.log(`id = ${id}`);
    console.log(`objId = ${objId}`);

    // NOTE: need this check because the initial check above also passes 12-letter strings
    if (id === objId) return true;
    return false;
  }
  return false;
};
