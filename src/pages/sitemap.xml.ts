import type { APIRoute } from 'astro';
import { nearbyPlaces } from '@/data/nearby';
import { guides } from '@/data/guides';

const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/best-time/', priority: '0.8', changefreq: 'monthly' },
  { path: '/transportation/', priority: '0.8', changefreq: 'monthly' },
  { path: '/photo-spots/', priority: '0.7', changefreq: 'monthly' },
  { path: '/nearby/', priority: '0.8', changefreq: 'monthly' },
  { path: '/guides/', priority: '0.8', changefreq: 'monthly' },
  ...guides.map((guide) => ({ path: `/guides/${guide.slug}/`, priority: '0.7', changefreq: 'monthly' })),
  ...nearbyPlaces.map((place) => ({ path: `/nearby/${place.slug}/`, priority: '0.7', changefreq: 'monthly' })),
  { path: '/privacy/', priority: '0.2', changefreq: 'yearly' },
  { path: '/sources/', priority: '0.3', changefreq: 'monthly' },
  { path: '/privacy-policy/', priority: '0.2', changefreq: 'yearly' },
  { path: '/terms-of-service/', priority: '0.2', changefreq: 'yearly' },
  { path: '/cookie-settings/', priority: '0.2', changefreq: 'yearly' },
];

export const GET: APIRoute = () => {
  const urls = pages
    .map(
      ({ path, priority, changefreq }) => `  <url>
    <loc>https://sanqimeijing.com${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
