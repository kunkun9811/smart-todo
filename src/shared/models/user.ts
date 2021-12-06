export interface User {
  id: number; // userID
  username: string; // user's username
  currentSectionId: number; // indicates which section user is on currently, used to display the correct section on render
}
