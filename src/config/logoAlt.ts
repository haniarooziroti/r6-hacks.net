import { normalizeSeoPath } from './pageSeo';
import { getForumThreadSeo } from './forumsSeo';
import { getBlogPostSeo } from './blogSeo';

const LOGO_ALT_BY_PATH: Record<string, string> = {
  '/': 'R6 hacks home – site logo',
  '/cheats/': 'R6 cheat guides – site logo',
  '/forums/': 'R6 Siege forum – site logo',
  '/reviews/': 'R6 cheat reviews – site logo',
  '/faq/': 'Rainbow Six Siege FAQ – site logo',
  '/support/': 'R6 cheats support – site logo',
  '/products/rainbow-six-cheats/': 'Rainbow Six Siege cheat modules – site logo',
  '/privacy/': 'R6hacks privacy policy – site logo',
  '/about/': 'About R6hacks Net – site logo',
  '/terms/': 'R6hacks terms – site logo',
  '/go/r6-siege/': 'R6 secure checkout – site logo',
  '/status/': 'R6 module status – site logo',
};

export function resolveLogoAlt(pathname: string): string {
  const path = normalizeSeoPath(pathname);
  if (path.startsWith('/forums/') && path !== '/forums/') {
    const slug = path.replace(/^\/forums\//, '').replace(/\/$/, '');
    return getForumThreadSeo(slug)?.logoAlt ?? 'R6 forum thread – site logo';
  }
  if (path.startsWith('/cheats/') && path !== '/cheats/') {
    const slug = path.replace(/^\/cheats\//, '').replace(/\/$/, '');
    return getBlogPostSeo(slug)?.logoAlt ?? 'R6 setup guide – site logo';
  }
  if (path.startsWith('/products/rainbow-six-cheats/') && path !== '/products/rainbow-six-cheats/') {
    const slug = path.replace(/^\/products\/rainbow-six-cheats\//, '').replace(/\/$/, '');
    const labels: Record<string, string> = {
      aimbot: 'R6 aimbot module – site logo',
      esp: 'R6 ESP and wallhack – site logo',
      triggerbot: 'R6 triggerbot module – site logo',
      radar: 'R6 2D radar – site logo',
      'gadget-esp': 'R6 gadget ESP – site logo',
    };
    return labels[slug] ?? 'R6 cheat module – site logo';
  }
  return LOGO_ALT_BY_PATH[path] ?? 'R6 Siege Cheats – site logo';
}
