import { renderToString } from "react-dom/server";
import App from "./App";
import { DEFAULT_META_TAGS, MINECRAFT_META_TAGS } from "./utils/updateMetaTags";
import { getRouteFromLocation } from "./utils/routes";

export function render(url: string) {
  const targetUrl = new URL(url, DEFAULT_META_TAGS.ogUrl);
  const route = getRouteFromLocation(targetUrl.pathname, targetUrl.hash);
  const metaTags = route === "minecraft-portfolio" ? MINECRAFT_META_TAGS : DEFAULT_META_TAGS;

  return {
    appHtml: renderToString(<App initialRoute={route} />),
    metaTags,
  };
}
