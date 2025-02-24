import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import GamePage from "../pages/GamePage";
import Home from "../pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-section" element={<GamePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
