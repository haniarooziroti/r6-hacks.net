import type { APIRoute } from 'astro';
import { getSiteOrigin } from '../config/seo';

export const GET: APIRoute = () => {
  const sitemap = `${getSiteOrigin()}/sitemap.xml`;
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
