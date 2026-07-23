import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomePageV2 from "./pages/v2/HomePageV2";
// Podcast (Persona) — désactivé pour l'instant ; fichiers conservés :
// import PodcastPage from "./pages/PodcastPage";
// import PodcastPageV2 from "./pages/v2/PodcastPageV2";
// Voir docs/RESTAURER-PODCAST.md

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/v2" element={<HomePageV2 />} />
      {/* <Route path="/podcast" element={<PodcastPage />} /> */}
      {/* <Route path="/v2/podcast" element={<PodcastPageV2 />} /> */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
