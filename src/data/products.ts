import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

export const productRelatedBlogSlugs: Record<string, string[]> = {
  aimbot: ['r6-aimbot-setup', 'r6-cheat-risk', 'r6-features'],
  esp: ['r6-esp-setup', 'r6-features', 'r6-wallhack-guide'],
  wallhack: ['r6-wallhack-guide', 'r6-esp-setup', 'r6-features'],
  triggerbot: ['r6-triggerbot-guide', 'r6-aimbot-setup', 'r6-features'],
  radar: ['r6-esp-setup', 'r6-patch-day', 'r6-features'],
  'gadget-esp': ['r6-gadget-esp-guide', 'r6-plans', 'r6-features'],
};

import { GAMEPLAY_STILLS } from '../config/media';

const productBase = '/products/rainbow-six-cheats/';

const sharedAcquisition: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Pick your access window',
    desc: 'Monthly or lifetime keys cover the same R6 module list—choose what fits your season on PC.',
  },
  {
    num: '02',
    title: 'Complete secure checkout',
    desc: 'Checkout runs on our partner page. Keep the email you pay with handy for delivery.',
  },
  {
    num: '03',
    title: 'Install the loader',
    desc: 'Follow the delivery email, run the loader on Windows 10/11, and import a starter config.',
  },
  {
    num: '04',
    title: 'Tune in a private match',
    desc: 'Test aim circle size, ESP density, and radar zoom before jumping into ranked playlists.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return { title: `How to get ${productName}`, steps: sharedAcquisition };
}

const sharedGoodToKnow =
  'Rainbow Six Siege receives frequent updates. Confirm the status note on the homepage before you launch. Stream-proof overlay mode is available when you record gameplay.';

const sharedLimitations =
  'Third-party software in online multiplayer can violate publisher terms and lead to account penalties. You accept that risk. Features and compatibility can change after game or Windows updates without notice.';

const r6SystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or Windows 11 (64-bit).' },
  { icon: 'reqCpu', text: 'Intel or AMD CPU that meets R6 PC requirements.' },
  { icon: 'reqSettings', text: 'Secure Boot, TPM, HVCI, and Core Isolation enabled where required.' },
  { icon: 'reqWifi', text: 'Stable internet for loader access and module updates.' },
];

const slides = {
  aimbot: {
    src: GAMEPLAY_STILLS.aimbotMenu,
    alt: 'R6 aimbot menu showing FOV circle and smoothing sliders',
    caption: 'Aim assist tuning',
    captionDesc: 'FOV ring, smooth strength, and bone priority for 6v6 engagements.',
  },
  esp: {
    src: GAMEPLAY_STILLS.espOperators,
    alt: 'R6 player ESP with boxes, health bars, and skeleton overlay',
    caption: 'Player ESP layout',
    captionDesc: 'Corner boxes, armor readout, and distance caps for readable 6v6 fights.',
  },
  trigger: {
    src: GAMEPLAY_STILLS.triggerConfig,
    alt: 'R6 triggerbot settings with delay and hitbox options',
    caption: 'Trigger module',
    captionDesc: 'Delay, hold key, and shared wall checks with aim assist.',
  },
  radar: {
    src: GAMEPLAY_STILLS.radarOverlay,
    alt: 'R6 2D radar with operator markers and zoom controls',
    caption: '2D radar',
    captionDesc: 'Operator dots with range and zoom for Ground War rotations.',
  },
  dmz: {
    src: GAMEPLAY_STILLS.gadgetEsp,
    alt: 'Rainbow Six Siege gadget ESP highlighting drones claymores and defender traps',
    caption: 'Gadget ESP',
    captionDesc: 'Attacker drones, claymores, frost traps, and mute jammers on a clean overlay.',
  },
  menu: {
    src: GAMEPLAY_STILLS.menuConfig,
    alt: 'Rainbow Six Siege cheat menu with saved config profiles for ranked',
    caption: 'Config profiles',
    captionDesc: 'Save ranked and quick match setups without rebuilding sliders each session.',
  },
  aimbotB: {
    src: GAMEPLAY_STILLS.wallhackSite,
    alt: 'R6 aim assist circle overlay during a gunfight',
    caption: 'Aim circle',
    captionDesc: 'On-screen FOV ring for believable tracking help.',
  },
  espB: {
    src: GAMEPLAY_STILLS.wallhackSite,
    alt: 'R6 wallhack style player boxes in a multiplayer match',
    caption: 'Readable ESP',
    captionDesc: 'Soft colors for cover vs line-of-sight targets.',
  },
  triggerB: {
    src: GAMEPLAY_STILLS.menuConfig,
    alt: 'R6 triggerbot hold key binding in the menu',
    caption: 'Trigger hold key',
    captionDesc: 'Fire only when you mean to.',
  },
  radarB: {
    src: GAMEPLAY_STILLS.rankedPush,
    alt: 'R6 radar overlay beside the minimap',
    caption: 'Radar zoom',
    captionDesc: 'Pull zoom in for Ground War lanes.',
  },
  dmzB: {
    src: GAMEPLAY_STILLS.gadgetEsp,
    alt: 'Rainbow Six Siege defender trap markers on gadget ESP overlay',
    caption: 'Trap awareness',
    captionDesc: 'Frost mats and Ela mines stand out before you commit to a push.',
  },
  menuB: {
    src: GAMEPLAY_STILLS.rankedPush,
    alt: 'R6 misc tab with stream-proof toggle',
    caption: 'Stream-proof mode',
    captionDesc: 'Keep overlays off capture when you record.',
  },
};

