const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

/* PAGE B of the property-management pair, against PropertyManagersPage.jsx.
   Both sell the same thing and end on the same call to action — a free pilot on
   one block — but they are deliberately NOT the same page.

   This one is built around PORTFOLIO ECONOMICS. The portfolio section leads,
   immediately under the hero, and the layout is mirrored against page A:
   image-left / text-right, so the two are distinguishable at a glance.
   Page A is built around the INSURER proposition.

   NOTE ON THE TEST: this is a proposition test, not a controlled A/B. Layout,
   section order and imagery all differ, so a win tells you which proposition
   pulled — not which single element did. The call to action is held identical on
   purpose, so the conversion event stays comparable.

   NOTE ON LENGTH: the detail in the problem, how-it-works, upside and oversight
   sections sits inside click-to-open cards, same pattern as the module cards on
   /insurers. The page scans as a list of claims; only the reader who wants the
   argument pays for it in scroll. */

const MA_PROBLEMS = [
  ['clock', 'Speed', 'Quotes take longer than the water does',
    'The trustees have to get quotes before the broker will authorise anything. While that happens, a leak on the top floor is running through the units below it. The pressure to approve something — anything — is enormous, and that pressure is what sets the price.'],
  ['lock', 'Lock-in', 'One provider knows the block, so one provider prices it',
    'He has the access details. He is on the compliance file. The trustees know his name. Bringing somebody new in is paperwork nobody has time for during a leak, so nothing ever tests the price, and over years it drifts.'],
  ['users', 'The chain', 'Six parties, and nobody holding the evidence',
    'Tenant, owner, trustees, managing agent, broker, insurer. The path of least resistance is a cash settlement against the nearest plumber’s quote. The owner then pays for work he has no way to check, and finds out what he actually got when he claims on the warranty.']
];

const MA_PORTFOLIO = [
  ['building-2', 'One integration', 'Not one arrangement per scheme',
    'You onboard Home Assist once, not once per body corporate. The same process, the same evidence standard and the same reporting runs across every scheme in the portfolio, including the ones with a difficult provider history.'],
  ['trending-up', 'Comparison', 'The view a single block can never have',
    'Cost per incident, per block and per provider, side by side across the portfolio. A scheme on its own has nothing to compare against. You do — which makes an outlier visible the first time instead of the fifth.'],
  ['clipboard-check', 'Administration', 'The file arrives complete',
    'Photographs, pro-forma comparison, logged certificate and warranty status attach to the claim before it reaches you. Your team stops assembling files and chasing plumbers for paperwork.'],
  ['eye', 'Reporting', 'The trustee report you did not have to write',
    'What was spent on the scheme, what it should have cost, who approved it and when — produced from the evidence rather than compiled by hand the week before the AGM.']
];

const MA_VERIFY = [
  ['users', 'Any provider', 'No panel to move to',
    'The provider the block already uses can stay. We do not ask a scheme to change contractors as the price of oversight — we verify whoever does the work, including the plumber the trustees have used for ten years.'],
  ['receipt', 'Benchmarked', 'Priced against a pro-forma, not a memory',
    'Every quote and invoice is costed against a Home Assist pro-forma for that job in that province. Compliance extras are checked as correct rather than accepted as stated.'],
  ['camera', 'Evidenced', 'Photographs, invoice, logged certificate',
    'Serial and warranty decoded on the unit that was installed. Technician and PIRB registration confirmed. The certificate logged, not just written. Before and after photographs on file. Complete before the money moves.'],
  ['shield-check', 'Fraud indicators', 'Fabricated documents caught early',
    'AI checks run against documents, photographs and credentials. Cost drift and document fraud surface while the claim is open, instead of two years later when a warranty is declined.']
];

const MA_CONNECTED = [
  ['zap', 'Electricity', 'Staggered heating on one network',
    'Smart geyser controllers across a block can be put on one mesh network and the heating staggered. Where the block bills through a single meter that lowers the average cost and keeps the scheme out of a higher tariff band — with fewer no-hot-water complaints, not more.'],
  ['droplets', 'Early loss notification', 'The leak reports itself',
    'Smart water meters flag a leak before it becomes damage. A block is one site, so installation labour is low, maintenance is low, and the notification reaches us fast enough that the repair happens instead of the claim.'],
  ['gauge', 'Utility recovery', 'Prove the consumption, recover the cost',
    'Without smart metering, billing cycles slip and the scheme cannot prove what it used. Proving consumption is a council requirement. Digital data held for years lets the body corporate query a shortfall, dispute a charge, and claim back water lost to a leak.'],
  ['banknote', 'Aggregated spend', 'One collection point, savings you can target',
    'Collecting through the body corporate turns scattered household costs into one number that can be worked on over time — including a move to PV where the roof and the tariff justify it.']
];

