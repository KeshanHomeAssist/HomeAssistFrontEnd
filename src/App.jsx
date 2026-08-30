import React from 'react';
import { Routes, Route, useNavigate, useLocation, useParams, Navigate } from 'react-router-dom';

import { Header, Footer, WRAP, LABEL, DISPLAY, BODY, SMALL, CH, wa } from './site/Chrome.jsx';
import { Button, Icon } from './ds';
import { HomePage } from './site/HomePage.jsx';
import { InsurersPage } from './site/InsurersPage.jsx';
// Gated pair, live again from 25 August 2026: one Cloudflare Access application
// per path, One-time PIN, so the Access log is the conversion record for the A/B.
// If either application is ever removed, comment these two imports AND the two
// <Route> lines below back out and set INCLUDE_GATED_PROPERTY_PAGES = false in
// src/seo.js. Dropping only the routes would leave the commercial copy inside
// the public JS bundle with nothing routing to it — the exact failure the old
// cosmetic email gate on /insurers had.
import { PropertyManagersPage } from './site/PropertyManagersPage.jsx';
import { ManagingAgentsPage } from './site/ManagingAgentsPage.jsx';
import { LeakDetectionPage } from './site/LeakDetectionPage.jsx';
import { GeyserReplacementsPage } from './site/GeyserReplacementsPage.jsx';
import { SmartHomesPage } from './site/SmartHomesPage.jsx';
import { JoinPage } from './site/JoinPage.jsx';
import { PortalPage } from './site/PortalPage.jsx';
import { AboutPage } from './site/AboutPage.jsx';
import { BlogPage, POSTS } from './site/BlogPage.jsx';
import { TermsPage, PrivacyPage, ComplaintsPage } from './site/LegalPage.jsx';
import { slugify, ROUTES, articleMeta } from './seo.js';
import { useAnalytics } from './analytics.js';

/**
 * The design prototype navigated with a `go('insurers')` callback against
 * component state, so the whole site lived at one URL. Every page keeps that
 * same `go` signature — this maps it onto real routes so pages did not have to
 * be rewritten.
 */
export const PAGE_PATHS = {
  home: '/',
  insurers: '/insurers',
  // A/B pair for the property-management audience. Same offer, same CTA; the
  // variable is the route in. See docs and src/seo.js — both are gated by
  // Cloudflare Access and marked noindex, and neither is in the nav: traffic
  // comes from outbound links so the Access log tells you which one converted.
  propertyManagers: '/property-managers',
  managingAgents: '/managing-agents',
  geyserReplacements: '/geyser-replacements',
  smartHomes: '/smart-homes',
  leakDetection: '/leak-detection',
  join: '/join',
  portal: '/portal',
  about: '/about',
  blog: '/blog',
  terms: '/terms',
  privacy: '/privacy-policy',
  complaints: '/complaints',
};

const PATH_PAGES = Object.fromEntries(
  Object.entries(PAGE_PATHS).map(([id, path]) => [path, id])
);

export const POST_SLUGS = POSTS.map(([, title]) => slugify(title));

/** Which nav item should show as active for the current URL. */
function activePage(pathname) {
  if (pathname.startsWith('/blog')) return 'blog';
  return PATH_PAGES[pathname] || null;
}

/**
 * Keeps <title> correct after client-side navigation.
 *
 * Every route is prerendered with its own <title>, which is what a crawler and a
 * first-time visitor see. But moving between pages in the router never touches
 * the document title, so anyone clicking through the site carried the title of
 * the page they arrived on — wrong in the browser tab, wrong in a bookmark, and
 * wrong in the page_title GA4 records for every page view after the first.
 *
 * The titles come from the same `ROUTES` table the prerender reads, so there is
 * one source of truth rather than two that drift.
 */
function useDocumentTitle(pathname) {
  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    let title = ROUTES[pathname]?.title;

    if (!title && pathname.startsWith('/blog/')) {
      const slug = pathname.slice('/blog/'.length);
      const post = POSTS.find((p) => slugify(p[1]) === slug);
      if (post) title = articleMeta(post).title;
    }

    if (title) document.title = title;
  }, [pathname]);
}

function useGo() {
  const navigate = useNavigate();
  return React.useCallback(
    (id) => {
      const path = PAGE_PATHS[id];
      if (!path) return;
      navigate(path);
      if (typeof window !== 'undefined') window.scrollTo(0, 0);
    },
    [navigate]
  );
}

function Blog() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const go = useGo();

  const index = slug ? POST_SLUGS.indexOf(slug) : -1;
  if (slug && index === -1) return <Navigate to="/blog" replace />;

  return (
    <BlogPage
      go={go}
      initialPost={index === -1 ? null : index}
      onSelectPost={(i) => {
        navigate(`/blog/${POST_SLUGS[i]}`);
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
      }}
      onBack={() => {
        navigate('/blog');
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
      }}
    />
  );
}

