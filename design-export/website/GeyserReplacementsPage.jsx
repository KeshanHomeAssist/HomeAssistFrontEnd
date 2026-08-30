const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

/* /geyser-replacements — the second service page, sibling of /leak-detection.

   Highest-search-volume and highest-margin line in the business, so the page is
   a guided configurator rather than a description: five questions build a
   running specification, and the whole thing is handed to WhatsApp as one
   structured message. The person who answers already knows the system, the
   position, the access, the capacity and the brand before they reply.

   TWO CONVERSION GOALS, IN THIS ORDER:

   1. Warranty capture (§ Warranty, immediately under the hero). Most geysers
      carry a five-year manufacturer warranty. Checking costs Home Assist
      nothing and may save the customer the whole job, which is exactly why they
      come back to us when they do have to buy.
   2. A configured replacement enquiry (the rest of the page).

   The warranty block moved here from the home page — HomePage.jsx carries a
   short pointer to '/geyser-replacements#warranty' in its place.

   SMART CONTROL MOVED OUT (30 August 2026). The Elon, Plentify HotBot and the
   Home Assist DB board breaker are now /smart-homes. They are a separate
   purchase decision made at a different time, they were making an already long
   page longer, and separating them lets each page target its own search intent.
   This page keeps one pointer to it and an interest checkbox on the form.

   NO RAND FIGURES IN THE CONFIGURATOR. There is no installed price grid per
   brand, capacity, pressure type and access, and a running estimate assembled
   from invented line items is worse than no estimate at all. The panel
   accumulates a SPECIFICATION, not a price. The one money figure is the band
   already published on the home page for the same product, shown behind the
   same CostReveal disclosure so it keeps firing `estimated_costs_view`.

   PRERENDER SAFETY: this file is server-rendered to static HTML before it
   hydrates. Nothing may touch window, document or localStorage during render —
   saved state is read in an effect after mount. */

const GR_STORAGE_KEY = 'ha-geyser-config-v1';

const GR_SAFETY = [
  ['file-check', 'Certificate of compliance',
   'Issued by a registered plumber on completion and logged. Your insurer can ask for it, and without one an installation is not finished.'],
  ['gauge', 'Correct pressure control',
   'A pressure control valve matched to the rating of the cylinder that was actually fitted, not to whatever was in the van.'],
  ['droplets', 'Drip tray and overflow',
   'Piped to a visible discharge point, so a leak shows itself outside the house instead of soaking through your ceiling.'],
  ['shield-check', 'Vacuum breakers',
   'Fitted above the cylinder on both hot and cold, so the tank cannot siphon itself empty and burn out the element.'],
  ['zap', 'Correct electrical isolation',
   'A dedicated breaker on the distribution board, and an isolator within one metre of the cylinder.']
];

/* Four system types, electric first — it is the default in South African homes
   and the one most visitors are here for. High and low pressure are not system
   types, they are a property of an electric installation, so they moved to a
   follow-up question rather than sitting alongside solar and gas as though they
   were the same kind of choice. */
const GR_SYSTEMS = [
  ['electric', 'Electric', 'zap', 'The standard geyser in most South African homes. An element in the cylinder, on your distribution board.'],
  ['solar', 'Solar', 'sun', 'Panels or evacuated tubes on the roof feeding a cylinder, with an element as backup.'],
  ['heatpump', 'Heat pump', 'wind', 'An outdoor unit that heats the cylinder using ambient air, like an air conditioner in reverse.'],
  ['gas', 'Gas', 'flame', 'Instantaneous or storage gas water heating, usually LPG.']
];

const GR_PRESSURES = [
  ['high', 'High pressure', 'The standard installation. Taps run at mains pressure.'],
  ['low', 'Low pressure', 'Fed from a tank in the roof. Taps run slower.'],
  ['unsure', 'Not sure', 'We will confirm it on site. It does not hold anything up.']
];

const GR_POSITIONS = [
  ['ceiling', 'In the ceiling or roof space'],
  ['internal-wall', 'Mounted on an internal wall'],
  ['roof', 'Outside on the roof'],
  ['garage', 'In the garage'],
  ['attic', 'In the attic or loft'],
  ['external-wall', 'Outside on an external wall']
];

const GR_ACCESS = [
  ['clear', 'Yes, clear access'],
  ['tight', 'Tight'],
  ['unsure', 'Not sure']
];

const GR_CAPACITIES = [50, 100, 150, 200, 250];
const GR_HOUSEHOLD_FOR = { 50: '1 person', 100: '2 people', 150: '3 to 4 people', 200: '4 to 5 people', 250: '5 to 6 people' };
/* How many figures light up at each capacity — the top of the range above, so a
   150 L cylinder shows four and reads as "up to four people". */
const GR_PEOPLE_FOR = { 50: 1, 100: 2, 150: 4, 200: 5, 250: 6 };
const GR_PEOPLE_STEPS = [1, 2, 3, 4, 5, 6];

/* The four cylinder brands Home Assist supplies, presented as equals.

   HELLO PETER RATINGS REMOVED, 30 August 2026. They were 2.6 and 2.5 — 0.1
   apart, which differentiated nothing, and a bare 2.6 beside "we recommend this
   one first" argued against our own recommendation. A complaint-weighted index
   does that to any manufacturer with volume. If a service metric goes back on
   these cards it should be one that supports the argument rather than
   undercutting it — response rate would.

   No lead-and-secondary tiering either. All four are cylinders we fit, they are
   shown at the same size with their own logo, and 'Not sure' is a first-class
   option rather than something a visitor has to work out how to skip. Most
   people genuinely do not have a view on this, and forcing a choice they cannot
   make is how a configurator gets abandoned three questions from the end. */
