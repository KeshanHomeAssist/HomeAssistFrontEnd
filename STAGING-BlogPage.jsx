const { Button, Icon } = window.HomeAssistDesignSystem_cf0a2b;

const EL_NINO_BODY = [
  ['p', 'By Keshan Patel — CEO and Co-Founder, Home Assist Technologies', 'byline'],
  ['p', 'Let me start with the uncomfortable part. Most South African insurers and brokers are not resourced for what is coming this summer. The plan sitting on most desks right now is overtime, a temp agency, and a quiet hope that the season is mild. Every time that plan has been run, it has been met with the same three things: service delays, unforeseen administration costs, and customer churn.'],
  ['p', 'And this is no longer a forecast. It is happening.'],
  ['p', 'In May, US forecasters put the odds of El Niño even forming at 82%. By June, NOAA had an El Niño Advisory in force. Its diagnostic discussion of 13 August 2026 now puts the probability of a very strong event over the coming summer at greater than 90%, and gives a 69% chance that October to December 2026 exceeds the strength of every El Niño on record back to 1950.'],
  ['p', 'In southern Africa, El Niño is reliably associated with above-normal heat, and — with somewhat less certainty, because no two events unfold the same way — below-normal summer rainfall. Hot, dry, wind-driven conditions cure fuel loads and turn a routine ignition into a catastrophe event.'],
  ['p', 'The claims consequence is already showing up in the numbers. Cedric Masondo, CEO of PSG Insure, has said weather-related catastrophes became the largest force on short-term insurance claims costs in the first half of 2026, with the frequency and severity of floods, storms and wildfires all rising off what was a comparatively benign base a year earlier. Daniel Stevens, Executive Head of Agriculture at Santam, is blunter still: weather-related catastrophe losses have doubled in size over the past ten years — and they have done so while insurance uptake has not kept pace.'],
  ['p', 'There is also no off-season to recover in. Fire risk in South Africa does not diminish in winter, it moves: the Western Cape season runs roughly December to April, the summer-rainfall interior May to October. This year, both ends of that calendar are loaded.'],
  ['h2', 'The maths nobody models'],
  ['p', 'Your plumbing and building claims volume is a function of your book. It is predictable. You staff to it. That is precisely why it has never really hurt you.'],
  ['p', 'A catastrophe does not behave that way. It does not lift claims volume by 15% across a month. It delivers three to four months of first notification of loss in a matter of days, in one postal code, usually starting on a Saturday afternoon.'],
  ['quote', 'What breaks first is not your reserve. It is the phone.'],
  ['p', 'Hold times go to forty minutes. Your best FNOL consultants are overwhelmed. Claims get logged with little evidence, little verification, and sometimes the wrong peril — because the person capturing them is three hours into a queue that is not shortening. Assessors are double-booked. Contractors quote whatever they like, because nobody has time to challenge them.'],
  ['p', 'Then the complaints arrive, and the Ombud letters after that, and you are managing a reputational event on top of a catastrophe. Every one of those failures started as a capacity problem and ended up on your loss ratio.'],
  ['h2', 'Where the money actually leaks'],
  ['p', 'Cash settlements rise sharply in a catastrophe. Claimants want out fast, contractors are unavailable, reinstatement timelines are impossible, and settling in cash is the path of least resistance for an overloaded desk. But a cash settlement made without verification is just a number someone agreed to under time pressure.'],
  ['p', 'Nobody confirmed the geyser was out of warranty. Nobody checked whether the damage was the insured peril or pre-existing. Nobody costed the scope against a proper pro-forma.'],
  ['p', 'Multiply that by a thousand claims in a fortnight and you are not looking at leakage. You are looking at a structural hit to your loss ratio that will still be visible in next year’s numbers.'],
  ['h2', 'What we do about it'],
  ['p', 'Home Assist has run more than 40,000 property incidents in the last five years. We are built for exactly the shape of demand a catastrophe creates.'],
  ['lead', 'Surge FNOL capacity, outsourced.', 'Our help centre runs seven days a week and scales into an event without you hiring, training or carrying the cost when the season is quiet. Your claimants get answered, and your own team stays on the claims that need them.'],
  ['lead', 'A vetted national contractor network.', 'Every technician passes third-party KYC, holds a PIRB qualification, and has at least four years’ experience. Appointment is by proximity and availability, not by whoever answers first.'],
  ['lead', 'Verification before settlement.', 'Serial and warranty decoding, COC and PIRB registration checks, and every claim costed against a Home Assist pro-forma before money moves. Our cash settlement solution exists to stop the leakage a catastrophe causes, not to speed it up.'],
  ['lead', 'One point of accountability.', 'Claim data, turnaround times and cost per claim in one place, so you can see what the event is doing to your book while it is still happening.'],
  ['h2', 'The window is now'],
  ['p', 'You cannot build surge capacity during a surge. Recruitment, vetting, systems integration and contractor onboarding take weeks you will not have in November.'],
  ['p', 'If you write property, geyser or building risk in South Africa, the honest question is not whether you will see elevated claim volumes this season. It is whether your operation can absorb them without your loss ratio and your customer experience paying for it. That conversation belongs in August, not January.']
];

