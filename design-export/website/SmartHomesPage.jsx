const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

/* /smart-homes — geyser control, scheduling and solar water heating.

   Split off /geyser-replacements on 30 August 2026. Three reasons: it is a
   different purchase decision made at a different time, it was making an
   already long configurator page longer, and the search intent is different —
   somebody whose geyser has burst is not shopping for a scheduler.

   ACCURACY NOTE, AND IT MATTERS ON THIS PAGE MORE THAN MOST.

   The original brief described the Kwikot Elon 100 as a smart controller with
   app control, scheduling, consumption reporting and drip-tray leak detection,
   plus a DC input, and ranked it first for having all of those at once. The
   manufacturer's own product pages do not support that. The Elon 100 is a
   PowerOptimal direct-PV switching unit sold through Kwikot: it feeds DC
   straight from photovoltaic panels to a standard geyser element, with mains AC
   as backup, and needs no inverter and no battery. Kwikot documents no app, no
   schedule, no consumption reporting and no leak detection for it.

   Those features belong to the Plentify HotBot, which is a genuinely different
   category of product. So this page does not rank the three against each other
   on one list. It splits them into what they actually are — one changes where
   the energy comes from, the others change when the element runs — because a
   comparison table that pretends they are the same product would mislead a
   customer into buying the wrong one.

   Sources, read 30 August 2026:
     kwikot.com/the-elon-100-solar-pv-water-heating-unit
     kwikot.com/elon-solar-pv-geyser-water-heating-range
     plentify.io/non-solar-households

   OUTSTANDING: the Home Assist DB board breaker copy and specifications. The
   advert was not supplied, so that card carries [CONFIRM] chips rather than
   invented numbers. */

function shTrack(name, params) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(Object.assign({ event: name }, params));
  if (typeof window.gtag === 'function') window.gtag('event', name, params);
}

const SH_PROBLEM = [
  ['zap', 'It is the biggest single load in the house',
   'A 150 litre cylinder with a 3 kW element is roughly 13 amps at 230 volts, and it heats whether anyone is home or not.'],
  ['clock', 'It reheats on a schedule nobody set',
   'A thermostat only knows the water is cold. It does not know that nobody will use it until seven tomorrow morning.'],
  ['trending-up', 'The tariff keeps moving',
   'A full reheat is roughly R20 to R30 today. The arithmetic that made an uncontrolled geyser tolerable a few years ago no longer does.']
];

