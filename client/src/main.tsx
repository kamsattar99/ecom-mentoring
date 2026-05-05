import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Mount into #root, which currently contains the static shell. React's reconciler
// will replace the shell's children with <App /> atomically — no separate removal
// step, no flash, no layout shift between shell teardown and React's first paint.
createRoot(document.getElementById("root")!).render(<App />);
