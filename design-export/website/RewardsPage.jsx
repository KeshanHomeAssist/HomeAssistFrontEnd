const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

/* /rewards — the Home Assist Rewards draw.

   Built 19 October 2026. This page is the legal anchor for the whole
   campaign: every Facebook card, the homepage rewards hero and the specials on
   /geyser-replacements and /leak-detection say "Terms apply" and point here.
   NOTHING THAT PROMOTES THE DRAW MAY GO LIVE BEFORE THIS PAGE DOES.

   WHY THE RULES ARE PRINTED IN FULL, NOT IN AN ACCORDION
   Consumer Protection Act s36(5) requires the offer itself to state the
   benefit, the steps to enter, how winners are chosen, the closing date, how
   results are announced, and where the rules can be obtained. Collapsing the
   rules behind a toggle also keeps them out of the prerendered HTML. So the
   full rules sit open at the bottom of the page.

   THE RULES TEXT IS COPIED FROM THE CLAUDE DOC, NOT WRITTEN HERE
   "Home Assist Rewards Draw — Competition Rules" (rev 33, 19 October 2026).
   If the doc changes, change RW_RULES below to match it word for word, and
   update RW_RULES_UPDATED. The doc is the master; this page is the copy.

   OPEN [CONFIRM] PLACEHOLDERS (verify-build warns on each one):
   - launch date (rules 1.2)         — the day this page goes live
   - draw date, time and place (5.1)
   - winner contact window (6.1)
   - installation month (7.1)
   Do not deploy to production with any of them still showing.

   PRIZE VALUES are Keshan's cost figures (19 October 2026): Geyserwise Max
   R1,500 hardware + R1,000 labour; smart meter R3,500 + R500 for the year of
   readings; solar R15,000–R20,000 depending on one or two collectors. Stated
   as "about" because the installation varies.

   PRIZE IMAGES: /assets/illustrations/reward-*.webp. The solar image had a
   Kwikot-branded geyser painted out — the geyser is not part of the prize and
   must not appear in prize imagery. Do not swap in art that shows one.

   CTA REFS: REWARDS-1 (hero), REWARDS-2 (navy band). The two service-page
   buttons are internal links and carry no WhatsApp ref. */

const RW_RULES_UPDATED = '19 October 2026';

const RW_FACTS = [
  ['calendar', 'Entries close 15 January 2027'],
  ['shuffle', 'Three separate random draws'],
  ['megaphone', 'Winners announced by 31 January 2027'],
  ['shield-check', 'Overseen by an independent accountant']
];

const RW_STEPS = [
  ['01', 'We complete your job', 'Any job Home Assist completes at your property, insured or private, from geyser replacements to burst pipes, leak detection and call-outs.'],
  ['02', 'You sign it off', 'Give the technician the one-time PIN we send you, or sign off with us on WhatsApp. Either way the job is closed digitally.'],
  ['03', 'You rate us', 'Complete the rating link with a valid email address, or rate us on WhatsApp. Any rating counts, good or bad. That is your entry.']
];

