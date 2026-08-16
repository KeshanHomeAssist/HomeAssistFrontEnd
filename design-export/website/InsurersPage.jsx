const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

const MODULES = [
  ['Module 01', '24/7 Assist Call Centre & FNOL', 'headset', 'Assist services for Plumbing , Electrical , Glazier , and Locksmiths nationwide. Every incident is logged, triaged and allocated to a verified provider in the policyholder’s area, with one reference from first notification to close.'],
  ['Module 02', 'Plumbing Incident Managmenet', 'droplets', 'The Plumbing technician, the entity, are contracted to Home Assist , a price list is issued so you can budget your cost, all work carry\'s a warranty, all installed equipment is verified inline with SANS Standards against the invoice before the claim is settled. This includes Solar Systems, Heat Pumps and our Gas coverage is growing'],
  ['Module 03', 'Resultant Incident Management', 'hammer', 'We understand the importance of getting out fast to stop damage and limit the foot traffic through private homes. We control the cost , the quality and the providers entering you home, from Carpenters, painters, electricians and builders, we very everyone and track there progress to ensure'],
  ['Module 04', 'Incident Verification', 'shield-check', 'Award winning AI power solution for Brokers and Insurers and Home Owners who want to use their own people to handle a fix . We make sure, they get what they pay for , installations are safe and complaint and the person signing of the job is who they say they are'],
  ['Module 05', 'Perfom+ SME Development', 'graduation-cap', 'Home Assist is a Level 1 B-BBEE contributor. We started in 2013 with a single vehicle servicing repairs daily, so we understand what it takes to grow a small business. Perform+ works with accredited supplier development partners to lift artisan skills across the country and directs your corporate spend to earn the B-BBEE recognition it is due.'],
  ['Module 06', 'Smart Home Devices', 'wifi', ['Since 2016 we have grown a connected-device platform working with smart geyser controllers and smart metering. Giving insurers a future property book that shifts from reactive to proactive.', 'Homeowner details captured at installation, so claims register in seconds.', 'Hardware faults reported before the failure, cutting wasted call-outs', '- Smart Geyser controllers', '- Smart Metering']],
  ['Module 07', 'Post-Claim Underwritting', 'trending-up', ['Every claim is a property survey you have already paid for. We feed verified incident data back into underwriting — the true condition and age of the installation, whether the failure was sudden or long-neglected, and whether the property has claimed for this peril before. The next renewal is priced on what we found, not on what was declared.', 'Examples :', '- Cyber security risk of connected devices like IP cameras', '- Roof Structures like thatch confirmed', '- Solar Geysers & Heats pumps', '- Corroded pipes', '- No Surge Protection']]
];

const PROOF_ARCHIVE = [
  ['Lodge', 'Multiple-unit commercial property, several geysers on one incident.'],
  ['Solar', 'Solar installation quoted for full replacement where the fault was in one component.'],
  ['Body corporate', 'Sectional-title claim with shared plumbing and a disputed scope.'],
  ['Thin file', 'Claim submitted with no photographs and an unlogged certificate.']
];

