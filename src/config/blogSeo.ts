export interface BlogPostSeo {
  /** Full document title (30–60 chars when possible). */
  title?: string;
  description?: string;
  logoAlt?: string;
  /** Visible H2 for keyword scoring (e.g. "Setup: R6 Siege Cheats"). */
  keywordHeading?: string;
}

export const BLOG_POST_SEO: Record<string, BlogPostSeo> = {
  'r6-buy-cheats': {
    title: 'R6 Access: How to Buy Siege Cheats in 2026 | Checkout Guide',
    logoAlt: 'R6 Access – Aimbot – logo',
  },
  'r6-aimbot-setup': {
    title: 'Aim Circle Size and Smoothing Setup for R6 Siege Cheats',
    description:
      'Circle: How to set up R6 aim assist so it helps your tracking without looking like a screen-snap. Starting values for ranked and gadget utility.',
    logoAlt: 'Aimbot – logo',
  },
  'r6-cheat-risk': {
    title: 'Risk and Ban Exposure: An Honest Look at R6 Siege Cheats',
    logoAlt: 'Risk – Aimbot – logo',
  },
  'r6-esp-setup': {
    description:
      "Setup: 6v6 maps are small and busy. Here's how to set up player ESP and radar so you get useful information instead of a cluttered screen.",
    keywordHeading: 'Setup: R6 Siege Cheats',
    logoAlt: 'Setup – Aimbot – logo',
  },
  'r6-patch-day': {
    description:
      "Patch: A game update just landed. Here's what to check before launching your R6 tools so you don't waste time or take unnecessary risks.",
    keywordHeading: 'Patch: R6 Siege Cheats',
    logoAlt: 'Patch – Aimbot – logo',
  },
  'r6-features': {
    keywordHeading: 'Features: R6 Siege Cheats',
    logoAlt: 'Features – Aimbot – logo',
  },
  'r6-loader-fix': {
    keywordHeading: 'Loader: R6 Siege Cheats',
    logoAlt: 'Aimbot – logo',
  },
};

export function getBlogPostSeo(slug: string): BlogPostSeo | undefined {
  return BLOG_POST_SEO[slug];
}
