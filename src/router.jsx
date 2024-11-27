import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "./page/MainPage";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  // { path: "/example", element: <ExamplePage /> },
]);

export default router;
