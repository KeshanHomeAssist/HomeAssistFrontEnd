const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

const HOME_FAQ = [
  ['What should I do first when my geyser bursts?', 'Close the main water supply at the meter, then switch the geyser off at the distribution board. Open a hot tap to relieve pressure, move what you can out of the way of the water, photograph the damage before anything is moved, and message us on WhatsApp.'],
  ['How quickly can you get a plumber to my house?', 'We acknowledge every emergency message immediately and allocate the closest available verified artisan. Standard attendance times are still being confirmed.'],
  ['Do you work after hours and on weekends?', 'Yes. The WhatsApp line and the hotline are attended 24 hours a day, seven days a week.'],
  ['Is my geyser still under warranty?', 'Send us a photograph of the serial number plate on the geyser. We decode the manufacturer and date code and tell you whether the unit is still covered, because a unit under warranty may be repaired or replaced by the manufacturer at no cost to you.'],
  ['Do you issue a certificate of compliance?', 'Yes. Plumbing work is certified to SANS 10254 and electrical work to SANS 10142-1. The certificate is issued and logged with the relevant board, not simply written out.'],
  ['Which areas do you cover?', 'We work through a nationwide network, with the strongest coverage in Cape Town, Johannesburg, Pretoria, Durban and Gqeberha. The confirmed service-area list is being finalised.'],
  ['What does it cost to replace a burst geyser?', 'The cost depends on the size and type of the unit, how accessible the installation is, and whether the existing geyser is still under manufacturer warranty. We check the warranty before quoting a replacement.'],
  ['Can you help if my insurer has paid me out in cash?', 'Yes. If your insurer has settled in cash and asked you to appoint your own plumber, we can verify the quote and the work before you commit to it.'],
  ['Are your artisans registered and insured?', 'Every provider on the network is a registered entity carrying public liability cover, with a licensed technician genuinely linked to the working company. We verify this before allocating work.']
];

const GOOGLE_REVIEWS = [
  ['Anneline Coopsamy', 5, 'a year ago', 'The plumbers were excellent. Installation was quick. Service was impeccable. I am very happy with the services rendered.', 'Happy to be of service'],
  ['Sebastian Vries', 5, 'a year ago', 'Very happy with the service. Best company ever!!', 'Thank you'],
  ['Renita Swart', 5, 'a year ago', 'Always satisfied with your service.', 'Thank you'],
  ['Matshidiso Taunyane', 5, 'a year ago', 'The assistance on replacing the geyser was very efficient and a good job, we are also very grateful for the short turnaround in assistance after incident was reported.', 'Thank you']
];

const GOOGLE_SUMMARY = { rating: '4,4', count: 9, bars: [[5, 6], [4, 1], [3, 0], [2, 0], [1, 1]] };

function Stars({ n, size = 15 }) {
  return <div style={{ display: 'flex', gap: 2 }}>{[0, 1, 2, 3, 4].map(s => <Icon key={s} name="star" size={size} color={s < n ? '#F2B01E' : 'var(--web-grey-300)'} />)}</div>;
}

