// Original, hand-built SVG illustrations for each service â€” navy + gold themed
// to match the Marketing Insight Pro brand. No external images are used here.

const wrap = (children) => (
  <svg viewBox="0 0 240 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
)

function MetaAdsArt() {
  return wrap(
    <>
      <rect x="14" y="18" width="140" height="144" rx="14" fill="var(--navy)" />
      <rect x="30" y="34" width="108" height="62" rx="8" fill="var(--navy-soft)" />
      <circle cx="46" cy="54" r="10" fill="var(--gold)" />
      <rect x="64" y="48" width="58" height="6" rx="3" fill="rgba(255,255,255,0.5)" />
      <rect x="64" y="60" width="40" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
      <rect x="30" y="106" width="108" height="8" rx="4" fill="rgba(255,255,255,0.18)" />
      <rect x="30" y="122" width="70" height="8" rx="4" fill="rgba(255,255,255,0.18)" />
      <circle cx="30" cy="144" r="10" fill="rgba(201,162,74,0.35)" />
      <path d="M25 144l4 4 7-8" stroke="var(--gold-light)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <circle cx="180" cy="60" r="34" fill="none" stroke="var(--gold)" strokeWidth="2.5" opacity="0.55" />
        <circle cx="180" cy="60" r="22" fill="none" stroke="var(--gold)" strokeWidth="2.5" opacity="0.75" />
        <circle cx="180" cy="60" r="6" fill="var(--gold)" />
      </g>
      <path d="M150 120 L196 90" stroke="var(--gold-deep)" strokeWidth="3" strokeLinecap="round" />
      <path d="M186 90 L196 90 L196 100" stroke="var(--gold-deep)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  )
}

function SeoArt() {
  return wrap(
    <>
      <rect x="16" y="24" width="150" height="110" rx="10" fill="var(--navy)" />
      <rect x="16" y="24" width="150" height="20" rx="10" fill="var(--navy-soft)" />
      <circle cx="26" cy="34" r="3" fill="rgba(255,255,255,0.4)" />
      <circle cx="36" cy="34" r="3" fill="rgba(255,255,255,0.4)" />
      <circle cx="46" cy="34" r="3" fill="rgba(255,255,255,0.4)" />
      <rect x="32" y="56" width="70" height="60" rx="4" fill="none" stroke="rgba(255,255,255,0.15)" />
      <polyline points="38,102 55,86 68,94 84,68 96,74" fill="none" stroke="var(--gold-light)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="96" cy="74" r="4" fill="var(--gold)" />
      <rect x="112" y="60" width="42" height="7" rx="3" fill="rgba(255,255,255,0.22)" />
      <rect x="112" y="74" width="30" height="7" rx="3" fill="rgba(255,255,255,0.22)" />
      <rect x="112" y="98" width="42" height="7" rx="3" fill="rgba(201,162,74,0.4)" />
      <rect x="112" y="112" width="24" height="7" rx="3" fill="rgba(255,255,255,0.14)" />
      <g transform="translate(150,110)">
        <circle cx="30" cy="30" r="20" fill="#fff" stroke="var(--border)" />
        <circle cx="26" cy="26" r="9" fill="none" stroke="var(--navy)" strokeWidth="3.4" />
        <line x1="33" y1="33" x2="41" y2="41" stroke="var(--navy)" strokeWidth="3.4" strokeLinecap="round" />
      </g>
    </>
  )
}

function VideoArt() {
  return wrap(
    <>
      <rect x="20" y="26" width="160" height="96" rx="10" fill="var(--navy)" />
      <path d="M20 46 L60 26 L72 26 L36 46 Z" fill="var(--navy-soft)" />
      <path d="M76 46 L116 26 L128 26 L92 46 Z" fill="var(--navy-soft)" />
      <path d="M132 46 L172 26 L180 26 L180 46 Z" fill="var(--navy-soft)" />
      <rect x="20" y="46" width="160" height="4" fill="var(--navy-deep)" />
      <circle cx="100" cy="86" r="24" fill="rgba(201,162,74,0.18)" />
      <path d="M92 74 L92 98 L114 86 Z" fill="var(--gold)" />
      <rect x="30" y="140" width="180" height="14" rx="7" fill="var(--border)" />
      <rect x="30" y="140" width="98" height="14" rx="7" fill="var(--gold)" />
      <circle cx="128" cy="147" r="9" fill="#fff" stroke="var(--gold-deep)" strokeWidth="2.5" />
    </>
  )
}

function SocialArt() {
  return wrap(
    <>
      <rect x="66" y="14" width="86" height="150" rx="16" fill="var(--navy)" />
      <rect x="74" y="30" width="70" height="106" rx="8" fill="var(--navy-soft)" />
      <circle cx="109" cy="150" r="6" fill="rgba(255,255,255,0.5)" />
      <g>
        <rect x="18" y="46" width="52" height="36" rx="10" fill="#fff" stroke="var(--border)" />
        <path d="M26 82 L26 92 L36 82 Z" fill="#fff" stroke="var(--border)" />
        <circle cx="32" cy="60" r="4" fill="var(--gold)" />
        <rect x="42" y="56" width="20" height="4" rx="2" fill="var(--slate)" />
        <rect x="42" y="66" width="14" height="4" rx="2" fill="var(--slate-light)" />
      </g>
      <g>
        <rect x="150" y="90" width="56" height="38" rx="10" fill="var(--gold)" />
        <path d="M196 128 L196 138 L186 128 Z" fill="var(--gold)" />
        <circle cx="164" cy="104" r="4" fill="var(--navy)" />
        <rect x="174" y="100" width="22" height="4" rx="2" fill="rgba(20,32,66,0.55)" />
        <rect x="174" y="110" width="14" height="4" rx="2" fill="rgba(20,32,66,0.35)" />
      </g>
      <g fill="var(--gold-light)">
        <circle cx="90" cy="52" r="3" />
        <circle cx="128" cy="52" r="3" />
      </g>
    </>
  )
}

function UiUxArt() {
  return wrap(
    <>
      <rect x="18" y="20" width="150" height="106" rx="10" fill="var(--navy)" />
      <rect x="18" y="20" width="150" height="18" rx="10" fill="var(--navy-soft)" />
      <rect x="34" y="52" width="46" height="60" rx="6" fill="rgba(255,255,255,0.08)" />
      <rect x="88" y="52" width="66" height="26" rx="6" fill="rgba(255,255,255,0.1)" />
      <rect x="88" y="86" width="66" height="26" rx="6" fill="rgba(201,162,74,0.3)" />
      <circle cx="57" cy="72" r="10" fill="var(--gold-light)" opacity="0.85" />
      <rect x="44" y="90" width="26" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
      <g transform="translate(148,96) rotate(-40)">
        <rect x="0" y="0" width="10" height="46" rx="4" fill="var(--gold)" />
        <path d="M0 0 L10 0 L5 -10 Z" fill="var(--gold-deep)" />
      </g>
      <circle cx="176" cy="140" r="18" fill="#fff" stroke="var(--border)" />
      <path d="M170 140 l4 4 8-9" stroke="var(--navy)" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  )
}

function ContentArt() {
  return wrap(
    <>
      <rect x="38" y="18" width="120" height="150" rx="10" fill="var(--navy)" />
      <rect x="38" y="18" width="120" height="150" rx="10" fill="none" stroke="rgba(201,162,74,0.3)" />
      <rect x="54" y="42" width="88" height="8" rx="4" fill="var(--gold-light)" />
      <rect x="54" y="60" width="88" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
      <rect x="54" y="74" width="70" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
      <rect x="54" y="88" width="80" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
      <rect x="54" y="102" width="56" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
      <rect x="54" y="122" width="88" height="6" rx="3" fill="rgba(255,255,255,0.14)" />
      <rect x="54" y="136" width="60" height="6" rx="3" fill="rgba(255,255,255,0.14)" />
      <g transform="translate(150,120) rotate(-35)">
        <rect x="0" y="0" width="8" height="54" rx="3" fill="var(--gold)" />
        <path d="M0 0 L8 0 L4 -12 Z" fill="var(--gold-deep)" />
      </g>
    </>
  )
}

const artMap = {
  'meta-ads': MetaAdsArt,
  seo: SeoArt,
  'video-editing': VideoArt,
  'social-media-managing': SocialArt,
  'ui-ux-designing': UiUxArt,
  'content-writing': ContentArt,
}

export default function ServiceArt({ slug, className = '' }) {
  const Art = artMap[slug]
  if (!Art) return null
  return (
    <div className={`service-art ${className}`}>
      <Art />
    </div>
  )
}
