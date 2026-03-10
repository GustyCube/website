import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const buildDir = path.join(projectRoot, "build");
const templatePath = path.join(buildDir, "index.html");
const serverDir = path.join(buildDir, "server");
const serverEntryPath = await findServerEntry(serverDir);
const { render } = await import(pathToFileURL(serverEntryPath).href);
const template = await readFile(templatePath, "utf8");

const routes = [
  {
    url: "/",
    outputPath: templatePath,
  },
  {
    url: "/minecraft-portfolio/",
    outputPath: path.join(buildDir, "minecraft-portfolio", "index.html"),
  },
];

for (const route of routes) {
  const { appHtml, metaTags } = render(route.url);
  let html = injectAppHtml(template, appHtml);
  html = applyMetaTags(html, metaTags);
  await mkdir(path.dirname(route.outputPath), { recursive: true });
  await writeFile(route.outputPath, html);
}

await rm(serverDir, { recursive: true, force: true });

async function findServerEntry(directory) {
  const candidates = ["entry-server.mjs", "entry-server.js", "entry-server.cjs"];

  for (const candidate of candidates) {
    const entryPath = path.join(directory, candidate);

    try {
      await readFile(entryPath);
      return entryPath;
    } catch {
      // Try the next file extension.
    }
  }

  throw new Error(`SSR entry not found in ${directory}`);
}

function injectAppHtml(html, appHtml) {
  return html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

function applyMetaTags(html, metaTags) {
  const title = metaTags.title ?? "";
  const description = metaTags.description ?? "";
  const keywords = metaTags.keywords ?? "";
  const ogTitle = metaTags.ogTitle ?? title;
  const ogDescription = metaTags.ogDescription ?? description;
  const twitterTitle = metaTags.twitterTitle ?? title;
  const twitterDescription = metaTags.twitterDescription ?? description;
  const ogUrl = metaTags.ogUrl ?? "";

  html = html.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(title)}</title>`);
  html = replaceMetaTag(html, "name", "title", title);
  html = replaceMetaTag(html, "name", "description", description);
  html = replaceMetaTag(html, "name", "keywords", keywords);
  html = replaceMetaTag(html, "property", "og:title", ogTitle);
  html = replaceMetaTag(html, "property", "og:description", ogDescription);
  html = replaceMetaTag(html, "property", "og:url", ogUrl);
  html = replaceMetaTag(html, "property", "twitter:title", twitterTitle);
  html = replaceMetaTag(html, "property", "twitter:description", twitterDescription);
  html = replaceMetaTag(html, "property", "twitter:url", ogUrl);

  return html.replace(
    /<link rel="canonical" href="[^"]*" ?\/?>/i,
    `<link rel="canonical" href="${escapeAttribute(ogUrl)}" />`,
  );
}

function replaceMetaTag(html, attrName, attrValue, content) {
  const pattern = new RegExp(
    `<meta[^>]*${attrName}="${escapeRegExp(attrValue)}"[^>]*content="[^"]*"[^>]*>`,
    "i",
  );

  return html.replace(pattern, (tag) =>
    tag.replace(/content="[^"]*"/i, `content="${escapeAttribute(content)}"`),
  );
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