const EL_NINO_SOURCES = [
  ['NOAA Climate Prediction Center — ENSO Diagnostic Discussion, 13 August 2026', 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml'],
  ['IRI/Columbia — ENSO Forecast Quick Look, July 2026', 'https://iri.columbia.edu/our-expertise/climate/forecasts/enso/current/'],
  ['Daily Maverick — “US forecaster issues chilling El Niño warning”, 21 May 2026', 'https://www.dailymaverick.co.za/article/2026-05-21-us-forecaster-issues-chilling-el-nino-warning-with-82-chance-by-july/'],
  ['Business Report — “Weather-related catastrophes reshape short-term insurance landscape in 2026”, 3 July 2026', 'https://businessreport.co.za/companies/2026-07-03-weather-related-catastrophes-reshape-short-term-insurance-landscape-in-2026/'],
  ['Mail & Guardian — “Preparing for El Niño”, 23 July 2026', 'https://mg.co.za/the-green-guardian/2026-07-23-preparing-for-el-nino/'],
  ['International Association of Wildland Fire — Situation Report: South Africa', 'https://www.iawfonline.org/article/situation-report-south-africa/']
];

const YOUTUBE_ID = 'sWh5zmPczDM';

/* Cape Town water restrictions post (20 Nov 2026). Body kinds beyond the
   El Niño post: 'video' (self-hosted clip, inline HTML like the page heroes)
   and 'cta' (a Service Request button that opens the shared QuickRequest
   popup with its own sheet source and code, see Chrome.jsx). */
const WATER_BODY = [
  ['p', 'By Keshan Patel — CEO and Co-Founder, Home Assist Technologies', 'byline'],
  ['p', 'On Monday the Minister of Water and Sanitation cut the Western Cape’s water allocations: 7% for homes and industry, 15% for farms. Two below-average winters in a row and a forecast strong to extreme El Niño, which means more heat, more evaporation and less rain reaching the dams. Her words: “let us act now, not when our dams are empty.”'],
  ['p', 'The City of Cape Town answered with Level 1 restrictions from 1 December. Dams are at 70.4%, 13 points lower than last year, and the city is using 951 million litres a day against a target of 860. The ask is to use 10% less and stay under 85 litres per person per day.'],
  ['h2', 'We have done this before'],
  ['p', 'The drought that nearly emptied Cape Town built over three dry winters from 2015, the worst run in over a century. By early 2018 the dams were at 26% and Day Zero had a date. Level 6 came in on 1 January 2018 at 87 litres a person. Level 6B on 1 February cut it to 50 litres, with every garden tap, pool top-up and car wash banned. Then the rains came, demand fell 30%, and Day Zero was called off.'],
  ['quote', 'We are not back at 50. But El Niño is the variable that turns a dry winter into a dry summer into another dry winter.'],
  ['p', 'The City is asking for 85 now so that it never has to ask for 50 again.'],
  ['h2', 'What 85 litres looks like'],
  ['video', '/assets/illustrations/a-day-in-85-litres.mp4', '/assets/illustrations/a-day-in-85-litres-poster.jpg'],
  ['p', 'Three minutes in the shower, three flushes, your share of a wash load, a basin of dishes. It is a budget you can live inside without thinking about it much, provided nothing on your property is quietly spending it for you.'],
  ['h2', 'The leak you have not found is using more than you are'],
  ['p', 'A running toilet loses up to 433 litres a day, by the City’s own figures. That is one person’s entire 85-litre budget, up to five times over, 24 hours a day, whether anyone is home or not. A dripping tap is up to 87. An underground pipe or a cracked geyser overflow line can be worse, and you will never hear it.'],
  ['p', 'The first check is free. Close every tap, read your meter, wait 15 minutes, read it again. If it moved, you have a leak. What the test cannot tell you is where, and that is where people lose weeks digging up the wrong piece of garden or opening a wall on a guess.'],
  ['p', 'Home Assist finds leaks across South Africa with thermal imaging, tracer gas and acoustic listening, usually to within a metre, without opening what does not need opening. We repair the pipe, pressure-test the line, and once the area has dried out we make good the damage. You get a written report for the repair and, if you are insured, your claim.'],
  ['cta', 'I think I have a leak', { source: 'blog-water-leak', code: 'BLOG-WATER-1', heading: 'Leave your number and we call you back about the leak.', intro: 'From the Cape Town water restrictions article: I think I have a leak. Please call me back.', link: '/leak-detection', linkLabel: 'How leak detection works' }],
  ['h2', 'The best meter tells you before the bill does'],
  ['p', 'The City’s smart meters will one day send leak alerts through its app. Until then, and even after, they sit on the municipal bulk meter at your boundary. If you own a standalone home you can put a smart reader on your existing meter today and see your use on your phone.'],
  ['p', 'Where it matters most is private property with one municipal meter and many homes behind it. In a body corporate, cluster or estate, one running toilet is paid for by everyone and nobody can tell whose it is. Home Assist puts a small reader on each unit’s water (and electricity) meter. Readings come in several times a day over a low-power network, every home is billed from its own meter, and when a unit shows flow at 03:00 we phone the owner that day. It is available now.'],
  ['cta', 'Get smart water metering for my property', { source: 'blog-water-meter', code: 'BLOG-WATER-2', heading: 'Leave your number and we call you back about metering.', intro: 'From the Cape Town water restrictions article: I want smart water metering for my property. Please call me back.', link: '/smart-homes/smart-metering', linkLabel: 'See the smart metering offering' }],
  ['h2', 'Why it is worth doing properly'],
  ['p', 'This has been the year everyone talks about artificial intelligence. Nothing alive gets by without water, and no amount of computing changes that. Cape Town got through 2018 by cutting demand 30% under rules nobody enjoyed. The lesson was not that we can do 50 litres. It was that we never should have had to. Fix the running toilet, put a reader on the meter, act on the first alert, and the city stays at 85.'],
  ['cta', 'Talk to Home Assist', { source: 'blog-water-general', code: 'BLOG-WATER-3', intro: 'From the Cape Town water restrictions article. Please call me back.' }]
];

const WATER_SOURCES = [
  ['City of Cape Town — Capetonians called to use 10% less water under Level 1 restrictions, 16 November 2026', 'https://www.capetown.gov.za/media-and-news/capetonians-called-to-use-10-less-water-under-level-1-restrictions-this-summer/'],
  ['City of Cape Town — How to find and fix leaks on your property', 'https://www.capetown.gov.za/Media-and-news/How%20to%20find%20and%20fix%20leaks%20on%20your%20property%20to%20avoid%20excessive%20usage%20and%20warning%20letters'],
  ['City of Cape Town — Water meter readings', 'https://www.capetown.gov.za/family-and-home/residential-utility-services/residential-water-and-sanitation-services/water-meter-readings/'],
  ['The National — Water restrictions for Western Cape as El Niño looms and dam levels slip, 16 November 2026', 'https://thenational.co.za/news/2026-11-16-water-restrictions-for-western-cape-as-el-nino-looms-and-dam-levels-slip/'],
  ['Western Cape Government — Level 6B water restriction guidelines, February 2018', 'https://d7.westerncape.gov.za/text/2018/January/level_6b_water_restriction_guidelines-_eng.pdf'],
  ['National Geographic — Why Cape Town is running out of water, and who’s next', 'https://education.nationalgeographic.org/resource/why-cape-town-running-out-water-and-whos-next/'],
  ['InQuestion — Cape Town Running Out of Water Again | Did Government Learn Nothing? (YouTube)', 'https://www.youtube.com/watch?v=FixRFuPTRSk']
];

/* Card and share image: the InQuestion "Day Zero 2.0?" frame (YouTube
   FixRFuPTRSk), kept locally so the card never depends on YouTube's thumbnail
   host. Credited in the sources list. */
const WATER_THUMB = 'blog-water-day-zero.jpg';

const PLATES = [
  ['plate-ariston-trendline-150.jpg', 'Trendline 150 — serial on the green rating plate'],
  ['plate-ariston-axios-150.jpg', 'Axios 150 — serial below the SABS mark'],
  ['plate-duratherm-cast.jpg', 'Duratherm — cast plate, serial stamped in the metal'],
  ['plate-its-solar.jpg', 'ITS Solar — collector plate on the frame'],
  ['plate-supahot.jpg', 'Supahot — barcode label on the end cover'],
  ['plate-xstream-200l.jpg', '200 L cylinder — serial on the red plate'],
  ['plate-solar-300l.jpg', '300 L horizontal solar — faded rating label'],
  ['plate-handwritten-serial.jpg', 'Serial written on the element cover']
];

const ALL_POSTS = [
  ['Leaks', 'Cape Town has been here before: what 50 litres a day taught us, and why 85 is the number to watch now', 'Level 1 restrictions start 1 December. Dams are at 70%, El Niño is forecast, and the City wants you under 85 litres a day. In 2018 it was 50. Here is what 85 litres looks like, and how to find the leak that is spending it for you.', '20 November 2026', '4 min', WATER_THUMB, false, WATER_BODY, WATER_SOURCES, ''],
  ['Insurance', 'The 2026/27 fire season won’t break your claims budget. It will break your call centre.', 'NOAA now puts a very strong El Niño over the 2026/27 summer at above 90%, with a 69% chance of a record-breaking event. South African insurers and brokers are not resourced for the FNOL surge that follows.', '17 August 2026', '8 min', '', false, EL_NINO_BODY, EL_NINO_SOURCES, YOUTUBE_ID],
  ['Geysers', 'What to do in the first ten minutes after your geyser bursts', 'Close the main water supply, then switch the geyser off at the distribution board. The order matters: water first, then electricity.', '12 August 2026', '4 min', 'blog-geyser-kwikot.png'],
  ['Geysers', 'How to tell if your geyser is still under warranty', 'The serial number plate carries the manufacturer and the date of manufacture. Decode it before you agree to a replacement.', '5 August 2026', '5 min', 'serial-plate-electrolux.jpg', false, null, null, '', PLATES],
  ['Insurance claims', 'Why a certificate of compliance must be logged, not just written', 'A COC that was written but never logged with the board leaves the property owner carrying the compliance risk.', '29 July 2026', '4 min', 'blog-plastering.jpg'],
  ['Leaks', 'Signs you have a hidden water leak — and what to do about it', 'A bill that jumps with no change in use is the first sign. The meter test tells you whether the leak is on your side of the connection.', '22 July 2026', '6 min', 'blog-leak-device.png', true],
  ['Insurance claims', 'Your insurer paid you out in cash. What now?', 'A cash settlement makes you the contractor. Verify the quote, the registration and the certificate before the work starts.', '15 July 2026', '5 min', 'techman-phone-home.png'],
  ['Geysers', 'Solar, heat pump or electric — which geyser should you replace yours with?', 'The right answer depends on your household’s hot water pattern, your roof, and what your budget can carry up front.', '8 July 2026', '7 min', 'blog-solar-geyser.png']
];

/* Only posts with a written body are published. The rest stay above as drafts:
   they get no card on /blog, no URL of their own, and no sitemap entry, so we
   are never offering Google a page that says "to be written". Give a draft a
   body array and it publishes itself on the next build. */
const POSTS = ALL_POSTS.filter(p => Array.isArray(p[7]) && p[7].length > 0);

function BlogPage() {
  const [post, setPost] = React.useState(null);
  if (post !== null) return <Article post={POSTS[post]} back={() => setPost(null)} related={POSTS.filter((_, i) => i !== post).slice(0, 3)} />;
  return <main>
    <section style={{ borderBottom: '1px solid var(--web-grey-100)' }}>
      <div style={{ ...WRAP, padding: '56px 40px 44px' }}>
        <Eyebrow>Blog</Eyebrow>
        <h1 style={{ ...DISPLAY, marginBottom: 14 }}>Advice from the Home Assist team.</h1>
        <p style={{ ...BODY, fontSize: 17, maxWidth: '62ch', margin: 0 }}>Practical guidance on burst geysers, hidden leaks, certificates of compliance and insurance claims in South Africa.</p>
        <div style={{ display: 'flex', gap: 20, marginTop: 26, flexWrap: 'wrap' }}>
          {['All', 'Geysers', 'Leaks', 'Electrical', 'Insurance claims', 'For providers'].map((c, i) =>
            <span key={c} style={{ ...LABEL, color: i === 0 ? 'var(--web-navy)' : 'var(--web-grey-500)', borderBottom: i === 0 ? '2px solid var(--web-blue)' : '2px solid transparent', paddingBottom: 5 }}>{c}</span>)}
        </div>
      </div>
    </section>
    <Section>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {POSTS.map(([cat, title, excerpt, date, read, img, damp, body, sources, youtube], i) =>
          <a key={title} href="#" onClick={e => { e.preventDefault(); setPost(i); }} style={{ ...CARD, padding: 0, overflow: 'hidden', textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: 170, background: img || youtube ? 'var(--web-grey-050)' : 'var(--web-navy)', borderBottom: '1px solid var(--web-grey-100)', overflow: 'hidden', display: 'grid', placeItems: img || youtube ? 'stretch' : 'center' }}>
              {youtube ? <img src={'https://img.youtube.com/vi/' + youtube + '/maxresdefault.jpg'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                : img ? <img src={/^https?:/.test(img) ? img : '../../assets/illustrations/' + img} alt="" style={{ width: '100%', height: '100%', objectFit: (/^https?:/.test(img) || /^blog-water/.test(img)) ? 'cover' : 'contain', display: 'block' }} />
                  : <span style={{ ...LABEL, color: 'var(--web-blue-300)', textAlign: 'center', padding: '0 24px' }}>{cat} · {date}</span>}
              {damp ? <div className="ha-damp"></div> : null}
            </div>
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
              <div style={LABEL}>{cat}</div>
              <h2 style={{ ...H3, fontSize: 19, margin: 0 }}>{title}</h2>
              <p style={{ ...BODY, margin: 0 }}>{excerpt}</p>
              <div style={{ ...SMALL, marginTop: 'auto', paddingTop: 8 }}>{date} · {read} read</div>
            </div>
          </a>)}
      </div>
    </Section>
  </main>;
}

function Article({ post, back, related }) {
  const [cat, title, excerpt, date, read, img, damp, body, sources, youtube, plates] = post;
  const [quick, setQuick] = React.useState(null);  // the 'cta' options of the open popup, or null
  /* Inline clips are inserted as HTML, and after React hydrates the browser
     does not always honour their autoplay attribute (seen on staging, 19 Nov
     2026: loaded, muted, paused at 0:00). Nudge them: play once mounted, and
     again whenever one scrolls into view. Silent if the browser refuses. */
  React.useEffect(() => {
    const vids = Array.from(document.querySelectorAll('main video[autoplay]'));
    if (!vids.length) return;
    const nudge = (v) => { try { v.muted = true; const p = v.play(); if (p && p.catch) p.catch(() => {}); } catch (e) { /* ignore */ } };
    vids.forEach(nudge);
    let io = null;
    if (typeof IntersectionObserver === 'function') {
      io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting && en.target.paused) nudge(en.target); }), { threshold: 0.25 });
      vids.forEach((v) => io.observe(v));
    }
    return () => { if (io) io.disconnect(); };
  }, [title]);
  return <main>
    <QuickRequest open={quick !== null} onClose={() => setQuick(null)} source={quick ? quick.source : ''} code={quick ? quick.code : ''} intro={quick ? quick.intro : ''} heading={quick ? quick.heading : ''} />
    <div style={{ ...WRAP, maxWidth: 720, padding: '48px 40px 0' }}>
      <a href="#" onClick={e => { e.preventDefault(); back(); }} style={{ ...LABEL, color: 'var(--web-blue)', textDecoration: 'none' }}>← All articles</a>
      <div style={{ ...LABEL, marginTop: 28 }}>{cat}</div>
      <h1 style={{ ...DISPLAY, fontSize: 34, margin: '10px 0 14px' }}>{title}</h1>
      <p style={SMALL}>{date} · {read} read · Home Assist Technologies</p>
      <div style={{ height: 1, background: 'var(--web-grey-100)', margin: '28px 0' }}></div>
      {youtube ? <div style={{ position: 'relative', paddingTop: '56.25%', marginBottom: 28, borderRadius: 4, overflow: 'hidden', background: 'var(--web-navy-900)' }}>
        <iframe src={'https://www.youtube.com/embed/' + youtube} title={title} allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}></iframe>
      </div> : null}
      <p style={{ ...BODY, fontSize: 17, fontWeight: 600, color: 'var(--web-navy)' }}>{excerpt}</p>
      {body ? <React.Fragment>
        {body.map(([kind, a, b], i) => {
          if (kind === 'h2') return <h2 key={i} style={{ ...H2, fontSize: 22, margin: '32px 0 10px' }}>{a}</h2>;
          if (kind === 'quote') return <blockquote key={i} style={{ margin: '28px 0', paddingLeft: 22, borderLeft: '3px solid var(--web-blue)' }}>
            <p style={{ font: '600 21px/1.4 var(--font-core)', color: 'var(--web-navy)', margin: 0 }}>{a}</p>
          </blockquote>;
          if (kind === 'video') return <div key={i} style={{ margin: '8px auto 24px', maxWidth: 420 }} dangerouslySetInnerHTML={{
            __html: '<video autoplay muted loop playsinline controls preload="metadata" poster="' + b + '" aria-label="A day in 85 litres" style="width:100%;height:auto;display:block;aspect-ratio:4/5;border-radius:4px;border:1px solid var(--web-grey-100)"><source src="' + a + '" type="video/mp4"></video>' }} />;
          if (kind === 'cta') return <div key={i} style={{ ...CARD, background: 'var(--web-blue-050)', border: '1px solid var(--web-blue-100)', display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', margin: '24px 0 32px' }}>
            <Button as="a" variant="navy" href="#request" onClick={e => { e.preventDefault(); setQuick(b); }} iconLeft={<Icon name="clipboard-check" size={17} color="#fff" />}>Service Request: {a}</Button>
            {b.link ? <a href={b.link} style={{ ...LABEL, color: 'var(--web-blue)', textDecoration: 'none' }}>{b.linkLabel || 'Learn more'} →</a> : null}
          </div>;
          if (kind === 'lead') return <p key={i} style={{ ...BODY, fontSize: 17 }}><strong style={{ color: 'var(--web-navy)' }}>{a}</strong> {b}</p>;
          if (b === 'byline') return <p key={i} style={{ ...BODY, fontSize: 17, fontWeight: 600, color: 'var(--web-navy)' }}>{a}</p>;
          return <p key={i} style={{ ...BODY, fontSize: 17 }}>{a}</p>;
        })}
      </React.Fragment> : <React.Fragment>
        <p style={{ ...BODY, fontSize: 17 }}>The rest of this article is to be written to the answer-first structure: a direct answer in the first two sentences, then the detail, then what to do next. Section headings are set as real questions, each answered in its opening sentence.</p>
        <div style={{ ...LABEL, marginTop: 32, marginBottom: 8 }}>Section</div>
        <h2 style={{ ...H2, fontSize: 21 }}>What should you do first?</h2>
        <p style={{ ...BODY, fontSize: 17 }}>Draft copy pending. Every factual claim, price and turnaround in the published version must be confirmed before it goes live.</p>
        <blockquote style={{ margin: '28px 0', paddingLeft: 22, borderLeft: '3px solid var(--web-blue)' }}>
          <p style={{ font: '600 21px/1.4 var(--font-core)', color: 'var(--web-navy)', margin: 0 }}>The work must be verified, the certificate must be logged, and the person who did the work must be paid quickly.</p>
        </blockquote>
      </React.Fragment>}
      {plates ? <div style={{ margin: '32px 0' }}>
        <div style={{ ...LABEL, marginBottom: 6 }}>What a serial plate looks like</div>
        <p style={{ ...BODY, marginTop: 0 }}>Plates from Duratherm, Kwikot, Heat Tech, ITS, Supahot and Tecron units we have worked on recently. The plate sits on the end cover or the side of the cylinder, and carries the manufacturer, the capacity and the serial number.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
          {plates.map(([file, caption]) => <figure key={file} style={{ margin: 0 }}>
            <img src={'../../assets/plates/' + file} alt={caption} style={{ width: '100%', height: 130, objectFit: 'cover', display: 'block', borderRadius: 3, border: '1px solid var(--web-grey-100)' }} />
            <figcaption style={{ ...SMALL, marginTop: 6 }}>{caption}</figcaption>
          </figure>)}
        </div>
      </div> : null}
      <div style={{ ...CARD, background: 'var(--web-blue-050)', border: '1px solid var(--web-blue-100)', display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap', margin: '32px 0' }}>
        <div style={{ flex: '1 1 300px' }}>
          <div style={{ ...LABEL, marginBottom: 6 }}>Need help now?</div>
          <p style={{ ...BODY, margin: 0 }}>Message us and we will allocate a verified artisan in your area.</p>
        </div>
        <Button as="a" variant="navy" href={wa('Hi Home Assist, I read your article and I need help with: ', 'BLOG-1')} target="_blank" rel="noopener" iconLeft={<Icon name="message-circle" size={17} color="#fff" />}>WhatsApp us</Button>
      </div>
      {sources ? <div style={{ borderTop: '1px solid var(--web-grey-100)', paddingTop: 24, marginBottom: 8 }}>
        <div style={{ ...LABEL, marginBottom: 12 }}>Sources</div>
        <ul style={{ ...SMALL, margin: 0, paddingLeft: 18, display: 'grid', gap: 6 }}>
          {sources.map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noopener">{label}</a></li>)}
        </ul>
      </div> : null}
    </div>
    <Section tint eyebrow="Related" title="Read next">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {related.map(([c, t]) => <div key={t} style={CARD}>
          <div style={LABEL}>{c}</div>
          <h3 style={{ ...H3, fontSize: 17, marginTop: 8 }}>{t}</h3>
        </div>)}
      </div>
    </Section>
  </main>;
}

Object.assign(window, { BlogPage });
