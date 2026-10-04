const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

/* /smart-homes/smart-metering — smart water and electricity metering.

   Built 4 October 2026 from the product alignment meeting with the hardware
   supplier (2 October 2026, meeting notes and transcript on file) and the two
   supplier quotes (Q006946 / Q006968). The supplier reviews this page on
   staging before launch — that was agreed in the meeting — so every hardware
   claim below should trace to the meeting or to supplier product information.

   FACTS AND WHERE THEY COME FROM (meeting, 2 October 2026):
   - Single-meter unit: ONE pulse input, Sigfox only, sealed battery lasting
     up to five years at three reads a day. Poor signal drains the battery
     faster (repeated transmission attempts), which is why the site signal
     test below is part of the offer, not an upsell. Battery is replaceable
     by a technician; it is not rechargeable.
   - Two-channel hub (quoted as the "pulse lite"): TWO pulse inputs read
     simultaneously — water and electricity together if the meters are within
     wire reach. Multi-network firmware options beyond Sigfox: LoRa, NB-IoT,
     satellite, BLE to Wi-Fi. The Wi-Fi option needs continuous 5 V USB-C
     power with an optional rechargeable backup battery — it is NOT the
     default and the page must not imply the hub needs household Wi-Fi.
   - Terminated wire / reed switch runs are restricted to about five metres.
   - Meters with no pulse output can be read with a retrofit reed switch
     (charged per switch). Standard pulse-output (postpaid) electricity
     meters are straightforward; PREPAID meters add complexity — do not
     promise prepaid support.
   - External antenna: the SMA connector must be built in during factory
     assembly. It cannot be added in the field afterwards, so the page says
     plainly that the antenna decision is made before ordering.
   - Indoor and basement installs need a physical signal survey — coverage
     maps only reflect outdoor conditions.

   NO PRICES on this page, deliberately (Keshan, 4 October 2026): the only
   figures in hand are the supplier's trade quotes, and retail pricing is not
   set. Hardware is quoted per site after the signal survey.

   NO SUPPLIER BRANDING, deliberately (Keshan, 4 October 2026): same policy
   as the DB controller on /smart-homes — this is supplied hardware, not a
   branded Home Assist product, so the devices are named by what they do and
   the supplier wordmarks were removed from the product photography. Do not
   reintroduce a brand on the hardware until there is a product to brand. */

const SM_PROBLEM = [
  ['users', 'One bulk meter, many homes',
   'In a complex, a cluster or an estate, the municipality reads one meter at the gate. Everything behind it — every geyser, every aircon, every dripping toilet — lands in one number the trustees must somehow split fairly.'],
  ['file-text', 'A bill nobody quite trusts',
   'Split by unit size or levy share, the careful household subsidises the wasteful one, and every month ends in the same argument. A meter per home replaces the formula with a reading.'],
  ['eye', 'Usage nobody can see',
   'A spotlight left burning, an aircon that runs every night, a leak ticking over at 2am. On a monthly bulk bill these are invisible. On a daily per-home reading they stand out in a week.']
];

/* The bundling story: people ask for a "smart meter" as if it were one thing.
   It is a measuring meter plus a reader plus a network plus a platform, and
   saying so up front is what stops the "but I thought it included the meter"
   conversation at quote time. */
const SM_STEPS = [
  ['01', 'A proper meter', 'The measuring instrument itself — a mechanical or ultrasonic water meter, or an electricity meter with a pulse output. If yours is too old to talk to anything, we supply and fit one first.'],
  ['02', 'A reader on the meter', 'A small battery-powered device wired to the meter, up to five metres away. It counts every pulse the meter sends — no dials to photograph, no gate access needed.'],
  ['03', 'Its own network', 'Readings travel over a low-power national network built for meters. Nothing connects to your Wi-Fi, and there is no SIM card to manage per device.'],
  ['04', 'The billing platform', 'Readings land on the Home Assist metering platform automatically, several times a day. That is what turns one bulk bill into a correct bill per home — and what makes a leak visible.']
];