type ModuleDef = {
  slug: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  badge: string;
  category: string;
  variant?: ProductPage['variant'];
  imageKey: keyof typeof slides;
  fullFeatures: string[];
  overview: string[];
  body: { type: 'h2' | 'p'; text: string }[];
};

const modules: ModuleDef[] = [
  {
    slug: 'aimbot',
    name: 'Aimbot',
    title: 'R6 Aimbot Module',
    subtitle: 'Smooth aim inside your FOV ring',
    desc: 'Precision aim assist for Rainbow Six Siege PC multiplayer with circle FOV, smoothing, and visibility checks.',
    features: ['Adjustable aim circle', 'Head or chest priority', 'Team and downed filters', 'Shared wall logic'],
    more: 8,
    badge: 'Core module',
    category: 'Aim assist',
    variant: 'popular',
    imageKey: 'aimbot',
    fullFeatures: [
      'Aim circle sized around your crosshair',
      'Smooth tracking instead of instant snaps',
      'Head, upper chest, or closest bone selection',
      'Ignores operators behind hard cover',
      'Distance cap per playlist',
      'Skip teammates and downed players',
      'Optional FOV ring draw for tuning',
    ],
    overview: [
      'The aim module eases onto targets inside a circle you control. It respects the same visibility rules you expect in a competitive match—no tracking through solid walls.',
      'Start with a wide circle and higher smoothing in private matches, then tighten values once your crosshair placement feels natural.',
    ],
    body: [
      { type: 'h2', text: 'Who this fits' },
      {
        type: 'p',
        text: 'Players who want steadier gunfights in 6v6 and Ground War without jerky camera movement. Pair with player ESP if you need extra context on flanks.',
      },
    ],
  },
  {
    slug: 'esp',
    name: 'Player ESP',
    title: 'R6 ESP & Wallhack',
    subtitle: 'Readable boxes, health, and skeleton',
    desc: 'Player ESP for R6 with armor plates, distance, weapon readouts, and squad colors tuned for fast TTK playlists.',
    features: ['Box or corner style', 'Health and plates', 'Skeleton option', 'Squad color coding'],
    more: 10,
    badge: 'Core module',
    category: 'Visuals',
    variant: 'essential',
    imageKey: 'esp',
    fullFeatures: [
      'Full box or corner box styles',
      'Skeleton for stance reads',
      'Health and armor plate display',
      'Distance readout with cap slider',
      'Optional name tags',
      'Weapon in hand label',
      'Snaplines with distance limit',
      'Muted color for players behind soft cover',
      'Squad color grouping',
    ],
    overview: [
      'ESP keeps fights readable: you see who is pushing, who is one plate away, and how far the duel actually is.',
      'Names stay off by default so the screen stays clean—toggle them when you are reviewing demos or coaching friends.',
    ],
    body: [
      { type: 'h2', text: '6v6 vs DMZ' },
      {
        type: 'p',
        text: 'For Gadget ESP you will usually run the loot layer separately. In 6v6, a tight box plus health is often enough—see the Gadget ESP page when you rotate modes.',
      },
    ],
  },
  {
    slug: 'triggerbot',
    name: 'Triggerbot',
    title: 'R6 Triggerbot',
    subtitle: 'Shots only when you are on target',
    desc: 'Trigger module fires when your crosshair is already on an operator, with delay tuning and shared visibility checks.',
    features: ['Hold key', 'Shot delay', 'Head or chest', 'Wall check parity'],
    more: 4,
    badge: 'Add-on',
    category: 'Combat',
    imageKey: 'trigger',
    fullFeatures: [
      'Fires on crosshair contact only',
      'Short delay before shot',
      'Head or upper chest selection',
      'Same wall validation as aim assist',
      'Hold key binding',
    ],
    overview: [
      'Trigger does not pull your aim—it only confirms the shot when you are already lined up. That keeps recoil control in your hands.',
    ],
    body: [
      {
        type: 'p',
        text: 'Use a slightly longer delay if you want the module to feel closer to manual clicking in clutch moments.',
      },
    ],
  },
  {
    slug: 'radar',
    name: '2D Radar',
    title: 'R6 2D Radar',
    subtitle: 'Minimap-style operator feed',
    desc: 'Compact radar with operator markers, zoom, and range limits for Ground War and large playlists.',
    features: ['Operator dots', 'Zoom slider', 'Range cap', 'Matches ESP colors'],
    more: 3,
    badge: 'Awareness',
    category: 'Radar',
    imageKey: 'radar',
    fullFeatures: ['2D radar overlay', 'Operator markers', 'Radar range control', 'Radar zoom'],
    overview: [
      'The radar mirrors ESP logic in a smaller footprint—handy when you are holding a lane and do not want to scan the whole screen.',
    ],
    body: [],
  },
  {
    slug: 'gadget-esp',
    name: 'Gadget ESP',
    title: 'R6 Gadget ESP',
    subtitle: 'Traps, cameras, and utility highlights',
    desc: 'Highlights defender gadgets, cameras, and utility on Siege maps—with a lean preset for ranked.',
    features: ['Trap outlines', 'Camera tags', 'Utility range', 'Ranked-safe preset'],
    more: 4,
    badge: 'Gadgets',
    category: 'Utility',
    imageKey: 'dmz',
    fullFeatures: [
      'Defender trap highlights',
      'Camera and gadget tags',
      'Utility distance fade',
      'Color matched to player ESP',
      'Toggle per gadget class',
      'Ranked playlist preset',
    ],
    overview: [
      'Gadget ESP keeps round-critical utility visible without cluttering your screen during pushes and retakes.',
    ],
    body: [],
  },
];

