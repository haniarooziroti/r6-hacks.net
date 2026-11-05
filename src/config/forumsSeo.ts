import { normalizeSeoPath } from './pageSeo';

export interface ForumThreadSeo {
  title: string;
  description: string;
  logoAlt: string;
  sidebarHeading: string;
  extraBody?: string[];
}

const FORUM_THREAD_SEO: Record<string, ForumThreadSeo> = {
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