const SM_DEVICES = [
  {
    id: 'hub',
    kind: 'Two meters, one device',
    name: 'Smart Metering Hub',
    summary: 'One device with two inputs, read simultaneously — water and electricity together, or any two meters within wire reach of each other. The comprehensive option for a home or a complex metering both services.',
    points: [
      'Reads two meters at the same time — typically one water and one electricity',
      'Both meters must be within about five metres of the device',
      'Works on the same low-power network as the single-meter unit, with no household Wi-Fi needed',
      'Can be factory-configured for other networks where a site demands it — including Wi-Fi, which then runs off USB-C power with a backup battery',
      'Optional external antenna for cupboards, basements and meter boxes — specified when we order, because the connector is fitted in the factory'
    ],
    notThis: 'It is not a second electricity dispenser and it does not switch anything on or off — it reads what your meters measure and reports it. If the two meters are further than the wire allows, the honest answer is two single-meter units, and we will say so.',
    image: '/assets/illustrations/metering-hub-reader.jpg',
    imageAlt: 'A pulse reader device wired to a residential water meter, with a clip-on sensor on the meter dial. Supplier product photograph, shown unbranded.',
    imageNote: 'Supplier product photography, shown unbranded — reader wired to a standard residential water meter.'
  },
  {
    id: 'aqua',
    kind: 'One meter, sealed and simple',
    name: 'Smart Water Meter Unit',
    summary: 'A sealed, battery-powered unit for a single meter — the right answer for most standalone homes and for complexes metering water only. Fit it and forget it.',
    points: [
      'Reads one meter — built for the standard residential water meter',
      'Sealed battery lasting up to five years at three readings a day',
      'No household Wi-Fi, no SIM, no charging — it transmits on its own network',
      'Battery is replaceable by a technician at the end of its life, without replacing the unit',
      'Optional external antenna, specified when we order — the connector is fitted in the factory and cannot be added afterwards'
    ],
    notThis: 'One input means one meter. If you want water and electricity read together at the same point, that is the hub above. And battery life depends on signal: a device straining to transmit from a deep basement drains faster, which is exactly why we test the signal before we install.',
    image: '/assets/illustrations/metering-aqua-unit.jpg',
    imageAlt: 'A compact grey single-meter reading unit with a blue sealed cap, photographed on white. Supplier product photograph, shown unbranded.',
    imageNote: 'Supplier product photography, shown unbranded. High-resolution imagery to follow from the supplier.'
  }
];

/* Capability only — no prices, see the header note. */
const SM_TABLE = [
  ['Meters it reads', 'One', 'Two, simultaneously'],
  ['Water metering', 'Yes', 'Yes'],
  ['Water and electricity together', 'No', 'Yes, within wire reach'],
  ['Needs your home Wi-Fi', 'No', 'No'],
  ['Network', 'Low-power meter network', 'Same, plus factory options including Wi-Fi'],
  ['Power', 'Sealed battery, up to 5 years', 'Battery; USB-C power for the Wi-Fi option'],
  ['Distance to the meter', 'Up to about 5 m', 'Up to about 5 m per meter'],
  ['Older meter, no pulse output', 'Retrofit reed switch', 'Retrofit reed switch'],
  ['External antenna option', 'Yes — decided at order', 'Yes — decided at order'],
  ['Best for', 'A single home or water-only metering', 'Water + electricity, or two meters close together']
];