const SH_DEVICES = [
  {
    id: 'elon',
    kind: 'Where the energy comes from',
    name: 'Kwikot Elon 100',
    made: 'Manufactured by PowerOptimal, sold through Kwikot',
    summary: 'Feeds DC current straight from photovoltaic panels to a standard geyser element, with mains AC as backup.',
    points: [
      'No inverter and no battery — the panels connect to the element directly',
      'Runs completely off-grid, or on AC as backup',
      'Works through load-shedding, because it is not drawing from the grid',
      'Over 90% efficient, and switches on under load from as little as 20 V',
      'Accepts a solar array up to 4 kW, at 20 to 250 V DC',
      'Over- and undervoltage protection'
    ],
    claim: 'Kwikot states water heating energy savings of 50 to 70% are common, with payback in three to five years.',
    notThis: 'It has no app, no schedule and no leak detection. It is not a controller — it changes where the energy comes from, not when the element runs.',
    range: 'The Elon 100 is the unit most homes fit. Kwikot also sells it as a full solar PV kit and as a water heater kit, so what you need depends on whether you already have panels.',
    price: 'R3,500 to R4,000 for the unit, indicative and excluding panels.',
    monthly: 'No monthly cost.',
    fitting: 'A plumber, if your geyser already has an isolator — no electrician needed. Connecting photovoltaic panels does need a PV installer electrician, and that work is certified through the PV Green Card scheme. Home Assist can arrange it.',
    fittingLink: { href: 'https://pvgreencard.co.za/app/directory/', text: 'PV Green Card installer directory' },
    image: '/assets/illustrations/smart-elon.jpg',
    imageAlt: 'The Elon 100 unit, a compact blue enclosure with AC and DC terminal blocks and a temperature probe.',
    href: 'https://www.kwikot.com/elon-solar-pv-geyser-water-heating-range'
  },
  {
    id: 'hotbot',
    kind: 'When the element runs',
    name: 'Plentify HotBot',
    made: 'Made by Plentify, South Africa',
    summary: 'A small controller fitted at an existing geyser that puts the element on a schedule and reports what it is doing, from a phone.',
    points: [
      'Schedules and controls heating around your household routine',
      'Monitors cylinder temperature in real time',
      'Detects a potential leak before it causes damage',
      'Load-shedding aware, and a vacation mode',
      'Optimises for solar hours on compatible systems'
    ],
    claim: 'Plentify states households using HotBot save on average R355 per month on their electricity bill.',
    notThis: 'It fits electric and thermosyphon solar thermal geysers — not pumped solar thermal, and not gas. It wants Wi-Fi within 10 metres, though it carries a backup connection so losing the house Wi-Fi does not leave it stranded.',
    range: 'The HotBot is the geyser device. Plentify makes other devices in the same family, and some of those do involve photovoltaic work.',
    price: 'R849 excluding VAT, once off.',
    monthly: 'R149 per month thereafter. Additional units R99 per month. Plentify offers a 60-day free trial.',
    fitting: 'A plumber only, because it sits at the cylinder. If a model in the range needs photovoltaic work, that step needs a PV installer electrician as well.',
    image: '/assets/illustrations/smart-hotbot.jpg',
    imageAlt: 'The Plentify HotBot, a flat dark controller with a status light, fitted at the geyser.',
    logo: '/assets/illustrations/logo-plentify-white.png',
    href: 'https://plentify.io/non-solar-households/'
  },
  {
    /* Supplied hardware, not a Home Assist product. There is no branded
       solution yet — this is a hardware deal — so the device is described by
       what it does and the wordmark has been removed from the product image.
       Do not reintroduce Home Assist branding on the unit itself until there
       is an actual branded product to brand. */
    id: 'db-breaker',
    kind: 'When the element runs',
    name: 'Distribution board geyser controller',
    made: 'Supplied and installed by Home Assist',
    summary: 'A compact smart breaker fitted inside your distribution board by a qualified electrician. No plumbing changes and no mess — installed in under an hour.',
    points: [
      'Puts the geyser on a schedule so it heats outside peak tariff hours',
      'Learns the household routine, so hot water is ready when it is wanted',
      'Wi-Fi, on a 20 A DIN rail unit that clips into the existing board',
      'A physical button on the face of the unit',
      'Logs a warning on a leak or a component fault, and routes it to an installer'
    ],
    claim: null,
    notThis: 'It does not read the water temperature. It switches the supply and reports on it, which is why it is the simplest of the three and the one that keeps working when you are standing in front of it.',
    price: 'R400 to R650 excluding VAT for the unit, indicative.',
    monthly: 'No monthly cost.',
    fitting: 'An electrician, because the unit clips into your distribution board. No plumbing work at all.',
    image: '/assets/illustrations/smart-dbboard.jpg',
    imageAlt: 'A DIN rail geyser controller clipped into a distribution board, with Wi-Fi and heat indicators and a push button on the face.'
  }
];

/* Deliberately not one ranked table. The Elon changes the energy source; the
   other two change the schedule. Comparing them on a single list of ticks is
   how somebody ends up buying a PV kit when what they wanted was an app. */
