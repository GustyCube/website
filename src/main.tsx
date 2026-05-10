import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const app = <App />;
const shouldHydrate = rootElement.hasChildNodes();

if (shouldHydrate) {
  hydrateRoot(rootElement, app);
} else {
  rootElement.innerHTML = "";
  createRoot(rootElement).render(app);
}
