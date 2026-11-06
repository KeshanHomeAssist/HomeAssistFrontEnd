import React from 'react';
import { wa, CH } from './site/Chrome.jsx';
import { Icon } from './ds';

/**
 * WhatsApp chat bubble (spec: "WhatsApp Chat Bubble — Spec", November 2026).
 *
 * A floating button bottom-right on every public page. Six seconds after a
 * page opens, a small greeting card slides out beside it so the site "speaks
 * first", the way a Meta click-to-WhatsApp ad does, at no cost.
 *
 * Every option is a plain wa.me link built with Chrome's wa(msg, ref), so the
 * prefilled message starts with its code ("[SITE-BUBBLE-GEYSER-BURST]") and
 * src/analytics.js records the tap as whatsapp_click with that cta_id.
 * Nothing extra to wire for the key event. Two diagnostic events are added
 * here, neither a key event: bubble_shown and bubble_closed.
 * Bubble conversion = whatsapp_click where cta_id starts SITE-BUBBLE ÷ bubble_shown.
 *
 * Decided with Keshan (4 Nov 2026):
 *   - 6 second delay, so visitors take in the page first
 *   - same greeting day and evening
 *   - home page: Burst geyser / Burst pipe / Other, on both hero versions;
 *     the hero A/B test is read on hero-button codes only
 *   - /join: no option buttons, one link; the provider types their trade
 *
 * Phone and desktop behave differently (decided 4 Nov 2026):
 *   - phone (touch screen): each option is a one-tap wa.me link
 *   - desktop (mouse): picking an option shows a QR code to scan with the
 *     phone, so the chat opens in the WhatsApp app with the code already in
 *     the message; "open WhatsApp on this computer" stays as a fallback link.
 *     A scan can't be seen by GA4, so showing the QR fires whatsapp_qr_shown
 *     with the same cta_id (not a key event; compare it with whatsapp_click).
 *
 * Numbers: customers go to the members line (081 849 5489); technicians on
 * /join go to the operations line (071 526 2554); brokers and insurers on
 * /insurers go to Keshan's mobile (082 572 8220), after 20 seconds rather
 * than 6 so they can watch the explainer first (decided 6 Nov 2026).
 */

const DELAY_MS = 6000;
const CLOSED_KEY = 'ha_bubble_closed';

// Pages where a sales prompt does not belong.
const HIDDEN = new Set(['/portal', '/terms', '/privacy-policy', '/complaints', '/data-request']);

const INSURERS = {
  greeting: "Hi, I'm Keshan, founder of Home Assist. Brokers and insurers, pick one and it comes straight to my phone.",
  keshan: true,
  delay: 20000,
  options: [
    { label: 'Book a pilot', ref: 'SITE-BUBBLE-INS-PILOT', msg: "Hi Keshan, I'd like to book a pilot and hear about the piloting options." },
    { label: 'Find out more about Home Assist', ref: 'SITE-BUBBLE-INS-MORE', msg: "Hi Keshan, I'd like to find out more about Home Assist." },
    { label: 'Book a visit', ref: 'SITE-BUBBLE-INS-VISIT', msg: "Hi Keshan, I'd like to book a visit. I'm based in:" },
    { label: 'Claim a free R100 coffee voucher for brokers', ref: 'SITE-BUBBLE-INS-COFFEE', msg: "Hi Keshan, I'd like to claim the free R100 coffee voucher for brokers. My brokerage is:" },
    { label: 'How do I enter my clients into Smart Geyser Rewards?', ref: 'SITE-BUBBLE-INS-REWARDS', msg: 'Hi Keshan, how do I enter my clients into the Smart Geyser Rewards draw?' },
  ],
};
const B2B = {
  greeting: 'Want to see how we would run your claims? Ask us anything.',
  options: [{ label: 'Start a chat', ref: 'SITE-BUBBLE-B2B', msg: "Hi, I'd like to discuss your claims management offering." }],
};
const SMART = {
  greeting: 'Want to cut your geyser bill? Ask which controller fits your home.',
  options: [{ label: 'Start a chat', ref: 'SITE-BUBBLE-SMART', msg: "Hi, I'd like to know which smart geyser controller fits my home." }],
};

