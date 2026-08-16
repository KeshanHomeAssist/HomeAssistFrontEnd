const PAGES = { home: HomePage, insurers: InsurersPage, join: JoinPage, portal: PortalPage, about: AboutPage, blog: BlogPage, terms: TermsPage, privacy: PrivacyPage };
const META = {
  home: ['Burst Geyser Replacement, Leak Detection & Plumbers | Home Assist South Africa', 'LocalBusiness · Service · FAQPage'],
  insurers: ['Property Claims Management for Insurers, UMAs and Brokers | Home Assist', 'Organization · Service'],
  join: ['Become a Home Assist Service Provider | Plumbers, Electricians & Contractors', 'Organization · WebPage'],
  portal: ['Home Assist Portal | Claims and Job Management', 'WebPage'],
  about: ['About Home Assist | Contact Our Cape Town Team', 'Organization · ContactPoint · LocalBusiness'],
  blog: ['Home Assist Blog | Geysers, Leaks, Electrical and Insurance Claims', 'Blog · Article'],
  terms: ['General Terms of Use | Home Assist Technologies', 'WebPage · TermsOfService'],
  privacy: ['Privacy Policy | Home Assist Technologies', 'WebPage · PrivacyPolicy']
};

function SiteApp() {
  const [page, setPage] = React.useState('home');
  const go = id => { setPage(id); window.scrollTo(0, 0); };
  const Page = PAGES[page];
  return <React.Fragment>
    <Header page={page} go={go} />
    <Page go={go} />
    <Footer go={go} />
    <div style={{ background: 'var(--web-navy-900)' }}>
      <div style={{ ...WRAP, padding: '14px 40px', display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'baseline' }}>
        <span style={{ ...LABEL, color: 'var(--web-blue-300)' }}>Title tag</span>
        <span style={{ ...SMALL, color: 'rgba(255,255,255,.7)' }}>{META[page][0]}</span>
        <span style={{ ...LABEL, color: 'var(--web-blue-300)', marginLeft: 'auto' }}>JSON-LD</span>
        <span style={{ ...SMALL, color: 'rgba(255,255,255,.7)' }}>{META[page][1]}</span>
      </div>
    </div>
  </React.Fragment>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<SiteApp />);