const SH_TABLE = [
  ['Puts the geyser on a schedule', 'No', 'Yes', 'Yes'],
  ['Controlled from a phone', 'No', 'Yes', 'Yes'],
  ['Reads cylinder temperature', 'No', 'Yes', 'No'],
  ['Detects a leak', 'No', 'Yes', 'Logs a warning'],
  ['Takes DC directly from PV panels', 'Yes', 'No', 'No'],
  ['Runs through load-shedding', 'Yes', 'Schedule only', 'Manual override'],
  ['Needs Wi-Fi', 'No', 'Yes, within 10 m', 'Yes'],
  ['Works if connectivity fails', 'Yes', 'Yes, backup connection', 'Yes, press the button'],
  ['Fitted at', 'The cylinder', 'The cylinder', 'The DB board'],
  ['Who installs it', 'Plumber', 'Plumber', 'Electrician'],
  ['Indicative hardware', 'R3,500 - R4,000', 'R849 ex VAT', 'R400 - R650 ex VAT'],
  ['Monthly cost', 'None', 'R149', 'None']
];

const SH_FAQ = [
  ['Which one should I actually buy?',
   'It depends what you are trying to fix. If the bill is the problem and you have roof space, the Elon takes the water heating off the grid and is the biggest single change of the three. If you want the geyser to stop heating water nobody is going to use, and you want to see what it is doing, the HotBot is the one built for that. If you want the simplest and cheapest useful thing, and no plumbing work at all, the distribution board unit does that. They are not three versions of the same product and it is worth being clear which problem you are solving.'],
  ['Can I have more than one?',
   'Yes, and the combination people ask for most is a PV supply plus a schedule — the Elon deciding where the energy comes from and a controller deciding when the element runs. Tell us what you already have and we will say plainly whether adding the second one is worth it on your setup.'],
  ['Who has to install it, and will I need a certificate of compliance?',
   'The two devices that sit at the cylinder are plumbing work, provided the geyser already has an isolator — a plumber, no electrician, and no certificate of compliance charge. The distribution board unit is electrical work and needs an electrician. Wherever an electrician is involved, expect a certificate of compliance to be charged for, because anyone who touches your board has to issue one. Connecting photovoltaic panels is a third trade again: a PV installer electrician, certified through the PV Green Card scheme, which Home Assist can arrange for you.'],
  ['Will this void my geyser warranty?',
   'Not if it is installed to the manufacturer’s specification by a registered plumber and, where electrical work is involved, a qualified electrician. Work that is not is exactly how warranties get voided — which is the same argument we make about the installation itself on the geyser replacements page.'],
  ['Do the savings figures hold up?',
   'They are the manufacturers’ own published figures and we have quoted them as such rather than as our own. Every one of them depends on what you pay for electricity, whether you already have solar PV, whether the geyser is on a schedule at all, and whether the household changes how it showers. Our own worked example is two people on a 150 litre cylinder with a simple twice-daily scheduler, saving in the region of R300 a month at September 2026 tariffs. Treat a published figure as the best case a well-matched installation reaches, not as a number to budget against.'],
  ['Can you fit one to a geyser you did not install?',
   'Yes. We will check the existing installation first, because fitting a controller to a cylinder that has no working pressure control or no vacuum breakers is putting a schedule on a problem rather than fixing it.']
];