const BUBBLE_COPY = {
  '/': {
    greeting: "Burst geyser? Burst pipe? Tap one and we'll take it from there.",
    options: [
      { label: 'Burst geyser', ref: 'SITE-BUBBLE-GEYSER-BURST', msg: 'Hi Home Assist, my geyser has burst.' },
      { label: 'Burst pipe', ref: 'SITE-BUBBLE-PIPE-BURST', msg: 'Hi Home Assist, I have a burst pipe.' },
      { label: 'Other', ref: 'SITE-BUBBLE-OTHER', msg: 'Hi Home Assist, I need help with something else.' },
    ],
  },
  '/geyser-replacements': {
    greeting: "Send us a photo of your geyser's serial plate and we'll check the warranty.",
    options: [{ label: 'Start a chat', ref: 'SITE-BUBBLE-GEYSER', msg: "Hi, I'd like a geyser replacement quote. Here's my serial plate:" }],
  },
  '/leak-detection': {
    greeting: "Hidden leak? Tell us your suburb and we'll book a test.",
    options: [{ label: 'Start a chat', ref: 'SITE-BUBBLE-LEAK', msg: 'Hi, I think I have a hidden leak. My suburb is:' }],
  },
  '/smart-homes': SMART,
  '/smart-homes/smart-metering': SMART,
  '/rewards': {
    greeting: 'Replacing your geyser? You could win a smart controller. Ask us how.',
    options: [{ label: 'Start a chat', ref: 'SITE-BUBBLE-REWARDS', msg: "Hi, I'd like to know more about the Rewards draw." }],
  },
  '/insurers': INSURERS,
  '/property-managers': B2B,
  '/managing-agents': B2B,
  '/join': {
    greeting: "Want to work with Home Assist? What's your trade?",
    ops: true,
    options: [{ label: 'Start a chat', ref: 'SITE-BUBBLE-JOIN', msg: "Hi Home Assist, I'd like to join your network. My trade is: " }],
  },
};
const DEFAULT_COPY = {
  greeting: "Need a plumber or a geyser? We're on WhatsApp.",
  options: [{ label: 'Start a chat', ref: 'SITE-BUBBLE', msg: 'Hi Home Assist, I need some help.' }],
};

function normalise(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/[/]+$/, '') || '/';
}

function track(name, params) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

function isClosed() {
  try { return window.sessionStorage.getItem(CLOSED_KEY) === '1'; } catch (e) { return false; }
}
function markClosed() {
  try { window.sessionStorage.setItem(CLOSED_KEY, '1'); } catch (e) { /* private mode: closes for this page only */ }
}

// Desktop = a real mouse and hover. Touch laptops with a trackpad count as desktop, which is right:
// they don't have WhatsApp installed as an app the way a phone does.
function isDesktop() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

// QR code as an SVG path. The library only loads on desktop, so phones never download it.
function QrCode({ text }) {
  const [svg, setSvg] = React.useState(null);
  React.useEffect(() => {
    let live = true;
    import('qrcode-generator').then((mod) => {
      const qrcode = mod.default || mod;
      const qr = qrcode(0, 'M');
      qr.addData(unescape(encodeURIComponent(text)));
      qr.make();
      const n = qr.getModuleCount();
      let d = '';
      for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (qr.isDark(r, c)) d += 'M' + c + ' ' + r + 'h1v1h-1z';
      if (live) setSvg({ n, d });
    });
    return () => { live = false; };
  }, [text]);
  if (!svg) return <div className="ha-bubble-qr" aria-hidden="true" />;
  return (
    <svg className="ha-bubble-qr" viewBox={'-2 -2 ' + (svg.n + 4) + ' ' + (svg.n + 4)} role="img" aria-label="QR code that opens this chat in WhatsApp on your phone" shapeRendering="crispEdges">
      <rect x="-2" y="-2" width={svg.n + 4} height={svg.n + 4} fill="#fff" />
      <path d={svg.d} fill="#182D55" />
    </svg>
  );
}

// Someone filling in a form (the geyser configurator, the service request) should not be interrupted.
function typingInForm() {
  const el = typeof document !== 'undefined' ? document.activeElement : null;
  return !!el && /^(INPUT|SELECT|TEXTAREA)$/.test(el.tagName);
}

