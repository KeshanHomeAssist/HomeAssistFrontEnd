const LEGAL_WRAP = { maxWidth: 820, margin: '0 auto', padding: '0 40px' };
const LEGAL_H2 = { font: '700 21px/1.3 var(--font-core)', color: 'var(--web-navy)', margin: '40px 0 12px' };
const LEGAL_H3 = { font: '600 17px/1.4 var(--font-core)', color: 'var(--web-navy)', margin: '24px 0 8px' };
const LEGAL_P = { font: '400 var(--web-size-body)/1.65 var(--font-core)', color: 'var(--web-grey-700)', margin: '0 0 14px' };
const LEGAL_UL = { ...LEGAL_P, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 8 };

function LegalHero({ label, title, updated }) {
  return <section style={{ background: 'var(--web-navy)' }}>
    <div style={{ ...LEGAL_WRAP, padding: '56px 40px 48px' }}>
      <div style={{ ...LABEL, color: 'var(--web-blue-300)', marginBottom: 10 }}>{label}</div>
      <h1 style={{ ...H1, color: '#fff', margin: 0 }}>{title}</h1>
      <div style={{ width: 56, height: 3, background: 'var(--web-blue)', margin: '20px 0 0' }}></div>
      <p style={{ ...SMALL, color: '#fff', opacity: .7, marginTop: 20 }}>{updated}</p>
    </div>
  </section>;
}

function LegalNav({ go, current }) {
  const item = id => ({ font: (current === id ? '600' : '400') + ' var(--web-size-small)/1 var(--font-core)', color: current === id ? 'var(--web-navy)' : 'var(--web-grey-500)', textDecoration: 'none', paddingBottom: 4, borderBottom: current === id ? '2px solid var(--web-blue)' : '2px solid transparent' });
  return <div style={{ background: 'var(--web-grey-050)', borderBottom: '1px solid var(--web-grey-100)' }}>
    <div style={{ ...LEGAL_WRAP, padding: '14px 40px', display: 'flex', gap: 20, alignItems: 'center' }}>
      <span style={{ ...LABEL, color: 'var(--web-grey-500)' }}>Legal</span>
      <a href="#/terms" onClick={e => { e.preventDefault(); go('terms'); }} style={item('terms')}>Terms of Use</a>
      <a href="#/privacy-policy" onClick={e => { e.preventDefault(); go('privacy'); }} style={item('privacy')}>Privacy Policy</a>
    </div>
  </div>;
}

function LegalFoot({ go }) {
  return <section style={{ background: 'var(--web-grey-050)', borderTop: '1px solid var(--web-grey-100)' }}>
    <div style={{ ...LEGAL_WRAP, padding: '40px 40px 56px' }}>
      <div style={{ ...LABEL, marginBottom: 10 }}>Questions about this policy</div>
      <p style={{ ...LEGAL_P, marginBottom: 16 }}>Email <a href={'mailto:' + CH.help} style={{ color: 'var(--web-blue)' }}>{CH.help}</a> or write to {CH.address}.</p>
      <Button as="a" variant="navy" href={'mailto:' + CH.help}>Contact Home Assist</Button>
    </div>
  </section>;
}

