import { createRoot } from "react-dom/client";
import App from "./Routes/index.tsx";
import { StrictMode } from "react";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
