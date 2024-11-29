import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "./page/MainPage";
import WearingPage from "./page/WearingPage";
import StartSetting from "./page/StartSetting";
import DetectingPage from "./page/DetectingPage";
import WritingReport from "./page/WritingReport";
import ResultPage from "./page/ResultPage";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/wearing", element: <WearingPage /> },
  { path: "/setting", element: <StartSetting /> },
  { path: "/detecting", element: <DetectingPage /> },
  { path: "/writing", element: <WritingReport /> },
  { path: "/result", element: <ResultPage /> },
]);

export default router;
