import "./App.css";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import WearingMuse from "./page/WearingMuse";
import CompleteMuse from "./page/CompleteMuse";
import StartSetting from "./page/StartSetting";
import DetectingPage from "./page/DetectingPage";
import WritingReport from "./page/WritingReport";
import ResultPage from "./page/ResultPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wearing" element={<WearingMuse />} />
        <Route path="/complete" element={<CompleteMuse />} />
        <Route path="/start" element={<StartSetting />} />
        <Route path="/detecting" element={<DetectingPage />} />
        <Route path="/writing" element={<WritingReport />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
