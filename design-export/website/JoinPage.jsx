const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

const TRADES = [
  ['Plumbers', 'droplets', ['PIRB or IOPSA registration in good standing', 'Able to issue and log a certificate of compliance to SANS 10254', 'Geyser replacement capability — electric, solar and heat pump', 'Leak detection capability is an advantage', 'Own vehicle and tools', 'Public liability cover']],
  ['Electricians', 'zap', ['Registered person status with a valid wireman’s licence', 'Registered with the Department of Employment and Labour', 'Able to issue a certificate of compliance to SANS 10142-1', 'DB board, fault finding and rewiring capability', 'Own vehicle and tools', 'Public liability cover']],
  ['Building contractors', 'hard-hat', ['Registered company with a verifiable track record', 'NHBRC registration where the work requires it', 'Ceiling replacement, waterproofing and making-good capability after water damage', 'Ability to quote to a standard scope', 'Public liability cover']]
];

const JOIN_FAQ = [
  ['Do I have to be exclusive to Home Assist?', 'No. You do not have to be an exclusive supplier to receive work from us.'],
  ['How do I get paid?', 'You submit the evidence pack and your invoice through the portal. A valid invoice is settled on agreed terms, with an early-settlement discount available.'],
  ['What areas are you recruiting in?', 'Nationwide, with the highest volume in Cape Town, Johannesburg, Pretoria, Durban and Gqeberha. The confirmed area list is being finalised.'],
  ['What if I do not have PIRB registration yet?', 'You can register on the portal, but plumbing work is only allocated to providers who can issue and log a certificate of compliance.'],
  ['Do you charge a joining fee?', 'Registration terms are set out on the portal at sign-up.']
];

function JoinPage() {
  return <main>
    <section style={{ borderBottom: '1px solid var(--web-grey-100)' }}>
      <div style={{ ...WRAP, padding: '64px 40px', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Eyebrow>For plumbers, electricians and contractors</Eyebrow>
          {/* The gap between "Grow" and "your" is a literal non-breaking space (U+00A0),
              not a normal one. It binds those two words so the headline breaks between
              the two sentences instead of orphaning "Grow" at the end of line one.
              It is invisible in an editor — if the break ever goes wrong, that is why. */}
          <h1 style={{ ...DISPLAY, maxWidth: '18ch', marginBottom: 18 }}>{'Do good work. Grow your business.'}</h1>
          <p style={{ ...BODY, fontSize: 17, maxWidth: '58ch', marginBottom: 26 }}>Home Assist is building a national network of verified plumbers, electricians and building contractors. Register on our portal and start receiving work in your area.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button as="a" size="lg" variant="navy" href={CH.register} target="_blank" rel="noopener" iconRight={<Icon name="arrow-right" size={17} color="#fff" />}>Register on the portal</Button>
            <Button as="a" size="lg" variant="secondary" href="#standard">What we look for</Button>
          </div>
        </div>
        <div style={{ background: 'var(--green-500)', borderRadius: 4, display: 'grid', placeItems: 'center', minHeight: 320, overflow: 'hidden' }}>
          <img src="../../assets/illustrations/technician-phone.jpg" alt="A technician updating a job on the Home Assist app" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </section>

    <Section eyebrow="Why join" title="Four reasons providers stay on the network">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>Clear payment</div>
          <p style={{ ...BODY, margin: 0 }}>Take the free training to run the job app or the Case Tabs System to process the whole claim digitally , no paperwork needed.</p>
        </div>
        <LabelCard label="Work in your area">Jobs matched to your trade, your capacity and your service area.</LabelCard>
        <LabelCard label="No panel politics">You do not have to be an exclusive supplier to receive work.</LabelCard>
        <LabelCard label="One clear standard">You know before you start what is required and what will be checked.</LabelCard>
      </div>
    </Section>

    <Section id="standard" tint eyebrow="What we look for" title="Requirements by trade">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {TRADES.map(([t, icon, reqs]) => <div key={t} style={CARD}>
          <Icon name={icon} size={20} color="var(--web-blue)" style={{ marginBottom: 12 }} />
          <div style={{ ...LABEL, marginBottom: 12 }}>{t}</div>
          <ul style={{ ...BODY, margin: 0, paddingLeft: 18, display: 'grid', gap: 6 }}>{reqs.map(r => <li key={r}>{r}</li>)}</ul>
        </div>)}
      </div>
    </Section>

    <Section eyebrow="Every provider" title="What every provider needs">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px 32px', maxWidth: 1000 }}>
        {['A CIPC-registered entity with contected Director Identifcation document', 'A bank account in the company name', 'Valid tax status', 'Public & Workmanship liability cover', 'A smartphone — every job is evidenced on WhatsApp with before and after photographs', 'Signature of the Home Assist quality standard of doing things and Service Level'].map(r =>
          <div key={r} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 0', borderTop: '1px solid var(--web-grey-100)' }}>
            <Icon name="check" size={17} color="var(--web-blue)" style={{ marginTop: 3 }} />
            <span style={{ ...BODY, margin: 0 }}>{r}</span>
          </div>)}
      </div>
    </Section>

    <Section tint eyebrow="How our jobs work" title="Four steps, every job, no exceptions">
      <Steps items={[
        ['01', 'We send you the job', 'Matched to your trade and your area, with the scope and the address.'],
        ['02', 'You quote to a standard scope', 'The scope is the same for everyone, so the quote is easily captured on our system and comparable. You don\'t need other systems to get paid by Home Assist'],
        ['03', 'You submit the evidence', 'Before photographs, invoice, certificate of compliance, after photographs.'],
        ['04', 'You are paid', 'On a valid invoice against a complete evidence pack.']
      ]} />
      <img src="../../assets/illustrations/techman-phone-home.png" alt="A Home Assist technician opening a job on the app outside a home" style={{ display: 'block', width: '100%', maxWidth: 620, height: 'auto', margin: '28px auto 0' }} />
    </Section>

    <Section narrow eyebrow="Verification" title="What we check">
      <div style={{ borderLeft: '3px solid var(--web-blue)', paddingLeft: 24 }}>
        <p style={{ ...BODY, fontSize: 17 }}>Every job is verified. We confirm that the entity is registered and carries liability cover, that the technician is licensed and genuinely linked to the working company, that the certificate of compliance was written <strong>and logged</strong>, that what was installed matches what was invoiced, and that the price sits within benchmark.</p>
        <p style={{ ...BODY, margin: 0, fontSize: 17 }}>Providers who meet the standard get more work.</p>
      </div>
    </Section>

    <NavyBand eyebrow="Register" title="Register on the portal and start receiving work in your area.">
      <Button as="a" size="lg" variant="onDark" href={CH.register} target="_blank" rel="noopener">Register on the portal</Button>
      <div style={{ ...SMALL, color: 'rgba(255,255,255,.75)', alignSelf: 'center', maxWidth: '34ch' }}>Questions before you register? WhatsApp {CH.waHome} or email support@homeassist.co.za.</div>
    </NavyBand>

    <Section tint narrow eyebrow="Questions" title="Provider questions">
      <Accordion items={JOIN_FAQ} />
    </Section>
  </main>;
}

Object.assign(window, { JoinPage });