/**
 * Two 404 pages, alternating.
 *
 * A 404 is the one page nobody designs and everybody eventually sees. These two
 * carry an illustration and their own apology, and both route the visitor
 * somewhere useful rather than leaving them at a dead end: the home page, or the
 * contact block on /about.
 *
 * WHY THE VARIANT IS PICKED IN AN EFFECT AND NOT AT RENDER TIME: the site is
 * prerendered to static HTML and then hydrated. Choosing randomly during render
 * would make the server pick one variant and the browser pick another, which is
 * a hydration mismatch. So the prerendered 404.html always contains the first
 * variant, and the second is swapped in after mount on roughly half of loads.
 */
const NOT_FOUND_VARIANTS = [
  {
    image: '/assets/illustrations/error-burst-pipe.jpg',
    alt: 'A cutaway of a burst water pipe under a paved driveway, spraying water into the soil',
    heading: 'Sorry — this one got away from us.',
    body:
      'The page you were looking for has moved or no longer exists. If you came here for help with a burst pipe, a geyser or a leak, that we can still sort out.',
  },
  {
    image: '/assets/illustrations/error-flooded-house.jpg',
    alt: 'A house with a rooftop solar geyser standing in flood water, with a toolbox floating past',
    heading: 'Sorry, this page is under water.',
    body:
      'It has moved or been taken down. If something at your property is genuinely under water, do not wait on this page — message us and we will get somebody out to you.',
  },
];

/** Simple, on-brand 404 rather than the host's default Apache page. */
function NotFound() {
  const go = useGo();
  const [variant, setVariant] = React.useState(0);

  React.useEffect(() => {
    setVariant(Math.random() < 0.5 ? 0 : 1);
  }, []);

  const v = NOT_FOUND_VARIANTS[variant];

  return (
    <main>
      <div
        style={{
          ...WRAP,
          padding: '72px 40px 96px',
          display: 'grid',
          gridTemplateColumns: '1fr 420px',
          gap: 56,
          alignItems: 'center',
        }}
      >
        <div data-hero-text>
          <div style={{ ...LABEL, marginBottom: 12 }}>Error 404</div>
          <h1 style={{ ...DISPLAY, margin: '0 0 16px' }}>{v.heading}</h1>
          <p style={{ ...BODY, fontSize: 17, maxWidth: '58ch', marginBottom: 28 }}>{v.body}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button
              as="a"
              size="lg"
              variant="navy"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                go('home');
              }}
            >
              Go to the home page
            </Button>
            <Button
              as="a"
              size="lg"
              variant="secondary"
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                go('about');
              }}
            >
              Contact us
            </Button>
          </div>
          <p style={{ ...SMALL, marginTop: 20 }}>
            Urgent? WhatsApp{' '}
            <a href={wa('Hi Home Assist, ')} target="_blank" rel="noopener" style={{ color: 'var(--web-blue)', fontWeight: 600 }}>
              {CH.waHome}
            </a>{' '}
            — answered 24 hours a day.
          </p>
        </div>
        <div
          style={{
            border: '1px solid var(--web-grey-100)',
            borderRadius: 4,
            overflow: 'hidden',
            lineHeight: 0,
            boxShadow: 'var(--web-shadow-card)',
          }}
        >
          <img src={v.image} alt={v.alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </main>
  );
}

export default function App() {
  const location = useLocation();
  const go = useGo();
  const page = activePage(location.pathname);

  // Fix the tab title before the page view is sent, so page_title is right.
  useDocumentTitle(location.pathname);

  // GA4: one page_view per route, and an event for every outbound CTA click.
  useAnalytics(React, location.pathname);

  return (
    <>
      <Header page={page} go={go} />
      <Routes>
        <Route path="/" element={<HomePage go={go} />} />
        <Route path="/insurers" element={<InsurersPage go={go} />} />
        {/* Gated pair — see the note beside the imports above. */}
        <Route path="/property-managers" element={<PropertyManagersPage go={go} />} />
        <Route path="/managing-agents" element={<ManagingAgentsPage go={go} />} />
        <Route path="/geyser-replacements" element={<GeyserReplacementsPage go={go} />} />
        <Route path="/smart-homes" element={<SmartHomesPage go={go} />} />
        <Route path="/leak-detection" element={<LeakDetectionPage go={go} />} />
        <Route path="/join" element={<JoinPage go={go} />} />
        <Route path="/portal" element={<PortalPage go={go} />} />
        <Route path="/about" element={<AboutPage go={go} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/terms" element={<TermsPage go={go} />} />
        <Route path="/privacy-policy" element={<PrivacyPage go={go} />} />
        <Route path="/complaints" element={<ComplaintsPage go={go} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer go={go} />
    </>
  );
}
