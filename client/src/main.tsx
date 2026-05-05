import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Remove the static HTML shell once React takes over
const shell = document.getElementById("static-shell");
if (shell) {
  shell.remove();
}

createRoot(document.getElementById("root")!).render(<App />);
