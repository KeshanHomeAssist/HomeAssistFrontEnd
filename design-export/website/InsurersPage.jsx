const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

const MODULES = [
  ['Module 01', '24/7 Assist Call Centre & FNOL', 'headset', 'Assist services for Plumbing, Electrical, Glazier and Locksmiths nationwide. Every incident is logged, triaged and allocated to a verified provider in the policyholder’s area, with one reference from first notification to close.'],
  ['Module 02', 'Plumbing Incident Management', 'droplets', 'The plumbing technician and the entity are contracted to Home Assist. A price list is issued so you can budget your cost, all work carries a warranty, and all installed equipment is verified in line with SANS standards against the invoice before the claim is settled. This includes solar systems and heat pumps, and our gas coverage is growing.'],
  ['Module 03', 'Resultant Incident Management', 'hammer', 'We understand the importance of getting out fast to stop damage and limit the foot traffic through private homes. We control the cost, the quality and the providers entering the home — carpenters, painters, electricians and builders. We vet everyone and track their progress through to sign-off.'],
  ['Module 04', 'Governance, Compliance & POPIA', 'scale', ['Governance and compliance means every provider on your book is properly vetted before they are allocated a single job: contracted to Home Assist, licensed and registered where the trade requires it, tax compliant, B-BBEE compliant, and carrying the public liability cover the work demands.', 'POPIA governs the sharing of personal customer information. Home Assist systems and processes are designed in line with the Act, so your internal team is not adding to your risk of a fine from the Information Regulator.', '- Vetted, contracted and licensed providers', '- Tax and B-BBEE compliance verified', '- Public liability cover confirmed before allocation', '- POPIA-aligned data handling with an audit trail']],
  ['Module 05', 'Cyber Security & Fraud', 'lock', ['System-to-system integration reduces the risk of your team being phished and customer data being shared with nefarious actors. The claim moves between platforms rather than through an inbox.', 'We can provide a risk assessment on your systems once the integration with Home Assist takes place, to give you a view of how big the quantum of risk is. This is normally included in our float pricing model, with live monitoring of malicious actors and the reduced risk once you start to work with Home Assist.', 'On the claim model this carries an additional cost. The assessment can still be done without any integration, and live monitoring attracts a monthly cost.', 'AI fraud indicators have been introduced to catch the fraudulent creation of documents, pictures and fake credentials.']],
  ['Module 06', 'Post-Claim Underwriting', 'trending-up', 'soon', ['Every claim is a property survey you have already paid for. We feed verified incident data back into underwriting — the true condition and age of the installation, whether the failure was sudden or long-neglected, and whether the property has claimed for this peril before. The next renewal is priced on what we found, not on what was declared.', 'Examples:', '- Cyber security risk of connected devices like IP cameras', '- Roof structures like thatch confirmed', '- Solar geysers & heat pumps', '- Corroded pipes', '- No surge protection']],
  ['Module 07', 'Incident Verification', 'shield-check', 'soon', 'Award-winning AI powered solution for brokers, insurers and homeowners who want to use their own people to handle a fix. We make sure they get what they pay for, that installations are safe and compliant, and that the person signing off the job is who they say they are.'],
  ['Module 08', 'Smart Home Devices', 'wifi', ['Since 2016 we have grown a connected-device platform working with smart geyser controllers and smart metering. Giving insurers a future property book that shifts from reactive to proactive.', 'Homeowner details captured at installation, so claims register in seconds.', 'Hardware faults reported before the failure, cutting wasted call-outs.', '- Smart geyser controllers', '- Smart metering']],
  ['Module 09', 'Perform+ SME Development', 'graduation-cap', 'Home Assist is a Level 1 B-BBEE contributor. We started in 2013 with a single vehicle servicing repairs daily, so we understand what it takes to grow a small business. Perform+ works with accredited supplier development partners to lift artisan skills across the country and directs your corporate spend to earn the B-BBEE recognition it is due.']
];

const PROOF_ARCHIVE = [
  ['Lodge', 'Multiple-unit commercial property, several geysers on one incident.'],
  ['Solar', 'Solar installation quoted for full replacement where the fault was in one component.'],
  ['Body corporate', 'Sectional-title claim with shared plumbing and a disputed scope.'],
  ['Thin file', 'Claim submitted with no photographs and an unlogged certificate.']
];

const SOON = 'soon';

