#!/usr/bin/env python3
"""Fourth change set: Cloudflare Access replaces the client-side email gate."""
import sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
P = ROOT / 'design-export' / 'website' / 'InsurersPage.jsx'
s = P.read_text()

start_marker = 'function InsurersGate({ onUnlock }) {'
end_marker = '  </React.Fragment>;\n}'
if start_marker not in s:
    sys.exit('ABORT: InsurersGate not found')
start = s.index(start_marker)
end = s.index(end_marker, start) + len(end_marker)

replacement = """/* The email gate that used to live here is gone.

   It was a client-side modal: it blurred the page with CSS, kept the content in
   the page source where anyone could read it with View Source, let Google index
   the lot, and captured the address nowhere. It looked like a gate without
   being one.

   Cloudflare Access now protects /insurers. It verifies the address with a
   one-time PIN before the page is served at all, and logs every entry with a
   timestamp — so the commercial detail is genuinely private, and you know
   exactly who read it. */

function InsurersPage() {
  return <InsurersBody />;
}"""

P.write_text(s[:start] + replacement + s[end:])
print("  InsurersPage.jsx: client-side gate removed")

# A page behind Access cannot be crawled, so stop advertising it.
SEO = ROOT / 'src' / 'seo.js'
t = SEO.read_text()
old = """    description:
      'Turnkey property claims management for South African insurers, UMAs and brokers. Surge FNOL capacity, incident verification, pro-forma costing and COC collection — built to bring the loss ratio down.',
    schema: ["""
new = """    description:
      'Turnkey property claims management for South African insurers, UMAs and brokers. Surge FNOL capacity, incident verification, pro-forma costing and COC collection — built to bring the loss ratio down.',
    // Behind Cloudflare Access — Googlebot cannot answer a one-time PIN, so the
    // page is unreachable to crawlers. Keeping it in the sitemap would just
    // report a soft error in Search Console. Remove this if the page is split
    // into a public overview plus a gated commercial section.
    noindex: true,
    schema: ["""
if t.count(old) != 1:
    sys.exit('ABORT: /insurers seo entry not found as expected')
SEO.write_text(t.replace(old, new))
print("  src/seo.js: /insurers marked noindex and dropped from the sitemap")
