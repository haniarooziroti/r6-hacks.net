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
  Blog: 'Cheat guides',
  Forum: 'Forum',
  Reviews: 'Reviews',
  FAQ: 'FAQ',
  Support: 'Support',
};

export const MOBILE_NAV_LABEL: Record<string, string> = {
  Home: 'Home',
  Products: 'Products',
  Blog: 'Cheat guides',
  Forum: 'Forum',
  Reviews: 'Reviews',
  FAQ: 'FAQ',
  Support: 'Support',
};

const BREADCRUMB_PATH_LABEL: Record<string, string> = {
  '/': 'Home',
  '/products/rainbow-six-cheats/': 'Products',
  '/cheats/': 'Cheat guides',
  '/forums/': 'Forum',
  '/faq/': 'FAQ',
  '/support/': 'Support',
  '/status/': 'Status',
  '/go/r6-siege/': 'Checkout',
  '/reviews/': 'Reviews',
  '/about/': 'About',
  '/privacy/': 'Privacy Policy',
  '/terms/': 'Terms & Conditions',
};

export function breadcrumbAnchorLabel(name: string, path: string): string {
  const normalized = path.endsWith('/') || path === '/' ? path : `${path}/`;
  const fromPath = BREADCRUMB_PATH_LABEL[normalized] ?? BREADCRUMB_PATH_LABEL[path];
  if (fromPath && name !== fromPath) {
    return name;
  }
  return fromPath ?? name;
}
