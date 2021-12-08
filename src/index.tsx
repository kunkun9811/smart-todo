import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./state";
import GlobalStyle from "./globalstyles";
import { defaultTheme } from "./shared/styles/theme";

ReactDOM.render(
  <React.StrictMode>
    {/* redux */}
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
