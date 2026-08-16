/**
 * Per-route <head> metadata and JSON-LD.
 *
 * The design prototype printed the intended title tag and schema types in a
 * debug strip at the bottom of the screen. Search engines never saw them. This
 * turns that intent into real metadata, injected at prerender time so it is in
 * the HTML the crawler receives — not added by JavaScript after load.
 */

export const SITE_URL = 'https://www.homeassist.co.za';

export const ORG = {
  name: 'Home Assist Technologies (Pty) Ltd',
  shortName: 'Home Assist',
  phone: '+27870955231',
  email: 'help@homeassist.co.za',
  street: '12 Uitvlugt Road',
  suburb: 'Pinelands',
  city: 'Cape Town',
  postalCode: '7405',
  region: 'Western Cape',
  country: 'ZA',
  logo: `${SITE_URL}/assets/logo/homeassist-logo-horizontal.png`,
};

/** Turns a post title into a stable, readable URL segment. */
export function slugify(title) {
  const full = String(title)
    .toLowerCase()
    .replace(/[‘’']/g, '')          // curly and straight apostrophes
    .replace(/[–—]/g, '-')          // en/em dashes
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  if (full.length <= 70) return full;
  // Trim at a word boundary rather than mid-word, so the URL still reads.
  const cut = full.slice(0, 70);
  return cut.slice(0, cut.lastIndexOf('-')).replace(/-+$/, '');
}

const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: ORG.name,
  alternateName: ORG.shortName,
  url: SITE_URL,
  logo: ORG.logo,
  telephone: ORG.phone,
  email: ORG.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: ORG.street,
    addressLocality: `${ORG.suburb}, ${ORG.city}`,
    postalCode: ORG.postalCode,
    addressRegion: ORG.region,
    addressCountry: ORG.country,
  },
};

const localBusiness = {
  ...organization,
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  areaServed: { '@type': 'Country', name: 'South Africa' },
  priceRange: 'ZAR',
};

/**
 * Static routes. `title` and `description` go straight into <head>;
 * `schema` is emitted as one application/ld+json block per route.
 */
export const ROUTES = {
  '/': {
    title: 'Burst Geyser Replacement, Leak Detection & Plumbers | Home Assist South Africa',
    description:
      'Burst geyser replacement, leak detection, plumbing and electrical work across South Africa. Vetted, PIRB-qualified technicians and a certificate of compliance on every job.',
    schema: [localBusiness],
  },
  '/insurers': {
    title: 'Property Claims Management for Insurers, UMAs and Brokers | Home Assist',
    description:
      'Turnkey property claims management for South African insurers, UMAs and brokers. Surge FNOL capacity, incident verification, pro-forma costing and COC collection — built to bring the loss ratio down.',
    schema: [
      organization,
      {
        '@type': 'Service',
        name: 'Property claims management',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: { '@type': 'Country', name: 'South Africa' },
        serviceType: 'Insurance claims administration and incident verification',
      },
    ],
  },
  '/join': {
    title: 'Become a Home Assist Service Provider | Plumbers, Electricians & Contractors',
    description:
      'Join the Home Assist contractor network. Consistent work, clear payment terms and one job app. Open to qualified plumbers, electricians, roofers and building contractors in South Africa.',
    schema: [organization],
  },
  '/portal': {
    title: 'Home Assist Portal | Claims and Job Management',
    description:
      'Log in to the Home Assist portal to track claims, manage jobs and upload compliance documents.',
    schema: [organization],
    noindex: true, // a login door, not a landing page — keep it out of the index
  },
  '/about': {
    title: 'About Home Assist | Contact Our Cape Town Team',
    description:
      'Home Assist Technologies manages property incidents for South African insurers and homeowners from Pinelands, Cape Town. Over 40,000 property incidents handled in five years.',
    schema: [
      localBusiness,
      {
        '@type': 'ContactPoint',
        telephone: ORG.phone,
        email: ORG.email,
        contactType: 'customer service',
        areaServed: 'ZA',
        availableLanguage: ['en'],
      },
    ],
  },
  '/blog': {
    title: 'Home Assist Blog | Geysers, Leaks, Electrical and Insurance Claims',
    description:
      'Practical guidance on burst geysers, hidden leaks, certificates of compliance and insurance claims in South Africa, from the Home Assist team.',
    schema: [{ '@type': 'Blog', '@id': `${SITE_URL}/blog#blog`, name: 'Home Assist Blog', publisher: { '@id': `${SITE_URL}/#organization` } }],
  },
  '/terms': {
    title: 'General Terms of Use | Home Assist Technologies',
    description: 'The general terms of use governing the Home Assist website and services.',
    schema: [organization],
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Home Assist Technologies',
    description:
      'How Home Assist Technologies collects, uses and protects personal information, in line with POPIA.',
    schema: [organization],
  },
};

/**
 * True when a post has no article body yet — the design export ships most of
 * them as stubs whose page reads "The rest of this article is to be written".
 * Those get noindex and stay out of the sitemap: a handful of near-identical
 * thin pages is worse than no pages at all, and they are hard to shake off
 * once Google has them.
 */
export function isStub(post) {
  const [, , , , , , , body] = post;
  // A photo gallery is not an article body — the warranty post has eight serial
  // plates and still no written copy, and it would sail through a check that
  // counted images as content.
  return !(body && body.length);
}

/** Builds the head metadata for a single blog article. */
export function articleMeta(post) {
  const [cat, title, excerpt, date, read, img, , , , youtube] = post;
  const slug = slugify(title);
  const image = youtube
    ? `https://img.youtube.com/vi/${youtube}/maxresdefault.jpg`
    : img
      ? `${SITE_URL}/assets/illustrations/${img}`
      : ORG.logo;

  return {
    title: `${title} | Home Assist`,
    description: excerpt,
    image,
    noindex: isStub(post),
    schema: [
      {
        '@type': 'Article',
        headline: title,
        description: excerpt,
        image,
        articleSection: cat,
        datePublished: isoDate(date),
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
      },
      organization,
    ],
  };
}

const MONTHS = {
  january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
  july: '07', august: '08', september: '09', october: '10', november: '11', december: '12',
};

/** "17 August 2026" -> "2026-08-17". Returns undefined if it can't parse. */
function isoDate(human) {
  const m = String(human).trim().match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
  if (!m) return undefined;
  const month = MONTHS[m[2].toLowerCase()];
  if (!month) return undefined;
  return `${m[3]}-${month}-${m[1].padStart(2, '0')}`;
}

/** Wraps schema nodes in a single @graph document. */
export function jsonLd(nodes) {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }, null, 0);
}