const RW_PRIZES = [
  {
    place: 'First prize',
    name: 'Solar geyser upgrade',
    value: 'R15,000 to R20,000',
    who: 'Electric geyser replacement customers',
    summary: 'One or two solar collectors, the pipework, valves and installation, fitted to your existing solar-ready geyser. Your hot water heats from the sun first and the element only tops up.',
    includes: 'Collector sized to your geyser (evacuated tubes or flat panel, depending on your region), solar mixing valve, copper pipework and lagging, a Geyserwise Max controller, all labour and consumables, and a certificate of compliance.',
    excludes: 'Roof brackets or mounting frames, any electrical upgrade work, and the geyser itself. Not possible on slate or asbestos roofs, or where solar is already installed.',
    image: '/assets/illustrations/reward-solar.webp',
    imageAlt: 'Illustration of a flat-panel solar collector with copper pipe, fittings and valves',
    route: 'geyserReplacements',
    routeLabel: 'Geyser replacements'
  },
  {
    place: 'Second prize',
    name: 'Smart water meter',
    value: 'about R4,000',
    who: 'Burst pipe and leak detection customers',
    summary: 'A smart water meter installed at your property, with a full year of free monthly readings and hourly consumption tracking.',
    includes: 'The meter and reading device, installation, and twelve months of readings on the Home Assist metering platform.',
    excludes: null,
    image: '/assets/illustrations/reward-smart-meter.webp',
    imageAlt: 'Illustration of a water meter on copper pipe, a white reading hub and a black sensor unit',
    route: 'leakDetection',
    routeLabel: 'Leak detection'
  },
  {
    place: 'Third prize',
    name: 'Geyserwise Max controller',
    value: 'about R2,500',
    who: 'Any entrant, whatever the job',
    summary: 'A Geyserwise Max smart geyser controller, installed. Shows your water temperature and lets you set heating times, so the element is not running when nobody needs hot water.',
    includes: 'The controller, its sensors and cabling, and installation.',
    excludes: null,
    image: '/assets/illustrations/reward-geyserwise.webp',
    imageAlt: 'Illustration of a Geyserwise Max controller with its box, sensor cables and power plug',
    route: null,
    routeLabel: null
  }
];

