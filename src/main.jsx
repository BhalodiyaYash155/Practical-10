import React from "react";
import ReactDOM from "react-dom/client";
import WrappedApp from "./App"; // Updated import
import "./index.css";
import App from "./WeatherApp/app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
