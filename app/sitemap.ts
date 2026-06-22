import type { MetadataRoute } from 'next';

const BASE_URL = 'https://groeimaten.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/diensten`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/cases`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/over-ons`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/prijzen`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/afspraak`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/blog/seo-voor-keukenstudio`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/leads-genereren-bouwsector`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/meer-klanten-aannemer`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/google-ads-badkamerbedrijf`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/lokale-vindbaarheid-installateurs`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/digital-marketing-bureau-keuken-badkamer`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/website-laten-maken-keukenbedrijf`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/seo-voor-aannemers`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/online-marketing-badkamerbedrijf`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/leadgeneratie-keukenbranche`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/keukenstudio-marketing`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/badkamerbedrijf-seo`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/aannemer-google-ads`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/installateur-website`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/leads-genereren-bouw`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/marketingbureau-bouwsector`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/keukenbedrijf-google-ads`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/meer-showroomafspraken`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/meta-ads-badkamerbedrijven`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/tegelzettersbedrijf-marketing`, changeFrequency: 'monthly', priority: 0.85 },
  ];
}
