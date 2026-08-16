#!/usr/bin/env python3
"""
Applies Keshan's 16 August change list to the design export.

Written as a script rather than hand edits so the exact same change can be
replayed on another copy of the repo and so it fails loudly if the source has
moved on, instead of silently half-applying.

Run from the repo root:  python3 scripts/patch-2026-08-16.py
"""
import sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
W = ROOT / 'design-export' / 'website'

def edit(path, old, new, count=1):
    p = W / path if not str(path).startswith('scripts') else ROOT / path
    s = p.read_text()
    n = s.count(old)
    if n != count:
        sys.exit(f"ABORT {path}: expected {count} occurrence(s) of:\n---\n{old[:200]}\n---\nfound {n}")
    p.write_text(s.replace(old, new))
    print(f"  {path}: {count} edit(s)")

print("Chrome.jsx")

# --- contact constants: complaints, the two named team contacts, the rating link
edit('Chrome.jsx',
"""  booking: 'https://calendar.app.google/9QkhMLKCyLuHyp696'
};""",
"""  booking: 'https://calendar.app.google/9QkhMLKCyLuHyp696',
  complaints: 'complaints@homeassist.co.za',
  rating: 'https://portal.homeassist.co.za/rating',
  leonie: 'leonie@homeassist.co.za',
  vimla: 'vimla@homeassist.co.za'
};""")

# --- form delivery
edit('Chrome.jsx',
"""const wa = (msg, biz) => `https://wa.me/${biz ? CH.waBizDigits : CH.waHomeDigits}?text=${encodeURIComponent(msg)}`;""",
"""const wa = (msg, biz) => `https://wa.me/${biz ? CH.waBizDigits : CH.waHomeDigits}?text=${encodeURIComponent(msg)}`;

const mailtoLink = (to, subject) => 'mailto:' + to + '?subject=' + encodeURIComponent(subject);

/* FORM DELIVERY
   This is a static site, so a form has nowhere to post to on its own.

   Set FORM_ACCESS_KEY to a Web3Forms access key (web3forms.com — free, no
   account, the key arrives by email) and every form starts delivering properly
   to the address that form specifies.

   Until it is set, sendForm falls back to opening the visitor's mail client
   with all the answers filled in. That works, but it loses anyone browsing on a
   phone or webmail with no mail client configured — which is most people. Treat
   the fallback as a stopgap, not the finished thing. */
const FORM_ACCESS_KEY = '';

/* Reads a form's answers using the visible field labels, so the email that
   arrives reads the way the page does. */
function formAnswers(form) {
  const out = [];
  const radioSeen = new Set();
  form.querySelectorAll('input, select, textarea').forEach(el => {
    if (el.type === 'submit' || el.type === 'button') return;
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
      out.push([wrapText.slice(0, 90) || 'Consent', el.checked ? 'Yes' : 'No']);
      return;
    }
    const span = wrap ? wrap.querySelector('span') : null;
    const label = span ? span.textContent.trim() : (el.getAttribute('placeholder') || 'Field');
    if (el.value) out.push([label, el.value]);
  });
  return out;
}

function sendForm(form, { to, subject }) {
  const answers = formAnswers(form);
  const body = answers.map(([k, v]) => k + ': ' + v).join('\\n');

  if (FORM_ACCESS_KEY) {
    const payload = {
      access_key: FORM_ACCESS_KEY,
      subject: subject,
      from_name: 'homeassist.co.za',
      to: to,
      message: body
    };
    answers.forEach(([k, v]) => { payload[k] = v; });
    return fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload)
    }).then(() => true).catch(() => false);
  }

  window.location.href = mailtoLink(to, subject) + '&body=' + encodeURIComponent(body);
  return Promise.resolve(true);
}""")

# --- footer gains the complaints address
edit('Chrome.jsx',
"""        <div><div style={{ ...head, marginBottom: 2 }}>Email</div><a href={'mailto:' + CH.help} style={link}>{CH.help}</a></div>""",
"""        <div><div style={{ ...head, marginBottom: 2 }}>Email</div><a href={'mailto:' + CH.help} style={link}>{CH.help}</a></div>
        <div><div style={{ ...head, marginBottom: 2 }}>Complaints</div><a href={mailtoLink(CH.complaints, 'Complaint')} style={link}>{CH.complaints}</a></div>""")

edit('Chrome.jsx',
"""Object.assign(window, { CH, wa, NAV,""",
"""Object.assign(window, { CH, wa, mailtoLink, sendForm, FORM_ACCESS_KEY, NAV,""")

print("HomePage.jsx")

# 1. the warranty line is confirmed correct — drop the [CONFIRM] fallback
edit('HomePage.jsx',
"""<div style={{ ...SMALL, marginTop: 6 }}>{v || <Confirm />}</div>""",
"""<div style={{ ...SMALL, marginTop: 6 }}>{v}</div>""")

