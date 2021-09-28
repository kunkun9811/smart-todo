import React from "react";
import TodoPage from "../pages/TodoPage";
import { AppContainer } from "./Styles";
import TableView from "../pages/TodoPage/TableView";

function App() {
  return (
    <AppContainer>
      <TodoPage />
    </AppContainer>
    // <TableView />
  );
}

export default App;
