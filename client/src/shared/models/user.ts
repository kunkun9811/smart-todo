export interface User {
  id: number; // userID
  username: string; // user's username
  currentSectionId: number; // indicates which section user is on currently, used to display the correct section on render
  // allSections: number[]; // all the sections that the user has, in the form of sectionId’s
}
