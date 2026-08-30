const { Button, Icon, Card } = window.HomeAssistDesignSystem_cf0a2b;

const CH = {
  waHome: '+27 71 526 2554', waHomeDigits: '27715262554',
  phone: '087 095 5231', phoneTel: '+27870955231',
  help: 'help@homeassist.co.za',
  waBiz: '082 572 8220', waBizDigits: '27825728220',
  biz: 'keshan@homeassist.co.za',
  address: '12 Uitvlugt Road, Pinelands, Cape Town, South Africa, 7405',
  portal: 'https://portal.homeassist.co.za/',
  register: 'https://portal.homeassist.co.za/Account/Register',
  booking: 'https://calendar.app.google/9QkhMLKCyLuHyp696',
  complaints: 'complaints@homeassist.co.za',
  rating: 'https://portal.homeassist.co.za/rating',
  leonie: 'leonie@homeassist.co.za',
  vimla: 'vimla@homeassist.co.za'
};
const wa = (msg, biz) => `https://wa.me/${biz ? CH.waBizDigits : CH.waHomeDigits}?text=${encodeURIComponent(msg)}`;

const mailtoLink = (to, subject) => 'mailto:' + to + '?subject=' + encodeURIComponent(subject);

/* FORM DELIVERY — WhatsApp handoff.

   This is a static site with no server, so a form has nowhere to post to.
   The obvious fallback, a mailto: link, was tested and silently did nothing:
   the page reported success and the enquiry vanished. A form that loses work
   while telling the customer it worked is worse than no form at all.

   So a submitted form composes a WhatsApp message containing every answer and
   opens it. Home Assist already answers WhatsApp 24/7 and the whole site points
   people there, so this lands the enquiry in the channel that is actually
   staffed — on any device, with nothing to configure.

   To add email delivery later, POST the same answers to a form service
   (Web3Forms or similar) inside whatsappHandoff and keep the WhatsApp open as
   the visible confirmation. */

/* Reads a form's answers using the visible field labels, so the message that
   arrives reads the way the page does. */
function formAnswers(form) {
  const out = [];
  const radioSeen = new Set();
  form.querySelectorAll('input, select, textarea').forEach(el => {
    if (el.type === 'submit' || el.type === 'button' || el.type === 'file') return;
    const wrap = el.closest('label');
    const wrapText = wrap ? wrap.textContent.trim() : '';

    if (el.type === 'radio') {
      if (!el.checked) return;
      const group = el.getAttribute('name') || 'Choice';
      if (radioSeen.has(group)) return;
      radioSeen.add(group);
      out.push([group, wrapText]);
      return;
    }
    if (el.type === 'checkbox') {
      if (!el.checked) return;
      out.push([wrapText.slice(0, 90) || 'Consent', 'Yes']);
      return;
    }
    const span = wrap ? wrap.querySelector('span') : null;
    const label = span ? span.textContent.trim() : (el.getAttribute('placeholder') || 'Field');
    if (el.value) out.push([label, el.value]);
  });
  return out;
}

/* Opens WhatsApp with the form's answers as the message body. Returns the URL
   so the page can offer a manual link if the browser blocked the new tab. */
function whatsappHandoff(form, { biz = false, intro }) {
  const answers = formAnswers(form);
  const text = intro + '\n\n' + answers.map(([k, v]) => k + ': ' + v).join('\n');
  const url = wa(text, biz);
  let opened = null;
  try { opened = window.open(url, '_blank', 'noopener'); } catch (e) { opened = null; }
  if (!opened) window.location.href = url;
  return url;
}

/* /insurers is deliberately NOT in the nav. That page and the property-manager
   pair are reached from outbound links we control — email, LinkedIn, a deck —
   so the Cloudflare Access log stays a clean record of who we sent it to. The
   route still exists and the footer still links to it. */