# 2. service request goes to the help desk
edit('HomePage.jsx',
"""    <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ ...CARD, padding: 32, maxWidth: 900 }}>""",
"""    <form onSubmit={e => { e.preventDefault(); sendForm(e.currentTarget, { to: CH.help, subject: 'Website service request' }); setSent(true); }} style={{ ...CARD, padding: 32, maxWidth: 900 }}>""")

# 3. Rate us, in the reviews section
edit('HomePage.jsx',
"""          <Button as="a" variant="ghost" fullWidth href="https://www.google.com/search?q=home+assist+technologies" target="_blank" rel="noopener" style={{ marginTop: 18 }}>Read them on Google</Button>""",
"""          <Button as="a" variant="ghost" fullWidth href="https://www.google.com/search?q=home+assist+technologies" target="_blank" rel="noopener" style={{ marginTop: 18 }}>Read them on Google</Button>
          <Button as="a" variant="navy" fullWidth href={CH.rating} target="_blank" rel="noopener" style={{ marginTop: 10 }}>Rate us</Button>
          <p style={{ ...SMALL, marginTop: 10 }}>A private rating on a job we handled for you — or change a rating you have already given.</p>""")

print("InsurersPage.jsx")

# 4. the WhatsApp buttons stop printing the number; the link still dials it
for old in [
    ">WhatsApp {CH.waBiz}</Button>",
]:
    pass
edit('InsurersPage.jsx', """iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>WhatsApp {CH.waBiz}</Button>""",
     """iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>WhatsApp us</Button>""")
edit('InsurersPage.jsx', """target="_blank" rel="noopener">WhatsApp {CH.waBiz}</Button>""",
     """target="_blank" rel="noopener">WhatsApp us</Button>""")
edit('InsurersPage.jsx', """style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}>WhatsApp {CH.waBiz}</Button>""",
     """style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}>WhatsApp us</Button>""")

# 5. the gate emails Keshan, and offers a marketing opt-in
edit('InsurersPage.jsx',
"""    <form onSubmit={e => { e.preventDefault(); onUnlock(email); }} style={{ ...CARD, padding: 36, width: 'min(520px,100%)', boxShadow: '0 24px 60px rgba(11,29,58,.35)' }}>""",
"""    <form onSubmit={e => { e.preventDefault(); sendForm(e.currentTarget, { to: CH.biz, subject: 'Insurer page enquiry' }); onUnlock(email); }} style={{ ...CARD, padding: 36, width: 'min(520px,100%)', boxShadow: '0 24px 60px rgba(11,29,58,.35)' }}>""")

edit('InsurersPage.jsx',
"""      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
        <Button size="lg" variant="navy">View the page</Button>
        <Button as="a" size="lg" variant="ghost" href={CH.booking} target="_blank" rel="noopener">Book a meeting instead</Button>
      </div>
      <p style={{ ...SMALL, marginTop: 16 }}>We use it to follow up on this enquiry only. No newsletter, no list.</p>""",
"""      <label style={{ ...BODY, display: 'flex', gap: 10, alignItems: 'flex-start', margin: '14px 0 0' }}>
        <input type="checkbox" style={{ marginTop: 3 }} />
        <span>Send me occasional Home Assist updates for insurers and brokers.</span>
      </label>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
        <Button size="lg" variant="navy">View the page</Button>
        <Button as="a" size="lg" variant="ghost" href={CH.booking} target="_blank" rel="noopener">Book a meeting instead</Button>
      </div>
      <p style={{ ...SMALL, marginTop: 16 }}>We use it to follow up on this enquiry only. You are not added to any list unless you tick the box.</p>""")

# 6. and confirms who will come back to them
edit('InsurersPage.jsx',
"""  const unlock = email => { try { localStorage.setItem(KEY, email); } catch (e) {} setVisible(true); };
  return <React.Fragment>
    {!visible ? <InsurersGate onUnlock={unlock} /> : null}""",
"""  const [justUnlocked, setJustUnlocked] = React.useState(false);
  const unlock = email => { try { localStorage.setItem(KEY, email); } catch (e) {} setVisible(true); setJustUnlocked(true); };
  return <React.Fragment>
    {!visible ? <InsurersGate onUnlock={unlock} /> : null}
    {justUnlocked ? <div style={{ background: 'var(--web-blue-050)', borderBottom: '1px solid var(--web-blue-100)' }}>
      <div style={{ ...WRAP, padding: '14px 40px', display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <Icon name="check" size={18} color="var(--web-blue)" />
        <p style={{ ...BODY, margin: 0 }}>Thank you. The Home Assist CEO will reach out to you during working hours.</p>
      </div>
    </div> : null}""")

print("AboutPage.jsx")

