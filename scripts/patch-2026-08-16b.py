#!/usr/bin/env python3
"""
Second change set, 16 August.

1. Forms hand off to WhatsApp instead of pretending to send an email.

   The mailto fallback did not fire in testing: the page said "We have your
   request" and nothing was sent anywhere. A form that silently loses enquiries
   while telling the customer it worked is worse than no form.

   Home Assist already runs on WhatsApp, staffed 24/7, and the site pushes
   people there everywhere else. So the form now composes a WhatsApp message
   with every answer filled in and opens it. Nothing to configure, no email
   client, works on any phone. The confirmation screen says what actually
   happened and gives a manual link if the browser blocked the new tab.

   Email delivery (Web3Forms) can be added alongside this later.

2. The About page gets a real embedded map instead of the grey placeholder.

Run from the repo root:  python3 scripts/patch-2026-08-16b.py
"""
import sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
W = ROOT / 'design-export' / 'website'

def edit(path, old, new, count=1):
    p = W / path if not str(path).startswith('scripts') else ROOT / path
    s = p.read_text()
    n = s.count(old)
    if n != count:
        sys.exit(f"ABORT {path}: expected {count} of:\n---\n{old[:220]}\n---\nfound {n}")
    p.write_text(s.replace(old, new))
    print(f"  {path}")

print("Chrome.jsx")

# Replace the whole email-delivery block with the WhatsApp handoff.
old_block_start = "/* FORM DELIVERY"
chrome = (W / 'Chrome.jsx').read_text()
start = chrome.index(old_block_start)
end = chrome.index("const NAV = [")
new_block = """/* FORM DELIVERY — WhatsApp handoff.

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
  const text = intro + '\\n\\n' + answers.map(([k, v]) => k + ': ' + v).join('\\n');
  const url = wa(text, biz);
  let opened = null;
  try { opened = window.open(url, '_blank', 'noopener'); } catch (e) { opened = null; }
  if (!opened) window.location.href = url;
  return url;
}

"""
(W / 'Chrome.jsx').write_text(chrome[:start] + new_block + chrome[end:])
print("  Chrome.jsx: delivery block replaced")

edit('Chrome.jsx',
"Object.assign(window, { CH, wa, mailtoLink, sendForm, FORM_ACCESS_KEY, NAV,",
"Object.assign(window, { CH, wa, mailtoLink, whatsappHandoff, NAV,")

edit('scripts/adapt-pages.mjs',
"'CH', 'wa', 'mailtoLink', 'sendForm', 'FORM_ACCESS_KEY', 'NAV',",
"'CH', 'wa', 'mailtoLink', 'whatsappHandoff', 'NAV',")

print("HomePage.jsx")

edit('HomePage.jsx',
"""function RequestForm() {
  const [sent, setSent] = React.useState(false);""",
"""function RequestForm() {
  const [sent, setSent] = React.useState(false);
  const [waLink, setWaLink] = React.useState('');""")

edit('HomePage.jsx',
"""      <Eyebrow onDark>We have your request</Eyebrow>
      <h2 style={{ ...H2, color: '#fff', fontSize: 26 }}>We have your request.</h2>
      <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', maxWidth: '60ch' }}>A consultant is matching you with an artisan in your area and will come back to you on WhatsApp. For anything urgent, message us and we will pick it up immediately.</p>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button as="a" variant="onDark" href={wa('Hi Home Assist, I have just sent a request through the website. ')} target="_blank" rel="noopener">Message us on WhatsApp</Button>
        <Button variant="ghost" onClick={() => setSent(false)} style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}>Send another request</Button>
      </div>""",
"""      <Eyebrow onDark>One step left</Eyebrow>
      <h2 style={{ ...H2, color: '#fff', fontSize: 26 }}>Press send on WhatsApp and we have it.</h2>
      <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', maxWidth: '60ch' }}>WhatsApp has opened with your details already filled in. Send the message and a consultant will pick it up — we answer 24 hours a day. If WhatsApp did not open, use the button below.</p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button as="a" variant="onDark" href={waLink || wa('Hi Home Assist, I would like to log a service request. ')} target="_blank" rel="noopener">Open WhatsApp with my request</Button>
        <Button as="a" variant="ghost" href={'tel:' + CH.phoneTel} style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}>Call {CH.phone} instead</Button>
        <Button variant="ghost" onClick={() => setSent(false)} style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}>Edit my request</Button>
      </div>""")

edit('HomePage.jsx',
"""    <form onSubmit={e => { e.preventDefault(); sendForm(e.currentTarget, { to: CH.help, subject: 'Website service request' }); setSent(true); }} style={{ ...CARD, padding: 32, maxWidth: 900 }}>""",
"""    <form onSubmit={e => { e.preventDefault(); setWaLink(whatsappHandoff(e.currentTarget, { intro: 'New service request from the Home Assist website.' })); setSent(true); }} style={{ ...CARD, padding: 32, maxWidth: 900 }}>""")

