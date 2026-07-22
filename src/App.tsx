import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PodcastPage from "./pages/PodcastPage";
import HomePageV2 from "./pages/v2/HomePageV2";
import PodcastPageV2 from "./pages/v2/PodcastPageV2";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/podcast" element={<PodcastPage />} />
      <Route path="/v2" element={<HomePageV2 />} />
      <Route path="/v2/podcast" element={<PodcastPageV2 />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
