import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const skipDirs = new Set(['node_modules', 'dist', '.git', '.astro']);
const exts = new Set(['.ts', '.tsx', '.astro', '.mjs', '.md', '.css', '.json', '.txt']);

const replacements = [
  [/https:\/\/mw4cheat\.org/g, 'https://r6hacks.net'],
  [/mw4cheat\.org/g, 'r6hacks.net'],
  [/\/products\/mw4-cheats\//g, '/products/rainbow-six-cheats/'],
  [/products\/mw4-cheats/g, 'products/rainbow-six-cheats'],
  [/\/go\/mw4\//g, '/go/r6-siege/'],
  [/\/go\/mw4/g, '/go/r6-siege'],
  [/\/forum\//g, '/forums/'],
  [/\/forum\b/g, '/forums'],
  [/\/blog\//g, '/cheats/'],
  [/\/blog\b/g, '/cheats'],
  [/MW4 Cheat/g, 'R6 Siege Cheats'],
  [/Modern Warfare 4/g, 'Rainbow Six Siege'],
  [/\bMW4\b/g, 'R6'],
  [/checkoutPath\('mw4'\)/g, "checkoutPath('r6')"],
  [/CheckoutProduct = 'mw4'/g, "CheckoutProduct = 'r6'"],
  [/dmz-loot/g, 'gadget-esp'],
  [/DMZ loot/g, 'Gadget ESP'],
  [/Hajin DMZ/g, 'Gadget ESP'],
  [/\bundetected\b/gi, 'private'],
  [/Undetected/g, 'Updated'],
];

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (skipDirs.has(name)) continue;
      walk(full, files);
    } else if (exts.has(path.extname(name))) {
      files.push(full);
    }
  }
  return files;
}

let changed = 0;
for (const file of walk(root)) {
  if (file.includes(`${path.sep}scripts${path.sep}bulk-r6-replace.mjs`)) continue;
  let text = fs.readFileSync(file, 'utf8');
  let next = text;
  for (const [re, rep] of replacements) next = next.replace(re, rep);
  if (next !== text) {
    fs.writeFileSync(file, next);
    changed++;
  }
}
console.log(`Updated ${changed} files`);
