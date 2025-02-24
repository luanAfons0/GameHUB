import { createRoot } from "react-dom/client";
import App from "./routes/index.tsx";
import { StrictMode } from "react";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
