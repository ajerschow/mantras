import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MantraExplorer from "./MantraExplorer.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantraExplorer />
  </StrictMode>
);
