import type { MetadataRoute } from 'next';

const BASE_URL = 'https://groeimaten.com';

const STATIC_PAGES = [
  { path: '/', priority: 1.0, changeFreq: 'weekly' },
  { path: '/diensten', priority: 0.9, changeFreq: 'monthly' },
  { path: '/cases', priority: 0.8, changeFreq: 'monthly' },
  { path: '/over-ons', priority: 0.7, changeFreq: 'monthly' },
  { path: '/contact', priority: 0.8, changeFreq: 'monthly' },
  { path: '/prijzen', priority: 0.8, changeFreq: 'monthly' },
  { path: '/afspraak', priority: 0.9, changeFreq: 'monthly' },
  { path: '/privacy', priority: 0.3, changeFreq: 'yearly' },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return STATIC_PAGES.map(({ path, priority, changeFreq }) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: changeFreq as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority,
  }));
}
