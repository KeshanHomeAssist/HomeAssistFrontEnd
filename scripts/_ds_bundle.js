/* @ds-bundle: {"format":4,"namespace":"HomeAssistDesignSystem_cf0a2b","components":[{"name":"GradientBand","sourcePath":"components/brand/GradientBand.jsx"},{"name":"IllustrationPanel","sourcePath":"components/brand/IllustrationPanel.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"MetaField","sourcePath":"components/core/MetaField.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"ProgressMeter","sourcePath":"components/feedback/ProgressMeter.jsx"},{"name":"StatTile","sourcePath":"components/feedback/StatTile.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"},{"name":"MetricRow","sourcePath":"components/perform/MetricRow.jsx"},{"name":"TierBadge","sourcePath":"components/perform/TierBadge.jsx"}],"sourceHashes":{"components/brand/GradientBand.jsx":"1927641d088d","components/brand/IllustrationPanel.jsx":"86427a4e711c","components/brand/Logo.jsx":"d9357b8defe8","components/core/Badge.jsx":"071c295962f4","components/core/Button.jsx":"8a4a8a6b4492","components/core/Card.jsx":"682456e9b16f","components/core/Divider.jsx":"5301a1f52584","components/core/Icon.jsx":"c41a790e06ac","components/core/IconButton.jsx":"a2d7adb6e7dd","components/core/MetaField.jsx":"8d80f3f86790","components/core/SectionHeading.jsx":"4ddac93acce1","components/data/DataTable.jsx":"6f9847c40103","components/feedback/Alert.jsx":"19f1a4d09bd4","components/feedback/EmptyState.jsx":"2ce01f727e5f","components/feedback/ProgressMeter.jsx":"330d13980028","components/feedback/StatTile.jsx":"45247058ede1","components/forms/Checkbox.jsx":"31139afb4536","components/forms/Field.jsx":"3570d0330065","components/forms/Input.jsx":"3168e5150c51","components/forms/Radio.jsx":"35d0492e56a7","components/forms/Select.jsx":"3b06d9580020","components/forms/Switch.jsx":"6331e76c67e0","components/forms/Textarea.jsx":"5f9bd3d74131","components/navigation/SideNav.jsx":"1a2ccfb2fd62","components/navigation/Tabs.jsx":"bbc2bf7b49ee","components/navigation/TopBar.jsx":"3f95f13d20ae","components/perform/MetricRow.jsx":"48427877aa98","components/perform/TierBadge.jsx":"b65d7d88e2e8","ui_kits/perform-plus/App.jsx":"65d91488b570","ui_kits/perform-plus/Dashboard.jsx":"330679fdcaac","ui_kits/perform-plus/LevelUp.jsx":"e8668893bc22","ui_kits/perform-plus/Penalties.jsx":"68bc466af11b","ui_kits/perform-plus/data.jsx":"d7f932c9daf7","ui_kits/website/AboutPage.jsx":"6ee9d50d71a3","ui_kits/website/BlogPage.jsx":"604f742b9cf1","ui_kits/website/Chrome.jsx":"ba99a97ed082","ui_kits/website/HomePage.jsx":"852992588f27","ui_kits/website/InsurersPage.jsx":"92ca4295ee74","ui_kits/website/JoinPage.jsx":"076e09c6fbcf","ui_kits/website/LegalPage.jsx":"aded54e38836","ui_kits/website/PortalPage.jsx":"7d412f3cf7fd","ui_kits/website/Site.jsx":"a2101bc556d7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HomeAssistDesignSystem_cf0a2b = window.HomeAssistDesignSystem_cf0a2b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/GradientBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GradientBand({
  height = 120,
  children,
  align = 'left',
  url,
  logo = false,
  basePath = '',
  style,
  ...rest
}) {
  const bg = url ? `url("${url}") center/cover no-repeat` : 'var(--gradient-band)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: 'relative',
      minHeight: height,
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
      padding: 'var(--space-6) var(--space-8)',
      color: '#fff',
      ...style
    }
  }), logo && /*#__PURE__*/React.createElement("img", {
    src: (basePath ? basePath.replace(/\/$/, '') + '/' : '') + 'assets/logo/homeassist-logo-horizontal-white.png',
    alt: "Home Assist",
    style: {
      height: Math.round(height * 0.28),
      display: 'block',
      marginRight: 'var(--space-6)'
    }
  }), children);
}
Object.assign(__ds_scope, { GradientBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GradientBand.jsx", error: String((e && e.message) || e) }); }

// components/brand/IllustrationPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IllustrationPanel({
  src,
  ground = 'mist',
  height = 280,
  fit = 'contain',
  caption,
  style,
  ...rest
}) {
  const bg = {
    mist: 'var(--teal-400)',
    green: 'var(--green-500)',
    olive: 'var(--olive-300)',
    pale: 'var(--grey-025)',
    navy: 'var(--ha-navy)',
    band: 'var(--gradient-band)'
  }[ground];
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      margin: 0,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: bg,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit,
      display: 'block'
    }
  })), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: 'var(--weight-regular) var(--size-caption)/1.4 var(--font-core)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-2)'
    }
  }, caption));
}
Object.assign(__ds_scope, { IllustrationPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/IllustrationPanel.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const files = {
  'horizontal-colour': 'assets/logo/homeassist-logo-horizontal.png',
  'horizontal-white': 'assets/logo/homeassist-logo-horizontal-white.png',
  'stacked-colour': 'assets/logo/homeassist-logo-stacked.png',
  'stacked-white': 'assets/logo/homeassist-logo-stacked-white.png',
  'performplus': 'assets/logo/performplus-logo.png'
};
function Logo({
  variant = 'horizontal-colour',
  height = 32,
  basePath = '',
  style,
  ...rest
}) {
  const src = (basePath ? basePath.replace(/\/$/, '') + '/' : '') + files[variant];
  return /*#__PURE__*/React.createElement("img", _extends({}, rest, {
    src: src,
    alt: variant === 'performplus' ? 'Perform+ Rewards System' : 'Home Assist',
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  info: ['var(--status-info-bg)', 'var(--status-info)'],
  success: ['var(--status-success-bg)', 'var(--status-success)'],
  warning: ['var(--status-warning-bg)', 'var(--status-warning)'],
  danger: ['var(--status-danger-bg)', 'var(--status-danger)'],
  neutral: ['var(--status-neutral-bg)', 'var(--status-neutral)'],
  navy: ['var(--ha-navy)', '#fff']
};
function Badge({
  tone = 'neutral',
  shape = 'pill',
  solid = false,
  icon,
  style,
  children,
  ...rest
}) {
  const [bg, fg] = tones[tone];
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: solid ? fg : bg,
      color: solid ? '#fff' : fg,
      font: 'var(--text-label-font)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      padding: '5px 9px',
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-sm)',
      ...style
    }
  }), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  font: 'var(--weight-semibold) var(--size-body)/1 var(--font-core)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-md)',
  cursor: 'pointer',
  transition: 'var(--transition-control)',
  whiteSpace: 'nowrap',
  textDecoration: 'none'
};
const sizes = {
  sm: {
    height: 'var(--control-height-sm)',
    padding: '0 12px',
    fontSize: 'var(--size-body-sm)'
  },
  md: {
    height: 'var(--control-height)',
    padding: '0 18px'
  },
  lg: {
    height: 'var(--control-height-lg)',
    padding: '0 24px',
    fontSize: 'var(--size-body-lg)'
  }
};
const variants = {
  primary: {
    background: 'var(--ha-blue)',
    color: '#fff'
  },
  secondary: {
    background: '#fff',
    color: 'var(--ha-navy)',
    borderColor: 'var(--border-default)'
  },
  navy: {
    background: 'var(--ha-navy)',
    color: '#fff'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ha-blue)'
  },
  danger: {
    background: 'var(--status-danger)',
    color: '#fff'
  },
  onDark: {
    background: '#fff',
    color: 'var(--ha-navy)'
  }
};
const hovers = {
  primary: {
    background: '#1E5296'
  },
  secondary: {
    background: 'var(--grey-025)',
    borderColor: 'var(--ha-navy)'
  },
  navy: {
    background: '#0F1E3C'
  },
  ghost: {
    background: 'var(--blue-050)'
  },
  danger: {
    background: '#BF423B'
  },
  onDark: {
    background: 'var(--blue-050)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  as = 'button',
  href,
  onClick,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const Tag = as === 'a' ? 'a' : 'button';
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    width: fullWidth ? '100%' : undefined,
    transform: down && !disabled ? 'translateY(1px)' : 'none',
    opacity: disabled ? 0.45 : 1,
    pointerEvents: disabled ? 'none' : undefined,
    boxShadow: variant === 'primary' || variant === 'navy' ? 'var(--shadow-xs)' : 'none',
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: Tag === 'a' ? href : undefined,
    disabled: Tag === 'button' ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: s
  }), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = 'default',
  padding = 'md',
  title,
  label,
  action,
  footer,
  style,
  children,
  ...rest
}) {
  const tones = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    },
    subtle: {
      background: 'var(--surface-subtle)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    },
    accent: {
      background: 'var(--surface-accent)',
      border: '1px solid var(--blue-100)',
      color: 'var(--ha-navy)'
    },
    navy: {
      background: 'var(--ha-navy)',
      border: '1px solid var(--ha-navy)',
      color: '#fff'
    }
  }[tone];
  const pad = {
    none: 0,
    sm: 'var(--space-3)',
    md: 'var(--gutter-card)',
    lg: 'var(--gutter-panel)'
  }[padding];
  const onNavy = tone === 'navy';
  return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    style: {
      ...tones,
      borderRadius: 'var(--radius-md)',
      boxShadow: onNavy ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      overflow: 'hidden',
      ...style
    }
  }), (title || label || action) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: pad,
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label-font)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: onNavy ? 'var(--text-on-dark-muted)' : 'var(--ha-navy)'
    }
  }, label), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--weight-semibold) var(--size-h4)/1.3 var(--font-core)',
      color: onNavy ? '#fff' : 'var(--text-heading)',
      margin: label ? '4px 0 0' : 0
    }
  }, title)), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad,
      paddingTop: title || label ? 'var(--space-3)' : pad
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: pad,
      borderTop: `1px solid ${onNavy ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`,
      background: onNavy ? 'transparent' : 'var(--grey-025)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  tone = 'subtle',
  spacing = 'md',
  vertical = false,
  label,
  style,
  ...rest
}) {
  const color = {
    subtle: 'var(--border-subtle)',
    default: 'var(--border-default)',
    strong: 'var(--ha-navy)',
    onDark: 'var(--border-on-dark)'
  }[tone];
  const gap = {
    sm: 'var(--space-3)',
    md: 'var(--space-6)',
    lg: 'var(--space-10)'
  }[spacing];
  if (vertical) return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      width: '1px',
      alignSelf: 'stretch',
      background: color,
      margin: `0 ${gap}`,
      ...style
    }
  }));
  if (label) return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      margin: `${gap} 0`,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label-font)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ha-navy)',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: color
    }
  }));
  return /*#__PURE__*/React.createElement("hr", _extends({}, rest, {
    style: {
      border: 0,
      borderTop: `1px solid ${color}`,
      margin: `${gap} 0`,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.454.0/icons/';

/* Lucide is a documented substitution — no icon set shipped with the brand pack.
   Rendered as a CSS mask so the glyph inherits currentColor. */
function Icon({
  name,
  size = 18,
  color = 'currentColor',
  strokeAccent = false,
  style,
  ...rest
}) {
  const url = `url("${CDN}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      background: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      opacity: strokeAccent ? .85 : 1,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  const bg = {
    ghost: 'transparent',
    outline: '#fff',
    solid: 'var(--ha-blue)',
    onDark: 'rgba(255,255,255,.12)'
  }[variant];
  const fg = {
    ghost: 'var(--text-muted)',
    outline: 'var(--ha-navy)',
    solid: '#fff',
    onDark: '#fff'
  }[variant];
  const hbg = {
    ghost: 'var(--blue-050)',
    outline: 'var(--grey-025)',
    solid: '#1E5296',
    onDark: 'rgba(255,255,255,.22)'
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover && !disabled ? hbg : bg,
      color: fg,
      border: variant === 'outline' ? '1px solid var(--border-default)' : '1px solid transparent',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      opacity: disabled ? .4 : 1,
      transition: 'var(--transition-control)',
      ...style
    }
  }), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/MetaField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetaField({
  label,
  value,
  align = 'left',
  onDark = false,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      textAlign: align,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label-font)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--ha-navy)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-regular) var(--size-body)/var(--leading-snug) var(--font-core)',
      color: onDark ? '#fff' : 'var(--text-body)',
      marginTop: '4px'
    }
  }, value ?? children));
}
Object.assign(__ds_scope, { MetaField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MetaField.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  description,
  level = 2,
  rule = true,
  action,
  style,
  ...rest
}) {
  const Tag = 'h' + level;
  const sizes = {
    1: 'var(--text-h1-font)',
    2: 'var(--text-h2-font)',
    3: 'var(--text-h3-font)'
  }[level] || 'var(--text-h2-font)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      marginBottom: 'var(--space-6)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label-font)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ha-blue)',
      marginBottom: '6px'
    }
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      font: sizes,
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title)), action), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--rule-accent)',
      width: '56px',
      background: 'var(--ha-blue)',
      marginTop: 'var(--space-3)'
    }
  }), description && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      marginBottom: 0,
      color: 'var(--text-muted)'
    }
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  onRowClick,
  dense = false,
  zebra = false,
  footer,
  style,
  ...rest
}) {
  const pad = dense ? '8px 12px' : '12px 16px';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: '#fff',
      ...style
    }
  }), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      font: 'var(--weight-regular) var(--size-body-sm)/1.4 var(--font-core)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: pad,
      background: 'var(--grey-025)',
      borderBottom: '1px solid var(--border-subtle)',
      font: 'var(--text-label-font)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ha-navy)',
      width: c.width
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id || i,
    onClick: () => onRowClick && onRowClick(r),
    style: {
      cursor: onRowClick ? 'pointer' : 'default',
      background: zebra && i % 2 ? 'var(--grey-025)' : '#fff'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: pad,
      borderBottom: '1px solid var(--border-subtle)',
      color: 'var(--text-body)',
      verticalAlign: 'middle'
    }
  }, c.render ? c.render(r) : r[c.key])))))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad,
      background: 'var(--grey-025)',
      borderTop: '1px solid var(--border-subtle)',
      font: 'var(--weight-regular) var(--size-caption)/1.4 var(--font-core)',
      color: 'var(--text-muted)'
    }
  }, footer));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  info: ['var(--status-info-bg)', 'var(--status-info)'],
  success: ['var(--status-success-bg)', 'var(--status-success)'],
  warning: ['var(--status-warning-bg)', 'var(--status-warning)'],
  danger: ['var(--status-danger-bg)', 'var(--status-danger)']
};
function Alert({
  tone = 'info',
  title,
  icon,
  action,
  onDismiss,
  style,
  children,
  ...rest
}) {
  const [bg, fg] = tones[tone];
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      background: bg,
      border: `1px solid ${fg}33`,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4)',
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: fg,
      display: 'flex',
      marginTop: '1px'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) var(--size-body)/1.35 var(--font-core)',
      color: fg
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-regular) var(--size-body-sm)/var(--leading-body) var(--font-core)',
      color: 'var(--text-body)',
      marginTop: title ? '2px' : 0
    }
  }, children)), action, onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: fg,
      font: 'var(--weight-bold) 16px/1 var(--font-core)'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  illustration,
  title,
  description,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      textAlign: 'center',
      padding: 'var(--space-12) var(--space-6)',
      ...style
    }
  }), illustration && /*#__PURE__*/React.createElement("img", {
    src: illustration,
    alt: "",
    style: {
      height: '150px',
      display: 'block',
      margin: '0 auto var(--space-5)',
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) var(--size-h4)/1.3 var(--font-core)',
      color: 'var(--text-heading)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) auto 0',
      maxWidth: '42ch',
      color: 'var(--text-muted)',
      fontSize: 'var(--size-body-sm)'
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressMeter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressMeter({
  value = 0,
  max = 100,
  label,
  valueLabel,
  tone = 'blue',
  height = 8,
  segments,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fill = {
    blue: 'var(--ha-blue)',
    navy: 'var(--ha-navy)',
    success: 'var(--status-success)',
    warning: 'var(--status-warning)',
    danger: 'var(--status-danger)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      ...style
    }
  }), (label || valueLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '6px'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label-font)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ha-navy)'
    }
  }, label), valueLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--size-body-sm)/1 var(--font-core)',
      color: 'var(--text-heading)'
    }
  }, valueLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      background: 'var(--grey-100)',
      borderRadius: 'var(--radius-xs)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: fill,
      transition: 'width var(--duration-slow) var(--ease-out)'
    }
  }), segments && segments.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: s / max * 100 + '%',
      top: 0,
      bottom: 0,
      width: '1px',
      background: '#fff'
    }
  }))));
}
Object.assign(__ds_scope, { ProgressMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressMeter.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatTile({
  label,
  value,
  unit,
  delta,
  deltaTone = 'neutral',
  tone = 'light',
  icon,
  style,
  ...rest
}) {
  const dark = tone === 'navy';
  const dc = {
    up: 'var(--status-success)',
    down: 'var(--status-danger)',
    neutral: dark ? 'var(--text-on-dark-muted)' : 'var(--text-faint)'
  }[deltaTone];
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: dark ? 'var(--ha-navy)' : '#fff',
      border: `1px solid ${dark ? 'var(--ha-navy)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4) var(--gutter-card)',
      boxShadow: dark ? 'none' : 'var(--shadow-sm)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? 'var(--blue-300)' : 'var(--ha-blue)',
      display: 'flex'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label-font)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--ha-navy)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '6px',
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--size-h2)/1 var(--font-core)',
      color: dark ? '#fff' : 'var(--text-heading)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--size-body-sm)/1 var(--font-core)',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, unit)), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) var(--size-caption)/1.3 var(--font-core)',
      color: dc,
      marginTop: '6px'
    }
  }, delta));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: '10px',
      alignItems: 'flex-start',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flex: '0 0 auto',
      width: '18px',
      height: '18px',
      marginTop: '1px',
      background: checked ? 'var(--ha-blue)' : '#fff',
      border: `1px solid ${checked ? 'var(--ha-blue)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-xs)',
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  })), checked && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '5px',
      top: '2px',
      width: '6px',
      height: '10px',
      borderRight: '2px solid #fff',
      borderBottom: '2px solid #fff',
      transform: 'rotate(40deg)'
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--size-body)/1.4 var(--font-core)',
      color: 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--weight-regular) var(--size-caption)/1.4 var(--font-core)',
      color: 'var(--text-faint)',
      marginTop: '2px'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--text-label-font)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ha-navy)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-danger)',
      marginLeft: '4px'
    }
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--size-caption)/1.4 var(--font-core)',
      color: 'var(--status-danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--size-caption)/1.4 var(--font-core)',
      color: 'var(--text-faint)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  size = 'md',
  invalid = false,
  disabled = false,
  iconLeft,
  suffix,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = {
    sm: 'var(--control-height-sm)',
    md: 'var(--control-height)',
    lg: 'var(--control-height-lg)'
  }[size];
  const wrap = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    height: h,
    padding: '0 12px',
    background: invalid ? 'var(--status-danger-bg)' : disabled ? 'var(--surface-disabled)' : '#fff',
    border: `1px solid ${invalid ? 'var(--status-danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
    borderRadius: 'var(--radius-sm)',
    boxShadow: focus ? 'var(--focus-ring)' : 'none',
    transition: 'var(--transition-control)',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      display: 'flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'var(--weight-regular) var(--size-body)/1.4 var(--font-core)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-body)'
    }
  })), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      font: 'var(--weight-regular) var(--size-body-sm)/1 var(--font-core)'
    }
  }, suffix));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  checked,
  disabled = false,
  onChange,
  name,
  value,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: '10px',
      alignItems: 'flex-start',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flex: '0 0 auto',
      width: '18px',
      height: '18px',
      marginTop: '1px',
      borderRadius: '50%',
      background: '#fff',
      border: `1px solid ${checked ? 'var(--ha-blue)' : 'var(--border-default)'}`,
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  })), checked && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '4px',
      borderRadius: '50%',
      background: 'var(--ha-blue)'
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--size-body)/1.4 var(--font-core)',
      color: 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--weight-regular) var(--size-caption)/1.4 var(--font-core)',
      color: 'var(--text-faint)',
      marginTop: '2px'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  size = 'md',
  invalid = false,
  disabled = false,
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = {
    sm: 'var(--control-height-sm)',
    md: 'var(--control-height)',
    lg: 'var(--control-height-lg)'
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: h,
      padding: '0 34px 0 12px',
      appearance: 'none',
      font: 'var(--weight-regular) var(--size-body)/1 var(--font-core)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-body)',
      background: invalid ? 'var(--status-danger-bg)' : disabled ? 'var(--surface-disabled)' : '#fff',
      border: `1px solid ${invalid ? 'var(--status-danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      outline: 'none',
      transition: 'var(--transition-control)'
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      width: 0,
      height: 0,
      borderLeft: '4px solid transparent',
      borderRight: '4px solid transparent',
      borderTop: '5px solid var(--ha-navy)'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  disabled = false,
  label,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '40px',
      height: '22px',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--ha-blue)' : 'var(--grey-300)',
      transition: 'background-color var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '3px',
      left: checked ? '21px' : '3px',
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--duration-fast) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--size-body)/1.4 var(--font-core)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  rows = 4,
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({}, rest, {
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '10px 12px',
      resize: 'vertical',
      font: 'var(--weight-regular) var(--size-body)/var(--leading-body) var(--font-core)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-body)',
      background: invalid ? 'var(--status-danger-bg)' : disabled ? 'var(--surface-disabled)' : '#fff',
      border: `1px solid ${invalid ? 'var(--status-danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      outline: 'none',
      transition: 'var(--transition-control)',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SideNav({
  items = [],
  active,
  onSelect,
  footer,
  width = 232,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("aside", _extends({}, rest, {
    style: {
      width,
      flex: '0 0 auto',
      background: 'var(--surface-subtle)',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      padding: 'var(--space-4) 0',
      ...style
    }
  }), items.map(it => {
    if (it.section) return /*#__PURE__*/React.createElement("div", {
      key: 's' + it.section,
      style: {
        font: 'var(--text-label-font)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: 'var(--text-faint)',
        padding: 'var(--space-5) var(--space-5) var(--space-2)'
      }
    }, it.section);
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onSelect && onSelect(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '0 var(--space-5)',
        height: '40px',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        background: on ? 'var(--surface-accent)' : 'transparent',
        borderLeft: `3px solid ${on ? 'var(--ha-blue)' : 'transparent'}`,
        font: `${on ? 'var(--weight-semibold)' : 'var(--weight-regular)'} var(--size-body)/1 var(--font-core)`,
        color: on ? 'var(--ha-navy)' : 'var(--text-muted)',
        transition: 'var(--transition-control)'
      }
    }, it.icon, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-semibold) var(--size-caption)/1 var(--font-core)',
        color: on ? 'var(--ha-blue)' : 'var(--text-faint)'
      }
    }, it.count));
  }), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 'var(--space-5)'
    }
  }, footer));
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  active,
  onSelect,
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: `1px solid ${dark ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`,
      ...style
    }
  }), items.map(it => {
    const k = typeof it === 'string' ? it : it.id || it.label,
      l = typeof it === 'string' ? it : it.label,
      n = typeof it === 'string' ? null : it.count,
      on = k === active;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => onSelect && onSelect(k),
      style: {
        background: 'none',
        border: 0,
        cursor: 'pointer',
        padding: '0 0 10px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        font: `${on ? 'var(--weight-semibold)' : 'var(--weight-regular)'} var(--size-body)/1 var(--font-core)`,
        color: dark ? on ? '#fff' : 'var(--text-on-dark-muted)' : on ? 'var(--ha-navy)' : 'var(--text-muted)',
        boxShadow: on ? `inset 0 -2px 0 ${dark ? '#fff' : 'var(--ha-blue)'}` : 'none',
        transition: 'var(--transition-control)'
      }
    }, l, n != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-semibold) var(--size-caption)/1 var(--font-core)',
        color: on ? 'var(--ha-blue)' : 'var(--text-faint)'
      }
    }, n));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TopBar({
  logoSrc = 'assets/logo/homeassist-logo-horizontal-white.png',
  tone = 'navy',
  title,
  items = [],
  activeItem,
  onSelect,
  right,
  style,
  ...rest
}) {
  const dark = tone !== 'light';
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      height: '64px',
      padding: '0 var(--space-6)',
      background: tone === 'gradient' ? 'var(--gradient-band)' : dark ? 'var(--ha-navy)' : '#fff',
      borderBottom: dark ? 'none' : '1px solid var(--border-subtle)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Home Assist",
    style: {
      height: '26px',
      display: 'block'
    }
  }), title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--size-body-lg)/1 var(--font-core)',
      color: dark ? '#fff' : 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      marginLeft: 'auto'
    }
  }, items.map(it => {
    const k = typeof it === 'string' ? it : it.id || it.label,
      l = typeof it === 'string' ? it : it.label,
      on = k === activeItem;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => onSelect && onSelect(k),
      style: {
        background: 'none',
        border: 0,
        cursor: 'pointer',
        padding: '4px 0',
        font: `${on ? 'var(--weight-semibold)' : 'var(--weight-regular)'} var(--size-body)/1 var(--font-core)`,
        color: dark ? on ? '#fff' : 'var(--text-on-dark-muted)' : on ? 'var(--ha-navy)' : 'var(--text-muted)',
        borderBottom: `2px solid ${on ? dark ? '#fff' : 'var(--ha-blue)' : 'transparent'}`
      }
    }, l);
  })), right && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      marginLeft: right && items.length ? 'var(--space-6)' : 'auto'
    }
  }, right));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// components/perform/MetricRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tierColors = ['var(--tier-plastic)', 'var(--tier-bronze)', 'var(--tier-silver)', 'var(--tier-gold)', 'var(--tier-platinum)'];
