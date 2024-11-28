import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "./page/MainPage";
import WearingMuse from "./page/WearingMuse";
import CompleteMuse from "./page/CompleteMuse";
import StartSetting from "./page/StartSetting";
import DetectingPage from "./page/DetectingPage";
import WritingReport from "./page/WritingReport";
import ResultPage from "./page/ResultPage";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/wearing", element: <WearingMuse /> },
  { path: "/complete", element: <CompleteMuse /> },
  { path: "/start", element: <StartSetting /> },
  { path: "/detecting", element: <DetectingPage /> },
  { path: "/writing", element: <WritingReport /> },
  { path: "/result", element: <ResultPage /> },
]);

export default router;
