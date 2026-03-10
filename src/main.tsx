import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { getRouteFromLocation, isLegacyHashRoute } from "./utils/routes";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const initialRoute = getRouteFromLocation(window.location.pathname, window.location.hash);
const app = <App initialRoute={initialRoute} />;
const shouldHydrate =
  rootElement.hasChildNodes() &&
  !isLegacyHashRoute(window.location.pathname, window.location.hash);

if (shouldHydrate) {
  hydrateRoot(rootElement, app);
} else {
  rootElement.innerHTML = "";
  createRoot(rootElement).render(app);
}
