export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Aimbot for Rainbow Six Siege: ESP and Wallhack Tools',
    description:
      'Rainbow Six Siege cheats with ESP, aimbot, and wallhack modules for PC ranked. Compare operator overlays, forum configs, and secure checkout at r6hacks.net.',
  },
  '/products/rainbow-six-cheats/': {
    title: 'Rainbow Six Siege Cheats | Aimbot, ESP & Gadget',
    description:
      'Rainbow Six Siege cheat modules for PC: aim assist, player ESP, wallhack, gadget ESP, triggerbot, and radar. Pick a module and continue to checkout.',
  },
  '/products/rainbow-six-cheats/aimbot/': {
    title: 'R6 Aimbot Module | FOV, Smoothing & Hitbox Control',
    description:
      'Rainbow Six Siege aimbot settings with FOV ring, smoothing sliders, and hitbox priority for ranked and unranked on PC.',
  },
  '/products/rainbow-six-cheats/esp/': {
    title: 'R6 ESP & Wallhack | Operator Boxes & Skeleton',
    description:
      'Player ESP for Rainbow Six Siege with skeleton, corner boxes, snaplines, and readable colors for close-range site takes.',
  },
  '/products/rainbow-six-cheats/wallhack/': {
    title: 'R6 Wallhack | Soft-Cover Player Highlights',
    description:
      'Wallhack overlays for Rainbow Six Siege that mark defenders through soft cover with tunable opacity for ranked play.',
  },
  '/products/rainbow-six-cheats/gadget-esp/': {
    title: 'R6 Gadget ESP | Claymore, Drone & Defender Traps',
    description:
      'Gadget ESP for Rainbow Six Siege—attacker drones, claymores, defender traps, and utility markers on a clean overlay.',
  },
  '/products/rainbow-six-cheats/triggerbot/': {
    title: 'R6 Triggerbot | Delay & Hold-Key Setup',
    description:
      'Triggerbot module for Rainbow Six Siege with humanized delay, hold keys, and team filters for PC sessions.',
  },
  '/products/rainbow-six-cheats/radar/': {
    title: 'R6 Radar Hack | 2D Site Awareness Overlay',
    description:
      'Compact 2D radar for Rainbow Six Siege with zoom, range caps, and colors matched to your ESP profile.',
  },
  '/cheats/': {
    title: 'Cheats Guides for R6 Aimbot, ESP and Setup Articles',
    description:
      'Rainbow Six Siege guides covering aimbot tuning, ESP layouts, setup steps, patch-day checks, checkout tips, and risk notes for PC.',
  },
  '/forums/': {
    title: 'Rainbow Six Siege Cheats Forum | Config & Checkout Talk',
    description:
      'Forums for Rainbow Six Siege players discussing aimbot smooth levels, ESP colors, gadget ESP, loader order, and checkout questions.',
  },
  '/reviews/': {
    title: 'R6 Cheat Reviews | 100+ Player Feedback',
    description:
      'More than 100 Rainbow Six Siege cheat reviews on aimbot feel, ESP clarity, loader setup, and support response times.',
  },
  '/faq/': {
    title: 'Rainbow Six Siege FAQ | Modules, Checkout and Setup',
    description:
      'Answers on Rainbow Six Siege cheat modules, PC requirements, checkout delivery, config saves, ranked playlist use, and loader steps before you buy.',
  },
  '/terms/': {
    title: 'Terms & Conditions | r6hacks.net',
    description: 'Purchase terms, license use, and refund policy for Rainbow Six Siege cheat access sold through r6hacks.net.',
  },
  '/privacy/': {
    title: 'Privacy Policy for Cookies & Support on r6hacks.net',
    description:
      'Privacy details for how r6hacks.net uses analytics, cookies, and contact data when you browse pages or request loader and billing support.',
  },
  '/about/': {
    title: 'R6hacks Net – What We Publish for Rainbow Six Siege PC',
    description:
      'What we publish for Rainbow Six Siege PC players: module pages, setup articles, forums, and status notes at r6hacks.net.',
  },
  '/support/': {
    title: 'Support | Rainbow Six Siege Cheats Help',
    description: 'Get help with loader setup, configs, and checkout for Rainbow Six Siege cheat modules on PC.',
  },
  '/go/r6-siege/': {
    title: 'Get Rainbow Six Siege Cheat Access | Secure Checkout',
    description:
      'Rainbow Six Siege cheats with ESP, aimbot, and wallhack—continue to secure checkout for PC module access.',
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
