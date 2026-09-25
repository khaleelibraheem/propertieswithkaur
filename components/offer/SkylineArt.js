// Generated Dubai skyline used as the project visual until the developer's
// renders are supplied (set OFFER.heroImage to swap it out). Drawn rather
// than photographed so the frame is never empty and never a broken image,
// and so it carries the same purple/gold palette as the rest of the site.
//
// Building rows are [x, width, height] tuples measured up from the horizon
// in the 1200 x 820 viewBox. The 566–634 band is left clear for the centre
// tower.
const FAR = [
  [40, 54, 150], [150, 44, 190], [250, 60, 140], [360, 48, 175], [470, 56, 155],
  [660, 50, 185], [760, 62, 145], [880, 46, 200], [980, 58, 160], [1090, 52, 180],
];

// Spaced rather than packed: the gaps are what let the sunset through, and
// a silhouette with no sky in it reads as a wall.
const MID = [
  [0, 62, 260], [96, 50, 330], [172, 74, 240], [278, 54, 360], [366, 68, 280],
  [466, 46, 310],
  [664, 58, 300], [752, 70, 250], [850, 50, 340], [930, 66, 270],
  [1028, 56, 320], [1116, 72, 240],
];

const HORIZON = 640;

// The centre tower, tapering to a spire — the shape that reads as Dubai
// from a hundred metres away.
const TOWER =
  "M598 40 L602 40 L607 140 L615 330 L628 640 L572 640 L585 330 L593 140 Z";

// Masts on a few of the taller roofs, so the skyline isn't a row of flat
// tops. [x, height above the roof, roof y].
const MASTS = [
  [121, 46, 310], [305, 54, 280], [875, 50, 300], [1056, 42, 320],
];

function Buildings({ rows }) {
  return (
    <>
      {rows.map(([x, w, h]) => (
        <rect key={`${x}-${w}-${h}`} x={x} y={HORIZON - h} width={w} height={h} rx="2" />
      ))}
    </>
  );
}

export default function SkylineArt({ idPrefix = "skyline", className }) {
  const id = (name) => `${idPrefix}-${name}`;

  return (
    <svg
      viewBox="0 0 1200 820"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Illustration of the Dubai skyline at dusk"
      className={className}
    >
      <defs>
        <linearGradient id={id("sky")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#140a24" />
          <stop offset="30%" stopColor="#261044" />
          <stop offset="52%" stopColor="#48226c" />
          <stop offset="68%" stopColor="#7c4460" />
          <stop offset="78%" stopColor="#c9793f" />
          <stop offset="100%" stopColor="#c9793f" />
        </linearGradient>

        <radialGradient id={id("sun")} cx="56%" cy="78%" r="42%">
          <stop offset="0%" stopColor="#f5d894" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#d8a13a" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#d8a13a" stopOpacity="0" />
        </radialGradient>

        <linearGradient id={id("water")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#401f5c" />
          <stop offset="100%" stopColor="#120920" />
        </linearGradient>

        <linearGradient id={id("fade")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>

        <mask id={id("reflection")}>
          <rect x="0" y={HORIZON} width="1200" height="180" fill={`url(#${id("fade")})`} />
        </mask>

        <pattern id={id("windows")} width="14" height="20" patternUnits="userSpaceOnUse">
          <rect x="4" y="6" width="2.5" height="4.5" fill="#f0cf86" />
        </pattern>

        {/* Defined without a fill so each <use> can colour it: silhouette,
            window pattern on top, then cooler for the reflection. */}
        <g id={id("city")}>
          <Buildings rows={MID} />
          <path d={TOWER} />
        </g>
      </defs>

      <rect width="1200" height="820" fill={`url(#${id("sky")})`} />
      <rect width="1200" height="820" fill={`url(#${id("sun")})`} />

      <g fill="#3a1a5e" opacity="0.6">
        <Buildings rows={FAR} />
      </g>

      <g stroke="#0d0616" strokeWidth="3">
        {MASTS.map(([x, h, roof]) => (
          <line key={x} x1={x} y1={roof} x2={x} y2={roof - h} />
        ))}
      </g>

      <use href={`#${id("city")}`} fill="#0d0616" />
      <use href={`#${id("city")}`} fill={`url(#${id("windows")})`} opacity="0.32" />

      <rect x="0" y={HORIZON} width="1200" height="180" fill={`url(#${id("water")})`} />
      <g mask={`url(#${id("reflection")})`} transform={`matrix(1 0 0 -1 0 ${HORIZON * 2})`}>
        <use href={`#${id("city")}`} fill="#160a28" />
      </g>

      {/* Light catching the surface of the water. */}
      <g fill="#f0cf86" opacity="0.16">
        <rect x="280" y="676" width="640" height="2" rx="1" />
        <rect x="390" y="716" width="420" height="2" rx="1" />
        <rect x="470" y="760" width="250" height="2" rx="1" />
      </g>
    </svg>
  );
}
