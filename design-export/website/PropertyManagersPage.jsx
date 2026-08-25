const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

/* PAGE A of the property-management pair, against ManagingAgentsPage.jsx.
   Both sell the same thing and end on the same call to action — a free pilot on
   one block — but they are deliberately NOT the same page.

   This one is built around the INSURER proposition. The insurer section leads,
   immediately under the hero, and the layout runs text-left / image-right.
   Page B is built around PORTFOLIO ECONOMICS and mirrors the layout.

   NOTE ON THE TEST: this is a proposition test, not a controlled A/B. Layout,
   section order and imagery all differ, so a win tells you which proposition
   pulled — not which single element did. The call to action is held identical on
   purpose, so the conversion event stays comparable.

   NOTE ON LENGTH: the detail in the problem, how-it-works, upside and oversight
   sections sits inside click-to-open cards. The page reads as a scannable list
   of claims, and only the reader who wants the argument pays for it in scroll.
   Same expander pattern as the module cards on /insurers, so it is already
   familiar to anyone who has seen that page. */

const PM_PROBLEMS = [
  ['clock', 'Speed', 'Quotes take longer than the water does',
    'The trustees have to get quotes before the broker will authorise anything. While that happens, a leak on the top floor is running through the units below it. The pressure to approve something — anything — is enormous, and that pressure is what sets the price.'],
  ['lock', 'Lock-in', 'One provider knows the block, so one provider prices it',
    'He has the access details. He is on the compliance file. The trustees know his name. Bringing somebody new in is paperwork nobody has time for during a leak, so nothing ever tests the price, and over years it drifts.'],
  ['users', 'The chain', 'Six parties, and nobody holding the evidence',
    'Tenant, owner, trustees, managing agent, broker, insurer. The path of least resistance is a cash settlement against the nearest plumber’s quote. The owner then pays for work he has no way to check, and finds out what he actually got when he claims on the warranty.']
];

const PM_VERIFY = [
  ['users', 'Any provider', 'No panel to move to',
    'The provider the block already uses can stay. We do not ask a scheme to change contractors as the price of oversight — we verify whoever does the work, including the plumber the trustees have used for ten years.'],
  ['receipt', 'Benchmarked', 'Priced against a pro-forma, not a memory',
    'Every quote and invoice is costed against a Home Assist pro-forma for that job in that province. Compliance extras are checked as correct rather than accepted as stated.'],
  ['camera', 'Evidenced', 'Photographs, invoice, logged certificate',
    'Serial and warranty decoded on the unit that was installed. Technician and PIRB registration confirmed. The certificate logged, not just written. Before and after photographs on file. Complete before the money moves.'],
  ['shield-check', 'Fraud indicators', 'Fabricated documents caught early',
    'AI checks run against documents, photographs and credentials. Cost drift and document fraud surface while the claim is open, instead of two years later when a warranty is declined.']
];

const PM_CONNECTED = [
  ['zap', 'Electricity', 'Staggered heating on one network',
    'Smart geyser controllers across a block can be put on one mesh network and the heating staggered. Where the block bills through a single meter that lowers the average cost and keeps the scheme out of a higher tariff band — with fewer no-hot-water complaints, not more.'],
  ['droplets', 'Early loss notification', 'The leak reports itself',
    'Smart water meters flag a leak before it becomes damage. A block is one site, so installation labour is low, maintenance is low, and the notification reaches us fast enough that the repair happens instead of the claim.'],
  ['gauge', 'Utility recovery', 'Prove the consumption, recover the cost',
    'Without smart metering, billing cycles slip and the scheme cannot prove what it used. Proving consumption is a council requirement. Digital data held for years lets the body corporate query a shortfall, dispute a charge, and claim back water lost to a leak.'],
  ['banknote', 'Aggregated spend', 'One collection point, savings you can target',
    'Collecting through the body corporate turns scattered household costs into one number that can be worked on over time — including a move to PV where the roof and the tariff justify it.']
];

const PM_OVERSIGHT = [
  ['eye', 'Approvals', 'Who approved what, and when',
    'Every authorisation on the block with the name against it and the date it happened. Not a memory of a meeting.'],
  ['trending-up', 'Benchmarks', 'What a block costs on average',
    'Cost per incident and per provider, for insurance claims and for maintenance, so an outlier looks like an outlier.'],
  ['clipboard-check', 'The file', 'Every claim with its evidence attached',
    'Photographs, pro-forma comparison, certificate and warranty status on the claim they belong to, retrievable years later.']
];