function SmartHomesPage({ go }) {
  return <main className="ha-sh">

    {/* Hero */}
    <section style={{ background: 'var(--web-navy)' }}>
      <div style={{ ...WRAP, padding: '68px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div data-hero-text>
          <Eyebrow onDark>Smart homes</Eyebrow>
          <h1 style={{ ...DISPLAY, color: '#fff', maxWidth: '21ch', marginBottom: 18 }}>Your geyser is the biggest thing on your bill. Control it.</h1>
          <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', fontSize: 17, maxWidth: '54ch', marginBottom: 26 }}>Three ways to spend less on hot water — one changes where the energy comes from, two change when the element runs. They solve different problems, and this page says which is which rather than ranking them on one list.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button as="a" size="lg" variant="onDark" target="_blank" rel="noopener"
              href={wa('Hi Home Assist, I would like to talk about smart geyser control. ')}
              iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>Ask us which one fits</Button>
            <Button as="a" size="lg" variant="ghost" href="#compare" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }} iconLeft={<Icon name="table" size={18} color="#fff" />}>Compare the three</Button>
          </div>
        </div>
        {/* Drawn for this page rather than lifted from any manufacturer's app —
            the layout, the wording and the colours are Home Assist's, so it
            illustrates the idea without misrepresenting a specific product. */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
          <img src="/assets/illustrations/smart-phone-mockup.png"
            alt="A phone showing a geyser control screen: the cylinder at 56 degrees with the element off, a morning and an evening heating slot, and the month's consumption"
            style={{ width: 250, maxWidth: '100%', height: 'auto', display: 'block', flex: '0 1 auto' }} />
          <div style={{ minWidth: 0, flex: '1 1 200px' }}>
            <div style={{ ...LABEL, color: 'var(--web-blue-300)', marginBottom: 14 }}>What a controlled geyser gives you</div>
            {[
              ['clock', 'Hot water when you need it, not all day'],
              ['trending-up', 'A bill you can see and change'],
              ['droplets', 'A leak caught before the ceiling goes'],
              ['sun', 'The option to run it off the sun']
            ].map(function (row) {
              return <div key={row[1]} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
                <Icon name={row[0]} size={17} color="var(--web-blue-300)" />
                <span style={{ ...SMALL, color: 'rgba(255,255,255,.88)', fontSize: 14 }}>{row[1]}</span>
              </div>;
            })}
            <p style={{ ...SMALL, color: 'rgba(255,255,255,.6)', marginTop: 14 }}>Illustration. Each device has its own app and its own screens.</p>
          </div>
        </div>
      </div>
    </section>

    {/* The problem */}
    <Section eyebrow="Why it is worth doing" title="An uncontrolled geyser heats water nobody asked for"
      intro="Nothing here is exotic. It is the same cylinder you already own, switched more sensibly.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {SH_PROBLEM.map(function (row) {
          return <div key={row[1]} style={CARD}>
            <Icon name={row[0]} size={20} color="var(--web-blue)" />
            <div style={{ ...LABEL, margin: '12px 0 8px' }}>{row[1]}</div>
            <p style={{ ...BODY, margin: 0, fontSize: 14 }}>{row[2]}</p>
          </div>;
        })}
      </div>
    </Section>

    {/* The three devices */}
    <Section tint eyebrow="The options" title="Two different problems, three products"
      intro="The Elon changes where the energy comes from. The HotBot and the distribution board breaker change when the element runs. Read the category before you read the features.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {SH_DEVICES.map(function (d) {
          return <div key={d.id} style={{ ...CARD, display: 'flex', flexDirection: 'column' }}>
            <div style={{ ...LABEL, color: 'var(--web-blue)', marginBottom: 10 }}>{d.kind}</div>
            {d.logo
              ? <div style={{ background: 'var(--web-navy)', borderRadius: 3, padding: '12px 14px', marginBottom: 12, display: 'flex', alignItems: 'center' }}>
                  <img src={d.logo} alt={d.name} style={{ height: 26, width: 'auto', display: 'block' }} />
                </div>
              : null}
            {/* One frame for all three. Each source photograph is composed to
                the same 4 by 3 on white, so a tall DIN rail unit and a wide
                blue box occupy identical space and the cards read as a set. */}
            {d.image
              ? <div style={{ border: '1px solid var(--web-grey-100)', borderRadius: 3, overflow: 'hidden', marginBottom: 14, aspectRatio: '4 / 3', background: '#fff' }}>
                  <img src={d.image} alt={d.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              : null}
            <h3 style={{ ...H3, fontSize: 19, margin: '0 0 4px' }}>{d.name}</h3>
            <p style={{ ...SMALL, marginBottom: 12 }}>{d.made}</p>
            <p style={{ ...BODY, fontSize: 15, marginBottom: 14 }}>{d.summary}</p>

            <ul style={{ ...BODY, fontSize: 14, margin: '0 0 14px', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {d.points.map(function (p) { return <li key={p}>{p}</li>; })}
            </ul>

            {d.claim ? <p style={{ ...BODY, fontSize: 14, background: 'var(--web-blue-050)', border: '1px solid var(--web-blue-100)', borderRadius: 3, padding: '10px 12px' }}>{d.claim}</p> : null}

            <div style={{ borderTop: '1px solid var(--web-grey-100)', paddingTop: 12, marginTop: 4 }}>
              <div style={{ ...LABEL, fontSize: 10, color: 'var(--web-grey-500)', marginBottom: 6 }}>What it does not do</div>
              <p style={{ ...BODY, fontSize: 14, margin: 0 }}>{d.notThis}</p>
            </div>

            {d.range ? <div style={{ borderTop: '1px solid var(--web-grey-100)', paddingTop: 12, marginTop: 12 }}>
              <div style={{ ...LABEL, fontSize: 10, color: 'var(--web-grey-500)', marginBottom: 6 }}>Other models</div>
              <p style={{ ...BODY, fontSize: 14, margin: 0 }}>{d.range}</p>
            </div> : null}

            <div style={{ borderTop: '1px solid var(--web-grey-100)', paddingTop: 12, marginTop: 12 }}>
              <div style={{ ...LABEL, fontSize: 10, color: 'var(--web-grey-500)', marginBottom: 6 }}>Indicative hardware price</div>
              <p style={{ ...BODY, fontSize: 14, margin: '0 0 6px' }}>{d.price}</p>
              <p style={{ ...SMALL, margin: 0 }}>{d.monthly}</p>
            </div>

            <div style={{ borderTop: '1px solid var(--web-grey-100)', paddingTop: 12, margin: '12px 0 14px' }}>
              <div style={{ ...LABEL, fontSize: 10, color: 'var(--web-grey-500)', marginBottom: 6 }}>Who installs it</div>
              <p style={{ ...BODY, fontSize: 14, margin: 0 }}>{d.fitting}</p>
              {d.fittingLink ? <p style={{ ...SMALL, margin: '6px 0 0' }}><a href={d.fittingLink.href} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>{d.fittingLink.text}</a></p> : null}
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Button variant="navy" size="sm" fullWidth as="a" target="_blank" rel="noopener"
                href={wa('Hi Home Assist, I would like to know more about the ' + d.name + '. ')}
                iconLeft={<Icon name="message-circle" size={16} color="#fff" />}>Ask about this one</Button>
              {d.href ? <a href={d.href} target="_blank" rel="noopener noreferrer" style={{ ...SMALL, color: 'var(--web-blue)', fontWeight: 600, textAlign: 'center' }}>Manufacturer&rsquo;s product page</a> : null}
            </div>
          </div>;
        })}
      </div>
      <div style={{ ...CARD, marginTop: 20, background: 'var(--web-grey-050)' }}>
        <div style={{ ...LABEL, marginBottom: 10 }}>Before you compare the prices</div>
        <p style={{ ...BODY, fontSize: 14 }}>Hardware prices above are <strong>indicative ranges for the unit only</strong>, and they move with stock and with the exchange rate. Installation is quoted separately once we know what your board and your cylinder look like.</p>
        <p style={{ ...BODY, fontSize: 14 }}><strong>Where an electrician is required, expect a certificate of compliance to be charged for as well.</strong> That is not us adding a line — an electrician who touches your distribution board has to issue one, and it is the document that protects you afterwards. A device fitted by a plumber alone, at a cylinder that already has an isolator, does not attract that cost.</p>
        <p style={{ ...BODY, fontSize: 14, margin: 0 }}>Savings figures are the manufacturers&rsquo; own published claims and are labelled as such. What any of them saves in your house depends on your tariff, your household&rsquo;s habits and, for the Elon, on your roof and panel array.</p>
      </div>
    </Section>

    {/* Comparison */}
    <Section eyebrow="Side by side" title="What each one actually does" id="compare"
      intro="Read down the first two rows before anything else. They are what separates a supply-side product from a controller.">
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 620 }}>
          <thead>
            <tr>
              {['', 'Elon 100', 'Plentify HotBot', 'DB breaker'].map(function (h) {
                return <th key={h || 'blank'} style={{ ...LABEL, textAlign: h ? 'center' : 'left', padding: '10px 8px', borderBottom: '2px solid var(--web-navy)', verticalAlign: 'bottom' }}>{h}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {SH_TABLE.map(function (row) {
              return <tr key={row[0]}>
                <td style={{ ...BODY, margin: 0, fontSize: 14, padding: '10px 8px', borderBottom: '1px solid var(--web-grey-100)' }}>{row[0]}</td>
                {row.slice(1).map(function (cell, i) {
                  return <td key={i} style={{ font: '600 14px/1.3 var(--font-core)', color: cell === 'No' ? 'var(--web-grey-500)' : 'var(--web-navy)', textAlign: 'center', padding: '10px 8px', borderBottom: '1px solid var(--web-grey-100)' }}>
                    {cell === 'Confirm' ? <Confirm /> : cell}
                  </td>;
                })}
              </tr>;
            })}
          </tbody>
        </table>
      </div>
      <p style={{ ...SMALL, marginTop: 14, maxWidth: '76ch' }}>Elon 100 and HotBot rows are from the manufacturers&rsquo; published product information, read in August 2026. Distribution board breaker rows are held until the specification is confirmed rather than filled in with a guess.</p>
    </Section>

    {/* Running cost — moved here from /geyser-replacements on 30 August 2026.
        It belongs on the page that sells the answer to it, and the honest
        version of this section is mostly caveats, which is why it did not
        belong in the middle of a configurator.

        The worked example is Keshan's, September 2026: two people, a 150 litre
        cylinder, a simple scheduler running an hour in the morning and an hour
        in the evening, saving in the region of R300 a month. It is stated as
        one worked example rather than as a range every household will hit,
        because the four variables beside it genuinely decide the answer. */}
    <Section eyebrow="Running cost" title="What it actually saves, and what that depends on"
      intro="Anybody who quotes you a single savings figure without asking these four questions is guessing. Here is the honest version.">

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[
          ['zap', 'What you pay for electricity', 'The same saving is worth far more in a municipality at R4.50 a unit than at R2.50. This is the biggest single variable and it is the one nobody in this conversation controls.'],
          ['sun', 'Whether you have solar PV', 'A house already generating its own power in the middle of the day is solving a different problem, and a scheduler that heats at noon may save very little on top of it.'],
          ['clock', 'Whether it is on a schedule', 'An uncontrolled cylinder reheats whenever it cools, all day and all night. Almost all of the saving on this page comes from stopping that.'],
          ['users', 'Whether the household changes anything', 'Shorter showers, staggered showers, a lower thermostat setting. The device makes the change easy. It does not make it for you.']
        ].map(function (row) {
          return <div key={row[1]} style={CARD}>
            <Icon name={row[0]} size={20} color="var(--web-blue)" />
            <div style={{ ...LABEL, margin: '12px 0 8px' }}>{row[1]}</div>
            <p style={{ ...BODY, margin: 0, fontSize: 14 }}>{row[2]}</p>
          </div>;
        })}
      </div>

      <div style={{ ...CARD, marginTop: 20, background: 'var(--web-blue-050)', border: '1px solid var(--web-blue-100)' }}>
        <div style={{ ...LABEL, marginBottom: 10 }}>One worked example</div>
        <p style={{ ...BODY, fontSize: 16, maxWidth: '70ch' }}>Two people, a 150 litre cylinder, and a simple scheduler set to come on for an hour in the morning and an hour in the evening. At September 2026 tariffs that saves in the region of <strong>R300 a month</strong>.</p>
        <p style={{ ...BODY, fontSize: 15, maxWidth: '70ch', margin: 0 }}>Change any one of the four things above and that number moves. A larger household saves more in rand and less in percentage. A house with solar PV may save very little on top of what it already generates. A household that does not change how it showers gets the scheduling saving and not the rest. We would rather tell you that than quote a range you will not reach.</p>
      </div>

      <p style={{ ...SMALL, marginTop: 14, maxWidth: '76ch' }}>Tell us your household size, your cylinder and roughly what you pay for a unit of electricity, and we will work through your own numbers with you rather than repeat this one.</p>
    </Section>

    {/* Installation and compliance */}
    <Section tint eyebrow="Installation" title="Who is allowed to fit it, and what that costs">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>A plumber only</div>
          <p style={{ ...BODY, fontSize: 14 }}>Both of the devices that sit at the cylinder are plumbing work, provided your geyser already has an isolator. No electrician, and no certificate of compliance charge.</p>
          <p style={{ ...BODY, fontSize: 14, margin: 0 }}>The electrical point has to be within one metre of the cylinder, and a dedicated breaker on the board has to isolate the geyser completely — which a compliant installation already has.</p>
        </div>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>An electrician</div>
          <p style={{ ...BODY, fontSize: 14 }}>The distribution board unit is electrical work, so an electrician fits it. Anything that touches your board is.</p>
          <p style={{ ...BODY, fontSize: 14, margin: 0 }}>Where an electrician is involved, expect a <strong>certificate of compliance to be charged for</strong>. It is a real document with a real cost, and it is what protects you if something goes wrong later.</p>
        </div>
        <div style={{ ...CARD, background: 'var(--web-blue-050)', border: '1px solid var(--web-blue-100)' }}>
          <div style={{ ...LABEL, marginBottom: 10 }}>Adding solar panels</div>
          <p style={{ ...BODY, fontSize: 14 }}>Connecting photovoltaic panels is its own trade. It needs a PV installer electrician, and that work is certified through the PV Green Card scheme.</p>
          <p style={{ ...BODY, fontSize: 14 }}>Home Assist can arrange that step rather than leaving you to find somebody.</p>
          <p style={{ ...BODY, fontSize: 14, margin: 0 }}><a href="https://pvgreencard.co.za/app/directory/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>PV Green Card installer directory</a></p>
        </div>
      </div>
      <div style={{ ...CARD, marginTop: 20 }}>
        <div style={{ ...LABEL, marginBottom: 10 }}>We check the geyser first</div>
        <p style={{ ...BODY, margin: 0, maxWidth: '76ch' }}>Before we fit any of these we look at the installation it is going onto. A schedule on a cylinder with no working pressure control or no vacuum breakers is a schedule on a problem. If something is missing we tell you what it is and what it costs to put right, separately from the device you came for.</p>
      </div>
    </Section>

    {/* CTA */}
    <NavyBand eyebrow="Tell us what you have" title="Send us your geyser and your bill, and we will say which of the three is worth it.">
      <Button as="a" size="lg" variant="onDark" target="_blank" rel="noopener"
        href={wa('Hi Home Assist, I would like to talk about smart geyser control. My geyser is: ')}
        iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>WhatsApp us</Button>
      <Button as="a" size="lg" variant="ghost" href={'tel:' + CH.phoneTel} style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }} iconLeft={<Icon name="phone" size={18} color="#fff" />}>{CH.phone}</Button>
    </NavyBand>

    {/* FAQ */}
    <Section eyebrow="Questions" title="What people ask before fitting one">
      <Accordion items={SH_FAQ} />
    </Section>

    {/* Close */}
    <Section tint eyebrow="Related" title="Replacing the geyser as well?"
      intro="If the cylinder itself is on its way out, fit the control at the same time — the labour is already there and the installation only gets opened once.">
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button variant="navy" size="lg" onClick={function () { go('geyserReplacements'); }} iconLeft={<Icon name="clipboard-check" size={18} color="#fff" />}>Build a replacement specification</Button>
        <Button variant="secondary" size="lg" onClick={function () { go('leakDetection'); }} iconLeft={<Icon name="search" size={18} color="var(--web-navy)" />}>Leak detection</Button>
      </div>
    </Section>
  </main>;
}

Object.assign(window, { SmartHomesPage });
