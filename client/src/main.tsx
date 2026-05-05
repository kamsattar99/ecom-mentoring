import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;
createRoot(root).render(<App />);

// Remove the static HTML shell only after React has painted, to avoid a flash
// of empty page between shell removal and React's first paint. Two rAFs = the
// callback runs after the first post-mount paint.
const shell = document.getElementById("static-shell");
if (shell) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => shell.remove());
  });
}
