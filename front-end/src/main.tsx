import { createRoot } from "react-dom/client";
import Home from "./pages/home.tsx";
import { StrictMode } from "react";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
