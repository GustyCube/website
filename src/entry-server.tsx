import { renderToString } from "react-dom/server";
import App from "./App";
import { DEFAULT_META_TAGS } from "./utils/updateMetaTags";

export function render(url: string) {
  new URL(url, DEFAULT_META_TAGS.ogUrl);

  return {
    appHtml: renderToString(<App />),
    metaTags: DEFAULT_META_TAGS,
  };
}