/* Header navigation.

   `/property-managers` is in the nav from 25 August 2026: it is the public page
   for managing agents, body corporates and HOAs, and it carries the internal
   link that stops it being an orphan page in search.

   `/managing-agents` is deliberately NOT here. It is the same offer with a
   different proposition, held for paid traffic so the two can be tested against
   each other in Google Ads. Adding it to the nav would put both pages in front
   of the same visitors and there would be nothing left to compare. */
const NAV = [
  {
    id: 'home', label: 'Home', route: '/',
    /* Service pages hang off Home rather than getting their own top-level slot.
       Keeps the nav to six items on a phone, and gives the services somewhere to
       grow without another rethink. `children` are rendered as a dropdown; the
       first child is the home page itself, so Home stays reachable on touch,
       where there is no hover and the parent has to be the toggle. */
    children: [
      { id: 'home', label: 'Home page', route: '/' },
      { id: 'geyserReplacements', label: 'Geyser replacements', route: '/geyser-replacements' },
      { id: 'leakDetection', label: 'Leak detection', route: '/leak-detection' }
    ]
  },
  { id: 'propertyManagers', label: 'Property managers', route: '/property-managers' },
  { id: 'join', label: 'Join us', route: '/join' },
  { id: 'portal', label: 'Portal', route: '/portal' },
  { id: 'blog', label: 'Blog', route: '/blog' },
  { id: 'about', label: 'About', route: '/about' }
];

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };
const LABEL = { font: '700 var(--web-size-label)/var(--web-lh-label) var(--font-core)', letterSpacing: 'var(--web-label-tracking)', textTransform: 'uppercase', color: 'var(--web-navy)' };
const H1 = { font: '700 var(--web-size-h1)/var(--web-lh-h1) var(--font-core)', color: 'var(--web-navy)', margin: 0 };
const DISPLAY = { font: '700 var(--web-size-display)/var(--web-lh-display) var(--font-core)', color: 'var(--web-navy)', margin: 0, letterSpacing: '-0.01em' };
const H2 = { font: '700 var(--web-size-h2)/var(--web-lh-h2) var(--font-core)', color: 'var(--web-navy)', margin: '0 0 12px' };
const H3 = { font: '600 var(--web-size-h3)/var(--web-lh-h3) var(--font-core)', color: 'var(--web-navy)', margin: '0 0 6px' };
const BODY = { font: '400 var(--web-size-body)/var(--web-lh-body) var(--font-core)', color: 'var(--web-grey-700)', margin: '0 0 12px' };
const SMALL = { font: '400 var(--web-size-small)/var(--web-lh-small) var(--font-core)', color: 'var(--web-grey-500)', margin: 0 };
const CARD = { background: '#fff', border: '1px solid var(--web-grey-100)', borderRadius: 4, boxShadow: 'var(--web-shadow-card)', padding: 24 };

function Eyebrow({ children, onDark }) {
  return <div style={{ ...LABEL, color: onDark ? 'var(--web-blue-300)' : 'var(--web-navy)', marginBottom: 10 }}>{children}</div>;
}

function Section({ eyebrow, title, intro, children, tint, id, narrow }) {
  return <section id={id} style={{ background: tint ? 'var(--web-grey-050)' : '#fff', borderTop: tint ? '1px solid var(--web-grey-100)' : 'none', borderBottom: tint ? '1px solid var(--web-grey-100)' : 'none' }}>
    <div style={{ ...WRAP, padding: '64px 40px', maxWidth: narrow ? 860 : 1200 }}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      {title ? <h2 style={{ ...H2, fontSize: 26, marginBottom: 14, maxWidth: '22ch' }}>{title}</h2> : null}
      {title ? <div style={{ width: 56, height: 3, background: 'var(--web-blue)', marginBottom: 24 }}></div> : null}
      {intro ? <p style={{ ...BODY, maxWidth: '68ch', fontSize: 17 }}>{intro}</p> : null}
      {children}
    </div>
  </section>;
}

/* One navigation item, with or without a dropdown.

   Click, not hover: hover menus do not exist on a touch screen, and this nav is
   read on a phone more than anything else. Escape closes it, a click anywhere
   outside closes it, and the parent shows as active when any of its children is
   the current page. */