const SM_FAQ = [
  ['Does it use my Wi-Fi or need a SIM card?',
   'No. Both devices transmit on a low-power radio network built specifically for meters, so there is nothing to connect to your router, no password to update and no SIM contract per device. The hub can be factory-configured for Wi-Fi where a site genuinely needs it, but that is the exception — it then needs permanent USB-C power — and we will tell you if your site is one.'],
  ['My meter is old and has no pulse output. Can it still be read?',
   'Usually, yes. Many older meters can be fitted with a small retrofit reed switch that picks up the meter’s rotation, and the device reads that. Where the meter is genuinely too old or damaged, we supply and fit a new mechanical or ultrasonic meter first — the meter and the reader are two separate pieces, which is also why we quote them separately.'],
  ['How long does the battery last, and what happens then?',
   'The single-meter unit’s sealed battery is rated for up to five years at three readings a day. Weak signal shortens that — a device that struggles to transmit retries, and retries cost battery — which is why we physically test the signal at your meter before we install, and fit an external antenna where the reading justifies it. At end of life the battery is replaced by a technician; the unit itself stays.'],
  ['What about prepaid electricity meters?',
   'Standard postpaid electricity meters with a pulse output are straightforward and work well. Prepaid meters are a more complex case and we assess them site by site rather than promising support here. Tell us what is on your DB board and we will give you a straight answer.'],
  ['My meter is in a basement or a steel meter box. Will the signal reach?',
   'That is a site question, not a brochure question — coverage maps only reflect outdoor conditions. We test signal quality at the meter itself before anything is ordered. Where the reading is marginal we specify the device with an external antenna, and that decision has to be made before ordering, because the antenna connector is built into the device at the factory and cannot be added in the field.'],
  ['We are a body corporate. Can you do the whole complex, including the billing?',
   'Yes — this is where per-home metering earns its keep. We survey the site, fit a device per unit, and run the monthly bill cycle on our platform, so every owner pays for what their meter actually recorded. The same readings catch the overnight flow that means a leak. If you manage the building rather than live in it, the property managers page covers how the commercials work.']
];

