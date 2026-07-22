import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PodcastPage from "./pages/PodcastPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/podcast" element={<PodcastPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
