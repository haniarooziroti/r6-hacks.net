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
    title: 'Smooth FOV and Smoothing Combo for Ranked Killcams',
    description:
      'Smooth aim for ranked Rainbow Six Siege—what FOV and smoothing combo stays believable in killcams without looking like a highlight reel?',
    logoAlt: 'Smooth aim – Aimbot – logo',
    sidebarHeading: 'Ranked aim: R6 Siege Cheats',
    h1: 'Ranked R6 aimbot smoothing settings',
    extraBody: [
      'Players usually start with a smaller FOV circle on ARs, then add just enough smoothing that the replay still looks hand-driven.',
      'If tracking through hard cover looks too perfect, drop FOV and smoothing about ten percent and retest in unranked before ranked queues.',
      'Save a ranked profile separate from casual so you can roll back after a patch without rebuilding every slider.',
      'Compare killcams from both sides of a round—if corrections look stepped or magnetic, lower strength before you touch bone priority again.',
      'Keep notes on operator and weapon when you change values; a setting that feels fine on an SMG can look obvious on a DMR.',
    ],
  },
  'first-time-loader-r6-siege': {
    title: 'Loader – First R6 Install Order on Win11 | R6 Cheats',
    description:
      'Loader first-install tips: key in inbox, BattlEye running. Client first or game first on Win11? Rainbow Six Siege setup tips from players who finished.',
    logoAlt: 'Loader – Aimbot – logo',
    sidebarHeading: 'Setup: R6 Siege Cheats',
    h1: 'First R6 loader install on Win11',
    extraBody: [
      'Most successful first launches run the install client before opening the game, import a stock ranked preset, then warm up in Terrorist Hunt before ranked.',
      'Confirm Secure Boot, TPM, HVCI, and Core Isolation match the requirements page so the tool is not blocked mid-inject.',
      'If Windows security features flip after an update, re-check them before opening a support ticket—most first-day failures stop there.',
      'Keep the delivery email open while you install so you can paste the key without restarting the client mid-setup.',
      'After a clean launch, save the stock preset under a new name before you change FOV or ESP density.',
      'The FAQ and requirements guides on this site list the same Windows 10/11 checklist: Memory integrity on, TPM ready for use, and Secure Boot State On in msinfo32 before you pay.',
      'Checkout delivery puts access details on the order email; if nothing arrives, check spam, then open support with that address—same path the buy and troubleshooting articles describe.',
      'Press INSERT after Siege starts to open the menu, enable player ESP first for one match, then add aim assist—learning one module at a time matches the setup articles already published here.',
    ],
  },
  'triggerbot-delay-ms-r6': {
    title: 'Triggerbot Delay – Human Ms Timing | R6 Siege Cheats',
    description:
      'Triggerbot delay: instant trigger got me reported in unranked twice. What sane delay for AR tap and burst fire still feels human on Rainbow Six Siege?',
    logoAlt: 'Triggerbot delay – Aimbot – logo',
    sidebarHeading: 'Triggerbot delay: R6 Siege Cheats',
    h1: 'R6 triggerbot delay settings',
    extraBody: [
      'Many AR users land around 55–70ms with a side-mouse hold key, then raise delay slightly if killcams still look instant.',
      'Keep the hold key ADS-only when flashbangs or utility spam cause accidental shots, and never leave delay at zero for ranked.',
      'Retest after patches—weapon recoil changes can make an old delay feel too aggressive even if the number did not change.',
    ],
  },
  'will-high-aim-smooth-get-me-banned': {
    title: 'Smoothing What Level — R6 6v6 Settings | R6 Siege Cheats',
    description:
      'Smoothing What Level: Commercial question but serious—how conservative are you with smooth and FOV to avoid obvious killcams?',
    logoAlt: 'Smoothing What Level – Aimbot – logo',
    sidebarHeading: 'Smoothing What Level: R6 Siege Cheats',
    extraBody: [
      'When you ask smoothing what level fits ranked 6v6, think about killcam optics first—not leaderboard pace. Mid-high smooth with a modest FOV circle keeps corrections readable on PC.',
      'If you still worry about reports, pair smoothing what level tuning with normal pre-aim habits and avoid tracking through hard cover.',
    ],
  },
  'aimbot-settings-fov-and-smoothing': {
    title: 'Fov And Smoothing — Aim Circle Tuning | R6 Siege Cheats',
    description:
      'Fov And Smoothing: Trying to dial in the aim circle without looking robotic in 6v6—what are people running after the last patch?',
    logoAlt: 'Fov And Smoothing – Aimbot – logo',
    sidebarHeading: 'Fov And Smoothing: R6 Siege Cheats',
    extraBody: [
      'Fov and smoothing work together: widen the circle for Ground War, then add one notch of smooth before you touch bone priority.',
      'After a patch, reset fov and smoothing by ten percent, test one playlist, then compare forum replies before you chase instant snap settings.',
    ],
  },
  'monthly-vs-lifetime-worth-it': {
    title: 'Monthly vs Lifetime R6 Access | R6 Siege Cheats',
    description:
      'Monthly plan vs lifetime key for R6 modules—what players buy for a single season versus year-round DMZ and 6v6.',
    logoAlt: 'Monthly – Aimbot – logo',
    sidebarHeading: 'Monthly: R6 Siege Cheats',
    extraBody: [
      'A monthly key fits if you only play one season or want to pause between major patches. You renew when status pages show all modules online.',
      'Lifetime makes sense when you split time between Gadget ESP and core multiplayer and expect several major updates. Compare checkout tiers on the product hub before you pick monthly billing.',
      'Either way, keep the same email for checkout delivery and support tickets so license swaps stay fast.',
    ],
  },
};

export function getForumThreadSeo(slug: string): ForumThreadSeo | undefined {
  return FORUM_THREAD_SEO[slug];
}

export function forumThreadPath(slug: string): string {
  return normalizeSeoPath(`/forums/${slug}`);
}
