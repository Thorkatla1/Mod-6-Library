import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