function SmDeviceCard({ d, go }) {
  return <div style={{ ...CARD, display: 'flex', flexDirection: 'column' }}>
    <div style={{ ...LABEL, color: 'var(--web-blue)', marginBottom: 10 }}>{d.kind}</div>
    <div style={{ border: '1px solid var(--web-grey-100)', borderRadius: 3, overflow: 'hidden', marginBottom: 6, aspectRatio: '4 / 3', background: '#fff' }}>
      <img src={d.image} alt={d.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
    <p style={{ ...SMALL, fontSize: 11, marginBottom: 14 }}>{d.imageNote}</p>
    <h3 style={{ ...H3, fontSize: 19, margin: '0 0 8px' }}>{d.name}</h3>
    <p style={{ ...BODY, fontSize: 15, marginBottom: 14 }}>{d.summary}</p>
    <ul style={{ ...BODY, fontSize: 14, margin: '0 0 14px', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
      {d.points.map(function (p) { return <li key={p}>{p}</li>; })}
    </ul>
    <div style={{ borderTop: '1px solid var(--web-grey-100)', paddingTop: 12, marginBottom: 14 }}>
      <div style={{ ...LABEL, fontSize: 10, color: 'var(--web-grey-500)', marginBottom: 6 }}>What it does not do</div>
      <p style={{ ...BODY, fontSize: 14, margin: 0 }}>{d.notThis}</p>
    </div>
    <div style={{ marginTop: 'auto' }}>
      <Button variant="navy" size="sm" fullWidth as="a" target="_blank" rel="noopener"
        href={wa('Hi Home Assist, I would like to know more about the ' + d.name + '. ', 'METER-2-' + d.id.toUpperCase())}
        iconLeft={<Icon name="message-circle" size={16} color="#fff" />}>Ask about this one</Button>
    </div>
  </div>;
}

function SmartMeteringPage({ go }) {
  return <main className="ha-sm">

    {/* Hero */}
    <section style={{ background: 'var(--web-navy)' }}>
      <div style={{ ...WRAP, padding: '68px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div data-hero-text>
          <Eyebrow onDark>Smart homes · Smart metering</Eyebrow>
          <h1 style={{ ...DISPLAY, color: '#fff', maxWidth: '21ch', marginBottom: 18 }}>Fair bills start with a meter per home, read every day.</h1>
          <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', fontSize: 17, maxWidth: '56ch', marginBottom: 26 }}>A small device on each meter sends its reading to our platform several times a day — no Wi-Fi, no meter reader at the gate, no estimate. One device reads two meters where water and electricity sit together; a sealed five-year unit handles a single meter. This page explains how the pieces fit and which device suits which home.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button as="a" size="lg" variant="onDark" target="_blank" rel="noopener"
              href={wa('Hi Home Assist, I would like to talk about smart metering. ', 'METER-1')}
              iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>Talk to us about your site</Button>
            <Button as="a" size="lg" variant="ghost" href="#compare" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }} iconLeft={<Icon name="table" size={18} color="#fff" />}>Compare the two devices</Button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
          <img src="/assets/illustrations/metering-dashboard.jpg"
            alt="Illustration of a homeowner at a laptop reviewing water and electricity consumption charts"
            style={{ width: 280, maxWidth: '100%', height: 'auto', display: 'block', borderRadius: 4, flex: '0 1 auto' }} />
          <div style={{ minWidth: 0, flex: '1 1 200px' }}>
            <div style={{ ...LABEL, color: 'var(--web-blue-300)', marginBottom: 14 }}>What metered homes get</div>
            {[
              ['scale', 'A bill split by actual usage, not by formula'],
              ['calendar-check', 'Readings every day, with nobody at the gate'],
              ['droplets', 'Overnight flow flagged before it is a ceiling'],
              ['trending-down', 'Usage you can see — and change']
            ].map(function (row) {
              return <div key={row[1]} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
                <Icon name={row[0]} size={17} color="var(--web-blue-300)" />
                <span style={{ ...SMALL, color: 'rgba(255,255,255,.88)', fontSize: 14 }}>{row[1]}</span>
              </div>;
            })}
            <p style={{ ...SMALL, color: 'rgba(255,255,255,.6)', marginTop: 14 }}>Illustration.</p>
          </div>
        </div>
      </div>
    </section>

    {/* The problem */}
    <Section eyebrow="Why it is worth doing" title="The bulk meter problem"
      intro="Most homes just want the bill to be right. In complexes, clusters and estates it goes further than that — one meter at the gate means nobody knows who used what, and everybody suspects they are paying for the neighbour.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {SM_PROBLEM.map(function (row) {
          return <div key={row[1]} style={CARD}>
            <Icon name={row[0]} size={20} color="var(--web-blue)" />
            <div style={{ ...LABEL, margin: '12px 0 8px' }}>{row[1]}</div>
            <p style={{ ...BODY, margin: 0, fontSize: 14 }}>{row[2]}</p>
          </div>;
        })}
      </div>
    </Section>

    {/* What a smart meter actually is — the bundling story */}
    <Section tint eyebrow="How it works" title="A smart meter is four pieces, and we say so up front"
      intro="People ask for a smart meter as if it were one gadget. It is a measuring meter, a reader on that meter, a network, and the platform that turns readings into bills. Knowing that is what stops surprises at quote time — because if your existing meter is too old to be read, the meter comes first and the smart part clips on after.">
      <Steps items={SM_STEPS} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 28 }}>
        {[
          ['/assets/illustrations/metering-meter-mechanical.jpg', 'A flanged mechanical bulk water meter in blue cast housing', 'Mechanical water meters', 'The workhorse. If yours spins and has a pulse output — or can take a retrofit reed switch — the reader connects to it as it stands.'],
          ['/assets/illustrations/metering-meter-ultrasonic.jpg', 'A compact ultrasonic residential water meter with a digital display', 'Ultrasonic water meters', 'No moving parts and high precision. Where an old meter has to be replaced anyway, this is usually what we fit in its place.'],
          ['/assets/illustrations/metering-meter-electrical.jpg', 'A DIN-mounted electricity meter with a digital kWh display', 'Electricity meters', 'A standard meter with a pulse output is read the same way. Prepaid meters are a more complex case — ask us before assuming.']
        ].map(function (row) {
          return <div key={row[2]} style={{ ...CARD, padding: 0, overflow: 'hidden' }}>
            <img src={row[0]} alt={row[1]} style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block', borderBottom: '1px solid var(--web-grey-100)' }} />
            <div style={{ padding: 20 }}>
              <div style={{ ...LABEL, marginBottom: 8 }}>{row[2]}</div>
              <p style={{ ...BODY, margin: 0, fontSize: 14 }}>{row[3]}</p>
            </div>
          </div>;
        })}
      </div>
      <div style={{ ...CARD, marginTop: 20 }}>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 380px', minWidth: 0 }}>
            <div style={{ ...LABEL, marginBottom: 10 }}>Already have meters? They can probably stay</div>
            <p style={{ ...BODY, fontSize: 14 }}>The reader wires to the meter&rsquo;s pulse output, up to about five metres away. Meters without a pulse output can usually take a small retrofit reed switch that picks up the rotation instead — several mounting options exist to suit different meters, and the right one is chosen at the site survey.</p>
            <p style={{ ...BODY, fontSize: 14, margin: 0 }}>Only a meter that is genuinely too old or damaged gets replaced — and then the new meter is a once-off that every future reading rides on.</p>
          </div>
          <div style={{ flex: '0 1 280px', minWidth: 220 }}>
            <img src="/assets/illustrations/metering-pulse-readers.jpg"
              alt="Three retrofit pulse reader mounting options for different water meter models. Supplier product photograph, shown unbranded."
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 3, border: '1px solid var(--web-grey-100)' }} />
            <p style={{ ...SMALL, marginTop: 8 }}>Retrofit reader mounts for existing meters. Supplier photography, shown unbranded.</p>
          </div>
        </div>
      </div>
    </Section>

    {/* The two devices */}
    <Section eyebrow="The devices" title="Two devices, and an honest line between them"
      intro="One is a hub that reads two meters at once — the comprehensive option where water and electricity sit within wire reach of each other. The other is a sealed single-meter unit that does one job for up to five years on a battery. Neither is the upgrade of the other; they fit different sites.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
        {SM_DEVICES.map(function (d) { return <SmDeviceCard key={d.id} d={d} go={go} />; })}
      </div>
      <div style={{ ...CARD, marginTop: 20, background: 'var(--web-grey-050)' }}>
        <div style={{ ...LABEL, marginBottom: 10 }}>Why no prices on this page</div>
        <p style={{ ...BODY, fontSize: 14, margin: 0 }}>Because an honest metering quote is per site, not per gadget: it depends on how many meters you have, whether they have pulse outputs, how far apart they sit, what the signal at the meter actually measures, and whether an external antenna must be specified at the factory. We quote after the survey, with the hardware, the installation and the monthly billing each on its own line.</p>
      </div>
    </Section>

    {/* Comparison */}
    <Section tint eyebrow="Side by side" title="Which device fits your site" id="compare"
      intro="The rows that decide it are the first three: how many meters, whether they sit together, and what has to be read.">
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 560 }}>
          <thead>
            <tr>
              {['', 'Smart Water Meter Unit', 'Smart Metering Hub'].map(function (h) {
                return <th key={h || 'blank'} style={{ ...LABEL, textAlign: h ? 'center' : 'left', padding: '10px 8px', borderBottom: '2px solid var(--web-navy)', verticalAlign: 'bottom' }}>{h}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {SM_TABLE.map(function (row) {
              return <tr key={row[0]}>
                <td style={{ ...BODY, margin: 0, fontSize: 14, padding: '10px 8px', borderBottom: '1px solid var(--web-grey-100)' }}>{row[0]}</td>
                {row.slice(1).map(function (cell, i) {
                  return <td key={i} style={{ font: '600 14px/1.3 var(--font-core)', color: cell === 'No' ? 'var(--web-grey-500)' : 'var(--web-navy)', textAlign: 'center', padding: '10px 8px', borderBottom: '1px solid var(--web-grey-100)' }}>{cell}</td>;
                })}
              </tr>;
            })}
          </tbody>
        </table>
      </div>
      <p style={{ ...SMALL, marginTop: 14, maxWidth: '76ch' }}>Specifications from the supplier&rsquo;s product information and our product alignment review with the supplier, October 2026. Battery life is the supplier&rsquo;s rating at three readings a day with adequate signal.</p>
    </Section>

    {/* Signal first — the honesty card */}
    <Section eyebrow="Before anything is ordered" title="We test the signal at your meter first"
      intro="Coverage maps show outdoor signal. Meters live in cupboards, steel boxes and basements.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>A physical site survey</div>
          <p style={{ ...BODY, fontSize: 14, margin: 0 }}>We measure signal quality at the meter itself — not at the gate, not off a map — before any hardware is ordered. Indoor and below-ground meters are exactly the sites where a desk estimate gets it wrong.</p>
        </div>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>Antenna decided up front</div>
          <p style={{ ...BODY, fontSize: 14, margin: 0 }}>Where the reading is marginal, the device is specified with an external antenna. That connector is built in at the factory and <strong>cannot be added in the field later</strong> — which is why the survey comes before the order, not after the complaints.</p>
        </div>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>Because battery life depends on it</div>
          <p style={{ ...BODY, fontSize: 14, margin: 0 }}>A device with poor signal retries its transmissions, and retries eat the battery that was rated for five years. Getting the signal right on day one is what makes the five-year number honest.</p>
        </div>
      </div>
    </Section>

    {/* Installed and billed by Home Assist */}
    <Section tint eyebrow="Who does the work" title="Surveyed, installed and billed by Home Assist">
      <div style={{ ...CARD }}>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 380px', minWidth: 0 }}>
            <p style={{ ...BODY, fontSize: 15 }}>We survey the site, choose the right reader for each meter, fit it, and confirm every device is transmitting before we leave. Swapping a reader onto an existing meter takes minutes per unit; the meter itself stays in place.</p>
            <p style={{ ...BODY, fontSize: 15 }}>Then the part that matters every month: readings land on the Home Assist metering platform automatically, and we run the bill cycle — a correct statement per home, from that home&rsquo;s own meter. Body corporates on our platform have run their billing this way for years.</p>
            <p style={{ ...BODY, fontSize: 15, margin: 0 }}>And because the same readings arrive every day, the platform sees what a monthly bill never shows: the overnight flow on a unit that should be flat. That is a leak caught as a phone call, not as a ceiling.</p>
          </div>
          <div style={{ flex: '0 1 300px', minWidth: 220 }}>
            <img src="/assets/illustrations/metering-van.jpg"
              alt="Illustration of a Home Assist service van driving through a residential suburb"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 3, border: '1px solid var(--web-grey-100)' }} />
            <p style={{ ...SMALL, marginTop: 8 }}>Illustration.</p>
          </div>
        </div>
      </div>
    </Section>

    {/* CTA */}
    <NavyBand eyebrow="Start with the survey" title="Tell us how many meters you have and where they live, and we will take it from there.">
      <Button as="a" size="lg" variant="onDark" target="_blank" rel="noopener"
        href={wa('Hi Home Assist, I would like a smart metering survey. My property is: ', 'METER-3')}
        iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>WhatsApp us</Button>
      <Button as="a" size="lg" variant="ghost" href={'tel:' + CH.phoneTel} style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }} iconLeft={<Icon name="phone" size={18} color="#fff" />}>{CH.phone}</Button>
    </NavyBand>

    {/* FAQ */}
    <Section eyebrow="Questions" title="What people ask before metering a property">
      <Accordion items={SM_FAQ} />
    </Section>

    {/* Close */}
    <Section tint eyebrow="Related" title="Metering is half of it"
      intro="The same visit that puts a reader on your meter can put your geyser on a schedule — and if the readings ever show overnight flow, leak detection is the next call.">
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button variant="navy" size="lg" onClick={function () { go('smartHomes'); }} iconLeft={<Icon name="zap" size={18} color="#fff" />}>Smart geyser control</Button>
        <Button variant="secondary" size="lg" onClick={function () { go('leakDetection'); }} iconLeft={<Icon name="search" size={18} color="var(--web-navy)" />}>Leak detection</Button>
        <Button variant="secondary" size="lg" onClick={function () { go('propertyManagers'); }} iconLeft={<Icon name="building-2" size={18} color="var(--web-navy)" />}>For property managers</Button>
      </div>
    </Section>
  </main>;
}

Object.assign(window, { SmartMeteringPage });
