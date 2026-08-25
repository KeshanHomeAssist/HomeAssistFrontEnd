const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

/* /leak-detection — the first service page.

   It reuses the URL the old WordPress site had, so the history Google still
   holds for /leak-detection/ lands on a real page instead of a 301 to the home
   page. The two redirect rules that used to shadow this path were removed from
   public/_redirects when this page shipped — putting them back makes the page
   unreachable, because Pages resolves redirects before it serves assets.

   The equipment section is the substance of the page. It is written from how
   technicians actually choose: what they are trained on, what they are
   comfortable with, and what the environment will let them hear or see. The
   tracer-gas sequence is the standard professional one — clear the line,
   pressurise with a 5% hydrogen / 95% nitrogen blend, let the hydrogen migrate
   up through soil, concrete or brick, then scan the surface for concentration.
   Sources for that sequence: saleak.co.za on the Variotec 460, and
   esders.com/2023/10/leak-detection-on-water-pipes-with-tracer-gas. */

const LD_SIGNS = [
  'A water bill that has jumped with no change in how you use water',
  'The water meter still turning with every tap in the house closed',
  'A damp patch, or a warm spot on a floor',
  'The sound of running water inside a wall',
  'Paint bubbling, plaster blistering, or a musty smell that will not clear'
];

const LD_STEPS = [
  ['01', 'Isolation test', 'Everything closed, then we watch the meter. This establishes that water is actually being lost before anyone opens anything.'],
  ['02', 'Visual inspection', 'A walk of the property looking for what the water is already telling us — damp, warm floors, stained ceilings, corrosion on exposed pipework.'],
  ['03', 'Equipment pass', 'Thermal, tracer gas or acoustic, chosen for the environment and for what the technician is trained on and confident with.'],
  ['04', 'Confirming test', 'A second method to pin the leak down to within about a metre of the main loss. Normally about an hour.']
];

const LD_EQUIPMENT = [
  {
    icon: 'thermometer',
    name: 'Thermal camera',
    best: 'Hot water pipes inside bathroom walls',
    body: 'A leaking hot water pipe warms the surface around it, and the camera sees that before anyone can hear it. This is the right tool in a tiled bathroom precisely because sound is the wrong one — reflections off tile and glass make a leak’s sound signature very hard to pick out.',
    image: '/assets/illustrations/leak-thermal-camera.jpg',
    alt: 'A Home Assist technician scanning the wall behind a basin with a handheld thermal imaging camera, the screen showing a heat pattern'
  },
  {
    icon: 'wind',
    name: 'Tracer gas',
    best: 'When there is no obvious place to start',
    body: 'For damp with no visible source, or a bath bricked into the floor with nothing to look at. The pipe is filled with a harmless tracer gas that escapes through the leak and rises through whatever is above it, so the leak announces itself at the surface.',
    image: '/assets/illustrations/leak-gas-sniffer.jpg',
    alt: 'A Home Assist technician holding a gas detector with a flexible probe against the tiled panel of a bath, checking for tracer gas'
  },
  {
    icon: 'ear',
    name: 'Acoustic listening',
    best: 'Large areas outside',
    body: 'Across a garden, a driveway or paving, tracer gas disperses too widely to be useful and a cold supply line gives a thermal camera almost nothing to see. Sound carries. Interference is common out here, so it is used to confirm a suspected area rather than to search blind.',
    image: '/assets/illustrations/leak-acoustic-listening.jpg',
    alt: 'A Home Assist technician kneeling on a pavement wearing headphones, holding a ground microphone over a manhole cover beside a listening device'
  }
];

const LD_GAS_PROCESS = [
  ['01', 'Clear the line', 'As much water as possible is drained from the section being tested, so the gas can move freely through it.'],
  ['02', 'Pressurise', 'The pipe is filled through a regulator with a non-toxic, non-flammable blend — 5% hydrogen, 95% nitrogen.'],
  ['03', 'Let it migrate', 'Hydrogen molecules are small enough to escape through the leak and travel up through soil, concrete or brick.'],
  ['04', 'Scan the surface', 'A sensitive hydrogen sensor is walked across the surface. Where the concentration peaks is where the leak is.']
];

