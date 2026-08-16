# Deploying homeassist.co.za

Runbook for getting this repo onto xneelo, behind Cloudflare, without taking the
live WordPress site down before you mean to.

Read `CUTOVER.md` before you point the root domain here — the current site has
pages this one does not replace.

---

## 0. Before you start

You need:

- Node 20+ and `lftp` locally (`brew install lftp` on macOS).
- konsoleH access to the xneelo hosting account.
- Cloudflare dashboard access for `homeassist.co.za`.
- A backup of the current WordPress site and its database. Take one now, not at
  cutover. xneelo keeps its own backups, but a copy you control is the one you
  will actually be able to restore from in a hurry.

---

## 1. Build

```bash
npm install
npm run build
npm run verify
npm run serve:dist   # open http://localhost:4173 and click through every page
```

`npm run verify` fails the build on broken references, missing metadata, empty
pages, or lorem ipsum. It warns on long titles and unresolved `[CONFIRM]`
placeholders. Do not upload a build that fails.

---

## 2. Staging: staging.homeassist.co.za on Cloudflare Pages

**Decided 16 August 2026.** Staging runs on Cloudflare Pages with the custom
domain `staging.homeassist.co.za`. Production goes to xneelo.

This gets the real hostname without buying a second xneelo hosting package, and
without any credential that can write to the account the live WordPress site
sits on. It rebuilds on every push to `main`.

### Set it up once

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**, and pick `KeshanHomeAssist/HomeAssistFrontEnd`.
2. Build settings:
   - Framework preset: **None**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: set the environment variable `NODE_VERSION` to `20`
3. Deploy. You get a `*.pages.dev` URL in a couple of minutes.
4. In the Pages project → **Custom domains** → **Set up a custom domain** →
   `staging.homeassist.co.za`. Because the zone is already on Cloudflare, the
   DNS record is created for you and the certificate is issued automatically.

`public/_headers` gives Pages the same caching and security headers that
`.htaccess` gives Apache, so staging and production behave the same. Note that
**`.htaccess` does nothing on Pages** — if you change one, change both.

### Keep staging out of Google

A real hostname will get crawled. Pick one:

- **Cloudflare Access** (Zero Trust → Access → Applications) in front of
  `staging.homeassist.co.za`, restricted to your team's email addresses. Free at
  your scale, and it keeps the work private as well as unindexed. This is the
  better option.
- Or a **Response Header Transform Rule** on hostname
  `staging.homeassist.co.za` setting `X-Robots-Tag: noindex, nofollow`.

Do not rely on editing `robots.txt`, because that file is shared with the
production build.

### If you later want staging on xneelo instead

An xneelo subdomain is added in the Control Panel as its own hosting package or
as a Parked/Multiple domain, and **applicable hosting fees apply**. It needs its
own document root — confirm the exact path in konsoleH before the first upload,
because pointing `STAGING_REMOTE_DIR` at the wrong directory uploads this site
straight over the WordPress install. `deploy/deploy.sh staging` is already set up
for that route if you take it.

---

## 3. Upload

```bash
cp deploy/.env.deploy.example deploy/.env.deploy
# fill in the credentials, then:
./deploy/deploy.sh staging
```

FTP details are in konsoleH under your hosting service → **Configuration** →
**FTP Users**. The username is shown there; you set the password yourself and
xneelo does not store it, so keep your own record. Transfers go over **SFTP on
port 22** — the deploy script is already set up for that.

`deploy/.env.deploy` is gitignored. Keep it that way: those credentials give
write access to the entire hosting account, including the WordPress install.

The script runs `npm run verify` before uploading and, for `production`, asks you
to type `deploy` to confirm.

---

## 4. Cloudflare settings

Your DNS is already on Cloudflare, so the only things to get right are these.

**SSL/TLS mode: Full (strict).**
This matters more than it looks. `public/.htaccess` forces HTTPS by reading the
`X-Forwarded-Proto` header that Cloudflare sends, rather than `%{HTTPS}`. If the
SSL mode were left on **Flexible**, Cloudflare would talk to xneelo over plain
HTTP, and a `%{HTTPS}`-based redirect would loop forever. The header-based rule
avoids that trap, but Full (strict) is still the correct setting: it encrypts the
Cloudflare-to-xneelo leg and validates the origin certificate. Make sure xneelo
has a valid certificate installed for the hostname first.

**Always Use HTTPS: on.** Belt and braces with the `.htaccess` rule.

**Auto Minify: off.** The build already minifies. Doubling up occasionally breaks
things and gains nothing.

**Brotli: on.**

**Caching level: Standard.** The `Cache-Control` headers in `.htaccess` do the
real work: build assets are immutable for a year (they carry a content hash in
the filename), images a month, HTML must revalidate.

**After every deploy: purge the cache.** Cloudflare → Caching → Configuration →
Purge Everything. Skip this and people keep seeing the old HTML. Worth adding to
the deploy habit, not just remembering.

**Bot Fight Mode: leave off** until after launch. It can interfere with search
engine crawlers and with uptime monitoring.

---

## 5. Going live

Do not do this until you have worked through `CUTOVER.md`. When you have:

```bash
npm run build
npm run verify
./deploy/deploy.sh production
```

Then purge the Cloudflare cache.

---

## 6. Straight after launch

- Load the site in a private window on a phone and on a desktop.
- Check `https://www.homeassist.co.za/sitemap.xml` loads and lists 14 URLs.
- Check `https://www.homeassist.co.za/robots.txt` points at that sitemap.
- Submit the sitemap in Google Search Console and request indexing for `/` and
  `/insurers`.
- Test a URL that no longer exists — it should show the Home Assist 404 page,
  not an Apache error.
- Run the home page and `/insurers` through PageSpeed Insights and keep the
  numbers as a baseline.
- Check the redirects from `CUTOVER.md` actually resolve, especially the ones
  for the old blog posts.

---

## Rolling back

The previous WordPress site is a directory of files and a database. If you keep
the WordPress install in place and deploy this site to a different document root
until you are confident, rolling back is a DNS or document-root change rather
than a restore. That is the main reason to stage properly rather than overwrite
`public_html` on day one.

---

Sources for the xneelo specifics above:

- [Where to find your FTP login details via konsoleH](https://xneelo.co.za/help-centre/website/find-ftp-details/)
- [How to order a subdomain via the xneelo Control Panel](https://xneelo.co.za/help-centre/control-panel/how-to-order-a-subdomain/)
- [How to order a subdomain via konsoleH](https://xneelo.co.za/help-centre/products-and-services/order-sub-domain/)
