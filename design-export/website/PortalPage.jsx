const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

function PortalPage({ go }) {
  return <main>
    <section style={{ background: 'var(--web-navy)' }}>
      <div style={{ ...WRAP, padding: '88px 40px 72px', display: 'grid', gridTemplateColumns: '1fr .82fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Eyebrow onDark>Home Assist portal</Eyebrow>
          <h1 style={{ ...DISPLAY, color: '#fff', maxWidth: '20ch', marginBottom: 18 }}>Every claim, every job, every certificate — in one place.</h1>
          <p style={{ ...BODY, color: 'var(--web-grey-100)', fontSize: 17, maxWidth: '58ch', marginBottom: 28 }}>The Home Assist portal is where clients track claims and where service providers manage jobs, submit evidence and get paid.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button as="a" size="lg" variant="onDark" href={CH.portal} target="_blank" rel="noopener">Sign in to the portal</Button>
            <Button as="a" size="lg" variant="ghost" href={CH.register} target="_blank" rel="noopener" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.55)' }}>Register as a provider</Button>
          </div>
        </div>
        <PortalMock />
      </div>
    </section>

    <Section eyebrow="Two doors" title="Sign in as a client or as a service provider">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div style={{ ...CARD, padding: 32 }}>
          <div style={{ ...LABEL, marginBottom: 12 }}>For clients</div>
          <h3 style={{ ...H2, fontSize: 21 }}>Insurers, UMAs, binder holders and brokers</h3>
          <p style={BODY}>Register and track claims, see the status of every incident, retrieve the evidence pack for any job, and download your float and loss-ratio reports.</p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20, flexWrap: 'wrap' }}>
            <Button as="a" variant="navy" href={CH.portal} target="_blank" rel="noopener">Sign in</Button>
            <a href="#/insurers" onClick={e => { e.preventDefault(); go('insurers'); }} style={{ font: '600 15px/1 var(--font-core)' }}>New client? See what we do →</a>
          </div>
        </div>
        <div style={{ ...CARD, padding: 32 }}>
          <div style={{ ...LABEL, marginBottom: 12 }}>For service providers</div>
          <h3 style={{ ...H2, fontSize: 21 }}>Plumbers, electricians and contractors</h3>
          <p style={BODY}>Accept jobs, load quotes, upload before and after photographs and certificates, submit invoices and track payment.</p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20, flexWrap: 'wrap' }}>
            <Button as="a" variant="navy" href={CH.portal} target="_blank" rel="noopener">Sign in</Button>
            <a href="#/join" onClick={e => { e.preventDefault(); go('join'); }} style={{ font: '600 15px/1 var(--font-core)' }}>Not registered yet? →</a>
          </div>
        </div>
      </div>
    </Section>

    <Section tint eyebrow="Capability" title="What you can do in the portal">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {[['clipboard-check', 'Register a claim'], ['activity', 'Track incident status'], ['camera', 'Upload evidence'], ['file-check', 'Issue and store certificates'], ['receipt', 'Submit and track invoices'], ['bar-chart-3', 'Download reports']].map(([icon, t]) =>
          <div key={t} style={{ ...CARD, display: 'flex', gap: 14, alignItems: 'center', padding: 20 }}>
            <Icon name={icon} size={20} color="var(--web-blue)" />
            <span style={{ font: '600 17px/1.3 var(--font-core)', color: 'var(--web-navy)' }}>{t}</span>
          </div>)}
      </div>
    </Section>

    <div style={{ borderTop: '1px solid var(--web-grey-100)', borderBottom: '1px solid var(--web-grey-100)' }}>
      <div style={{ ...WRAP, padding: '26px 40px', display: 'flex', gap: 14, alignItems: 'center' }}>
        <Icon name="shield-check" size={20} color="var(--web-blue)" />
        <p style={{ ...BODY, margin: 0 }}>Every job in the portal carries its full evidence pack — before photographs, quote, invoice, certificate of compliance and after photographs — retrievable at any time.</p>
      </div>
    </div>

    <div style={{ background: 'var(--web-grey-050)' }}>
      <div style={{ ...WRAP, padding: '28px 40px', display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={LABEL}>Need help signing in?</div>
        <a href={wa('Hi Home Assist, I need help signing in to the portal. ')} target="_blank" rel="noopener" style={{ font: '600 15px/1 var(--font-core)' }}>WhatsApp {CH.waHome}</a>
        <a href={'mailto:' + CH.help} style={{ font: '600 15px/1 var(--font-core)' }}>{CH.help}</a>
      </div>
    </div>
  </main>;
}

/* Abstract two-blue portal mockup — no laptop photography. */
function PortalMock() {
  return <div style={{ borderRadius: 4, overflow: 'hidden', background: '#fff' }}>
    <img src="../../assets/illustrations/technician-phone-illustration.jpg" alt="Home Assist technician checking a job on his phone" style={{ display: 'block', width: '100%', height: 'auto' }} />
  </div>;
}

Object.assign(window, { PortalPage });