const LD_FAQ = [
  ['How do you decide which equipment to use on my house?',
   'Two things decide it. The first is the technician: service providers use the equipment they are trained on and confident with, and a tool used confidently finds more than a tool used occasionally. The second is the environment — tiles reflect sound, open ground disperses gas, a cold supply line barely registers on a thermal camera. Once the leak has been located, a second confirming test is often run with a different method to pin it down to within about a metre of the main loss. That confirming test normally takes about an hour.'],
  ['Will you break open my walls or floors to find it?',
   'No. Everything up to the point of the repair is non-invasive — the meter test, the visual inspection, then thermal, tracer gas or acoustic work. The point of spending time on detection is that we then open only the section that has to be opened, rather than chasing a pipe across a room.'],
  ['What happens if the pipes turn out to be corroded?',
   'It happens often, and it changes the job. Corrosion shows as green marks on the pipework, and where it is widespread the honest answer is a full repipe rather than another patch — a repaired section beside a corroded one simply moves the next leak a metre down the pipe. Be aware that insurers generally do not cover corrosion: it is wear, not a sudden event. We will show you what we found and price the repipe separately so you can see exactly what is claimable and what is not.'],
  ['Why wait before repairing the ceiling or the damaged wall?',
   'Because a ceiling closed too early gets opened twice. Home Assist requires the plumber to pinpoint the leak, issue a report, repair the pipe, and then leave a try-out period of one to three weeks — the length depends on how quickly the structure dries in that environment — before the resultant damage is repaired. If anything is still wet at the end of it, that tells you something the first repair missed.'],
  ['What does leak detection cost?',
   'Finding the leak and repairing the pipe typically runs between R2,000 and R6,200 excluding VAT. Repairing the damage the water caused runs between R5,000 and R21,000 excluding VAT. The repair scope genuinely cannot be quoted until the leak has been found, which is why detection is a separate first step rather than an estimate bundled into a guess.'],
  ['Do you find leaks outside the house as well?',
   'Yes — supply lines under paving, driveways and gardens are a large share of the work. That is where the acoustic equipment earns its place, since gas disperses in open ground and a cold supply pipe gives a thermal camera very little to work with.']
];

