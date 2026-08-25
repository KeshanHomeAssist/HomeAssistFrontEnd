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
      <a href="#/complaints" onClick={e => { e.preventDefault(); go('complaints'); }} style={item('complaints')}>Complaints</a>
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

        <h2 style={{ ...LEGAL_H2, marginTop: 0 }}>1. Acceptance of Terms</h2>
        <p style={LEGAL_P}>Welcome to HomeAssist. The following Terms and Conditions and the Privacy Policy (together the “Terms”) apply to any person that makes use of the Plumbing Services and the Incident Management Services (as defined below)(together the “Services”).</p>
        <p style={LEGAL_P}>The Terms constitute a legally binding agreement between you and HomeAssist Technology Solutions Proprietary Limited which is a company incorporated under the laws of South Africa.</p>
        <p style={LEGAL_P}>In these Terms, “we” “us” or “our” refers to Home Assist Technologies Proprietary Limited and “you” or “your” refers to the person or entity that wishes to use any of the services.</p>
        <p style={LEGAL_P}>We reserve the right to modify the Terms or policies relating to the Services at any time, effective upon posting an updated version of the Terms on <a href="https://www.homeassist.co.za" style={{ color: 'var(--web-blue)' }}>www.homeassist.co.za</a>. Continued use of the Service or Software after any such changes shall constitute your consent to such changes. Any policy referred to in these Terms shall be incorporated in the Terms by reference.</p>

        <h2 style={LEGAL_H2}>2. Home Assist is a Platform</h2>
        <p style={LEGAL_P}>We provide a communications platform that enables the connection of individuals who require plumbing and related services in relation to an insurance claim with service providers who provide plumbing and related services (“Incident Management Services”). We check the backgrounds of service providers via third party background check services; however, we do not guarantee or warrant, and make no representations regarding, the reliability, quality or suitability of our plumbing service providers. When interacting with the plumbing service providers you should exercise caution and common sense to protect your personal safety and property, just as you would when interacting with other persons whom you don’t know. By using the Services, you agree to hold us free from any liability or damage that might arise out of the Service provided to you. Neither us nor our affiliates or licensors are responsible for the conduct, whether online or offline, of any user of the Service. We and our affiliates and/or licensors will not be liable for any claim, injury and/or damage arising in connection with your use of the Services.</p>

        <h2 style={LEGAL_H2}>3. Plumbing Services</h2>
        <p style={LEGAL_P}>Where we describe Service Providers as “vetted”, we are confirming only that we have carried out certain checks as specified on our Website at the time you make a booking and that those checks did not reveal any cause for concern. You acknowledge that in carrying out these checks we are reliant on information supplied by third parties. We cannot guarantee that that information is accurate.</p>
        <p style={LEGAL_P}>The supply of Services:</p>
        <ul style={LEGAL_UL}>
          <li>Your order is an offer that is only accepted when we send you an email, whatsapp message, sms or call you on behalf of one of the appointed Service Providers confirming your order.</li>
          <li>You agree to treat Service Providers lawfully and courteously. You agree to provide a safe and appropriate working environment for Service Providers in compliance with all applicable laws and regulations and that you will provide reasonable co-operation to Service Providers to enable them to supply Services.</li>
          <li>You agree to communicate any complaints to us and not the Service Provider. You agree to comply with our complaints and other policies on our Website, as may be amended from time to time.</li>
          <li>You acknowledge that we, in our sole discretion, may assign a different Plumbing Service Provider to perform the Plumbing Services where the initially assigned Plumbing Service is unavailable due to illness, vacation, inadequate service or is no longer a recognised HomeAssist Plumbing Service Provider.</li>
        </ul>

        <h2 style={LEGAL_H2}>4. Disclaimer</h2>
        <p style={LEGAL_P}>WE ARE NOT A PLUMBING SERVICE PROVIDER. WE DO NOT PROVIDE OR OFFER THE PLUMBING SERVICES OR ACT IN ANY WAY AS A PLUMBING SERVICE PROVIDER. WE HAVE NO RESPONSIBILITY OR LIABILITY FOR ANY PLUMBING SERVICES PROVIDED TO YOU BY A TECHNICIAN. YOU ACKNOWLEDGE THAT YOUR ABILITY TO OBTAIN THE PLUMBING SERVICES THROUGH THE USE OF OUR INCIDENT MANAGEMENT SERVICES DOES NOT ESTABLISH US AS A PROVIDER OF PLUMBING SERVICES. ANY LIABILITY ARISING OUT OF THE PLUMBING SERVICE WILL BE SOLELY THE RESPONSIBILITY OF THE PLUMBING SERVICE PROVIDER.</p>

        <h2 style={LEGAL_H2}>5. Use of the Plumbing Services</h2>
        <p style={LEGAL_P}>Where we describe Service Providers as “vetted”, we are confirming only that we have carried out certain checks as specified on our Website at the time you make a booking and that those checks did not reveal any cause for concern. You acknowledge that in carrying out these checks we are reliant on information supplied by third parties. We cannot guarantee that that information is accurate.</p>
        <p style={LEGAL_P}>The supply of Services:</p>
        <ul style={LEGAL_UL}>
          <li>Your order is an offer that is only accepted when we send you an email, whatsapp message, sms or call you on behalf of one of the appointed Service Providers confirming your order.</li>
          <li>You agree to treat Service Providers lawfully and courteously. You agree to provide a safe and appropriate working environment for Service Providers in compliance with all applicable laws and regulations and that you will provide reasonable co-operation to Service Providers to enable them to supply Services.</li>
          <li>You agree to communicate any complaints to us and not the Service Provider. You agree to comply with our complaints and other policies on our Website, as may be amended from time to time.</li>
          <li>You acknowledge that we, in our sole discretion, may assign a different Plumbing Service Provider to perform the Plumbing Services where the initially assigned Plumbing Service is unavailable due to illness, vacation, inadequate service or is no longer a recognised HomeAssist Plumbing Service Provider.</li>
        </ul>

        <h2 style={LEGAL_H2}>6. What’s included in the Plumbing Service</h2>
        <p style={LEGAL_P}>The Plumbing Service Provider will only perform the Plumbing Services which are expressly instructed by the Insurer, Manufacturer, or by you as the case may be, in accordance with these Terms. For the sake of clarity we do not offer private work at this point in time and any private work agreed to between yourself and the Service Provider, save for the Additional Work defined in clause 7 below.</p>

        <h2 style={LEGAL_H2}>7. What’s not included in all Plumbing Services</h2>
        <p style={LEGAL_P}>The Plumbing Service does not include the cost of any extra work required to make your system compliant that may need to be done in order to complete the Plumbing Services (“Additional Work”). If extra work is required the Service Provider will explain what is needed and why. The Service Provider will also confirm if they are able to provide the Additional Work.</p>
        <p style={LEGAL_P}>If the Service Provider is able to provide the Additional Work, they will provide you with a written quote. The Service Provider will only commence work once you have accepted the quote for Additional Work and have made payment in accordance with the Payment Policy outlined below.</p>
        <p style={LEGAL_P}>You hereby acknowledge that where Additional Work is required, the Service Provider will be unable to finish the Plumbing Services. If you do not agree to the extra work being carried out either by us, or another organisation, this agreement will be cancelled and you will only be responsible for our costs incurred up to the date of cancellation.</p>

        <h2 style={LEGAL_H2}>8. Gaining access to your premises</h2>
        <p style={LEGAL_P}>You need to give the Service Provider reasonable access for the Plumbing Services to be performed. The Service Provider will only provide the Plumbing Services if there is someone aged 18 or over at the Property.</p>
        <p style={LEGAL_P}>If the Service provider cannot gain access, they will not be able to carry out the Plumbing Services and you may be charged an aborted site fee by the Service Provider.</p>
        <p style={LEGAL_P}>The Service Provider will need to make several visits to your premises and waste valuable time if you do not provide access, and it may affect the Service Provider’s ability and/or legal responsibility to complete the Plumbing Services. If you refuse reasonable access, if the Service Provider cannot gain access, or if the Service Provider cannot arrange another suitable appointment with you, the Service Provider may refuse to further attend to the Plumbing Services required.</p>

        <h2 style={LEGAL_H2}>9. Inspection</h2>
        <p style={LEGAL_P}>Once you have given the Service Provider access to your premises they will conduct a careful examination of what needs to be done (the “First Inspection”). Once the First Inspection is complete the Service Provider will report back to you on the following information, to the extent relevant:</p>
        <ul style={LEGAL_UL}>
          <li>Whether or not your current geyser is compliant with SANS standards and/or IOPSA Standards;</li>
          <li>Whether or not components of your geyser are in warranty or not;</li>
          <li>The current temperature of your water heating system;</li>
          <li>If the trap door, or other circumstances, prevent the Service Provider from removing the geyser from your premises;</li>
          <li>Establish if there is any health and safety risk in accordance with clause 10 below;</li>
          <li>Where the leak is concealed, an estimation of the amount of damage etc required in order to access the leak;</li>
          <li>The extent of corrosion on the pipes;</li>
          <li>If a pipe reroute is required;</li>
          <li>Whether any kind of consent form is required to be signed in order for us to work on the premises; and</li>
          <li>Remind you to pay the excess</li>
        </ul>

        <h2 style={LEGAL_H2}>10. Health &amp; Safety</h2>
        <p style={LEGAL_P}>The Service Provider will not begin or continue with the Plumbing Services where the Service Provider reasonably considers that there is a health and safety risk, including but not limited to the presence of:</p>
        <ul style={LEGAL_UL}>
          <li>dangerous or hazardous materials;</li>
          <li>Infestations; or</li>
          <li>harassment of Service Providers or their staff (including verbal and/or physical abuse).</li>
        </ul>
        <p style={{ ...LEGAL_P, marginTop: 14 }}>The Service Provider will not start work again until there is no longer a health and safety risk and may (at our sole discretion) cancel this agreement.</p>

        <h2 style={LEGAL_H2}>11. Warranty</h2>
        <h3 style={LEGAL_H3}>11.1. Workmanship Conditional Warranty</h3>
        <p style={LEGAL_P}>There is a one (1) year workmanship warranty on the Services performed by the Service Provider.</p>
        <p style={LEGAL_P}>11.2 Poor functioning products must be reported within 1 month from the installation</p>
        <p style={LEGAL_P}>11.3 Should a different service provider other than the service provider who signed off the job will void the workmanship warranty within the 1 year period, Home Assist reserves the right to make review this void decision in the case where the home owner / client providers additional evindence</p>
        <p style={LEGAL_P}>11.4. Manufacturer Warranty — relates to the manufacturers warranty of the products that are installed. Home Assist commits to storing product details to log a warranty with the manufacture</p>
        <p style={LEGAL_P}>11.5 Home Assist commits to install products inline with manufacture guidelines, notwithstanding clause 11.3, Home Assist will endeavor to bring the installation up to the manufacture standards in order to re-instate the warranty.</p>

        <h2 style={LEGAL_H2}>12. Payments</h2>
        <h3 style={LEGAL_H3}>12.1. Excess</h3>
        <p style={LEGAL_P}>The message sent to you, referred to in clause 5, will show how much excess or fixed fee you’ve agreed to pay when the Service Provider performs the Plumbing Services. You are liable to pay this amount prior to the Service Provider performing the Plumbing Services.</p>
        <h3 style={LEGAL_H3}>12.2. Cash Settlement</h3>
        <p style={LEGAL_P}>We require full payment upfront.</p>
        <h3 style={LEGAL_H3}>12.3. Additional Work required for compliance</h3>

        <h2 style={LEGAL_H2}>13. Spare Parts</h2>
        <p style={LEGAL_P}>If our Service Provider does not carry the parts needed on the day of your appointment, we will try to get hold of the items as soon as we can. If not, we will do all we reasonably can to find and install parts from our approved suppliers. We may use other approved parts or parts that have been reconditioned by the original manufacturer or approved third parties.</p>

        <h2 style={LEGAL_H2}>14. Replacement Parts</h2>
        <p style={LEGAL_P}>We will try to provide replacement parts with similar functionality but not necessarily the same features or an identical make and model or type of fitting. If we can’t get hold of the parts we may need to cancel your agreement (or part of it).</p>

        <h2 style={LEGAL_H2}>15. Care and skill</h2>
        <p style={LEGAL_P}>The Service Provider will provide the Plumbing Services using reasonable skill and care and will be of a quality that keeps to generally accepted industry standards</p>

        <h2 style={LEGAL_H2}>16. Removing waste</h2>
        <p style={LEGAL_P}>The Plumbing Services includes removing all non dangerous materials, including your existing parts or equipment and all waste and packaging no longer needed on the premises for recycling (where applicable). The Service Provider will inform you when they plan not to remove any materials/equipment within the premises. We accept no legal responsibility for any structural issues that arise at the premises after the additional services or warranty services are complete, unless these issues arise as a direct result of our negligence.</p>

        <h2 style={LEGAL_H2}>17. Complaints</h2>
        <p style={LEGAL_P}>You agree to handle any complaint in accordance with our Complaints Policy.</p>

        <h2 style={LEGAL_H2}>18. General</h2>
        <h3 style={LEGAL_H3}>18.1. Functioning of our Website</h3>
        <ul style={LEGAL_UL}>
          <li>We cannot guarantee that the HomeAssist Website (<a href="https://www.homeassist.co.za" style={{ color: 'var(--web-blue)' }}>www.homeassist.co.za</a>) will be uninterrupted or error-free.</li>
          <li>We are entitled, without notice and without liability, to suspend the Website for repair, maintenance, improvement or other technical reason.</li>
        </ul>
        <h3 style={LEGAL_H3}>18.2. Liability</h3>
        <ul style={LEGAL_UL}>
          <li>Nothing in this agreement in any way limits or excludes our liability for negligence causing death or personal injury or for fraudulent misrepresentation or for anything that may not legally be excluded or limited.</li>
          <li>You must give us a reasonable opportunity to remedy any matter for which we are potentially liable before you incur any costs remedying the matter yourself.</li>
        </ul>
        <p style={{ ...LEGAL_P, marginTop: 14 }}>We shall not be liable for any loss or damage caused by us or our employees or agents in circumstances where:</p>
        <ul style={LEGAL_UL}>
          <li>There is no breach of a legal duty of care owed to you by us or by any of our employees or agents;</li>
          <li>Such loss or damage was not reasonably foreseeable by both parties;</li>
          <li>Such loss or damage is caused by you, for example by not complying with this agreement; or</li>
          <li>You will be liable for any reasonably foreseeable loss or damage we suffer arising from your breach of this agreement or misuse of our Website (subject of course to our obligation to mitigate any losses).</li>
        </ul>

        <h2 style={LEGAL_H2}>19. Promotions</h2>
        <p style={LEGAL_P}>From time to time we will run promotions. For each promotion there will be specific Terms and Conditions.</p>

        <h2 style={LEGAL_H2}>20. Intellectual Property Ownership</h2>
        <p style={LEGAL_P}>We alone shall own all right, title and interest, including all related intellectual property rights, in and to the software and Services. To the extent you provide any suggestions, ideas, enhancement requests, feedback, recommendations or other information regarding the Service or software, you hereby assign to us all right, title and interest thereto. These Terms are not a sale and does not convey to you any rights of ownership in or related to the software or the Service, or any intellectual property rights owned by Us. Our name, logo, and the product names associated with the software and Services are trademarks of Ours and no right or license is granted to use them.</p>

        <h2 style={LEGAL_H2}>21. Governing Law</h2>
        <p style={LEGAL_P}>Your agreement is bound by the laws of South Africa.</p>

        <p style={{ ...LEGAL_P, marginTop: 32 }}>Our collection and use of your personal information is governed by our <a href="#/privacy-policy" onClick={e => { e.preventDefault(); go('privacy'); }} style={{ color: 'var(--web-blue)' }}>Privacy Policy</a>, which forms part of these Terms.</p>
      </div>
    </section>
    <LegalFoot go={go} />
  </React.Fragment>;
}