function ReviewsCarousel() {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const n = GOOGLE_REVIEWS.length;
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(p => (p + 1) % n), 6000);
    return () => clearInterval(t);
  }, [paused, n]);
  const track = { display: 'flex', gap: 20, transition: 'transform 520ms cubic-bezier(.2,0,.2,1)', transform: 'translateX(calc(' + (-i * 100) + '% - ' + (i * 20) + 'px))' };
  return <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} style={{ minWidth: 0 }}>
    <div style={{ overflow: 'hidden', minWidth: 0 }}>
      <div style={track}>
        {GOOGLE_REVIEWS.map(([name, stars, when, text, reply]) => <div key={name} style={{ ...CARD, flex: '0 0 100%', minWidth: 0, boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <span style={{ width: 34, height: 34, borderRadius: 17, background: 'var(--web-navy)', color: '#fff', display: 'grid', placeItems: 'center', font: '600 15px/1 var(--font-core)' }}>{name.charAt(0)}</span>
            <span>
              <span style={{ display: 'block', font: '600 15px/1.2 var(--font-core)', color: 'var(--web-navy)' }}>{name}</span>
              <span style={{ ...SMALL, display: 'block', marginTop: 2 }}>{when} · Google</span>
            </span>
            <span style={{ marginLeft: 'auto' }}><Stars n={stars} /></span>
          </div>
          <p style={{ ...BODY, minHeight: '4.5em' }}>{text}</p>
          <div style={{ borderLeft: '2px solid var(--web-blue-100)', paddingLeft: 12 }}>
            <div style={{ ...LABEL, color: 'var(--web-grey-500)' }}>Home Assist Technologies</div>
            <p style={{ ...SMALL, margin: '4px 0 0' }}>{reply}</p>
          </div>
        </div>)}
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16 }}>
      <button type="button" aria-label="Previous review" onClick={() => setI((i - 1 + n) % n)} style={{ width: 34, height: 34, borderRadius: 3, border: '1px solid var(--web-grey-300)', background: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer' }}><Icon name="chevron-left" size={18} color="var(--web-navy)" /></button>
      <button type="button" aria-label="Next review" onClick={() => setI((i + 1) % n)} style={{ width: 34, height: 34, borderRadius: 3, border: '1px solid var(--web-grey-300)', background: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer' }}><Icon name="chevron-right" size={18} color="var(--web-navy)" /></button>
      <div style={{ display: 'flex', gap: 6, marginLeft: 6 }}>
        {GOOGLE_REVIEWS.map(([name], k) => <button key={name} type="button" aria-label={'Review ' + (k + 1)} onClick={() => setI(k)} style={{ width: k === i ? 20 : 8, height: 8, borderRadius: 4, border: 0, padding: 0, background: k === i ? 'var(--web-blue)' : 'var(--web-grey-300)', cursor: 'pointer', transition: 'width 200ms' }}></button>)}
      </div>
    </div>
  </div>;
}

function CostReveal({ context, lines, children }) {
  const [open, setOpen] = React.useState(false);
  const reveal = () => {
    setOpen(true);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'estimated_costs_view', cost_context: context });
    if (typeof window.gtag === 'function') window.gtag('event', 'estimated_costs_view', { cost_context: context });
  };
  return <div>
    {!open ? <React.Fragment>
      <p style={BODY}>Costs vary by site. Open the indicative range for a standard installation or repair.</p>
      <Button variant="navy" fullWidth onClick={reveal} data-ga-event="estimated_costs_view" data-ga-context={context} iconLeft={<Icon name="calculator" size={17} color="#fff" />}>Estimated costs</Button>
    </React.Fragment> : <React.Fragment>
      {lines.map((line, i) => <p key={i} style={BODY}>{line}</p>)}
      <p style={{ ...SMALL, borderTop: '1px solid var(--web-blue-100)', paddingTop: 12 }}>Every site is different. These prices are indications for standard installations and repairs. Your final cost depends on access, the condition of the existing installation and the scope found on site.</p>
      {children}
    </React.Fragment>}
  </div>;
}

function HomePage({ go }) {
  return <main>
    {/* Hero */}
    <section style={{ borderBottom: '1px solid var(--web-grey-100)' }}>
      <div style={{ ...WRAP, padding: '64px 40px 56px', display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Eyebrow>24/7 home emergency response</Eyebrow>
          <h1 style={{ ...DISPLAY, maxWidth: '20ch', marginBottom: 18 }}>Burst geyser, leaking pipe or no power? Get a verified artisan to your home.</h1>
          <p style={{ ...BODY, fontSize: 17, maxWidth: '58ch', marginBottom: 24 }}>Home Assist connects South African homeowners with vetted plumbers, electricians and building contractors. Send us a message on WhatsApp and we will find the right person for the job.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
            <Button as="a" size="lg" variant="navy" href={wa('Hi Home Assist, I need help with: ')} target="_blank" rel="noopener"
              iconLeft={<Icon name="message-circle" size={19} color="#fff" />}>WhatsApp us now</Button>
            <Button as="a" size="lg" variant="secondary" href={'tel:' + CH.phoneTel} iconLeft={<Icon name="phone" size={17} color="var(--web-navy)" />}>Call {CH.phone}</Button>
            {/* Jumps to the request form further down the page. Plain anchor to
                #request, so it still works with JavaScript disabled and the
                browser handles the scroll. */}
            <Button as="a" size="lg" variant="secondary" href="#request"
              iconLeft={<Icon name="clipboard-check" size={17} color="var(--web-navy)" />}>Service Request</Button>
          </div>
          <p style={SMALL}>Available 24/7 · Nationwide network · Every job verified</p>
        </div>
        <div style={{ background: '#fff', borderRadius: 4, display: 'grid', placeItems: 'center', minHeight: 340, overflow: 'hidden' }}>
          <img src="../../assets/illustrations/techman-home-app.gif" alt="A Home Assist technician logging a job on the app outside a home" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </section>

    {/* Trust strip */}
    <div style={{ background: 'var(--web-grey-050)', borderBottom: '1px solid var(--web-grey-100)' }}>
      <div style={{ ...WRAP, padding: '20px 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
        {[['Verified artisans', 'Registered, licensed, vetted & Contracted'], ['COC issued, checked and logged', 'All Installations are aligned to South African National Standards SANS'], ['24/7 response', 'WhatsApp and hotline, every day'], ['Work guaranteed', '1 year workmanship warranty on all work. Terms and conditions apply.']].map(([l, v]) =>
          <div key={l}><div style={LABEL}>{l}</div><div style={{ ...SMALL, marginTop: 6 }}>{v}</div></div>)}
      </div>
    </div>

    {/* Choose a need */}
    <Section eyebrow="Where to start" title="What do you need help with?">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        <a href="#geyser" style={{ textDecoration: 'none' }}><LabelCard icon="droplets" label="Plumbing emergency" title="Burst geyser replacement">A burst geyser is a plumbing emergency. Close the main water supply, switch the geyser off at the DB board, and message us.</LabelCard></a>
        <a href="#leaks" style={{ textDecoration: 'none' }}><LabelCard icon="search" label="Hidden water loss" title="Leak detection and burst pipe repair">Unexplained high water bill, damp walls or the sound of running water with all the taps closed.</LabelCard></a>
        <a href="#trades" style={{ textDecoration: 'none' }}><LabelCard icon="zap" label="Power and repairs" title="Electrical and building repairs">No power, a tripping board, or the ceiling and waterproofing repairs that follow a water leak.</LabelCard></a>
      </div>
    </Section>

    {/* Geyser */}
    <Section id="geyser" tint eyebrow="Burst geyser" title="What to do when your geyser bursts"
      intro="A burst geyser is a plumbing emergency. Shut the water off first, then the electricity, then call for help — in that order.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, alignItems: 'start' }}>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>What to do first</div>
          <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {['Close the main water supply at the meter.', 'Switch the geyser off at the distribution board.', 'Open a hot tap to relieve the pressure.', 'Move what you can out of the way of the water.', 'Take photographs before anything is moved.', 'Message Home Assist on WhatsApp.'].map((s, i) =>
              <li key={s} style={{ display: 'flex', gap: 14, padding: '10px 0', borderBottom: '1px solid var(--web-grey-100)' }}>
                <span style={{ ...LABEL, color: 'var(--web-blue)', width: 22 }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ ...BODY, margin: 0 }}>{s}</span>
              </li>)}
          </ol>
        </div>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>What a replacement includes</div>
          <p style={BODY}>A new geyser installed to SANS 10254, will include a new drip tray, vacuum breakers, a safety valve, a pressure control valve, overflow and drain pipes, and a SANS or PIRB certificate of compliance issued and logged.</p>
          <div style={{ ...LABEL, margin: '18px 0 10px' }}>How long it takes</div>
          <p style={{ ...BODY, margin: 0 }}>Most like-for-like replacements are completed within 3 - 5 hours normally with a single visit on the same day. High volumes of work in winter sometime means next day service</p>
        </div>
        <div style={{ ...CARD, background: 'var(--web-blue-050)', border: '1px solid var(--web-blue-100)' }}>
          <div style={{ ...LABEL, marginBottom: 10 }}>What it costs</div>
          <CostReveal context="burst_geyser" lines={['The cost depends on the size of the unit, the brand, the type — electric, solar or heat pump — how accessible the installation is, and whether the existing unit is still under manufacturer warranty. We typically see costs ranging between R 9,800 ex vat and R 12,800 ex vat for safe complaint geyser replacements']}>
            <Button as="a" variant="navy" fullWidth href={wa('Hi Home Assist, my geyser has burst. ')} target="_blank" rel="noopener" iconLeft={<Icon name="message-circle" size={17} color="#fff" />}>Send us the details</Button>
          </CostReveal>
        </div>
      </div>

      {/* PIRB and IOPSA */}
      <div style={{ marginTop: 20, ...CARD, display: 'grid', gridTemplateColumns: '160px 1fr', gap: 28, alignItems: 'center' }}>
        <a href="../../assets/certificates/home-assist-iopsa-2026.jpeg" target="_blank" rel="noopener" style={{ display: 'block' }}>
          <img src="../../assets/logo/iopsa-logo.png" alt="The Institute of Plumbing South Africa" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </a>
        <div>
          <div style={{ ...LABEL, marginBottom: 10 }}>Who may work on your geyser</div>
          <p style={BODY}>Plumbers must be registered with the <a href="https://www.pirb.co.za/" target="_blank" rel="noopener">Plumbing Industry Registration Board</a>. Home Assist Technologies is a registered member of IOPSA, membership number 57677983, valid 01/03/2026 to 28/02/2027.</p>
          <p style={{ ...BODY, margin: 0 }}><a href="../../assets/certificates/home-assist-iopsa-2026.jpeg" target="_blank" rel="noopener">View our IOPSA membership certificate</a></p>
        </div>
      </div>

      {/* Warranty differentiator */}
      <div style={{ marginTop: 32, background: '#fff', border: '1px solid var(--web-grey-100)', borderLeft: '3px solid var(--web-blue)', borderRadius: 4, padding: '28px 32px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 32, alignItems: 'center', boxShadow: 'var(--web-shadow-card)' }}>
        <div>
          <div style={{ ...LABEL, marginBottom: 10 }}>Before you replace anything</div>
          <h3 style={{ ...H2, fontSize: 21 }}>Is your geyser still under warranty?</h3>
          <p style={{ ...BODY, maxWidth: '64ch' }}>We check the manufacturer warranty on the existing unit before we quote a replacement. A geyser still under warranty may be repaired or replaced by the manufacturer at no cost to you. Send us a photograph of the serial number plate and we will decode it and tell you.</p>
          <p style={{ ...BODY }}>If you are claiming, or your insurer has settled in cash and asked you to appoint your own plumber, we can verify the quote and the work.</p>
          <Button as="a" variant="navy" size="lg" href={wa('Hi Home Assist, here is a photo of my geyser serial plate. Is it still under warranty?')} target="_blank" rel="noopener" iconLeft={<Icon name="camera" size={18} color="#fff" />}>Send us the serial plate</Button>
        </div>
        <div>
          <div style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', border: '1px solid var(--web-grey-100)', background: 'var(--web-navy-900)' }}>
            <img src="../../assets/illustrations/serial-plate-electrolux.jpg" alt="Geyser serial number plate showing model and date code" style={{ display: 'block', width: '100%', height: 168, objectFit: 'cover' }} />
            <div className="ha-scan"></div>
            <div style={{ position: 'absolute', left: 10, bottom: 8, ...LABEL, fontSize: 10, color: '#fff', background: 'rgba(11,29,58,.72)', padding: '3px 6px', borderRadius: 2 }}>Decoding serial</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12 }}>
            <img src="../../assets/illustrations/geyser-kwikot.png" alt="Replacement geyser" style={{ width: 108, height: 'auto', display: 'block' }} />
            <p style={{ ...SMALL, margin: 0 }}>Photograph the plate on the unit and send it to WhatsApp {CH.waHome}.</p>
          </div>
        </div>
      </div>
    </Section>

    {/* Leaks */}
    <Section id="leaks" eyebrow="Leak detection" title="Leak detection and burst pipe repair"
      intro="Leak detection finds a hidden water leak without breaking open walls, floors or paving.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>Signs you have a hidden leak</div>
          <ul style={{ ...BODY, margin: 0, paddingLeft: 18 }}>
            <li>A water bill that has jumped with no change in use</li>
            <li>The water meter turning with every tap closed</li>
            <li>A damp patch or a warm spot on a floor</li>
            <li>The sound of running water in a wall</li>
            <li>Paint bubbling, or a musty smell</li>
          </ul>
        </div>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>How leak detection works</div>
          <p style={BODY}>Nothing gets opened first. An isolation test on the meter confirms water is being lost, then a visual inspection reads what the water is already showing. Thermal, tracer gas or acoustic equipment narrows the position — which one depends on the environment and on what the technician is trained on.</p>
          <p style={BODY}>A second confirming test pins the leak to within about a metre, normally in about an hour. Only then is anything opened: the pipe is repaired and pressure tested, and the damage the water caused is repaired after a short try-out period.</p>
          <a href="#/leak-detection" onClick={e => { e.preventDefault(); go('leakDetection'); }} style={{ font: '600 var(--web-size-body)/1.4 var(--font-core)', color: 'var(--web-blue)', textDecoration: 'none' }}>How we find a leak, in full →</a>
        </div>
        <div style={{ ...CARD, background: 'var(--web-blue-050)', border: '1px solid var(--web-blue-100)' }}>
          <div style={{ ...LABEL, marginBottom: 10 }}>What it costs</div>
          <CostReveal context="leak_detection" lines={['Leak detection is done first, to pinpoint the leak. The pipe repair and then the resultant damage repair follow. Finding and repairing the leak typically runs R2,000 to R6,200 ex VAT, and resultant repairs R5,000 to R21,000 ex VAT. The repair scope genuinely cannot be quoted until the leak has been found.']}>
            <Button as="a" variant="navy" fullWidth href={wa('Hi Home Assist, I think I have a hidden water leak. ')} target="_blank" rel="noopener" iconLeft={<Icon name="message-circle" size={17} color="#fff" />}>Send us the details</Button>
          </CostReveal>
        </div>
      </div>
    </Section>

    {/* Trades */}
    <Section id="trades" tint eyebrow="Other trades" title="Electricians, gas and building contractors">
      {/* Each trade card now opens with an illustration strip where the icon
          used to be. Fixed strip height with object-fit: cover, so three source
          images of different proportions still line up across the row. */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, alignItems: 'start' }}>
        <div style={{ ...CARD, padding: 0, overflow: 'hidden' }}>
          <img src="/assets/illustrations/trade-electrical.jpg" alt="A house with rooftop solar, an inverter and battery, and a Home Assist van at an electric vehicle charging point" style={{ width: '100%', height: 168, objectFit: 'cover', display: 'block' }} />
          <div style={{ padding: 24 }}>
            <h3 style={H3}>Electricians</h3>
            <p style={BODY}>No power, a distribution board that keeps tripping, fault finding, rewiring, and the electrical certificate of compliance a property sale requires.</p>
            <p style={{ ...BODY, margin: 0 }}>Home Assist electricians are registered persons with the <a href="https://ecasa.co.za/" target="_blank" rel="noopener">Electrical Contractors Board</a> where issued certificates are registered and logged</p>
          </div>
        </div>
        <div style={{ ...CARD, padding: 0, overflow: 'hidden' }}>
          <img src="/assets/illustrations/trade-building.jpg" alt="A Home Assist bricklayer building a wall beside a cement mixer and stacks of brick and block" style={{ width: '100%', height: 168, objectFit: 'cover', display: 'block' }} />
          <div style={{ padding: 24 }}>
            <h3 style={H3}>Building contractors</h3>
            <p style={BODY}>Ceiling replacement after a leak, waterproofing, making good after water damage, and general repairs.</p>
            <p style={{ ...BODY, margin: 0 }}>The same SANS standard applies: a registered entity will need a registration with <a href="https://www.cidb.org.za/" target="_blank" rel="noopener">Construction Industry Registration Development</a> Board and as a minimum requirement <a href="https://www.nhbrc.org.za/" target="_blank" rel="noopener">National Home Builders Registration Council</a>, a scoped quote, photographic evidence before and after.</p>
          </div>
        </div>
        <div style={{ ...CARD, padding: 0, overflow: 'hidden' }}>
          <img src="/assets/illustrations/trade-gas-geyser.jpg" alt="A Home Assist technician servicing a wall-mounted gas water heater in a tiled bathroom" style={{ width: '100%', height: 168, objectFit: 'cover', display: 'block' }} />
          <div style={{ padding: 24 }}>
            <h3 style={H3}>Gas geyser installers and repairers</h3>
            <p style={BODY}>Gas geysers and other gas equipment, including HVAC, which we also handle.</p>
            <p style={{ ...BODY, margin: 0 }}>Gas installers must be registered with the <a href="https://lpgas.co.za/" target="_blank" rel="noopener">LPGSA</a>, and a gas certificate of conformity is issued on completion.</p>
          </div>
        </div>
      </div>
    </Section>

    {/* How it works */}
    <Section eyebrow="How it works" title="From your first message to a finished job">
      <Steps items={[
        ['01', 'You message us', 'WhatsApp, call or the form below. Tell us what has happened and where you are.'],
        ['02', 'We find the artisan', 'From our verified nationwide network, matched to your job and your area.'],
        ['03', 'The work is verified', "We check the technician's registration, the certificate is issued and logged, and the price is checked against benchmark."],
        ['04', 'You are looked after', 'One point of contact from the first message to the finished job.']
      ]} />
    </Section>

    <RequestForm />

    {/* Reviews */}
    <Section eyebrow="Reviews" title="What our customers say"
      intro="Reviews from the Home Assist Technologies Google Business Profile.">
      <div style={{ display: 'grid', gridTemplateColumns: '300px minmax(0, 1fr)', gap: 20, alignItems: 'start' }}>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 12 }}>Google review summary</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ font: '700 40px/1 var(--font-core)', color: 'var(--web-navy)' }}>{GOOGLE_SUMMARY.rating}</span>
            <span><Stars n={4} size={16} /><span style={{ ...SMALL, display: 'block', marginTop: 4 }}>({GOOGLE_SUMMARY.count} reviews)</span></span>
          </div>
          <div style={{ display: 'grid', gap: 6, marginTop: 16 }}>
            {GOOGLE_SUMMARY.bars.map(([star, count]) => <div key={star} style={{ display: 'grid', gridTemplateColumns: '10px 1fr', gap: 8, alignItems: 'center' }}>
              <span style={{ ...SMALL, color: 'var(--web-grey-500)' }}>{star}</span>
              <span style={{ height: 7, background: 'var(--web-grey-100)', borderRadius: 4, overflow: 'hidden', display: 'block' }}>
                <span style={{ display: 'block', height: '100%', width: (count / GOOGLE_SUMMARY.count * 100) + '%', background: '#F2B01E' }}></span>
              </span>
            </div>)}
          </div>
          <Button as="a" variant="ghost" fullWidth href="https://www.google.com/search?q=home+assist+technologies" target="_blank" rel="noopener" style={{ marginTop: 18 }}>Read them on Google</Button>
          <Button as="a" variant="navy" fullWidth href={CH.rating} target="_blank" rel="noopener" style={{ marginTop: 10 }}>Rate us</Button>
          <p style={{ ...SMALL, marginTop: 10 }}>A private rating on a job we handled for you — or change a rating you have already given.</p>
        </div>
        <ReviewsCarousel />
      </div>
    </Section>

    {/* FAQ */}
    <Section tint narrow eyebrow="Questions" title="Frequently asked questions">
      <Accordion items={HOME_FAQ} />
    </Section>

    <NavyBand eyebrow="Get help now" title="Message us on WhatsApp. We pick up 24 hours a day.">
      <Button as="a" size="lg" variant="onDark" href={wa('Hi Home Assist, I need help with: ')} target="_blank" rel="noopener" iconLeft={<Icon name="message-circle" size={18} color="var(--web-navy)" />}>WhatsApp {CH.waHome}</Button>
      <Button as="a" size="lg" variant="ghost" href={'tel:' + CH.phoneTel} style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}>Call {CH.phone}</Button>
      <Button as="a" size="lg" variant="ghost" href={'mailto:' + CH.help} style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}>{CH.help}</Button>
    </NavyBand>
  </main>;
}

