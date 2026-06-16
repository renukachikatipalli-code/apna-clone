import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobPage from "../pages/JobPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobPage />} />
        <Route path="/job/:id" element={<JobPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;