export function WhatsAppBubble({ pathname }) {
  const path = normalise(pathname);
  const copy = BUBBLE_COPY[path] || DEFAULT_COPY;
  const [open, setOpen] = React.useState(false);
  const [desktop, setDesktop] = React.useState(false);
  const [picked, setPicked] = React.useState(null);
  const cardId = 'ha-bubble-card';
  const digits = copy.ops ? CH.waOpsDigits : copy.keshan ? CH.waKeshanDigits : CH.waHomeDigits;
  const number = copy.ops ? CH.waOps : copy.keshan ? CH.waKeshan : CH.waHome;
  const delay = copy.delay || DELAY_MS;

  React.useEffect(() => { setDesktop(isDesktop()); }, []);

  // New page: fold the card away and re-arm the timer, unless it was dismissed this session.
  React.useEffect(() => {
    setOpen(false);
    setPicked(null);
    if (HIDDEN.has(path) || isClosed()) return undefined;
    let timer;
    const tryOpen = () => {
      if (isClosed()) return;
      if (typingInForm()) { timer = setTimeout(tryOpen, 2000); return; }
      setOpen(true);
      track('bubble_shown', { page_path: path, trigger: 'auto' });
    };
    timer = setTimeout(tryOpen, delay);
    return () => clearTimeout(timer);
  }, [path]);

  // Desktop with a single option: go straight to its QR code.
  const shownOption = desktop ? (picked || (copy.options.length === 1 ? copy.options[0] : null)) : null;
  React.useEffect(() => {
    if (open && shownOption) track('whatsapp_qr_shown', { page_path: path, cta_id: shownOption.ref });
  }, [open, shownOption && shownOption.ref, path]);

  if (HIDDEN.has(path)) return null;

  const close = () => {
    setOpen(false);
    setPicked(null);
    markClosed();
    track('bubble_closed', { page_path: path });
  };

  const toggle = () => {
    if (open) { close(); return; }
    setOpen(true);
    track('bubble_shown', { page_path: path, trigger: 'tap' });
  };

  return (
    <div className="ha-bubble">
      {open && (
        <div className="ha-bubble-card" id={cardId} role="dialog" aria-label="Chat with Home Assist on WhatsApp">
          <button type="button" className="ha-bubble-close" onClick={close} aria-label="Close">
            <Icon name="x" size={16} />
          </button>
          <p className="ha-bubble-greeting">{copy.greeting}</p>
          {shownOption ? (
            <div className="ha-bubble-desktop">
              {copy.options.length > 1 && <p className="ha-bubble-picked">{shownOption.label}</p>}
              <QrCode text={wa(shownOption.msg, shownOption.ref, digits)} />
              <p className="ha-bubble-scan">Scan with your phone's camera to continue in WhatsApp.</p>
              <a className="ha-bubble-link" href={wa(shownOption.msg, shownOption.ref, digits)} target="_blank" rel="noopener">
                Or open WhatsApp on this computer
              </a>
              {copy.options.length > 1 && (
                <button type="button" className="ha-bubble-back" onClick={() => setPicked(null)}>Choose a different option</button>
              )}
            </div>
          ) : (
            <div className="ha-bubble-options">
              {copy.options.map((o) =>
                desktop ? (
                  <button key={o.ref} type="button" className="ha-bubble-option" onClick={() => setPicked(o)}>
                    {o.label}
                  </button>
                ) : (
                  <a
                    key={o.ref}
                    className="ha-bubble-option"
                    href={wa(o.msg, o.ref, digits)}
                    target="_blank"
                    rel="noopener"
                    onClick={() => setOpen(false)}
                  >
                    {o.label}
                  </a>
                )
              )}
            </div>
          )}
          <p className="ha-bubble-note">{copy.keshan ? 'Keshan Patel, founder — WhatsApp ' + number + '.' : 'WhatsApp ' + number + ', answered 24 hours a day.'}</p>
        </div>
      )}
      <button
        type="button"
        className="ha-bubble-button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={open ? cardId : undefined}
        aria-label={open ? 'Close chat options' : 'Chat with Home Assist on WhatsApp'}
      >
        <Icon name={open ? 'x' : 'message-circle'} size={26} />
      </button>
    </div>
  );
}
