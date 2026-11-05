/** R6 gameplay & blog imagery (WebP on Supabase CDN — lazy-loaded, no local PNG weight). */

export const MEDIA_CDN_ORIGIN = 'https://ooszazcwzmwhitdxwtom.supabase.co';

const R6_LIB = `${MEDIA_CDN_ORIGIN}/storage/v1/object/public/seo-media-library/r6`;
const PACK_A = `${R6_LIB}/05c202fe-8171-4881-bc3a-b25833919850`;
const PACK_B = `${R6_LIB}/f8fb1df6-697d-4d9b-b239-91326d061bf8`;

/** Shared WebP assets — already compressed for web delivery. */
export const R6_CDN = {
  heroPoster: `${PACK_A}/1793895949769-hwpevh-1r62.webp`,
  rankedPush: `${PACK_A}/1793895886073-hgicom-1r61.webp`,
  menuConfig: `${PACK_A}/1793895826378-9muna6-1r63.webp`,
  espOperators: `${PACK_B}/1793467164902-dhd3cn-9.webp`,
  triggerConfig: `${PACK_B}/1793467060001-uk5739-3.webp`,
  gadgetEsp: `${PACK_B}/1793467030413-2xvj89-8.webp`,
  wallhackSite: `${PACK_B}/1793467017920-wcqjc4-7.webp`,
  radarOverlay: `${PACK_B}/1793467013518-uws7ga-6.webp`,
  aimbotMenu: `${PACK_B}/1793467008010-7f5ql2-5.webp`,
  blogFeaturedA: `${PACK_B}/1793467002165-gga9sg-4.webp`,
  blogFeaturedB: `${PACK_B}/1793466995758-0n86gr-2.webp`,
} as const;

const HERO_VIDEO_PACK = `${R6_LIB}/02ab714e-de37-423b-81f2-afd7f7fd8d28`;

export const HERO_VIDEO = {
  /** CDN MP4 only — no local WebM; keeps the homepage light. */
  webm: '',
  mp4: `${HERO_VIDEO_PACK}/1793904035913-gxyi24-day-7-of-rage-cheating-in-rainbow-six-with-5-r6-cheats.mp4`,
  poster: R6_CDN.heroPoster,
  durationSec: 60,
} as const;

export const GAMEPLAY_STILLS = {
  aimbotMenu: R6_CDN.aimbotMenu,
  espOperators: R6_CDN.espOperators,
  wallhackSite: R6_CDN.wallhackSite,
  gadgetEsp: R6_CDN.gadgetEsp,
  triggerConfig: R6_CDN.triggerConfig,
  radarOverlay: R6_CDN.radarOverlay,
  rankedPush: R6_CDN.rankedPush,
  menuConfig: R6_CDN.menuConfig,
} as const;

export const SITE_MEDIA = {
  aimbot: GAMEPLAY_STILLS.aimbotMenu,
  esp: GAMEPLAY_STILLS.espOperators,
  wallhack: GAMEPLAY_STILLS.wallhackSite,
  gadget: GAMEPLAY_STILLS.gadgetEsp,
  trigger: GAMEPLAY_STILLS.triggerConfig,
  radar: GAMEPLAY_STILLS.radarOverlay,
  hero: GAMEPLAY_STILLS.rankedPush,
  config: GAMEPLAY_STILLS.menuConfig,
} as const;

/** Blog hero images keyed by slug (Rainbow Six Siege setup & cheat guides). */
export const BLOG_FEATURED_IMAGES: Record<string, string> = {
  'r6-buy-cheats': R6_CDN.blogFeaturedB,
  'r6-aimbot-setup': R6_CDN.blogFeaturedA,
  'r6-cheat-risk': R6_CDN.aimbotMenu,
  'r6-gadget-esp-guide': R6_CDN.gadgetEsp,
  'r6-esp-setup': R6_CDN.espOperators,
  'r6-features': R6_CDN.wallhackSite,
  'r6-loader-fix': R6_CDN.triggerConfig,
  'r6-patch-day': R6_CDN.rankedPush,
  'r6-plans': R6_CDN.menuConfig,
  'r6-requirements': R6_CDN.heroPoster,
  'r6-triggerbot-guide': R6_CDN.radarOverlay,
};

export function resolveBlogFeaturedImage(slug: string, fallback: string): string {
  return BLOG_FEATURED_IMAGES[slug] ?? fallback;
}

/** Default Open Graph / Twitter preview when a page does not set its own image. */
export const DEFAULT_SITE_OG_IMAGE = R6_CDN.heroPoster;