function MetricRow({
  metric,
  thresholds = [],
  score = 0,
  target,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'grid',
      gridTemplateColumns: '220px 1fr auto',
      gap: 'var(--space-5)',
      alignItems: 'center',
      padding: 'var(--space-4) 0',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) var(--size-body)/1.3 var(--font-core)',
      color: 'var(--text-heading)'
    }
  }, metric), target && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-regular) var(--size-caption)/1.4 var(--font-core)',
      color: 'var(--text-faint)',
      marginTop: '2px'
    }
  }, target)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px'
    }
  }, thresholds.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '6px',
      background: i + 1 <= score ? tierColors[i] : 'var(--grey-100)',
      borderRadius: 'var(--radius-xs)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) var(--size-caption)/1.3 var(--font-core)',
      color: i + 1 <= score ? 'var(--text-heading)' : 'var(--text-faint)',
      marginTop: '6px'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '22px',
      color: 'var(--ha-navy)',
      minWidth: '28px',
      textAlign: 'right'
    }
  }, score));
}
Object.assign(__ds_scope, { MetricRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/perform/MetricRow.jsx", error: String((e && e.message) || e) }); }

// components/perform/TierBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tiers = {
  plastic: ['var(--tier-plastic)', 'PLASTIC'],
  bronze: ['var(--tier-bronze)', 'BRONZE'],
  silver: ['var(--tier-silver)', 'SILVER'],
  gold: ['var(--tier-gold)', 'GOLD'],
  platinum: ['var(--tier-platinum)', 'PLATINUM']
};
function TierBadge({
  tier = 'bronze',
  size = 'md',
  outline = false,
  points,
  style,
  ...rest
}) {
  const [c, label] = tiers[tier];
  const s = {
    sm: ['10px', '4px 8px'],
    md: ['12px', '6px 12px'],
    lg: ['15px', '9px 18px']
  }[size];
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: outline ? 'transparent' : c,
      color: outline ? c : '#fff',
      border: `1px solid ${c}`,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: s[0],
      letterSpacing: '0.14em',
      padding: s[1],
      borderRadius: 'var(--radius-sm)',
      ...style
    }
  }), label, points != null && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .85,
      letterSpacing: '0.06em'
    }
  }, points));
}
Object.assign(__ds_scope, { TierBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/perform/TierBadge.jsx", error: String((e && e.message) || e) }); }

// ui_kits/perform-plus/App.jsx
try { (() => {
const {
  TopBar,
  Badge,
  Icon,
  IconButton,
  TierBadge
} = window.HomeAssistDesignSystem_cf0a2b;
function App() {
  const [view, setView] = React.useState('Dashboard');
  const [criterion, setCriterion] = React.useState(null);
  const open = id => {
    setCriterion(id);
    setView('How to level up');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pp-shell"
  }, /*#__PURE__*/React.createElement(TopBar, {
    logoSrc: "../../assets/logo/homeassist-logo-horizontal-white.png",
    items: ['Dashboard', 'How to level up', 'Penalties'],
    activeItem: view,
    onSelect: v => {
      setView(v);
      if (v === 'How to level up' && !criterion) setCriterion('rating');
    },
    right: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TierBadge, {
      tier: "gold",
      size: "sm"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "bell"
      }),
      label: "Notifications",
      variant: "onDark"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 'var(--radius-sm)',
        background: 'var(--blue-400)',
        color: '#fff',
        display: 'grid',
        placeItems: 'center',
        font: 'var(--weight-bold) 13px/1 var(--font-core)'
      }
    }, "SM"))
  }), view === 'Dashboard' && /*#__PURE__*/React.createElement(PPDashboard, {
    onOpenCriterion: open
  }), view === 'How to level up' && /*#__PURE__*/React.createElement(PPLevelUp, {
    id: criterion,
    onBack: () => setView('Dashboard')
  }), view === 'Penalties' && /*#__PURE__*/React.createElement(PPPenalties, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/perform-plus/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/perform-plus/Dashboard.jsx
try { (() => {
const {
  Card,
  Badge,
  Icon,
  Button,
  MetaField,
  StatTile,
  ProgressMeter,
  TierBadge,
  MetricRow,
  SectionHeading,
  Divider,
  Logo,
  IllustrationPanel
} = window.HomeAssistDesignSystem_cf0a2b;
function PPDashboard({
  onOpenCriterion
}) {
  const total = PP_CRITERIA.reduce((a, c) => a + c.score, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'stretch',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--gradient-navy)',
      borderRadius: 'var(--radius-md)',
      padding: '28px 32px',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ha-label",
    style: {
      color: 'var(--text-on-dark-muted)'
    }
  }, "Current level"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 52,
      lineHeight: 1,
      letterSpacing: '.02em',
      marginTop: 8
    }
  }, "GOLD"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-on-dark-muted)',
      fontSize: 'var(--size-body-sm)',
      marginTop: 8
    }
  }, "Mokoena Plumbing & Electrical \xB7 Bellville \xB7 August 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ha-label",
    style: {
      color: 'var(--text-on-dark-muted)'
    }
  }, "Points"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 52,
      lineHeight: 1
    }
  }, total, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      opacity: .6
    }
  }, "/25")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, PP_TIERS.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 2,
      background: i <= 3 ? 'var(--blue-300)' : 'rgba(255,255,255,.18)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: '.14em',
      marginTop: 8,
      color: i <= 3 ? '#fff' : 'rgba(255,255,255,.45)'
    }
  }, t.toUpperCase())))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-on-dark-muted)',
      fontSize: 'var(--size-caption)',
      marginTop: 16
    }
  }, "3 points from Platinum. Lift your 2FA customer rating to 9% to level up."))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    basePath: "../..",
    variant: "performplus",
    height: 92,
    style: {
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Jobs this month",
    value: "41",
    delta: "+6 vs July",
    deltaTone: "up",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "hard-hat",
      size: 14
    })
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Open service warnings",
    value: "1",
    delta: "Case errors \xB7 12 Aug",
    deltaTone: "down"
  }))), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Perform+ rewards calculator",
    title: "How to level up",
    level: 2,
    description: "Five criteria, scored 1 to 5 every month. Your level is the total."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '4px 24px 8px',
      background: '#fff'
    }
  }, PP_CRITERIA.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    onClick: () => onOpenCriterion(c.id),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(MetricRow, {
    metric: c.metric,
    target: c.goals,
    thresholds: c.thresholds,
    score: c.score
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 0 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Select a criterion for the goal, why it matters and the reward."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    }),
    onClick: () => onOpenCriterion('rating')
  }, "Open lowest score"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 16,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Card, {
    label: "Rewards",
    title: "What Gold unlocks"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      color: 'var(--text-body)',
      fontSize: 'var(--size-body-sm)',
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("li", null, "More job opportunities and faster payments"), /*#__PURE__*/React.createElement("li", null, "Priority listings in your area"), /*#__PURE__*/React.createElement("li", null, "Recognition on the Home Assist network"))), /*#__PURE__*/React.createElement(Card, {
    label: "This month",
    title: "Reporting obligations",
    action: /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, "1 outstanding")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, [['Daily availability report', 'success'], ['Monthly statement', 'success'], ['Monthly stock take', 'warning'], ['Scrap upliftment', 'success']].map(([l, t]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 'var(--size-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement(Badge, {
    tone: t
  }, t === 'success' ? 'Submitted' : 'Due'))))), /*#__PURE__*/React.createElement(IllustrationPanel, {
    src: "../../assets/illustrations/technician-phone-complete.jpg",
    ground: "mist",
    height: 210
  })));
}
window.PPDashboard = PPDashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/perform-plus/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/perform-plus/LevelUp.jsx
try { (() => {
const {
  Card,
  Badge,
  Icon,
  Button,
  MetaField,
  TierBadge,
  SectionHeading,
  Divider,
  Logo
} = window.HomeAssistDesignSystem_cf0a2b;
function PPLevelUp({
  id,
  onBack
}) {
  const c = PP_CRITERIA.find(x => x.id === id) || PP_CRITERIA[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 40px 56px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }),
    onClick: onBack,
    style: {
      marginLeft: -12,
      marginBottom: 16
    }
  }, "Back to dashboard"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ha-navy)',
      borderRadius: 'var(--radius-md)',
      padding: '26px 32px',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255,255,255,.12)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 26,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ha-label",
    style: {
      color: 'var(--text-on-dark-muted)'
    }
  }, "How to level up"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-bold) var(--size-h2)/1.2 var(--font-core)',
      marginTop: 4
    }
  }, c.metric))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ha-label",
    style: {
      color: 'var(--text-on-dark-muted)'
    }
  }, "Current"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      lineHeight: 1.1
    }
  }, c.current), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(TierBadge, {
    tier: PP_TIERS[c.score - 1],
    size: "sm"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    label: "Goals",
    title: null
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--size-body-lg)'
    }
  }, c.goals)), /*#__PURE__*/React.createElement(Card, {
    label: "Why it matters",
    title: null
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--size-body-lg)'
    }
  }, c.why))), /*#__PURE__*/React.createElement(Card, {
    tone: "accent",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 22,
    color: "var(--ha-blue)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: '.02em',
      textTransform: 'uppercase',
      color: 'var(--ha-navy)'
    }
  }, c.motivator), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--text-body)'
    }
  }, c.reward)))), /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Scoring thresholds",
    level: 3,
    rule: false,
    style: {
      marginTop: 36,
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 12
    }
  }, c.thresholds.map((t, i) => {
    const on = i + 1 <= c.score;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        border: `1px solid ${on ? 'var(--blue-200)' : 'var(--border-subtle)'}`,
        background: on ? 'var(--surface-accent)' : '#fff',
        borderRadius: 'var(--radius-md)',
        padding: '16px 18px'
      }
    }, /*#__PURE__*/React.createElement(TierBadge, {
      tier: PP_TIERS[i],
      size: "sm",
      outline: !on
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-bold) var(--size-h3)/1.1 var(--font-core)',
        color: 'var(--text-heading)',
        marginTop: 12
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--text-label-font)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: 'var(--text-faint)'
      }
    }, "Points"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 18,
        color: on ? 'var(--ha-blue)' : 'var(--text-faint)'
      }
    }, i + 1)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Open the Job App"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "View my cases")));
}
window.PPLevelUp = PPLevelUp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/perform-plus/LevelUp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/perform-plus/Penalties.jsx
try { (() => {
const {
  Card,
  Badge,
  Icon,
  Alert,
  DataTable,
  SectionHeading,
  Divider,
  Button
} = window.HomeAssistDesignSystem_cf0a2b;
function PPPenalties() {
  const monthly = PP_PENALTIES.filter(p => p.kind === 'monthly');
  const warnings = PP_PENALTIES.filter(p => p.kind === 'warning');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px 56px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Perform+ rewards calculator",
    title: "Penalties & service warnings",
    level: 2,
    description: "Points are deducted when reporting obligations are missed or a service warning is issued."
  }), /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "One service warning open",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "alert-triangle"
    }),
    style: {
      marginBottom: 24
    }
  }, "Case errors, issued 12 August 2026 on case HA-2026-04150. Two points are held back until the next scoring cycle."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ha-label",
    style: {
      marginBottom: 12
    }
  }, "Monthly obligations"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, monthly.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    tone: "subtle",
    padding: "sm",
    style: {
      boxShadow: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) var(--size-body)/1.3 var(--font-core)',
      color: 'var(--text-heading)'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, p.body)), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Monthly")))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ha-label",
    style: {
      marginBottom: 12
    }
  }, "Service warnings"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, warnings.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    tone: "subtle",
    padding: "sm",
    style: {
      boxShadow: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) var(--size-body)/1.3 var(--font-core)',
      color: 'var(--text-heading)'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, p.body)), /*#__PURE__*/React.createElement(Badge, {
    tone: "danger"
  }, "Warning"))))))));
}
window.PPPenalties = PPPenalties;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/perform-plus/Penalties.jsx", error: String((e && e.message) || e) }); }

