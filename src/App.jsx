import React from 'react';
import { Routes, Route, useNavigate, useLocation, useParams, Navigate } from 'react-router-dom';

import { Header, Footer } from './site/Chrome.jsx';
import { HomePage } from './site/HomePage.jsx';
import { InsurersPage } from './site/InsurersPage.jsx';
import { PropertyManagersPage } from './site/PropertyManagersPage.jsx';
import { ManagingAgentsPage } from './site/ManagingAgentsPage.jsx';
import { JoinPage } from './site/JoinPage.jsx';
import { PortalPage } from './site/PortalPage.jsx';
import { AboutPage } from './site/AboutPage.jsx';
import { BlogPage, POSTS } from './site/BlogPage.jsx';
import { TermsPage, PrivacyPage } from './site/LegalPage.jsx';
import { slugify } from './seo.js';

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
  join: '/join',
  portal: '/portal',
  about: '/about',
  blog: '/blog',
  terms: '/terms',
  privacy: '/privacy-policy',
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

/** Simple, on-brand 404 rather than the host's default Apache page. */
function NotFound() {
  const go = useGo();
  return (
    <main>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '96px 40px 120px' }}>
        <div
          style={{
            font: '700 var(--web-size-label)/1 var(--font-core)',
            letterSpacing: 'var(--web-label-tracking)',
            textTransform: 'uppercase',
            color: 'var(--web-navy)',
            marginBottom: 12,
          }}
        >
          Error 404
        </div>
        <h1 style={{ font: '700 34px/1.15 var(--font-core)', color: 'var(--web-navy)', margin: '0 0 16px' }}>
          That page has moved or no longer exists.
        </h1>
        <p style={{ font: '400 17px/1.6 var(--font-core)', color: 'var(--web-grey-700)', maxWidth: '62ch' }}>
          If you were looking for help with a burst geyser, a leak or a claim, start from the home page or
          message us on WhatsApp and someone will pick it up.
        </p>
        <p style={{ marginTop: 28 }}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              go('home');
            }}
            style={{ font: '600 17px/1 var(--font-core)', color: 'var(--web-blue)' }}
          >
            Go to the home page →
          </a>
        </p>
      </div>
    </main>
  );
}

export default function App() {
  const location = useLocation();
  const go = useGo();
  const page = activePage(location.pathname);

  return (
    <>
      <Header page={page} go={go} />
      <Routes>
        <Route path="/" element={<HomePage go={go} />} />
        <Route path="/insurers" element={<InsurersPage go={go} />} />
        <Route path="/property-managers" element={<PropertyManagersPage go={go} />} />
        <Route path="/managing-agents" element={<ManagingAgentsPage go={go} />} />
        <Route path="/join" element={<JoinPage go={go} />} />
        <Route path="/portal" element={<PortalPage go={go} />} />
        <Route path="/about" element={<AboutPage go={go} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/terms" element={<TermsPage go={go} />} />
        <Route path="/privacy-policy" element={<PrivacyPage go={go} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer go={go} />
    </>
  );
}
