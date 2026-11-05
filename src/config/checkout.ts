import { CHECKOUT_URLS } from './checkout-redirects.mjs';

export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  r6: 'r6-siege',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Live store checkout — same-tab navigation (no target="_blank"). */
export const STORE_CHECKOUT_URL = CHECKOUT.r6;

export function checkoutPath(_product: CheckoutProduct = 'r6'): string {
  return STORE_CHECKOUT_URL;
}

export const PRIMARY_CHECKOUT_PATH = STORE_CHECKOUT_URL;

export function checkoutForSlug(_slug: string): string {
  return STORE_CHECKOUT_URL;
}

export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  if (href.includes('%2Fproducts%2Frainbow-six-siege') || href.includes('/products/rainbow-six-siege')) {
    return checkoutPath('r6');
  }

  return href;
}