function NavItem({ item, page, go, linkStyle }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const childIds = (item.children || []).map(c => c.id);
  const active = page === item.id || childIds.indexOf(page) !== -1;

  React.useEffect(() => {
    if (!open) return;
    const onDown = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = e => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); };
  }, [open]);

  if (!item.children) {
    return <a href={'#' + item.route} onClick={e => { e.preventDefault(); go(item.id); }} style={linkStyle(active)}>{item.label}</a>;
  }

  return <div ref={ref} style={{ position: 'relative' }}>
    <button type="button" aria-haspopup="true" aria-expanded={open} onClick={() => setOpen(!open)}
      style={{ ...linkStyle(active), background: 'none', border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, padding: 0, minHeight: 'var(--web-tap-min)' }}>
      {item.label}
      <Icon name={open ? 'chevron-up' : 'chevron-down'} size={15} color={active ? 'var(--web-navy)' : 'var(--web-grey-500)'} />
    </button>
    {open ? <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, zIndex: 30, minWidth: 220, background: '#fff', border: '1px solid var(--web-grey-100)', borderRadius: 4, boxShadow: '0 8px 24px rgba(24,45,85,.12)', padding: 6, display: 'flex', flexDirection: 'column' }}>
      {item.children.map(c => <a key={c.route} href={'#' + c.route}
        onClick={e => { e.preventDefault(); setOpen(false); go(c.id); }}
        style={{ font: (page === c.id ? '600' : '400') + ' var(--web-size-body)/1.2 var(--font-core)', color: page === c.id ? 'var(--web-navy)' : 'var(--web-grey-700)', textDecoration: 'none', padding: '12px 14px', borderRadius: 3, display: 'block', minHeight: 'var(--web-tap-min)' }}>{c.label}</a>)}
    </div> : null}
  </div>;
}

