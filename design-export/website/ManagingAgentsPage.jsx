const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

/* PAGE B of an A/B test against PropertyManagersPage.jsx.
   Same audience, same offer, same CTA. The only variable is the route in:
   this page leads with portfolio economics ("across every block you manage");
   page A leads with the insurer mandate. The insurer backing is still stated
   here, but as one card low on the page rather than as the way in.
   Everything from "Keep the plumber" down is intentionally identical in both
   files — do not improve one without the other, or the test stops meaning
   anything. */

const MA_PROBLEMS = [
  ['clock', 'Speed', 'Quotes take longer than the water does',
    'The trustees have to get quotes before the broker will authorise anything. While that happens, a leak on the top floor is running through the units below it. The pressure to approve something — anything — is enormous, and that pressure is what sets the price.'],
  ['lock', 'Lock-in', 'One provider knows the block, so one provider prices the block',
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
  ['receipt', 'Benchmarked', 'Priced against a pro-forma, not against a memory',
    'Every quote and invoice is costed against a Home Assist pro-forma for that job in that province. Compliance extras are checked as correct rather than accepted as stated.'],
  ['camera', 'Evidenced', 'Before photographs, invoice, logged certificate, after photographs',
    'Serial and warranty decoded on the unit that was installed. Technician and PIRB registration confirmed. The certificate logged, not just written. The file is complete before the money moves.'],
  ['shield-check', 'Fraud indicators', 'Fabricated documents caught early, not at warranty stage',
    'AI checks run against documents, photographs and credentials. Cost drift and document fraud surface while the claim is open, instead of two years later when a warranty is declined.']
];

const MA_CONNECTED = [
  ['zap', 'Electricity', 'Staggered heating on one network',
    'Smart geyser controllers across a block can be put on one mesh network and the heating staggered. Where the block bills through a single meter that lowers the average cost and keeps the scheme out of a higher tariff band — with fewer no-hot-water complaints, not more.'],
  ['droplets', 'Early loss notification', 'The leak reports itself',
    'Smart water meters flag a leak before it becomes damage. A block is one site, so installation labour is low, maintenance is low, and the notification reaches us fast enough that the repair happens instead of the claim.'],
  ['gauge', 'Utility recovery', 'Prove the consumption, recover the cost',
    'Without smart metering, billing cycles slip and the scheme cannot prove what it used. Proving consumption is a council requirement. Digital data held for years lets the body corporate query a shortfall, dispute a charge, and claim back water lost to a leak.'],
  ['banknote', 'Aggregated spend', 'One collection point makes savings targetable',
    'Collecting through the body corporate turns scattered household costs into one number that can be worked on over time — including a move to PV where the roof and the tariff justify it.']
];

const MA_PILOT = [
  ['01', 'One block', 'Pick a single scheme. Small enough that you do not need a special resolution to try it.'],
  ['02', '90 days', 'Long enough to catch a real incident cycle, short enough to walk away from.'],
  ['03', 'Every incident verified', 'At our cost, on the providers the block already uses. Nothing operational changes.'],
  ['04', 'A report to the trustees', 'What was spent, what it should have cost, what the evidence showed.']
];

const MA_OVERSIGHT = [
  ['Who approved what, and when', 'Every authorisation on the block with the name against it and the date it happened. Not a memory of a meeting.'],
  ['What a block costs on average', 'Cost per incident and per provider, for insurance claims and for maintenance, so an outlier looks like an outlier.'],
  ['Every file with its evidence attached', 'Photographs, pro-forma comparison, certificate and warranty status on the claim they belong to, retrievable years later.']
];

function MaProblemCard({ icon, label, title, body }) {
  return <div style={CARD}>
    <Icon name={icon} size={20} color="var(--web-blue)" />
    <div style={{ ...LABEL, margin: '12px 0 8px' }}>{label}</div>
    <h3 style={H3}>{title}</h3>
    <p style={{ ...BODY, margin: 0 }}>{body}</p>
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
    {/* Hero — route in: portfolio economics */}
    <section style={{ background: 'var(--web-navy)' }}>
      <div style={{ ...WRAP, padding: '72px 40px', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Eyebrow onDark>For managing agents with a portfolio of schemes</Eyebrow>
          <h1 style={{ ...DISPLAY, color: '#fff', maxWidth: '24ch', marginBottom: 18 }}>Independent oversight of every rand, across every block you manage.</h1>
          <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', fontSize: 17, maxWidth: '58ch', marginBottom: 26 }}>One route for incidents, claims and utilities across the whole portfolio. Every invoice verified, every certificate logged, every approval recorded — without replacing the providers each scheme already uses.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button as="a" size="lg" variant="onDark" href={CH.booking} target="_blank" rel="noopener">Book Free Pilot</Button>
            <Button as="a" size="lg" variant="ghost" href={wa('Hi Home Assist, I manage a portfolio of schemes and would like to discuss the free pilot on one block. ', true)} target="_blank" rel="noopener" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }} iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>WhatsApp us</Button>
          </div>
        </div>
        <div style={{ border: '1px solid rgba(255,255,255,.22)', borderRadius: 4, padding: 28 }}>
          <Eyebrow onDark>The offer in one line</Eyebrow>
          <p style={{ ...BODY, color: '#fff', fontSize: 17, margin: 0 }}>Give us one block for ninety days. We verify every incident on it at our cost and show the trustees what we found.</p>
          <div style={{ height: 1, background: 'rgba(255,255,255,.22)', margin: '22px 0' }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div><div style={{ font: '700 34px/1 var(--font-core)', color: '#fff' }}>1 block</div><div style={{ ...LABEL, color: 'var(--web-blue-300)', marginTop: 6 }}>Free pilot</div></div>
            <div><div style={{ font: '700 34px/1 var(--font-core)', color: '#fff' }}>90 days</div><div style={{ ...LABEL, color: 'var(--web-blue-300)', marginTop: 6 }}>No change to your providers</div></div>
          </div>
        </div>
      </div>
    </section>

    {/* Audience strip */}
    <div style={{ background: 'var(--web-grey-050)', borderBottom: '1px solid var(--web-grey-100)' }}>
      <div style={{ ...WRAP, padding: '22px 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
        {[['Managing agents', 'One route across every scheme'], ['Body corporates', 'Common property, evidenced'], ['HOAs', 'Approvals and standards held'], ['Trustees', 'Proof to put in front of owners']].map(([l, v]) =>
          <div key={l}><div style={LABEL}>{l}</div><div style={{ ...SMALL, marginTop: 6 }}>{v}</div></div>)}
      </div>
    </div>

    {/* Problem */}
    <Section eyebrow="The problem" title="The money leaves before anybody can check it."
      intro="A geyser bursts on the top floor. By the time three quotes have come back and the broker has authorised, the water has been through the units below. Every decision after that is made under pressure, and pressure is expensive.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {MA_PROBLEMS.map(([ic, l, t, d]) => <MaProblemCard key={l} icon={ic} label={l} title={t} body={d} />)}
      </div>
      <MaChain />
    </Section>

    {/* The honest framing of the corruption risk. */}
    <Section tint eyebrow="Why it is nobody's fault and still costs money" title="Nobody has to be dishonest for this to cost you money.">
      <div style={{ ...CARD, borderLeft: '3px solid var(--web-blue)', maxWidth: 900 }}>
        <p style={BODY}>Compliance in a block genuinely is harder than in a freestanding house. Space in the roof and the corridors is tight. A replacement unit is physically larger than the one it replaces, so it needs more pipework and more brackets. Safety requirements have tightened. Anything mounted in communal space needs body corporate approval, and in an estate the finish has to match every other house.</p>
        <p style={BODY}>So every line on a high invoice has a defensible reason behind it. That is exactly the problem. A real reason is also perfect cover, and no trustee, no agent and no broker in that chain can tell the difference without a benchmark to hold it against.</p>
        <p style={{ ...BODY, margin: 0 }}>Over years, one provider becomes the only one who knows the building. Relationships form. Approvals get quicker and quieter. Usually that is all it is. Sometimes it is not — and the trustees who signed it off have no way to prove which, to the owners or to themselves. Home Assist is the party in that room with nothing to gain from the answer.</p>
      </div>
    </Section>

    {/* PAGE B DISTINCT — the portfolio route in. */}
    <Section eyebrow="At portfolio scale" title="Across every block you manage."
      intro="A single scheme can only ever see its own invoices. A managing agent holding thirty schemes is sitting on the only dataset in the market that can tell a fair price from a comfortable one — and almost nobody is using it.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
        {MA_PORTFOLIO.map(([ic, l, t, d]) => <LabelCard key={l} icon={ic} label={l} title={t}>{d}</LabelCard>)}
      </div>
    </Section>

    {/* SHARED — keep identical to page A from here down. */}
    <Section tint eyebrow="How it works" title="Keep the plumber you trust. We verify the work."
      intro="The objection we hear first is that a managing agent does not want a panel of strangers on a building they have spent years getting right. Fair. That is not the deal.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
        {MA_VERIFY.map(([ic, l, t, d]) => <LabelCard key={l} icon={ic} label={l} title={t}>{d}</LabelCard>)}
      </div>
    </Section>

    <Section eyebrow="The upside nobody uses" title="A block is one site. That is an advantage a freestanding house never has."
      intro="Everything is in one place: one roof, one meter room, one access point, one collection mechanism. That makes things possible in a scheme that are uneconomic anywhere else.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
        {MA_CONNECTED.map(([ic, l, t, d]) => <LabelCard key={l} icon={ic} label={l} title={t}>{d}</LabelCard>)}
      </div>
    </Section>

    <Section tint eyebrow="Oversight" title="What the trustees can actually see">
      <div style={{ ...CARD, maxWidth: 900, marginBottom: 20 }}>
        <div style={{ ...LABEL, marginBottom: 8, color: 'var(--web-blue)' }}>In pilot — early access</div>
        <p style={{ ...BODY, margin: 0 }}>The oversight surface below goes in front of pilot schemes as it is built out. We would rather show you a real screen and tell you what is still coming than sell you a finished product and disappoint you in month two.</p>
      </div>
      <Accordion items={MA_OVERSIGHT} />
    </Section>

    <Section eyebrow="Commercial model" title="A float, not a fee per job">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>The shape</div>
          <h3 style={H3}>Paid against performance, not volume</h3>
          <p style={BODY}>Home Assist takes a percentage of the insurance premium and charges a fee to the property manager, which is passed on against total spend on the scheme. Settlement to providers runs off a float held against the property.</p>
          <p style={{ ...BODY, margin: 0 }}>It is deliberately not a fee per job. A fee per job rewards us for the thing you are trying to reduce.</p>
        </div>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>One route, both cost centres</div>
          <h3 style={H3}>Claims and utilities in the same place</h3>
          <p style={BODY}>The same arrangement covers insurance claims and utility management, so the scheme is not running two systems, two reconciliations and two sets of reporting to the trustees.</p>
          <p style={{ ...BODY, margin: 0 }}>Every figure comes out in the meeting, against your actual portfolio. There are no numbers on this page because they depend on your book.</p>
        </div>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>Insurer-backed</div>
          <h3 style={H3}>Better pricing for accepting the oversight</h3>
          <p style={BODY}>A verified, evidenced file settles cleaner and prices better than an unverified one, so an insurer backs this model and better pricing is available to schemes that take it on.</p>
          <p style={{ ...BODY, margin: 0 }}>Which insurer, and the terms behind the pricing, come out under a mutual non-disclosure agreement.</p>
        </div>
      </div>
    </Section>

    <Section tint eyebrow="Next step" title="The free pilot, in four steps"
      intro="No integration, no provider change, no resolution at a general meeting. One block, ninety days, and a report you can take to the trustees either way.">
      <Steps items={MA_PILOT} />
      <p style={{ ...SMALL, marginTop: 24, maxWidth: '68ch' }}>Before you send us anything, Home Assist provides our standard mutual non-disclosure agreement. If you are not happy with what we come back with, we delete everything you provided, in full.</p>
    </Section>

    <NavyBand eyebrow="Next step" title="Give us one block for ninety days. We will verify every incident on it and show you what we find.">
      <Button as="a" size="lg" variant="onDark" href={CH.booking} target="_blank" rel="noopener">Book Free Pilot</Button>
      <Button as="a" size="lg" variant="ghost" href={wa('Hi Home Assist, I manage a portfolio of schemes and would like to start a free pilot on one block. ', true)} target="_blank" rel="noopener" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }}>WhatsApp us</Button>
    </NavyBand>
  </main>;
}

Object.assign(window, { ManagingAgentsPage });
