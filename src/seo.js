/**
 * Per-route <head> metadata and JSON-LD.
 *
 * The design prototype printed the intended title tag and schema types in a
 * debug strip at the bottom of the screen. Search engines never saw them. This
 * turns that intent into real metadata, injected at prerender time so it is in
 * the HTML the crawler receives — not added by JavaScript after load.
 */

export const SITE_URL = 'https://www.homeassist.co.za';

/**
 * The /property-managers and /managing-agents pair ships only once a Cloudflare
 * Access application exists in front of each path. Until then it is held out of
 * the build entirely: prerendered HTML, metadata and sitemap all key off this
 * flag. See docs/CUTOVER.md — the routes and imports in src/App.jsx have to be
 * uncommented at the same time, or the page copy travels inside the public JS
 * bundle even though nothing routes to it.
 */
export const INCLUDE_GATED_PROPERTY_PAGES = true;

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
const GATED_PROPERTY_ROUTES = {
  /* A/B pair for managing agents, body corporates and HOAs. Same offer and CTA
     on both; the variable is the proposition — /property-managers leads with the
     insurer mandate, /managing-agents leads with portfolio economics.

     Decided 25 August 2026: public and indexable, NOT behind Cloudflare Access.
     Neither page carries a fee band or names an insurer, so gating them was a
     lead-capture decision rather than a confidentiality one, and it cost the
     search visibility of the terms managing agents actually search for.

     Attribution without the Access log: the two WhatsApp CTAs prefill different
     opening lines — "I manage property" against "I manage a portfolio of
     schemes" — so an enquiry still says which page produced it. The calendar
     button is identical on both, so bookings cannot be attributed. Keep the
     WhatsApp wording distinct or the test loses its only measure. */
  '/property-managers': {
    title: 'Body Corporate Claims Oversight | Home Assist',
    description:
      'Insurer-backed verification of every incident, invoice and certificate on the schemes you manage — without replacing your existing providers. Free 90-day pilot.',
    schema: [
      organization,
      {
        '@type': 'Service',
        name: 'Body corporate claims and utility oversight',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: { '@type': 'Country', name: 'South Africa' },
        serviceType: 'Incident verification, claims administration and utility management for sectional title schemes',
      },
    ],
  },
  '/managing-agents': {
    title: 'Managing Agent Claims Oversight | Home Assist',
    description:
      'One route for incidents, claims and utilities across every scheme you manage. Every invoice verified against a pro-forma, every approval recorded.',
    schema: [
      organization,
      {
        '@type': 'Service',
        name: 'Portfolio claims and utility oversight for managing agents',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: { '@type': 'Country', name: 'South Africa' },
        serviceType: 'Incident verification, claims administration and utility management for sectional title schemes',
      },
    ],
  },
};

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
    // Behind Cloudflare Access — Googlebot cannot answer a one-time PIN, so the
    // page is unreachable to crawlers. Keeping it in the sitemap would just
    // report a soft error in Search Console. Remove this if the page is split
    // into a public overview plus a gated commercial section.
    noindex: true,
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
  ...(INCLUDE_GATED_PROPERTY_PAGES ? GATED_PROPERTY_ROUTES : {}),
  '/geyser-replacements': {
    title: 'Geyser Replacement South Africa | Home Assist',
    description:
      'Burst or failed geyser? Build your replacement spec in six questions. Free warranty check on your existing unit, and a certificate of compliance on every job.',
    schema: [
      organization,
      {
        '@type': 'Service',
        name: 'Geyser replacement and installation',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: { '@type': 'Country', name: 'South Africa' },
        serviceType:
          'Electric, solar, heat pump and gas geyser replacement, installation and certificate of compliance',
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/geyser-replacements#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How long does a geyser replacement take?',
            acceptedAnswer: { '@type': 'Answer', text: 'A standard replacement is normally done in one visit of about three to four hours, and can often be done the same day. What turns one visit into two is arriving without the right cylinder or without access, so establishing the system type, the position and the access up front is what makes same-day replacement possible.' },
          },
          {
            '@type': 'Question',
            name: 'Is my geyser still under warranty?',
            acceptedAnswer: { '@type': 'Answer', text: 'Most geysers carry a five-year manufacturer warranty, and a unit still inside it may be repaired or replaced by the manufacturer at no cost. Send Home Assist a photograph of the plate on the side of the cylinder and we decode the manufacturer and date code and tell you, at no charge.' },
          },
          {
            '@type': 'Question',
            name: 'What is a certificate of compliance and do I need one for a geyser?',
            acceptedAnswer: { '@type': 'Answer', text: 'It is the document a registered plumber issues on completion, confirming the installation meets the national standard. Your insurer can ask for it when you claim, and without one you have no evidence the work was done properly. Home Assist issues and logs a PIRB certificate of compliance on every geyser installation.' },
          },
          {
            '@type': 'Question',
            name: 'What size geyser do I need?',
            acceptedAnswer: { '@type': 'Answer', text: 'The standard allowance is roughly 35 to 50 litres of hot water per person, though household habits matter more than the arithmetic. If everyone showers at the same time, size up. Around 70% of the South African market runs a 150 litre cylinder.' },
          },
          {
            '@type': 'Question',
            name: 'Why does the warranty matter more than the price of the geyser?',
            acceptedAnswer: { '@type': 'Answer', text: 'A five-year warranty is only worth what the manufacturer will honour. The most common reason a geyser warranty is voided is that the original installer did not install the cylinder to the manufacturer\'s diagram and to the national standard, so the homeowner buys a second geyser before the first one\'s warranty has expired.' },
          },
        ],
      },
    ],
  },
  '/smart-homes': {
    title: 'Smart Geyser Control & Solar Water Heating | Home Assist',
    description:
      'Geyser scheduling, leak detection and direct solar PV water heating. The Kwikot Elon 100, Plentify HotBot and a DB board breaker, compared honestly.',
    schema: [
      organization,
      {
        '@type': 'Service',
        name: 'Smart geyser control and solar water heating',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: { '@type': 'Country', name: 'South Africa' },
        serviceType:
          'Geyser scheduling, monitoring and direct photovoltaic water heating installation',
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/smart-homes#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Which smart geyser control should I buy?',
            acceptedAnswer: { '@type': 'Answer', text: 'It depends what you are trying to fix. The Kwikot Elon 100 feeds DC straight from photovoltaic panels to the geyser element and takes water heating off the grid. The Plentify HotBot puts the element on a schedule, reads the cylinder temperature and detects leaks, from a phone. A distribution board breaker switches the supply on a schedule with a physical override. They solve different problems and are not three versions of the same product.' },
          },
          {
            '@type': 'Question',
            name: 'Does a geyser control device have to be installed at the geyser?',
            acceptedAnswer: { '@type': 'Answer', text: 'A device that reads the water temperature does, because that is where the sensor sits, and the electrical point must be within one metre of the cylinder. A supply-side controller sits at the distribution board instead. In every case a dedicated breaker on the distribution board must isolate the geyser completely.' },
          },
          {
            '@type': 'Question',
            name: 'Will a smart geyser controller void my manufacturer warranty?',
            acceptedAnswer: { '@type': 'Answer', text: 'Not if it is installed to the manufacturer\'s specification by a registered plumber and, where electrical work is involved, a qualified electrician. Installations that do not follow the manufacturer\'s diagram and the national standard are the most common reason a geyser warranty is voided.' },
          },
          {
            '@type': 'Question',
            name: 'How much can a smart geyser controller save?',
            acceptedAnswer: { '@type': 'Answer', text: 'Kwikot states water heating energy savings of 50 to 70% are common with the Elon 100, with payback in three to five years. Plentify states households using HotBot save on average R355 per month. Both are the manufacturers\' own published figures and depend on your tariff, your household\'s hot water habits and, for the Elon, on your roof and panel array.' },
          },
        ],
      },
    ],
  },
  '/leak-detection': {
    title: 'Leak Detection in South Africa | Home Assist',
    description:
      'Hidden water leaks found without breaking open walls, floors or paving. Thermal, tracer gas and acoustic detection, pinpointed to within about a metre.',
    schema: [
      organization,
      {
        '@type': 'Service',
        name: 'Water leak detection and burst pipe repair',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: { '@type': 'Country', name: 'South Africa' },
        serviceType: 'Non-invasive water leak detection, burst pipe repair and resultant damage repair',
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
  '/complaints': {
    title: 'Complaints Policy | Home Assist Technologies',
    description:
      'How to lodge a complaint with Home Assist, what happens next, the PIRB independent audit route for compliance disputes, and the one-year workmanship warranty process.',
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
