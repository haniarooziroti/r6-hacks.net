import { normalizeSeoPath } from './pageSeo';
import { getForumThreadSeo } from './forumsSeo';
import { getBlogPostSeo } from './blogSeo';

const LOGO_ALT_BY_PATH: Record<string, string> = {
  '/': 'Aimbot – logo',
  '/cheats/': 'Blog – Aimbot – logo',
  '/forums/': 'R6 community forum – logo',
  '/reviews/': 'Reviews – Aimbot – logo',
  '/faq/': 'Faq – Aimbot – logo',
  '/support/': 'Support – Aimbot – logo',
  '/products/rainbow-six-cheats/': 'Cheats – Aimbot – logo',
  '/privacy/': 'Privacy – Aimbot – logo',
  '/about/': 'Forum – Aimbot – logo',
  '/terms/': 'Terms – Aimbot – logo',
  '/go/r6-siege/': 'Checkout – Aimbot – logo',
};

export function resolveLogoAlt(pathname: string): string {
  const path = normalizeSeoPath(pathname);
  if (path.startsWith('/forums/') && path !== '/forums/') {
    const slug = path.replace(/^\/forums\//, '').replace(/\/$/, '');
    return getForumThreadSeo(slug)?.logoAlt ?? 'Aimbot – logo';
  }
  if (path.startsWith('/cheats/') && path !== '/cheats/') {
    const slug = path.replace(/^\/cheats\//, '').replace(/\/$/, '');
    return getBlogPostSeo(slug)?.logoAlt ?? 'Aimbot – logo';
  }
  return LOGO_ALT_BY_PATH[path] ?? 'Aimbot – logo';
}
