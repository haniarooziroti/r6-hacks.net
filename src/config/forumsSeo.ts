import { normalizeSeoPath } from './pageSeo';

export interface ForumThreadSeo {
  title: string;
  description: string;
  logoAlt: string;
  sidebarHeading: string;
  h1?: string;
  extraBody?: string[];
}

const FORUM_THREAD_SEO: Record<string, ForumThreadSeo> = {
  'aimbot-settings-smooth-level-ranked': {
    title: 'Ranked R6 Aimbot Smoothing & FOV | Forum',
    description:
      'What FOV and smoothing combo keeps Rainbow Six Siege aim assist believable in ranked killcams? Player config talk on r6hacks.net.',
    logoAlt: 'Ranked aimbot settings – R6 forum',
    sidebarHeading: 'Ranked aim',
    h1: 'Ranked R6 aimbot smoothing settings',
    extraBody: [
      'Players usually start with a smaller FOV circle on ARs, then add just enough smoothing that the replay still looks hand-driven.',
      'If tracking through hard cover looks too perfect, drop FOV and smoothing about ten percent and retest in unranked before ranked queues.',
    ],
  },
  'esp-box-style-site-clearance': {
    title: 'R6 ESP: Corner Box vs Skeleton | Forum',
    description:
      'Clubhouse and small sites get noisy with full ESP boxes. Corner box, skeleton, or minimal wallhack for Rainbow Six Siege ranked trades.',
    logoAlt: 'R6 ESP layout – forum thread',
    sidebarHeading: 'ESP layout',
    h1: 'R6 ESP: corner box or skeleton for site takes?',
  },
  'first-time-loader-r6-siege': {
    title: 'First R6 Loader Install on Win11 | Forum',
    description:
      'Loader or game first on Windows 11? First Rainbow Six Siege install order, BattlEye, and key delivery tips from players.',
    logoAlt: 'R6 loader setup – forum thread',
    sidebarHeading: 'Setup',
    h1: 'First R6 loader install on Win11',
    extraBody: [
      'Most successful first launches run the install client before opening the game, import a stock ranked preset, then warm up in Terrorist Hunt before ranked.',
      'Confirm Secure Boot, TPM, HVCI, and Core Isolation match the requirements page so the tool is not blocked mid-inject.',
    ],
  },
  'gadget-esp-claymore-drone': {
    title: 'Gadget ESP for Ranked R6 | Worth It? | Forum',
    description:
      'Attacker drones and claymore markers on Rainbow Six Siege—when gadget ESP helps ranked and when to use a separate profile from player ESP.',
    logoAlt: 'Gadget ESP – R6 forum',
    sidebarHeading: 'Gadget ESP',
    h1: 'Gadget ESP: worth it if I mostly play ranked?',
  },
  'triggerbot-delay-ms-r6': {
    title: 'R6 Triggerbot Delay in Ms | Forum',
    description:
      'Human-feeling triggerbot delay for Rainbow Six Siege ARs and SMGs—avoid instant shots that look suspicious in killcams and reports.',
    logoAlt: 'Triggerbot delay – R6 forum',
    sidebarHeading: 'Triggerbot',
    h1: 'R6 triggerbot delay settings',
    extraBody: [
      'Many AR users land around 55–70ms with a side-mouse hold key, then raise delay slightly if killcams still look instant.',
      'Keep the hold key ADS-only when flashbangs or utility spam cause accidental shots, and never leave delay at zero for ranked.',
    ],
  },
  'wallhack-opacity-soft-cover': {
    title: 'R6 Wallhack Opacity & Soft Cover | Forum',
    description:
      'Muted wallhack colors and opacity for defenders behind soft cover on Bank and similar Rainbow Six Siege maps—ranked-safe tuning.',
    logoAlt: 'Wallhack opacity – R6 forum',
    sidebarHeading: 'Wallhack',
    h1: 'Wallhack color for defenders behind soft cover?',
  },
  'monthly-vs-lifetime-r6': {
    title: 'Monthly vs Lifetime R6 Keys | Forum',
    description:
      'Monthly or lifetime Rainbow Six Siege cheat access—which plan fits one season versus year-round play? Checkout and module parity explained.',
    logoAlt: 'R6 pricing plans – forum thread',
    sidebarHeading: 'Checkout',
    h1: 'Monthly vs lifetime key—what did you pick?',
    extraBody: [
      'A monthly key fits if you only play one season or want to pause between major patches. You renew when status pages show all modules online.',
      'Lifetime makes sense when you expect several major updates. Compare checkout tiers on the product hub before you pick monthly billing.',
    ],
  },
  'config-profiles-ranked-unranked': {
    title: 'Ranked vs Casual R6 Config Profiles | Forum',
    description:
      'Separate aimbot and ESP profiles for Rainbow Six Siege ranked versus quick match—FOV and smoothing defaults that stay believable.',
    logoAlt: 'Config profiles – R6 forum',
    sidebarHeading: 'Aimbot configs',
    h1: 'Separate configs for ranked vs quick match?',
  },
  'stream-proof-overlay-obs-r6': {
    title: 'Stream-Proof Mode & OBS for R6 | Forum',
    description:
      'Does stream-proof hide Rainbow Six Siege ESP from OBS game capture? Short checklist before you stream with overlays enabled.',
    logoAlt: 'Stream-proof OBS – R6 forum',
    sidebarHeading: 'Setup',
    h1: 'Stream-proof mode—does it hide ESP from OBS?',
  },
  'checkout-license-delivery-time': {
    title: 'R6 License Email Delivery Time | Forum',
    description:
      'How long after Rainbow Six Siege checkout until the license email arrives? Spam folders, receipt links, and support if delivery stalls.',
    logoAlt: 'Checkout delivery – R6 forum',
    sidebarHeading: 'Checkout',
    h1: 'How fast did license email show up after pay?',
  },
};

export function getForumThreadSeo(slug: string): ForumThreadSeo | undefined {
  return FORUM_THREAD_SEO[slug];
}

export function forumThreadPath(slug: string): string {
  return normalizeSeoPath(`/forums/${slug}`);
}
