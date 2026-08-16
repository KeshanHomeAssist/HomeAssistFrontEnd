# Cutover: WordPress → this site

The live homeassist.co.za is WordPress with Elementor, WooCommerce, Yoast and WP
Job Manager: roughly 58 pages, 8 blog posts and 2 products. This site is 8 pages
and 7 articles.

That gap is the whole risk of the cutover. Most of the 58 pages are empty shells
and are no loss — but not all of them, and the ones that matter are the ones
currently earning.

---

## 1. What this site does not replace

Decide on each of these **before** you point the root domain here.

### WooCommerce — you currently sell two things

| URL | Product | Price |
|---|---|---|
| `/product/smart-meter/` | Smart Water Meter | R3,249.00 |
| `/product/pipe-betterment/` | Pipe Betterment | R405.00 |

There is no shop, cart, or checkout in this build. Cutting over removes your
ability to take those orders online. Options: keep WooCommerce running on a
subdomain (`shop.homeassist.co.za`), move the products to an enquiry form, or
accept the loss deliberately.

Note `/shop/` currently renders PHP warnings above the page content, exposing the
server path, so it is not in good shape either way.

### Smart meters — a whole product line with real content

`/smart-meters/`, `/meter-hardware/`, `/watermeterinfo/`, `/installation/`,
`/pricing/`, and the two T&C pages all carry genuine content about the water and
electricity meter business. None of it exists on the new site.

If smart meters are still a live line, this site needs a page for them before
cutover. If they are not, say so explicitly and redirect the URLs — but do not
let it happen by accident.

### Pricing

`/pricing/` publishes four price bands today. The new site has no pricing page,
and several prices are still `[CONFIRM]` placeholders. Anyone arriving on an old
pricing link will land somewhere with less information than they had.

### Careers and jobs

`/careers/` lists a live role. `/jobs/` is a WP Job Manager board with nothing
published. The new site has no careers page. `/join` is for contractors, not
staff — sending job applicants there is wrong.

### Complaints policy

`/complaints/` carries a full complaints policy and the PIRB audit process. For
an insurance-adjacent business this is worth keeping accessible, and it may be a
compliance expectation. There is no equivalent page here.

### Customer logins

`/my-account/` and `/job-dashboard/` are functional WordPress account pages.
Check whether anyone actually uses them before removing them — the new `/portal`
links to `portal.homeassist.co.za`, which is a different system.

---

## 2. Fix these regardless of cutover

**`/staff-leave-request-form/` is an internal HR form on the public website.**
It should not be publicly reachable. Take it down today, independently of this
project.

**`/services/` is unedited theme demo content** — lorem ipsum, placeholder
headings and the fake phone number `1-800-1234-567`, live and crawlable.

**`/shop/` leaks PHP warnings** that expose `/usr/www/users/homeahrrnr/...` to
visitors and crawlers.

**`/platform-learn-more/` still says "the Aqueduct platform"** — a brand name you
no longer use.

**Contact details contradict each other across six pages** — four phone numbers
and two addresses published simultaneously. This site standardises on
087 095 5231, WhatsApp +27 71 526 2554, and 12 Uitvlugt Road, Pinelands. Confirm
that is right, because it is now in the JSON-LD that Google reads.

---

## 3. Redirect map

Every old URL that has content should land somewhere sensible, not on a 404.
Without these you lose whatever search ranking those pages have.

Paste into the production `.htaccess` **at cutover** (not on staging), inside the
existing `<IfModule mod_rewrite.c>` block, above the canonical-host rule:

```apache
# --- WordPress URL retirement, added at cutover ---
Redirect 301 /about/                                /about
Redirect 301 /our-story/                            /about
Redirect 301 /leadership/                           /about
Redirect 301 /why-us/                               /about
Redirect 301 /me/                                   /
Redirect 301 /customer-tech/                        /

# Services -> home (the service detail lives in the home page sections)
Redirect 301 /services/                             /
Redirect 301 /geysers/                              /
Redirect 301 /geyser-replacement/                   /
Redirect 301 /leak-detection/                       /
Redirect 301 /burst-pipe-repair/                    /
Redirect 301 /emergency-plumbing-work/              /
Redirect 301 /electrical-water-heater-warranty/     /

# B2B
Redirect 301 /insurer-landing-page/                 /insurers
Redirect 301 /insurance-get-started/                /insurers
Redirect 301 /insurance-tech/                       /insurers
Redirect 301 /broker-technology-page/               /insurers
Redirect 301 /insurance-partners/                   /insurers
Redirect 301 /geyser-manufacturing-partners/        /insurers

# Contractors
Redirect 301 /plumber-home/                         /join
Redirect 301 /plumber-get-started/                  /join
Redirect 301 /plumber-tech/                         /join
Redirect 301 /get-started/                          /join

# Portal / accounts
Redirect 301 /my-account/                           /portal
Redirect 301 /job-dashboard/                        /portal

# Contact and legal
Redirect 301 /contact/                              /about
Redirect 301 /contact-page/                         /about
Redirect 301 /email-us/                             /about
Redirect 301 /faq/                                  /#faq
Redirect 301 /legal/                                /terms
Redirect 301 /privacy-policy-3/                     /privacy-policy

# Blog
Redirect 301 /blog/                                 /blog
Redirect 301 /what-does-homeassist-do/              /blog
Redirect 301 /subscription-plans-for-smart-water-and-electrical-meters/ /blog
Redirect 301 /blog-smart-water-meters-save-money/   /blog
Redirect 301 /video-burst-geyser-explained/         /blog/what-to-do-in-the-first-ten-minutes-after-your-geyser-bursts
Redirect 301 /gap-warranty-after-sales-support/     /blog/how-to-tell-if-your-geyser-is-still-under-warranty
Redirect 301 /anode-infographic/                    /blog
Redirect 301 /home-assist-fighting-covid-19/        /blog
Redirect 301 /covid-safety/                         /blog

# Retired outright — 410 tells Google to drop them rather than keep retrying
Redirect 410 /sample-page-2/
Redirect 410 /elementor-4445/
Redirect 410 /top-bar-header/
Redirect 410 /home-alternative/
Redirect 410 /journey/
Redirect 410 /sustainability/
Redirect 410 /resources/
Redirect 410 /technology/
Redirect 410 /staff-leave-request-form/
Redirect 410 /meter-inquiry-form-step-3/
```

**Deliberately not in this list**, because they need a decision first:

```
/smart-meters/  /meter-hardware/  /watermeterinfo/  /installation/  /pricing/
/smart-digital-water-meter-tscs/  /prepaid-water-meter-tscs/
/shop/  /product/smart-meter/  /product/pipe-betterment/  /cart-2/  /checkout/
/careers/  /jobs/  /complaints/  /platform-learn-more/
```

Add them once you have decided whether the content moves, gets rebuilt here, or
is retired.

---

## 4. Cutover sequence

1. Back up WordPress files and database. Verify the backup opens.
2. Export the current Yoast sitemap URL list — a record of what was indexed.
3. Decide the shop / smart meters / careers / complaints questions above.
4. Deploy this site to staging and click through every page on a phone.
5. Add the redirect block to the production `.htaccess`.
6. Deploy to production.
7. Purge the Cloudflare cache.
8. In Google Search Console: submit the new sitemap, remove the old one.
9. Spot-check ten old URLs and confirm each redirects where you expect.
10. Watch Search Console coverage for two weeks. A dip is normal; a cliff is not.

Keep the WordPress install on the server, unreachable but intact, for at least a
month. It costs nothing and it is the difference between a fix and a crisis.
