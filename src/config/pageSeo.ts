export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'R6 Hacks | Aimbot, ESP & Wallhack for Rainbow Six Siege',
    description:
      'R6 hacks for PC ranked: aimbot, player ESP, wallhack, gadget ESP, triggerbot, and radar. Compare modules, read forums, and checkout at r6hacks.net.',
  },
  '/products/rainbow-six-cheats/': {
    title: 'Rainbow Six Siege Cheats | Aimbot, ESP, Gadget Modules',
    description:
      'Rainbow Six Siege cheat modules on PC—aim assist, ESP, wallhack, gadget ESP, triggerbot, and 2D radar. Browse specs and continue to secure checkout.',
  },
  '/products/rainbow-six-cheats/aimbot/': {
    title: 'R6 Aimbot Module | FOV, Smoothing & Hitbox | r6hacks.net',
    description:
      'Rainbow Six Siege aimbot with FOV ring, smoothing, visibility checks, and bone priority. Conservative defaults for ranked PC play on r6hacks.net.',
  },
  '/products/rainbow-six-cheats/esp/': {
    title: 'R6 ESP & Wallhack | Boxes, Skeleton & Snaplines',
    description:
      'Player ESP for Rainbow Six Siege PC: corner boxes, skeleton, health, snaplines, and readable colors for site takes and 6v6 fights.',
  },
  '/products/rainbow-six-cheats/wallhack/': {
    title: 'R6 Wallhack Module | Soft-Cover Highlights for Siege PC',
    description:
      'Wallhack overlays that mark defenders through soft cover with tunable opacity—paired with ESP for Rainbow Six Siege ranked on PC.',
  },
  '/products/rainbow-six-cheats/gadget-esp/': {
    title: 'R6 Gadget ESP | Drones, Claymores & Defender Traps',
    description:
      'Gadget ESP for Rainbow Six Siege: attacker drones, claymores, defender traps, and utility markers on a clean PC overlay.',
  },
  '/products/rainbow-six-cheats/triggerbot/': {
    title: 'R6 Triggerbot | Delay, Hold Keys & Team Filters',
    description:
      'Triggerbot for Rainbow Six Siege PC with humanized delay, hold keys, and team filters—use with conservative aim settings in ranked.',
  },
  '/products/rainbow-six-cheats/radar/': {
    title: 'R6 2D Radar Hack | Site Awareness Overlay for Siege',
    description:
      'Compact 2D radar for Rainbow Six Siege with zoom, range caps, and colors matched to your ESP profile on PC multiplayer.',
  },
  '/cheats/': {
    title: 'R6 Cheats Guides | Aimbot, ESP & Setup Articles',
    description:
      'Setup guides for Rainbow Six Siege cheats: aimbot tuning, ESP layouts, loader steps, patch-day checks, checkout tips, and honest risk notes for PC.',
  },
  '/forums/': {
    title: 'R6 Siege Hacks Forum | Config & Checkout Talk',
    description:
      'Player forum for Rainbow Six Siege cheats—aimbot smoothing, ESP colors, gadget ESP, loader order, billing timing, and patch-day notes.',
  },
  '/reviews/': {
    title: 'R6 Cheat Reviews | Player Feedback on Modules & Support',
    description:
      '100+ Rainbow Six Siege cheat reviews covering aimbot feel, ESP clarity, loader setup, checkout delivery, and support response on r6hacks.net.',
  },
  '/faq/': {
    title: 'Rainbow Six Siege Cheats FAQ | Modules & Checkout',
    description:
      'FAQ for R6 PC modules: requirements, checkout delivery, config saves, ranked use, loader steps, billing, and account risk before you buy.',
  },
  '/terms/': {
    title: 'Terms & Conditions | R6 Cheat Access | r6hacks.net',
    description:
      'Terms for Rainbow Six Siege cheat licenses sold via r6hacks.net—purchase rules, refunds, acceptable use, and checkout obligations on PC.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Cookies & Support Data | r6hacks.net',
    description:
      'How r6hacks.net handles analytics, cookies, and support email when you browse Rainbow Six Siege module pages or contact billing help.',
  },
  '/about/': {
    title: 'About R6hacks Net | Rainbow Six Siege PC Content',
    description:
      'What r6hacks.net publishes for Rainbow Six Siege PC: module specs, setup articles, community forums, status notes, and support paths.',
  },
  '/support/': {
    title: 'R6 Cheats Support | Loader, Billing & Config Help',
    description:
      'Support for Rainbow Six Siege cheat access on PC—loader errors, license delivery, checkout questions, and config help via r6hacks.net.',
  },
  '/status/': {
    title: 'R6 Module Status | Live Cheat Availability | r6hacks.net',
    description:
      'Check whether Rainbow Six Siege aimbot, ESP, wallhack, and gadget modules are online after patches before you launch on PC.',
  },
  '/go/r6-siege/': {
    title: 'R6 Cheats Checkout | Secure Rainbow Six Siege Access',
    description:
      'Continue to secure checkout for Rainbow Six Siege PC cheat modules—aimbot, ESP, wallhack, and bundled access via r6hacks.net.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