function RequestForm() {
  const [sent, setSent] = React.useState(false);
  const [waLink, setWaLink] = React.useState('');
  const row = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 };
  if (sent) return <Section tint eyebrow="Request received">
    <div style={{ background: 'var(--web-navy)', borderRadius: 4, padding: '40px 44px' }}>
      <Eyebrow onDark>One step left</Eyebrow>
      <h2 style={{ ...H2, color: '#fff', fontSize: 26 }}>Press send on WhatsApp and we have it.</h2>
      <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', maxWidth: '60ch' }}>WhatsApp has opened with your details already filled in. Send the message and a consultant will pick it up — we answer 24 hours a day. If WhatsApp did not open, use the button below.</p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button as="a" variant="onDark" href={waLink || wa('Hi Home Assist, I would like to log a service request. ')} target="_blank" rel="noopener">Open WhatsApp with my request</Button>
        <Button as="a" variant="ghost" href={'tel:' + CH.phoneTel} style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}>Call {CH.phone} instead</Button>
        <Button variant="ghost" onClick={() => setSent(false)} style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}>Edit my request</Button>
      </div>
    </div>
  </Section>;
  return <Section id="request" tint eyebrow="Service request" title="Tell us what you need"
    intro="We will match you with an artisan and come back to you on WhatsApp.">
    <form onSubmit={e => { e.preventDefault(); setWaLink(whatsappHandoff(e.currentTarget, { intro: 'New service request from the Home Assist website.' })); setSent(true); }} style={{ ...CARD, padding: 32, maxWidth: 900 }}>
      <div style={row}>
        <FieldRow label="Full name"><input style={INPUT} required /></FieldRow>
        <FieldRow label="Mobile number" hint="South African format, e.g. 082 123 4567"><input style={INPUT} type="tel" required /></FieldRow>
      </div>
      <div style={row}>
        <FieldRow label="Email address (optional)"><input style={INPUT} type="email" /></FieldRow>
        <FieldRow label="What do you need?"><select style={INPUT} required defaultValue="">
          <option value="" disabled>Select a service</option>
          {['Burst geyser', 'Leak detection', 'Burst pipe repair', 'Electrical', 'Building or ceiling repair', 'Something else'].map(o => <option key={o}>{o}</option>)}
        </select></FieldRow>
      </div>
      <div style={{ marginBottom: 20 }}>
        <FieldRow label="Describe the problem"><textarea style={{ ...INPUT, minHeight: 96, resize: 'vertical' }} required /></FieldRow>
      </div>
      <div style={row}>
        <FieldRow label="Suburb or area"><input style={INPUT} required /></FieldRow>
        <FieldRow label="City"><select style={INPUT} required defaultValue="">
          <option value="" disabled>Select a city</option>
          {['Cape Town', 'Johannesburg', 'Pretoria', 'Durban', 'Gqeberha', 'Other'].map(o => <option key={o}>{o}</option>)}
        </select></FieldRow>
      </div>
      <div style={row}>
        <FieldRow label="Is this an emergency?">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 4 }}>
            {['Yes, today', 'Within a few days', 'Just getting a quote'].map(o =>
              <label key={o} style={{ ...BODY, margin: 0, display: 'flex', gap: 9, alignItems: 'center' }}><input type="radio" name="urgency" required />{o}</label>)}
          </div>
        </FieldRow>
        <FieldRow label="Are you claiming from insurance?">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 4 }}>
            {['Yes', 'No', 'Not sure'].map(o =>
              <label key={o} style={{ ...BODY, margin: 0, display: 'flex', gap: 9, alignItems: 'center' }}><input type="radio" name="claim" required />{o}</label>)}
          </div>
        </FieldRow>
      </div>
      <div style={{ marginBottom: 20 }}>
        <FieldRow label="Photographs (optional)" hint="Before photographs help us quote accurately."><input style={{ ...INPUT, padding: '9px 12px' }} type="file" multiple /></FieldRow>
      </div>
      <label style={{ ...BODY, display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 24 }}>
        <input type="checkbox" required style={{ marginTop: 3 }} />
        <span>I agree that Home Assist may contact me about this request.</span>
      </label>
      <Button size="lg" variant="navy" iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>Send my request on WhatsApp</Button>
      <p style={{ ...SMALL, marginTop: 14 }}>This opens WhatsApp with your answers filled in, so you can send them to us in one tap. We answer 24 hours a day.</p>
    </form>
  </Section>;
}

Object.assign(window, { HomePage });
