import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./input.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
