#!/usr/bin/env python3
"""Wire the new /rewards page into the site (19 October 2026).

Run once from the repo root:   python3 scripts/patch-2026-10-19-rewards.py

Safe to run on a working copy with other uncommitted changes: it only inserts
lines next to fixed anchors, never rewrites whole files, and does nothing to a
file that already has the change. It stops without writing anything if an
anchor is missing.

Touches: scripts/adapt-pages.mjs, src/App.jsx, src/seo.js,
         design-export/website/Chrome.jsx (page ref + footer link).
New files it expects alongside it: design-export/website/RewardsPage.jsx and
public/assets/illustrations/reward-{solar,smart-meter,geyserwise}.webp
"""
import sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent

SEO_ENTRY = """  '/rewards': {
    title: 'Home Assist Rewards | Win a Solar Geyser Upgrade',
    description:
      'Every job Home Assist completes earns an entry. Win a solar geyser upgrade, a smart water meter or a Geyserwise Max. Entries close 15 January 2027. Terms apply.',
    schema: [organization],
  },
"""

EDITS = [
    ('scripts/adapt-pages.mjs',
     "  'SmartMeteringPage.jsx': ['SmartMeteringPage'],\n",
     "  'RewardsPage.jsx': ['RewardsPage'],\n", 'after', "'RewardsPage.jsx'"),
    ('src/App.jsx',
     "import { SmartMeteringPage } from './site/SmartMeteringPage.jsx';\n",
     "import { RewardsPage } from './site/RewardsPage.jsx';\n", 'after', "RewardsPage } from"),
    ('src/App.jsx',
     "  smartMetering: '/smart-homes/smart-metering',\n",
     "  rewards: '/rewards',\n", 'after', "rewards: '/rewards'"),
    ('src/App.jsx',
     '        <Route path="/smart-homes/smart-metering" element={<SmartMeteringPage go={go} />} />\n',
     '        <Route path="/rewards" element={<RewardsPage go={go} />} />\n', 'after', 'path="/rewards"'),
    ('src/seo.js',
     "  '/leak-detection': {\n",
     SEO_ENTRY, 'before', "'/rewards': {"),
    ('design-export/website/Chrome.jsx',
     "  smartMetering: 'METER',\n",
     "  rewards: 'REWARDS',\n", 'after', "rewards: 'REWARDS'"),
    ('design-export/website/Chrome.jsx',
     "\n      </div>\n      <div style={col}><div style={head}>For business</div>",
     "\n        <a href=\"#/rewards\" onClick={e => { e.preventDefault(); go('rewards'); }} style={link}>Home Assist Rewards</a>",
     'before', 'go(\'rewards\')'),
]

pending = {}
for path, anchor, insert, where, done_marker in EDITS:
    p = ROOT / path
    text = pending.get(path) or p.read_text(encoding='utf8')
    if done_marker in text:
        print(f'already done  {path}  ({done_marker})')
        pending[path] = text
        continue
    if text.count(anchor) != 1:
        sys.exit(f'STOP: anchor not found exactly once in {path}:\n{anchor!r}\nNothing was written.')
    text = text.replace(anchor, anchor + insert if where == 'after' else insert + anchor)
    pending[path] = text
    print(f'patched       {path}  ({done_marker})')

for f in ['design-export/website/RewardsPage.jsx',
          'public/assets/illustrations/reward-solar.webp',
          'public/assets/illustrations/reward-smart-meter.webp',
          'public/assets/illustrations/reward-geyserwise.webp']:
    if not (ROOT / f).exists():
        sys.exit(f'STOP: {f} is missing. Copy it in first. Nothing was written.')

for path, text in pending.items():
    (ROOT / path).write_text(text, encoding='utf8')
print('done — now run: npm run build && npm run verify')