function Header({ page, go }) {
  return <header style={{ position: 'sticky', top: 0, zIndex: 20, background: '#fff', borderBottom: '1px solid var(--web-grey-100)', height: 'var(--web-header-height)' }}>
    <div style={{ ...WRAP, height: '100%', display: 'flex', alignItems: 'center', gap: 28 }}>
      <a href="#/" onClick={e => { e.preventDefault(); go('home'); }} style={{ display: 'block', lineHeight: 0 }}>
        <img src="../../assets/logo/homeassist-logo-horizontal.png" alt="Home Assist" style={{ height: 30, width: 'auto', display: 'block' }} />
      </a>
      <nav style={{ marginLeft: 'auto', display: 'flex', gap: 22, alignItems: 'center' }}>
        {NAV.map(n => <NavItem key={n.id + n.route} item={n} page={page} go={go}
          linkStyle={active => ({ font: (active ? '600' : '400') + ' var(--web-size-body)/1 var(--font-core)', color: active ? 'var(--web-navy)' : 'var(--web-grey-700)', textDecoration: 'none', paddingBottom: 3, borderBottom: active ? '2px solid var(--web-blue)' : '2px solid transparent' })} />)}
      </nav>
      {/* Two contact buttons rather than one. On a phone these are the two
          things an emergency visitor actually wants, and putting the hotline
          number in the button label rather than behind the word "Call" means the
          number itself is in the page text — which is what a search engine or an
          AI assistant reads out when somebody asks how to reach us. Both are
          size="sm" so the pair fits where the single button used to sit. */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <Button as="a" size="sm" variant="navy" href={wa('Hi Home Assist, I need help with: ')} target="_blank" rel="noopener"
          iconLeft={<Icon name="message-circle" size={15} color="#fff" />}>WhatsApp</Button>
        <Button as="a" size="sm" variant="secondary" href={'tel:' + CH.phoneTel}
          iconLeft={<Icon name="phone" size={15} color="var(--web-navy)" />}>{CH.phone}</Button>
      </div>
    </div>
  </header>;
}

function Footer({ go }) {
  const col = { display: 'flex', flexDirection: 'column', gap: 8 };
  const link = { font: '400 var(--web-size-small)/1.5 var(--font-core)', color: '#fff', opacity: .82, textDecoration: 'none' };
  const head = { ...LABEL, color: 'var(--web-blue-300)', marginBottom: 6 };
  return <footer style={{ background: 'var(--web-navy)', color: '#fff' }}>
    <div style={{ ...WRAP, padding: '56px 40px 40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: 40 }}>
      <div>
        <img src="../../assets/logo/homeassist-logo-horizontal-white.png" alt="Home Assist" style={{ height: 28, width: 'auto', display: 'block', marginBottom: 16 }} />
        <p style={{ ...SMALL, color: '#fff', opacity: .8, maxWidth: '30ch' }}>Property Incident management, South Africa.</p>
      </div>
      <div style={col}><div style={head}>For homeowners</div>
        {['Burst geyser', 'Leak detection', 'Burst pipe repair', 'Electrical', 'Building repairs'].map(t =>
          <a key={t} href="#/" onClick={e => { e.preventDefault(); go('home'); }} style={link}>{t}</a>)}
      </div>
      <div style={col}><div style={head}>For business</div>
        <a href="#/insurers" onClick={e => { e.preventDefault(); go('insurers'); }} style={link}>Insurers and brokers</a>
        <a href="#/property-managers" onClick={e => { e.preventDefault(); go('propertyManagers'); }} style={link}>Property managers</a>
        <a href="#/join" onClick={e => { e.preventDefault(); go('join'); }} style={link}>Join our network</a>
        <a href="#/portal" onClick={e => { e.preventDefault(); go('portal'); }} style={link}>Portal</a>
        <div style={{ ...head, marginTop: 14, marginBottom: 6 }}>Legal</div>
        <a href="#/terms" onClick={e => { e.preventDefault(); go('terms'); }} style={link}>Terms of Use</a>
        <a href="#/privacy-policy" onClick={e => { e.preventDefault(); go('privacy'); }} style={link}>Privacy Policy</a>
        <a href="#/complaints" onClick={e => { e.preventDefault(); go('complaints'); }} style={link}>Complaints Policy</a>
      </div>
      <div style={col}><div style={head}>Contact</div>
        <div><div style={{ ...head, marginBottom: 2 }}>WhatsApp</div><a href={wa('Hi Home Assist, ')} style={link}>{CH.waHome}</a></div>
        <div><div style={{ ...head, marginBottom: 2 }}>Phone</div><a href={'tel:' + CH.phoneTel} style={link}>{CH.phone}</a></div>
        <div><div style={{ ...head, marginBottom: 2 }}>Email</div><a href={'mailto:' + CH.help} style={link}>{CH.help}</a></div>
        <div><div style={{ ...head, marginBottom: 2 }}>Complaints</div><a href={mailtoLink(CH.complaints, 'Complaint')} style={link}>{CH.complaints}</a></div>
        <div><div style={{ ...head, marginBottom: 2 }}>Address</div><span style={{ ...link, opacity: .82 }}>{CH.address}</span></div>
      </div>
    </div>
    <div style={{ borderTop: '1px solid rgba(255,255,255,.18)' }}>
      <div style={{ ...WRAP, padding: '16px 40px', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <p style={{ ...SMALL, color: '#fff', opacity: .6 }}>Home Assist Technologies (Pty) Ltd · homeassist.co.za</p>
        <p style={{ ...SMALL, color: '#fff', opacity: .6, marginLeft: 'auto' }}>{CH.help} · {CH.phone} · {CH.address}</p>
      </div>
    </div>
  </footer>;
}

function NavyBand({ eyebrow, title, children }) {
  return <section style={{ background: 'var(--web-navy)' }}>
    <div style={{ ...WRAP, padding: '56px 40px', display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 420px' }}>
        {eyebrow ? <Eyebrow onDark>{eyebrow}</Eyebrow> : null}
        <h2 style={{ ...H2, fontSize: 26, color: '#fff', margin: 0, maxWidth: '26ch' }}>{title}</h2>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>{children}</div>
    </div>
  </section>;
}

function LabelCard({ label, title, children, icon }) {
  return <div style={CARD}>
    {icon ? <Icon name={icon} size={20} color="var(--web-blue)" style={{ marginBottom: 12 }} /> : null}
    <div style={{ ...LABEL, marginBottom: 8 }}>{label}</div>
    {title ? <h3 style={H3}>{title}</h3> : null}
    <div style={{ ...BODY, margin: 0 }}>{children}</div>
  </div>;
}

function Stat({ figure, label }) {
  return <div>
    <div style={{ font: '700 var(--web-size-display)/1 var(--font-core)', color: 'var(--web-navy)' }}>{figure}</div>
    <div style={{ ...LABEL, marginTop: 8 }}>{label}</div>
  </div>;
}

function Steps({ items }) {
  return <div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length},1fr)`, gap: 24, marginTop: 8 }}>
    {items.map(([n, t, d]) => <div key={n} style={{ borderTop: '2px solid var(--web-navy)', paddingTop: 14 }}>
      <div style={{ ...LABEL }}>{n} {t}</div>
      <p style={{ ...BODY, margin: '10px 0 0' }}>{d}</p>
    </div>)}
  </div>;
}

function Accordion({ items }) {
  const [open, setOpen] = React.useState(0);
  return <div style={{ borderTop: '1px solid var(--web-grey-100)' }}>
    {items.map(([q, a], i) => <div key={q} style={{ borderBottom: '1px solid var(--web-grey-100)' }}>
      <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', display: 'flex', gap: 16, alignItems: 'center', background: 'none', border: 0, padding: '18px 0', cursor: 'pointer', textAlign: 'left', minHeight: 'var(--web-tap-min)' }}>
        <span style={{ font: '600 17px/1.4 var(--font-core)', color: 'var(--web-navy)', flex: 1 }}>{q}</span>
        <Icon name={open === i ? 'minus' : 'plus'} size={18} color="var(--web-blue)" />
      </button>
      {open === i ? <p style={{ ...BODY, maxWidth: '68ch', padding: '0 0 20px' }}>{a}</p> : null}
    </div>)}
  </div>;
}

function FieldRow({ label, children, hint }) {
  return <label style={{ display: 'block' }}>
    <span style={{ ...LABEL, display: 'block', marginBottom: 6 }}>{label}</span>
    {children}
    {hint ? <span style={{ ...SMALL, display: 'block', marginTop: 5 }}>{hint}</span> : null}
  </label>;
}
const INPUT = { width: '100%', boxSizing: 'border-box', minHeight: 'var(--web-tap-min)', border: '1px solid var(--web-grey-300)', borderRadius: 4, padding: '10px 12px', font: '400 var(--web-size-body)/1.4 var(--font-core)', color: 'var(--web-grey-700)', background: '#fff' };

function ChannelCard({ label, value, note, action }) {
  return <div style={CARD}>
    <div style={{ ...LABEL, marginBottom: 10 }}>{label}</div>
    <div style={{ font: '700 21px/1.2 var(--font-core)', color: 'var(--web-navy)', marginBottom: 8 }}>{value}</div>
    <p style={{ ...BODY, marginBottom: action ? 16 : 0 }}>{note}</p>
    {action}
  </div>;
}

function Confirm({ children }) {
  return <span style={{ ...LABEL, color: 'var(--web-blue)', border: '1px solid var(--web-blue-100)', background: 'var(--web-blue-050)', padding: '2px 6px', borderRadius: 2, whiteSpace: 'nowrap' }}>[CONFIRM{children ? ' ' + children : ''}]</span>;
}

Object.assign(window, { CH, wa, mailtoLink, whatsappHandoff, NAV, WRAP, LABEL, H1, H2, H3, DISPLAY, BODY, SMALL, CARD, INPUT, Eyebrow, Section, Header, Footer, NavyBand, LabelCard, Stat, Steps, Accordion, FieldRow, ChannelCard, Confirm });
