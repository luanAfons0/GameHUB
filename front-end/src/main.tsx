import { createRoot } from "react-dom/client";
import AllRoutes from "./Routes/index.tsx";
import { StrictMode } from "react";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AllRoutes />
  </StrictMode>
);
