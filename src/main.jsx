import React from "react";
import ReactDOM from "react-dom/client"; // Fix: Use "react-dom/client"
import { BrowserRouter } from "react-router-dom"; // Fix: Use "react-router-dom"
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter> {/* Only here! */}
    <App />
  </BrowserRouter>
);
