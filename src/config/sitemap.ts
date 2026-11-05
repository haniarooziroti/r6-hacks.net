import type { SitemapItem } from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

function pathnameFromUrl(url: string): string {
  const p = new URL(url).pathname;
  return p.endsWith('/') ? p : `${p}/`;
}

function loadCheatsLastmods(): Map<string, string> {
  const map = new Map<string, string>();
  const dir = path.join(process.cwd(), 'src/content/blog');
  if (!fs.existsSync(dir)) return map;
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(dir, file), 'utf8');
    const { data } = matter(raw);
    const d = data.updatedDate ?? data.publishDate;
    if (d) map.set(`/cheats/${slug}/`, new Date(d).toISOString());
  }
  return map;
}

const cheatsLastmods = loadCheatsLastmods();

const STATIC_LASTMOD: Record<string, string> = {
  '/': '2026-10-15T00:00:00.000Z',
  '/about/': '2026-09-01T00:00:00.000Z',
  '/cheats/': '2026-10-15T00:00:00.000Z',
  '/reviews/': '2026-10-10T00:00:00.000Z',
  '/forums/': '2026-10-18T00:00:00.000Z',
  '/faq/': '2026-09-15T00:00:00.000Z',
  '/support/': '2026-09-01T00:00:00.000Z',
  '/privacy/': '2026-09-01T00:00:00.000Z',
  '/terms/': '2026-09-01T00:00:00.000Z',
  '/status/': '2026-10-20T00:00:00.000Z',
  '/products/rainbow-six-cheats/': '2026-10-12T00:00:00.000Z',
  '/products/rainbow-six-cheats/aimbot/': '2026-10-12T00:00:00.000Z',
  '/products/rainbow-six-cheats/esp/': '2026-10-12T00:00:00.000Z',
  '/products/rainbow-six-cheats/wallhack/': '2026-10-12T00:00:00.000Z',
  '/products/rainbow-six-cheats/gadget-esp/': '2026-10-12T00:00:00.000Z',
  '/products/rainbow-six-cheats/triggerbot/': '2026-10-12T00:00:00.000Z',
  '/products/rainbow-six-cheats/radar/': '2026-10-12T00:00:00.000Z',
  '/go/r6-siege/': '2026-10-15T00:00:00.000Z',
};

const buildDate = new Date().toISOString();

function lastmodForPath(path: string): string {
  return cheatsLastmods.get(path) ?? STATIC_LASTMOD[path] ?? buildDate;
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);

  if (
    path.includes('/404') ||
    (path.startsWith('/go/') && path !== '/go/r6-siege/') ||
    path.includes('/rss.xml')
  ) {
    return undefined;
  }

  if (path === '/go/r6-siege/') {
    item.priority = 0.6;
    item.changefreq = 'monthly';
    item.lastmod = lastmodForPath(path);
    return item;
  }

  item.lastmod = lastmodForPath(path);

  if (path === '/') {
    item.priority = 1;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/cheats/') {
    item.priority = 0.85;
    item.changefreq = 'weekly';
    return item;
  }

  if (path.startsWith('/cheats/')) {
    item.priority = 0.75;
    item.changefreq = 'monthly';
    return item;
  }

  if (path === '/reviews/') {
    item.priority = 0.85;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/forums/') {
    item.priority = 0.9;
    item.changefreq = 'daily';
    return item;
  }

  if (path.startsWith('/forums/')) {
    item.priority = 0.8;
    item.changefreq = 'weekly';
    return item;
  }

  if (path.startsWith('/products/')) {
    item.priority = 0.9;
    item.changefreq = 'weekly';
    return item;
  }

  item.priority = 0.5;
  item.changefreq = 'monthly';
  return item;
}
