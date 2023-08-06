import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import  { SkeletonTheme } from "react-loading-skeleton";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#313131" highlightColor="#525252" >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SkeletonTheme>
  </React.StrictMode>
);
