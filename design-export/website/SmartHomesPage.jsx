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
    cost: 'One upfront amount for the unit and the panels. No monthly fee.',
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
    notThis: 'It needs a Wi-Fi connection within 10 metres. If the signal is down the schedule cannot be overridden remotely. It fits electric and thermosyphon solar thermal geysers — not pumped solar thermal, and not gas.',
    cost: 'R849 once for activation and installation, then R149 per month. Additional units R99 per month each. Plentify offers a 60-day free trial.',
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
    cost: null,
    image: '/assets/illustrations/geyser-db-controller.png',
    confirm: true
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
  ['Works if connectivity fails', 'Yes', 'Not remotely', 'Yes, press the button'],
  ['Fitted at', 'The cylinder', 'The cylinder', 'The DB board'],
  ['Monthly cost', 'None', 'R149', 'Confirm']
];

const SH_FAQ = [
  ['Which one should I actually buy?',
   'It depends what you are trying to fix. If the bill is the problem and you have roof space, the Elon takes the water heating off the grid and is the biggest single change of the three. If you want the geyser to stop heating water nobody is going to use, and you want to see what it is doing, the HotBot is the one built for that. If you want the cheapest useful thing that will still work when the Wi-Fi is down, the distribution board breaker does that and nothing else. They are not three versions of the same product and it is worth being clear which problem you are solving.'],
  ['Can I have more than one?',
   'Yes, and the combination people ask for most is a PV supply plus a schedule — the Elon deciding where the energy comes from and a controller deciding when the element runs. Tell us what you already have and we will say plainly whether adding the second one is worth it on your setup.'],
  ['Does a control device have to be at the geyser?',
   'The devices that read cylinder temperature do, because that is where the sensor has to sit. The electrical point must be within one metre of the cylinder, and a dedicated breaker on the distribution board must isolate the geyser completely. A supply-side controller like the distribution board breaker sits at the board instead, which is why it is reachable when something goes wrong.'],
  ['Will this void my geyser warranty?',
   'Not if it is installed to the manufacturer’s specification by a registered plumber and, where electrical work is involved, a qualified electrician. Work that is not is exactly how warranties get voided — which is the same argument we make about the installation itself on the geyser replacements page.'],
  ['Do the savings figures hold up?',
   'They are the manufacturers’ own published figures and we have quoted them as such rather than as our own. Both depend heavily on your tariff, your household’s hot water habits and, for the Elon, on your roof and your panel array. Treat them as the best case that a well-matched installation reaches, not as a number to budget against.'],
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
        <div style={{ border: '1px solid rgba(255,255,255,.22)', borderRadius: 4, padding: 28 }}>
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
            {d.image
              ? <div style={{ background: 'var(--web-grey-050)', border: '1px solid var(--web-grey-100)', borderRadius: 3, padding: 12, marginBottom: 12, display: 'flex', justifyContent: 'center' }}>
                  <img src={d.image} alt="A DIN rail geyser controller clipped into a distribution board, with Wi-Fi and heat indicators and a push button on the face" style={{ height: 150, width: 'auto', display: 'block' }} />
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

            <div style={{ marginTop: 14, marginBottom: 14 }}>
              <div style={{ ...LABEL, fontSize: 10, color: 'var(--web-grey-500)', marginBottom: 6 }}>Cost</div>
              <p style={{ ...BODY, fontSize: 14, margin: 0 }}>{d.cost ? d.cost : <React.Fragment>Monthly or once-off, <Confirm>pricing</Confirm></React.Fragment>}</p>
              {d.confirm ? <p style={{ ...SMALL, marginTop: 8 }}>Saving on your bill: <Confirm>figure</Confirm></p> : null}
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
      <p style={{ ...SMALL, marginTop: 16, maxWidth: '80ch' }}>Savings figures on this page are the manufacturers&rsquo; own published claims and are labelled as such. What any of them saves in your house depends on your tariff, your household&rsquo;s hot water habits and, for the Elon, on your roof and panel array.</p>
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

    {/* Compliance */}
    <Section tint eyebrow="Installation" title="Where a control device is allowed to sit">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>At the cylinder</div>
          <p style={BODY}>A device that reads the water temperature has to be at the geyser, because that is where the sensor sits. The electrical point must be within one metre of the cylinder.</p>
          <p style={{ ...BODY, margin: 0 }}>A dedicated breaker on the distribution board must isolate the geyser completely, whatever else is fitted.</p>
        </div>
        <div style={{ ...CARD, background: 'var(--web-blue-050)', border: '1px solid var(--web-blue-100)' }}>
          <div style={{ ...LABEL, marginBottom: 10 }}>We check the geyser first</div>
          <p style={BODY}>Before we fit any of these we look at the installation it is going onto. A schedule on a cylinder with no working pressure control or no vacuum breakers is a schedule on a problem.</p>
          <p style={{ ...BODY, margin: 0 }}>If something is missing we will tell you what it is and what it costs to put right, separately from the device you came for.</p>
        </div>
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