// ui_kits/perform-plus/data.jsx
try { (() => {
/* Content transcribed from Perform+info doc V1.pdf (uploads/Perform+ Artwork…). Wording is the source's. */
const PP_CRITERIA = [{
  id: 'app',
  metric: 'Job app usage',
  goals: 'Use the Home Assist Job App consistently to manage jobs, update progress, and report work done.',
  why: 'The app is your digital toolbox. Using it helps us streamline billing, track job quality, and provide faster service to homeowners.',
  motivator: 'Stay plugged in. Work smarter, not harder.',
  reward: 'Top performers use the app daily and are rewarded with more job opportunities and faster payments!',
  icon: 'smartphone',
  thresholds: ['<50%', '>50%', '>75%', '>80%', '≥95%'],
  score: 5,
  current: '96%'
}, {
  id: 'tat',
  metric: 'Case average TAT',
  goals: 'Complete jobs quickly and submit all required documentation within 1-3 days',
  why: 'Fast job turnarounds mean happier customers and quicker payments to you. It also helps Home Assist invoice clients faster and close cases promptly.',
  motivator: 'Speed gets you ahead. Accuracy gets you paid.',
  reward: 'Rapid turnaround unlocks Perform+ rewards and builds your reputation as a go-to technician on the Home Assist network',
  icon: 'clock',
  thresholds: ['≥ 7 days', '≤ 5 days', '≤ 3 days', '≥ 2 days', '< 1 day'],
  score: 4,
  current: '2.1 days'
}, {
  id: 'rating',
  metric: 'Average 2FA customer rating score',
  goals: 'Keep your customer rating above 80% with verified 2FA customer satisfaction feedback',
  why: 'This is feedback we trust. It reflects how well you’re listening to homeowners and delivering top-tier service.',
  motivator: 'Great service speaks for itself.',
  reward: 'Every 2FA review is a chance to shine. Higher ratings mean more jobs, bonuses, and recognition in Perform+.',
  icon: 'star',
  thresholds: ['6%', '7%', '8%', '9%', '9.5%'],
  score: 3,
  current: '8.4%'
}, {
  id: 'acceptance',
  metric: 'Case acceptance rate',
  goals: 'Accept at least 70% - 85% of job requests via the platform Job Availbility Request',
  why: 'Fast digital acceptance helps us match homeowners to techs in real time, no delays, no missed jobs.',
  motivator: 'Grow bookings, grow your business.',
  reward: 'High acceptance = more job offers + priority listings in your area. Be the first to grab the best gigs!',
  icon: 'trending-up',
  thresholds: ['< 50%', '< 70%', '< 75%', '< 85%', '< 90%'],
  score: 4,
  current: '86%'
}, {
  id: 'errors',
  metric: 'Case error ratio to cases',
  goals: 'Keep errors to less than 1–2% of your total jobs.',
  why: 'Fewer errors mean smoother billing, faster approvals, and less time back and fourth spent fixing mistakes.',
  motivator: 'Get it right, the first time.',
  reward: 'Master the process, avoid rework, and earn premium points and recognition through Perform+.',
  icon: 'check-circle',
  thresholds: ['≤ 5%', '≤ 3%', '≤ 2%', '≤ 1%', '≤ 0%'],
  score: 4,
  current: '1.4%'
}];
const PP_PENALTIES = [{
  title: 'Daily reporting availbility',
  body: 'Reporting on Team avalaiblity and stock on hand when the company admin log on to the platform evey day',
  kind: 'monthly'
}, {
  title: 'Upload monthly statement',
  body: 'Once a month a statement must be upload your satement on the system',
  kind: 'monthly'
}, {
  title: 'Upload monthly stock take',
  body: 'Once a month you need to provide a physical stock take of all stock provided to you by Home Assisst or your private stock.',
  kind: 'monthly'
}, {
  title: 'Upload monthly scarp upliftment',
  body: 'Once a month you need to provide a physical stock take of scrap faulty products, Home Assisst endevours to test all returned stock.',
  kind: 'monthly'
}, {
  title: 'Service warning: case errors',
  body: 'Repeated Submission of the incorrect documents , lack of picture evidence or failure to complete documents results in a case error',
  kind: 'warning'
}, {
  title: 'Service warning: soft skills',
  body: 'Bad mothing Home Assist or brands associated with Home Assist',
  kind: 'warning'
}, {
  title: 'Service warning: case hostage',
  body: 'Technicinas have a obligation to complete jobs they accept . Techncinas who take jobs and the play games will be punished',
  kind: 'warning'
}, {
  title: 'Service warning: 5 day warning',
  body: 'Exceeded TAT 5 days on more than 5 cases in a month',
  kind: 'warning'
}, {
  title: 'Service warning: no stock take',
  body: 'Failure to submit a stock take if you are a consignment holder more that twice in 12 month cycle',
  kind: 'warning'
}, {
  title: 'Service warning: excessive charging',
  body: 'Technicians who overcharge for relocations , travel, materials will be penalised.',
  kind: 'warning'
}];
const PP_TIERS = ['plastic', 'bronze', 'silver', 'gold', 'platinum'];
Object.assign(window, {
  PP_CRITERIA,
  PP_PENALTIES,
  PP_TIERS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/perform-plus/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutPage.jsx
try { (() => {
const {
  Button,
  Icon
} = window.HomeAssistDesignSystem_cf0a2b;
function AboutPage() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--web-grey-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      padding: '56px 40px 48px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "About"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...DISPLAY,
      marginBottom: 14
    }
  }, "About Home Assist."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      fontSize: 17,
      maxWidth: '54ch',
      margin: 0
    }
  }, "We manage home incidents from the first phone call to the finished job."))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Who we are",
    title: "A home-assistance and incident-management business"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr .8fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      fontSize: 17
    }
  }, "Home Assist Technologies is a South African home-assistance and incident-management business based in Pinelands, Cape Town."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      fontSize: 17
    }
  }, "We manage property incidents \u2014 plumbing, geysers, electrical and the building damage that follows them \u2014 for homeowners, and we manage property claims books for short-term insurers, UMAs, binder holders and brokers."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      fontSize: 17
    }
  }, "The operating principle is short: the work must be verified, the certificate must be logged, and the person who did the work must be paid quickly."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      fontSize: 17,
      margin: 0
    }
  }, "The business is moving from a claim-based model to a service-based model, with the loss ratio as the measure.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--teal-400)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/contractor.jpg",
    alt: "A Home Assist artisan on site",
    style: {
      width: '100%',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    tint: true,
    eyebrow: "What we stand for",
    title: "Three things we do not compromise on"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(LabelCard, {
    icon: "shield-check",
    label: "Verification"
  }, "We check the work, not just the invoice."), /*#__PURE__*/React.createElement(LabelCard, {
    icon: "clock",
    label: "Speed of payment"
  }, "Providers are settled in seven days, because delay is priced into every quote."), /*#__PURE__*/React.createElement(LabelCard, {
    icon: "folder-open",
    label: "Evidence"
  }, "Every job carries a retrievable file."))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Leadership",
    title: "Who runs it"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 21px/1.2 var(--font-core)',
      color: 'var(--web-navy)'
    }
  }, "Keshan Patel"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...SMALL,
      marginTop: 6
    }
  }, "Founder and Chief Executive")), [0, 1].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: '1px dashed var(--web-grey-300)',
      borderRadius: 4,
      padding: 24,
      background: 'var(--web-grey-050)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: LABEL
  }, "Team member slot"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...SMALL,
      marginTop: 6
    }
  }, "Name and role to be added."))))), /*#__PURE__*/React.createElement(Section, {
    tint: true,
    eyebrow: "Contact",
    title: "How to reach us",
    intro: "WhatsApp is the fastest route for anything urgent. The hotline and help desk are attended during business hours and on call after hours."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(ChannelCard, {
    label: "WhatsApp",
    value: CH.waHome,
    note: "The fastest way to reach us. Available 24/7.",
    action: /*#__PURE__*/React.createElement(Button, {
      as: "a",
      variant: "navy",
      href: wa('Hi Home Assist, '),
      target: "_blank",
      rel: "noopener",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "message-circle",
        size: 17,
        color: "#fff"
      })
    }, "Message us")
  }), /*#__PURE__*/React.createElement(ChannelCard, {
    label: "Phone",
    value: CH.phone,
    note: "Speak to a consultant.",
    action: /*#__PURE__*/React.createElement(Button, {
      as: "a",
      variant: "secondary",
      href: 'tel:' + CH.phoneTel,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 17,
        color: "var(--web-navy)"
      })
    }, "Call now")
  }), /*#__PURE__*/React.createElement(ChannelCard, {
    label: "Help desk",
    value: CH.help,
    note: "Customer success and follow-ups on existing jobs.",
    action: /*#__PURE__*/React.createElement(Button, {
      as: "a",
      variant: "secondary",
      href: 'mailto:' + CH.help
    }, "Email the help desk")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...CARD,
      background: '#fff',
      display: 'flex',
      gap: 32,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 320px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 8
    }
  }, "Insurers and brokers"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      margin: 0
    }
  }, CH.biz, " \xB7 ", CH.waBiz)), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    variant: "navy",
    href: CH.booking,
    target: "_blank",
    rel: "noopener"
  }, "Book a sample review"))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Message us",
    title: sent ? 'Message sent' : 'Send us a message'
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      ...CARD,
      borderLeft: '3px solid var(--web-blue)',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 8
    }
  }, "Received"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      margin: 0
    }
  }, "We have your message and will come back to you. For anything urgent, message us on WhatsApp at ", CH.waHome, ".")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      ...CARD,
      padding: 32,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(FieldRow, {
    label: "Name"
  }, /*#__PURE__*/React.createElement("input", {
    style: INPUT,
    required: true
  })), /*#__PURE__*/React.createElement(FieldRow, {
    label: "Email"
  }, /*#__PURE__*/React.createElement("input", {
    style: INPUT,
    type: "email",
    required: true
  })), /*#__PURE__*/React.createElement(FieldRow, {
    label: "Mobile"
  }, /*#__PURE__*/React.createElement("input", {
    style: INPUT,
    type: "tel"
  })), /*#__PURE__*/React.createElement(FieldRow, {
    label: "I am a"
  }, /*#__PURE__*/React.createElement("select", {
    style: INPUT,
    defaultValue: "",
    required: true
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Select one"), ['Homeowner', 'Insurer or broker', 'Service provider', 'Other'].map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(FieldRow, {
    label: "Message"
  }, /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...INPUT,
      minHeight: 110,
      resize: 'vertical'
    },
    required: true
  }))), /*#__PURE__*/React.createElement("label", {
    style: {
      ...BODY,
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    required: true,
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", null, "I agree that Home Assist may contact me about this message.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "navy"
  }, "Send message"))), /*#__PURE__*/React.createElement(Section, {
    tint: true,
    eyebrow: "Where we are",
    title: "Pinelands, Cape Town"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.8fr 1.2fr',
      gap: 32,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CARD,
      display: 'grid',
      gap: 20,
      alignContent: 'start'
    }
  }, [['Address', CH.address], ['Phone', CH.phone], ['Email', CH.biz]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: LABEL
  }, l), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      margin: '5px 0 0'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--web-grey-100)',
      borderRadius: 4,
      background: 'var(--web-grey-050)',
      minHeight: 260,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 24,
    color: "var(--web-grey-500)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      ...SMALL,
      marginTop: 10
    }
  }, "Embedded map \u2014 Google Maps iframe for 12 Uitvlugt Road, Pinelands"))))));
}
Object.assign(window, {
  AboutPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BlogPage.jsx
try { (() => {
const {
  Button,
  Icon
} = window.HomeAssistDesignSystem_cf0a2b;
const EL_NINO_BODY = [['p', 'By Keshan Patel — CEO and Co-Founder, Home Assist Technologies', 'byline'], ['p', 'Let me start with the uncomfortable part. Most South African insurers and brokers are not resourced for what is coming this summer. The plan sitting on most desks right now is overtime, a temp agency, and a quiet hope that the season is mild. Every time that plan has been run, it has been met with the same three things: service delays, unforeseen administration costs, and customer churn.'], ['p', 'And this is no longer a forecast. It is happening.'], ['p', 'In May, US forecasters put the odds of El Niño even forming at 82%. By June, NOAA had an El Niño Advisory in force. Its diagnostic discussion of 13 August 2026 now puts the probability of a very strong event over the coming summer at greater than 90%, and gives a 69% chance that October to December 2026 exceeds the strength of every El Niño on record back to 1950.'], ['p', 'In southern Africa, El Niño is reliably associated with above-normal heat, and — with somewhat less certainty, because no two events unfold the same way — below-normal summer rainfall. Hot, dry, wind-driven conditions cure fuel loads and turn a routine ignition into a catastrophe event.'], ['p', 'The claims consequence is already showing up in the numbers. Cedric Masondo, CEO of PSG Insure, has said weather-related catastrophes became the largest force on short-term insurance claims costs in the first half of 2026, with the frequency and severity of floods, storms and wildfires all rising off what was a comparatively benign base a year earlier. Daniel Stevens, Executive Head of Agriculture at Santam, is blunter still: weather-related catastrophe losses have doubled in size over the past ten years — and they have done so while insurance uptake has not kept pace.'], ['p', 'There is also no off-season to recover in. Fire risk in South Africa does not diminish in winter, it moves: the Western Cape season runs roughly December to April, the summer-rainfall interior May to October. This year, both ends of that calendar are loaded.'], ['h2', 'The maths nobody models'], ['p', 'Your plumbing and building claims volume is a function of your book. It is predictable. You staff to it. That is precisely why it has never really hurt you.'], ['p', 'A catastrophe does not behave that way. It does not lift claims volume by 15% across a month. It delivers three to four months of first notification of loss in a matter of days, in one postal code, usually starting on a Saturday afternoon.'], ['quote', 'What breaks first is not your reserve. It is the phone.'], ['p', 'Hold times go to forty minutes. Your best FNOL consultants are overwhelmed. Claims get logged with little evidence, little verification, and sometimes the wrong peril — because the person capturing them is three hours into a queue that is not shortening. Assessors are double-booked. Contractors quote whatever they like, because nobody has time to challenge them.'], ['p', 'Then the complaints arrive, and the Ombud letters after that, and you are managing a reputational event on top of a catastrophe. Every one of those failures started as a capacity problem and ended up on your loss ratio.'], ['h2', 'Where the money actually leaks'], ['p', 'Cash settlements rise sharply in a catastrophe. Claimants want out fast, contractors are unavailable, reinstatement timelines are impossible, and settling in cash is the path of least resistance for an overloaded desk. But a cash settlement made without verification is just a number someone agreed to under time pressure.'], ['p', 'Nobody confirmed the geyser was out of warranty. Nobody checked whether the damage was the insured peril or pre-existing. Nobody costed the scope against a proper pro-forma.'], ['p', 'Multiply that by a thousand claims in a fortnight and you are not looking at leakage. You are looking at a structural hit to your loss ratio that will still be visible in next year’s numbers.'], ['h2', 'What we do about it'], ['p', 'Home Assist has run more than 40,000 property incidents in the last five years. We are built for exactly the shape of demand a catastrophe creates.'], ['lead', 'Surge FNOL capacity, outsourced.', 'Our help centre runs seven days a week and scales into an event without you hiring, training or carrying the cost when the season is quiet. Your claimants get answered, and your own team stays on the claims that need them.'], ['lead', 'A vetted national contractor network.', 'Every technician passes third-party KYC, holds a PIRB qualification, and has at least four years’ experience. Appointment is by proximity and availability, not by whoever answers first.'], ['lead', 'Verification before settlement.', 'Serial and warranty decoding, COC and PIRB registration checks, and every claim costed against a Home Assist pro-forma before money moves. Our cash settlement solution exists to stop the leakage a catastrophe causes, not to speed it up.'], ['lead', 'One point of accountability.', 'Claim data, turnaround times and cost per claim in one place, so you can see what the event is doing to your book while it is still happening.'], ['h2', 'The window is now'], ['p', 'You cannot build surge capacity during a surge. Recruitment, vetting, systems integration and contractor onboarding take weeks you will not have in November.'], ['p', 'If you write property, geyser or building risk in South Africa, the honest question is not whether you will see elevated claim volumes this season. It is whether your operation can absorb them without your loss ratio and your customer experience paying for it. That conversation belongs in August, not January.']];
const EL_NINO_SOURCES = [['NOAA Climate Prediction Center — ENSO Diagnostic Discussion, 13 August 2026', 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml'], ['IRI/Columbia — ENSO Forecast Quick Look, July 2026', 'https://iri.columbia.edu/our-expertise/climate/forecasts/enso/current/'], ['Daily Maverick — “US forecaster issues chilling El Niño warning”, 21 May 2026', 'https://www.dailymaverick.co.za/article/2026-05-21-us-forecaster-issues-chilling-el-nino-warning-with-82-chance-by-july/'], ['Business Report — “Weather-related catastrophes reshape short-term insurance landscape in 2026”, 3 July 2026', 'https://businessreport.co.za/companies/2026-07-03-weather-related-catastrophes-reshape-short-term-insurance-landscape-in-2026/'], ['Mail & Guardian — “Preparing for El Niño”, 23 July 2026', 'https://mg.co.za/the-green-guardian/2026-07-23-preparing-for-el-nino/'], ['International Association of Wildland Fire — Situation Report: South Africa', 'https://www.iawfonline.org/article/situation-report-south-africa/']];
const YOUTUBE_ID = 'sWh5zmPczDM';
const PLATES = [['plate-ariston-trendline-150.jpg', 'Trendline 150 — serial on the green rating plate'], ['plate-ariston-axios-150.jpg', 'Axios 150 — serial below the SABS mark'], ['plate-duratherm-cast.jpg', 'Duratherm — cast plate, serial stamped in the metal'], ['plate-its-solar.jpg', 'ITS Solar — collector plate on the frame'], ['plate-supahot.jpg', 'Supahot — barcode label on the end cover'], ['plate-xstream-200l.jpg', '200 L cylinder — serial on the red plate'], ['plate-solar-300l.jpg', '300 L horizontal solar — faded rating label'], ['plate-handwritten-serial.jpg', 'Serial written on the element cover']];
const POSTS = [['Insurance', 'The 2026/27 fire season won’t break your claims budget. It will break your call centre.', 'NOAA now puts a very strong El Niño over the 2026/27 summer at above 90%, with a 69% chance of a record-breaking event. South African insurers and brokers are not resourced for the FNOL surge that follows.', '17 August 2026', '8 min', '', false, EL_NINO_BODY, EL_NINO_SOURCES, YOUTUBE_ID], ['Geysers', 'What to do in the first ten minutes after your geyser bursts', 'Close the main water supply, then switch the geyser off at the distribution board. The order matters: water first, then electricity.', '12 August 2026', '4 min', 'blog-geyser-kwikot.png'], ['Geysers', 'How to tell if your geyser is still under warranty', 'The serial number plate carries the manufacturer and the date of manufacture. Decode it before you agree to a replacement.', '5 August 2026', '5 min', 'serial-plate-electrolux.jpg', false, null, null, '', PLATES], ['Insurance claims', 'Why a certificate of compliance must be logged, not just written', 'A COC that was written but never logged with the board leaves the property owner carrying the compliance risk.', '29 July 2026', '4 min', 'blog-plastering.jpg'], ['Leaks', 'Signs you have a hidden water leak — and what to do about it', 'A bill that jumps with no change in use is the first sign. The meter test tells you whether the leak is on your side of the connection.', '22 July 2026', '6 min', 'blog-leak-device.png', true], ['Insurance claims', 'Your insurer paid you out in cash. What now?', 'A cash settlement makes you the contractor. Verify the quote, the registration and the certificate before the work starts.', '15 July 2026', '5 min', 'techman-phone-home.png'], ['Geysers', 'Solar, heat pump or electric — which geyser should you replace yours with?', 'The right answer depends on your household’s hot water pattern, your roof, and what your budget can carry up front.', '8 July 2026', '7 min', 'blog-solar-geyser.png']];
function BlogPage() {
  const [post, setPost] = React.useState(null);
  if (post !== null) return /*#__PURE__*/React.createElement(Article, {
    post: POSTS[post],
    back: () => setPost(null),
    related: POSTS.filter((_, i) => i !== post).slice(0, 3)
  });
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--web-grey-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      padding: '56px 40px 44px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Blog"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...DISPLAY,
      marginBottom: 14
    }
  }, "Advice from the Home Assist team."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      fontSize: 17,
      maxWidth: '62ch',
      margin: 0
    }
  }, "Practical guidance on burst geysers, hidden leaks, certificates of compliance and insurance claims in South Africa."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      marginTop: 26,
      flexWrap: 'wrap'
    }
  }, ['All', 'Geysers', 'Leaks', 'Electrical', 'Insurance claims', 'For providers'].map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      ...LABEL,
      color: i === 0 ? 'var(--web-navy)' : 'var(--web-grey-500)',
      borderBottom: i === 0 ? '2px solid var(--web-blue)' : '2px solid transparent',
      paddingBottom: 5
    }
  }, c))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, POSTS.map(([cat, title, excerpt, date, read, img, damp, body, sources, youtube], i) => /*#__PURE__*/React.createElement("a", {
    key: title,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setPost(i);
    },
    style: {
      ...CARD,
      padding: 0,
      overflow: 'hidden',
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 170,
      background: img || youtube ? 'var(--web-grey-050)' : 'var(--web-navy)',
      borderBottom: '1px solid var(--web-grey-100)',
      overflow: 'hidden',
      display: 'grid',
      placeItems: img || youtube ? 'stretch' : 'center'
    }
  }, youtube ? /*#__PURE__*/React.createElement("img", {
    src: 'https://img.youtube.com/vi/' + youtube + '/maxresdefault.jpg',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : img ? /*#__PURE__*/React.createElement("img", {
    src: '../../assets/illustrations/' + img,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      ...LABEL,
      color: 'var(--web-blue-300)',
      textAlign: 'center',
      padding: '0 24px'
    }
  }, cat, " \xB7 ", date), damp ? /*#__PURE__*/React.createElement("div", {
    className: "ha-damp"
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: LABEL
  }, cat), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H3,
      fontSize: 19,
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      margin: 0
    }
  }, excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      ...SMALL,
      marginTop: 'auto',
      paddingTop: 8
    }
  }, date, " \xB7 ", read, " read")))))));
}
function Article({
  post,
  back,
  related
}) {
  const [cat, title, excerpt, date, read, img, damp, body, sources, youtube, plates] = post;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      maxWidth: 720,
      padding: '48px 40px 0'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      back();
    },
    style: {
      ...LABEL,
      color: 'var(--web-blue)',
      textDecoration: 'none'
    }
  }, "\u2190 All articles"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginTop: 28
    }
  }, cat), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...DISPLAY,
      fontSize: 34,
      margin: '10px 0 14px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: SMALL
  }, date, " \xB7 ", read, " read \xB7 Home Assist Technologies"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--web-grey-100)',
      margin: '28px 0'
    }
  }), youtube ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingTop: '56.25%',
      marginBottom: 28,
      borderRadius: 4,
      overflow: 'hidden',
      background: 'var(--web-navy-900)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: 'https://www.youtube.com/embed/' + youtube,
    title: title,
    allow: "accelerometer; clipboard-write; encrypted-media; picture-in-picture",
    allowFullScreen: true,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      border: 0
    }
  })) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--web-navy)'
    }
  }, excerpt), body ? /*#__PURE__*/React.createElement(React.Fragment, null, body.map(([kind, a, b], i) => {
    if (kind === 'h2') return /*#__PURE__*/React.createElement("h2", {
      key: i,
      style: {
        ...H2,
        fontSize: 22,
        margin: '32px 0 10px'
      }
    }, a);
    if (kind === 'quote') return /*#__PURE__*/React.createElement("blockquote", {
      key: i,
      style: {
        margin: '28px 0',
        paddingLeft: 22,
        borderLeft: '3px solid var(--web-blue)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        font: '600 21px/1.4 var(--font-core)',
        color: 'var(--web-navy)',
        margin: 0
      }
    }, a));
    if (kind === 'lead') return /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        ...BODY,
        fontSize: 17
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--web-navy)'
      }
    }, a), " ", b);
    if (b === 'byline') return /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        ...BODY,
        fontSize: 17,
        fontWeight: 600,
        color: 'var(--web-navy)'
      }
    }, a);
    return /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        ...BODY,
        fontSize: 17
      }
    }, a);
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      fontSize: 17
    }
  }, "The rest of this article is to be written to the answer-first structure: a direct answer in the first two sentences, then the detail, then what to do next. Section headings are set as real questions, each answered in its opening sentence."), /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginTop: 32,
      marginBottom: 8
    }
  }, "Section"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H2,
      fontSize: 21
    }
  }, "What should you do first?"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      fontSize: 17
    }
  }, "Draft copy pending. Every factual claim, price and turnaround in the published version must be confirmed before it goes live."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '28px 0',
      paddingLeft: 22,
      borderLeft: '3px solid var(--web-blue)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '600 21px/1.4 var(--font-core)',
      color: 'var(--web-navy)',
      margin: 0
    }
  }, "The work must be verified, the certificate must be logged, and the person who did the work must be paid quickly."))), plates ? /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 6
    }
  }, "What a serial plate looks like"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 0
    }
  }, "Plates from Duratherm, Kwikot, Heat Tech, ITS, Supahot and Tecron units we have worked on recently. The plate sits on the end cover or the side of the cylinder, and carries the manufacturer, the capacity and the serial number."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 12
    }
  }, plates.map(([file, caption]) => /*#__PURE__*/React.createElement("figure", {
    key: file,
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../assets/plates/' + file,
    alt: caption,
    style: {
      width: '100%',
      height: 130,
      objectFit: 'cover',
      display: 'block',
      borderRadius: 3,
      border: '1px solid var(--web-grey-100)'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      ...SMALL,
      marginTop: 6
    }
  }, caption))))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CARD,
      background: 'var(--web-blue-050)',
      border: '1px solid var(--web-blue-100)',
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      flexWrap: 'wrap',
      margin: '32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 300px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 6
    }
  }, "Need help now?"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      margin: 0
    }
  }, "Message us and we will allocate a verified artisan in your area.")), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    variant: "navy",
    href: wa('Hi Home Assist, I read your article and I need help with: '),
    target: "_blank",
    rel: "noopener",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 17,
      color: "#fff"
    })
  }, "WhatsApp us")), sources ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--web-grey-100)',
      paddingTop: 24,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 12
    }
  }, "Sources"), /*#__PURE__*/React.createElement("ul", {
    style: {
      ...SMALL,
      margin: 0,
      paddingLeft: 18,
      display: 'grid',
      gap: 6
    }
  }, sources.map(([label, url]) => /*#__PURE__*/React.createElement("li", {
    key: url
  }, /*#__PURE__*/React.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener"
  }, label))))) : null), /*#__PURE__*/React.createElement(Section, {
    tint: true,
    eyebrow: "Related",
    title: "Read next"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, related.map(([c, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: LABEL
  }, c), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...H3,
      fontSize: 17,
      marginTop: 8
    }
  }, t))))));
}
Object.assign(window, {
  BlogPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BlogPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Button,
  Icon,
  Card
} = window.HomeAssistDesignSystem_cf0a2b;
const CH = {
  waHome: '+27 71 526 2554',
  waHomeDigits: '27715262554',
  phone: '087 095 5231',
  phoneTel: '+27870955231',
  help: 'help@homeassist.co.za',
  waBiz: '082 572 8220',
  waBizDigits: '27825728220',
  biz: 'keshan@homeassist.co.za',
  address: '12 Uitvlugt Road, Pinelands, Cape Town, South Africa, 7405',
  portal: 'https://portal.homeassist.co.za/',
  register: 'https://portal.homeassist.co.za/Account/Register',
  booking: 'https://calendar.app.google/9QkhMLKCyLuHyp696'
};
const wa = (msg, biz) => `https://wa.me/${biz ? CH.waBizDigits : CH.waHomeDigits}?text=${encodeURIComponent(msg)}`;
const NAV = [{
  id: 'home',
  label: 'Home',
  route: '/'
}, {
  id: 'insurers',
  label: 'For Insurers',
  route: '/insurers'
}, {
  id: 'join',
  label: 'Join us',
  route: '/join'
}, {
  id: 'portal',
  label: 'Portal',
  route: '/portal'
}, {
  id: 'blog',
  label: 'Blog',
  route: '/blog'
}, {
  id: 'about',
  label: 'About',
  route: '/about'
}];
const WRAP = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 40px'
};
const LABEL = {
  font: '700 var(--web-size-label)/var(--web-lh-label) var(--font-core)',
  letterSpacing: 'var(--web-label-tracking)',
  textTransform: 'uppercase',
  color: 'var(--web-navy)'
};
const H1 = {
  font: '700 var(--web-size-h1)/var(--web-lh-h1) var(--font-core)',
  color: 'var(--web-navy)',
  margin: 0
};
const DISPLAY = {
  font: '700 var(--web-size-display)/var(--web-lh-display) var(--font-core)',
  color: 'var(--web-navy)',
  margin: 0,
  letterSpacing: '-0.01em'
};
const H2 = {
  font: '700 var(--web-size-h2)/var(--web-lh-h2) var(--font-core)',
  color: 'var(--web-navy)',
  margin: '0 0 12px'
};
const H3 = {
  font: '600 var(--web-size-h3)/var(--web-lh-h3) var(--font-core)',
  color: 'var(--web-navy)',
  margin: '0 0 6px'
};
const BODY = {
  font: '400 var(--web-size-body)/var(--web-lh-body) var(--font-core)',
  color: 'var(--web-grey-700)',
  margin: '0 0 12px'
};
const SMALL = {
  font: '400 var(--web-size-small)/var(--web-lh-small) var(--font-core)',
  color: 'var(--web-grey-500)',
  margin: 0
};
const CARD = {
  background: '#fff',
  border: '1px solid var(--web-grey-100)',
  borderRadius: 4,
  boxShadow: 'var(--web-shadow-card)',
  padding: 24
};
function Eyebrow({
  children,
  onDark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      color: onDark ? 'var(--web-blue-300)' : 'var(--web-navy)',
      marginBottom: 10
    }
  }, children);
}
function Section({
  eyebrow,
  title,
  intro,
  children,
  tint,
  id,
  narrow
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: tint ? 'var(--web-grey-050)' : '#fff',
      borderTop: tint ? '1px solid var(--web-grey-100)' : 'none',
      borderBottom: tint ? '1px solid var(--web-grey-100)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      padding: '64px 40px',
      maxWidth: narrow ? 860 : 1200
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H2,
      fontSize: 26,
      marginBottom: 14,
      maxWidth: '22ch'
    }
  }, title) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 3,
      background: 'var(--web-blue)',
      marginBottom: 24
    }
  }) : null, intro ? /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      maxWidth: '68ch',
      fontSize: 17
    }
  }, intro) : null, children));
}
function Header({
  page,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: '#fff',
      borderBottom: '1px solid var(--web-grey-100)',
      height: 'var(--web-header-height)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      display: 'block',
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/homeassist-logo-horizontal.png",
    alt: "Home Assist",
    style: {
      height: 30,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 22,
      alignItems: 'center'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: '#' + n.route,
    onClick: e => {
      e.preventDefault();
      go(n.id);
    },
    style: {
      font: (page === n.id ? '600' : '400') + ' var(--web-size-body)/1 var(--font-core)',
      color: page === n.id ? 'var(--web-navy)' : 'var(--web-grey-700)',
      textDecoration: 'none',
      paddingBottom: 3,
      borderBottom: page === n.id ? '2px solid var(--web-blue)' : '2px solid transparent'
    }
  }, n.label))), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    variant: "navy",
    href: wa('Hi Home Assist, I need help with: '),
    target: "_blank",
    rel: "noopener",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 17,
      color: "#fff"
    })
  }, "WhatsApp Us")));
}
function Footer({
  go
}) {
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  };
  const link = {
    font: '400 var(--web-size-small)/1.5 var(--font-core)',
    color: '#fff',
    opacity: .82,
    textDecoration: 'none'
  };
  const head = {
    ...LABEL,
    color: 'var(--web-blue-300)',
    marginBottom: 6
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--web-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      padding: '56px 40px 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/homeassist-logo-horizontal-white.png",
    alt: "Home Assist",
    style: {
      height: 28,
      width: 'auto',
      display: 'block',
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      ...SMALL,
      color: '#fff',
      opacity: .8,
      maxWidth: '30ch'
    }
  }, "Property Incident management, South Africa.")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "For homeowners"), ['Burst geyser', 'Leak detection', 'Burst pipe repair', 'Electrical', 'Building repairs'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#/",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: link
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "For business"), /*#__PURE__*/React.createElement("a", {
    href: "#/insurers",
    onClick: e => {
      e.preventDefault();
      go('insurers');
    },
    style: link
  }, "Insurers and brokers"), /*#__PURE__*/React.createElement("a", {
    href: "#/join",
    onClick: e => {
      e.preventDefault();
      go('join');
    },
    style: link
  }, "Join our network"), /*#__PURE__*/React.createElement("a", {
    href: "#/portal",
    onClick: e => {
      e.preventDefault();
      go('portal');
    },
    style: link
  }, "Portal"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...head,
      marginTop: 14,
      marginBottom: 6
    }
  }, "Legal"), /*#__PURE__*/React.createElement("a", {
    href: "#/terms",
    onClick: e => {
      e.preventDefault();
      go('terms');
    },
    style: link
  }, "Terms of Use"), /*#__PURE__*/React.createElement("a", {
    href: "#/privacy-policy",
    onClick: e => {
      e.preventDefault();
      go('privacy');
    },
    style: link
  }, "Privacy Policy")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Contact"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...head,
      marginBottom: 2
    }
  }, "WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: wa('Hi Home Assist, '),
    style: link
  }, CH.waHome)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...head,
      marginBottom: 2
    }
  }, "Phone"), /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + CH.phoneTel,
    style: link
  }, CH.phone)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...head,
      marginBottom: 2
    }
  }, "Email"), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + CH.help,
    style: link
  }, CH.help)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...head,
      marginBottom: 2
    }
  }, "Address"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...link,
      opacity: .82
    }
  }, CH.address)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      padding: '16px 40px',
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...SMALL,
      color: '#fff',
      opacity: .6
    }
  }, "Home Assist Technologies (Pty) Ltd \xB7 homeassist.co.za"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...SMALL,
      color: '#fff',
      opacity: .6,
      marginLeft: 'auto'
    }
  }, CH.help, " \xB7 ", CH.phone, " \xB7 ", CH.address))));
}
function NavyBand({
  eyebrow,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--web-navy)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      padding: '56px 40px',
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 420px'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H2,
      fontSize: 26,
      color: '#fff',
      margin: 0,
      maxWidth: '26ch'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, children)));
}
function LabelCard({
  label,
  title,
  children,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: CARD
  }, icon ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    color: "var(--web-blue)",
    style: {
      marginBottom: 12
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 8
    }
  }, label), title ? /*#__PURE__*/React.createElement("h3", {
    style: H3
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...BODY,
      margin: 0
    }
  }, children));
}
function Stat({
  figure,
  label
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 var(--web-size-display)/1 var(--font-core)',
      color: 'var(--web-navy)'
    }
  }, figure), /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginTop: 8
    }
  }, label));
}
function Steps({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length},1fr)`,
      gap: 24,
      marginTop: 8
    }
  }, items.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      borderTop: '2px solid var(--web-navy)',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL
    }
  }, n, " ", t), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      margin: '10px 0 0'
    }
  }, d))));
}
function Accordion({
  items
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--web-grey-100)'
    }
  }, items.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      borderBottom: '1px solid var(--web-grey-100)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      background: 'none',
      border: 0,
      padding: '18px 0',
      cursor: 'pointer',
      textAlign: 'left',
      minHeight: 'var(--web-tap-min)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 17px/1.4 var(--font-core)',
      color: 'var(--web-navy)',
      flex: 1
    }
  }, q), /*#__PURE__*/React.createElement(Icon, {
    name: open === i ? 'minus' : 'plus',
    size: 18,
    color: "var(--web-blue)"
  })), open === i ? /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      maxWidth: '68ch',
      padding: '0 0 20px'
    }
  }, a) : null)));
}
function FieldRow({
  label,
  children,
  hint
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...LABEL,
      display: 'block',
      marginBottom: 6
    }
  }, label), children, hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...SMALL,
      display: 'block',
      marginTop: 5
    }
  }, hint) : null);
}
const INPUT = {
  width: '100%',
  boxSizing: 'border-box',
  minHeight: 'var(--web-tap-min)',
  border: '1px solid var(--web-grey-300)',
  borderRadius: 4,
  padding: '10px 12px',
  font: '400 var(--web-size-body)/1.4 var(--font-core)',
  color: 'var(--web-grey-700)',
  background: '#fff'
};
function ChannelCard({
  label,
  value,
  note,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 10
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 21px/1.2 var(--font-core)',
      color: 'var(--web-navy)',
      marginBottom: 8
    }
  }, value), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginBottom: action ? 16 : 0
    }
  }, note), action);
}
function Confirm({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...LABEL,
      color: 'var(--web-blue)',
      border: '1px solid var(--web-blue-100)',
      background: 'var(--web-blue-050)',
      padding: '2px 6px',
      borderRadius: 2,
      whiteSpace: 'nowrap'
    }
  }, "[CONFIRM", children ? ' ' + children : '', "]");
}
Object.assign(window, {
  CH,
  wa,
  NAV,
  WRAP,
  LABEL,
  H1,
  H2,
  H3,
  DISPLAY,
  BODY,
  SMALL,
  CARD,
  INPUT,
  Eyebrow,
  Section,
  Header,
  Footer,
  NavyBand,
  LabelCard,
  Stat,
  Steps,
  Accordion,
  FieldRow,
  ChannelCard,
  Confirm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
const {
  Button,
  Icon
} = window.HomeAssistDesignSystem_cf0a2b;
const HOME_FAQ = [['What should I do first when my geyser bursts?', 'Close the main water supply at the meter, then switch the geyser off at the distribution board. Open a hot tap to relieve pressure, move what you can out of the way of the water, photograph the damage before anything is moved, and message us on WhatsApp.'], ['How quickly can you get a plumber to my house?', 'We acknowledge every emergency message immediately and allocate the closest available verified artisan. Standard attendance times are still being confirmed.'], ['Do you work after hours and on weekends?', 'Yes. The WhatsApp line and the hotline are attended 24 hours a day, seven days a week.'], ['Is my geyser still under warranty?', 'Send us a photograph of the serial number plate on the geyser. We decode the manufacturer and date code and tell you whether the unit is still covered, because a unit under warranty may be repaired or replaced by the manufacturer at no cost to you.'], ['Do you issue a certificate of compliance?', 'Yes. Plumbing work is certified to SANS 10254 and electrical work to SANS 10142-1. The certificate is issued and logged with the relevant board, not simply written out.'], ['Which areas do you cover?', 'We work through a nationwide network, with the strongest coverage in Cape Town, Johannesburg, Pretoria, Durban and Gqeberha. The confirmed service-area list is being finalised.'], ['What does it cost to replace a burst geyser?', 'The cost depends on the size and type of the unit, how accessible the installation is, and whether the existing geyser is still under manufacturer warranty. We check the warranty before quoting a replacement.'], ['Can you help if my insurer has paid me out in cash?', 'Yes. If your insurer has settled in cash and asked you to appoint your own plumber, we can verify the quote and the work before you commit to it.'], ['Are your artisans registered and insured?', 'Every provider on the network is a registered entity carrying public liability cover, with a licensed technician genuinely linked to the working company. We verify this before allocating work.']];
const GOOGLE_REVIEWS = [['Anneline Coopsamy', 5, 'a year ago', 'The plumbers were excellent. Installation was quick. Service was impeccable. I am very happy with the services rendered.', 'Happy to be of service'], ['Sebastian Vries', 5, 'a year ago', 'Very happy with the service. Best company ever!!', 'Thank you'], ['Renita Swart', 5, 'a year ago', 'Always satisfied with your service.', 'Thank you'], ['Matshidiso Taunyane', 5, 'a year ago', 'The assistance on replacing the geyser was very efficient and a good job, we are also very grateful for the short turnaround in assistance after incident was reported.', 'Thank you']];
const GOOGLE_SUMMARY = {
  rating: '4,4',
  count: 9,
  bars: [[5, 6], [4, 1], [3, 0], [2, 0], [1, 1]]
};
function Stars({
  n,
  size = 15
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, [0, 1, 2, 3, 4].map(s => /*#__PURE__*/React.createElement(Icon, {
    key: s,
    name: "star",
    size: size,
    color: s < n ? '#F2B01E' : 'var(--web-grey-300)'
  })));
}
function ReviewsCarousel() {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const n = GOOGLE_REVIEWS.length;
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(p => (p + 1) % n), 6000);
    return () => clearInterval(t);
  }, [paused, n]);
  const track = {
    display: 'flex',
    gap: 20,
    transition: 'transform 520ms cubic-bezier(.2,0,.2,1)',
    transform: 'translateX(calc(' + -i * 100 + '% - ' + i * 20 + 'px))'
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: track
  }, GOOGLE_REVIEWS.map(([name, stars, when, text, reply]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      ...CARD,
      flex: '0 0 100%',
      minWidth: 0,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 17,
      background: 'var(--web-navy)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      font: '600 15px/1 var(--font-core)'
    }
  }, name.charAt(0)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '600 15px/1.2 var(--font-core)',
      color: 'var(--web-navy)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      ...SMALL,
      display: 'block',
      marginTop: 2
    }
  }, when, " \xB7 Google")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    n: stars
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      minHeight: '4.5em'
    }
  }, text), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '2px solid var(--web-blue-100)',
      paddingLeft: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      color: 'var(--web-grey-500)'
    }
  }, "Home Assist Technologies"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...SMALL,
      margin: '4px 0 0'
    }
  }, reply)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous review",
    onClick: () => setI((i - 1 + n) % n),
    style: {
      width: 34,
      height: 34,
      borderRadius: 3,
      border: '1px solid var(--web-grey-300)',
      background: '#fff',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 18,
    color: "var(--web-navy)"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next review",
    onClick: () => setI((i + 1) % n),
    style: {
      width: 34,
      height: 34,
      borderRadius: 3,
      border: '1px solid var(--web-grey-300)',
      background: '#fff',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--web-navy)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginLeft: 6
    }
  }, GOOGLE_REVIEWS.map(([name], k) => /*#__PURE__*/React.createElement("button", {
    key: name,
    type: "button",
    "aria-label": 'Review ' + (k + 1),
    onClick: () => setI(k),
    style: {
      width: k === i ? 20 : 8,
      height: 8,
      borderRadius: 4,
      border: 0,
      padding: 0,
      background: k === i ? 'var(--web-blue)' : 'var(--web-grey-300)',
      cursor: 'pointer',
      transition: 'width 200ms'
    }
  })))));
}
function CostReveal({
  context,
  lines,
  children
}) {
  const [open, setOpen] = React.useState(false);
  const reveal = () => {
    setOpen(true);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'estimated_costs_view',
      cost_context: context
    });
    if (typeof window.gtag === 'function') window.gtag('event', 'estimated_costs_view', {
      cost_context: context
    });
  };
  return /*#__PURE__*/React.createElement("div", null, !open ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: BODY
  }, "Costs vary by site. Open the indicative range for a standard installation or repair."), /*#__PURE__*/React.createElement(Button, {
    variant: "navy",
    fullWidth: true,
    onClick: reveal,
    "data-ga-event": "estimated_costs_view",
    "data-ga-context": context,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "calculator",
      size: 17,
      color: "#fff"
    })
  }, "Estimated costs")) : /*#__PURE__*/React.createElement(React.Fragment, null, lines.map((line, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: BODY
  }, line)), /*#__PURE__*/React.createElement("p", {
    style: {
      ...SMALL,
      borderTop: '1px solid var(--web-blue-100)',
      paddingTop: 12
    }
  }, "Every site is different. These prices are indications for standard installations and repairs. Your final cost depends on access, the condition of the existing installation and the scope found on site."), children));
}
function HomePage({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--web-grey-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      padding: '64px 40px 56px',
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "24/7 home emergency response"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...DISPLAY,
      maxWidth: '20ch',
      marginBottom: 18
    }
  }, "Burst geyser, leaking pipe or no power? Get a verified artisan to your home."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      fontSize: 17,
      maxWidth: '58ch',
      marginBottom: 24
    }
  }, "Home Assist connects South African homeowners with vetted plumbers, electricians and building contractors. Send us a message on WhatsApp and we will find the right person for the job."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "navy",
    href: wa('Hi Home Assist, I need help with: '),
    target: "_blank",
    rel: "noopener",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 19,
      color: "#fff"
    })
  }, "WhatsApp us now"), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "secondary",
    href: 'tel:' + CH.phoneTel,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17,
      color: "var(--web-navy)"
    })
  }, "Call ", CH.phone)), /*#__PURE__*/React.createElement("p", {
    style: SMALL
  }, "Available 24/7 \xB7 Nationwide network \xB7 Every job verified")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 4,
      display: 'grid',
      placeItems: 'center',
      minHeight: 340,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/techman-home-app.gif",
    alt: "A Home Assist technician logging a job on the app outside a home",
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--web-grey-050)',
      borderBottom: '1px solid var(--web-grey-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      padding: '20px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, [['Verified artisans', 'Registered, licensed, vetted & Contracted'], ['COC issued, checked and logged', 'All Installations are aligned to South African National Standards SANS'], ['24/7 response', 'WhatsApp and hotline, every day'], ['Work guaranteed', '1 year workmanship warranty on all work. Terms and conditions apply.']].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: LABEL
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      ...SMALL,
      marginTop: 6
    }
  }, v || /*#__PURE__*/React.createElement(Confirm, null)))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Where to start",
    title: "What do you need help with?"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#geyser",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(LabelCard, {
    icon: "droplets",
    label: "Plumbing emergency",
    title: "Burst geyser replacement"
  }, "A burst geyser is a plumbing emergency. Close the main water supply, switch the geyser off at the DB board, and message us.")), /*#__PURE__*/React.createElement("a", {
    href: "#leaks",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(LabelCard, {
    icon: "search",
    label: "Hidden water loss",
    title: "Leak detection and burst pipe repair"
  }, "Unexplained high water bill, damp walls or the sound of running water with all the taps closed.")), /*#__PURE__*/React.createElement("a", {
    href: "#trades",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(LabelCard, {
    icon: "zap",
    label: "Power and repairs",
    title: "Electrical and building repairs"
  }, "No power, a tripping board, or the ceiling and waterproofing repairs that follow a water leak.")))), /*#__PURE__*/React.createElement(Section, {
    id: "geyser",
    tint: true,
    eyebrow: "Burst geyser",
    title: "What to do when your geyser bursts",
    intro: "A burst geyser is a plumbing emergency. Shut the water off first, then the electricity, then call for help \u2014 in that order."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 10
    }
  }, "What to do first"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  }, ['Close the main water supply at the meter.', 'Switch the geyser off at the distribution board.', 'Open a hot tap to relieve the pressure.', 'Move what you can out of the way of the water.', 'Take photographs before anything is moved.', 'Message Home Assist on WhatsApp.'].map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s,
    style: {
      display: 'flex',
      gap: 14,
      padding: '10px 0',
      borderBottom: '1px solid var(--web-grey-100)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...LABEL,
      color: 'var(--web-blue)',
      width: 22
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      ...BODY,
      margin: 0
    }
  }, s))))), /*#__PURE__*/React.createElement("div", {
    style: CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 10
    }
  }, "What a replacement includes"), /*#__PURE__*/React.createElement("p", {
    style: BODY
  }, "A new geyser installed to SANS 10254, will include a new drip tray, vacuum breakers, a safety valve, a pressure control valve, overflow and drain pipes, and a SANS or PIRB certificate of compliance issued and logged."), /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      margin: '18px 0 10px'
    }
  }, "How long it takes"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      margin: 0
    }
  }, "Most like-for-like replacements are completed within 3 - 5 hours normally with a single visit on the same day. High volumes of work in winter sometime means next day service")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...CARD,
      background: 'var(--web-blue-050)',
      border: '1px solid var(--web-blue-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 10
    }
  }, "What it costs"), /*#__PURE__*/React.createElement(CostReveal, {
    context: "burst_geyser",
    lines: ['The cost depends on the size of the unit, the brand, the type — electric, solar or heat pump — how accessible the installation is, and whether the existing unit is still under manufacturer warranty. We typically see costs ranging between R 9,800 ex vat and R 12,800 ex vat for safe complaint geyser replacements']
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    variant: "navy",
    fullWidth: true,
    href: wa('Hi Home Assist, my geyser has burst. '),
    target: "_blank",
    rel: "noopener",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 17,
      color: "#fff"
    })
  }, "Send us the details")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      ...CARD,
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      gap: 28,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "../../assets/certificates/home-assist-iopsa-2026.jpeg",
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/iopsa-logo.png",
    alt: "The Institute of Plumbing South Africa",
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 10
    }
  }, "Who may work on your geyser"), /*#__PURE__*/React.createElement("p", {
    style: BODY
  }, "Plumbers must be registered with the ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.pirb.co.za/",
    target: "_blank",
    rel: "noopener"
  }, "Plumbing Industry Registration Board"), ". Home Assist Technologies is a registered member of IOPSA, membership number 57677983, valid 01/03/2026 to 28/02/2027."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "../../assets/certificates/home-assist-iopsa-2026.jpeg",
    target: "_blank",
    rel: "noopener"
  }, "View our IOPSA membership certificate")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      background: '#fff',
      border: '1px solid var(--web-grey-100)',
      borderLeft: '3px solid var(--web-blue)',
      borderRadius: 4,
      padding: '28px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: 32,
      alignItems: 'center',
      boxShadow: 'var(--web-shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 10
    }
  }, "Before you replace anything"), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...H2,
      fontSize: 21
    }
  }, "Is your geyser still under warranty?"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      maxWidth: '64ch'
    }
  }, "We check the manufacturer warranty on the existing unit before we quote a replacement. A geyser still under warranty may be repaired or replaced by the manufacturer at no cost to you. Send us a photograph of the serial number plate and we will decode it and tell you."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY
    }
  }, "If you are claiming, or your insurer has settled in cash and asked you to appoint your own plumber, we can verify the quote and the work."), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    variant: "navy",
    size: "lg",
    href: wa('Hi Home Assist, here is a photo of my geyser serial plate. Is it still under warranty?'),
    target: "_blank",
    rel: "noopener",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "camera",
      size: 18,
      color: "#fff"
    })
  }, "Send us the serial plate")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 4,
      overflow: 'hidden',
      border: '1px solid var(--web-grey-100)',
      background: 'var(--web-navy-900)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/serial-plate-electrolux.jpg",
    alt: "Geyser serial number plate showing model and date code",
    style: {
      display: 'block',
      width: '100%',
      height: 168,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ha-scan"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 10,
      bottom: 8,
      ...LABEL,
      fontSize: 10,
      color: '#fff',
      background: 'rgba(11,29,58,.72)',
      padding: '3px 6px',
      borderRadius: 2
    }
  }, "Decoding serial")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/geyser-kwikot.png",
    alt: "Replacement geyser",
    style: {
      width: 108,
      height: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      ...SMALL,
      margin: 0
    }
  }, "Photograph the plate on the unit and send it to WhatsApp ", CH.waHome, "."))))), /*#__PURE__*/React.createElement(Section, {
    id: "leaks",
    eyebrow: "Leak detection",
    title: "Leak detection and burst pipe repair",
    intro: "Leak detection finds a hidden water leak without breaking open walls, floors or paving."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 10
    }
  }, "Signs you have a hidden leak"), /*#__PURE__*/React.createElement("ul", {
    style: {
      ...BODY,
      margin: 0,
      paddingLeft: 18
    }
  }, /*#__PURE__*/React.createElement("li", null, "A water bill that has jumped with no change in use"), /*#__PURE__*/React.createElement("li", null, "The water meter turning with every tap closed"), /*#__PURE__*/React.createElement("li", null, "A damp patch or a warm spot on a floor"), /*#__PURE__*/React.createElement("li", null, "The sound of running water in a wall"), /*#__PURE__*/React.createElement("li", null, "Paint bubbling, or a musty smell"))), /*#__PURE__*/React.createElement("div", {
    style: CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 10
    }
  }, "How leak detection works"), /*#__PURE__*/React.createElement("p", {
    style: BODY
  }, "We start with the non-invasive methods: an isolation test on the meter, then acoustic listening and thermal imaging or gas tracer work to narrow the position of the leak."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      margin: 0
    }
  }, "Once the leak is pinpointed, we open only what has to be opened, repair the pipe, pressure test the line and make good.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...CARD,
      background: 'var(--web-blue-050)',
      border: '1px solid var(--web-blue-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 10
    }
  }, "What it costs"), /*#__PURE__*/React.createElement(CostReveal, {
    context: "leak_detection",
    lines: ['Leak Detection is completed first to pin point the leak, the pipe repair and the subsequent resulting repairs will happen there after. We typically see cost of the finding the leak and repairing the leak in the R 2000 ex vat to R 6,200 ex vatrange and resultant repairs ranges from R5,000 to R21,000 ex vat. Note the repair scope is only known once the leak is found.']
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    variant: "navy",
    fullWidth: true,
    href: wa('Hi Home Assist, I think I have a hidden water leak. '),
    target: "_blank",
    rel: "noopener",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 17,
      color: "#fff"
    })
  }, "Send us the details"))))), /*#__PURE__*/React.createElement(Section, {
    id: "trades",
    tint: true,
    eyebrow: "Other trades",
    title: "Electricians, gas and building contractors"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: CARD
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 20,
    color: "var(--web-blue)",
    style: {
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: H3
  }, "Electricians"), /*#__PURE__*/React.createElement("p", {
    style: BODY
  }, "No power, a distribution board that keeps tripping, fault finding, rewiring, and the electrical certificate of compliance a property sale requires."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      margin: 0
    }
  }, "Home Assist electricians are registered persons with the ", /*#__PURE__*/React.createElement("a", {
    href: "https://ecasa.co.za/",
    target: "_blank",
    rel: "noopener"
  }, "Electrical Contractors Board"), " where issued certificates are registered and logged")), /*#__PURE__*/React.createElement("div", {
    style: CARD
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "hard-hat",
    size: 20,
    color: "var(--web-blue)",
    style: {
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: H3
  }, "Building contractors"), /*#__PURE__*/React.createElement("p", {
    style: BODY
  }, "Ceiling replacement after a leak, waterproofing, making good after water damage, and general repairs."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      margin: 0
    }
  }, "The same SANS standard applies: a registered entity will need a registration with ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.cidb.org.za/",
    target: "_blank",
    rel: "noopener"
  }, "Construction Industry Registration Development"), " Board and as a minimum requirement ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.nhbrc.org.za/",
    target: "_blank",
    rel: "noopener"
  }, "National Home Builders Registration Council"), ", a scoped quote, photographic evidence before and after.")), /*#__PURE__*/React.createElement("div", {
    style: CARD
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flame",
    size: 20,
    color: "var(--web-blue)",
    style: {
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: H3
  }, "Gas geyser installers and repairers"), /*#__PURE__*/React.createElement("p", {
    style: BODY
  }, "Gas geysers and other gas equipment, including HVAC, which we also handle."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      margin: 0
    }
  }, "Gas installers must be registered with the ", /*#__PURE__*/React.createElement("a", {
    href: "https://lpgas.co.za/",
    target: "_blank",
    rel: "noopener"
  }, "LPGSA"), ", and a gas certificate of conformity is issued on completion.")))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "How it works",
    title: "From your first message to a finished job"
  }, /*#__PURE__*/React.createElement(Steps, {
    items: [['01', 'You message us', 'WhatsApp, call or the form below. Tell us what has happened and where you are.'], ['02', 'We find the artisan', 'From our verified nationwide network, matched to your job and your area.'], ['03', 'The work is verified', "We check the technician's registration, the certificate is issued and logged, and the price is checked against benchmark."], ['04', 'You are looked after', 'One point of contact from the first message to the finished job.']]
  })), /*#__PURE__*/React.createElement(RequestForm, null), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Reviews",
    title: "What our customers say",
    intro: "Reviews from the Home Assist Technologies Google Business Profile."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px minmax(0, 1fr)',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 12
    }
  }, "Google review summary"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 40px/1 var(--font-core)',
      color: 'var(--web-navy)'
    }
  }, GOOGLE_SUMMARY.rating), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Stars, {
    n: 4,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...SMALL,
      display: 'block',
      marginTop: 4
    }
  }, "(", GOOGLE_SUMMARY.count, " reviews)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6,
      marginTop: 16
    }
  }, GOOGLE_SUMMARY.bars.map(([star, count]) => /*#__PURE__*/React.createElement("div", {
    key: star,
    style: {
      display: 'grid',
      gridTemplateColumns: '10px 1fr',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...SMALL,
      color: 'var(--web-grey-500)'
    }
  }, star), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 7,
      background: 'var(--web-grey-100)',
      borderRadius: 4,
      overflow: 'hidden',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: count / GOOGLE_SUMMARY.count * 100 + '%',
      background: '#F2B01E'
    }
  }))))), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    variant: "ghost",
    fullWidth: true,
    href: "https://www.google.com/search?q=home+assist+technologies",
    target: "_blank",
    rel: "noopener",
    style: {
      marginTop: 18
    }
  }, "Read them on Google")), /*#__PURE__*/React.createElement(ReviewsCarousel, null))), /*#__PURE__*/React.createElement(Section, {
    tint: true,
    narrow: true,
    eyebrow: "Questions",
    title: "Frequently asked questions"
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: HOME_FAQ
  })), /*#__PURE__*/React.createElement(NavyBand, {
    eyebrow: "Get help now",
    title: "Message us on WhatsApp. We pick up 24 hours a day."
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "onDark",
    href: wa('Hi Home Assist, I need help with: '),
    target: "_blank",
    rel: "noopener",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 18,
      color: "var(--web-navy)"
    })
  }, "WhatsApp ", CH.waHome), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "ghost",
    href: 'tel:' + CH.phoneTel,
    style: {
      color: '#fff',
      border: '1px solid rgba(255,255,255,.5)'
    }
  }, "Call ", CH.phone), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "ghost",
    href: 'mailto:' + CH.help,
    style: {
      color: '#fff',
      border: '1px solid rgba(255,255,255,.5)'
    }
  }, CH.help)));
}
function RequestForm() {
  const [sent, setSent] = React.useState(false);
  const row = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 20,
    marginBottom: 20
  };
  if (sent) return /*#__PURE__*/React.createElement(Section, {
    tint: true,
    eyebrow: "Request received"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--web-navy)',
      borderRadius: 4,
      padding: '40px 44px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "We have your request"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H2,
      color: '#fff',
      fontSize: 26
    }
  }, "We have your request."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      color: 'rgba(255,255,255,.85)',
      maxWidth: '60ch'
    }
  }, "A consultant is matching you with an artisan in your area and will come back to you on WhatsApp. For anything urgent, message us and we will pick it up immediately."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    variant: "onDark",
    href: wa('Hi Home Assist, I have just sent a request through the website. '),
    target: "_blank",
    rel: "noopener"
  }, "Message us on WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setSent(false),
    style: {
      color: '#fff',
      border: '1px solid rgba(255,255,255,.5)'
    }
  }, "Send another request"))));
  return /*#__PURE__*/React.createElement(Section, {
    tint: true,
    eyebrow: "Service request",
    title: "Tell us what you need",
    intro: "We will match you with an artisan and come back to you on WhatsApp."
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      ...CARD,
      padding: 32,
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement(FieldRow, {
    label: "Full name"
  }, /*#__PURE__*/React.createElement("input", {
    style: INPUT,
    required: true
  })), /*#__PURE__*/React.createElement(FieldRow, {
    label: "Mobile number",
    hint: "South African format, e.g. 082 123 4567"
  }, /*#__PURE__*/React.createElement("input", {
    style: INPUT,
    type: "tel",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement(FieldRow, {
    label: "Email address (optional)"
  }, /*#__PURE__*/React.createElement("input", {
    style: INPUT,
    type: "email"
  })), /*#__PURE__*/React.createElement(FieldRow, {
    label: "What do you need?"
  }, /*#__PURE__*/React.createElement("select", {
    style: INPUT,
    required: true,
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Select a service"), ['Burst geyser', 'Leak detection', 'Burst pipe repair', 'Electrical', 'Building or ceiling repair', 'Something else'].map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(FieldRow, {
    label: "Describe the problem"
  }, /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...INPUT,
      minHeight: 96,
      resize: 'vertical'
    },
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement(FieldRow, {
    label: "Suburb or area"
  }, /*#__PURE__*/React.createElement("input", {
    style: INPUT,
    required: true
  })), /*#__PURE__*/React.createElement(FieldRow, {
    label: "City"
  }, /*#__PURE__*/React.createElement("select", {
    style: INPUT,
    required: true,
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Select a city"), ['Cape Town', 'Johannesburg', 'Pretoria', 'Durban', 'Gqeberha', 'Other'].map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))))), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement(FieldRow, {
    label: "Is this an emergency?"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      paddingTop: 4
    }
  }, ['Yes, today', 'Within a few days', 'Just getting a quote'].map(o => /*#__PURE__*/React.createElement("label", {
    key: o,
    style: {
      ...BODY,
      margin: 0,
      display: 'flex',
      gap: 9,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "urgency",
    required: true
  }), o)))), /*#__PURE__*/React.createElement(FieldRow, {
    label: "Are you claiming from insurance?"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      paddingTop: 4
    }
  }, ['Yes', 'No', 'Not sure'].map(o => /*#__PURE__*/React.createElement("label", {
    key: o,
    style: {
      ...BODY,
      margin: 0,
      display: 'flex',
      gap: 9,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "claim",
    required: true
  }), o))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(FieldRow, {
    label: "Photographs (optional)",
    hint: "Before photographs help us quote accurately."
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      ...INPUT,
      padding: '9px 12px'
    },
    type: "file",
    multiple: true
  }))), /*#__PURE__*/React.createElement("label", {
    style: {
      ...BODY,
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    required: true,
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", null, "I agree that Home Assist may contact me about this request.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "navy"
  }, "Send my request"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...SMALL,
      marginTop: 14
    }
  }, "Submissions post to a placeholder endpoint. Routing to the operations team and to WhatsApp is wired later.")));
}
Object.assign(window, {
  HomePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/InsurersPage.jsx
try { (() => {
const {
  Button,
  Icon
} = window.HomeAssistDesignSystem_cf0a2b;
const MODULES = [['Module 01', '24/7 Assist Call Centre & FNOL', 'headset', 'Assist services for Plumbing , Electrical , Glazier , and Locksmiths nationwide. Every incident is logged, triaged and allocated to a verified provider in the policyholder’s area, with one reference from first notification to close.'], ['Module 02', 'Plumbing Incident Managmenet', 'droplets', 'The Plumbing technician, the entity, are contracted to Home Assist , a price list is issued so you can budget your cost, all work carry\'s a warranty, all installed equipment is verified inline with SANS Standards against the invoice before the claim is settled. This includes Solar Systems, Heat Pumps and our Gas coverage is growing'], ['Module 03', 'Resultant Incident Management', 'hammer', 'We understand the importance of getting out fast to stop damage and limit the foot traffic through private homes. We control the cost , the quality and the providers entering you home, from Carpenters, painters, electricians and builders, we very everyone and track there progress to ensure'], ['Module 04', 'Incident Verification', 'shield-check', 'Award winning AI power solution for Brokers and Insurers and Home Owners who want to use their own people to handle a fix . We make sure, they get what they pay for , installations are safe and complaint and the person signing of the job is who they say they are'], ['Module 05', 'Perfom+ SME Development', 'graduation-cap', 'Home Assist is a Level 1 B-BBEE contributor. We started in 2013 with a single vehicle servicing repairs daily, so we understand what it takes to grow a small business. Perform+ works with accredited supplier development partners to lift artisan skills across the country and directs your corporate spend to earn the B-BBEE recognition it is due.'], ['Module 06', 'Smart Home Devices', 'wifi', ['Since 2016 we have grown a connected-device platform working with smart geyser controllers and smart metering. Giving insurers a future property book that shifts from reactive to proactive.', 'Homeowner details captured at installation, so claims register in seconds.', 'Hardware faults reported before the failure, cutting wasted call-outs', '- Smart Geyser controllers', '- Smart Metering']], ['Module 07', 'Post-Claim Underwritting', 'trending-up', ['Every claim is a property survey you have already paid for. We feed verified incident data back into underwriting — the true condition and age of the installation, whether the failure was sudden or long-neglected, and whether the property has claimed for this peril before. The next renewal is priced on what we found, not on what was declared.', 'Examples :', '- Cyber security risk of connected devices like IP cameras', '- Roof Structures like thatch confirmed', '- Solar Geysers & Heats pumps', '- Corroded pipes', '- No Surge Protection']]];
const PROOF_ARCHIVE = [['Lodge', 'Multiple-unit commercial property, several geysers on one incident.'], ['Solar', 'Solar installation quoted for full replacement where the fault was in one component.'], ['Body corporate', 'Sectional-title claim with shared plumbing and a disputed scope.'], ['Thin file', 'Claim submitted with no photographs and an unlogged certificate.']];
function ModuleCard({
  number,
  title,
  icon,
  lines,
  open,
  onToggle
}) {
  const id = number.toLowerCase().replace(/\s+/g, '-');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...CARD,
      padding: 0,
      overflow: 'hidden',
      borderColor: open ? 'var(--web-blue-100)' : 'var(--web-grey-100)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggle,
    "aria-expanded": open,
    "aria-controls": id + '-panel',
    "data-ga-event": "module_open",
    "data-ga-module": number,
    "data-ga-module-name": title,
    style: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '40px 1fr 24px',
      gap: 14,
      alignItems: 'center',
      textAlign: 'left',
      background: open ? 'var(--web-blue-050)' : '#fff',
      border: 0,
      borderBottom: open ? '1px solid var(--web-blue-100)' : 0,
      padding: 20,
      cursor: 'pointer',
      font: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 3,
      background: open ? 'var(--web-navy)' : 'var(--web-blue-050)',
      border: '1px solid ' + (open ? 'var(--web-navy)' : 'var(--web-blue-100)'),
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    color: open ? '#fff' : 'var(--web-blue)'
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      ...LABEL,
      display: 'block',
      color: 'var(--web-grey-500)',
      marginBottom: 4
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      ...H3,
      display: 'block',
      margin: 0
    }
  }, title)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform 180ms cubic-bezier(.2,0,.2,1)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 20,
    color: "var(--web-navy)"
  }))), open ? /*#__PURE__*/React.createElement("div", {
    id: id + '-panel',
    style: {
      padding: 20
    }
  }, lines.map((line, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      ...BODY,
      margin: i ? '6px 0 0' : 0
    }
  }, line))) : null);
}
function InsurersGate({
  onUnlock
}) {
  const [email, setEmail] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'rgba(11,29,58,.55)'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onUnlock(email);
    },
    style: {
      ...CARD,
      padding: 36,
      width: 'min(520px,100%)',
      boxShadow: '0 24px 60px rgba(11,29,58,.35)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/homeassist-logo-horizontal.png",
    alt: "Home Assist",
    style: {
      height: 26,
      width: 'auto',
      display: 'block',
      marginBottom: 22
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 10
    }
  }, "For insurers, UMAs and brokers"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H2,
      fontSize: 24,
      marginBottom: 12
    }
  }, "Enter your email to view this page"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      maxWidth: '46ch'
    }
  }, "This page sets out how we manage a property claims book. Give us a work email address and it opens."), /*#__PURE__*/React.createElement(FieldRow, {
    label: "Work email"
  }, /*#__PURE__*/React.createElement("input", {
    style: INPUT,
    type: "email",
    required: true,
    autoFocus: true,
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "name@company.co.za"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "navy"
  }, "View the page"), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "ghost",
    href: CH.booking,
    target: "_blank",
    rel: "noopener"
  }, "Book a meeting instead")), /*#__PURE__*/React.createElement("p", {
    style: {
      ...SMALL,
      marginTop: 16
    }
  }, "We use it to follow up on this enquiry only. No newsletter, no list.")));
}
function InsurersPage() {
  const KEY = 'ha-insurers-email';
  const [visible, setVisible] = React.useState(() => {
    try {
      return !!localStorage.getItem(KEY);
    } catch (e) {
      return false;
    }
  });
  const unlock = email => {
    try {
      localStorage.setItem(KEY, email);
    } catch (e) {}
    setVisible(true);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, !visible ? /*#__PURE__*/React.createElement(InsurersGate, {
    onUnlock: unlock
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      filter: visible ? 'none' : 'blur(6px)',
      pointerEvents: visible ? 'auto' : 'none',
      userSelect: visible ? 'auto' : 'none',
      transition: 'filter 320ms cubic-bezier(.2,0,.2,1)'
    },
    "aria-hidden": !visible
  }, /*#__PURE__*/React.createElement(InsurersBody, null)));
}
function InsurersBody() {
  const [openModule, setOpenModule] = React.useState(null);
  const toggleModule = (number, title) => {
    const next = openModule === number ? null : number;
    setOpenModule(next);
    if (next) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'module_open',
        module_number: number,
        module_name: title
      });
      if (typeof window.gtag === 'function') window.gtag('event', 'module_open', {
        module_number: number,
        module_name: title
      });
    }
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--web-navy)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      padding: '72px 40px',
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "For insurers, UMAs, binder holders and brokers"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...DISPLAY,
      color: '#fff',
      maxWidth: '22ch',
      marginBottom: 18
    }
  }, "Turnkey or modular management of your property claims book."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      color: 'rgba(255,255,255,.85)',
      fontSize: 17,
      maxWidth: '58ch',
      marginBottom: 26
    }
  }, "Home Assist takes the incident from first notification to a closed, evidenced, compliant file. Take the whole process, or take the modules you are missing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "onDark",
    href: CH.booking,
    target: "_blank",
    rel: "noopener"
  }, "Book Free Pilot"), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "ghost",
    href: wa('Hi Home Assist, I am enquiring about claims management for our book. ', true),
    target: "_blank",
    rel: "noopener",
    style: {
      color: '#fff',
      border: '1px solid rgba(255,255,255,.5)'
    },
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 18,
      color: "#fff"
    })
  }, "WhatsApp ", CH.waBiz))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid rgba(255,255,255,.22)',
      borderRadius: 4,
      padding: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "The offer in one line"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      color: '#fff',
      fontSize: 17,
      margin: 0
    }
  }, "Send us a sample of settled claims. We will verify them and show you what we find."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,.22)',
      margin: '22px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 34px/1 var(--font-core)',
      color: '#fff'
    }
  }, "7 days"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      color: 'var(--web-blue-300)',
      marginTop: 6
    }
  }, "Free pilot")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 34px/1 var(--font-core)',
      color: '#fff'
    }
  }, "100%"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      color: 'var(--web-blue-300)',
      marginTop: 6
    }
  }, "Incidents verified free for the pilot")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--web-grey-050)',
      borderBottom: '1px solid var(--web-grey-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      padding: '22px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, [['Insurers', 'Whole-book or overflow'], ['UMAs', 'Delegated authority, controlled spend'], ['Binder holders', 'Cell Captives & Shared Risk'], ['Brokers', 'A service answer for your clients']].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: LABEL
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      ...SMALL,
      marginTop: 6
    }
  }, v))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "The problem",
    title: "The leak is not in the claim. It is in the process.",
    intro: "Property claims leak value in places that never show up on the claim form: work that was never verified, certificates that were written but never logged, prices accepted because nobody had a benchmark, and providers who price delay into every quote because they are paid at 60 or 90 days."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(LabelCard, {
    icon: "file-search",
    label: "Unverified work",
    title: "The invoice is checked, the work is not"
  }, "Photographs, serial numbers and certificates are rarely reconciled against what was invoiced."), /*#__PURE__*/React.createElement(LabelCard, {
    icon: "shield-alert",
    label: "Compliance exposure",
    title: "A certificate that was never logged"
  }, "An unlogged COC leaves the insurer carrying the compliance risk long after the claim is closed."), /*#__PURE__*/React.createElement(LabelCard, {
    icon: "clock",
    label: "Cost of delay",
    title: "Slow payment is priced in"
  }, "Providers paid at 60 or 90 days build the wait into the rate. The book pays for it on every job."))), /*#__PURE__*/React.createElement(Section, {
    tint: true,
    eyebrow: "What we do",
    title: "Seven modules. Take all of them, or take the gaps.",
    intro: "Click any module to open it."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      alignItems: 'start'
    }
  }, MODULES.map(([m, t, ic, d]) => /*#__PURE__*/React.createElement(ModuleCard, {
    key: m,
    number: m,
    title: t,
    icon: ic,
    lines: Array.isArray(d) ? d : [d],
    open: openModule === m,
    onToggle: () => toggleModule(m, t)
  })))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Commercial detail",
    title: "Get an offer from Home Assist"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CARD,
      padding: 32,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      maxWidth: '62ch',
      marginBottom: 20
    }
  }, "Meet with us online or in person to discuss how we can help you get control of your property book"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "navy",
    href: CH.booking,
    target: "_blank",
    rel: "noopener",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 18,
      color: "#fff"
    })
  }, "Book a meeting"), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "ghost",
    href: wa('Hi Home Assist, I would like to book a meeting about our property book. ', true),
    target: "_blank",
    rel: "noopener"
  }, "WhatsApp ", CH.waBiz)), /*#__PURE__*/React.createElement("p", {
    style: {
      ...SMALL,
      marginTop: 16
    }
  }, "Pick a slot that suits you. Thirty minutes, no pack to read first."))), /*#__PURE__*/React.createElement(Section, {
    tint: true,
    eyebrow: "Commercial detail",
    title: "The commercial model and the verified claim examples"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 10
    }
  }, "Commercial model"), /*#__PURE__*/React.createElement("h3", {
    style: H3
  }, "A fee tied to your loss ratio"), /*#__PURE__*/React.createElement("p", {
    style: BODY
  }, "Home Assist is paid against the performance of the book, not against the volume of claims put through it. The structure, the float mechanics and the fee bands are set out in HA-COM-2026-001.")), /*#__PURE__*/React.createElement("div", {
    style: CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 10
    }
  }, "Direct settlement"), /*#__PURE__*/React.createElement("h3", {
    style: H3
  }, "Providers paid from a transparent fund"), /*#__PURE__*/React.createElement("p", {
    style: BODY
  }, "Settlement runs off a float held against the book. The provider is paid on a verified, evidenced file \u2014 before photographs, quote, invoice, logged certificate, after photographs."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      margin: 0
    }
  }, "Reconciliation and float reporting are retrievable from the portal at any time."))))), /*#__PURE__*/React.createElement(NavyBand, {
    eyebrow: "Next step",
    title: "Send us a sample of settled claims. We will verify them and show you what we find."
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "onDark",
    href: CH.booking,
    target: "_blank",
    rel: "noopener"
  }, "Book a sample review"), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "ghost",
    href: wa('Hi Home Assist, we would like to discuss a sample claim review. ', true),
    target: "_blank",
    rel: "noopener",
    style: {
      color: '#fff',
      border: '1px solid rgba(255,255,255,.5)'
    }
  }, "WhatsApp ", CH.waBiz)));
}
Object.assign(window, {
  InsurersPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/InsurersPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/JoinPage.jsx
try { (() => {
const {
  Button,
  Icon
} = window.HomeAssistDesignSystem_cf0a2b;
const TRADES = [['Plumbers', 'droplets', ['PIRB or IOPSA registration in good standing', 'Able to issue and log a certificate of compliance to SANS 10254', 'Geyser replacement capability — electric, solar and heat pump', 'Leak detection capability is an advantage', 'Own vehicle and tools', 'Public liability cover']], ['Electricians', 'zap', ['Registered person status with a valid wireman’s licence', 'Registered with the Department of Employment and Labour', 'Able to issue a certificate of compliance to SANS 10142-1', 'DB board, fault finding and rewiring capability', 'Own vehicle and tools', 'Public liability cover']], ['Building contractors', 'hard-hat', ['Registered company with a verifiable track record', 'NHBRC registration where the work requires it', 'Ceiling replacement, waterproofing and making-good capability after water damage', 'Ability to quote to a standard scope', 'Public liability cover']]];
const JOIN_FAQ = [['Do I have to be exclusive to Home Assist?', 'No. You do not have to be an exclusive supplier to receive work from us.'], ['How do I get paid?', 'You submit the evidence pack and your invoice through the portal. A valid invoice is settled within seven days, against a 2.5% early-settlement discount.'], ['What areas are you recruiting in?', 'Nationwide, with the highest volume in Cape Town, Johannesburg, Pretoria, Durban and Gqeberha. The confirmed area list is being finalised.'], ['What if I do not have PIRB registration yet?', 'You can register on the portal, but plumbing work is only allocated to providers who can issue and log a certificate of compliance.'], ['Do you charge a joining fee?', 'Registration terms are set out on the portal at sign-up.']];
function JoinPage() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--web-grey-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      padding: '64px 40px',
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "For plumbers, electricians and contractors"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...DISPLAY,
      maxWidth: '18ch',
      marginBottom: 18
    }
  }, "Do good work. Get paid in seven days."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      fontSize: 17,
      maxWidth: '58ch',
      marginBottom: 26
    }
  }, "Home Assist is building a national network of verified plumbers, electricians and building contractors. Register on our portal and start receiving work in your area."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "navy",
    href: CH.register,
    target: "_blank",
    rel: "noopener",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17,
      color: "#fff"
    })
  }, "Register on the portal"), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "secondary",
    href: "#standard"
  }, "What we look for"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--green-500)',
      borderRadius: 4,
      display: 'grid',
      placeItems: 'center',
      minHeight: 320,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/technician-phone.jpg",
    alt: "A technician updating a job on the Home Assist app",
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Why join",
    title: "Four reasons providers stay on the network"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 10
    }
  }, "Clear payment"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      margin: 0
    }
  }, "Take the free training to run the job app or the Case Tabs System to process the whole claim digitally , no paperwork needed.")), /*#__PURE__*/React.createElement(LabelCard, {
    label: "Work in your area"
  }, "Jobs matched to your trade, your capacity and your service area."), /*#__PURE__*/React.createElement(LabelCard, {
    label: "No panel politics"
  }, "You do not have to be an exclusive supplier to receive work."), /*#__PURE__*/React.createElement(LabelCard, {
    label: "One clear standard"
  }, "You know before you start what is required and what will be checked."))), /*#__PURE__*/React.createElement(Section, {
    id: "standard",
    tint: true,
    eyebrow: "What we look for",
    title: "Requirements by trade"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, TRADES.map(([t, icon, reqs]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: CARD
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    color: "var(--web-blue)",
    style: {
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 12
    }
  }, t), /*#__PURE__*/React.createElement("ul", {
    style: {
      ...BODY,
      margin: 0,
      paddingLeft: 18,
      display: 'grid',
      gap: 6
    }
  }, reqs.map(r => /*#__PURE__*/React.createElement("li", {
    key: r
  }, r))))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Every provider",
    title: "What every provider needs"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '10px 32px',
      maxWidth: 1000
    }
  }, ['A CIPC-registered entity with contected Director Identifcation document', 'A bank account in the company name', 'Valid tax status', 'Public & Workmanship liability cover', 'A smartphone — every job is evidenced on WhatsApp with before and after photographs', 'Signature of the Home Assist quality standard of doing things and Service Level'].map(r => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      padding: '10px 0',
      borderTop: '1px solid var(--web-grey-100)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17,
    color: "var(--web-blue)",
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...BODY,
      margin: 0
    }
  }, r))))), /*#__PURE__*/React.createElement(Section, {
    tint: true,
    eyebrow: "How our jobs work",
    title: "Four steps, every job, no exceptions"
  }, /*#__PURE__*/React.createElement(Steps, {
    items: [['01', 'We send you the job', 'Matched to your trade and your area, with the scope and the address.'], ['02', 'You quote to a standard scope', 'The scope is the same for everyone, so the quote is easily captured on our system and comparable. You don\'t need other systems to get paid by Home Assist'], ['03', 'You submit the evidence', 'Before photographs, invoice, certificate of compliance, after photographs.'], ['04', 'You are paid', 'On a valid invoice against a complete evidence pack.']]
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/techman-phone-home.png",
    alt: "A Home Assist technician opening a job on the app outside a home",
    style: {
      display: 'block',
      width: '100%',
      maxWidth: 620,
      height: 'auto',
      margin: '28px auto 0'
    }
  })), /*#__PURE__*/React.createElement(Section, {
    narrow: true,
    eyebrow: "Verification",
    title: "What we check"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '3px solid var(--web-blue)',
      paddingLeft: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      fontSize: 17
    }
  }, "Every job is verified. We confirm that the entity is registered and carries liability cover, that the technician is licensed and genuinely linked to the working company, that the certificate of compliance was written ", /*#__PURE__*/React.createElement("strong", null, "and logged"), ", that what was installed matches what was invoiced, and that the price sits within benchmark."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      margin: 0,
      fontSize: 17
    }
  }, "Providers who meet the standard get more work."))), /*#__PURE__*/React.createElement(NavyBand, {
    eyebrow: "Register",
    title: "Register on the portal and start receiving work in your area."
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "onDark",
    href: CH.register,
    target: "_blank",
    rel: "noopener"
  }, "Register on the portal"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...SMALL,
      color: 'rgba(255,255,255,.75)',
      alignSelf: 'center',
      maxWidth: '34ch'
    }
  }, "Questions before you register? WhatsApp ", CH.waHome, " or email support@homeassist.co.za.")), /*#__PURE__*/React.createElement(Section, {
    tint: true,
    narrow: true,
    eyebrow: "Questions",
    title: "Provider questions"
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: JOIN_FAQ
  })));
}
Object.assign(window, {
  JoinPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/JoinPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LegalPage.jsx
try { (() => {
const LEGAL_WRAP = {
  maxWidth: 820,
  margin: '0 auto',
  padding: '0 40px'
};
const LEGAL_H2 = {
  font: '700 21px/1.3 var(--font-core)',
  color: 'var(--web-navy)',
  margin: '40px 0 12px'
};
const LEGAL_H3 = {
  font: '600 17px/1.4 var(--font-core)',
  color: 'var(--web-navy)',
  margin: '24px 0 8px'
};
const LEGAL_P = {
  font: '400 var(--web-size-body)/1.65 var(--font-core)',
  color: 'var(--web-grey-700)',
  margin: '0 0 14px'
};
const LEGAL_UL = {
  ...LEGAL_P,
  paddingLeft: 22,
  display: 'flex',
  flexDirection: 'column',
  gap: 8
};
function LegalHero({
  label,
  title,
  updated
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--web-navy)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LEGAL_WRAP,
      padding: '56px 40px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      color: 'var(--web-blue-300)',
      marginBottom: 10
    }
  }, label), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...H1,
      color: '#fff',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 3,
      background: 'var(--web-blue)',
      margin: '20px 0 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      ...SMALL,
      color: '#fff',
      opacity: .7,
      marginTop: 20
    }
  }, updated)));
}
function LegalNav({
  go,
  current
}) {
  const item = id => ({
    font: (current === id ? '600' : '400') + ' var(--web-size-small)/1 var(--font-core)',
    color: current === id ? 'var(--web-navy)' : 'var(--web-grey-500)',
    textDecoration: 'none',
    paddingBottom: 4,
    borderBottom: current === id ? '2px solid var(--web-blue)' : '2px solid transparent'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--web-grey-050)',
      borderBottom: '1px solid var(--web-grey-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LEGAL_WRAP,
      padding: '14px 40px',
      display: 'flex',
      gap: 20,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...LABEL,
      color: 'var(--web-grey-500)'
    }
  }, "Legal"), /*#__PURE__*/React.createElement("a", {
    href: "#/terms",
    onClick: e => {
      e.preventDefault();
      go('terms');
    },
    style: item('terms')
  }, "Terms of Use"), /*#__PURE__*/React.createElement("a", {
    href: "#/privacy-policy",
    onClick: e => {
      e.preventDefault();
      go('privacy');
    },
    style: item('privacy')
  }, "Privacy Policy")));
}
function LegalFoot({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--web-grey-050)',
      borderTop: '1px solid var(--web-grey-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LEGAL_WRAP,
      padding: '40px 40px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 10
    }
  }, "Questions about this policy"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...LEGAL_P,
      marginBottom: 16
    }
  }, "Email ", /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + CH.help,
    style: {
      color: 'var(--web-blue)'
    }
  }, CH.help), " or write to ", CH.address, "."), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    variant: "navy",
    href: 'mailto:' + CH.help
  }, "Contact Home Assist")));
}
function PrivacyPage({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LegalHero, {
    label: "Legal",
    title: "Privacy Policy",
    updated: "Home Assist Technologies (Pty) Ltd \xB7 Protection of Personal Information Act, No. 4 of 2013"
  }), /*#__PURE__*/React.createElement(LegalNav, {
    go: go,
    current: "privacy"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LEGAL_WRAP,
      padding: '48px 40px 56px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...LEGAL_H2,
      marginTop: 0
    }
  }, "1. Purpose"), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "At Home Assist, we respect your privacy and will take reasonable measures to protect it, as more fully detailed below in this policy."), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "This Privacy Policy explains how we collect and use your personal information in accordance with our Terms of use and Privacy Policy. It describes the processing activities that are carried out by Home Assist in relation to the Services we provide, the purposes for which these activities are performed and the legal bases that we rely upon for these processing activities."), /*#__PURE__*/React.createElement("h2", {
    style: LEGAL_H2
  }, "2. What information do we collect?"), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "2.1 Here we set out the details of the types of personal information we collect."), /*#__PURE__*/React.createElement("ul", {
    style: LEGAL_UL
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Name and surname:"), " this information is used to identify you."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Email address:"), " this is used to enable you to log in to our portal as well as receive ongoing communication and updates from us."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Physical address:"), " this is used to indicate at which property the required services should be performed."), /*#__PURE__*/React.createElement("li", null, "your mobile number;"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Transaction and payment information:"), " credit/debit card details and bank account details you provide to make payment for the products and services you purchase from us."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Location information:"), " your smartphone or computer\u2019s IP address may tell us an approximate location when you connect to our websites but this will be no more precise than the city, state or country you are using your device in."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Claim history:"), " as part of our service offering, we rely on information previously collected by us for claims we have serviced."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Advertising and Direct Marketing preferences and responses:"), " information about how you respond, or interact with, any Direct Marketing or advertising communications directed to you and your business, including any requests for these communications to stop.")), /*#__PURE__*/React.createElement("p", {
    style: {
      ...LEGAL_P,
      marginTop: 14
    }
  }, "2.2 You may choose to provide additional personal information to us, in which event you agree to provide accurate and current information, and not to impersonate or misrepresent any person or entity or falsely state or otherwise misrepresent your affiliation with anyone or anything."), /*#__PURE__*/React.createElement("h2", {
    style: LEGAL_H2
  }, "3. How we collect personal information"), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "When we open and operate an account for you, provide you with our products and services, or communicate with you, we may collect your personal information. We do this in various ways, including:"), /*#__PURE__*/React.createElement("ul", {
    style: LEGAL_UL
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Insurance providers:"), " which provide us with information about claims or complaints they receive from you or your representative."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Brokers:"), " your duly authorised representative and intermediary between yourself and your insurer."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Directly from you:"), " when you provide it to us such as when you sign up for a Home Assist account, use our products and services, or take part in customer surveys, competitions and promotions;"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Communicating with us:"), " when you communicate with us by email, chat, telephone or any other means, we collect the communication and any data provided in it;"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Our website:"), " when you use the Home Assist portal we collect information on your activity and other use of your Home Assist account;"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Ratings and feedback:"), " When you provide a rating or review of a service, you consent to us using that rating or review as we deem fit, including without limitation on the Website, in newsletters or other marketing material."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Third parties:"), " when we obtain information from third parties such as identity verification services, credit reference agencies, and regulatory and enforcement agencies.")), /*#__PURE__*/React.createElement("h2", {
    style: LEGAL_H2
  }, "4. How do we use personal information?"), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "We use personal information for one or more of the following purposes:"), /*#__PURE__*/React.createElement("ul", {
    style: LEGAL_UL
  }, /*#__PURE__*/React.createElement("li", null, "To assist the Service Provider with providing their Plumbing Services;"), /*#__PURE__*/React.createElement("li", null, "to manage and maintain your profile with us;"), /*#__PURE__*/React.createElement("li", null, "to better manage our business and your relationship with us;"), /*#__PURE__*/React.createElement("li", null, "to improve our products and services, and to develop new products and services;"), /*#__PURE__*/React.createElement("li", null, "to notify you about benefits and changes to the features of our products and services;"), /*#__PURE__*/React.createElement("li", null, "to provide you with personalised advertising and marketing where you have opted in for marketing communication;"), /*#__PURE__*/React.createElement("li", null, "to respond to your enquiries and to resolve disputes."), /*#__PURE__*/React.createElement("li", null, "Where necessary to protect our legal rights and interest, or the interests of others, we also use personal information in relation to legal claims, compliance, audit, risk management and regulatory functions. We may also use personal information in connection with the acquisition, merger or sale of a business.")), /*#__PURE__*/React.createElement("h2", {
    style: LEGAL_H2
  }, "5. How do we protect your information?"), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "5.1. We will \u2013"), /*#__PURE__*/React.createElement("ul", {
    style: LEGAL_UL
  }, /*#__PURE__*/React.createElement("li", null, "treat your personal information as strictly confidential, and will only share your information as set out in this policy;"), /*#__PURE__*/React.createElement("li", null, "take appropriate technical and organisational measures to ensure that your personal information is kept secure and is protected against unauthorised or unlawful processing, accidental loss, destruction or damage, alteration, disclosure or access;"), /*#__PURE__*/React.createElement("li", null, "provide you with access to your personal information to view and/or update personal details;"), /*#__PURE__*/React.createElement("li", null, "promptly notify you if we become aware of any unauthorised use, disclosure or processing of your personal information;"), /*#__PURE__*/React.createElement("li", null, "provide you with reasonable evidence of our compliance with our obligations under this policy on reasonable notice and request; and"), /*#__PURE__*/React.createElement("li", null, "upon your request, promptly return or destroy any and all of your personal information in our possession or control, save for that which we are legally obliged to retain, or that which has been de-identified as defined in the Protection of Personal Information Act, No. 4 of 2013.")), /*#__PURE__*/React.createElement("p", {
    style: {
      ...LEGAL_P,
      marginTop: 14
    }
  }, "5.2. Home Assist undertakes never to sell or make your personal information available to any third-party other than as provided for in this policy."), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "5.3. Whilst we will do all things reasonably necessary to protect your rights of privacy, we cannot guarantee or accept any liability whatsoever for unauthorised or unlawful disclosures of your personal information, whilst in our possession, made by third-parties who are not subject to our control, unless such disclosure is as a result of our gross negligence."), /*#__PURE__*/React.createElement("h2", {
    style: LEGAL_H2
  }, "6. How long do we keep personal information"), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "We will keep your personal information for as long as necessary in order to achieve the processing purposes, unless we are required by law to do so or you consent to us retaining such information for a longer period."), /*#__PURE__*/React.createElement("h2", {
    style: LEGAL_H2
  }, "7. How we share personal information"), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "We share personal information with:"), /*#__PURE__*/React.createElement("ul", {
    style: LEGAL_UL
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Staff:"), " any person that works for us or for one of our group companies;"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Affiliated/Related Companies:"), " any entity that is regarded as a related company as defined in terms of section 2 of the Companies Act, No. 71 of 2008, as amended;"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Financial and other institutions:"), " which we partner with to provide our products and services;"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Service providers:"), " companies and organisations that provide services to us, including in relation to claims resolution, technical infrastructure, marketing and analytics, and web and app development;"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Professionals:"), " our professional advisers, consultants and other similar services.")), /*#__PURE__*/React.createElement("p", {
    style: {
      ...LEGAL_P,
      marginTop: 14
    }
  }, "We will otherwise treat your personal information as private and confidential and will not share it with other parties except:"), /*#__PURE__*/React.createElement("ul", {
    style: LEGAL_UL
  }, /*#__PURE__*/React.createElement("li", null, "where you have given permission;"), /*#__PURE__*/React.createElement("li", null, "where we believe it is reasonably necessary to comply with any law, regulation, legal process or governmental request, to enforce our Terms of use or other agreements, or to protect the rights, property, or safety of us, our customers or others; or"), /*#__PURE__*/React.createElement("li", null, "where we may transfer rights and obligations pursuant to our agreement with you.")), /*#__PURE__*/React.createElement("p", {
    style: {
      ...LEGAL_P,
      marginTop: 14
    }
  }, "We will ensure that all of our employees, third-party service providers, divisions, affiliates and partners (including their employees and third-party service providers) having access to your personal information are bound by appropriate and legally binding confidentiality obligations in relation to your personal information."), /*#__PURE__*/React.createElement("h2", {
    style: LEGAL_H2
  }, "8. Your right to access, update, or remove your personal information"), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "8.1. Most of the data Home Assist collects, and the ways in which we use it, are necessary for us to provide and improve the services we provide to you, or to comply with our obligations."), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "8.2. You have the right to object to the processing of your personal information or to request that we:"), /*#__PURE__*/React.createElement("ul", {
    style: LEGAL_UL
  }, /*#__PURE__*/React.createElement("li", null, "provide you with a copy of your personal information; or"), /*#__PURE__*/React.createElement("li", null, "correct, delete, or restrict the processing of your personal information.")), /*#__PURE__*/React.createElement("p", {
    style: {
      ...LEGAL_P,
      marginTop: 14
    }
  }, "8.3. Please get in touch with us if you would like to exercise any of the above rights. These rights are limited in some situations, such as where we are legally required to process your data, and may limit your ability to use our products and services."), /*#__PURE__*/React.createElement("h2", {
    style: LEGAL_H2
  }, "9. Data breaches"), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "We will notify you and the relevant supervisory authority as soon as we become aware of any data breach that is likely to result in a risk to your rights and freedoms."), /*#__PURE__*/React.createElement("h2", {
    style: LEGAL_H2
  }, "10. Revisions to this Privacy policy"), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "We may amend this Privacy policy from time to time. You should visit the website regularly to check when this Privacy policy was last updated and to review the current policy. We will do our best to notify you of any substantive amendments to the Privacy policy and any such notice will be posted on our application or our website, or sent by email to the address associated with your profile."))), /*#__PURE__*/React.createElement(LegalFoot, {
    go: go
  }));
}
function TermsPage({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LegalHero, {
    label: "Legal",
    title: "General Terms of Use",
    updated: "Home Assist Technologies (Pty) Ltd \xB7 Read together with the Privacy Policy"
  }), /*#__PURE__*/React.createElement(LegalNav, {
    go: go,
    current: "terms"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LEGAL_WRAP,
      padding: '48px 40px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--web-blue-100)',
      background: 'var(--web-blue-050)',
      borderRadius: 4,
      padding: 18,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 8
    }
  }, "Content status"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...LEGAL_P,
      margin: 0
    }
  }, "The clauses below are the published Terms of Use as retrieved from homeassist.co.za/legal. The full signed clause set (payment, cancellation, warranty, indemnity, dispute resolution, governing law) was not retrievable \u2014 paste the complete legal text over this page before publishing. ", /*#__PURE__*/React.createElement(Confirm, null, "full clause set"))), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...LEGAL_H2,
      marginTop: 0
    }
  }, "1. Acceptance of Terms"), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "Welcome to HomeAssist. The following Terms and Conditions and the Privacy Policy (together the \u201CTerms\u201D) apply to any person that makes use of the Plumbing Services and the Incident Management Services (as defined below) (together the \u201CServices\u201D)."), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "The Terms constitute a legally binding agreement between you and HomeAssist Technology Solutions Proprietary Limited which is a company incorporated under the laws of South Africa. In these Terms, \u201Cwe\u201D, \u201Cus\u201D or \u201Cour\u201D refers to Home Assist Technologies Proprietary Limited and \u201Cyou\u201D or \u201Cyour\u201D refers to the person or entity that wishes to use any of the services."), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "We reserve the right to modify the Terms or policies relating to the Services at any time, effective upon posting an updated version of the Terms on www.homeassist.co.za. Continued use of the Service or Software after any such changes shall constitute your consent to such changes."), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "Any policy referred to in these Terms shall be incorporated in the Terms by reference."), /*#__PURE__*/React.createElement("h2", {
    style: LEGAL_H2
  }, "2. The Services"), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "We provide a communications platform that enables the connection of individuals who require plumbing and related services in relation to an insurance claim with service providers who provide plumbing and related services (\u201CIncident Management Services\u201D)."), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "We check the backgrounds of service providers via third party background check services; however, we do not guarantee or warrant, and make no representations regarding, the reliability, quality or suitability of our plumbing service providers."), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "When interacting with the plumbing service providers you should exercise caution and common sense to protect your personal safety and property, just as you would when interacting with other persons whom you don\u2019t know."), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "By using the Services, you agree to hold us free from any liability or damage that might arise out of the Service provided to you. Neither us nor our affiliates or licensors are responsible for the conduct, whether online or offline, of any user of the Service."), /*#__PURE__*/React.createElement("h2", {
    style: LEGAL_H2
  }, "3. The Plumbing Services"), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "The Service Provider will provide the Plumbing Services using reasonable skill and care and will be of a quality that keeps to generally accepted industry standards."), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "The Plumbing Services includes removing all non dangerous materials, including your existing parts or equipment and all waste and packaging no longer needed on the premises for recycling (where applicable). The Service Provider will inform you when they plan not to remove any materials/equipment within the premises."), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "We accept no legal responsibility for any structural issues that arise at the premises after the additional services. ", /*#__PURE__*/React.createElement(Confirm, null, "remainder of clause 3")), /*#__PURE__*/React.createElement("h2", {
    style: LEGAL_H2
  }, "4. Privacy"), /*#__PURE__*/React.createElement("p", {
    style: LEGAL_P
  }, "Our collection and use of your personal information is governed by our ", /*#__PURE__*/React.createElement("a", {
    href: "#/privacy-policy",
    onClick: e => {
      e.preventDefault();
      go('privacy');
    },
    style: {
      color: 'var(--web-blue)'
    }
  }, "Privacy Policy"), ", which forms part of these Terms."))), /*#__PURE__*/React.createElement(LegalFoot, {
    go: go
  }));
}
Object.assign(window, {
  PrivacyPage,
  TermsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LegalPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PortalPage.jsx
try { (() => {
const {
  Button,
  Icon
} = window.HomeAssistDesignSystem_cf0a2b;
function PortalPage({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--web-navy)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      padding: '88px 40px 72px',
      display: 'grid',
      gridTemplateColumns: '1fr .82fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "Home Assist portal"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...DISPLAY,
      color: '#fff',
      maxWidth: '20ch',
      marginBottom: 18
    }
  }, "Every claim, every job, every certificate \u2014 in one place."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      color: 'var(--web-grey-100)',
      fontSize: 17,
      maxWidth: '58ch',
      marginBottom: 28
    }
  }, "The Home Assist portal is where clients track claims and where service providers manage jobs, submit evidence and get paid."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "onDark",
    href: CH.portal,
    target: "_blank",
    rel: "noopener"
  }, "Sign in to the portal"), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    size: "lg",
    variant: "ghost",
    href: CH.register,
    target: "_blank",
    rel: "noopener",
    style: {
      color: '#fff',
      border: '1px solid rgba(255,255,255,.55)'
    }
  }, "Register as a provider"))), /*#__PURE__*/React.createElement(PortalMock, null))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Two doors",
    title: "Sign in as a client or as a service provider"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CARD,
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 12
    }
  }, "For clients"), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...H2,
      fontSize: 21
    }
  }, "Insurers, UMAs, binder holders and brokers"), /*#__PURE__*/React.createElement("p", {
    style: BODY
  }, "Register and track claims, see the status of every incident, retrieve the evidence pack for any job, and download your float and loss-ratio reports."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginTop: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    variant: "navy",
    href: CH.portal,
    target: "_blank",
    rel: "noopener"
  }, "Sign in"), /*#__PURE__*/React.createElement("a", {
    href: "#/insurers",
    onClick: e => {
      e.preventDefault();
      go('insurers');
    },
    style: {
      font: '600 15px/1 var(--font-core)'
    }
  }, "New client? See what we do \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...CARD,
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LABEL,
      marginBottom: 12
    }
  }, "For service providers"), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...H2,
      fontSize: 21
    }
  }, "Plumbers, electricians and contractors"), /*#__PURE__*/React.createElement("p", {
    style: BODY
  }, "Accept jobs, load quotes, upload before and after photographs and certificates, submit invoices and track payment."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginTop: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    variant: "navy",
    href: CH.portal,
    target: "_blank",
    rel: "noopener"
  }, "Sign in"), /*#__PURE__*/React.createElement("a", {
    href: "#/join",
    onClick: e => {
      e.preventDefault();
      go('join');
    },
    style: {
      font: '600 15px/1 var(--font-core)'
    }
  }, "Not registered yet? \u2192"))))), /*#__PURE__*/React.createElement(Section, {
    tint: true,
    eyebrow: "Capability",
    title: "What you can do in the portal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, [['clipboard-check', 'Register a claim'], ['activity', 'Track incident status'], ['camera', 'Upload evidence'], ['file-check', 'Issue and store certificates'], ['receipt', 'Submit and track invoices'], ['bar-chart-3', 'Download reports']].map(([icon, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      ...CARD,
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    color: "var(--web-blue)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 17px/1.3 var(--font-core)',
      color: 'var(--web-navy)'
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--web-grey-100)',
      borderBottom: '1px solid var(--web-grey-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      padding: '26px 40px',
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 20,
    color: "var(--web-blue)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      margin: 0
    }
  }, "Every job in the portal carries its full evidence pack \u2014 before photographs, quote, invoice, certificate of compliance and after photographs \u2014 retrievable at any time."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--web-grey-050)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      padding: '28px 40px',
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: LABEL
  }, "Need help signing in?"), /*#__PURE__*/React.createElement("a", {
    href: wa('Hi Home Assist, I need help signing in to the portal. '),
    target: "_blank",
    rel: "noopener",
    style: {
      font: '600 15px/1 var(--font-core)'
    }
  }, "WhatsApp ", CH.waHome), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + CH.help,
    style: {
      font: '600 15px/1 var(--font-core)'
    }
  }, CH.help))));
}

/* Abstract two-blue portal mockup — no laptop photography. */
function PortalMock() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 4,
      overflow: 'hidden',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/technician-phone-illustration.jpg",
    alt: "Home Assist technician checking a job on his phone",
    style: {
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  }));
}
Object.assign(window, {
  PortalPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PortalPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
const PAGES = {
  home: HomePage,
  insurers: InsurersPage,
  join: JoinPage,
  portal: PortalPage,
  about: AboutPage,
  blog: BlogPage,
  terms: TermsPage,
  privacy: PrivacyPage
};
const META = {
  home: ['Burst Geyser Replacement, Leak Detection & Plumbers | Home Assist South Africa', 'LocalBusiness · Service · FAQPage'],
  insurers: ['Property Claims Management for Insurers, UMAs and Brokers | Home Assist', 'Organization · Service'],
  join: ['Become a Home Assist Service Provider | Plumbers, Electricians & Contractors', 'Organization · WebPage'],
  portal: ['Home Assist Portal | Claims and Job Management', 'WebPage'],
  about: ['About Home Assist | Contact Our Cape Town Team', 'Organization · ContactPoint · LocalBusiness'],
  blog: ['Home Assist Blog | Geysers, Leaks, Electrical and Insurance Claims', 'Blog · Article'],
  terms: ['General Terms of Use | Home Assist Technologies', 'WebPage · TermsOfService'],
  privacy: ['Privacy Policy | Home Assist Technologies', 'WebPage · PrivacyPolicy']
};
function SiteApp() {
  const [page, setPage] = React.useState('home');
  const go = id => {
    setPage(id);
    window.scrollTo(0, 0);
  };
  const Page = PAGES[page];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    page: page,
    go: go
  }), /*#__PURE__*/React.createElement(Page, {
    go: go
  }), /*#__PURE__*/React.createElement(Footer, {
    go: go
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--web-navy-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      padding: '14px 40px',
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...LABEL,
      color: 'var(--web-blue-300)'
    }
  }, "Title tag"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...SMALL,
      color: 'rgba(255,255,255,.7)'
    }
  }, META[page][0]), /*#__PURE__*/React.createElement("span", {
    style: {
      ...LABEL,
      color: 'var(--web-blue-300)',
      marginLeft: 'auto'
    }
  }, "JSON-LD"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...SMALL,
      color: 'rgba(255,255,255,.7)'
    }
  }, META[page][1]))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(SiteApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.GradientBand = __ds_scope.GradientBand;

__ds_ns.IllustrationPanel = __ds_scope.IllustrationPanel;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.MetaField = __ds_scope.MetaField;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ProgressMeter = __ds_scope.ProgressMeter;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

__ds_ns.MetricRow = __ds_scope.MetricRow;

__ds_ns.TierBadge = __ds_scope.TierBadge;

})();
