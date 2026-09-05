import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Mount into #root, which currently contains the static shell. React's reconciler
// will replace the shell's children with <App /> atomically — no separate removal
// step, no flash, no layout shift between shell teardown and React's first paint.
createRoot(document.getElementById("root")!).render(<App />);

// Enable the existing analytics integration only when deployment config is present.
const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
const analyticsWebsiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;
if (analyticsEndpoint && analyticsWebsiteId) {
  const script = document.createElement("script");
  script.src = `${analyticsEndpoint.replace(/\/$/, "")}/umami`;
  script.defer = true;
  script.dataset.websiteId = analyticsWebsiteId;
  document.head.appendChild(script);
}
