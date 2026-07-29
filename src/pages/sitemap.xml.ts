import type { APIRoute } from 'astro';

const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/privacy/', priority: '0.2', changefreq: 'yearly' },
];

export const GET: APIRoute = () => {
  const urls = pages
    .map(
      ({ path, priority, changefreq }) => `  <url>
    <loc>https://SanqiMeijing.com${path}</loc>
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
