import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { ThemeProvider } from "./contexts/ThemeContext"; // Import the ThemeProvider

ReactDOM.render(
  <ContextProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ContextProvider>,
  document.getElementById("root")
);