type SlideKey = keyof typeof slides;

const moduleSecondSlide: Record<string, SlideKey> = {
  aimbot: 'aimbotB',
  esp: 'espB',
  triggerbot: 'triggerB',
  radar: 'radarB',
  'gadget-esp': 'dmzB',
};

function buildPages(): ProductPage[] {
  return modules.map((mod) => ({
    slug: mod.slug,
    kind: 'tier',
    badge: mod.badge,
    category: mod.category,
    tier: mod.name,
    name: mod.name,
    title: mod.title,
    subtitle: mod.subtitle,
    desc: mod.desc,
    features: mod.features,
    more: mod.more,
    variant: mod.variant,
    buyUrl: checkoutForSlug(mod.slug),
    images: [slides[mod.imageKey], slides[moduleSecondSlide[mod.slug] ?? 'menuB']],
    overview: { title: `${mod.name} overview`, paragraphs: mod.overview },
    acquisition: acquisitionFor(mod.title),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    fullFeatures: mod.fullFeatures,
    systemRequirements: r6SystemRequirements,
    body: mod.body,
    relatedBlogSlugs: productRelatedBlogSlugs[mod.slug] ?? [],
  }));
}

export const productPages: ProductPage[] = buildPages();

export const cheatPages = productPages;

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return getProductPage(slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return productPages.map((p) => p.slug);
}

export const heroSlides = [slides.esp, slides.aimbot, slides.radar, slides.dmz];

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Rainbow Six Siege PC modules—aim assist, player ESP, wallhack, gadget ESP, triggerbot, and radar in one access pass.',
  buyUrl: checkoutPath('r6'),
};
