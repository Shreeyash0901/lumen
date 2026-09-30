import React from "react";
import ReactDOM from "react-dom/client";
import { getDefaultWebsiteConfig } from "website-core";
import { LumenTemplate } from "website-templates";
import "./index.css";

const config = getDefaultWebsiteConfig("firm_prod", "lumen");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LumenTemplate config={config} />
  </React.StrictMode>
);
