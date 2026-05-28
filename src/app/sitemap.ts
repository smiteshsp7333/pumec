import { MetadataRoute } from 'next';

const BASE_URL = 'https://pumec.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Core Pages ────────────────────────────────────────────────────────────
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/careers`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/insights`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },

    // ── Services Pages (high SEO priority) ────────────────────────────────────
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/india-entry`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/services/international-tax`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE_URL}/services/transfer-pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE_URL}/services/fema-advisory`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE_URL}/services/transaction-advisory`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/corporate-transaction`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/services/litigation-dispute`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },

    // ── About Sub-pages ───────────────────────────────────────────────────────
    { url: `${BASE_URL}/about/our-team`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about/mission-vision`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/about/core-values`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // ── Legal & Policy Pages ──────────────────────────────────────────────────
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms-of-use`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/cookie-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/code-of-ethics`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE_URL}/risk-compliance`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ];
}
