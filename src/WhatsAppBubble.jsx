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
 * Not built yet: the desktop on-site chat. Desktop visitors still get WhatsApp
 * (WhatsApp Web) until a chat tool is chosen; check the GA4 device split first.
 */

const DELAY_MS = 6000;
const CLOSED_KEY = 'ha_bubble_closed';

// Pages where a sales prompt does not belong.
const HIDDEN = new Set(['/portal', '/terms', '/privacy-policy', '/complaints', '/data-request']);

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
  '/insurers': B2B,
  '/property-managers': B2B,
  '/managing-agents': B2B,
  '/join': {
    greeting: "Want to work with Home Assist? What's your trade?",
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

// Someone filling in a form (the geyser configurator, the service request) should not be interrupted.
function typingInForm() {
  const el = typeof document !== 'undefined' ? document.activeElement : null;
  return !!el && /^(INPUT|SELECT|TEXTAREA)$/.test(el.tagName);
}

export function WhatsAppBubble({ pathname }) {
  const path = normalise(pathname);
  const copy = BUBBLE_COPY[path] || DEFAULT_COPY;
  const [open, setOpen] = React.useState(false);
  const cardId = 'ha-bubble-card';

  // New page: fold the card away and re-arm the timer, unless it was dismissed this session.
  React.useEffect(() => {
    setOpen(false);
    if (HIDDEN.has(path) || isClosed()) return undefined;
    let timer;
    const tryOpen = () => {
      if (isClosed()) return;
      if (typingInForm()) { timer = setTimeout(tryOpen, 2000); return; }
      setOpen(true);
      track('bubble_shown', { page_path: path, trigger: 'auto' });
    };
    timer = setTimeout(tryOpen, DELAY_MS);
    return () => clearTimeout(timer);
  }, [path]);

  if (HIDDEN.has(path)) return null;

  const close = () => {
    setOpen(false);
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
          <div className="ha-bubble-options">
            {copy.options.map((o) => (
              <a
                key={o.ref}
                className="ha-bubble-option"
                href={wa(o.msg, o.ref)}
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
              >
                {o.label}
              </a>
            ))}
          </div>
          <p className="ha-bubble-note">Opens WhatsApp on {CH.waBiz}, answered 24 hours a day.</p>
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
