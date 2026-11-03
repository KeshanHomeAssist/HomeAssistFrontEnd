const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

/* /rewards — Home Assist Rewards, version 2 (3 November 2026).

   WHAT CHANGED FROM VERSION 1 (never launched)
   Version 1 offered a solar upgrade, a smart water meter and a Geyserwise
   Max in one draw. Version 2, on Keshan's instruction, is a festive thank-you
   to geyser replacement customers only: three monthly rounds (November,
   December, January), each awarding five Sonoff 32 A smart geyser
   controllers (installed by a qualified electrician, with a COC) and five
   R100 coffee vouchers. Draws on Fri 4 Dec 2026, Fri 8 Jan 2027 and
   Fri 5 Feb 2027; controllers installed within 15 days of each draw.

   LEGAL ANCHOR: every promotion of the draw (Facebook cards, homepage hero,
   geyser page strip, smart homes note) says "Terms apply" and points here,
   because CPA s36(5) requires the offer to say where the rules are. The
   rules are printed in full, open, at the bottom — not in an accordion —
   so they are visible before entry and in the prerendered HTML.

   RULES TEXT IS COPIED FROM THE CLAUDE DOC: "Home Assist Rewards Draw —
   Competition Rules", rev 37, 3 November 2026. The doc is the master; if it
   changes, change RwRules below word for word and bump RW_RULES_UPDATED.

   OPEN [CONFIRM] PLACEHOLDER (verify-build warns): draw time and place
   (rules 5.1). Fill it before production.

   THE WHEEL (RewardsWheel, in Chrome.jsx) is decorative on this page. The
   real draw uses the internal draw tool, overseen by Parker and Associates,
   and the page says so.

   PRIZE PHOTO: the real Sonoff unit (/assets/illustrations/
   reward-sonoff-din-rail.webp) on this page, per Keshan; the Home Assist
   branded illustration is used on the homepage hero instead. App screens
   are from Keshan's own installation.

   SAVING CLAIM: "more than R300 a month, based on our own installations" —
   Keshan's figure. Keep the "based on our own installations" qualifier and
   keep measured before/after examples on file.

   CTA REFS: REWARDS-1 (hero), REWARDS-2 (navy band). */

const RW_RULES_UPDATED = '3 November 2026';  // doc rev 37

const RW_MSG = 'Hi Home Assist, I need a geyser replaced and I would like to enter Home Assist Rewards. ';

const RW_ROUNDS = [
  ['November 2026', 'Friday 4 December 2026', 'by 19 December'],
  ['December 2026', 'Friday 8 January 2027', 'by 23 January'],
  ['January 2027', 'Friday 5 February 2027', 'by 20 February']
];

const RW_STEPS = [
  ['01', 'We replace your geyser', 'Any electric geyser replacement completed by Home Assist in November, December or January, insured or private.'],
  ['02', 'You say yes', 'After the job we send you an email or WhatsApp. Reply yes, or tap the link, and you are in that month’s draw.'],
  ['03', 'We spin on the first Friday', 'Five smart geyser controllers and five coffee vouchers every month. Winners are called the same day, and controllers are fitted within 15 days.']
];

const RW_P = { ...BODY, fontSize: 15, maxWidth: '76ch' };
const RW_H = { ...H3, fontSize: 18, margin: '28px 0 10px' };
const RW_LIST = { ...BODY, fontSize: 15, maxWidth: '72ch', paddingLeft: 22, margin: '0 0 12px', display: 'flex', flexDirection: 'column', gap: 6 };
const RW_TD = { ...BODY, fontSize: 14, margin: 0, padding: '10px 8px', borderBottom: '1px solid var(--web-grey-100)', verticalAlign: 'top', textAlign: 'left' };

