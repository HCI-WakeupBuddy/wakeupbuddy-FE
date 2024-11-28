import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router.jsx";
import { BrowserRouter } from "react-router-dom";

const root = document.querySelector("#root");
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </BrowserRouter>
);