const PM_PILOT = [
  ['01', 'One block', 'Pick a single scheme. Small enough that you do not need a special resolution to try it.'],
  ['02', '90 days', 'Long enough to catch a real incident cycle, short enough to walk away from.'],
  ['03', 'Every incident verified', 'At our cost, on the providers the block already uses. Nothing operational changes.'],
  ['04', 'A report to the trustees', 'What was spent, what it should have cost, what the evidence showed.']
];

/* Click-to-open card. Deliberately the same shape as the module cards on
   /insurers: icon, label, title, chevron; the argument appears underneath only
   when the reader asks for it. One open at a time per section. */
function PmExpander({ items, columns }) {
  const [open, setOpen] = React.useState(null);
  return <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns},1fr)`, gap: 20, alignItems: 'start' }}>
    {items.map(([icon, label, title, body]) => {
      const isOpen = open === label;
      const id = 'pm-' + label.toLowerCase().replace(/\s+/g, '-');
      return <div key={label} style={{ ...CARD, padding: 0, overflow: 'hidden', borderColor: isOpen ? 'var(--web-blue-100)' : 'var(--web-grey-100)' }}>
        <button type="button" onClick={() => setOpen(isOpen ? null : label)} aria-expanded={isOpen} aria-controls={id}
          style={{ width: '100%', display: 'grid', gridTemplateColumns: '40px 1fr 24px', gap: 14, alignItems: 'center', textAlign: 'left', background: isOpen ? 'var(--web-blue-050)' : '#fff', border: 0, borderBottom: isOpen ? '1px solid var(--web-blue-100)' : 0, padding: 18, cursor: 'pointer', font: 'inherit', minHeight: 'var(--web-tap-min)' }}>
          <span style={{ width: 40, height: 40, borderRadius: 3, background: isOpen ? 'var(--web-navy)' : 'var(--web-blue-050)', border: '1px solid ' + (isOpen ? 'var(--web-navy)' : 'var(--web-blue-100)'), display: 'grid', placeItems: 'center' }}>
            <Icon name={icon} size={19} color={isOpen ? '#fff' : 'var(--web-blue)'} />
          </span>
          <span>
            <span style={{ ...LABEL, display: 'block', color: 'var(--web-grey-500)', marginBottom: 4 }}>{label}</span>
            <span style={{ ...H3, display: 'block', margin: 0 }}>{title}</span>
          </span>
          <span style={{ display: 'grid', placeItems: 'center', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 180ms cubic-bezier(.2,0,.2,1)' }}>
            <Icon name="chevron-down" size={20} color="var(--web-navy)" />
          </span>
        </button>
        {isOpen ? <div id={id} style={{ padding: 18 }}><p style={{ ...BODY, margin: 0 }}>{body}</p></div> : null}
      </div>;
    })}
  </div>;
}

function PmChain() {
  const links = ['Tenant', 'Owner', 'Trustees', 'Managing agent', 'Broker', 'Insurer'];
  return <div style={{ display: 'grid', gridTemplateColumns: `repeat(${links.length},1fr)`, gap: 10, marginTop: 24 }}>
    {links.map((l, i) => <div key={l} style={{ borderTop: '2px solid var(--web-navy)', paddingTop: 12 }}>
      <div style={{ ...LABEL, color: 'var(--web-grey-500)' }}>{String(i + 1).padStart(2, '0')}</div>
      <div style={{ font: '600 15px/1.3 var(--font-core)', color: 'var(--web-navy)', marginTop: 6 }}>{l}</div>
    </div>)}
  </div>;
}

function PropertyManagersPage() {
  return <main>
    {/* Hero — text left, the block itself on the right */}
    <section style={{ background: 'var(--web-navy)' }}>
      <div style={{ ...WRAP, padding: '68px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div data-hero-text>
          <Eyebrow onDark>For managing agents, body corporates and home owners associations</Eyebrow>
          <h1 style={{ ...DISPLAY, color: '#fff', maxWidth: '24ch', marginBottom: 18 }}>Independent oversight of every rand spent on the block.</h1>
          <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', fontSize: 17, maxWidth: '54ch', marginBottom: 26 }}>Home Assist verifies every incident, every invoice and every certificate on the schemes you manage — without replacing the providers they already use. Insurer-backed, because a verified claim prices better than an unverified one.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button as="a" size="lg" variant="onDark" href={CH.booking} target="_blank" rel="noopener">Book Free Pilot</Button>
            <Button as="a" size="lg" variant="ghost" href={wa('Hi Home Assist, I manage property and would like to discuss the free pilot on one block. ', true)} target="_blank" rel="noopener" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }} iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>WhatsApp us</Button>
          </div>
        </div>
        <div style={{ border: '1px solid rgba(255,255,255,.22)', borderRadius: 4, overflow: 'hidden', lineHeight: 0 }}>
          <img src="/assets/illustrations/cityblock-wide.jpg" alt="A managed apartment block with rooftop solar geysers, a Home Assist van at an electric charging point and a technician arriving with a toolbox" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </section>

    {/* The offer, lifted out of the hero into its own strip */}
    <div style={{ background: 'var(--web-grey-050)', borderBottom: '1px solid var(--web-grey-100)' }}>
      <div style={{ ...WRAP, padding: '26px 40px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 28, alignItems: 'center' }}>
        <div>
          <div style={{ ...LABEL, marginBottom: 8 }}>The offer in one line</div>
          <p style={{ ...BODY, fontSize: 17, margin: 0, maxWidth: '46ch' }}>Give us one block for ninety days. We verify every incident on it at our cost and show the trustees what we found.</p>
        </div>
        <div><div style={{ font: '700 32px/1 var(--font-core)', color: 'var(--web-navy)' }}>1 block</div><div style={{ ...LABEL, color: 'var(--web-grey-500)', marginTop: 6 }}>Free pilot</div></div>
        <div><div style={{ font: '700 32px/1 var(--font-core)', color: 'var(--web-navy)' }}>90 days</div><div style={{ ...LABEL, color: 'var(--web-grey-500)', marginTop: 6 }}>No change to your providers</div></div>
      </div>
    </div>

    {/* Audience strip */}
    <div style={{ background: '#fff', borderBottom: '1px solid var(--web-grey-100)' }}>
      <div style={{ ...WRAP, padding: '22px 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
        {[['Managing agents', 'One route across every scheme'], ['Body corporates', 'Common property, evidenced'], ['HOAs', 'Approvals and standards held'], ['Trustees', 'Proof to put in front of owners']].map(([l, v]) =>
          <div key={l}><div style={LABEL}>{l}</div><div style={{ ...SMALL, marginTop: 6 }}>{v}</div></div>)}
      </div>
    </div>

    {/* PAGE A LEADS HERE — the insurer proposition */}
    <Section tint eyebrow="Why now" title="Your insurer already wants this."
      intro="The scheme's building cover is priced on how the book behaves. Unverified claims, cash settlements above benchmark and certificates that were never logged all price into the renewal — and the scheme pays for that whether or not anybody in it saw it happen.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        <LabelCard icon="trending-up" label="Insurer-backed" title="Oversight the insurer already accepts">A verified, evidenced file settles cleaner and prices better than an unverified one. Better pricing is available to schemes that accept the oversight.</LabelCard>
        <LabelCard icon="clipboard-check" label="Less administration" title="The claim arrives already evidenced">Your team stops assembling files. The photographs, the pro-forma comparison, the certificate and the warranty status arrive attached to the claim.</LabelCard>
        <LabelCard icon="lock" label="Named under NDA" title="We will show you the arrangement, not publish it">Which insurer, and the terms behind the pricing, come out under a mutual non-disclosure agreement. That belongs in a meeting, not on a web page.</LabelCard>
      </div>
    </Section>

    {/* Problem — click to open */}
    <Section eyebrow="The problem" title="The money leaves before anybody can check it."
      intro="A geyser bursts on the top floor. By the time three quotes have come back and the broker has authorised, the water has been through the units below. Click any of the three to see how it plays out.">
      <PmExpander items={PM_PROBLEMS} columns={3} />
      <PmChain />
    </Section>

    {/* How it works — click to open */}
    <Section tint eyebrow="How it works" title="Keep the plumber you trust. We verify the work."
      intro="The objection we hear first is that a managing agent does not want a panel of strangers on a building they have spent years getting right. Fair. That is not the deal.">
      <PmExpander items={PM_VERIFY} columns={2} />
    </Section>

    {/* One site — image alongside, click to open */}
    <Section eyebrow="The upside nobody uses" title="A block is one site. That is an advantage a freestanding house never has."
      intro="One roof, one meter room, one access point, one collection mechanism. That makes things possible in a scheme that are uneconomic anywhere else.">
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 28, alignItems: 'start' }}>
        <div style={{ border: '1px solid var(--web-grey-100)', borderRadius: 4, overflow: 'hidden', lineHeight: 0, boxShadow: 'var(--web-shadow-card)' }}>
          <img src="/assets/illustrations/estate-square.jpg" alt="An estate of matching homes on a hillside, each with a rooftop solar geyser and water tank, served by one Home Assist vehicle at a charging point" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        <PmExpander items={PM_CONNECTED} columns={2} />
      </div>
    </Section>

    {/* Oversight — now carries the "nobody has to be dishonest" argument as its
        reason for existing, which removes a whole section from the page. */}
    <Section tint eyebrow="Oversight" title="What the trustees can actually see">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 28, alignItems: 'start' }}>
        <div>
          <div style={{ ...CARD, borderLeft: '3px solid var(--web-blue)', marginBottom: 20 }}>
            <div style={{ ...LABEL, marginBottom: 10 }}>Why it is nobody's fault and still costs money</div>
            <h3 style={H3}>Nobody has to be dishonest for this to cost you money.</h3>
            <p style={BODY}>Compliance in a block genuinely is harder than in a freestanding house. Space is tight, a replacement unit is larger than the one it replaces, safety requirements have tightened, and anything in communal space needs approval. So every line on a high invoice has a defensible reason behind it — and a real reason is also perfect cover.</p>
            <p style={{ ...BODY, margin: 0 }}>Over years one provider becomes the only one who knows the building. Relationships form. Approvals get quicker and quieter. Usually that is all it is. Sometimes it is not, and the trustees who signed it off have no way to prove which — to the owners or to themselves. That is what the record below is for.</p>
          </div>
          <PmExpander items={PM_OVERSIGHT} columns={1} />
        </div>
        <div style={{ border: '1px solid var(--web-grey-100)', borderRadius: 4, overflow: 'hidden', lineHeight: 0, boxShadow: 'var(--web-shadow-card)' }}>
          <img src="/assets/illustrations/cityblock-square.jpg" alt="A managed apartment block with rooftop solar geysers and a shared water tank, with a Home Assist technician on site" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </Section>

    <Section eyebrow="Commercial model" title="A fixed service fee tailored to a block">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 1000 }}>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>The shape</div>
          <h3 style={H3}>A fee set against the block, not against the claim count</h3>
          <p style={BODY}>The scheme is quoted a fixed service fee, tailored to that block — its size, its age, its claims history and how much of the service it takes. You budget one number instead of a variable that only becomes clear at year end.</p>
          <p style={{ ...BODY, margin: 0 }}>It is deliberately not a fee per job. A fee per job would reward us for the thing you are trying to reduce.</p>
        </div>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>One route, both cost centres</div>
          <h3 style={H3}>Claims and utilities in the same place</h3>
          <p style={BODY}>The same arrangement covers insurance claims and utility management, so the scheme is not running two systems, two reconciliations and two sets of reporting to the trustees. Settlement to providers runs off a float held against the property.</p>
          <p style={{ ...BODY, margin: 0 }}>The fee itself is quoted against your actual portfolio in the meeting. There are no numbers on this page because they depend on the block.</p>
        </div>
      </div>
    </Section>

    {/* Shared banner */}
    <section style={{ background: '#fff' }}>
      <div style={{ lineHeight: 0 }}>
        <img src="/assets/illustrations/estate-city-banner.jpg" alt="Houses on an estate and two apartment blocks along one road, served by a single Home Assist vehicle" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      <div style={{ background: 'var(--web-navy)' }}>
        <div style={{ ...WRAP, padding: '22px 40px' }}>
          <p style={{ ...BODY, color: '#fff', fontSize: 17, margin: 0, maxWidth: '80ch' }}>Freestanding homes, sectional title and estates — one verification standard across every property on the book, and one insurer relationship behind it.</p>
        </div>
      </div>
    </section>

    {/* Next step — now also carries the early-access note */}
    <Section tint eyebrow="Next step" title="The free pilot, in four steps"
      intro="No integration, no provider change, no resolution at a general meeting. One block, ninety days, and a report you can take to the trustees either way.">
      <Steps items={PM_PILOT} />
      <div style={{ ...CARD, marginTop: 28, maxWidth: 900 }}>
        <div style={{ ...LABEL, marginBottom: 8, color: 'var(--web-blue)' }}>In pilot — early access</div>
        <p style={{ ...BODY, margin: 0 }}>The oversight surface goes in front of pilot schemes as it is built out. We would rather show you a real screen and tell you what is still coming than sell you a finished product and disappoint you in month two.</p>
      </div>
      <p style={{ ...SMALL, marginTop: 20, maxWidth: '68ch' }}>Before you send us anything, Home Assist provides our standard mutual non-disclosure agreement. If you are not happy with what we come back with, we delete everything you provided, in full.</p>
    </Section>

    <NavyBand eyebrow="Next step" title="Give us one block for ninety days. We will verify every incident on it and show you what we find.">
      <Button as="a" size="lg" variant="onDark" href={CH.booking} target="_blank" rel="noopener">Book Free Pilot</Button>
      <Button as="a" size="lg" variant="ghost" href={wa('Hi Home Assist, I manage property and would like to start a free pilot on one block. ', true)} target="_blank" rel="noopener" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}>WhatsApp us</Button>
    </NavyBand>
  </main>;
}

Object.assign(window, { PropertyManagersPage });
