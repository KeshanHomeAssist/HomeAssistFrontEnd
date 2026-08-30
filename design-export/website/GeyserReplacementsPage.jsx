const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

/* /geyser-replacements — the second service page, sibling of /leak-detection.

   This is the highest-search-volume and highest-margin line in the business, so
   the page does more than describe the service: it is a guided configurator.
   The visitor answers six short questions about their hot water system and each
   answer writes a line into a running specification. At the end the whole
   specification is handed to WhatsApp as one structured message, so the person
   who answers it already knows the cylinder, the position, the access and the
   brand before they reply.

   TWO CONVERSION GOALS, IN THIS ORDER:

   1. Warranty capture (§ Warranty, immediately under the hero). Most geysers
      carry a five-year manufacturer warranty. Checking costs Home Assist
      nothing and may save the customer the whole job, which is exactly why they
      come back to us when they do have to buy. It asks for one photograph and
      nothing else.
   2. A configured replacement enquiry (the rest of the page).

   The warranty block moved here from the home page — HomePage.jsx now carries a
   short pointer to '/geyser-replacements#warranty' in its place, so the block
   exists once rather than competing with itself in search.

   NO RAND FIGURES IN THE CONFIGURATOR. Decided 30 August 2026: Home Assist has
   no installed price grid per brand, capacity, pressure type and access, and a
   running estimate assembled from invented line items is worse than no estimate
   at all. The panel therefore accumulates a SPECIFICATION, not a price. The one
   money figure on the page is the indicative band already published on the home
   page for the same product (R9,800–R12,800 ex VAT for a standard compliant
   replacement), shown behind the same CostReveal disclosure the home page uses
   so it keeps firing the existing `estimated_costs_view` event. When a real
   grid exists, the panel can start pricing without the page being rebuilt.

   PRERENDER SAFETY: this file is server-rendered to static HTML before it ever
   hydrates. Nothing may touch window, document or localStorage during render —
   saved state is read in an effect after mount, which also keeps the server and
   client first paint identical and avoids a hydration mismatch. */

const GR_STORAGE_KEY = 'ha-geyser-config-v1';

/* Analytics. The site has no server, so a drop-off map for this flow only
   exists if the page reports it. Same gtag/dataLayer pair CostReveal uses on
   the home page, so nothing new has to be wired up in GA4 to collect it. */
function grTrack(name, params) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(Object.assign({ event: name }, params));
  if (typeof window.gtag === 'function') window.gtag('event', name, params);
}

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

