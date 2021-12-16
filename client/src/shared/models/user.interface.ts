// import mongoose from "mongoose";

export interface User {
  _id: string; // userID
  username: string; // user's username
  currentSectionId: string; // indicates which section user is on currently, used to display the correct section on render
}