# 7. the two named team contacts replace the empty slots
edit('AboutPage.jsx',
"""        {[0, 1].map(i => <div key={i} style={{ border: '1px dashed var(--web-grey-300)', borderRadius: 4, padding: 24, background: 'var(--web-grey-050)' }}>
          <div style={LABEL}>Team member slot</div>
          <p style={{ ...SMALL, marginTop: 6 }}>Name and role to be added.</p>
        </div>)}""",
"""        {[
          ['Leonie Moses', 'Customer Success Team Leader', CH.leonie, 'Website inquiry for Service',
            'If you did not get the service you needed and your job is live, reach out to Leonie.'],
          ['Vimla Govender', 'Technical Support and Provider Onboarding', CH.vimla, 'Website inquiry for Support',
            'For anything technical, or for help onboarding as a new service provider, reach out to Vimla.']
        ].map(([name, role, email, subject, note]) => <div key={name} style={CARD}>
          <div style={{ font: '700 21px/1.2 var(--font-core)', color: 'var(--web-navy)' }}>{name}</div>
          <div style={{ ...SMALL, marginTop: 6 }}>{role}</div>
          <p style={{ ...BODY, margin: '12px 0 16px' }}>{note}</p>
          <Button as="a" variant="secondary" href={mailtoLink(email, subject)}>Email {name.split(' ')[0]}</Button>
        </div>)}""")

# 8. complaints becomes a contact channel of its own
edit('AboutPage.jsx',
"""      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 20 }}>""",
"""      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginBottom: 20 }}>""")

edit('AboutPage.jsx',
"""        <ChannelCard label="Help desk" value={CH.help} note="Customer success and follow-ups on existing jobs."
          action={<Button as="a" variant="secondary" href={'mailto:' + CH.help}>Email the help desk</Button>} />""",
"""        <ChannelCard label="Help desk" value={CH.help} note="Customer success and follow-ups on existing jobs."
          action={<Button as="a" variant="secondary" href={'mailto:' + CH.help}>Email the help desk</Button>} />
        <ChannelCard label="Complaints" value={CH.complaints} note="A formal complaint about a job, a technician or how a case was handled."
          action={<Button as="a" variant="secondary" href={mailtoLink(CH.complaints, 'Complaint')}>Log a complaint</Button>} />""")

# 9. the message form goes to the help desk
edit('AboutPage.jsx',
"""        : <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ ...CARD, padding: 32, maxWidth: 760 }}>""",
"""        : <form onSubmit={e => { e.preventDefault(); sendForm(e.currentTarget, { to: CH.help, subject: 'Website message' }); setSent(true); }} style={{ ...CARD, padding: 32, maxWidth: 760 }}>""")

print("BlogPage.jsx")

# 10. unfinished posts are drafts: no card, no URL, no sitemap entry
edit('BlogPage.jsx', """const POSTS = [""", """const ALL_POSTS = [""")
edit('BlogPage.jsx',
"""  ['Geysers', 'Solar, heat pump or electric — which geyser should you replace yours with?', 'The right answer depends on your household’s hot water pattern, your roof, and what your budget can carry up front.', '8 July 2026', '7 min', 'blog-solar-geyser.png']
];""",
"""  ['Geysers', 'Solar, heat pump or electric — which geyser should you replace yours with?', 'The right answer depends on your household’s hot water pattern, your roof, and what your budget can carry up front.', '8 July 2026', '7 min', 'blog-solar-geyser.png']
];

/* Only posts with a written body are published. The rest stay above as drafts:
   they get no card on /blog, no URL of their own, and no sitemap entry, so we
   are never offering Google a page that says "to be written". Give a draft a
   body array and it publishes itself on the next build. */
const POSTS = ALL_POSTS.filter(p => Array.isArray(p[7]) && p[7].length > 0);""")

print("scripts/adapt-pages.mjs")
edit('scripts/adapt-pages.mjs',
"""const CHROME_EXPORTS = [
  'CH', 'wa', 'NAV',""",
"""const CHROME_EXPORTS = [
  'CH', 'wa', 'mailtoLink', 'sendForm', 'FORM_ACCESS_KEY', 'NAV',""")

# 11. the form no longer posts nowhere, so stop saying it does
edit('HomePage.jsx',
"""      <p style={{ ...SMALL, marginTop: 14 }}>Submissions post to a placeholder endpoint. Routing to the operations team and to WhatsApp is wired later.</p>""",
"""      <p style={{ ...SMALL, marginTop: 14 }}>Your request goes to the Home Assist help desk. For anything urgent, message us on WhatsApp — we pick up 24 hours a day.</p>""")

# 12. the About address block is the public one, so it shows the help desk,
#     not the CEO. Insurers already have their own strip on the same page.
edit('AboutPage.jsx',
"""          {[['Address', CH.address], ['Phone', CH.phone], ['Email', CH.biz]].map(([l, v]) =>""",
"""          {[['Address', CH.address], ['Phone', CH.phone], ['Email', CH.help]].map(([l, v]) =>""")

print("\nall edits applied")