const GR_BRANDS = [
  {
    id: 'kwikot', name: 'Kwikot',
    logo: '/assets/logo/logo-kwikot.png',
    covers: 'Electric, solar and gas',
    body: 'One of the most established cylinders in the South African market. Home Assist holds a warranty capability on Kwikot that most installers do not, so a warranty claim on a unit we fitted is handled by us rather than passed back to you.'
  },
  {
    id: 'ariston', name: 'Ariston',
    logo: '/assets/logo/logo-ariston.png',
    covers: 'Electric, solar and gas',
    note: 'The new name for Heat Tech — same manufacturer.',
    body: 'A wide range across electric, solar and gas water heating, and widely stocked, so a same-day replacement is usually possible on the common capacities.'
  },
  {
    id: 'tecron', name: 'Tecron',
    logo: '/assets/logo/logo-tecron.png',
    covers: 'Electric and solar',
    note: 'Manufactured in Cape Town.',
    body: 'Copper hot water cylinders built to SABS specification, in standard, slimline, square, point-of-use and solar ranges. A local manufacturer, which can mean a shorter lead time on an unusual size.'
  },
  {
    id: 'xstream', name: 'Xstream',
    logo: '/assets/logo/logo-xstream.png',
    covers: 'Electric and solar',
    note: 'Made only in the Western Cape.',
    body: 'Solar ready, like Kwikot and Ariston, and the only fibre cylinder on the market — a different material to the steel and copper everything else is built from. Made in the province where most of our geyser work sits, which can mean a shorter lead time.'
  }
];

const GR_FAQ = [
  ['How long does a geyser replacement take?',
   'A standard replacement is normally done in one visit of about three to four hours, and we can often do it the same day. What turns one visit into two is arriving without the right cylinder or without access — which is exactly what the questions on this page are for. Tell us the system type, the position and the access up front and the team arrives with the right unit, the right brackets and the right number of people.'],
  ['Is my geyser still under warranty?',
   'Most geysers carry a five-year manufacturer warranty, and a unit still inside it may be repaired or replaced by the manufacturer at no cost to you. Send us a photograph of the plate on the side of the cylinder and we will decode the manufacturer and date code and tell you. It costs you nothing and it costs us nothing, so there is no reason not to check before you buy anything.'],
  ['What is a certificate of compliance and do I actually need one?',
   'It is the document a registered plumber issues on completion, confirming the installation meets the national standard. You need it for two reasons. Your insurer can ask for it when you claim, and without one you have no evidence the work was done properly. Home Assist issues and logs a PIRB certificate of compliance on every geyser installation.'],
  ['Why does the warranty matter more than the price?',
   'Because a five-year warranty is only worth what the manufacturer will actually honour. The most common reason a geyser warranty is voided is that the original installer did not install the cylinder to the manufacturer’s diagram and to the national standard. The homeowner then buys a second geyser before the first one’s warranty has expired, which makes the cheap installation the expensive one.'],
  ['What size cylinder do I need?',
   'The standard allowance is roughly 35 to 50 litres of hot water per person, but your household’s habits matter more than the arithmetic. If everyone showers at the same time, size up. If showers can be staggered, a cylinder reheats in about an hour and a smaller unit will serve more people comfortably. Around 70% of the South African market runs a 150 litre cylinder.'],
  ['What is not included in a replacement?',
   'Pipe rerouting beyond the existing point, ceiling or roof repairs, structural access work, and electrical work beyond the isolator. Those are quoted separately once they have been seen, rather than guessed at over a message. The scope is confirmed on site before any work starts.'],
  ['Can you replace a geyser that my insurer has settled in cash?',
   'Yes. If your insurer has paid out and asked you to appoint your own plumber, we can do the replacement and we can also verify a quote you have been given elsewhere. You get the certificate of compliance either way, which is the part that protects you afterwards.'],
  ['Do you work outside Cape Town?',
   'Yes. Home Assist manages property incidents across South Africa through a vetted contractor network. Cape Town and the Western Cape are where most of our own geyser replacement work sits, so same-day turnaround is most likely there.']
];

function grLabelFor(list, id, fallback) {
  const hit = list.find(function (row) { return row[0] === id; });
  return hit ? hit[1] : fallback;
}

function GrSummaryLine({ label, value }) {
  return <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--web-grey-100)' }}>
    <span style={{ ...LABEL, fontSize: 10, color: 'var(--web-grey-500)', flex: '0 0 auto' }}>{label}</span>
    <span style={{ font: (value ? '600' : '400') + ' 13px/1.35 var(--font-core)', color: value ? 'var(--web-navy)' : 'var(--web-grey-500)', textAlign: 'right' }}>{value || 'Not specified'}</span>
  </div>;
}

function GrStep({ n, label, title, intro, children, id }) {
  return <div id={id} style={{ paddingTop: 40, borderTop: '1px solid var(--web-grey-100)', marginTop: 40 }}>
    <div style={{ ...LABEL, color: 'var(--web-blue)', marginBottom: 8 }}>Step {n} &middot; {label}</div>
    <h3 style={{ ...H2, fontSize: 22, marginBottom: 10 }}>{title}</h3>
    {intro ? <p style={{ ...BODY, maxWidth: '62ch' }}>{intro}</p> : null}
    {children}
  </div>;
}

function GrChoice({ selected, onSelect, icon, title, note, body, wide }) {
  return <button type="button" onClick={onSelect} aria-pressed={selected}
    style={{
      textAlign: 'left', cursor: 'pointer', background: selected ? 'var(--web-blue-050)' : '#fff',
      border: '1px solid ' + (selected ? 'var(--web-blue)' : 'var(--web-grey-100)'),
      borderLeft: (selected ? '3px solid var(--web-blue)' : '1px solid var(--web-grey-100)'),
      borderRadius: 4, padding: wide ? '14px 16px' : 18, minHeight: 'var(--web-tap-min)',
      display: 'flex', flexDirection: wide ? 'row' : 'column', alignItems: wide ? 'center' : 'flex-start',
      gap: wide ? 12 : 0, font: 'inherit', width: '100%', boxSizing: 'border-box'
    }}>
    {icon ? <Icon name={icon} size={20} color={selected ? 'var(--web-blue)' : 'var(--web-grey-500)'} /> : null}
    <span style={{ flex: 1 }}>
      <span style={{ display: 'block', font: '600 16px/1.3 var(--font-core)', color: 'var(--web-navy)', marginTop: icon && !wide ? 12 : 0 }}>{title}</span>
      {note ? <span style={{ display: 'block', ...SMALL, color: 'var(--web-blue)', marginTop: 4 }}>{note}</span> : null}
      {body ? <span style={{ display: 'block', ...BODY, margin: '6px 0 0', fontSize: 14 }}>{body}</span> : null}
    </span>
    {selected ? <Icon name="check" size={18} color="var(--web-blue)" /> : null}
  </button>;
}