function PrivacyPage({ go }) {
  return <React.Fragment>
    <LegalHero label="Legal" title="Privacy Policy" updated="Home Assist Technologies (Pty) Ltd · Protection of Personal Information Act, No. 4 of 2013" />
    <LegalNav go={go} current="privacy" />
    <section style={{ background: '#fff' }}>
      <div style={{ ...LEGAL_WRAP, padding: '48px 40px 56px' }}>

        <h2 style={{ ...LEGAL_H2, marginTop: 0 }}>1. Purpose</h2>
        <p style={LEGAL_P}>At Home Assist, we respect your privacy and will take reasonable measures to protect it, as more fully detailed below in this policy.</p>
        <p style={LEGAL_P}>This Privacy Policy explains how we collect and use your personal information in accordance with our Terms of use and Privacy Policy. It describes the processing activities that are carried out by Home Assist in relation to the Services we provide, the purposes for which these activities are performed and the legal bases that we rely upon for these processing activities.</p>

        <h2 style={LEGAL_H2}>2. What information do we collect?</h2>
        <p style={LEGAL_P}>2.1 Here we set out the details of the types of personal information we collect.</p>
        <ul style={LEGAL_UL}>
          <li><strong>Name and surname:</strong> this information is used to identify you.</li>
          <li><strong>Email address:</strong> this is used to enable you to log in to our portal as well as receive ongoing communication and updates from us.</li>
          <li><strong>Physical address:</strong> this is used to indicate at which property the required services should be performed.</li>
          <li>your mobile number;</li>
          <li><strong>Transaction and payment information:</strong> credit/debit card details and bank account details you provide to make payment for the products and services you purchase from us.</li>
          <li><strong>Location information:</strong> your smartphone or computer’s IP address may tell us an approximate location when you connect to our websites but this will be no more precise than the city, state or country you are using your device in.</li>
          <li><strong>Claim history:</strong> as part of our service offering, we rely on information previously collected by us for claims we have serviced.</li>
          <li><strong>Advertising and Direct Marketing preferences and responses:</strong> information about how you respond, or interact with, any Direct Marketing or advertising communications directed to you and your business, including any requests for these communications to stop.</li>
        </ul>
        <p style={{ ...LEGAL_P, marginTop: 14 }}>2.2 You may choose to provide additional personal information to us, in which event you agree to provide accurate and current information, and not to impersonate or misrepresent any person or entity or falsely state or otherwise misrepresent your affiliation with anyone or anything.</p>

        <h2 style={LEGAL_H2}>3. How we collect personal information</h2>
        <p style={LEGAL_P}>When we open and operate an account for you, provide you with our products and services, or communicate with you, we may collect your personal information. We do this in various ways, including:</p>
        <ul style={LEGAL_UL}>
          <li><strong>Insurance providers:</strong> which provide us with information about claims or complaints they receive from you or your representative.</li>
          <li><strong>Brokers:</strong> your duly authorised representative and intermediary between yourself and your insurer.</li>
          <li><strong>Directly from you:</strong> when you provide it to us such as when you sign up for a Home Assist account, use our products and services, or take part in customer surveys, competitions and promotions;</li>
          <li><strong>Communicating with us:</strong> when you communicate with us by email, chat, telephone or any other means, we collect the communication and any data provided in it;</li>
          <li><strong>Our website:</strong> when you use the Home Assist portal we collect information on your activity and other use of your Home Assist account;</li>
          <li><strong>Ratings and feedback:</strong> When you provide a rating or review of a service, you consent to us using that rating or review as we deem fit, including without limitation on the Website, in newsletters or other marketing material.</li>
          <li><strong>Third parties:</strong> when we obtain information from third parties such as identity verification services, credit reference agencies, and regulatory and enforcement agencies.</li>
        </ul>

        <h2 style={LEGAL_H2}>4. How do we use personal information?</h2>
        <p style={LEGAL_P}>We use personal information for one or more of the following purposes:</p>
        <ul style={LEGAL_UL}>
          <li>To assist the Service Provider with providing their Plumbing Services;</li>
          <li>to manage and maintain your profile with us;</li>
          <li>to better manage our business and your relationship with us;</li>
          <li>to improve our products and services, and to develop new products and services;</li>
          <li>to notify you about benefits and changes to the features of our products and services;</li>
          <li>to provide you with personalised advertising and marketing where you have opted in for marketing communication;</li>
          <li>to respond to your enquiries and to resolve disputes.</li>
          <li>Where necessary to protect our legal rights and interest, or the interests of others, we also use personal information in relation to legal claims, compliance, audit, risk management and regulatory functions. We may also use personal information in connection with the acquisition, merger or sale of a business.</li>
        </ul>

        <h2 style={LEGAL_H2}>5. How do we protect your information?</h2>
        <p style={LEGAL_P}>5.1. We will –</p>
        <ul style={LEGAL_UL}>
          <li>treat your personal information as strictly confidential, and will only share your information as set out in this policy;</li>
          <li>take appropriate technical and organisational measures to ensure that your personal information is kept secure and is protected against unauthorised or unlawful processing, accidental loss, destruction or damage, alteration, disclosure or access;</li>
          <li>provide you with access to your personal information to view and/or update personal details;</li>
          <li>promptly notify you if we become aware of any unauthorised use, disclosure or processing of your personal information;</li>
          <li>provide you with reasonable evidence of our compliance with our obligations under this policy on reasonable notice and request; and</li>
          <li>upon your request, promptly return or destroy any and all of your personal information in our possession or control, save for that which we are legally obliged to retain, or that which has been de-identified as defined in the Protection of Personal Information Act, No. 4 of 2013.</li>
        </ul>
        <p style={{ ...LEGAL_P, marginTop: 14 }}>5.2. Home Assist undertakes never to sell or make your personal information available to any third-party other than as provided for in this policy.</p>
        <p style={LEGAL_P}>5.3. Whilst we will do all things reasonably necessary to protect your rights of privacy, we cannot guarantee or accept any liability whatsoever for unauthorised or unlawful disclosures of your personal information, whilst in our possession, made by third-parties who are not subject to our control, unless such disclosure is as a result of our gross negligence.</p>

        <h2 style={LEGAL_H2}>6. How long do we keep personal information</h2>
        <p style={LEGAL_P}>We will keep your personal information for as long as necessary in order to achieve the processing purposes, unless we are required by law to do so or you consent to us retaining such information for a longer period.</p>

        <h2 style={LEGAL_H2}>7. How we share personal information</h2>
        <p style={LEGAL_P}>We share personal information with:</p>
        <ul style={LEGAL_UL}>
          <li><strong>Staff:</strong> any person that works for us or for one of our group companies;</li>
          <li><strong>Affiliated/Related Companies:</strong> any entity that is regarded as a related company as defined in terms of section 2 of the Companies Act, No. 71 of 2008, as amended;</li>
          <li><strong>Financial and other institutions:</strong> which we partner with to provide our products and services;</li>
          <li><strong>Service providers:</strong> companies and organisations that provide services to us, including in relation to claims resolution, technical infrastructure, marketing and analytics, and web and app development;</li>
          <li><strong>Professionals:</strong> our professional advisers, consultants and other similar services.</li>
        </ul>
        <p style={{ ...LEGAL_P, marginTop: 14 }}>We will otherwise treat your personal information as private and confidential and will not share it with other parties except:</p>
        <ul style={LEGAL_UL}>
          <li>where you have given permission;</li>
          <li>where we believe it is reasonably necessary to comply with any law, regulation, legal process or governmental request, to enforce our Terms of use or other agreements, or to protect the rights, property, or safety of us, our customers or others; or</li>
          <li>where we may transfer rights and obligations pursuant to our agreement with you.</li>
        </ul>
        <p style={{ ...LEGAL_P, marginTop: 14 }}>We will ensure that all of our employees, third-party service providers, divisions, affiliates and partners (including their employees and third-party service providers) having access to your personal information are bound by appropriate and legally binding confidentiality obligations in relation to your personal information.</p>

        <h2 style={LEGAL_H2}>8. Your right to access, update, or remove your personal information</h2>
        <p style={LEGAL_P}>8.1. Most of the data Home Assist collects, and the ways in which we use it, are necessary for us to provide and improve the services we provide to you, or to comply with our obligations.</p>
        <p style={LEGAL_P}>8.2. You have the right to object to the processing of your personal information or to request that we:</p>
        <ul style={LEGAL_UL}>
          <li>provide you with a copy of your personal information; or</li>
          <li>correct, delete, or restrict the processing of your personal information.</li>
        </ul>
        <p style={{ ...LEGAL_P, marginTop: 14 }}>8.3. Please get in touch with us if you would like to exercise any of the above rights. These rights are limited in some situations, such as where we are legally required to process your data, and may limit your ability to use our products and services.</p>

        <h2 style={LEGAL_H2}>9. Data breaches</h2>
        <p style={LEGAL_P}>We will notify you and the relevant supervisory authority as soon as we become aware of any data breach that is likely to result in a risk to your rights and freedoms.</p>

        <h2 style={LEGAL_H2}>10. Revisions to this Privacy policy</h2>
        <p style={LEGAL_P}>We may amend this Privacy policy from time to time. You should visit the website regularly to check when this Privacy policy was last updated and to review the current policy. We will do our best to notify you of any substantive amendments to the Privacy policy and any such notice will be posted on our application or our website, or sent by email to the address associated with your profile.</p>
      </div>
    </section>
    <LegalFoot go={go} />
  </React.Fragment>;
}