function RwRules({ go }) {
  const a = function (page, label) {
    return <a href={'#/' + page} onClick={function (e) { e.preventDefault(); go(page); }} style={{ color: 'var(--web-blue)' }}>{label}</a>;
  };
  return <div>
    <h3 style={{ ...RW_H, marginTop: 0 }}>In short</h3>
    <p style={RW_P}>Replace your geyser with Home Assist in November 2026, December 2026 or January 2027, say yes when we message you after the job, and you are in that month&rsquo;s draw. It costs nothing extra. Each month we draw five winners of a smart geyser controller, fitted free by a qualified electrician with a certificate of compliance (worth R1,500+), and five winners of a R100 coffee voucher. Draws are on Friday 4 December 2026, Friday 8 January 2027 and Friday 5 February 2027, and controllers are installed within 15 days of each draw.</p>

    <h3 style={RW_H}>1. Promoter and competition period</h3>
    <p style={RW_P}>1.1 The promoter is Home Assist Technologies Proprietary Limited, registration number 2016/243716/07, 12 Uitvlugt Road, Pinelands, Cape Town, 7405 (&ldquo;Home Assist&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;).</p>
    <p style={RW_P}>1.2 The competition runs from 00:01 on 1 November 2026 to 23:59 on 31 January 2027, in three monthly rounds: November 2026, December 2026 and January 2027. A qualifying job (clause 2.1) is entered into the round for the calendar month in which it was completed.</p>
    <p style={RW_P}>1.3 The competition is open in South Africa wherever Home Assist replaces geysers.</p>
    <p style={RW_P}>1.4 These rules are prepared under section 36 of the Consumer Protection Act 68 of 2008 and regulation 11. A copy is free on request from help@homeassist.co.za or 087 095 5231, and on www.homeassist.co.za/rewards. We keep these rules and the competition records for at least three years.</p>

    <h3 style={RW_H}>2. Who can enter and who cannot</h3>
    <p style={RW_P}>2.1 You can enter if you are 18 or older and Home Assist replaced the geyser at your property during the competition period. This covers insurance claims and private jobs. Only a full geyser replacement counts: repairs, element or thermostat replacements, and geysers replaced by a manufacturer under warranty do not.</p>
    <p style={RW_P}>2.2 You are disqualified, and are not entered at all, if:</p>
    <ul style={RW_LIST}>
      <li>you are an insured customer and your excess has not been paid;</li>
      <li>you are a private customer and your account is not paid in full within 7 days of the job being completed;</li>
      <li>you paid short on your account, for any reason.</li>
    </ul>
    <p style={RW_P}>2.3 Payment owed to Home Assist by your insurer is not your responsibility and does not affect your entry.</p>
    <p style={RW_P}>2.4 The following people cannot win: directors, members, partners, employees, agents and consultants of Home Assist; anyone who controls or is controlled by Home Assist; our service providers and suppliers connected with this competition; and the spouses, life partners, business partners and immediate family of any of them.</p>

    <h3 style={RW_H}>3. How to enter</h3>
    <p style={RW_P}>3.1 There is no entry fee, and you do not pay more for your geyser replacement because of this competition.</p>
    <p style={RW_P}>3.2 After your geyser replacement is completed, we send you an email or WhatsApp message inviting you to enter. To enter, reply &ldquo;yes&rdquo; or tap the link in that message before the end of the month in which your job was completed. You can also enter by messaging our WhatsApp line or help@homeassist.co.za with your job or case number.</p>
    <p style={RW_P}>3.3 Once you have accepted and you meet clause 2, you are entered into that month&rsquo;s draw. You get one entry per geyser replaced. An entry does not carry over to a later month.</p>
    <p style={RW_P}>3.4 We confirm your entry on the channel you replied on.</p>

    <h3 style={RW_H}>4. The prizes</h3>
    <div style={{ overflowX: 'auto', marginBottom: 14 }}>
      <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 620 }}>
        <thead>
          <tr>
            {['Prize', 'What it is', 'How many each month', 'Approximate value'].map(function (h) {
              return <th key={h} style={{ ...LABEL, textAlign: 'left', padding: '10px 8px', borderBottom: '2px solid var(--web-navy)' }}>{h}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {[
            ['Smart geyser controller', 'A Sonoff 32 A DIN-rail smart geyser controller fitted in your distribution board by a qualified electrician, with a certificate of compliance, connected to the app on your phone', '5', 'R1,500+ installed'],
            ['Coffee voucher', 'A R100 coffee voucher, delivered digitally by email or WhatsApp', '5', 'R100']
          ].map(function (row) {
            return <tr key={row[0]}>{row.map(function (c, i) { return <td key={i} style={RW_TD}>{c}</td>; })}</tr>;
          })}
        </tbody>
      </table>
    </div>
    <p style={RW_P}>4.1 <strong>The controller prize includes:</strong> the controller, installation in your distribution board by a qualified electrician, any electrical work needed to install it, the certificate of compliance, and help setting up the app on your phone.</p>
    <p style={RW_P}>4.2 <strong>The controller prize needs</strong> a distribution board with space for the unit, a working Wi-Fi connection at the property, and a smartphone to run the app. If your property cannot take the unit, we will say so at the site check and the prize passes to the next reserve (clause 5.4).</p>
    <p style={RW_P}>4.3 Prizes cannot be exchanged for cash or transferred to another person or property.</p>
    <p style={RW_P}>4.4 Thirty prizes are awarded in total over the three rounds: 15 controllers and 15 coffee vouchers.</p>

    <h3 style={RW_H}>5. How winners are chosen</h3>
    <p style={RW_P}>5.1 Each round has one random draw after that month ends:</p>
    <ul style={RW_LIST}>
      <li>November 2026 round: Friday 4 December 2026</li>
      <li>December 2026 round: Friday 8 January 2027</li>
      <li>January 2027 round: Friday 5 February 2027</li>
    </ul>
    <p style={RW_P}>Each draw is held at <Confirm>time and place</Confirm>. Skill plays no part.</p>
    <p style={RW_P}>5.2 The draws are overseen and certified by an independent accountant, Parker and Associates Accountants and Business Advisors Inc. (registration number 2018/556586/21), as regulation 11(5) requires.</p>
    <p style={RW_P}>5.3 In each draw, entries are drawn one at a time at random, and a prize wheel with two prize segments, smart geyser controller and coffee voucher, and spin-again segments decides which prize the drawn entry wins. Drawing continues until five controllers and five coffee vouchers have been awarded, and then three reserves for each prize, in order. Once a prize has five winners, its segments count as spin again. No entry is drawn twice, and no entrant wins more than one prize in a round.</p>
    <p style={RW_P}>5.4 Before a prize is confirmed we check the entry against clause 2. If an entry fails, the winner cannot be reached under clause 6.2, or the property cannot take the controller under clause 4.2, the prize goes to the next reserve for that prize.</p>
    <p style={RW_P}>5.5 You do not need to be present at the draw.</p>

    <h3 style={RW_H}>6. Announcing and contacting winners</h3>
    <p style={RW_P}>6.1 We contact winners by phone, email or WhatsApp on the day of the draw or within 3 business days, using the details on the job.</p>
    <p style={RW_P}>6.2 If we cannot reach a winner within 7 days after at least three attempts, the prize goes to the next reserve. We keep a record of every attempt.</p>
    <p style={RW_P}>6.3 Results are announced on the Home Assist Facebook page and on www.homeassist.co.za/rewards on the day of each draw. We publish the winner&rsquo;s first name and suburb only, unless the winner agrees to more.</p>

    <h3 style={RW_H}>7. Receiving the prize and installation</h3>
    <p style={RW_P}>7.1 Controllers are installed within 15 days of the draw, on a date agreed with each winner. Coffee vouchers are sent by email or WhatsApp within 3 business days of the draw.</p>
    <p style={RW_P}>7.2 Before installation we do a short check of the distribution board and Wi-Fi at the property. If the property cannot take the unit (clause 4.2), the prize passes to the next reserve.</p>
    <p style={RW_P}>7.3 An adult who can give access must be at the property on the installation day.</p>
    <p style={RW_P}>7.4 The winner signs an acknowledgement on receipt of the prize, with their ID number and the date.</p>
    <p style={RW_P}>7.5 The installed controller carries the manufacturer&rsquo;s warranty and Home Assist&rsquo;s workmanship warranty, as for any other Home Assist installation.</p>
    <p style={RW_P}>7.6 To measure the saving, we may ask a controller winner for a recent municipal electricity bill, or proof of about five weeks of prepaid electricity purchases, before and after installation. Providing it is optional and does not affect the prize.</p>

    <h3 style={RW_H}>8. Publicity and filming — your choice</h3>
    <p style={RW_P}>8.1 We would like to share winners&rsquo; stories, savings and installation photos on our website, social media and in a media release.</p>
    <p style={RW_P}>8.2 Taking part is optional. You may decline any filming, photos or marketing activity, or ask to be anonymised, and that does not affect your prize.</p>

    <h3 style={RW_H}>9. Personal information</h3>
    <p style={RW_P}>9.1 We use your name, contact details, job details and, if you give it, your electricity bill to run this competition, contact winners, measure savings and keep the records the law requires, in line with POPIA and our {a('privacy', 'Privacy Policy')}.</p>
    <p style={RW_P}>9.2 We will only send you marketing email if you agree to it. You can opt out at any time.</p>
    <p style={RW_P}>9.3 We do not sell or share your information for anyone else&rsquo;s marketing.</p>

    <h3 style={RW_H}>10. General</h3>
    <p style={RW_P}>10.1 Once a draw result is determined, the winner&rsquo;s right to the prize is vested. No conditions apply other than those in these rules.</p>
    <p style={RW_P}>10.2 If a prize item becomes unavailable, we will substitute an item of equal or greater value.</p>
    <p style={RW_P}>10.3 We may disqualify an entry that involves fraud or dishonesty.</p>
    <p style={RW_P}>10.4 Complaints about the competition follow our {a('complaints', 'Complaints Policy')}: complaints@homeassist.co.za or 087 095 5231.</p>
    <p style={RW_P}>10.5 These rules are governed by South African law. Nothing in them limits your rights under the Consumer Protection Act.</p>

    <p style={{ ...SMALL, marginTop: 24 }}>Rules last updated {RW_RULES_UPDATED}. A copy is free on request from {CH.help} or {CH.phone}.</p>
  </div>;
}

function RewardsPage({ go }) {
  return <main className="ha-rw">

    {/* Hero: navy left (message), white right (the wheel). Edge to edge,
        flowing into the white section below. */}
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#fff' }}>
      <div data-hero-text style={{ background: 'var(--web-navy)', padding: '64px 48px 64px max(40px, calc((100vw - 1200px) / 2 + 40px))', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Eyebrow onDark>Home Assist Rewards · festive thank-you</Eyebrow>
        <h1 style={{ ...DISPLAY, color: '#fff', maxWidth: '20ch', marginBottom: 18 }}>Replace your geyser with us. Spin to win a smart geyser controller.</h1>
        <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', fontSize: 17, maxWidth: '54ch', marginBottom: 26 }}>Every geyser we replace in November, December and January goes into that month&rsquo;s draw. Five customers win a smart geyser controller fitted free by a qualified electrician, worth R1,500+, and five win a R100 coffee voucher. It costs nothing extra, and your geyser costs exactly the same with or without the draw.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
          <Button as="a" size="lg" variant="onDark" target="_blank" rel="noopener" href={wa(RW_MSG, 'REWARDS-1')}
            iconLeft={<Icon name="message-circle" size={18} color="var(--web-navy)" />}>Replace your geyser with us</Button>
          <Button as="a" size="lg" variant="ghost" href="#rules" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}
            iconLeft={<Icon name="file-text" size={18} color="#fff" />}>See the rules</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px 20px', maxWidth: 520 }}>
          {[['calendar', 'Three draws: 4 Dec, 8 Jan, 5 Feb'], ['gift', '10 winners every month'], ['zap', 'Fitted within 15 days of the draw'], ['shield-check', 'Overseen by an independent accountant']].map(function (row) {
            return <div key={row[1]} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <Icon name={row[0]} size={16} color="var(--web-blue-300)" />
              <span style={{ ...SMALL, color: 'rgba(255,255,255,.85)', fontSize: 13 }}>{row[1]}</span>
            </div>;
          })}
        </div>
      </div>
      <div style={{ background: '#fff', padding: '40px max(40px, calc((100vw - 1200px) / 2 + 40px)) 36px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <a href="#how" className="ha-rw-badge" style={{ marginBottom: 18 }} aria-label="Spin and win: see how the draw works">
          <Icon name="gift" size={24} color="#fff" />
          <span>Spin &amp; Win</span>
        </a>
        <RewardsWheel size={340} />
      </div>
    </section>

    {/* How it works */}
    <Section id="how" eyebrow="How it works" title="Three steps, and you only do one of them"
      intro="There is no form and nothing to buy. Your entry comes from a geyser we replaced for you.">
      <Steps items={RW_STEPS} />
      <p style={{ ...SMALL, marginTop: 20, maxWidth: '76ch' }}>One entry per geyser replaced, in the month the job was completed. Insured customers need their excess paid; private customers need their account paid in full within 7 days. If your insurer has not yet paid us, that does not count against you.</p>
    </Section>

    {/* The prize */}
    <Section tint id="prize" eyebrow="The prize" title="A smart geyser controller, fitted free">
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 40, alignItems: 'center' }}>
        <div>
          <img src="/assets/illustrations/reward-sonoff-din-rail.webp" width="1200" height="900" loading="lazy"
            alt="The Sonoff Basic DIN Rail smart switch and its box"
            style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid var(--web-grey-100)', background: '#fff', display: 'block' }} />
          <p style={{ ...SMALL, marginTop: 8 }}>The unit. Sonoff Basic DIN Rail, 32 A, fitted inside your distribution board.</p>
        </div>
        <div>
          <div style={{ ...LABEL, color: 'var(--web-blue)', marginBottom: 8 }}>Five every month · worth R1,500+ installed</div>
          <h3 style={{ ...H3, margin: '0 0 12px' }}>Your geyser on a schedule, from your phone</h3>
          <p style={{ ...BODY, marginBottom: 14 }}>The controller clips into your distribution board and puts the geyser on a timer you set in the app, so the element is not running when nobody needs hot water. You see what it uses, and you can switch it off from anywhere.</p>
          <ul style={{ ...BODY, paddingLeft: 20, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>Installed by a qualified electrician, with a certificate of compliance</li>
            <li>Any electrical work needed to fit it is included</li>
            <li>Schedules, a countdown timer and an off switch in the app</li>
            <li>Live power and daily, monthly and yearly consumption</li>
            <li>Saves more than R300 a month, based on our own installations</li>
          </ul>
          <div style={{ ...CARD, padding: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
            <Icon name="coffee" size={22} color="var(--web-blue)" />
            <div>
              <div style={{ font: '700 15px/1.3 var(--font-core)', color: 'var(--web-navy)' }}>Plus five R100 coffee vouchers a month</div>
              <div style={{ ...SMALL, margin: 0 }}>Sent to your phone or inbox on the day of the draw.</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 36 }}>
        {[
          ['app-geyser-garage.webp', 'Live power, today’s use and an on/off switch'],
          ['app-timer.webp', 'Schedules, loop timers and a random timer'],
          ['app-consumption.webp', 'Consumption by day, week, month or year']
        ].map(function (r) {
          return <div key={r[0]} style={{ textAlign: 'center' }}>
            <img src={'/assets/illustrations/' + r[0]} width="310" height="674" loading="lazy" alt={r[1]}
              style={{ width: 200, height: 'auto', borderRadius: 24, border: '6px solid var(--web-navy)', display: 'inline-block' }} />
            <p style={{ ...SMALL, marginTop: 10 }}>{r[1]}</p>
          </div>;
        })}
      </div>
      <p style={{ ...SMALL, marginTop: 14 }}>App screens from a Home Assist installation. The controller is a Sonoff product; Home Assist supplies and installs it.</p>
    </Section>

    {/* The draws */}
    <Section eyebrow="The draws" title="Three Fridays, thirty prizes">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {RW_ROUNDS.map(function (r) {
          return <div key={r[0]} style={CARD}>
            <div style={{ ...LABEL, color: 'var(--web-blue)', marginBottom: 8 }}>{r[0]} geyser replacements</div>
            <div style={{ font: '700 20px/1.25 var(--font-core)', color: 'var(--web-navy)', marginBottom: 8 }}>Draw: {r[1]}</div>
            <p style={{ ...BODY, fontSize: 14, margin: 0 }}>5 controllers, 5 coffee vouchers. Winners called the same day; controllers fitted {r[2]}.</p>
          </div>;
        })}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 20 }}>
        <div style={CARD}>
          <Icon name="shuffle" size={20} color="var(--web-blue)" />
          <div style={{ ...LABEL, margin: '12px 0 8px' }}>Random, by case number</div>
          <p style={{ ...BODY, fontSize: 14, margin: 0 }}>Entries are drawn one at a time, and the wheel decides whether that entry wins a controller or a voucher. The wheel on this page spins for show.</p>
        </div>
        <div style={CARD}>
          <Icon name="shield-check" size={20} color="var(--web-blue)" />
          <div style={{ ...LABEL, margin: '12px 0 8px' }}>Independently overseen</div>
          <p style={{ ...BODY, fontSize: 14 }}>Each draw is overseen and certified by Parker and Associates, an independent firm of accountants, as the Consumer Protection Act requires.</p>
          <a href="https://parkercorp.co.za/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
            <img src="/assets/logo/logo-parker-associates.webp" alt="Parker and Associates, Accountants and Business Advisors" width="500" height="120"
              style={{ height: 40, width: 'auto', display: 'block' }} />
          </a>
        </div>
        <div style={CARD}>
          <Icon name="megaphone" size={20} color="var(--web-blue)" />
          <div style={{ ...LABEL, margin: '12px 0 8px' }}>Announced the same day</div>
          <p style={{ ...BODY, fontSize: 14, margin: 0 }}>Winners are announced on our Facebook page and here, first name and suburb only. If we cannot reach a winner within 7 days, the prize goes to a reserve.</p>
        </div>
      </div>
    </Section>

    {/* CTA */}
    <NavyBand eyebrow="Replacing a geyser?" title="Replace it with Home Assist this month and you are in the draw.">
      <Button as="a" size="lg" variant="onDark" target="_blank" rel="noopener" href={wa(RW_MSG, 'REWARDS-2')}
        iconLeft={<Icon name="message-circle" size={18} color="var(--web-navy)" />}>WhatsApp us about a geyser replacement</Button>
      <Button size="lg" variant="ghost" onClick={function () { go('geyserReplacements'); }} style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}
        iconLeft={<Icon name="flame" size={18} color="#fff" />}>Geyser replacement prices</Button>
    </NavyBand>

    {/* Full rules */}
    <Section id="rules" narrow eyebrow="Terms and conditions" title="Competition rules in full">
      <RwRules go={go} />
    </Section>
  </main>;
}

Object.assign(window, { RewardsPage });