function ModuleCard({ number, title, icon, lines, soon, open, onToggle }) {
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
        {soon ? <span style={{ ...LABEL, display: 'block', color: '#C62828', marginTop: 4 }}>Coming soon</span> : null}
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

/* The email gate that used to live here is gone.

   It was a client-side modal: it blurred the page with CSS, kept the content in
   the page source where anyone could read it with View Source, let Google index
   the lot, and captured the address nowhere. It looked like a gate without
   being one.

   Cloudflare Access (one-time PIN) then protected /insurers from 16 August to
   6 November 2026. It was removed so the page is public, indexable and can be
   linked straight from broker emails. Every CTA on this page books into
   Keshan's calendar (CH.bookingKeshan) and WhatsApps his mobile (CH.waKeshan). */

function InsurersPage() {
  return <InsurersBody />;
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
          <h1 style={{ ...DISPLAY, color: '#fff', maxWidth: '22ch', marginBottom: 18 }}>Hand us your property claims book. Then stop worrying about it.</h1>
          <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', fontSize: 17, maxWidth: '58ch', marginBottom: 26 }}>A turnkey service you hand over once. Home Assist runs the call centre, the providers, the verification and the compliance file, and sends you the report. Take the whole book, or take the modules you are missing.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button as="a" size="lg" variant="onDark" href={CH.bookingKeshan} target="_blank" rel="noopener">Ask about piloting options</Button>
            <Button as="a" size="lg" variant="ghost" href={wa('Hi Keshan, I am enquiring about Home Assist managing our property claims book. ', 'INSURER-1', CH.waKeshanDigits)} target="_blank" rel="noopener" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }} iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>WhatsApp us</Button>
          </div>
        </div>
        {/* Explainer video (V5, 39s, voice-over). Autoplays muted with captions so it
            reads without sound; controls let the visitor unmute. Plain HTML string so
            React 18 does not strip the muted/playsinline attributes on hydration. */}
        <div style={{ borderRadius: 4, overflow: 'hidden', lineHeight: 0, border: '1px solid rgba(255,255,255,.22)', background: '#000' }}
          dangerouslySetInnerHTML={{
            __html: '<video controls autoplay muted loop playsinline preload="metadata" crossorigin="anonymous" poster="/assets/illustrations/insurers-explainer-poster.jpg" aria-label="Home Assist explainer: from the first message to hot water" style="width:100%;height:auto;display:block"><source src="/assets/illustrations/insurers-explainer.mp4" type="video/mp4"><track kind="captions" src="/assets/illustrations/insurers-explainer.vtt" srclang="en" label="English" default></video>'
          }} />
      </div>
    </section>


    {/* Problem */}
    <Section eyebrow="Why hand it over" title="A property claims book is a full-time operation. It does not have to be yours."
      intro="Every claim needs someone answering the phone at two in the morning, a provider who actually arrives, a price somebody has benchmarked, a certificate that gets logged and a file an auditor will accept. Running that inside your own team costs people, time and attention you would rather spend writing business. Home Assist has run it for insurers and brokers since 2013.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        <LabelCard icon="headset" label="One hand-over" title="Give us the book. We run it.">First notification, allocation, the work on site, the paperwork and the follow-ups. Your team is not in the loop unless you want to be.</LabelCard>
        <LabelCard icon="shield-check" label="One file per claim" title="Closed, evidenced, compliant">Before and after photographs, a benchmarked quote, a verified invoice and a logged certificate on every claim, so nothing comes back to bite you.</LabelCard>
        <LabelCard icon="trending-down" label="One report" title="You see the numbers, not the noise">Cost per claim, provider performance and the loss ratio on your book, retrievable from the portal whenever you want them.</LabelCard>
      </div>
    </Section>

    {/* Turnkey banner — sitting straight above the nine modules */}
    <section style={{ background: 'var(--web-navy)' }}>
      <div style={{ ...WRAP, padding: '52px 40px', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Eyebrow onDark>The model</Eyebrow>
          <h2 style={{ ...H2, color: '#fff', margin: 0, maxWidth: '26ch' }}>Turnkey or modular management of your property claims book.</h2>
        </div>
        <div className="ha-pilot-flash" style={{ border: '1px solid rgba(255,255,255,.22)', borderRadius: 4, padding: 28 }}>
          <Eyebrow onDark>Piloting options</Eyebrow>
          <p style={{ ...BODY, color: '#fff', fontSize: 17, margin: 0 }}>Ask us about our piloting options.</p>
          <div style={{ height: 1, background: 'rgba(255,255,255,.22)', margin: '22px 0' }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div><div className="ha-pilot-number" style={{ font: '700 34px/1 var(--font-core)', color: '#fff' }}>3 months</div><div style={{ ...LABEL, color: 'var(--web-blue-300)', marginTop: 6 }}>Rebating of fees</div></div>
            <div><div className="ha-pilot-number" style={{ font: '700 34px/1 var(--font-core)', color: '#fff' }}>1 month</div><div style={{ ...LABEL, color: 'var(--web-blue-300)', marginTop: 6 }}>Free cash settlement processing</div></div>
          </div>
          <div style={{ marginTop: 22 }}>
            <Button as="a" size="lg" variant="onDark" href={CH.bookingKeshan} target="_blank" rel="noopener">Ask about piloting options</Button>
          </div>
        </div>
      </div>
    </section>

    {/* Modules */}
    <Section tint eyebrow="What we do" title="Nine modules. Take all of them, or take the gaps." intro="Click any module to open it.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, alignItems: 'start' }}>
        {MODULES.map(([m, t, ic, ...rest]) => {
          const soon = rest[0] === SOON;
          const d = soon ? rest[1] : rest[0];
          return <ModuleCard key={m} number={m} title={t} icon={ic} soon={soon} lines={Array.isArray(d) ? d : [d]} open={openModule === m} onToggle={() => toggleModule(m, t)} />;
        })}
      </div>
    </Section>

    {/* Book a meeting */}
    <Section eyebrow="Commercial detail" title="Get an offer from Home Assist">
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 20, alignItems: 'start' }}>
        {/* What the broker or insurer gets with Comprehensive membership */}
        <div style={{ display: 'grid', gap: 20 }}>
          <LabelCard icon="sun" label="For your clients" title="Sell a difference, not a discount">Solar PV and smart-home cover for your premium book — something your high-end clients can feel.</LabelCard>
          <LabelCard icon="headset" label="For your cost centre" title="We take the calls. You take the report.">A 24/7 call centre and every warranty follow-up handled end to end — zero admin in your cost centre.</LabelCard>
          <LabelCard icon="trending-down" label="For your loss ratio" title="50 years of claims knowledge on your loss ratio">Loss-ratio tracking and cost management from domain experts — time back to grow your book, not fight fires.</LabelCard>
        </div>
        <div style={{ ...CARD, padding: 32 }}>
          <p style={{ ...BODY, maxWidth: '62ch', marginBottom: 20 }}>Meet with us online or in person to discuss how we can help you get control of your property book</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button as="a" size="lg" variant="navy" href={CH.bookingKeshan} target="_blank" rel="noopener" iconLeft={<Icon name="calendar" size={18} color="#fff" />}>Explore an offer</Button>
            <Button as="a" size="lg" variant="ghost" href={wa('Hi Keshan, we would like to explore an offer for our property book. ', 'INSURER-2', CH.waKeshanDigits)} target="_blank" rel="noopener">WhatsApp us</Button>
          </div>
          <p style={{ ...SMALL, marginTop: 16 }}>Pick a slot that suits you. Thirty minutes, no pack to read first.</p>
        </div>
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

    {/* Cluster-home banner, sitting straight above the closing call to action */}
    <section style={{ background: '#fff', lineHeight: 0 }}>
      <img src="/assets/illustrations/cluster-home-banner.jpg" alt="An estate of homes with rooftop solar geysers alongside two apartment blocks on the same road, served by a single Home Assist vehicle" style={{ width: '100%', height: 'auto', display: 'block' }} />
    </section>

    <NavyBand eyebrow="Next step" title="Send us a sample of settled claims. We will verify them and show you what we find.">
      <Button as="a" size="lg" variant="onDark" href={CH.bookingKeshan} target="_blank" rel="noopener">Book a sample review</Button>
      <Button as="a" size="lg" variant="ghost" href={wa('Hi Keshan, we would like to discuss a sample claim review. ', 'INSURER-3', CH.waKeshanDigits)} target="_blank" rel="noopener" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}>WhatsApp us</Button>
    </NavyBand>
  </main>;
}

Object.assign(window, { InsurersPage });