function RwPrizeCard({ p, go }) {
  return <div style={{ ...CARD, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
    <img src={p.image} alt={p.imageAlt} width="1200" height="900" loading="lazy"
      style={{ width: '100%', height: 'auto', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block', borderBottom: '1px solid var(--web-grey-100)' }} />
    <div style={{ padding: 22, display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div style={{ ...LABEL, color: 'var(--web-blue)', marginBottom: 8 }}>{p.place}</div>
      <h3 style={{ ...H3, fontSize: 21, margin: '0 0 4px' }}>{p.name}</h3>
      <div style={{ font: '600 15px/1.4 var(--font-core)', color: 'var(--web-navy)', marginBottom: 12 }}>Worth {p.value}</div>
      <p style={{ ...BODY, fontSize: 15, marginBottom: 14 }}>{p.summary}</p>
      <div style={{ borderTop: '1px solid var(--web-grey-100)', paddingTop: 12, marginBottom: 10 }}>
        <div style={{ ...LABEL, fontSize: 10, marginBottom: 4 }}>Who can win it</div>
        <p style={{ ...BODY, fontSize: 14, margin: 0 }}>{p.who}</p>
      </div>
      <div style={{ marginBottom: 10 }}>
        <div style={{ ...LABEL, fontSize: 10, marginBottom: 4 }}>Included</div>
        <p style={{ ...BODY, fontSize: 14, margin: 0 }}>{p.includes}</p>
      </div>
      {p.excludes ? <div style={{ marginBottom: 16 }}>
        <div style={{ ...LABEL, fontSize: 10, color: 'var(--web-grey-500)', marginBottom: 4 }}>Not included</div>
        <p style={{ ...BODY, fontSize: 14, margin: 0 }}>{p.excludes}</p>
      </div> : <div style={{ marginBottom: 16 }}></div>}
      {p.route ? <div style={{ marginTop: 'auto' }}>
        <Button variant="secondary" size="sm" fullWidth onClick={function () { go(p.route); }}
          iconLeft={<Icon name="arrow-right" size={16} color="var(--web-navy)" />}>{p.routeLabel}</Button>
      </div> : null}
    </div>
  </div>;
}

/* ---- The rules, verbatim from the Claude Doc (see header note) ---- */

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
    <p style={RW_P}>Every job Home Assist completes at your property earns an entry once you sign it off digitally and rate it, by OTP with an email address or on WhatsApp. It costs nothing extra. There are three prizes, each with its own draw: a solar geyser upgrade worth R15,000 to R20,000 for electric geyser replacement customers, a smart water meter worth about R4,000 for burst pipe and leak detection customers, and a Geyserwise Max worth about R2,500 that any entrant can win. Entries close on 15 January 2027 and winners are awarded by 31 January 2027.</p>

    <h3 style={RW_H}>1. Promoter and competition period</h3>
    <p style={RW_P}>1.1 The promoter is Home Assist Technologies Proprietary Limited, registration number 2016/243716/07, 12 Uitvlugt Road, Pinelands, Cape Town, 7405 (&ldquo;Home Assist&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;).</p>
    <p style={RW_P}>1.2 The competition runs from 00:01 on <Confirm>launch date</Confirm> to 23:59 on 15 January 2027 (the &ldquo;closing date&rdquo;). There are three draws, one for each prize (clause 5.3). Only qualifying jobs (clause 2.1) completed in that period count.</p>
    <p style={RW_P}>1.3 The competition is open in South Africa wherever Home Assist completes jobs.</p>
    <p style={RW_P}>1.4 These rules are prepared under section 36 of the Consumer Protection Act 68 of 2008 and regulation 11. A copy is free on request from help@homeassist.co.za or 087 095 5231, and on www.homeassist.co.za. We keep these rules and the competition records for at least three years.</p>

    <h3 style={RW_H}>2. Who can enter and who cannot</h3>
    <p style={RW_P}>2.1 You can enter if you are 18 or older and Home Assist completed a job at your property during the competition period. This covers insurance claims and private jobs. Electric geyser replacements, and burst pipe repairs (including the leak detection to find the burst), are entered into all draws they qualify for under clause 5.3. Other jobs, including false calls and inspections only (where nothing is wrong, only a component is replaced, or the geyser is under a manufacturer&rsquo;s warranty), are entered into the third prize draw only.</p>
    <p style={RW_P}>2.2 You are disqualified, and are not entered at all, if:</p>
    <ul style={RW_LIST}>
      <li>you are an insured customer and your excess has not been paid;</li>
      <li>you are a private customer and your account is not paid in full within 7 days of the job being completed;</li>
      <li>you paid short on your account, for any reason.</li>
    </ul>
    <p style={RW_P}>2.3 Payment owed to Home Assist by your insurer is not your responsibility and does not affect your entry.</p>
    <p style={RW_P}>2.4 The following people cannot win: directors, members, partners, employees, agents and consultants of Home Assist; anyone who controls or is controlled by Home Assist; our service providers and suppliers connected with this competition; and the spouses, life partners, business partners and immediate family of any of them.</p>

    <h3 style={RW_H}>3. How to enter</h3>
    <p style={RW_P}>3.1 There is no entry fee, and you do not pay more for your job because of this competition.</p>
    <p style={RW_P}>3.2 To enter, your job must be signed off digitally before the closing date, in one of two ways:</p>
    <ol style={RW_LIST}>
      <li><strong>By OTP.</strong> We send you a one-time PIN and a rating link. Once you give us the PIN, the job is closed. Then complete the rating link and enter a valid email address.</li>
      <li><strong>By WhatsApp.</strong> Sign off the job and give us your rating on our WhatsApp line.</li>
    </ol>
    <p style={RW_P}>Giving an email address is optional when you sign off, but you need one (or the WhatsApp sign-off) to enter. Any rating counts. A good or bad rating has no effect on your chances.</p>
    <p style={RW_P}>3.3 Once both steps are done and you meet clause 2, you are entered. You get one entry per qualifying job.</p>
    <p style={RW_P}>3.4 We confirm your entry on your preferred channel, email or WhatsApp.</p>

    <h3 style={RW_H}>4. The prizes</h3>
    <div style={{ overflowX: 'auto', marginBottom: 14 }}>
      <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 620 }}>
        <thead>
          <tr>
            {['Place', 'Prize', 'Who can win it', 'Approximate value'].map(function (h) {
              return <th key={h} style={{ ...LABEL, textAlign: 'left', padding: '10px 8px', borderBottom: '2px solid var(--web-navy)' }}>{h}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {[
            ['1st', 'Solar geyser upgrade: one or two solar collectors, pipework, valves and installation, fitted to the winner’s existing solar-ready geyser', 'Electric geyser replacement entrants whose property allows a collector', 'R15,000 – R20,000, depending on the installation'],
            ['2nd', 'Smart water meter, installed, with one year of free monthly readings and hourly consumption tracking', 'Burst pipe and leak detection entrants only', 'About R4,000'],
            ['3rd', 'Geyserwise Max smart geyser controller, installed', 'Any entrant', 'About R2,500']
          ].map(function (row) {
            return <tr key={row[0]}>{row.map(function (c, i) { return <td key={i} style={RW_TD}>{c}</td>; })}</tr>;
          })}
        </tbody>
      </table>
    </div>
    <p style={RW_P}>4.1 <strong>First prize includes:</strong> a solar water heating collector sized to your geyser, either evacuated tubes or a flat panel depending on your region; a solar mixing valve for safety; the copper pipework and lagging between the geyser and the collector; a Geyserwise Max controller; all labour and consumables; and a certificate of compliance for the solar installation.</p>
    <p style={RW_P}>4.2 <strong>First prize does not include:</strong></p>
    <ul style={RW_LIST}>
      <li>roof brackets or mounting frames, including the frame needed on a flat roof — these are quoted and paid for by the winner;</li>
      <li>any electrical work needed to bring the property&rsquo;s installation up to standard — this is quoted and paid for by the winner;</li>
      <li>the geyser itself.</li>
    </ul>
    <p style={RW_P}>4.3 We cannot install a collector on a slate or asbestos roof, or on a property that already has a solar water heating system. Those geyser entrants can win third prize only. Burst pipe entrants cannot win first prize, and geyser entrants cannot win second prize.</p>
    <p style={RW_P}>4.4 Prizes cannot be exchanged for cash or transferred to another person or property.</p>

    <h3 style={RW_H}>5. How winners are chosen</h3>
    <p style={RW_P}>5.1 After the closing date, three separate random draws are held at <Confirm>date, time and place</Confirm> before 31 January 2027. Skill and job rating play no part.</p>
    <p style={RW_P}>5.2 The draws are overseen and certified by an independent accountant, Parker and Associates Accountants and Business Advisors Inc. (registration number 2018/556586/21), as regulation 11(5) requires.</p>
    <p style={RW_P}>5.3 The three draws are:</p>
    <ol style={RW_LIST}>
      <li><strong>First prize draw</strong> — from electric geyser replacement entries that can win first prize under clause 4.3.</li>
      <li><strong>Second prize draw</strong> — from burst pipe and leak detection entries only.</li>
      <li><strong>Third prize draw</strong> — from all remaining valid entries, excluding the first and second prize winners.</li>
    </ol>
    <p style={RW_P}>Each draw picks one winner and two reserves, in order.</p>
    <p style={RW_P}>5.4 Before a prize is confirmed we check the entry against clause 2. If an entry fails, or the winner cannot be reached under clause 6.2, the prize goes to the next reserve from the same draw.</p>
    <p style={RW_P}>5.5 You do not need to be present at the draw.</p>

    <h3 style={RW_H}>6. Announcing and contacting winners</h3>
    <p style={RW_P}>6.1 We contact winners by phone and email within <Confirm>3</Confirm> business days of the draw, using the details on the job.</p>
    <p style={RW_P}>6.2 If we cannot reach a winner within 7 days after at least three attempts, the prize goes to the next reserve. We keep a record of every attempt.</p>
    <p style={RW_P}>6.3 Results are announced on the Home Assist Facebook page by 31 January 2027. We publish the winner&rsquo;s first name and suburb only, unless the winner agrees to more.</p>

    <h3 style={RW_H}>7. Receiving the prize and installation</h3>
    <p style={RW_P}>7.1 Prizes are installed from <Confirm>February 2027</Confirm>, on a date agreed with each winner.</p>
    <p style={RW_P}>7.2 Before installation we do a site check of the roof and the electrical installation. If brackets or electrical work are needed (clause 4.2), we give the winner a written quote first. The winner may accept it or decline the work.</p>
    <p style={RW_P}>7.3 An adult who can give access must be at the property on the installation day.</p>
    <p style={RW_P}>7.4 The winner signs an acknowledgement on receipt of the prize, with their ID number and the date.</p>
    <p style={RW_P}>7.5 The installed equipment carries the manufacturer&rsquo;s warranty and Home Assist&rsquo;s workmanship warranty, as for any other Home Assist installation.</p>

    <h3 style={RW_H}>8. Publicity and filming — your choice</h3>
    <p style={RW_P}>8.1 We would like to film the first-prize installation and use photos, video and the winner&rsquo;s story in a media release and on our website and social media.</p>
    <p style={RW_P}>8.2 Taking part is optional. You may decline any filming, photos or marketing activity, and declining does not affect your prize.</p>

    <h3 style={RW_H}>9. Personal information</h3>
    <p style={RW_P}>9.1 We use your name, contact details, email address and job details to run this competition, contact winners and keep the records the law requires, in line with POPIA and our {a('privacy', 'Privacy Policy')}.</p>
    <p style={RW_P}>9.2 We will only send you marketing email if you agree to it. You can opt out at any time.</p>
    <p style={RW_P}>9.3 We do not sell or share your information for anyone else&rsquo;s marketing.</p>

    <h3 style={RW_H}>10. General</h3>
    <p style={RW_P}>10.1 Once the draw result is determined, the winner&rsquo;s right to the prize is vested. No conditions apply other than those in these rules.</p>
    <p style={RW_P}>10.2 If a prize item becomes unavailable, we will substitute an item of equal or greater value.</p>
    <p style={RW_P}>10.3 We may disqualify an entry that involves fraud or dishonesty.</p>
    <p style={RW_P}>10.4 Complaints about the competition follow our {a('complaints', 'Complaints Policy')}: complaints@homeassist.co.za or 087 095 5231.</p>
    <p style={RW_P}>10.5 These rules are governed by South African law. Nothing in them limits your rights under the Consumer Protection Act.</p>

    <p style={{ ...SMALL, marginTop: 24 }}>Rules last updated {RW_RULES_UPDATED}. A copy is free on request from {CH.help} or {CH.phone}.</p>
  </div>;
}

function RewardsPage({ go }) {
  return <main className="ha-rw">

    {/* Hero */}
    <section style={{ background: 'var(--web-navy)' }}>
      <div style={{ ...WRAP, padding: '68px 40px', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'center' }}>
        <div data-hero-text>
          <Eyebrow onDark>Home Assist Rewards</Eyebrow>
          <h1 style={{ ...DISPLAY, color: '#fff', maxWidth: '20ch', marginBottom: 18 }}>Every job we complete earns you an entry.</h1>
          <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', fontSize: 17, maxWidth: '54ch', marginBottom: 26 }}>Sign off your job and rate us, and you are in the draw for a solar geyser upgrade, a smart water meter or a Geyserwise Max controller. It costs nothing extra, and your job costs exactly the same with or without the draw.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button as="a" size="lg" variant="onDark" href="#prizes"
              iconLeft={<Icon name="gift" size={18} color="var(--web-navy)" />}>See the prizes</Button>
            <Button as="a" size="lg" variant="ghost" href="#rules" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}
              iconLeft={<Icon name="file-text" size={18} color="#fff" />}>Read the rules</Button>
          </div>
        </div>
        <div>
          <div style={{ ...LABEL, color: 'var(--web-blue-300)', marginBottom: 14 }}>The draw at a glance</div>
          {RW_FACTS.map(function (row) {
            return <div key={row[1]} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
              <Icon name={row[0]} size={18} color="var(--web-blue-300)" />
              <span style={{ ...SMALL, color: 'rgba(255,255,255,.9)', fontSize: 15 }}>{row[1]}</span>
            </div>;
          })}
          <div style={{ marginTop: 18 }}>
            <Button as="a" size="sm" variant="onDark" target="_blank" rel="noopener"
              href={wa('Hi Home Assist, I have a question about entering Home Assist Rewards. ', 'REWARDS-1')}
              iconLeft={<Icon name="message-circle" size={15} color="var(--web-navy)" />}>Ask us on WhatsApp</Button>
          </div>
        </div>
      </div>
    </section>

    {/* How to enter */}
    <Section eyebrow="How to enter" title="Three steps, and the last two take a minute"
      intro="There is no form to fill in and nothing to buy. Your entry comes from a job we have already done for you.">
      <Steps items={RW_STEPS} />
      <p style={{ ...SMALL, marginTop: 20, maxWidth: '76ch' }}>One entry per qualifying job. Insured customers need their excess paid; private customers need their account paid in full within 7 days. If your insurer has not yet paid us, that does not count against you.</p>
    </Section>

    {/* Prizes */}
    <Section tint id="prizes" eyebrow="The prizes" title="Three prizes, matched to the job you had done"
      intro="Each prize has its own draw. The solar upgrade goes to a geyser replacement customer, the smart meter to a burst pipe or leak detection customer, and the Geyserwise Max to anyone who enters.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {RW_PRIZES.map(function (p) { return <RwPrizeCard key={p.name} p={p} go={go} />; })}
      </div>
      <p style={{ ...SMALL, marginTop: 14 }}>Illustrations. Values are approximate and depend on the installation.</p>
    </Section>

    {/* How winners are chosen */}
    <Section eyebrow="The draws" title="How winners are chosen">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        <div style={CARD}>
          <Icon name="shuffle" size={20} color="var(--web-blue)" />
          <div style={{ ...LABEL, margin: '12px 0 8px' }}>Random, not rated</div>
          <p style={{ ...BODY, fontSize: 14, margin: 0 }}>Three separate random draws after entries close on 15 January 2027. Your rating has no effect on your chances, whether it is good or bad.</p>
        </div>
        <div style={CARD}>
          <Icon name="shield-check" size={20} color="var(--web-blue)" />
          <div style={{ ...LABEL, margin: '12px 0 8px' }}>Independently overseen</div>
          <p style={{ ...BODY, fontSize: 14, margin: 0 }}>The draws are overseen and certified by Parker and Associates, an independent firm of accountants, as the Consumer Protection Act requires.</p>
        </div>
        <div style={CARD}>
          <Icon name="users" size={20} color="var(--web-blue)" />
          <div style={{ ...LABEL, margin: '12px 0 8px' }}>Two reserves per prize</div>
          <p style={{ ...BODY, fontSize: 14, margin: 0 }}>Each draw picks a winner and two reserves. If a winner does not qualify or cannot be reached within 7 days, the prize goes to the next reserve. Winners are announced on our Facebook page by 31 January 2027.</p>
        </div>
      </div>
    </Section>

    {/* CTA */}
    <NavyBand eyebrow="Need us now" title="A burst geyser, a leak or a geyser to replace? Every completed job counts.">
      <Button size="lg" variant="onDark" onClick={function () { go('geyserReplacements'); }}
        iconLeft={<Icon name="flame" size={18} color="var(--web-navy)" />}>Replacing a geyser</Button>
      <Button size="lg" variant="ghost" onClick={function () { go('leakDetection'); }} style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}
        iconLeft={<Icon name="droplets" size={18} color="#fff" />}>Burst pipe or leak</Button>
      <Button as="a" size="lg" variant="ghost" target="_blank" rel="noopener" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}
        href={wa('Hi Home Assist, I need help at my property. ', 'REWARDS-2')}
        iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>WhatsApp us</Button>
    </NavyBand>

    {/* Full rules */}
    <Section id="rules" narrow eyebrow="Terms and conditions" title="Competition rules in full">
      <RwRules go={go} />
    </Section>
  </main>;
}

Object.assign(window, { RewardsPage });
