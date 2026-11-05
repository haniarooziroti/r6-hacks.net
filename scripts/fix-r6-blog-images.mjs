import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('src/content/blog');
const map = {
  'r6-aimbot-setup.md': '/images/blog/r6-aimbot-setup.png',
  'r6-esp-setup.md': '/images/blog/r6-esp-setup.png',
  'r6-gadget-esp-guide.md': '/images/blog/r6-gadget-esp-guide.png',
  'r6-features.md': '/images/blog/r6-features-overview.png',
  'r6-buy-cheats.md': '/images/blog/r6-buy-cheats.png',
  'r6-patch-day.md': '/images/blog/r6-patch-day.png',
  'r6-loader-fix.md': '/images/blog/r6-loader-fix.png',
  'r6-cheat-risk.md': '/images/blog/r6-cheat-risk.png',
  'r6-triggerbot-guide.md': '/images/blog/r6-triggerbot-guide.png',
  'r6-requirements.md': '/images/blog/r6-requirements.png',
  'r6-plans.md': '/images/blog/r6-plans.png',
};

for (const [file, image] of Object.entries(map)) {
  const full = path.join(dir, file);
  if (!fs.existsSync(full)) continue;
  let text = fs.readFileSync(full, 'utf8');
  text = text.replace(/featuredImage: .+\n/, `featuredImage: ${image}\n`);
  text = text.replace(/r6-triggerbot(?!-guide)/g, 'r6-triggerbot-guide');
  fs.writeFileSync(full, text);
}

console.log('Updated blog featured images');