function LeakDetectionPage({ go }) {
  return <main>

    {/* Hero */}
    <section style={{ background: 'var(--web-navy)' }}>
      <div style={{ ...WRAP, padding: '68px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div data-hero-text>
          <Eyebrow onDark>Leak detection</Eyebrow>
          <h1 style={{ ...DISPLAY, color: '#fff', maxWidth: '22ch', marginBottom: 18 }}>Anywhere in your home, we find the leak — usually to within a metre.</h1>
          <p style={{ ...BODY, color: 'rgba(255,255,255,.85)', fontSize: 17, maxWidth: '54ch', marginBottom: 26 }}>Behind a wall, under a floor, beneath the paving, inside a bricked-in bath. A hidden leak can run for months on your bill before it shows itself. We find it with non-invasive equipment first, so the only thing that gets opened is the piece that has to be.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button as="a" size="lg" variant="onDark" href={wa('Hi Home Assist, I think I have a hidden water leak. ')} target="_blank" rel="noopener" iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>WhatsApp us</Button>
            <Button as="a" size="lg" variant="ghost" href={'tel:' + CH.phoneTel} style={{ color: '#fff', border: '1px solid rgba(255,255,255,.5)' }} iconLeft={<Icon name="phone" size={18} color="#fff" />}>{CH.phone}</Button>
          </div>
        </div>
        <div style={{ border: '1px solid rgba(255,255,255,.22)', borderRadius: 4, overflow: 'hidden', lineHeight: 0 }}>
          <img src="/assets/illustrations/leak-acoustic-listening.jpg" alt="A Home Assist technician kneeling on a pavement with headphones and a ground microphone, listening for a leak on a supply line" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </section>

    {/* Signs */}
    <Section eyebrow="Do you have one" title="Signs of a hidden leak"
      intro="Any one of these is worth a meter test. Two together usually means water is going somewhere it should not.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div style={CARD}>
          <ul style={{ ...BODY, margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {LD_SIGNS.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div style={{ ...CARD, background: 'var(--web-blue-050)', border: '1px solid var(--web-blue-100)' }}>
          <div style={{ ...LABEL, marginBottom: 10 }}>The five-minute test you can do yourself</div>
          <p style={BODY}>Close every tap in the house and switch off anything that draws water automatically. Then look at your water meter. If the dial is still moving, water is being lost between the meter and your taps.</p>
          <p style={{ ...BODY, margin: 0 }}>Photograph the meter, wait an hour, photograph it again. Send us both pictures and we can tell you roughly how much you are losing before anybody comes out.</p>
        </div>
      </div>
    </Section>

    {/* How it works */}
    <Section tint eyebrow="How it works" title="Found before anything is opened"
      intro="Detection is a sequence, not a single gadget. Each step narrows the area the next one has to search.">
      <Steps items={LD_STEPS} />
      <p style={{ ...BODY, maxWidth: '68ch', marginTop: 28 }}>Once the leak is pinpointed, the plumber issues a report, opens only what has to be opened, repairs the pipe and pressure tests the line. The damage the water caused is repaired after that — see the try-out period below, because the order matters more than it looks.</p>
    </Section>

    {/* Equipment */}
    <Section eyebrow="The equipment" title="Three tools, and the reason for each"
      intro="No single instrument works everywhere. What a technician reaches for depends on what they are trained on and on what the building will let them hear or see.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {LD_EQUIPMENT.map(e => <div key={e.name} style={{ ...CARD, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <img src={e.image} alt={e.alt} style={{ width: '100%', height: 'auto', display: 'block', borderBottom: '1px solid var(--web-grey-100)' }} />
          <div style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <Icon name={e.icon} size={18} color="var(--web-blue)" />
              <div style={{ font: '700 18px/1.3 var(--font-core)', color: 'var(--web-navy)' }}>{e.name}</div>
            </div>
            <div style={{ ...LABEL, color: 'var(--web-grey-500)', marginBottom: 10 }}>Best for: {e.best}</div>
            <p style={{ ...BODY, margin: 0 }}>{e.body}</p>
          </div>
        </div>)}
      </div>
    </Section>

    {/* Tracer gas detail */}
    <Section tint eyebrow="Tracer gas" title="What actually happens when we use gas"
      intro="The one that sounds alarming and is not. The blend is non-toxic and non-flammable, and it is the method that finds a leak nobody can see, hear or feel.">
      <Steps items={LD_GAS_PROCESS} />
    </Section>

    {/* Corrosion — the honest part */}
    <Section eyebrow="What we often find" title="Corroded pipes, and why we tell you early"
      intro="This is the most common surprise on a leak job, and it is the one worth understanding before the plumber arrives rather than after.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div style={CARD}>
          <div style={{ ...LABEL, marginBottom: 10 }}>What it looks like</div>
          <p style={BODY}>Green marks on the pipework. Where you see them in one place you usually see them in several, because the whole line has aged in the same water and the same soil.</p>
          <p style={{ ...BODY, margin: 0 }}>Where corrosion has spread, a full repipe is the honest answer. Patching a section beside a corroded one moves the next leak a metre along the pipe and buys you a few months.</p>
        </div>
        <div style={{ ...CARD, background: 'var(--web-blue-050)', border: '1px solid var(--web-blue-100)' }}>
          <div style={{ ...LABEL, marginBottom: 10 }}>What it means for your claim</div>
          <p style={BODY}>Insurers generally treat corrosion as wear rather than a sudden event, so a repipe usually falls outside the claim even when the burst that revealed it is covered.</p>
          <p style={{ ...BODY, margin: 0 }}>We photograph what we found, price the repipe separately from the claimable repair, and show you which part is which. You should never have to guess where the claim ends and your own money starts.</p>
        </div>
      </div>
    </Section>

    <NavyBand eyebrow="Straightforward from here" title="Send a photograph and we will tell you what we think it is.">
      <Button as="a" size="lg" variant="onDark" href={wa('Hi Home Assist, I need a leak detection test. ')} target="_blank" rel="noopener" iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>Book a leak detection test</Button>
    </NavyBand>

    {/* The sequence we insist on */}
    <Section eyebrow="Our standard" title="The order every Home Assist plumber follows"
      intro="This sequence is a requirement on our network, not a preference. It exists because skipping a step is what turns one repair into three.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {[
          ['search', 'Detect', 'A leak detection test to pinpoint the leak. Always, before anything is opened.'],
          ['file-text', 'Report', 'A written report of what was found and where, so the claim and the repair rest on evidence.'],
          ['wrench', 'Repair the pipe', 'The burst or leaking pipe is repaired and the line pressure tested.'],
          ['clock', 'Then wait', 'A try-out period of one to three weeks, depending on how fast the structure dries, before the resultant damage is repaired.']
        ].map(([icon, title, body]) => <div key={title} style={CARD}>
          <Icon name={icon} size={20} color="var(--web-blue)" />
          <div style={{ font: '700 17px/1.3 var(--font-core)', color: 'var(--web-navy)', margin: '12px 0 8px' }}>{title}</div>
          <p style={{ ...BODY, margin: 0 }}>{body}</p>
        </div>)}
      </div>
    </Section>

    {/* FAQ */}
    <Section tint eyebrow="Questions" title="What people ask before booking">
      <Accordion items={LD_FAQ} />
    </Section>

    {/* Close */}
    <Section eyebrow="Get started" title="Send us what you are seeing"
      intro="A photograph of the meter, the damp patch or the bill is usually enough for us to tell you what we think it is and what it will take to find.">
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button as="a" size="lg" variant="navy" href={wa('Hi Home Assist, I think I have a hidden water leak. ')} target="_blank" rel="noopener" iconLeft={<Icon name="message-circle" size={18} color="#fff" />}>WhatsApp us</Button>
        <Button as="a" size="lg" variant="secondary" href={'tel:' + CH.phoneTel} iconLeft={<Icon name="phone" size={18} color="var(--web-navy)" />}>Call {CH.phone}</Button>
      </div>
    </Section>
  </main>;
}

Object.assign(window, { LeakDetectionPage });
