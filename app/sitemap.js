import { SITE } from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap() {
  return ['', 'about/', 'services/', 'gallery/', 'contact/'].map((p, i) => ({ url: `${SITE.url}/${p}`, lastModified: new Date(), changeFrequency: 'monthly', priority: i === 0 ? 1 : 0.8 }));
}