edit('HomePage.jsx',
"""      <p style={{ ...SMALL, marginTop: 14 }}>Your request goes to the Home Assist help desk. For anything urgent, message us on WhatsApp — we pick up 24 hours a day.</p>""",
"""      <p style={{ ...SMALL, marginTop: 14 }}>This opens WhatsApp with your answers filled in, so you can send them to us in one tap. We answer 24 hours a day.</p>""")

edit('HomePage.jsx', """<Button size="lg" variant="navy">Send my request</Button>""",
                     """<Button size="lg" variant="navy" iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>Send my request on WhatsApp</Button>""")

print("AboutPage.jsx")

edit('AboutPage.jsx',
"""function AboutPage() {
  const [sent, setSent] = React.useState(false);""",
"""function AboutPage() {
  const [sent, setSent] = React.useState(false);
  const [waLink, setWaLink] = React.useState('');""")

edit('AboutPage.jsx',
"""          <div style={{ ...LABEL, marginBottom: 8 }}>Received</div>
          <p style={{ ...BODY, margin: 0 }}>We have your message and will come back to you. For anything urgent, message us on WhatsApp at {CH.waHome}.</p>""",
"""          <div style={{ ...LABEL, marginBottom: 8 }}>One step left</div>
          <p style={{ ...BODY, margin: '0 0 16px' }}>WhatsApp has opened with your message filled in. Send it and we will come back to you. If it did not open, use the button below.</p>
          <Button as="a" variant="navy" href={waLink || wa('Hi Home Assist, ')} target="_blank" rel="noopener">Open WhatsApp with my message</Button>""")

edit('AboutPage.jsx',
"""        : <form onSubmit={e => { e.preventDefault(); sendForm(e.currentTarget, { to: CH.help, subject: 'Website message' }); setSent(true); }} style={{ ...CARD, padding: 32, maxWidth: 760 }}>""",
"""        : <form onSubmit={e => { e.preventDefault(); setWaLink(whatsappHandoff(e.currentTarget, { intro: 'New message from the Home Assist website.' })); setSent(true); }} style={{ ...CARD, padding: 32, maxWidth: 760 }}>""")

edit('AboutPage.jsx', """<Button size="lg" variant="navy">Send message</Button>""",
                      """<Button size="lg" variant="navy" iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>Send on WhatsApp</Button>""")

# The map
edit('AboutPage.jsx',
"""        <div style={{ border: '1px solid var(--web-grey-100)', borderRadius: 4, background: 'var(--web-grey-050)', minHeight: 260, display: 'grid', placeItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <Icon name="map-pin" size={24} color="var(--web-grey-500)" />
            <p style={{ ...SMALL, marginTop: 10 }}>Embedded map — Google Maps iframe for 12 Uitvlugt Road, Pinelands</p>
          </div>
        </div>""",
"""        <div style={{ border: '1px solid var(--web-grey-100)', borderRadius: 4, overflow: 'hidden', minHeight: 260 }}>
          <iframe
            title="Home Assist Technologies — 12 Uitvlugt Road, Pinelands, Cape Town"
            src="https://www.google.com/maps?q=12+Uitvlugt+Road,+Pinelands,+Cape+Town,+7405&output=embed"
            style={{ border: 0, width: '100%', height: '100%', minHeight: 260, display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>""")

print("InsurersPage.jsx")

# The gate no longer claims to send anything, because it cannot yet.
edit('InsurersPage.jsx',
"""    <form onSubmit={e => { e.preventDefault(); sendForm(e.currentTarget, { to: CH.biz, subject: 'Insurer page enquiry' }); onUnlock(email); }} style={{ ...CARD, padding: 36, width: 'min(520px,100%)', boxShadow: '0 24px 60px rgba(11,29,58,.35)' }}>""",
"""    <form onSubmit={e => { e.preventDefault(); onUnlock(email); }} style={{ ...CARD, padding: 36, width: 'min(520px,100%)', boxShadow: '0 24px 60px rgba(11,29,58,.35)' }}>""")

edit('InsurersPage.jsx',
"""        <Icon name="check" size={18} color="var(--web-blue)" />
        <p style={{ ...BODY, margin: 0 }}>Thank you. The Home Assist CEO will reach out to you during working hours.</p>""",
"""        <Icon name="check" size={18} color="var(--web-blue)" />
        <p style={{ ...BODY, margin: 0, flex: '1 1 340px' }}>The page is open. To speak to the Home Assist CEO directly, book a meeting or message us — we come back during working hours.</p>
        <Button as="a" variant="navy" href={CH.booking} target="_blank" rel="noopener">Book a meeting</Button>
        <Button as="a" variant="secondary" href={wa('Hi Home Assist, I have just read the insurers page and would like to talk. ', true)} target="_blank" rel="noopener">WhatsApp us</Button>""")

print("\\ndone")
