import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalstyles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={GlobalStyle}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