const MA_OVERSIGHT = [
  ['eye', 'Approvals', 'Who approved what, and when',
    'Every authorisation on the block with the name against it and the date it happened. Not a memory of a meeting.'],
  ['trending-up', 'Benchmarks', 'What a block costs on average',
    'Cost per incident and per provider, for insurance claims and for maintenance, so an outlier looks like an outlier — and across the portfolio, so you can see which blocks are out of line.'],
  ['clipboard-check', 'The file', 'Every claim with its evidence attached',
    'Photographs, pro-forma comparison, certificate and warranty status on the claim they belong to, retrievable years later.']
];

const MA_PILOT = [
  ['01', 'One block', 'Pick a single scheme. Small enough that you do not need a special resolution to try it.'],
  ['02', '90 days', 'Long enough to catch a real incident cycle, short enough to walk away from.'],
  ['03', 'Every incident verified', 'At our cost, on the providers the block already uses. Nothing operational changes.'],
  ['04', 'A report to the trustees', 'What was spent, what it should have cost, what the evidence showed.']
];

/* Click-to-open card, same shape as the module cards on /insurers. */
function MaExpander({ items, columns }) {
  const [open, setOpen] = React.useState(null);
  return <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns},1fr)`, gap: 20, alignItems: 'start' }}>
    {items.map(([icon, label, title, body]) => {
      const isOpen = open === label;
      const id = 'ma-' + label.toLowerCase().replace(/\s+/g, '-');
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

function MaChain() {
  const links = ['Tenant', 'Owner', 'Trustees', 'Managing agent', 'Broker', 'Insurer'];
  return <div style={{ display: 'grid', gridTemplateColumns: `repeat(${links.length},1fr)`, gap: 10, marginTop: 24 }}>
    {links.map((l, i) => <div key={l} style={{ borderTop: '2px solid var(--web-navy)', paddingTop: 12 }}>
      <div style={{ ...LABEL, color: 'var(--web-grey-500)' }}>{String(i + 1).padStart(2, '0')}</div>
      <div style={{ font: '600 15px/1.3 var(--font-core)', color: 'var(--web-navy)', marginTop: 6 }}>{l}</div>
    </div>)}
  </div>;
}

function ManagingAgentsPage() {
  return <main>
    {/* Hero — mirrored: the portfolio on the left, text on the right */}
    <section style={{ background: 'var(--web-navy)' }}>
      <div style={{ ...WRAP, padding: '68px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div style={{ border: '1px solid rgba(255,255,255,.22)', borderRadius: 4, overflow: 'hidden', lineHeight: 0 }}>
          <img src="/assets/illustrations/estate-wide.jpg" alt="An estate of matching homes across the hills, each with a rooftop solar geyser and water tank, with one Home Assist vehicle on the road between them" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        <div data-hero-text>
          <Eyebrow onDark>For managing agents with a portfolio of schemes</Eyebrow>
          <h1 style={{ ...DISPLAY, color: '#fff', maxWidth: '24ch', marginBottom: 18 }}>Thirty schemes. One standard. One number to compare them on.</h1>
          <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', fontSize: 17, maxWidth: '54ch', marginBottom: 26 }}>One route for incidents, claims and utilities across the whole portfolio. Every invoice verified, every certificate logged, every approval recorded — without replacing the providers each scheme already uses.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button as="a" size="lg" variant="onDark" href={CH.booking} target="_blank" rel="noopener">Book Free Pilot</Button>
            <Button as="a" size="lg" variant="ghost" href={wa('Hi Home Assist, I manage a portfolio of schemes and would like to discuss the free pilot on one block. ', true)} target="_blank" rel="noopener" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }} iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>WhatsApp us</Button>
          </div>
        </div>
      </div>
    </section>

    {/* Offer strip — mirrored against page A */}
    <div style={{ background: 'var(--web-grey-050)', borderBottom: '1px solid var(--web-grey-100)' }}>
      <div style={{ ...WRAP, padding: '26px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: 28, alignItems: 'center' }}>
        <div><div style={{ font: '700 32px/1 var(--font-core)', color: 'var(--web-navy)' }}>1 block</div><div style={{ ...LABEL, color: 'var(--web-grey-500)', marginTop: 6 }}>Free pilot</div></div>
        <div><div style={{ font: '700 32px/1 var(--font-core)', color: 'var(--web-navy)' }}>90 days</div><div style={{ ...LABEL, color: 'var(--web-grey-500)', marginTop: 6 }}>No change to your providers</div></div>
        <div>
          <div style={{ ...LABEL, marginBottom: 8 }}>Start with one</div>
          <p style={{ ...BODY, fontSize: 17, margin: 0, maxWidth: '46ch' }}>Pick the scheme that worries you most. We verify every incident on it at our cost and show you what we found.</p>
        </div>
      </div>
    </div>

    {/* Audience strip — portfolio holder first */}
    <div style={{ background: '#fff', borderBottom: '1px solid var(--web-grey-100)' }}>
      <div style={{ ...WRAP, padding: '22px 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
        {[['Managing agents', 'Every scheme on one standard'], ['Portfolio owners', 'Compare block against block'], ['Body corporates', 'Common property, evidenced'], ['HOAs', 'Approvals and standards held']].map(([l, v]) =>
          <div key={l}><div style={LABEL}>{l}</div><div style={{ ...SMALL, marginTop: 6 }}>{v}</div></div>)}
      </div>
    </div>

    {/* PAGE B LEADS HERE — portfolio economics */}
    <Section tint eyebrow="At portfolio scale" title="Across every block you manage."
      intro="A single scheme can only ever see its own invoices. A managing agent holding thirty schemes is sitting on the only dataset in the market that can tell a fair price from a comfortable one — and almost nobody is using it.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
        {MA_PORTFOLIO.map(([ic, l, t, d]) => <LabelCard key={l} icon={ic} label={l} title={t}>{d}</LabelCard>)}
      </div>
    </Section>

    {/* Problem — click to open */}
    <Section eyebrow="The problem" title="The money leaves before anybody can check it."
      intro="A geyser bursts on the top floor. By the time three quotes have come back and the broker has authorised, the water has been through the units below. Click any of the three to see how it plays out.">
      <MaExpander items={MA_PROBLEMS} columns={3} />
      <MaChain />
    </Section>

    {/* How it works — click to open */}
    <Section tint eyebrow="How it works" title="Keep the plumber you trust. We verify the work."
      intro="The objection we hear first is that a managing agent does not want a panel of strangers on a building they have spent years getting right. Fair. That is not the deal.">
      <MaExpander items={MA_VERIFY} columns={2} />
    </Section>

    {/* One site — image on the right here, click to open */}
    <Section eyebrow="The upside nobody uses" title="A block is one site. That is an advantage a freestanding house never has."
      intro="One roof, one meter room, one access point, one collection mechanism. That makes things possible in a scheme that are uneconomic anywhere else.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 28, alignItems: 'start' }}>
        <MaExpander items={MA_CONNECTED} columns={2} />
        <div style={{ border: '1px solid var(--web-grey-100)', borderRadius: 4, overflow: 'hidden', lineHeight: 0, boxShadow: 'var(--web-shadow-card)' }}>
          <img src="/assets/illustrations/cityblock-square.jpg" alt="A managed apartment block with rooftop solar geysers and a shared water tank, with a Home Assist technician on site" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </Section>

    {/* Oversight — carries the "nobody has to be dishonest" argument, mirrored */}
    <Section tint eyebrow="Oversight" title="What the trustees can actually see">
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 28, alignItems: 'start' }}>
        <div style={{ border: '1px solid var(--web-grey-100)', borderRadius: 4, overflow: 'hidden', lineHeight: 0, boxShadow: 'var(--web-shadow-card)' }}>
          <img src="/assets/illustrations/estate-square.jpg" alt="An estate of matching homes on a hillside, each with a rooftop solar geyser and water tank, served by one Home Assist vehicle at a charging point" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        <div>
          <div style={{ ...CARD, borderLeft: '3px solid var(--web-blue)', marginBottom: 20 }}>
            <div style={{ ...LABEL, marginBottom: 10 }}>Why it is nobody's fault and still costs money</div>
            <h3 style={H3}>Nobody has to be dishonest for this to cost you money.</h3>
            <p style={BODY}>Compliance in a block genuinely is harder than in a freestanding house. Space is tight, a replacement unit is larger than the one it replaces, safety requirements have tightened, and anything in communal space needs approval. So every line on a high invoice has a defensible reason behind it — and a real reason is also perfect cover.</p>
            <p style={{ ...BODY, margin: 0 }}>Over years one provider becomes the only one who knows the building. Relationships form. Approvals get quicker and quieter. Usually that is all it is. Sometimes it is not, and the trustees who signed it off have no way to prove which — to the owners or to themselves. That is what the record below is for.</p>
          </div>
          <MaExpander items={MA_OVERSIGHT} columns={1} />
        </div>
      </div>
    </Section>

    <Section eyebrow="Commercial model" title="A fixed service fee tailored to a block">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>The shape</div>
          <h3 style={H3}>A fee set against the block, not the claim count</h3>
          <p style={BODY}>Each scheme is quoted a fixed service fee, tailored to that block — its size, its age, its claims history and how much of the service it takes. You budget one number per scheme instead of a variable that only resolves at year end.</p>
          <p style={{ ...BODY, margin: 0 }}>It is deliberately not a fee per job. A fee per job would reward us for the thing you are trying to reduce.</p>
        </div>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>One route, both cost centres</div>
          <h3 style={H3}>Claims and utilities in the same place</h3>
          <p style={BODY}>The same arrangement covers insurance claims and utility management, so no scheme runs two systems, two reconciliations and two sets of trustee reporting. Settlement to providers runs off a float held against the property.</p>
          <p style={{ ...BODY, margin: 0 }}>Fees are quoted against your actual portfolio in the meeting. There are no numbers on this page because they depend on the blocks.</p>
        </div>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>Insurer-backed</div>
          <h3 style={H3}>Better pricing for accepting the oversight</h3>
          <p style={BODY}>A verified, evidenced file settles cleaner and prices better than an unverified one, so an insurer backs this model and better pricing is available to schemes that take it on.</p>
          <p style={{ ...BODY, margin: 0 }}>Which insurer, and the terms behind the pricing, come out under a mutual non-disclosure agreement.</p>
        </div>
      </div>
    </Section>

    {/* Shared banner — same image as page A, different line under it */}
    <section style={{ background: '#fff' }}>
      <div style={{ lineHeight: 0 }}>
        <img src="/assets/illustrations/estate-city-banner.jpg" alt="Houses on an estate and two apartment blocks along one road, served by a single Home Assist vehicle" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      <div style={{ background: 'var(--web-navy)' }}>
        <div style={{ ...WRAP, padding: '22px 40px' }}>
          <p style={{ ...BODY, color: '#fff', fontSize: 17, margin: 0, maxWidth: '80ch' }}>Every scheme in the portfolio on the same evidence standard — so for the first time the blocks can be compared against each other, not just against last year.</p>
        </div>
      </div>
    </section>

    {/* Next step — now also carries the early-access note */}
    <Section tint eyebrow="Next step" title="The free pilot, in four steps"
      intro="No integration, no provider change, no resolution at a general meeting. One block, ninety days, and a report you can take to the trustees either way.">
      <Steps items={MA_PILOT} />
      <div style={{ ...CARD, marginTop: 28, maxWidth: 900 }}>
        <div style={{ ...LABEL, marginBottom: 8, color: 'var(--web-blue)' }}>In pilot — early access</div>
        <p style={{ ...BODY, margin: 0 }}>The oversight surface goes in front of pilot schemes as it is built out. We would rather show you a real screen and tell you what is still coming than sell you a finished product and disappoint you in month two.</p>
      </div>
      <p style={{ ...SMALL, marginTop: 20, maxWidth: '68ch' }}>Before you send us anything, Home Assist provides our standard mutual non-disclosure agreement. If you are not happy with what we come back with, we delete everything you provided, in full.</p>
    </Section>

    <NavyBand eyebrow="Next step" title="Give us one block for ninety days. We will verify every incident on it and show you what we find.">
      <Button as="a" size="lg" variant="onDark" href={CH.booking} target="_blank" rel="noopener">Book Free Pilot</Button>
      <Button as="a" size="lg" variant="ghost" href={wa('Hi Home Assist, I manage a portfolio of schemes and would like to start a free pilot on one block. ', true)} target="_blank" rel="noopener" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}>WhatsApp us</Button>
    </NavyBand>
  </main>;
}

Object.assign(window, { ManagingAgentsPage });
