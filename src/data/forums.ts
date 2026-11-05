export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
}

export const forumCategories = [
  { name: 'Setup', tone: 'purple', icon: 'settings' },
  { name: 'Aimbot', tone: 'blue', icon: 'crosshair' },
  { name: 'ESP', tone: 'green', icon: 'eye' },
  { name: 'Features', tone: 'orange', icon: 'layers' },
  { name: 'Checkout', tone: 'purple', icon: 'package' },
] as const;

function thread(
  post: Omit<ForumPost, 'commentsCount'> & { comments: ForumComment[] },
): ForumPost {
  const count = post.comments.reduce((sum, c) => sum + 1 + (c.replies?.length ?? 0), 0);
  return { ...post, commentsCount: count };
}

export const forumPosts: ForumPost[] = [
  thread({
    slug: 'aimbot-settings-smooth-level-ranked',
    category: 'Aimbot',
    categoryTone: 'blue',
    title: 'Aimbot settings: what smooth level keeps killcams believable?',
    excerpt:
      'Picking up Rainbow Six Siege aimbot access—what FOV and smoothing combo are you running in ranked without looking like a highlight reel?',
    author: 'thatch_main',
    age: 'Oct 2, 2026',
    upvotes: 284,
    flair: 'Config talk',
    body: [
      'Not trying to meme configs. I want aim assist that still looks like hand tracking when someone watches the round replay.',
      'Are you running tight FOV on ARs or widening for CQB? Curious what people settled on after the last operator patch.',
    ],
    comments: [
      {
        author: 'bandit_fan09',
        age: '4 hours ago',
        score: 41,
        body: 'Mid smooth + small FOV saved me. Head priority only inside like 8m or I whiff full mag dumps.',
      },
      {
        author: 'thatch_main',
        age: '3 hours ago',
        score: 9,
        body: 'Tried that in unranked and it already feels less snappy. One more notch tonight before ranked.',
      },
      {
        author: 'sore_elbow',
        age: '2 hours ago',
        score: -3,
        body: 'Felt worse after checkout honestly. Support swapped the key but aim still feels mushy vs the product clip.',
        replies: [
          {
            author: 'vault_ops',
            age: '1 hour ago',
            score: 7,
            body: 'Mushy is usually smoothing too high. Drop FOV and tracking ten percent before you rage refund.',
          },
        ],
      },
    ],
  }),
  thread({
    slug: 'esp-box-style-site-clearance',
    category: 'ESP',
    categoryTone: 'green',
    title: 'R6 ESP: corner box or skeleton for site takes?',
    excerpt: 'Clubhouse upstairs gets noisy with full boxes. Minimal wallhack that still wins trades?',
    author: 'mute_lover',
    age: 'Sep 18, 2026',
    upvotes: 96,
    flair: 'ESP layout',
    body: ['Skeleton looks cool in clips but I lose my own operator in chaos.'],
    comments: [
      { author: 'rio_anchor', age: '6 hours ago', score: 22, body: 'Corner box + health + 25m cap. Skeleton off unless coaching friends.' },
      { author: 'mute_lover', age: '5 hours ago', score: 4, body: '25m was the tip. was drawing whole map lol.' },
      { author: 'salt_rank',
        age: '4 hours ago',
        score: -2,
        body: 'Turned ESP off for a week and played better. hard to unlearn staring at walls.',
      },
    ],
  }),
  thread({
    slug: 'first-time-loader-r6-siege',
    category: 'Setup',
    categoryTone: 'purple',
    title: 'First Rainbow Six Siege loader install—launch order?',
    excerpt: 'Key hit inbox fast. BattlEye already running. Loader first or game first on Win11?',
    author: 'fresh_ubi',
    age: 'Aug 4, 2026',
    upvotes: 151,
    flair: 'Setup',
    body: ['Secure boot on like the requirements page says. scared to brick first session.'],
    comments: [
      { author: 'hex_line', age: '1 day ago', score: 38, body: 'Client before game. Import stock ranked preset, shoot THunt, then tweak.' },
      { author: 'fresh_ubi', age: '23 hours ago', score: 11, body: 'Worked. maybe twelve min total.' },
      { author: 'tired_queue', age: '20 hours ago', score: -1, body: 'HVCI blocked me once. Core isolation toggle fixed it maybe coincidence.' },
    ],
  }),
  thread({
    slug: 'gadget-esp-claymore-drone',
    category: 'Features',
    categoryTone: 'orange',
    title: 'Gadget ESP: worth it if I mostly play ranked?',
    excerpt: 'Attacker drone markers sound nice but I do not want screen clutter on Oregon.',
    author: 'iq_scan',
    age: 'Jul 11, 2026',
    upvotes: 73,
    body: ['Do you run gadget layer separate from player ESP or one profile?'],
    comments: [
      { author: 'cinder_v', age: '2 days ago', score: 19, body: 'Separate profile. Gadget layer off in ranked unless you roam a lot.' },
      { author: 'iq_scan', age: '1 day ago', score: 5, body: 'makes sense ty' },
    ],
  }),
  thread({
    slug: 'triggerbot-delay-ms-r6',
    category: 'Features',
    categoryTone: 'orange',
    title: 'Triggerbot delay—how many ms feels human on R6?',
    excerpt: 'Instant trigger got me reported in unranked twice. sane delay for AR?',
    author: 'clicky_r6',
    age: 'Jun 9, 2026',
    upvotes: 118,
    body: ['Side mouse hold key. what delay for tap vs burst?'],
    comments: [
      { author: 'north_v', age: '8 hours ago', score: 29, body: '55-70ms on AR. lower on DMR but never zero.' },
      { author: 'clicky_r6', age: '7 hours ago', score: 6, body: '60 default. closer to my actual click.' },
      {
        author: 'rank_salt',
        age: '6 hours ago',
        score: -4,
        body: 'Still fires near flashbangs. disabled for now.',
        replies: [{ author: 'north_v', age: '5 hours ago', score: 4, body: 'Stricter hold key only when ADS.' }],
      },
    ],
  }),
  thread({
    slug: 'wallhack-opacity-soft-cover',
    category: 'ESP',
    categoryTone: 'green',
    title: 'Wallhack color for defenders behind soft cover?',
    excerpt: 'Muted tone helps prefires but I overpeek when it pulses bright on Bank.',
    author: 'pager_b',
    age: 'May 3, 2026',
    upvotes: 64,
    body: ['Anyone run second color or disable entirely for ranked?'],
    comments: [
      { author: 'cinder_v', age: '3 days ago', score: 17, body: 'Keep it but 35% opacity. bright green is clip bait.' },
      { author: 'pager_b', age: '2 days ago', score: 5, body: '40% feels right ty.' },
    ],
  }),
  thread({
    slug: 'monthly-vs-lifetime-r6',
    category: 'Checkout',
    categoryTone: 'purple',
    title: 'Monthly vs lifetime key—what did you pick?',
    excerpt: 'Season pass player. monthly enough or lifetime pays off after two seasons?',
    author: 'budget_plant',
    age: 'Apr 12, 2026',
    upvotes: 89,
    flair: 'Pricing',
    body: ['Same modules either way right?'],
    comments: [
      { author: 'long_grind', age: '12 hours ago', score: 24, body: 'Lifetime if you play year round. Monthly if you dip between seasons.' },
      { author: 'budget_plant', age: '10 hours ago', score: 3, body: 'monthly for now. upgrade later if still playing.' },
      { author: 'angry_refund', age: '9 hours ago', score: -5, body: 'Lifetime and patch broke loader for 3 days. support was slow.' },
    ],
  }),
  thread({
    slug: 'config-profiles-ranked-unranked',
    category: 'Aimbot',
    categoryTone: 'blue',
    title: 'Separate configs for ranked vs quick match?',
    excerpt: 'Quick match feels fine with wide FOV but ranked long angles look sus.',
    author: 'lane_3',
    age: 'Mar 8, 2026',
    upvotes: 52,
    body: ['Duplicate profiles or lazy one-size?'],
    comments: [
      { author: 'chip_m', age: '1 day ago', score: 18, body: 'Two profiles. Ranked FOV smaller always.' },
      { author: 'lane_3', age: '22 hours ago', score: 4, body: 'Copied preset and renamed. should have day one.' },
    ],
  }),
  thread({
    slug: 'stream-proof-overlay-obs-r6',
    category: 'Setup',
    categoryTone: 'purple',
    title: 'Stream-proof mode—does it hide ESP from OBS?',
    excerpt: 'Small stream, do not want boxes on VOD. test checklist?',
    author: 'clip_safe',
    age: 'Feb 1, 2026',
    upvotes: 44,
    body: ['Game capture vs display capture—any difference?'],
    comments: [
      { author: 'obs_nerd', age: '5 hours ago', score: 14, body: 'Record 30 sec with stream proof on. check VOD before going live.' },
      { author: 'clip_safe', age: '4 hours ago', score: 2, body: 'game capture clean. display capture showed menu once.' },
    ],
  }),
  thread({
    slug: 'checkout-license-delivery-time',
    category: 'Checkout',
    categoryTone: 'purple',
    title: 'How fast did license email show up after pay?',
    excerpt: 'Paid with card. inbox empty 20 min. normal?',
    author: 'waiting_key',
    age: 'Jan 15, 2026',
    upvotes: 67,
    body: ['Checked spam. same email as checkout.'],
    comments: [
      { author: 'support_fan', age: '2 hours ago', score: 21, body: 'Mine was 4 min. refresh portal link from receipt.' },
      { author: 'waiting_key', age: '1 hour ago', score: 8, body: 'landed after 35 min. impatience lol.' },
      { author: 'bad_day', age: '45 min ago', score: -2, body: 'Took 6 hours. ticket fixed it but ruined night.' },
    ],
  }),
];

export function getForumPost(slug: string) {
  return forumPosts.find((p) => p.slug === slug);
}

export function getFeaturedForumPosts(limit = 3) {
  return [...forumPosts].sort((a, b) => b.upvotes - a.upvotes).slice(0, limit);
}