function ComplaintsPage({ go }) {
  const chan = { border: '1px solid var(--web-grey-100)', borderRadius: 4, padding: 20, background: 'var(--web-grey-050)' };
  return <React.Fragment>
    <LegalHero label="Legal" title="Complaints Policy" updated="Home Assist Technologies (Pty) Ltd · Version 3" />
    <LegalNav go={go} current="complaints" />
    <section style={{ background: '#fff' }}>
      <div style={{ ...LEGAL_WRAP, padding: '48px 40px 56px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 36 }}>
          <div style={chan}>
            <div style={{ ...LABEL, marginBottom: 6 }}>Hotline</div>
            <a href={'tel:' + CH.phoneTel} style={{ font: '700 20px/1.2 var(--font-core)', color: 'var(--web-navy)', textDecoration: 'none' }}>{CH.phone}</a>
          </div>
          <div style={chan}>
            <div style={{ ...LABEL, marginBottom: 6 }}>Email</div>
            <a href={mailtoLink(CH.complaints, 'Complaint [Claim Number]')} style={{ font: '600 15px/1.4 var(--font-core)', color: 'var(--web-blue)', textDecoration: 'none', wordBreak: 'break-all' }}>{CH.complaints}</a>
            <p style={{ ...SMALL, color: 'var(--web-grey-500)', margin: '6px 0 0' }}>Copy {CH.help}. Subject line: Complaint [Claim Number]</p>
          </div>
          <div style={chan}>
            <div style={{ ...LABEL, marginBottom: 6 }}>We reply within</div>
            <div style={{ font: '700 20px/1.2 var(--font-core)', color: 'var(--web-navy)' }}>24 hours</div>
            <p style={{ ...SMALL, color: 'var(--web-grey-500)', margin: '6px 0 0' }}>Written confirmation of receipt. Resolution within one week.</p>
          </div>
        </div>

        <h2 style={{ ...LEGAL_H2, marginTop: 0 }}>1. Purpose</h2>
        <p style={LEGAL_P}>Our mission at Home Assist is to provide the best possible customer service. We take all complaints seriously and strive to resolve them as quickly as possible. This Complaints Policy sets out what you should do if you have a complaint and what you can expect from us.</p>

        <h2 style={LEGAL_H2}>2. Scope</h2>
        <p style={LEGAL_P}>This policy is applicable to all Home Assist registered Service Providers, Technicians, homeowners, suppliers, brokers and insurers.</p>

        <h2 style={LEGAL_H2}>3. How to contact us</h2>
        <p style={LEGAL_P}>If you wish to submit a complaint about the service of a technician, please contact us on our hotline number <a href={'tel:' + CH.phoneTel} style={{ color: 'var(--web-blue)' }}>{CH.phone}</a>.</p>
        <p style={LEGAL_P}>Alternatively you can submit your complaint by email to <a href={mailtoLink(CH.complaints, 'Complaint [Claim Number]')} style={{ color: 'var(--web-blue)' }}>{CH.complaints}</a>, copying <a href={'mailto:' + CH.help} style={{ color: 'var(--web-blue)' }}>{CH.help}</a>, with the subject line <strong>Complaint [Claim Number]</strong>.</p>

        <h2 style={LEGAL_H2}>4. Complaints procedure</h2>
        <p style={LEGAL_P}>This procedure will be followed in all instances of complaints except for those relating to the compliance of the work performed, as set out in clause 5.</p>
        <ul style={LEGAL_UL}>
          <li>4.1 When we receive your complaint, we will send you written confirmation that we have received it. If you do not receive written confirmation from our offices within 24 hours, please follow up.</li>
          <li>4.2 As soon as the complaint is received by our offices we begin our investigation. This is likely to involve examining the claim record to establish the sequence of relevant events and related correspondence, and interviewing the relevant persons for clarification on the issue.</li>
          <li>4.3 At all times Management is included in correspondence.</li>
          <li>4.4 We will then revert to you and all other parties involved in the complaint by means of a resolution. This resolution will set out our findings and will include documentary evidence where applicable.</li>
        </ul>

        <h2 style={LEGAL_H2}>5. PIRB independent audit</h2>
        <p style={LEGAL_P}>In instances where the complaint relates to the compliance of the work performed with the national plumbing standards and/or by-laws, we will request that the Plumbing Industry Registration Board (“PIRB”), our regulatory body, conduct an independent audit of the work performed by the Service Provider.</p>
        <p style={LEGAL_P}>Upon completion of their independent audit, where a compliance issue has been found, PIRB will issue a rectification notice to the Service Provider for the transgression to be addressed within a stipulated period.</p>
        <p style={LEGAL_P}>If the Service Provider fails to address the transgression and does not lodge a formal dispute with PIRB, the Service Provider will be requested to appear before a Review Committee hearing, which could result in his or her licence being suspended.</p>

        <h2 style={LEGAL_H2}>6. Workmanship warranty process</h2>
        <ul style={LEGAL_UL}>
          <li>6.1 The client or the plumber should report that they are not happy with the installation as soon as possible. Failure to do so could result in the workmanship warranty becoming invalid.</li>
          <li>6.2 Home Assist records the report on a workmanship warranty form. Once the problem is clear, a workmanship warranty case is logged and provided to the Service Provider in writing and telephonically.</li>
          <li>6.3 The Service Provider must return within 24 hours of notification to photograph the problem and report the solution or way forward to Home Assist.</li>
          <li>6.4 Home Assist will reach an agreement with the client and the Service Provider to implement a remedy for the installation defect, or provide communication around the problem reported.</li>
          <li>6.5 Home Assist will provide the terms and conditions of the one-year workmanship warranty, which include the following.
            <ul style={{ ...LEGAL_UL, marginTop: 8 }}>
              <li>6.5.1 If the customer does not want the same Service Provider back, they must first give Home Assist the opportunity to appoint a third-party Service Provider or an independent auditor (PIRB) to visit the home.</li>
              <li>6.5.2 Where a PIRB auditor is sent out, Home Assist requires a list of the allegations of installation non-compliance from the client. Home Assist staff will assist in this regard.</li>
              <li>6.5.3 Where the client does not allow Home Assist to return in any form and then takes steps to remedy the problem on their own, the workmanship warranty will no longer be in effect and neither the Service Provider nor Home Assist can be held responsible for any further costs or repairs incurred by the client.</li>
              <li>6.5.4 As a courtesy, Home Assist will consider compensation prior to the event if proper evidence is provided in the form of photographs. It is important to document all issues photographically and email them to Home Assist as the issues are found.</li>
            </ul>
          </li>
          <li>6.6 Where a third-party Service Provider is appointed by Home Assist, that Service Provider must, within 24 hours of notification, photograph and report on the problem from site and supply a written itemised quote for repairs.</li>
          <li>6.7 Where a third-party Service Provider fulfils repairs, including compliance-related upgrades, these costs are for the original Service Provider’s account.</li>
          <li>6.8 The initial Service Provider will cancel the certificate of compliance, as a new certificate comes into effect. Work already done may be used as an offset for repairs and remedies.</li>
          <li>6.9 Home Assist reserves the right to take further legal action against any party who makes misrepresentations before, during or after the workmanship warranty process.</li>
        </ul>

        <h2 style={LEGAL_H2}>7. Turnaround times</h2>
        <ul style={LEGAL_UL}>
          <li>7.1 Service Providers are required to attend to any complaint received by Home Assist, whether verbally or by email, in respect of any job performed, and must revert with an outcome and solution within one business day from the time we forward the complaint.</li>
          <li>7.2 On our end, we commit to providing you with a resolution to your complaint within one week of submission. We believe most complaints can be resolved long before this, but this gives us sufficient time to conduct a proper investigation and obtain follow-up information where necessary.</li>
        </ul>

        <p style={{ ...SMALL, color: 'var(--web-grey-500)', marginTop: 32 }}>We may record calls to help improve our service to you.</p>
        <p style={{ ...SMALL, color: 'var(--web-grey-500)', marginTop: 8 }}>Home Assist is a trading name of Home Assist Technologies Proprietary Limited, registered in South Africa (No. 2016/243716/07). Registered office: {CH.address}.</p>
      </div>
    </section>
    <LegalFoot go={go} />
  </React.Fragment>;
}

Object.assign(window, { PrivacyPage, TermsPage, ComplaintsPage });
