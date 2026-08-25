const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

function AboutPage() {
  const [sent, setSent] = React.useState(false);
  const [waLink, setWaLink] = React.useState('');
  return <main>
    <section style={{ borderBottom: '1px solid var(--web-grey-100)' }}>
      <div style={{ ...WRAP, padding: '56px 40px 48px' }}>
        <Eyebrow>About</Eyebrow>
        <h1 style={{ ...DISPLAY, marginBottom: 14 }}>About Home Assist.</h1>
        <p style={{ ...BODY, fontSize: 17, maxWidth: '54ch', margin: 0 }}>We manage home incidents from the first phone call to the finished job.</p>
      </div>
    </section>

    <Section eyebrow="Who we are" title="A home-assistance and incident-management business">
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 48, alignItems: 'start' }}>
        <div>
          <p style={{ ...BODY, fontSize: 17 }}>Home Assist Technologies is a South African home-assistance and incident-management business based in Pinelands, Cape Town.</p>
          <p style={{ ...BODY, fontSize: 17 }}>We manage property incidents — plumbing, geysers, electrical and the building damage that follows them — for homeowners, and we manage property claims books for short-term insurers, UMAs, binder holders and brokers.</p>
          <p style={{ ...BODY, fontSize: 17 }}>The operating principle is short: the work must be verified, the certificate must be logged, and the person who did the work must be paid quickly.</p>
          <p style={{ ...BODY, fontSize: 17, margin: 0 }}>The business is moving from a claim-based model to a service-based model, with the loss ratio as the measure.</p>
        </div>
        <div style={{ background: 'var(--teal-400)', borderRadius: 4, overflow: 'hidden' }}>
          <img src="../../assets/illustrations/contractor.jpg" alt="A Home Assist artisan on site" style={{ width: '100%', display: 'block' }} />
        </div>
      </div>
    </Section>

    <Section tint eyebrow="What we stand for" title="Three things we do not compromise on">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, alignItems: 'stretch' }}>
        <LabelCard icon="shield-check" label="Verification">We check the work, not just the invoice.</LabelCard>
        <LabelCard icon="clock" label="Speed of payment">Providers are settled as soon as our principals pay Home Assist, so it is in our own interest to negotiate the fastest terms we can get.</LabelCard>
        <LabelCard icon="folder-open" label="Evidence">Every job carries a retrievable file.</LabelCard>
        <div style={{ border: '1px solid var(--web-grey-100)', borderRadius: 4, overflow: 'hidden', lineHeight: 0, boxShadow: 'var(--web-shadow-card)', alignSelf: 'start' }}>
          <img src="/assets/illustrations/mural-scene-14-plans.jpg" alt="A Home Assist technician and a site manager reviewing building plans in front of a structure under construction" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </Section>

    <Section eyebrow="Leadership" title="Who runs it">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        <div style={CARD}>
          <div style={{ font: '700 21px/1.2 var(--font-core)', color: 'var(--web-navy)' }}>Keshan Patel</div>
          <div style={{ ...SMALL, marginTop: 6 }}>Founder and Chief Executive</div>
          <p style={{ ...BODY, margin: '12px 0 0' }}>The platform is designed system-first, to embed efficiency for every stakeholder. Lower running costs for a service provider means a more sustainable business, and that means Home Assist keeps long-term partners to grow with.</p>
          <p style={{ ...BODY, margin: '12px 0 16px' }}>If you think somebody here could be working better, email me directly.</p>
          <Button as="a" variant="secondary" href={mailtoLink(CH.biz, 'Better business')}>Email Keshan</Button>
        </div>
        {[
          ['Leonie Moses', 'Customer Success Team Leader', CH.leonie, 'Website inquiry for Service',
            'If you did not get the service you needed and your job is live, reach out to Leonie.'],
          ['Vimla Govender', 'Technical Support and Provider Onboarding', CH.vimla, 'Website inquiry for Support',
            'For anything technical, or for help onboarding as a new service provider, reach out to Vimla.']
        ].map(([name, role, email, subject, note]) => <div key={name} style={CARD}>
          <div style={{ font: '700 21px/1.2 var(--font-core)', color: 'var(--web-navy)' }}>{name}</div>
          <div style={{ ...SMALL, marginTop: 6 }}>{role}</div>
          <p style={{ ...BODY, margin: '12px 0 16px' }}>{note}</p>
          <Button as="a" variant="secondary" href={mailtoLink(email, subject)}>Email {name.split(' ')[0]}</Button>
        </div>)}
      </div>
    </Section>

    <Section tint eyebrow="Contact" title="How to reach us"
      intro="WhatsApp is the fastest route for anything urgent. The hotline and help desk are attended during business hours and on call after hours.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginBottom: 20 }}>
        <ChannelCard label="WhatsApp" value={CH.waHome} note="The fastest way to reach us. Available 24/7."
          action={<Button as="a" variant="navy" href={wa('Hi Home Assist, ')} target="_blank" rel="noopener" iconLeft={<Icon name="message-circle" size={17} color="#fff" />}>Message us</Button>} />
        <ChannelCard label="Phone" value={CH.phone} note="Speak to a consultant."
          action={<Button as="a" variant="secondary" href={'tel:' + CH.phoneTel} iconLeft={<Icon name="phone" size={17} color="var(--web-navy)" />}>Call now</Button>} />
        <ChannelCard label="Help desk" value={CH.help} note="Customer success and follow-ups on existing jobs."
          action={<Button as="a" variant="secondary" href={'mailto:' + CH.help}>Email the help desk</Button>} />
        <ChannelCard label="Complaints" value={CH.complaints} note="A formal complaint about a job, a technician or how a case was handled."
          action={<Button as="a" variant="secondary" href={mailtoLink(CH.complaints, 'Complaint')}>Log a complaint</Button>} />
      </div>
      <div style={{ ...CARD, background: '#fff', display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 320px' }}>
          <div style={{ ...LABEL, marginBottom: 8 }}>Insurers and brokers</div>
          <p style={{ ...BODY, margin: 0 }}>{CH.biz} · {CH.waBiz}</p>
        </div>
        <Button as="a" variant="navy" href={CH.booking} target="_blank" rel="noopener">Book a sample review</Button>
      </div>
    </Section>

    <Section eyebrow="Message us" title={sent ? 'Message sent' : 'Send us a message'}>
      {sent
        ? <div style={{ ...CARD, borderLeft: '3px solid var(--web-blue)', maxWidth: 760 }}>
          <div style={{ ...LABEL, marginBottom: 8 }}>One step left</div>
          <p style={{ ...BODY, margin: '0 0 16px' }}>WhatsApp has opened with your message filled in. Send it and we will come back to you. If it did not open, use the button below.</p>
          <Button as="a" variant="navy" href={waLink || wa('Hi Home Assist, ')} target="_blank" rel="noopener">Open WhatsApp with my message</Button>
        </div>
        : <form onSubmit={e => { e.preventDefault(); setWaLink(whatsappHandoff(e.currentTarget, { intro: 'New message from the Home Assist website.' })); setSent(true); }} style={{ ...CARD, padding: 32, maxWidth: 760 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
            <FieldRow label="Name"><input style={INPUT} required /></FieldRow>
            <FieldRow label="Email"><input style={INPUT} type="email" required /></FieldRow>
            <FieldRow label="Mobile"><input style={INPUT} type="tel" /></FieldRow>
            <FieldRow label="I am a"><select style={INPUT} defaultValue="" required>
              <option value="" disabled>Select one</option>
              {['Homeowner', 'Insurer or broker', 'Service provider', 'Other'].map(o => <option key={o}>{o}</option>)}
            </select></FieldRow>
          </div>
          <div style={{ marginBottom: 20 }}><FieldRow label="Message"><textarea style={{ ...INPUT, minHeight: 110, resize: 'vertical' }} required /></FieldRow></div>
          <label style={{ ...BODY, display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 22 }}>
            <input type="checkbox" required style={{ marginTop: 3 }} />
            <span>I agree that Home Assist may contact me about this message.</span>
          </label>
          <Button size="lg" variant="navy" iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>Send on WhatsApp</Button>
        </form>}
    </Section>

    <Section tint eyebrow="Where we are" title="Pinelands, Cape Town">
      <div style={{ display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 32, alignItems: 'stretch' }}>
        <div style={{ ...CARD, display: 'grid', gap: 20, alignContent: 'start' }}>
          {[['Address', CH.address], ['Phone', CH.phone], ['Email', CH.help]].map(([l, v]) =>
            <div key={l}><div style={LABEL}>{l}</div><p style={{ ...BODY, margin: '5px 0 0' }}>{v}</p></div>)}
        </div>
        <div style={{ border: '1px solid var(--web-grey-100)', borderRadius: 4, overflow: 'hidden', minHeight: 260 }}>
          <iframe
            title="Home Assist Technologies — 12 Uitvlugt Road, Pinelands, Cape Town"
            src="https://www.google.com/maps?q=12+Uitvlugt+Road,+Pinelands,+Cape+Town,+7405&output=embed"
            style={{ border: 0, width: '100%', height: '100%', minHeight: 260, display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Section>
  </main>;
}

Object.assign(window, { AboutPage });