const GR_SYSTEMS = [
  ['high', 'High pressure', 'droplets', 'The standard installation in most South African homes.'],
  ['low', 'Low pressure', 'arrow-up-down', 'Usually fed from a tank in the roof. Taps run slower.'],
  ['solar', 'Solar', 'sun', 'Panels or evacuated tubes on the roof feeding a cylinder.'],
  ['heatpump', 'Heat pump', 'wind', 'An outdoor unit that heats the cylinder using ambient air.'],
  ['gas', 'Gas', 'flame', 'Instantaneous or storage gas water heating.']
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

/* Capacity and household move together in both directions. The arithmetic
   behind it is the standard 35–50 litres per person allowance; the copy beside
   it says plainly that habits matter more than the arithmetic. */
const GR_CAPACITIES = [50, 100, 150, 200, 250];
const GR_HOUSEHOLD_FOR = { 50: '1 person', 100: '2 people', 150: '3 to 4 people', 200: '4 to 5 people', 250: '5 to 6 people' };
const GR_HOUSEHOLD_STEPS = [1, 2, 3, 4, 5];

/* Which cylinders exist for which system. A visitor who chose Solar must never
   be shown a high-pressure-only range: an option we cannot actually supply for
   their configuration wastes their time and ours.

   RATINGS are Hello Peter TrustIndex scores, read 30 August 2026, and the
   source is named on every card so the numbers stay comparable. See the note in
   the section copy — both majors sit in the same band, which is the honest
   reading of a complaint-weighted index and the reason the page does not lean
   on the number as a differentiator. */
const GR_BRANDS = [
  {
    id: 'kwikot', name: 'Kwikot', tier: 'lead',
    fits: ['high', 'low', 'solar', 'gas'],
    rating: '2.6', ratingSource: 'Hello Peter',
    lead: 'Home Assist recommends Kwikot first.',
    body: 'One of the most reliable cylinders in the South African market, and Home Assist holds a warranty capability on Kwikot that most installers do not — which means a warranty claim on a unit we fitted is handled by us rather than passed back to you.'
  },
  {
    id: 'ariston', name: 'Ariston', tier: 'lead',
    fits: ['high', 'low', 'solar', 'heatpump'],
    rating: '2.5', ratingSource: 'Hello Peter',
    note: 'Ariston is the new name for Heat Tech — same manufacturer.',
    body: 'An established range across high pressure, low pressure, solar and heat pump. Widely stocked, so a same-day replacement is usually possible on the common capacities.'
  },
  {
    id: 'kwiksol', name: 'Kwiksol', tier: 'other',
    fits: ['solar'],
    rating: 'See Kwikot', ratingSource: 'Hello Peter',
    body: 'Kwikot’s solar range. Shown here because you selected a solar system.'
  },
  {
    id: 'builders-pride', name: 'Builders Pride', tier: 'other',
    fits: ['high', 'low'],
    rating: 'Not listed', ratingSource: 'Hello Peter',
    note: 'Manufactured by Kwikot and retailed through Builders Warehouse.',
    body: 'The same manufacturer as Kwikot under a retailer’s name. Worth knowing if you are comparing a Builders quote against ours, because the cylinder is not the variable — the installation is.'
  },
  {
    id: 'techron', name: 'Techron', tier: 'other',
    fits: ['high', 'low'],
    rating: 'Not listed', ratingSource: 'Hello Peter',
    body: 'A smaller Western Cape manufacturer. Available on request where stock and lead time suit the job.'
  },
  {
    id: 'xtreme', name: 'Xtreme', tier: 'other',
    fits: ['high', 'low'],
    rating: 'Not listed', ratingSource: 'Hello Peter',
    body: 'A smaller Western Cape manufacturer. Available on request where stock and lead time suit the job.'
  }
];

const GR_SMART = [
  {
    id: 'elon', rank: '01', name: 'Kwikot Elon 100', badge: 'Home Assist’s first choice',
    points: [
      'Reads the cylinder temperature and controls the thermostat',
      'Switches the element on and off to a schedule, from a mobile app',
      'Reports electricity consumption',
      'Detects moisture in the drip tray and shuts the geyser off before a leak reaches your ceiling',
      'Accepts a direct DC supply, so it can be fed straight from photovoltaic panels on the roof'
    ],
    cost: 'One upfront amount. No monthly fee.',
    why: 'The DC input is the reason it ranks first. No other device on this list can take power directly from panels, which means the installation can be made solar from day one rather than rewired for it later.'
  },
  {
    id: 'plentify', rank: '02', name: 'Plentify',
    points: [
      'Mobile app, scheduling and consumption reporting',
      'Monthly subscription rather than a large upfront cost',
      'No DC input'
    ],
    cost: 'Lower upfront cost, monthly subscription.',
    why: 'It depends on connectivity. If the Wi-Fi or the mobile signal is down, the schedule cannot be overridden and the household can be left without hot water. That is worth knowing before you choose it, not after.'
  },
  {
    id: 'db-breaker', rank: '03', name: 'Home Assist distribution board breaker', badge: 'Simplest and most cost-effective',
    points: [
      'Controls the power supply to the geyser on a schedule',
      'Has a physical override button',
      'Fitted on the distribution board rather than at the cylinder'
    ],
    cost: 'Lowest cost of the three.',
    why: 'If connectivity fails, you press the button and the schedule is overridden immediately. Because it lives on the distribution board — usually indoors and near the router — it is both reachable and well positioned for signal. That is a real advantage over an app-only device.',
    confirm: true
  }
];

const GR_SMART_TABLE = [
  ['App control', 'Yes', 'Yes', 'No'],
  ['Scheduling', 'Yes', 'Yes', 'Yes'],
  ['Consumption reporting', 'Yes', 'Yes', 'No'],
  ['Leak detection in the drip tray', 'Yes', 'No', 'No'],
  ['DC input from solar panels', 'Yes', 'No', 'No'],
  ['Works without connectivity', 'Partly', 'No', 'Yes'],
  ['Upfront cost', 'Highest', 'Low', 'Lowest'],
  ['Monthly cost', 'None', 'Subscription', 'None']
];

const GR_FAQ = [
  ['How long does a geyser replacement take?',
   'A standard replacement is normally done in one visit of about three to four hours, and we can often do it the same day. What turns one visit into two is arriving without the right cylinder or without access — which is exactly what the questions on this page are for. Tell us the system type, the position and the access up front and the team arrives with the right unit, the right brackets and the right number of people.'],
  ['Is my geyser still under warranty?',
   'Most geysers carry a five-year manufacturer warranty, and a unit still inside it may be repaired or replaced by the manufacturer at no cost to you. Send us a photograph of the plate on the side of the cylinder and we will decode the manufacturer and date code and tell you. It costs you nothing and it costs us nothing, so there is no reason not to check before you buy anything.'],
  ['What is a certificate of compliance and do I actually need one?',
   'It is the document a registered plumber issues on completion, confirming the installation meets the national standard. You need it for two reasons. Your insurer can ask for it when you claim, and without one you have no evidence the work was done properly. Home Assist issues and logs a PIRB certificate of compliance on every geyser installation.'],
  ['Why does the warranty matter more than the price of the cylinder?',
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

/* Where the customer's answers are worth showing back to them in words rather
   than codes. Keeps the summary panel, the specification sheet and the WhatsApp
   message reading identically. */
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

/* One question. The heading carries the uppercase tracked label from the
   identity, which happens to be exactly how a spec sheet is set. */
function GrStep({ n, label, title, intro, children, id }) {
  return <div id={id} style={{ paddingTop: 40, borderTop: '1px solid var(--web-grey-100)', marginTop: 40 }}>
    <div style={{ ...LABEL, color: 'var(--web-blue)', marginBottom: 8 }}>Step {n} &middot; {label}</div>
    <h3 style={{ ...H2, fontSize: 22, marginBottom: 10 }}>{title}</h3>
    {intro ? <p style={{ ...BODY, maxWidth: '62ch' }}>{intro}</p> : null}
    {children}
  </div>;
}

/* Selectable card. Used for system type, position and brand, so a selection
   looks and behaves the same everywhere on the page. */
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
  const [position, setPosition] = React.useState('');
  const [access, setAccess] = React.useState('');
  const [capacity, setCapacity] = React.useState(150);
  const [brand, setBrand] = React.useState('');
  const [smart, setSmart] = React.useState('');
  const [showOther, setShowOther] = React.useState(false);
  const [showDiagnostic, setShowDiagnostic] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [manualLink, setManualLink] = React.useState('');
  const [tariff, setTariff] = React.useState(3.2);
  const [runHousehold, setRunHousehold] = React.useState(4);
  const [ready, setReady] = React.useState(false);

  const capacityIndex = GR_CAPACITIES.indexOf(capacity);

  /* Restore a part-finished configuration.

     Read after mount, never during render: this page is prerendered to static
     HTML on the server where there is no localStorage and no URL to read, and a
     first paint that disagreed with the server's would be a hydration mismatch.

     The URL wins over storage, so a link sent to a spouse opens showing what the
     sender was looking at rather than whatever that phone had saved. */
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
      if (saved.position) setPosition(saved.position);
      if (saved.access) setAccess(saved.access);
      if (saved.capacity) setCapacity(saved.capacity);
      if (saved.brand) setBrand(saved.brand);
      if (saved.smart) setSmart(saved.smart);
    }
    setReady(true);
  }, []);

  React.useEffect(function () {
    if (!ready) return;
    try {
      window.localStorage.setItem(GR_STORAGE_KEY, JSON.stringify({ systemType, position, access, capacity, brand, smart }));
    } catch (e) { /* private browsing, or storage disabled — the page still works */ }
  }, [ready, systemType, position, access, capacity, brand, smart]);

  /* A selection that no longer exists for the chosen system is cleared rather
     than left showing. Choosing Solar after picking a high-pressure-only brand
     would otherwise leave a specification we cannot supply. */
  React.useEffect(function () {
    if (!systemType || !brand) return;
    const chosen = GR_BRANDS.find(function (b) { return b.id === brand; });
    if (chosen && chosen.fits.indexOf(systemType) === -1) setBrand('');
  }, [systemType, brand]);

  function choose(field, setter, value, stepLabel) {
    setter(value);
    grTrack('geyser_step_complete', { step: stepLabel, field: field, value: String(value) });
  }

  const visibleBrands = GR_BRANDS.filter(function (b) {
    return !systemType || b.fits.indexOf(systemType) !== -1;
  });
  const leadBrands = visibleBrands.filter(function (b) { return b.tier === 'lead'; });
  const otherBrands = visibleBrands.filter(function (b) { return b.tier === 'other'; });

  const spec = {
    systemType: systemType ? grLabelFor(GR_SYSTEMS, systemType) : '',
    position: position ? grLabelFor(GR_POSITIONS, position) : '',
    access: access ? grLabelFor(GR_ACCESS, access) : '',
    capacity: capacity + ' L',
    household: GR_HOUSEHOLD_FOR[capacity],
    brand: brand ? (GR_BRANDS.find(function (b) { return b.id === brand; }) || {}).name : '',
    smart: smart ? (smart === 'none' ? 'None for now' : (GR_SMART.find(function (s) { return s.id === smart; }) || {}).name) : ''
  };

  const answered = ['systemType', 'position', 'access', 'brand', 'smart'].filter(function (k) { return spec[k]; }).length + 1;

  /* Everything the person answered, in the order the page asked it, so the
     message that arrives on WhatsApp reads like the specification sheet they
     were just looking at. No emoji, by brand rule and because a spec is a spec. */
  function specIntro() {
    return [
      'Geyser replacement enquiry — homeassist.co.za',
      '',
      'SYSTEM TYPE: ' + (spec.systemType || 'Not specified'),
      'POSITION: ' + (spec.position || 'Not specified'),
      'ACCESS: ' + (spec.access || 'Not specified'),
      'CAPACITY: ' + spec.capacity + ' (household of ' + spec.household + ')',
      'BRAND: ' + (spec.brand || 'Not specified'),
      'SMART CONTROL: ' + (spec.smart || 'Not specified')
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
      const payload = btoa(unescape(encodeURIComponent(JSON.stringify({ systemType, position, access, capacity, brand, smart }))));
      return window.location.origin + '/geyser-replacements?c=' + payload;
    } catch (e) { return ''; }
  };

  const monthlyCost = Math.round(runHousehold * 1.05 * 30 * tariff * 0.92);
  const scheduledSaving = Math.round(monthlyCost * 0.28);

  const summaryPanel = <div>
    <div style={{ ...LABEL, marginBottom: 12 }}>Your specification</div>
    <GrSummaryLine label="System type" value={spec.systemType} />
    <GrSummaryLine label="Position" value={spec.position} />
    <GrSummaryLine label="Access" value={spec.access} />
    <GrSummaryLine label="Capacity" value={spec.capacity + ' · ' + spec.household} />
    <GrSummaryLine label="Brand" value={spec.brand} />
    <GrSummaryLine label="Smart control" value={spec.smart} />
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
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button as="a" size="lg" variant="onDark" href="#warranty" iconLeft={<Icon name="camera" size={18} color="#fff" />}>Check my geyser warranty</Button>
            <Button as="a" size="lg" variant="ghost" href="#configurator" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }} iconLeft={<Icon name="clipboard-check" size={18} color="#fff" />}>Build your replacement spec</Button>
          </div>
        </div>
        {/* PHOTOGRAPHY STILL OUTSTANDING: the brief calls for a photograph of a
            correctly installed geyser — drip tray, valves and pipework visible,
            clean workmanship. It does not exist in public/assets/illustrations
            yet. Rather than ship a stock image that shows an installation we did
            not do, this carries the product render we already own plus the list
            of what a compliant installation includes, which is the same argument
            in a form we can stand behind. Swap in the real photograph when it is
            shot and this block becomes a plain <img>. */}
        <div style={{ border: '1px solid rgba(255,255,255,.22)', borderRadius: 4, padding: 28, display: 'flex', gap: 24, alignItems: 'center' }}>
          <img src="/assets/illustrations/geyser-kwikot.png" alt="A replacement hot water cylinder" style={{ width: 132, height: 'auto', display: 'block', flex: '0 0 auto' }} />
          <div>
            <div style={{ ...LABEL, color: 'var(--web-blue-300)', marginBottom: 10 }}>Every installation includes</div>
            {['Pressure control valve', 'Vacuum breakers, hot and cold', 'Drip tray and piped overflow', 'Isolator within one metre', 'Certificate of compliance'].map(function (t) {
              return <div key={t} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 7 }}>
                <Icon name="check" size={15} color="var(--web-blue-300)" />
                <span style={{ ...SMALL, color: 'rgba(255,255,255,.88)' }}>{t}</span>
              </div>;
            })}
          </div>
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
        <h2 style={{ ...H2, fontSize: 26, marginBottom: 14, maxWidth: '26ch' }}>Six questions, and we arrive with the right cylinder</h2>
        <div style={{ width: 56, height: 3, background: 'var(--web-blue)', marginBottom: 24 }}></div>
        <p style={{ ...BODY, maxWidth: '68ch', fontSize: 17 }}>Nothing here is gated and nothing is compulsory. Every answer you give is one less thing to establish on the phone, and knowing the position and the access up front is what lets us arrive with the right unit, the right brackets and the right size team — and replace on the same day.</p>

        <div className="ha-gr-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 40, alignItems: 'start', marginTop: 32 }}>

          <div>
            {/* Step 1 — system type */}
            <GrStep n="1" label="System type" title="What type of system do you have?"
              intro="This decides which cylinders we can actually supply, so the brands you are shown later are only ones that exist for your system.">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 18 }}>
                {GR_SYSTEMS.map(function (s) {
                  return <GrChoice key={s[0]} selected={systemType === s[0]} icon={s[2]} title={s[1]} body={s[3]}
                    onSelect={function () { choose('system_type', setSystemType, s[0], 'system_type'); }} />;
                })}
              </div>
              <button type="button" onClick={function () { setShowDiagnostic(!showDiagnostic); }}
                style={{ background: 'none', border: 0, padding: '12px 0 0', cursor: 'pointer', color: 'var(--web-blue)', font: '600 15px/1.4 var(--font-core)', minHeight: 'var(--web-tap-min)' }}>
                {showDiagnostic ? 'Close' : 'Not sure which one I have'}
              </button>
              {showDiagnostic ? <div style={{ ...CARD, background: 'var(--web-blue-050)', border: '1px solid var(--web-blue-100)', marginTop: 8 }}>
                <div style={{ ...LABEL, marginBottom: 10 }}>Three questions that usually settle it</div>
                {[
                  ['Is there a tank in your roof, separate from the geyser?', 'That is almost always a low pressure system.'],
                  ['Is there a panel or a row of glass tubes on your roof?', 'That is solar.'],
                  ['Is there an outdoor unit near the house that hums, like an air conditioner?', 'That is a heat pump.']
                ].map(function (row) {
                  return <div key={row[0]} style={{ marginBottom: 12 }}>
                    <div style={{ font: '600 15px/1.4 var(--font-core)', color: 'var(--web-navy)' }}>{row[0]}</div>
                    <div style={{ ...BODY, margin: '2px 0 0', fontSize: 14 }}>{row[1]}</div>
                  </div>;
                })}
                <p style={{ ...BODY, margin: 0, fontSize: 14 }}>None of those? It is very likely a standard high pressure system, which is what most South African homes have. Skip the question and we will confirm it on site.</p>
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

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', margin: '22px 0 6px' }}>
                  <div style={{ ...LABEL }}>Household</div>
                  <div style={{ font: '700 18px/1 var(--font-core)', color: 'var(--web-navy)' }}>{GR_HOUSEHOLD_FOR[capacity]}</div>
                </div>
                <input type="range" min="0" max="4" step="1" value={capacityIndex < 0 ? 2 : capacityIndex}
                  aria-label="Number of people in the household"
                  onChange={function (e) { choose('capacity', setCapacity, GR_CAPACITIES[Number(e.target.value)], 'capacity'); }}
                  style={{ width: '100%', minHeight: 'var(--web-tap-min)', accentColor: 'var(--web-blue)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  {GR_HOUSEHOLD_STEPS.map(function (h) {
                    return <span key={h} style={{ ...SMALL, color: 'var(--web-grey-500)' }}>{h}</span>;
                  })}
                </div>

                {capacity === 150 ? <div style={{ ...LABEL, display: 'inline-block', color: '#fff', background: 'var(--web-navy)', padding: '4px 8px', borderRadius: 2, marginTop: 16 }}>Most common</div> : null}
                <p style={{ ...BODY, margin: '16px 0 0', fontSize: 14, maxWidth: '62ch' }}>The standard allowance is roughly 35 to 50 litres of hot water per person. In practice your household&rsquo;s habits matter more than the arithmetic. If everyone showers at once, size up. If showers can be staggered, a cylinder reheats in about an hour and a smaller unit will serve more people comfortably. Households that leave for work and school at the same time should size up.</p>
              </div>
            </GrStep>

            {/* Step 4 — brand */}
            <GrStep n="4" label="Brand" title="Choose your cylinder"
              intro={systemType ? 'Showing only cylinders that exist for a ' + String(spec.systemType).toLowerCase() + ' system.' : 'Choose a system type above and this list narrows to the cylinders we can actually supply for it.'}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginTop: 18 }}>
                {leadBrands.map(function (b) {
                  return <div key={b.id} style={{ ...CARD, borderLeft: brand === b.id ? '3px solid var(--web-blue)' : '1px solid var(--web-grey-100)', background: brand === b.id ? 'var(--web-blue-050)' : '#fff' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                      <div>
                        <h4 style={{ ...H3, margin: 0, fontSize: 20 }}>{b.name}</h4>
                        {b.lead ? <div style={{ ...LABEL, color: 'var(--web-blue)', marginTop: 6 }}>{b.lead}</div> : null}
                      </div>
                      <div style={{ textAlign: 'right', flex: '0 0 auto' }}>
                        <div style={{ font: '700 20px/1 var(--font-core)', color: 'var(--web-navy)' }}>{b.rating}</div>
                        <div style={{ ...SMALL, fontSize: 11 }}>{b.ratingSource}</div>
                      </div>
                    </div>
                    {b.note ? <p style={{ ...SMALL, color: 'var(--web-blue)', margin: '10px 0 0' }}>{b.note}</p> : null}
                    <p style={{ ...BODY, margin: '12px 0 16px', fontSize: 14 }}>{b.body}</p>
                    <Button variant={brand === b.id ? 'navy' : 'secondary'} fullWidth
                      onClick={function () { choose('brand', setBrand, b.id, 'brand'); }}>{brand === b.id ? 'Selected' : 'Choose ' + b.name}</Button>
                  </div>;
                })}
              </div>

              <p style={{ ...SMALL, marginTop: 12 }}>Ratings are Hello Peter TrustIndex scores read in August 2026, shown for both brands from the same source so they are comparable. Hello Peter is weighted towards complaints, so read them as a like-for-like comparison rather than as a score out of ten — both major manufacturers sit in the same band, which is the honest answer and the reason we do not choose a cylinder on this number.</p>

              {otherBrands.length ? <div style={{ marginTop: 16 }}>
                <button type="button" onClick={function () { setShowOther(!showOther); }} aria-expanded={showOther}
                  style={{ background: 'none', border: 0, padding: '12px 0', cursor: 'pointer', color: 'var(--web-blue)', font: '600 15px/1.4 var(--font-core)', display: 'flex', alignItems: 'center', gap: 8, minHeight: 'var(--web-tap-min)' }}>
                  <Icon name={showOther ? 'chevron-up' : 'chevron-down'} size={16} color="var(--web-blue)" />
                  {showOther ? 'Hide other options' : 'Other options (' + otherBrands.length + ')'}
                </button>
                {showOther ? <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                  {otherBrands.map(function (b) {
                    return <div key={b.id} style={{ ...CARD, padding: 18, background: brand === b.id ? 'var(--web-blue-050)' : 'var(--web-grey-050)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                        <h4 style={{ ...H3, margin: 0, fontSize: 17 }}>{b.name}</h4>
                        <span style={{ ...SMALL, fontSize: 11, textAlign: 'right' }}>{b.rating}<br />{b.ratingSource}</span>
                      </div>
                      {b.note ? <p style={{ ...SMALL, color: 'var(--web-blue)', margin: '8px 0 0' }}>{b.note}</p> : null}
                      <p style={{ ...BODY, margin: '10px 0 12px', fontSize: 14 }}>{b.body}</p>
                      <Button size="sm" variant={brand === b.id ? 'navy' : 'secondary'} fullWidth
                        onClick={function () { choose('brand', setBrand, b.id, 'brand'); }}>{brand === b.id ? 'Selected' : 'Choose ' + b.name}</Button>
                    </div>;
                  })}
                </div> : null}
              </div> : null}

              {/* The most important trust copy on the page. */}
              <div style={{ background: 'var(--web-navy)', borderRadius: 4, padding: '28px 32px', marginTop: 24 }}>
                <Eyebrow onDark>Read this before you compare prices</Eyebrow>
                <h4 style={{ ...H2, color: '#fff', fontSize: 21, marginBottom: 12 }}>Why the warranty matters more than the price</h4>
                <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', maxWidth: '64ch', margin: 0 }}>A five-year warranty is only worth what the manufacturer will actually honour. The most common reason a geyser warranty is voided is that the original installer did not install the cylinder to the manufacturer&rsquo;s diagram and to the national standard — which means the homeowner ends up buying a second geyser before the first one&rsquo;s warranty has even expired. Home Assist installs to the manufacturer&rsquo;s specification and issues a certificate of compliance on every job, so the warranty stays intact.</p>
              </div>
            </GrStep>

            {/* Step 5 — smart control */}
            <GrStep n="5" label="Smart control" title="Smart geyser control, if you want it"
              intro="Optional, and ranked by our own assessment rather than by what we would rather sell. The ranking is an opinion and the reasons for it are given.">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 18 }}>
                {GR_SMART.map(function (s) {
                  return <div key={s.id} style={{ ...CARD, borderLeft: smart === s.id ? '3px solid var(--web-blue)' : '1px solid var(--web-grey-100)', background: smart === s.id ? 'var(--web-blue-050)' : '#fff', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ ...LABEL, color: 'var(--web-blue)' }}>{s.rank}</div>
                    <h4 style={{ ...H3, fontSize: 18, margin: '8px 0 6px' }}>{s.name}</h4>
                    {s.badge ? <div style={{ ...LABEL, fontSize: 10, color: 'var(--web-grey-500)', marginBottom: 10 }}>{s.badge}</div> : null}
                    <ul style={{ ...BODY, fontSize: 14, margin: '0 0 12px', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {s.points.map(function (p) { return <li key={p}>{p}</li>; })}
                    </ul>
                    <p style={{ ...SMALL, marginBottom: 10 }}>{s.cost}</p>
                    <p style={{ ...BODY, fontSize: 14, margin: '0 0 14px' }}>{s.why}</p>
                    {s.confirm ? <p style={{ ...SMALL, marginBottom: 12 }}>Full specifications: <Confirm>DB breaker advert copy</Confirm></p> : null}
                    <div style={{ marginTop: 'auto' }}>
                      <Button size="sm" fullWidth variant={smart === s.id ? 'navy' : 'secondary'}
                        onClick={function () { choose('smart', setSmart, s.id, 'smart_control'); }}>{smart === s.id ? 'Selected' : 'Add ' + s.name.split(' ')[0]}</Button>
                    </div>
                  </div>;
                })}
              </div>
              <button type="button" onClick={function () { choose('smart', setSmart, 'none', 'smart_control'); }}
                style={{ background: 'none', border: 0, padding: '14px 0 0', cursor: 'pointer', color: smart === 'none' ? 'var(--web-navy)' : 'var(--web-blue)', font: '600 15px/1.4 var(--font-core)', minHeight: 'var(--web-tap-min)' }}>
                {smart === 'none' ? 'No smart control — selected' : 'No smart control for now'}
              </button>

              <div style={{ overflowX: 'auto', marginTop: 20 }}>
                <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 520 }}>
                  <thead>
                    <tr>
                      {['', 'Elon 100', 'Plentify', 'DB breaker'].map(function (h) {
                        return <th key={h} style={{ ...LABEL, textAlign: h ? 'center' : 'left', padding: '10px 8px', borderBottom: '2px solid var(--web-navy)' }}>{h}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {GR_SMART_TABLE.map(function (row) {
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

              <p style={{ ...SMALL, marginTop: 14, maxWidth: '66ch' }}>The Elon and Plentify devices are installed at the cylinder, because a control device has to sit at the geyser to comply. The electrical point must be within one metre of the cylinder, and a dedicated breaker on the distribution board must isolate the geyser completely.</p>
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

    {/* Running costs */}
    <Section tint eyebrow="Running cost" title="What your geyser actually costs to run"
      intro="The geyser is typically the single largest electricity consumer in a South African home, which is the whole argument for controlling it rather than leaving it on.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>The arithmetic</div>
          <p style={BODY}>Around 70% of the market runs a 150 litre cylinder with a 3 kW element — roughly 13 amps at 230 volts. A full reheat works out at approximately R20 to R30 depending on your local tariff.</p>
          <p style={{ ...BODY, margin: 0 }}>Scheduling and correct sizing can save a household a few hundred rand a month. An oversized or badly controlled cylinder does the opposite, quietly, every day.</p>
        </div>
        <div style={{ ...CARD, background: '#fff' }}>
          <div style={{ ...LABEL, marginBottom: 12 }}>Estimate your monthly geyser cost</div>
          <FieldRow label="People in the household">
            <input type="range" min="1" max="6" step="1" value={runHousehold} aria-label="People in the household"
              onChange={function (e) { setRunHousehold(Number(e.target.value)); }}
              style={{ width: '100%', minHeight: 'var(--web-tap-min)', accentColor: 'var(--web-blue)' }} />
            <span style={{ ...SMALL }}>{runHousehold} {runHousehold === 1 ? 'person' : 'people'}</span>
          </FieldRow>
          <div style={{ height: 12 }}></div>
          <FieldRow label="Your tariff, rand per kWh" hint="Check a recent municipal bill. Most South African households are between R2.50 and R4.50.">
            <input type="range" min="2" max="5" step="0.1" value={tariff} aria-label="Electricity tariff in rand per kilowatt hour"
              onChange={function (e) { setTariff(Number(e.target.value)); }}
              style={{ width: '100%', minHeight: 'var(--web-tap-min)', accentColor: 'var(--web-blue)' }} />
            <span style={{ ...SMALL }}>R{tariff.toFixed(2)} per kWh</span>
          </FieldRow>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 18, paddingTop: 18, borderTop: '1px solid var(--web-grey-100)' }}>
            <div>
              <div style={{ ...LABEL, marginBottom: 6 }}>Estimated monthly</div>
              <div style={{ font: '700 24px/1 var(--font-core)', color: 'var(--web-navy)' }}>R{monthlyCost}</div>
            </div>
            <div>
              <div style={{ ...LABEL, marginBottom: 6 }}>Possible saving on a schedule</div>
              <div style={{ font: '700 24px/1 var(--font-core)', color: 'var(--web-blue)' }}>R{scheduledSaving}</div>
            </div>
          </div>
          <p style={{ ...SMALL, marginTop: 12 }}>Both figures are estimates for a 150 litre, 3 kW cylinder on typical usage. Your own bill is the only accurate number.</p>
        </div>
      </div>
    </Section>

    {/* Step 6 — the specification and contact details */}
    <Section eyebrow="Your replacement" title="Your specification, and where to send it" id="send"
      intro="This is everything you have chosen. Change anything that is wrong, then send it to us — the person who picks it up will already know what your installation needs.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

        <div style={{ ...CARD, padding: 26 }}>
          {summaryPanel}
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--web-grey-100)' }}>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="#configurator" style={{ ...SMALL, color: 'var(--web-blue)', fontWeight: 600 }}>Change any answer</a>
            </div>
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
    <p style={{ ...BODY, fontSize: 14 }}>A standard compliant geyser replacement typically runs between R9,800 and R12,800 excluding VAT, including the cylinder, the installation, the compliance parts and the certificate of compliance.</p>
    <p style={{ ...SMALL, borderTop: '1px solid var(--web-blue-100)', paddingTop: 10 }}>An indication for a standard installation, not a quote. Your cost depends on the capacity, the brand, the system type, the access and the condition of the existing installation. We confirm it on site before any work starts.</p>
  </div>;
}

Object.assign(window, { GeyserReplacementsPage });
