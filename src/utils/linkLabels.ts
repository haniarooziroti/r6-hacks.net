/** Unique, descriptive internal link labels for SEO (avoid repeated generic CTAs). */

export function catalogCheckoutLabel(productName: string): string {
  return `Checkout: ${productName}`;
}

export function catalogDetailsLabel(productName: string): string {
  return `Details: ${productName}`;
}

export function productPanelCheckoutLabel(productTitle: string): string {
  return `Buy ${productTitle} — select plan`;
}

export function productHighlightsCheckoutLabel(productName: string): string {
  return `License checkout for ${productName}`;
}

/** Primary nav (desktop) — distinct from footer explore links on the same page. */
export const DESKTOP_NAV_LABEL: Record<string, string> = {
  Home: 'Home',
  Products: 'Products',
  Blog: 'Blogs',
  Forum: 'Forum',
  Reviews: 'Reviews',
  FAQ: 'FAQ',
  Support: 'Support',
};

export const MOBILE_NAV_LABEL: Record<string, string> = {
  Home: 'Home',
  Products: 'Products',
  Blog: 'Blogs',
  Forum: 'Forum',
  Reviews: 'Reviews',
  FAQ: 'FAQ',
  Support: 'Support',
};

const BREADCRUMB_PATH_LABEL: Record<string, string> = {
  '/': 'Breadcrumb: site home',
  '/products/rainbow-six-cheats/': 'Breadcrumb: all R6 modules',
  '/cheats/': 'Breadcrumb: setup guides',
  '/forums/': 'Breadcrumb: community forum',
  '/faq/': 'Breadcrumb: FAQ hub',
  '/support/': 'Breadcrumb: support center',
  '/status/': 'Breadcrumb: live status',
  '/go/r6-siege/': 'Breadcrumb: checkout overview',
  '/reviews/': 'Breadcrumb: player reviews',
  '/about/': 'Breadcrumb: about page',
  '/privacy/': 'Breadcrumb: privacy policy',
  '/terms/': 'Breadcrumb: terms of use',
};

export function breadcrumbAnchorLabel(name: string, path: string): string {
  // Prefer the crumb name so two crumbs that share a path (e.g. Forum + category → /forums/) stay unique.
  const normalized = path.endsWith('/') || path === '/' ? path : `${path}/`;
  const fromPath = BREADCRUMB_PATH_LABEL[normalized] ?? BREADCRUMB_PATH_LABEL[path];
  if (fromPath && name.toLowerCase() !== 'home' && fromPath === BREADCRUMB_PATH_LABEL['/forums/'] && name.toLowerCase() !== 'forum') {
    return `Breadcrumb: ${name} forum topic`;
  }
  return fromPath ?? `Breadcrumb: ${name}`;
}