function TermsPage({ go }) {
  return <React.Fragment>
    <LegalHero label="Legal" title="General Terms of Use" updated="Home Assist Technologies (Pty) Ltd · Read together with the Privacy Policy" />
    <LegalNav go={go} current="terms" />
    <section style={{ background: '#fff' }}>
      <div style={{ ...LEGAL_WRAP, padding: '48px 40px 56px' }}>

        <div style={{ border: '1px solid var(--web-blue-100)', background: 'var(--web-blue-050)', borderRadius: 4, padding: 18, marginBottom: 32 }}>
          <div style={{ ...LABEL, marginBottom: 8 }}>Content status</div>
          <p style={{ ...LEGAL_P, margin: 0 }}>The clauses below are the published Terms of Use as retrieved from homeassist.co.za/legal. The full signed clause set (payment, cancellation, warranty, indemnity, dispute resolution, governing law) was not retrievable — paste the complete legal text over this page before publishing. <Confirm>full clause set</Confirm></p>
        </div>

        <h2 style={{ ...LEGAL_H2, marginTop: 0 }}>1. Acceptance of Terms</h2>
        <p style={LEGAL_P}>Welcome to HomeAssist. The following Terms and Conditions and the Privacy Policy (together the “Terms”) apply to any person that makes use of the Plumbing Services and the Incident Management Services (as defined below) (together the “Services”).</p>
        <p style={LEGAL_P}>The Terms constitute a legally binding agreement between you and HomeAssist Technology Solutions Proprietary Limited which is a company incorporated under the laws of South Africa. In these Terms, “we”, “us” or “our” refers to Home Assist Technologies Proprietary Limited and “you” or “your” refers to the person or entity that wishes to use any of the services.</p>
        <p style={LEGAL_P}>We reserve the right to modify the Terms or policies relating to the Services at any time, effective upon posting an updated version of the Terms on www.homeassist.co.za. Continued use of the Service or Software after any such changes shall constitute your consent to such changes.</p>
        <p style={LEGAL_P}>Any policy referred to in these Terms shall be incorporated in the Terms by reference.</p>

        <h2 style={LEGAL_H2}>2. The Services</h2>
        <p style={LEGAL_P}>We provide a communications platform that enables the connection of individuals who require plumbing and related services in relation to an insurance claim with service providers who provide plumbing and related services (“Incident Management Services”).</p>
        <p style={LEGAL_P}>We check the backgrounds of service providers via third party background check services; however, we do not guarantee or warrant, and make no representations regarding, the reliability, quality or suitability of our plumbing service providers.</p>
        <p style={LEGAL_P}>When interacting with the plumbing service providers you should exercise caution and common sense to protect your personal safety and property, just as you would when interacting with other persons whom you don’t know.</p>
        <p style={LEGAL_P}>By using the Services, you agree to hold us free from any liability or damage that might arise out of the Service provided to you. Neither us nor our affiliates or licensors are responsible for the conduct, whether online or offline, of any user of the Service.</p>

        <h2 style={LEGAL_H2}>3. The Plumbing Services</h2>
        <p style={LEGAL_P}>The Service Provider will provide the Plumbing Services using reasonable skill and care and will be of a quality that keeps to generally accepted industry standards.</p>
        <p style={LEGAL_P}>The Plumbing Services includes removing all non dangerous materials, including your existing parts or equipment and all waste and packaging no longer needed on the premises for recycling (where applicable). The Service Provider will inform you when they plan not to remove any materials/equipment within the premises.</p>
        <p style={LEGAL_P}>We accept no legal responsibility for any structural issues that arise at the premises after the additional services. <Confirm>remainder of clause 3</Confirm></p>

        <h2 style={LEGAL_H2}>4. Privacy</h2>
        <p style={LEGAL_P}>Our collection and use of your personal information is governed by our <a href="#/privacy-policy" onClick={e => { e.preventDefault(); go('privacy'); }} style={{ color: 'var(--web-blue)' }}>Privacy Policy</a>, which forms part of these Terms.</p>
      </div>
    </section>
    <LegalFoot go={go} />
  </React.Fragment>;
}

Object.assign(window, { PrivacyPage, TermsPage });
