export interface BlogPostSeo {
  /** Full document title (30–60 chars when possible). */
  title?: string;
  description?: string;
  logoAlt?: string;
}

export const BLOG_POST_SEO: Record<string, BlogPostSeo> = {
  'r6-buy-cheats': {
    title: 'How to Buy R6 Cheats in 2026 | Checkout Guide',
    description:
      'Buying Rainbow Six Siege cheat access: checkout steps, license email delivery, first loader launch, and PC checks before you pay on r6hacks.net.',
    logoAlt: 'Buy R6 cheats guide – logo',
  },
  'r6-aimbot-setup': {
    title: 'R6 Aimbot Setup: FOV & Smoothing Guide',
    description:
      'Set Rainbow Six Siege aim assist with a readable FOV circle and smoothing for ranked—starting values that avoid robotic killcams on PC.',
    logoAlt: 'R6 aimbot setup guide – logo',
  },
  'r6-cheat-risk': {
    title: 'R6 Cheat Risk & Ban Exposure | Honest Guide',
    description:
      'Account risk using Rainbow Six Siege cheats on PC—what raises bans, what we cannot promise, and why sketchy free downloads fail.',
    logoAlt: 'R6 cheat risk guide – logo',
  },
  'r6-esp-setup': {
    title: 'R6 ESP & Radar Setup for Ranked HUDs',
    description:
      'Configure player ESP and radar for Rainbow Six Siege 6v6: corner boxes, distance caps, and squad colors without cluttering your screen.',
    logoAlt: 'R6 ESP setup guide – logo',
  },
  'r6-patch-day': {
    title: 'Rainbow Six Siege Patch-Day Cheat Checklist',
    description:
      'After a Rainbow Six Siege update: check module status, loader version, and conservative settings before launching R6 tools on PC.',
    logoAlt: 'R6 patch-day checklist – logo',
  },
  'r6-features': {
    title: 'R6 Cheat Features Explained | Aim, ESP, Radar',
    description:
      'Plain-English tour of Rainbow Six Siege cheat menu features—aimbot, ESP, wallhack, radar, gadget ESP, and who needs each module.',
    logoAlt: 'R6 features guide – logo',
  },
  'r6-loader-fix': {
    title: 'R6 Loader Not Working? Common Fixes',
    description:
      'Rainbow Six Siege loader will not open, menu missing, or game crashes—step through HVCI, admin run, and patch-day fixes before support.',
    logoAlt: 'R6 loader fix guide – logo',
  },
  'r6-plans': {
    title: 'R6 Monthly vs Lifetime Plans | Which Is Cheaper',
    description:
      'Compare monthly and lifetime Rainbow Six Siege cheat keys—break-even math, season players versus year-round grinders, same module list.',
    logoAlt: 'R6 plans guide – logo',
  },
  'r6-requirements': {
    title: 'R6 Cheat PC Requirements | HVCI, TPM, Secure Boot',
    description:
      'Windows 10/11 requirements for Rainbow Six Siege cheats: verify HVCI, Core Isolation, TPM, and Secure Boot before checkout.',
    logoAlt: 'R6 system requirements – logo',
  },
  'r6-triggerbot-guide': {
    title: 'R6 Triggerbot & Recoil Guide | Safe Defaults',
    description:
      'Use Rainbow Six Siege triggerbot and light recoil control without instant shots—delay, hold keys, and when to disable in ranked.',
    logoAlt: 'R6 triggerbot guide – logo',
  },
  'r6-gadget-esp-guide': {
    title: 'R6 Gadget ESP Guide | Traps & Utility Markers',
    description:
      'Gadget ESP for Rainbow Six Siege: drones, claymores, defender traps, and utility markers—with a lean preset for ranked playlists.',
    logoAlt: 'R6 gadget ESP guide – logo',
  },
};

export function getBlogPostSeo(slug: string): BlogPostSeo | undefined {
  return BLOG_POST_SEO[slug];
}