function GeyserReplacementsPage({ go }) {
  const [systemType, setSystemType] = React.useState('');
  const [pressure, setPressure] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [access, setAccess] = React.useState('');
  const [capacity, setCapacity] = React.useState(150);
  const [brand, setBrand] = React.useState('');
  const [showDiagnostic, setShowDiagnostic] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [manualLink, setManualLink] = React.useState('');
  const [ready, setReady] = React.useState(false);

  const capacityIndex = GR_CAPACITIES.indexOf(capacity);

  React.useEffect(function () {
    let saved = null;
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('c')) {
        saved = JSON.parse(decodeURIComponent(escape(atob(params.get('c')))));
      } else {
        const raw = window.localStorage.getItem(GR_STORAGE_KEY);
        if (raw) saved = JSON.parse(raw);
      }
    } catch (e) { saved = null; }
    if (saved) {
      if (saved.systemType) setSystemType(saved.systemType);
      if (saved.pressure) setPressure(saved.pressure);
      if (saved.position) setPosition(saved.position);
      if (saved.access) setAccess(saved.access);
      if (saved.capacity) setCapacity(saved.capacity);
      if (saved.brand) setBrand(saved.brand);
    }
    setReady(true);
  }, []);

  React.useEffect(function () {
    if (!ready) return;
    try {
      window.localStorage.setItem(GR_STORAGE_KEY, JSON.stringify({ systemType, pressure, position, access, capacity, brand }));
    } catch (e) { /* private browsing, or storage disabled — the page still works */ }
  }, [ready, systemType, pressure, position, access, capacity, brand]);

  /* Heat pump is the one system with no cylinder list, so a brand chosen before
     switching to it would leave a specification we cannot supply. */
  React.useEffect(function () {
    if (systemType === 'heatpump' && brand) setBrand('');
  }, [systemType, brand]);

  /* Pressure is a property of an electric installation. Choosing solar or gas
     after answering it leaves a stale answer in the specification. */
  React.useEffect(function () {
    if (systemType && systemType !== 'electric' && pressure) setPressure('');
  }, [systemType, pressure]);

  function choose(field, setter, value, stepLabel) {
    setter(value);
    grTrack('geyser_step_complete', { step: stepLabel, field: field, value: String(value) });
  }

  const noBrandsForSystem = systemType === 'heatpump';

  const spec = {
    systemType: systemType ? grLabelFor(GR_SYSTEMS, systemType) : '',
    pressure: pressure ? grLabelFor(GR_PRESSURES, pressure) : '',
    position: position ? grLabelFor(GR_POSITIONS, position) : '',
    access: access ? grLabelFor(GR_ACCESS, access) : '',
    capacity: capacity + ' L',
    household: GR_HOUSEHOLD_FOR[capacity],
    brand: brand === 'unsure' ? 'Not sure — recommend one' : (brand ? (GR_BRANDS.find(function (b) { return b.id === brand; }) || {}).name : '')
  };

  const answered = ['systemType', 'pressure', 'position', 'access', 'brand'].filter(function (k) { return spec[k]; }).length + 1;

  function specIntro() {
    return [
      'Geyser replacement enquiry — homeassist.co.za',
      '',
      'SYSTEM TYPE: ' + (spec.systemType || 'Not specified'),
      'PRESSURE: ' + (spec.pressure || 'Not specified'),
      'POSITION: ' + (spec.position || 'Not specified'),
      'ACCESS: ' + (spec.access || 'Not specified'),
      'CAPACITY: ' + spec.capacity + ' (household of ' + spec.household + ')',
      'BRAND: ' + (spec.brand || 'Not specified')
    ].join('\n');
  }

  function submit(e) {
    e.preventDefault();
    grTrack('geyser_spec_submit', { answered: answered, system_type: systemType || 'not_specified', brand: brand || 'not_specified' });
    const url = whatsappHandoff(e.target, { intro: specIntro() + '\n\nCONTACT DETAILS' });
    setManualLink(url);
    setSent(true);
  }

  /* Fires as soon as there is a name and a usable mobile number, before the
     form is submitted. Abandonment at the contact step is common and an enquiry
     that got this far is already worth a call back. */
  const partialSent = React.useRef(false);
  function checkPartial(e) {
    if (partialSent.current) return;
    const form = e.currentTarget;
    const name = (form.querySelector('[name="Full name"]') || {}).value || '';
    const mobile = (form.querySelector('[name="Mobile number"]') || {}).value || '';
    if (name.trim().length > 1 && mobile.replace(/[^0-9]/g, '').length >= 9) {
      partialSent.current = true;
      grTrack('geyser_partial_lead', { answered: answered });
    }
  }

  const shareUrl = function () {
    try {
      const payload = btoa(unescape(encodeURIComponent(JSON.stringify({ systemType, pressure, position, access, capacity, brand }))));
      return window.location.origin + '/geyser-replacements?c=' + payload;
    } catch (e) { return ''; }
  };

  const summaryPanel = <div>
    <div style={{ ...LABEL, marginBottom: 12 }}>Your specification</div>
    <GrSummaryLine label="System type" value={spec.systemType} />
    {(!systemType || systemType === 'electric') ? <GrSummaryLine label="Pressure" value={spec.pressure} /> : null}
    <GrSummaryLine label="Position" value={spec.position} />
    <GrSummaryLine label="Access" value={spec.access} />
    <GrSummaryLine label="Capacity" value={spec.capacity + ' · ' + spec.household} />
    <GrSummaryLine label="Brand" value={spec.brand} />
    <p style={{ ...SMALL, marginTop: 14 }}>Nothing here is compulsory. Anything you skip we will ask about when we call, and the rest still saves the visit.</p>
  </div>;

  return <main className="ha-gr">

    {/* Hero */}
    <section style={{ background: 'var(--web-navy)' }}>
      <div style={{ ...WRAP, padding: '68px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div data-hero-text>
          <Eyebrow onDark>Geyser replacements</Eyebrow>
          <h1 style={{ ...DISPLAY, color: '#fff', maxWidth: '20ch', marginBottom: 18 }}>A compliant, safe and functional hot water system — installed and certified.</h1>
          <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', fontSize: 17, maxWidth: '54ch', marginBottom: 26 }}>Home Assist only does geyser replacements that leave the home compliant. Every installation is issued with a certificate of compliance. Start with the warranty check — it is free, and it may mean you do not need to buy anything at all.</p>
          {/* Contact first. Somebody arriving here with no hot water wants a
              person, not a form — the configurator is the second button, not
              the first, and the free warranty check is offered underneath. */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button as="a" size="lg" variant="onDark" target="_blank" rel="noopener"
              href={wa('Hi Home Assist, I need a geyser replacement. ')}
              iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>WhatsApp us</Button>
            <Button as="a" size="lg" variant="ghost" href={'tel:' + CH.phoneTel} style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }} iconLeft={<Icon name="phone" size={18} color="#fff" />}>Call {CH.phone}</Button>
            <Button as="a" size="lg" variant="ghost" href="#configurator" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }} iconLeft={<Icon name="clipboard-check" size={18} color="#fff" />}>Build your spec</Button>
          </div>
          <p style={{ ...SMALL, color: 'rgba(255,255,255,.75)', marginTop: 14 }}>Not replacing yet? <a href="#warranty" style={{ color: '#fff', fontWeight: 600 }}>Check whether your geyser is still under warranty</a> — free, and it may mean you do not need to buy anything.</p>
        </div>
        <div style={{ border: '1px solid rgba(255,255,255,.22)', borderRadius: 4, overflow: 'hidden', lineHeight: 0 }}>
          <img src="/assets/illustrations/geyser-hero-3-shower.jpg"
            alt="A rain shower head running at strong, even pressure in a sunlit bathroom"
            style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </section>

    {/* Five safety factors */}
    <Section eyebrow="What makes an installation safe" title="Five things a compliant geyser installation has"
      intro="If any one of these is missing, the installation is not finished — whatever it cost and whoever signed it off.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
        {GR_SAFETY.map(function (row) {
          return <div key={row[1]} style={CARD}>
            <Icon name={row[0]} size={20} color="var(--web-blue)" />
            <div style={{ ...LABEL, margin: '12px 0 8px' }}>{row[1]}</div>
            <p style={{ ...BODY, margin: 0, fontSize: 14 }}>{row[2]}</p>
          </div>;
        })}
      </div>

      {/* The parts themselves. The valve and the element are the two components
          a homeowner never sees and an insurer always asks about. */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 24 }}>
        <div style={{ ...CARD, display: 'flex', gap: 20, alignItems: 'center' }}>
          <img src="/assets/illustrations/geyser-control-valve.png" alt="A brass geyser control valve assembly with an isolating lever, a pressure control cartridge and compression fittings" style={{ width: 120, height: 'auto', display: 'block', flex: '0 0 auto' }} />
          <div>
            <div style={{ ...LABEL, marginBottom: 8 }}>A dripping valve is not always a dead geyser</div>
            <p style={{ ...BODY, margin: '0 0 10px', fontSize: 14 }}>Water sediment collects in the strainer on the pressure control valve, and a blocked strainer makes the valve drip more than it should. That looks like a failing geyser and it often is not one — so a dripping overflow is worth having looked at before anybody quotes you for a new cylinder.</p>
            <p style={{ ...BODY, margin: 0, fontSize: 14 }}>When the cylinder genuinely is being replaced, the valve gets replaced with it. That is good practice rather than an upsell: <strong>the valve pressure may never exceed the cylinder pressure</strong>, so a valve carried over from the old installation can be wrong for the new one.</p>
          </div>
        </div>
        <div style={{ ...CARD, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <img src="/assets/illustrations/geyser-element-technician.jpg" alt="A Home Assist technician holding a replacement geyser element and thermostat assembly" style={{ width: '100%', height: 200, objectFit: 'cover', objectPosition: 'center 30%', display: 'block', borderBottom: '1px solid var(--web-grey-100)' }} />
          <div style={{ padding: 24 }}>
            <div style={{ ...LABEL, marginBottom: 8 }}>The element and thermostat</div>
            <p style={{ ...BODY, margin: 0, fontSize: 14 }}>A burnt-out element is often a symptom rather than the fault. If the tank siphoned itself empty because a vacuum breaker was missing, replacing the element alone puts you back where you started in a few months.</p>
          </div>
        </div>
      </div>
    </Section>

    {/* Warranty check — moved off the home page. The loudest block on the page. */}
    <section id="warranty" style={{ background: 'var(--web-navy)' }}>
      <div style={{ ...WRAP, padding: '60px 40px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 40, alignItems: 'center' }}>
        <div data-hero-text>
          <Eyebrow onDark>Before you replace anything</Eyebrow>
          <h2 style={{ ...H2, color: '#fff', fontSize: 27, maxWidth: '24ch' }}>First — check if your geyser is still under warranty</h2>
          <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', fontSize: 17, maxWidth: '58ch' }}>Most geysers carry a five-year manufacturer warranty. If yours is still covered, the replacement may cost you nothing. Send us a photograph of the plate on the side of your cylinder and we will decode the manufacturer and date code and check it for you at no charge.</p>
          <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', maxWidth: '58ch' }}>If you are claiming, or your insurer has settled in cash and asked you to appoint your own plumber, we can verify the quote and the work as well.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 6 }}>
            <Button as="a" size="lg" variant="onDark" target="_blank" rel="noopener"
              href={wa('Hi Home Assist, I would like to check if my geyser is under warranty. I have attached a photo of the geyser plate.')}
              iconLeft={<Icon name="camera" size={18} color="#fff" />}>Send us the serial plate</Button>
            <Button as="a" size="lg" variant="ghost" href={'tel:' + CH.phoneTel} style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }} iconLeft={<Icon name="phone" size={18} color="#fff" />}>{CH.phone}</Button>
          </div>
          <p style={{ ...SMALL, color: 'rgba(255,255,255,.7)', marginTop: 14 }}>Would rather not use WhatsApp? Email the brand, serial number and rough installation year to <a href={mailtoLink(CH.help, 'Geyser warranty check')} style={{ color: '#fff' }}>{CH.help}</a> and we will come back to you.</p>
        </div>
        <div>
          <div style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(255,255,255,.22)', background: 'var(--web-navy-900)' }}>
            <img src="/assets/illustrations/serial-plate-electrolux.jpg" alt="The rating plate on the side of a geyser, showing the brand, capacity, serial number and manufacture date code" style={{ display: 'block', width: '100%', height: 190, objectFit: 'cover' }} />
            <div className="ha-scan"></div>
            <div style={{ position: 'absolute', left: 10, bottom: 8, ...LABEL, fontSize: 10, color: '#fff', background: 'rgba(11,29,58,.72)', padding: '3px 6px', borderRadius: 2 }}>Decoding serial</div>
          </div>
          <div style={{ marginTop: 12, border: '1px solid rgba(255,255,255,.22)', borderRadius: 4, padding: '14px 16px' }}>
            <div style={{ ...LABEL, color: 'var(--web-blue-300)', marginBottom: 8 }}>What we need to see</div>
            {['Brand', 'Capacity in litres', 'Serial number', 'Manufacture date code'].map(function (t) {
              return <div key={t} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                <Icon name="check" size={14} color="var(--web-blue-300)" />
                <span style={{ ...SMALL, color: 'rgba(255,255,255,.85)' }}>{t}</span>
              </div>;
            })}
            <p style={{ ...SMALL, color: 'rgba(255,255,255,.6)', marginTop: 8 }}>The plate is on the side of the cylinder, usually near the pipework. One clear photograph is enough.</p>
          </div>
        </div>
      </div>
    </section>

    {/* The configurator */}
    <section id="configurator" style={{ background: '#fff' }}>
      <div style={{ ...WRAP, padding: '64px 40px' }}>
        <Eyebrow>Build your specification</Eyebrow>
        <h2 style={{ ...H2, fontSize: 26, marginBottom: 14, maxWidth: '26ch' }}>Five questions for same-day service</h2>
        <div style={{ width: 56, height: 3, background: 'var(--web-blue)', marginBottom: 24 }}></div>
        <p style={{ ...BODY, maxWidth: '68ch', fontSize: 17 }}>Nothing here is gated and nothing is compulsory. Every answer you give is one less thing to establish on the phone, and knowing the position and the access up front is what lets us arrive with the right unit, the right brackets and the right size team — and replace on the same day.</p>

        <div className="ha-gr-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 40, alignItems: 'start', marginTop: 32 }}>

          <div>
            {/* Step 1 — system type */}
            <GrStep n="1" label="System type" title="What type of system do you have?"
              intro="This decides which cylinders we can actually supply, so the brands you are shown later are only ones that exist for your system.">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginTop: 18 }}>
                {GR_SYSTEMS.map(function (s) {
                  return <GrChoice key={s[0]} selected={systemType === s[0]} icon={s[2]} title={s[1]} body={s[3]}
                    onSelect={function () { choose('system_type', setSystemType, s[0], 'system_type'); }} />;
                })}
              </div>

              {systemType === 'electric' ? <div style={{ marginTop: 20 }}>
                <div style={{ ...LABEL, marginBottom: 10 }}>Pressure</div>
                <p style={{ ...BODY, fontSize: 14, maxWidth: '58ch' }}>Is it a high or a low pressure installation? If there is a tank in your roof feeding the geyser, it is low pressure.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                  {GR_PRESSURES.map(function (p) {
                    return <GrChoice key={p[0]} selected={pressure === p[0]} title={p[1]} body={p[2]}
                      onSelect={function () { choose('pressure', setPressure, p[0], 'pressure'); }} />;
                  })}
                </div>
              </div> : null}

              {systemType === 'solar' ? <div style={{ ...CARD, padding: 0, overflow: 'hidden', marginTop: 18, display: 'grid', gridTemplateColumns: '260px 1fr', alignItems: 'center' }}>
                <img src="/assets/illustrations/geyser-solar-install.jpg" alt="A technician on a pitched roof installing an evacuated tube solar collector connected to a horizontal cylinder" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: 20 }}>
                  <div style={{ ...LABEL, marginBottom: 8 }}>Solar replacements</div>
                  <p style={{ ...BODY, margin: 0, fontSize: 14 }}>A solar system is a cylinder and a collector, and either can fail on its own. Tell us which one is giving trouble if you know — if you do not, we establish it on site before anything is quoted.</p>
                </div>
              </div> : null}

              <button type="button" onClick={function () { setShowDiagnostic(!showDiagnostic); }}
                style={{ background: 'none', border: 0, padding: '12px 0 0', cursor: 'pointer', color: 'var(--web-blue)', font: '600 15px/1.4 var(--font-core)', minHeight: 'var(--web-tap-min)' }}>
                {showDiagnostic ? 'Close' : 'Not sure which one I have'}
              </button>
              {showDiagnostic ? <div style={{ ...CARD, background: 'var(--web-blue-050)', border: '1px solid var(--web-blue-100)', marginTop: 8 }}>
                <div style={{ ...LABEL, marginBottom: 10 }}>Three questions that usually settle it</div>
                {[
                  ['Is there a panel or a row of glass tubes on your roof?', 'That is solar.'],
                  ['Is there an outdoor unit near the house that hums, like an air conditioner?', 'That is a heat pump.'],
                  ['Is there a gas bottle or a wall-mounted unit that fires up when you open a hot tap?', 'That is gas.']
                ].map(function (row) {
                  return <div key={row[0]} style={{ marginBottom: 12 }}>
                    <div style={{ font: '600 15px/1.4 var(--font-core)', color: 'var(--web-navy)' }}>{row[0]}</div>
                    <div style={{ ...BODY, margin: '2px 0 0', fontSize: 14 }}>{row[1]}</div>
                  </div>;
                })}
                <p style={{ ...BODY, margin: 0, fontSize: 14 }}>None of those? It is almost certainly a standard electric geyser, which is what most South African homes have. Choose Electric and skip the pressure question if you are not sure.</p>
              </div> : null}
            </GrStep>

            {/* Step 2 — position */}
            <GrStep n="2" label="Position" title="Where is the geyser?"
              intro="Insurers and plumbers both call it a hot water cylinder, and customers call it a geyser. Either way, where it sits decides the access, the brackets and how many people we send.">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginTop: 18 }}>
                {GR_POSITIONS.map(function (p) {
                  return <GrChoice key={p[0]} wide selected={position === p[0]} title={p[1]} icon="map-pin"
                    onSelect={function () { choose('position', setPosition, p[0], 'position'); }} />;
                })}
              </div>
              {position ? <div style={{ marginTop: 20 }}>
                <div style={{ ...LABEL, marginBottom: 10 }}>Access</div>
                <p style={{ ...BODY, fontSize: 14, maxWidth: '58ch' }}>Is there clear access for a two-person team carrying a full cylinder?</p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {GR_ACCESS.map(function (a) {
                    return <button key={a[0]} type="button" onClick={function () { choose('access', setAccess, a[0], 'access'); }} aria-pressed={access === a[0]}
                      style={{ cursor: 'pointer', minHeight: 'var(--web-tap-min)', padding: '10px 18px', borderRadius: 4, font: '600 15px/1.2 var(--font-core)', background: access === a[0] ? 'var(--web-blue-050)' : '#fff', border: '1px solid ' + (access === a[0] ? 'var(--web-blue)' : 'var(--web-grey-300)'), color: 'var(--web-navy)' }}>{a[1]}</button>;
                  })}
                </div>
              </div> : null}
              <div style={{ ...CARD, padding: 0, overflow: 'hidden', marginTop: 20 }}>
                <img src="/assets/illustrations/geyser-roof-space-install.jpg" alt="A plumber kneeling on the joists of a roof space, guiding a hot water cylinder into position on a bearer" style={{ width: '100%', height: 260, objectFit: 'cover', objectPosition: 'center 55%', display: 'block' }} />
                <div style={{ padding: 20, borderTop: '1px solid var(--web-grey-100)' }}>
                  <p style={{ ...BODY, margin: 0, fontSize: 14 }}>A cylinder in a roof space has to come up through the hatch and along the joists. Telling us the access is tight is not a reason for us to charge more — it is how we send two people and the right equipment instead of finding out on the day and coming back tomorrow.</p>
                </div>
              </div>
            </GrStep>

            {/* Step 3 — capacity */}
            <GrStep n="3" label="Capacity" title="What size do you need?"
              intro="Drag either slider. They move together, because the useful question is not how many litres you want but how many people have to shower.">
              <div style={{ ...CARD, marginTop: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                  <div style={{ ...LABEL }}>Capacity</div>
                  <div style={{ font: '700 26px/1 var(--font-core)', color: 'var(--web-navy)' }}>{capacity} L</div>
                </div>
                <input type="range" min="0" max="4" step="1" value={capacityIndex < 0 ? 2 : capacityIndex}
                  aria-label="Cylinder capacity in litres"
                  aria-valuetext={capacity + ' litres, suits ' + GR_HOUSEHOLD_FOR[capacity]}
                  onChange={function (e) { choose('capacity', setCapacity, GR_CAPACITIES[Number(e.target.value)], 'capacity'); }}
                  style={{ width: '100%', minHeight: 'var(--web-tap-min)', accentColor: 'var(--web-blue)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  {GR_CAPACITIES.map(function (c) {
                    return <span key={c} style={{ ...SMALL, color: c === capacity ? 'var(--web-navy)' : 'var(--web-grey-500)', fontWeight: c === capacity ? 600 : 400 }}>{c}</span>;
                  })}
                </div>

                {/* One slider, not two. The second range input was a duplicate
                    control bound to the same value, which is a confusing thing
                    to put in front of somebody — two handles that always move
                    together. The household is a readout now: the figures fill
                    left to right as the capacity slider moves. */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', margin: '26px 0 10px' }}>
                  <div style={{ ...LABEL }}>Household</div>
                  <div style={{ font: '700 18px/1 var(--font-core)', color: 'var(--web-navy)' }}>{GR_HOUSEHOLD_FOR[capacity]}</div>
                </div>
                <div aria-hidden="true" style={{ display: 'flex', gap: 10, alignItems: 'flex-end', minHeight: 46 }}>
                  {GR_PEOPLE_STEPS.map(function (k) {
                    const lit = k <= GR_PEOPLE_FOR[capacity];
                    return <svg key={k} width="22" height="42" viewBox="0 0 22 42" style={{ display: 'block', transition: 'opacity .18s' }}>
                      <circle cx="11" cy="7" r="6" fill={lit ? 'var(--web-blue)' : 'var(--web-grey-300)'} />
                      <path d="M11 15 c-5 0 -8 3 -8 8 v7 h3 v11 h10 v-11 h3 v-7 c0 -5 -3 -8 -8 -8 z"
                        fill={lit ? 'var(--web-blue)' : 'var(--web-grey-300)'} />
                    </svg>;
                  })}
                </div>

                {capacity === 150 ? <div style={{ ...LABEL, display: 'inline-block', color: '#fff', background: 'var(--web-navy)', padding: '4px 8px', borderRadius: 2, marginTop: 16 }}>Most common</div> : null}
                <p style={{ ...BODY, margin: '16px 0 0', fontSize: 14, maxWidth: '62ch' }}>The standard allowance is roughly 35 to 50 litres of hot water per person. In practice your household&rsquo;s habits matter more than the arithmetic. If everyone showers at once, size up. If showers can be staggered, a cylinder reheats in about an hour and a smaller unit will serve more people comfortably. Households that leave for work and school at the same time should size up.</p>
              </div>
            </GrStep>

            {/* Step 4 — brand */}
            <GrStep n="4" label="Brand" title="Choose your cylinder"
              intro="Four cylinders we fit and support. If you have no view on this — and most people do not — say so and we will recommend one for your system and capacity.">

              {noBrandsForSystem ? <div style={{ ...CARD, background: 'var(--web-blue-050)', border: '1px solid var(--web-blue-100)', marginTop: 18 }}>
                <div style={{ ...LABEL, marginBottom: 8 }}>Quoted on request</div>
                <p style={{ ...BODY, margin: 0 }}>We do not hold a standard heat pump range on the shelf the way we do cylinders, because the unit has to be matched to the household and to where the outdoor unit can physically go. Finish the rest of the specification and send it — we will come back with options rather than guess at one here.</p>
              </div> : <React.Fragment>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginTop: 18 }}>
                  {GR_BRANDS.map(function (b) {
                    const on = brand === b.id;
                    return <button key={b.id} type="button" aria-pressed={on}
                      onClick={function () { choose('brand', setBrand, b.id, 'brand'); }}
                      style={{ ...CARD, textAlign: 'left', cursor: 'pointer', font: 'inherit', width: '100%', boxSizing: 'border-box',
                        display: 'flex', flexDirection: 'column',
                        background: on ? 'var(--web-blue-050)' : '#fff',
                        border: '1px solid ' + (on ? 'var(--web-blue)' : 'var(--web-grey-100)'),
                        borderLeft: on ? '3px solid var(--web-blue)' : '1px solid var(--web-grey-100)' }}>

                      {/* A fixed logo band, so a tall stacked mark and a wide
                          horizontal one still occupy the same space and the four
                          brands read as equals. */}
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: 54, marginBottom: 14 }}>
                        <img src={b.logo} alt={b.name} style={{ maxHeight: 48, maxWidth: 170, width: 'auto', height: 'auto', display: 'block' }} />
                      </span>

                      <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10 }}>
                        <span style={{ font: '700 19px/1.2 var(--font-core)', color: 'var(--web-navy)' }}>{b.name}</span>
                        <span style={{ ...LABEL, fontSize: 10, color: 'var(--web-grey-500)' }}>{b.covers}</span>
                      </span>
                      {b.note ? <span style={{ display: 'block', ...SMALL, color: 'var(--web-blue)', marginTop: 6 }}>{b.note}</span> : null}
                      <span style={{ display: 'block', ...BODY, margin: '10px 0 0', fontSize: 14 }}>{b.body}</span>

                      <span style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto', paddingTop: 16 }}>
                        <Icon name={on ? 'check' : 'plus'} size={16} color={on ? 'var(--web-blue)' : 'var(--web-grey-500)'} />
                        <span style={{ ...LABEL, color: on ? 'var(--web-blue)' : 'var(--web-grey-500)' }}>{on ? 'Selected' : 'Choose ' + b.name}</span>
                      </span>
                    </button>;
                  })}
                </div>

                {/* Not sure is an answer, not a skip. It is stored and it is
                    carried into the WhatsApp message, so the person who picks it
                    up knows to recommend rather than to confirm. */}
                <button type="button" aria-pressed={brand === 'unsure'}
                  onClick={function () { choose('brand', setBrand, 'unsure', 'brand'); }}
                  style={{ marginTop: 14, width: '100%', boxSizing: 'border-box', cursor: 'pointer', font: 'inherit', textAlign: 'left',
                    minHeight: 'var(--web-tap-min)', padding: '16px 20px', borderRadius: 4,
                    background: brand === 'unsure' ? 'var(--web-blue-050)' : 'var(--web-grey-050)',
                    border: '1px solid ' + (brand === 'unsure' ? 'var(--web-blue)' : 'var(--web-grey-300)'),
                    display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Icon name={brand === 'unsure' ? 'check' : 'info'} size={18} color={brand === 'unsure' ? 'var(--web-blue)' : 'var(--web-navy)'} />
                  <span>
                    <span style={{ display: 'block', font: '600 16px/1.3 var(--font-core)', color: 'var(--web-navy)' }}>Not sure — recommend one for me</span>
                    <span style={{ display: 'block', ...SMALL, marginTop: 2 }}>We will match it to your system type, capacity and what is in stock today.</span>
                  </span>
                </button>
              </React.Fragment>}

              {/* The most important trust copy on the page. */}
              <div style={{ background: 'var(--web-navy)', borderRadius: 4, padding: '28px 32px', marginTop: 24 }}>
                <Eyebrow onDark>Read this before you compare prices</Eyebrow>
                <h4 style={{ ...H2, color: '#fff', fontSize: 21, marginBottom: 12 }}>Why the warranty matters more than the price</h4>
                <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', maxWidth: '64ch', margin: 0 }}>A five-year warranty is only worth what the manufacturer will actually honour. The most common reason a geyser warranty is voided is that the original installer did not install the cylinder to the manufacturer&rsquo;s diagram and to the national standard — which means the homeowner ends up buying a second geyser before the first one&rsquo;s warranty has even expired. Home Assist installs to the manufacturer&rsquo;s specification and issues a certificate of compliance on every job, so the warranty stays intact.</p>
              </div>
            </GrStep>
          </div>

          {/* Running specification — sticky beside the questions on a desktop,
              and a stacked card once the responsive layer collapses the grid. */}
          <aside className="ha-gr-panel" style={{ position: 'sticky', top: 92 }}>
            <div style={{ ...CARD, padding: 22 }}>
              {summaryPanel}
            </div>
            <div style={{ ...CARD, padding: 22, marginTop: 16, background: 'var(--web-grey-050)' }}>
              <div style={{ ...LABEL, marginBottom: 10 }}>Indicative cost</div>
              <CostRevealGeyser />
            </div>
          </aside>
        </div>
      </div>
    </section>

    {/* Running costs moved to /smart-homes on 30 August 2026. It was a large
        two-column block in the middle of a configurator, and what it actually
        argues for — a scheduler, a PV supply, a controller — is all on that
        page. What stays here is the one line that gets somebody there. */}
    <section style={{ background: 'var(--web-navy)' }}>
      <div style={{ ...WRAP, padding: '44px 40px', display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 460px' }}>
          <Eyebrow onDark>Running cost</Eyebrow>
          <h2 style={{ ...H2, color: '#fff', fontSize: 22, margin: 0, maxWidth: '34ch' }}>The geyser is usually the largest single item on a South African electricity bill.</h2>
          <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', maxWidth: '58ch', margin: '10px 0 0' }}>What it costs you, and what a scheduler or a solar supply actually saves, is a separate decision from which cylinder to fit.</p>
        </div>
        <Button size="lg" variant="onDark" onClick={function () { go('smartHomes'); }} iconLeft={<Icon name="smartphone" size={18} color="#fff" />}>What it costs to run</Button>
      </div>
    </section>

    {/* Step 5 — the specification and contact details */}
    <Section tint eyebrow="Your replacement" title="Your specification, and where to send it" id="send"
      intro="This is everything you have chosen. Change anything that is wrong, then send it to us — the person who picks it up will already know what your installation needs.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

        <div style={{ ...CARD, padding: 26 }}>
          {summaryPanel}
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--web-grey-100)' }}>
            <a href="#configurator" style={{ ...SMALL, color: 'var(--web-blue)', fontWeight: 600 }}>Change any answer</a>
            <p style={{ ...SMALL, marginTop: 12 }}>Excludes pipe rerouting beyond the existing point, ceiling or roof repairs, structural access work, and electrical work beyond the isolator. The scope and the final price are confirmed on site before any work starts.</p>
          </div>
        </div>

        <div style={{ ...CARD, padding: 26 }}>
          {!sent ? <form onSubmit={submit} onInput={checkPartial}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <FieldRow label="Full name"><input name="Full name" required style={INPUT} placeholder="Your name" /></FieldRow>
              <FieldRow label="Mobile number"><input name="Mobile number" type="tel" required style={INPUT} placeholder="072 000 0000" /></FieldRow>
              <FieldRow label="Email address"><input name="Email address" type="email" style={INPUT} placeholder="you@example.co.za" /></FieldRow>
              <FieldRow label="Property address"><input name="Property address" style={INPUT} placeholder="Street and number" /></FieldRow>
              <FieldRow label="Suburb" hint="This is what decides which team is sent, so it is the one field we really do need."><input name="Suburb" required style={INPUT} placeholder="Pinelands" /></FieldRow>
              <FieldRow label="Is this an insurance claim?">
                <select name="Insurance claim" style={INPUT}>
                  {['Not sure', 'Yes', 'No'].map(function (o) { return <option key={o}>{o}</option>; })}
                </select>
              </FieldRow>
              <FieldRow label="When do you need it done?">
                <select name="Timing" style={INPUT}>
                  {['Today', 'This week', 'Getting quotes'].map(function (o) { return <option key={o}>{o}</option>; })}
                </select>
              </FieldRow>
              <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer', minHeight: 'var(--web-tap-min)' }}>
                <input type="checkbox" name="Smart control" style={{ marginTop: 3, width: 18, height: 18, accentColor: 'var(--web-blue)' }} />
                <span style={{ ...BODY, margin: 0, fontSize: 14 }}>Also tell me about smart geyser control and scheduling</span>
              </label>
            </div>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Button type="submit" variant="navy" size="lg" fullWidth iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>Send to Home Assist on WhatsApp</Button>
              <Button as="a" variant="secondary" fullWidth href={mailtoLink(CH.help, 'Geyser replacement enquiry')}>Email this specification instead</Button>
            </div>
            <p style={{ ...SMALL, marginTop: 12 }}>Photographs help. Once WhatsApp opens, attach a picture of the current installation and the serial plate if you have them.</p>
          </form> : <div>
            <Icon name="circle-check" size={28} color="var(--web-blue)" />
            <h3 style={{ ...H3, fontSize: 20, margin: '12px 0 8px' }}>WhatsApp should be open with your specification in it</h3>
            <p style={BODY}>If nothing opened, your browser may have blocked the new tab.</p>
            {manualLink ? <p style={BODY}><a href={manualLink} target="_blank" rel="noopener" style={{ fontWeight: 600 }}>Open the message manually</a></p> : null}
            <p style={{ ...BODY, margin: 0 }}>Or call us on <a href={'tel:' + CH.phoneTel} style={{ fontWeight: 600 }}>{CH.phone}</a> — answered 24 hours a day.</p>
          </div>}
        </div>
      </div>

      <p style={{ ...SMALL, marginTop: 20 }}>Sending this to someone else in the household? <a href="#send" onClick={function (e) { e.preventDefault(); const u = shareUrl(); if (u && navigator.clipboard) { navigator.clipboard.writeText(u); grTrack('geyser_share_link', {}); } }} style={{ fontWeight: 600 }}>Copy a link to this specification</a> — it opens with every answer already made.</p>
    </Section>

    {/* Why the spec is worth giving — the stock argument */}
    <Section eyebrow="Why we ask" title="Same day depends on arriving with the right cylinder">
      <div style={{ ...CARD, padding: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
        <img src="/assets/illustrations/geyser-stock-warehouse.jpg" alt="A Home Assist team member checking stock on a warehouse rack holding hot water cylinders, valve sets and compliance parts" style={{ width: '100%', height: '100%', minHeight: 260, objectFit: 'contain', background: 'var(--web-grey-050)', display: 'block' }} />
        <div style={{ padding: 32 }}>
          <p style={{ ...BODY, fontSize: 16 }}>A geyser replacement is not one item. It is the cylinder, the valve set matched to it, the tray, the brackets and the isolator — and the right combination depends on every answer above.</p>
          <p style={{ ...BODY, margin: 0, fontSize: 16 }}>That is why the questions are worth two minutes. A specification sent before we load the van is the difference between a job finished today and a second visit tomorrow.</p>
        </div>
      </div>
    </Section>

    <NavyBand eyebrow="Not ready to specify anything" title="Send us a photograph of the plate and we will tell you where you stand.">
      <Button as="a" size="lg" variant="onDark" target="_blank" rel="noopener"
        href={wa('Hi Home Assist, I would like to check if my geyser is under warranty. I have attached a photo of the geyser plate.')}
        iconLeft={<Icon name="camera" size={18} color="#fff" />}>Send us the serial plate</Button>
      <Button as="a" size="lg" variant="ghost" href={'tel:' + CH.phoneTel} style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }} iconLeft={<Icon name="phone" size={18} color="#fff" />}>{CH.phone}</Button>
    </NavyBand>

    {/* FAQ */}
    <Section tint eyebrow="Questions" title="What people ask before replacing a geyser">
      <Accordion items={GR_FAQ} />
    </Section>

    {/* Close */}
    <Section eyebrow="Related" title="Water going somewhere it should not?"
      intro="A geyser that has burst is one problem. Water appearing with no obvious source is a different one, and it is found rather than guessed at.">
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button variant="secondary" size="lg" onClick={function () { go('leakDetection'); }} iconLeft={<Icon name="search" size={18} color="var(--web-navy)" />}>How we find a hidden leak</Button>
        <Button as="a" size="lg" variant="navy" target="_blank" rel="noopener" href={wa('Hi Home Assist, my geyser has burst. ')} iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>My geyser has burst</Button>
      </div>
    </Section>
  </main>;
}

/* The same disclosure the home page uses for the burst-geyser range, so the one
   money figure on this page is the figure already published for the same
   product, and it keeps firing the `estimated_costs_view` event that is already
   being collected. Replace the copy here — not the mechanism — when an installed
   price grid exists. */
function CostRevealGeyser() {
  const [open, setOpen] = React.useState(false);
  const reveal = function () {
    setOpen(true);
    grTrack('estimated_costs_view', { cost_context: 'geyser_replacement_page' });
  };
  if (!open) {
    return <div>
      <p style={{ ...BODY, fontSize: 14 }}>Every site is different, so we do not price a replacement off a form. Open the indicative range for a standard compliant installation.</p>
      <Button variant="navy" size="sm" fullWidth onClick={reveal} iconLeft={<Icon name="calculator" size={16} color="#fff" />}>Indicative range</Button>
    </div>;
  }
  return <div>
    <p style={{ ...BODY, fontSize: 14 }}>A standard compliant <strong>electric</strong> geyser replacement typically runs between R9,800 and R13,200 excluding VAT, including the cylinder, the installation, the compliance parts and the certificate of compliance.</p>
    <p style={{ ...SMALL, borderTop: '1px solid var(--web-blue-100)', paddingTop: 10 }}>An indication for a standard electric installation, not a quote. Solar, heat pump and gas are priced separately. Your cost depends on the capacity, the brand, the access and the condition of the existing installation, and we confirm it on site before any work starts.</p>
  </div>;
}

Object.assign(window, { GeyserReplacementsPage });
