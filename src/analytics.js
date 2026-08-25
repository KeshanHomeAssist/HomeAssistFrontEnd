/**
 * GA4 wiring for a prerendered single-page site.
 *
 * The tag itself lives in `index.html` so it is in the HTML every route serves,
 * and it is configured with `send_page_view: false`. That is deliberate:
 *
 *   This site is prerendered HTML that hydrates into a router. Moving from the
 *   home page to /property-managers changes the URL without a page load, so
 *   GA4's automatic page_view would record the page someone landed on and
 *   nothing they did afterwards. Every internal journey would be invisible.
 *
 * So page views are sent from here instead, once per route including the first.
 * Turning `send_page_view` back on without removing `trackPageView` double-counts
 * every landing page.
 *
 * The outbound-click tracking exists because this site has no server. Every
 * enquiry leaves for WhatsApp, the phone, or the booking calendar, so without a
 * click event there is no record that anyone ever made contact - which makes a
 * landing-page test unreadable and gives Google Ads nothing to optimise against.
 */

export const GA_ID = 'G-FL8J3DD2DX';

/**
 * One path per page, whatever the URL had.
 *
 * Cloudflare Pages serves both `/about` and `/about/` with a 200 - the rules that
 * used to normalise them were the cause of the 25 August redirect loop and had to
 * go. Left alone, GA4 then reports the same page twice, splitting its views,
 * clicks and conversions across two rows. Stripping the trailing slash here keeps
 * one page to one row. The canonical tags already keep Google straight.
 */
function normalisePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/[/]+$/, '') || '/';
}

function send(name, params) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

/** Which CTA a link is, from its href. Null means we do not track it. */
function outboundEvent(href) {
  if (!href) return null;
  if (href.startsWith('https://wa.me/')) return 'whatsapp_click';
  if (href.startsWith('tel:')) return 'phone_click';
  if (href.startsWith('mailto:')) return 'email_click';
  if (href.includes('calendar.app.google')) return 'booking_click';
  if (href.includes('portal.homeassist.co.za')) return 'portal_click';
  return null;
}

/**
 * One page_view per route, plus one event per outbound CTA click.
 *
 * `page_path` is read from the live URL at click time rather than from a closure,
 * so an enquiry is always attributed to the page the visitor was actually on.
 * That is the number that answers "which proposition pulled" for the
 * /property-managers against /managing-agents test.
 */
export function useAnalytics(React, pathname) {
  React.useEffect(() => {
    send('page_view', {
      page_path: normalisePath(pathname),
      page_location: typeof window !== 'undefined' ? window.location.href : undefined,
      page_title: typeof document !== 'undefined' ? document.title : undefined,
    });
  }, [pathname]);

  React.useEffect(() => {
    if (typeof document === 'undefined') return;

    const onClick = (event) => {
      const link = event.target instanceof Element ? event.target.closest('a') : null;
      if (!link) return;
      const name = outboundEvent(link.getAttribute('href'));
      if (!name) return;
      send(name, {
        page_path: normalisePath(window.location.pathname),
        link_text: (link.textContent || '').trim().slice(0, 100),
        link_url: link.getAttribute('href'),
      });
    };

    // Capture phase: these links open a new tab or hand off to another app, and
    // a bubbling listener can lose the event when the page starts unloading.
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);
}
