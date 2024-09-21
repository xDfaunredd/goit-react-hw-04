import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import ContextModule from "./components/ContextModule/ContextModule";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextModule>
      <App />
    </ContextModule>
  </StrictMode>
);
