/** Static path redirects (301) for production Node server. Keys: pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/cheats', '/cheats/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/reviews', '/reviews/'],
  ['/forums', '/forums/'],
  ['/status', '/status/'],
  ['/cheats', '/products/rainbow-six-cheats/'],
  ['/cheats/', '/products/rainbow-six-cheats/'],
  ['/products/rainbow-six-cheats', '/products/rainbow-six-cheats/'],
  ['/cheats/how-to-buy-mw4-cheats-2026', '/cheats/buy-mw4-cheats/'],
  ['/cheats/how-to-buy-mw4-cheats-2026/', '/cheats/buy-mw4-cheats/'],
  ['/cheats/mw4-cheat-features-overview', '/cheats/mw4-features/'],
  ['/cheats/mw4-cheat-features-overview/', '/cheats/mw4-features/'],
  ['/cheats/mw4-monthly-vs-lifetime', '/cheats/mw4-plans/'],
  ['/cheats/mw4-monthly-vs-lifetime/', '/cheats/mw4-plans/'],
  ['/cheats/mw4-aimbot-settings-guide', '/cheats/mw4-aimbot-setup/'],
  ['/cheats/mw4-aimbot-settings-guide/', '/cheats/mw4-aimbot-setup/'],
  ['/cheats/mw4-esp-radar-6v6-setup', '/cheats/mw4-esp-setup/'],
  ['/cheats/mw4-esp-radar-6v6-setup/', '/cheats/mw4-esp-setup/'],
  ['/cheats/hajin-gadget-esp-guide', '/cheats/mw4-dmz-guide/'],
  ['/cheats/hajin-gadget-esp-guide/', '/cheats/mw4-dmz-guide/'],
  ['/cheats/mw4-triggerbot-and-no-recoil', '/cheats/mw4-triggerbot/'],
  ['/cheats/mw4-triggerbot-and-no-recoil/', '/cheats/mw4-triggerbot/'],
  ['/cheats/mw4-system-requirements-setup', '/cheats/mw4-requirements/'],
  ['/cheats/mw4-system-requirements-setup/', '/cheats/mw4-requirements/'],
  ['/cheats/mw4-loader-not-working', '/cheats/mw4-loader-fix/'],
  ['/cheats/mw4-loader-not-working/', '/cheats/mw4-loader-fix/'],
  ['/cheats/mw4-patch-day-checklist', '/cheats/mw4-patch-day/'],
  ['/cheats/mw4-patch-day-checklist/', '/cheats/mw4-patch-day/'],
  ['/cheats/mw4-cheat-risk-explained', '/cheats/mw4-cheat-risk/'],
  ['/cheats/mw4-cheat-risk-explained/', '/cheats/mw4-cheat-risk/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
