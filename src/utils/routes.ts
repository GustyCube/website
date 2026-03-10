export const MINECRAFT_PORTFOLIO_ROUTE = "minecraft-portfolio";
export const MINECRAFT_PORTFOLIO_HASH = `#${MINECRAFT_PORTFOLIO_ROUTE}`;
export const MINECRAFT_PORTFOLIO_PATH = `/${MINECRAFT_PORTFOLIO_ROUTE}/`;

export type AppRoute = "" | typeof MINECRAFT_PORTFOLIO_ROUTE;

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function getRouteFromLocation(pathname: string, hash: string): AppRoute {
  const normalizedPath = normalizePathname(pathname);

  if (normalizedPath === MINECRAFT_PORTFOLIO_PATH || hash === MINECRAFT_PORTFOLIO_HASH) {
    return MINECRAFT_PORTFOLIO_ROUTE;
  }

  return "";
}

export function isLegacyHashRoute(pathname: string, hash: string): boolean {
  return normalizePathname(pathname) === "/" && hash === MINECRAFT_PORTFOLIO_HASH;
}
