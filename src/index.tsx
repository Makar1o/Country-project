import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Card.css";
import "./styles/Colors.css";
import "./styles/General.css";
import "./styles/Header.css";
import "./styles/Filter.css";
import "./styles/CountryDetails.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
