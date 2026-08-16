#!/usr/bin/env python3
"""Third change set, 16 August: the mutual NDA assurance on /insurers."""
import sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
W = ROOT / 'design-export' / 'website'

def edit(path, old, new):
    p = W / path
    s = p.read_text()
    if s.count(old) != 1:
        sys.exit(f"ABORT {path}: found {s.count(old)} of:\n{old[:200]}")
    p.write_text(s.replace(old, new)); print(f"  {path}")

print("InsurersPage.jsx")

# Reassurance at the point of hesitation — the gate.
edit('InsurersPage.jsx',
"""      <p style={{ ...SMALL, marginTop: 16 }}>We use it to follow up on this enquiry only. You are not added to any list unless you tick the box.</p>""",
"""      <p style={{ ...SMALL, marginTop: 16 }}>We use it to follow up on this enquiry only. You are not added to any list unless you tick the box.</p>
      <p style={{ ...SMALL, marginTop: 8 }}>If we take it further, a mutual NDA comes first. Anything you send is used only to produce your settlement report, and deleted in full if you are not happy with it.</p>""")

# And in full, immediately above the "send us a sample of settled claims" ask.
edit('InsurersPage.jsx',
"""            <p style={{ ...BODY, margin: 0 }}>Reconciliation and float reporting are retrievable from the portal at any time.</p>
          </div>
        </div>
      </div>
    </Section>""",
"""            <p style={{ ...BODY, margin: 0 }}>Reconciliation and float reporting are retrievable from the portal at any time.</p>
          </div>
        </div>
        <div style={{ ...CARD, borderLeft: '3px solid var(--web-blue)' }}>
          <div style={{ ...LABEL, marginBottom: 10 }}>Your data</div>
          <h3 style={H3}>A mutual NDA before anything is shared</h3>
          <p style={BODY}>Before you send us a single claim file, Home Assist provides our standard mutual non-disclosure agreement. Your data is used for one purpose: producing your settlement report.</p>
          <p style={{ ...BODY, margin: 0 }}>If you are not happy with what we come back with, we delete everything you provided, in full.</p>
        </div>
      </div>
    </Section>""")

print("done")
