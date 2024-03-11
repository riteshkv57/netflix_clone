import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PlayProvider } from "./context/play";
import { UserProvider } from "./context/user";
import "./assets/css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <PlayProvider>
        <App />
      </PlayProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();