function ModuleCard({ number, title, icon, lines, open, onToggle }) {
  const id = number.toLowerCase().replace(/\s+/g, '-');
  return <div style={{ ...CARD, padding: 0, overflow: 'hidden', borderColor: open ? 'var(--web-blue-100)' : 'var(--web-grey-100)' }}>
    <button type="button" onClick={onToggle} aria-expanded={open} aria-controls={id + '-panel'}
      data-ga-event="module_open" data-ga-module={number} data-ga-module-name={title}
      style={{ width: '100%', display: 'grid', gridTemplateColumns: '40px 1fr 24px', gap: 14, alignItems: 'center', textAlign: 'left', background: open ? 'var(--web-blue-050)' : '#fff', border: 0, borderBottom: open ? '1px solid var(--web-blue-100)' : 0, padding: 20, cursor: 'pointer', font: 'inherit' }}>
      <span style={{ width: 40, height: 40, borderRadius: 3, background: open ? 'var(--web-navy)' : 'var(--web-blue-050)', border: '1px solid ' + (open ? 'var(--web-navy)' : 'var(--web-blue-100)'), display: 'grid', placeItems: 'center' }}>
        <Icon name={icon} size={20} color={open ? '#fff' : 'var(--web-blue)'} />
      </span>
      <span>
        <span style={{ ...LABEL, display: 'block', color: 'var(--web-grey-500)', marginBottom: 4 }}>{number}</span>
        <span style={{ ...H3, display: 'block', margin: 0 }}>{title}</span>
      </span>
      <span style={{ display: 'grid', placeItems: 'center', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 180ms cubic-bezier(.2,0,.2,1)' }}>
        <Icon name="chevron-down" size={20} color="var(--web-navy)" />
      </span>
    </button>
    {open ? <div id={id + '-panel'} style={{ padding: 20 }}>
      {lines.map((line, i) => <p key={i} style={{ ...BODY, margin: i ? '6px 0 0' : 0 }}>{line}</p>)}
    </div> : null}
  </div>;
}

function InsurersGate({ onUnlock }) {
  const [email, setEmail] = React.useState('');
  return <div style={{ position: 'fixed', inset: 0, zIndex: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: 'rgba(11,29,58,.55)' }}>
    <form onSubmit={e => { e.preventDefault(); onUnlock(email); }} style={{ ...CARD, padding: 36, width: 'min(520px,100%)', boxShadow: '0 24px 60px rgba(11,29,58,.35)' }}>
      <img src="../../assets/logo/homeassist-logo-horizontal.png" alt="Home Assist" style={{ height: 26, width: 'auto', display: 'block', marginBottom: 22 }} />
      <div style={{ ...LABEL, marginBottom: 10 }}>For insurers, UMAs and brokers</div>
      <h2 style={{ ...H2, fontSize: 24, marginBottom: 12 }}>Enter your email to view this page</h2>
      <p style={{ ...BODY, maxWidth: '46ch' }}>This page sets out how we manage a property claims book. Give us a work email address and it opens.</p>
      <FieldRow label="Work email">
        <input style={INPUT} type="email" required autoFocus value={email} onChange={e => setEmail(e.target.value)} placeholder="name@company.co.za" />
      </FieldRow>
      <label style={{ ...BODY, display: 'flex', gap: 10, alignItems: 'flex-start', margin: '14px 0 0' }}>
        <input type="checkbox" style={{ marginTop: 3 }} />
        <span>Send me occasional Home Assist updates for insurers and brokers.</span>
      </label>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
        <Button size="lg" variant="navy">View the page</Button>
        <Button as="a" size="lg" variant="ghost" href={CH.booking} target="_blank" rel="noopener">Book a meeting instead</Button>
      </div>
      <p style={{ ...SMALL, marginTop: 16 }}>We use it to follow up on this enquiry only. You are not added to any list unless you tick the box.</p>
      <p style={{ ...SMALL, marginTop: 8 }}>If we take it further, a mutual NDA comes first. Anything you send is used only to produce your settlement report, and deleted in full if you are not happy with it.</p>
    </form>
  </div>;
}

function InsurersPage() {
  const KEY = 'ha-insurers-email';
  const [visible, setVisible] = React.useState(() => { try { return !!localStorage.getItem(KEY); } catch (e) { return false; } });
  const [justUnlocked, setJustUnlocked] = React.useState(false);
  const unlock = email => { try { localStorage.setItem(KEY, email); } catch (e) {} setVisible(true); setJustUnlocked(true); };
  return <React.Fragment>
    {!visible ? <InsurersGate onUnlock={unlock} /> : null}
    {justUnlocked ? <div style={{ background: 'var(--web-blue-050)', borderBottom: '1px solid var(--web-blue-100)' }}>
      <div style={{ ...WRAP, padding: '14px 40px', display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <Icon name="check" size={18} color="var(--web-blue)" />
        <p style={{ ...BODY, margin: 0, flex: '1 1 340px' }}>The page is open. To speak to the Home Assist CEO directly, book a meeting or message us — we come back during working hours.</p>
        <Button as="a" variant="navy" href={CH.booking} target="_blank" rel="noopener">Book a meeting</Button>
        <Button as="a" variant="secondary" href={wa('Hi Home Assist, I have just read the insurers page and would like to talk. ', true)} target="_blank" rel="noopener">WhatsApp us</Button>
      </div>
    </div> : null}
    <div style={{ filter: visible ? 'none' : 'blur(6px)', pointerEvents: visible ? 'auto' : 'none', userSelect: visible ? 'auto' : 'none', transition: 'filter 320ms cubic-bezier(.2,0,.2,1)' }} aria-hidden={!visible}>
      <InsurersBody />
    </div>
  </React.Fragment>;
}

function InsurersBody() {
  const [openModule, setOpenModule] = React.useState(null);
  const toggleModule = (number, title) => {
    const next = openModule === number ? null : number;
    setOpenModule(next);
    if (next) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'module_open', module_number: number, module_name: title });
      if (typeof window.gtag === 'function') window.gtag('event', 'module_open', { module_number: number, module_name: title });
    }
  };
  return <main>
    {/* Hero */}
    <section style={{ background: 'var(--web-navy)' }}>
      <div style={{ ...WRAP, padding: '72px 40px', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Eyebrow onDark>For insurers, UMAs, binder holders and brokers</Eyebrow>
          <h1 style={{ ...DISPLAY, color: '#fff', maxWidth: '22ch', marginBottom: 18 }}>Turnkey or modular management of your property claims book.</h1>
          <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', fontSize: 17, maxWidth: '58ch', marginBottom: 26 }}>Home Assist takes the incident from first notification to a closed, evidenced, compliant file. Take the whole process, or take the modules you are missing.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button as="a" size="lg" variant="onDark" href={CH.booking} target="_blank" rel="noopener">Book Free Pilot</Button>
            <Button as="a" size="lg" variant="ghost" href={wa('Hi Home Assist, I am enquiring about claims management for our book. ', true)} target="_blank" rel="noopener" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }} iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>WhatsApp us</Button>
          </div>
        </div>
        <div style={{ border: '1px solid rgba(255,255,255,.22)', borderRadius: 4, padding: 28 }}>
          <Eyebrow onDark>The offer in one line</Eyebrow>
          <p style={{ ...BODY, color: '#fff', fontSize: 17, margin: 0 }}>Send us a sample of settled claims. We will verify them and show you what we find.</p>
          <div style={{ height: 1, background: 'rgba(255,255,255,.22)', margin: '22px 0' }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div><div style={{ font: '700 34px/1 var(--font-core)', color: '#fff' }}>7 days</div><div style={{ ...LABEL, color: 'var(--web-blue-300)', marginTop: 6 }}>Free pilot</div></div>
            <div><div style={{ font: '700 34px/1 var(--font-core)', color: '#fff' }}>100%</div><div style={{ ...LABEL, color: 'var(--web-blue-300)', marginTop: 6 }}>Incidents verified free for the pilot</div></div>
          </div>
        </div>
      </div>
    </section>

    {/* Audience strip */}
    <div style={{ background: 'var(--web-grey-050)', borderBottom: '1px solid var(--web-grey-100)' }}>
      <div style={{ ...WRAP, padding: '22px 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
        {[['Insurers', 'Whole-book or overflow'], ['UMAs', 'Delegated authority, controlled spend'], ['Binder holders', 'Cell Captives & Shared Risk'], ['Brokers', 'A service answer for your clients']].map(([l, v]) =>
          <div key={l}><div style={LABEL}>{l}</div><div style={{ ...SMALL, marginTop: 6 }}>{v}</div></div>)}
      </div>
    </div>

    {/* Problem */}
    <Section eyebrow="The problem" title="The leak is not in the claim. It is in the process."
      intro="Property claims leak value in places that never show up on the claim form: work that was never verified, certificates that were written but never logged, prices accepted because nobody had a benchmark, and providers who price delay into every quote because they are paid at 60 or 90 days.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        <LabelCard icon="file-search" label="Unverified work" title="The invoice is checked, the work is not">Photographs, serial numbers and certificates are rarely reconciled against what was invoiced.</LabelCard>
        <LabelCard icon="shield-alert" label="Compliance exposure" title="A certificate that was never logged">An unlogged COC leaves the insurer carrying the compliance risk long after the claim is closed.</LabelCard>
        <LabelCard icon="clock" label="Cost of delay" title="Slow payment is priced in">Providers paid at 60 or 90 days build the wait into the rate. The book pays for it on every job.</LabelCard>
      </div>
    </Section>

    {/* Modules */}
    <Section tint eyebrow="What we do" title="Seven modules. Take all of them, or take the gaps." intro="Click any module to open it.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, alignItems: 'start' }}>
        {MODULES.map(([m, t, ic, d]) => <ModuleCard key={m} number={m} title={t} icon={ic} lines={Array.isArray(d) ? d : [d]} open={openModule === m} onToggle={() => toggleModule(m, t)} />)}
      </div>
    </Section>

    {/* Book a meeting */}
    <Section eyebrow="Commercial detail" title="Get an offer from Home Assist">
      <div style={{ ...CARD, padding: 32, maxWidth: 760 }}>
        <p style={{ ...BODY, maxWidth: '62ch', marginBottom: 20 }}>Meet with us online or in person to discuss how we can help you get control of your property book</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button as="a" size="lg" variant="navy" href={CH.booking} target="_blank" rel="noopener" iconLeft={<Icon name="calendar" size={18} color="#fff" />}>Book a meeting</Button>
          <Button as="a" size="lg" variant="ghost" href={wa('Hi Home Assist, I would like to book a meeting about our property book. ', true)} target="_blank" rel="noopener">WhatsApp us</Button>
        </div>
        <p style={{ ...SMALL, marginTop: 16 }}>Pick a slot that suits you. Thirty minutes, no pack to read first.</p>
      </div>
    </Section>

    <Section tint eyebrow="Commercial detail" title="The commercial model and the verified claim examples">
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
          <div style={CARD}>
            <div style={{ ...LABEL, marginBottom: 10 }}>Commercial model</div>
            <h3 style={H3}>A fee tied to your loss ratio</h3>
            <p style={BODY}>Home Assist is paid against the performance of the book, not against the volume of claims put through it. The structure, the float mechanics and the fee bands are set out in HA-COM-2026-001.</p>
          </div>
          <div style={CARD}>
            <div style={{ ...LABEL, marginBottom: 10 }}>Direct settlement</div>
            <h3 style={H3}>Providers paid from a transparent fund</h3>
            <p style={BODY}>Settlement runs off a float held against the book. The provider is paid on a verified, evidenced file — before photographs, quote, invoice, logged certificate, after photographs.</p>
            <p style={{ ...BODY, margin: 0 }}>Reconciliation and float reporting are retrievable from the portal at any time.</p>
          </div>
        </div>
        <div style={{ ...CARD, borderLeft: '3px solid var(--web-blue)' }}>
          <div style={{ ...LABEL, marginBottom: 10 }}>Your data</div>
          <h3 style={H3}>A mutual NDA before anything is shared</h3>
          <p style={BODY}>Before you send us a single claim file, Home Assist provides our standard mutual non-disclosure agreement. Your data is used for one purpose: producing your settlement report.</p>
          <p style={{ ...BODY, margin: 0 }}>If you are not happy with what we come back with, we delete everything you provided, in full.</p>
        </div>
      </div>
    </Section>

    <NavyBand eyebrow="Next step" title="Send us a sample of settled claims. We will verify them and show you what we find.">
      <Button as="a" size="lg" variant="onDark" href={CH.booking} target="_blank" rel="noopener">Book a sample review</Button>
      <Button as="a" size="lg" variant="ghost" href={wa('Hi Home Assist, we would like to discuss a sample claim review. ', true)} target="_blank" rel="noopener" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}>WhatsApp us</Button>
    </NavyBand>
  </main>;
}

Object.assign(window, { InsurersPage });
