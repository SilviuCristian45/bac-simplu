import type { ComponentType, ReactNode } from "react";
import type { OperaSlug } from "@/lib/content/romana-opere-slugs";

/*
 * Decorative illustrations for the lesson introductions, drawn in SVG so they follow the theme
 * and need no external images. Motifs come from details the lessons verify in the text (the road,
 * the bridge and the cross in „Ion”, the five crosses before the inn in „Moara cu noroc”…), but
 * the drawings are hidden from assistive technology: they carry no information of their own.
 *
 * Motion is one-shot and CSS-only (globals.css, under prefers-reduced-motion: no-preference):
 * intro-draw traces a path once, intro-drift and intro-turn move a layer a few pixels and stop.
 */

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 320 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className="block size-full"
    >
      {children}
    </svg>
  );
}

function House({ x, y, w = 18, className }: { x: number; y: number; w?: number; className?: string }) {
  return (
    <g className={className}>
      <rect x={x} y={y} width={w} height={w * 0.7} />
      <path d={`M${x - 2} ${y} L${x + w / 2} ${y - w * 0.55} L${x + w + 2} ${y} Z`} />
    </g>
  );
}

function Cross({ x, y, size = 1, className }: { x: number; y: number; size?: number; className: string }) {
  return (
    <path
      d={`M${x} ${y} v${-22 * size} M${x - 7 * size} ${y - 15 * size} h${14 * size}`}
      className={className}
      strokeWidth={2.5 * size}
      strokeLinecap="round"
      fill="none"
    />
  );
}

/** „Ion”: fields and furrows, the road into Pripas, the wooden bridge and the cross at the edge of the village. */
function IonArt() {
  return (
    <Svg>
      <circle cx="252" cy="48" r="22" className="intro-rise fill-amber-300 dark:fill-amber-500/60" />
      <path
        d="M0 112 Q80 76 160 100 T320 88 V200 H0Z"
        className="intro-drift fill-lime-200 dark:fill-lime-900/50"
      />
      <g className="fill-stone-500/80 dark:fill-stone-400/70">
        <House x={196} y={96} />
        <House x={222} y={100} w={16} />
        <rect x="246" y="78" width="9" height="26" />
        <path d="M244 78 L250.5 62 L257 78 Z" />
      </g>
      <path d="M0 146 Q100 106 200 134 T320 124 V200 H0Z" className="fill-amber-200 dark:fill-amber-800/50" />
      <g className="stroke-amber-400/80 dark:stroke-amber-600/60" fill="none" strokeWidth="1.5">
        <path d="M10 160 Q100 128 190 150" />
        <path d="M20 172 Q110 140 210 160" />
        <path d="M40 184 Q130 154 230 170" />
      </g>
      <path d="M0 178 Q160 150 320 170 V200 H0Z" className="fill-lime-300 dark:fill-lime-800/60" />
      <path
        d="M20 200 C60 176 70 150 118 138 S210 120 262 106"
        pathLength={1}
        fill="none"
        strokeWidth="5"
        strokeLinecap="round"
        className="intro-draw stroke-amber-700/70 dark:stroke-amber-300/60"
      />
      <path d="M96 156 C100 150 104 147 110 145" fill="none" strokeWidth="3" className="stroke-sky-500/70" />
      <path d="M84 150 h28 M86 150 v6 M110 150 v6" fill="none" strokeWidth="2.5" strokeLinecap="round" className="stroke-stone-700 dark:stroke-stone-300" />
      <Cross x={276} y={110} className="stroke-stone-700 dark:stroke-stone-200" />
    </Svg>
  );
}

/** „Moara cu noroc”: the valley, the road from Ineu, the five crosses and the inn by the old mill. */
function MoaraArt() {
  return (
    <Svg>
      <path d="M0 58 C70 66 116 116 164 158 L0 200 Z" className="intro-drift fill-emerald-300/80 dark:fill-emerald-900/70" />
      <path d="M320 46 C246 64 206 116 164 158 L320 200 Z" className="fill-emerald-400/70 dark:fill-emerald-800/60" />
      <path d="M0 200 L164 152 L320 200 Z" className="fill-stone-300 dark:fill-stone-700/80" />
      <g className="fill-emerald-700/70 dark:fill-emerald-950">
        <path d="M30 80 l8 -20 l8 20 Z" />
        <path d="M52 86 l7 -18 l7 18 Z" />
        <path d="M262 74 l8 -20 l8 20 Z" />
        <path d="M284 70 l7 -18 l7 18 Z" />
        <path d="M240 90 l7 -17 l7 17 Z" />
      </g>
      <path
        d="M10 72 C60 82 100 112 150 160"
        pathLength={1}
        fill="none"
        strokeWidth="5"
        strokeLinecap="round"
        className="intro-draw stroke-stone-500 dark:stroke-stone-400/80"
      />
      {[
        [44, 88],
        [62, 96],
        [80, 106],
        [96, 117],
        [111, 129],
      ].map(([x, y]) => (
        <Cross key={x} x={x} y={y} size={0.55} className="stroke-stone-800 dark:stroke-stone-200" />
      ))}
      <g className="fill-amber-100 stroke-stone-700 dark:fill-stone-300 dark:stroke-stone-900" strokeWidth="1.5">
        <rect x="176" y="132" width="62" height="34" />
        <path d="M170 132 L207 108 L244 132 Z" className="fill-rose-800/80 dark:fill-rose-900" />
        <rect x="200" y="146" width="12" height="20" className="fill-stone-700 dark:fill-stone-800" />
        <rect x="184" y="140" width="10" height="9" className="fill-amber-300 dark:fill-amber-400" />
        <rect x="220" y="140" width="10" height="9" className="fill-amber-300 dark:fill-amber-400" />
      </g>
      <g className="intro-turn stroke-stone-700 dark:stroke-stone-300" fill="none" strokeWidth="2">
        <circle cx="160" cy="152" r="15" />
        <path d="M160 137 V167 M145 152 H175 M149.4 141.4 L170.6 162.6 M149.4 162.6 L170.6 141.4" />
      </g>
    </Svg>
  );
}

/** „Povestea lui Harap-Alb”: the well, the road of the trials across the hills, the castle at the end. */
function HarapArt() {
  return (
    <Svg>
      <path d="M58 30 a18 18 0 1 0 14 30 a14 14 0 1 1 -14 -30 Z" className="intro-rise fill-amber-200 dark:fill-amber-200/80" />
      <g className="fill-indigo-300/80 dark:fill-indigo-200/60">
        <circle cx="120" cy="30" r="1.6" />
        <circle cx="170" cy="22" r="1.2" />
        <circle cx="214" cy="40" r="1.6" />
        <circle cx="96" cy="58" r="1.1" />
      </g>
      <path d="M0 120 L50 70 L96 112 L150 60 L210 116 L262 64 L320 110 V200 H0Z" className="intro-drift fill-indigo-200 dark:fill-indigo-900/70" />
      <path d="M0 160 Q80 120 160 150 T320 140 V200 H0Z" className="fill-sky-200 dark:fill-sky-900/60" />
      <path d="M0 186 Q160 160 320 182 V200 H0Z" className="fill-emerald-200 dark:fill-emerald-900/60" />
      <path
        d="M44 174 C90 136 124 190 170 156 S238 118 276 122"
        fill="none"
        strokeWidth="3"
        strokeDasharray="6 7"
        strokeLinecap="round"
        className="stroke-indigo-600/70 dark:stroke-indigo-300/70"
      />
      <g className="intro-rise fill-white stroke-indigo-700 dark:fill-zinc-900 dark:stroke-indigo-200" strokeWidth="2">
        <circle cx="104" cy="160" r="4" />
        <circle cx="170" cy="156" r="4" />
        <circle cx="232" cy="128" r="4" />
      </g>
      <g className="fill-stone-300 stroke-stone-600 dark:fill-stone-600 dark:stroke-stone-300" strokeWidth="1.5">
        <rect x="26" y="168" width="22" height="14" />
        <path d="M22 160 L37 150 L52 160 Z" />
        <path d="M30 160 V168 M44 160 V168" fill="none" />
      </g>
      <g className="fill-indigo-100 stroke-indigo-800 dark:fill-indigo-950 dark:stroke-indigo-200" strokeWidth="1.5">
        <rect x="270" y="96" width="38" height="28" />
        <path d="M264 96 v-26 h12 v26 M302 96 v-26 h12 v26" />
        <path d="M264 70 h4 v-4 h4 v4 h4 M302 70 h4 v-4 h4 v4 h4" fill="none" />
        <path d="M284 124 v-12 a5 5 0 0 1 10 0 v12" />
      </g>
      <path d="M308 70 V52 l10 4 l-10 4" className="intro-drift fill-rose-500 stroke-rose-700 dark:fill-rose-400 dark:stroke-rose-300" strokeWidth="1.2" />
    </Svg>
  );
}

/** „Alexandru Lăpușneanul”: a Moldavian court and church against the evening sky. */
function LapusneanulArt() {
  return (
    <Svg>
      <circle cx="226" cy="122" r="58" className="intro-rise fill-rose-200 dark:fill-rose-900/50" />
      <path d="M0 150 Q160 132 320 150 V200 H0Z" className="intro-drift fill-stone-300/80 dark:fill-stone-800/70" />
      <g className="fill-stone-400 dark:fill-stone-600">
        <path d="M30 170 V118 h10 v-8 h8 v8 h10 v-8 h8 v8 h10 v-8 h8 v8 h10 V170 Z" />
        <rect x="16" y="96" width="22" height="74" />
        <path d="M13 96 L27 70 L41 96 Z" className="fill-rose-800/80 dark:fill-rose-900" />
        <rect x="102" y="104" width="24" height="66" />
        <path d="M99 104 L114 76 L129 104 Z" className="fill-rose-800/80 dark:fill-rose-900" />
      </g>
      <g className="fill-stone-200 stroke-stone-600 dark:fill-stone-500 dark:stroke-stone-300" strokeWidth="1.5">
        <rect x="170" y="120" width="76" height="50" />
        <rect x="192" y="96" width="32" height="24" />
        <path d="M188 96 Q208 66 228 96 Z" className="fill-amber-300 dark:fill-amber-500/80" />
        <path d="M200 170 v-20 a8 8 0 0 1 16 0 v20" className="fill-stone-600 dark:fill-stone-800" />
        <rect x="178" y="132" width="8" height="12" className="fill-amber-200 dark:fill-amber-400/80" />
        <rect x="230" y="132" width="8" height="12" className="fill-amber-200 dark:fill-amber-400/80" />
      </g>
      <Cross x={208} y={78} size={0.7} className="stroke-amber-600 dark:stroke-amber-300" />
      <path
        d="M13 96 L27 70 L41 96 M30 118 h82 M99 104 L114 76 L129 104"
        pathLength={1}
        fill="none"
        strokeWidth="2"
        strokeLinejoin="round"
        className="intro-draw stroke-rose-900/70 dark:stroke-rose-300/70"
      />
      <path d="M27 70 V54 l12 5 l-12 5" className="intro-drift fill-rose-600 stroke-rose-800 dark:fill-rose-500 dark:stroke-rose-300" strokeWidth="1.2" />
      <path d="M0 176 Q160 164 320 178 V200 H0Z" className="fill-stone-400/70 dark:fill-stone-700" />
    </Svg>
  );
}

/** „Enigma Otiliei”: a Bucharest street at dusk and a house with columns, one window lit. */
function OtiliaArt() {
  return (
    <Svg>
      <circle cx="270" cy="38" r="14" className="intro-rise fill-violet-200 dark:fill-violet-200/70" />
      <g className="intro-drift fill-slate-300 dark:fill-slate-700/80">
        <path d="M0 150 V92 h34 v-10 h22 v68 Z" />
        <path d="M250 150 V84 h28 v-12 h42 v78 Z" />
      </g>
      <path d="M0 200 L130 150 H190 L320 200 Z" className="fill-slate-300/80 dark:fill-slate-800" />
      <path
        d="M0 200 L130 150 M320 200 L190 150"
        pathLength={1}
        fill="none"
        strokeWidth="2"
        className="intro-draw stroke-slate-500/70 dark:stroke-slate-400/60"
      />
      <g className="fill-violet-50 stroke-slate-600 dark:fill-slate-600 dark:stroke-slate-300" strokeWidth="1.5">
        <rect x="96" y="92" width="128" height="58" />
        <path d="M88 92 L160 58 L232 92 Z" />
        <path d="M110 150 V98 M134 150 V98 M186 150 V98 M210 150 V98" fill="none" strokeWidth="4" />
        <path d="M150 150 v-24 a10 10 0 0 1 20 0 v24" className="fill-slate-700 dark:fill-slate-900" />
      </g>
      <rect x="142" y="102" width="12" height="14" className="fill-slate-400 dark:fill-slate-800" />
      <rect x="166" y="102" width="12" height="14" className="intro-glow fill-amber-300 dark:fill-amber-400" />
      <g className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="2" fill="none">
        <path d="M60 176 V122 h10" />
      </g>
      <circle cx="72" cy="126" r="4" className="intro-glow fill-amber-300 dark:fill-amber-400" />
    </Svg>
  );
}

/** Plays: stage curtains, a lit stage and a mask. */
function ScenaArt() {
  return (
    <Svg>
      <rect x="0" y="150" width="320" height="50" className="fill-stone-400/60 dark:fill-stone-700/70" />
      <path d="M0 0 H92 Q70 70 84 150 H0Z" className="intro-drift fill-rose-300 dark:fill-rose-800/70" />
      <path d="M320 0 H228 Q250 70 236 150 H320Z" className="intro-drift fill-rose-300 dark:fill-rose-800/70" />
      <path d="M92 0 H228 Q160 26 92 0Z" className="fill-rose-400 dark:fill-rose-700" />
      <circle cx="160" cy="96" r="26" className="intro-glow fill-amber-200 dark:fill-amber-400/60" />
      <path
        d="M146 90 q4 -5 8 0 M166 90 q4 -5 8 0 M148 106 q12 12 24 0"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        className="intro-draw stroke-stone-700 dark:stroke-stone-900"
      />
    </Svg>
  );
}

/** Poems: a moon, a few stars and flowing lines of verse. */
function VersArt() {
  return (
    <Svg>
      <circle cx="238" cy="52" r="24" className="intro-rise fill-amber-100 dark:fill-amber-200/70" />
      <g className="fill-sky-400 dark:fill-sky-200">
        <circle cx="52" cy="34" r="2" />
        <circle cx="96" cy="64" r="1.6" />
        <circle cx="146" cy="26" r="2" />
        <circle cx="188" cy="80" r="1.6" />
        <circle cx="290" cy="110" r="2" />
      </g>
      <g fill="none" strokeWidth="3" strokeLinecap="round" className="intro-draw stroke-sky-600/70 dark:stroke-sky-300/60">
        <path d="M24 122 Q80 98 136 122 T248 122 T304 116" />
        <path d="M24 148 Q88 124 152 148 T280 146" />
        <path d="M24 174 Q96 152 168 174 T296 170" />
      </g>
    </Svg>
  );
}

/** Novels: a road winding between hills toward a lit window. */
function RomanArt() {
  return (
    <Svg>
      <circle cx="84" cy="48" r="20" className="intro-rise fill-orange-200 dark:fill-orange-400/50" />
      <path d="M0 120 Q70 70 150 110 T320 96 V200 H0Z" className="intro-drift fill-emerald-200 dark:fill-emerald-900/50" />
      <path d="M0 150 Q100 120 190 144 T320 132 V200 H0Z" className="fill-emerald-300 dark:fill-emerald-950/70" />
      <path
        d="M120 200 Q150 160 176 140 T214 108"
        fill="none"
        strokeWidth="9"
        strokeLinecap="round"
        className="intro-draw stroke-stone-100 dark:stroke-stone-500/60"
      />
      <g className="fill-stone-500/80 dark:fill-stone-400/70">
        <House x={226} y={92} w={20} />
      </g>
      <rect x="233" y="98" width="5" height="6" className="intro-glow fill-amber-300 dark:fill-amber-400" />
    </Svg>
  );
}

/** Critical texts: pages with lines and a bookmark. */
function StudiuArt() {
  return (
    <Svg>
      <g className="fill-white stroke-slate-400 dark:fill-slate-700 dark:stroke-slate-400" strokeWidth="1.5">
        <rect x="88" y="34" width="104" height="132" rx="4" transform="rotate(-6 140 100)" />
        <rect x="128" y="30" width="104" height="132" rx="4" transform="rotate(5 180 96)" className="intro-drift" />
      </g>
      <g fill="none" strokeWidth="3" strokeLinecap="round" className="intro-draw stroke-teal-600/70 dark:stroke-teal-300/60">
        <path d="M150 62 H214 M150 80 H206 M150 98 H214 M150 116 H196" />
      </g>
      <path d="M214 30 v34 l8 -8 l8 8 v-34Z" className="fill-rose-400 dark:fill-rose-500" />
    </Svg>
  );
}

export type IntroIdentity = {
  Art: ComponentType;
  /** Background of the illustration frame. */
  frame: string;
  /** Soft wash behind the whole introduction. */
  wash: string;
  /** Kicker and link colour (meets 4.5:1 on the surface colours). */
  accent: string;
  /** Number badges of the essentials. */
  badge: string;
};

export const INTRO_IDENTITIES: Record<OperaSlug, IntroIdentity> = {
  ion: {
    Art: IonArt,
    frame: "bg-linear-to-b from-amber-100 to-lime-50 dark:from-amber-950/70 dark:to-zinc-900",
    wash: "from-amber-50 via-surface to-surface dark:from-amber-950/30",
    accent: "text-amber-800 dark:text-amber-300",
    badge: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200",
  },
  "moara-cu-noroc": {
    Art: MoaraArt,
    frame: "bg-linear-to-b from-emerald-100 to-stone-50 dark:from-emerald-950/70 dark:to-zinc-900",
    wash: "from-emerald-50 via-surface to-surface dark:from-emerald-950/30",
    accent: "text-emerald-800 dark:text-emerald-300",
    badge: "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200",
  },
  "povestea-lui-harap-alb": {
    Art: HarapArt,
    frame: "bg-linear-to-b from-indigo-100 to-sky-50 dark:from-indigo-950/80 dark:to-zinc-900",
    wash: "from-indigo-50 via-surface to-surface dark:from-indigo-950/30",
    accent: "text-indigo-800 dark:text-indigo-300",
    badge: "bg-indigo-100 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-200",
  },
  "alexandru-lapusneanul": {
    Art: LapusneanulArt,
    frame: "bg-linear-to-b from-rose-100 to-orange-50 dark:from-rose-950/70 dark:to-zinc-900",
    wash: "from-rose-50 via-surface to-surface dark:from-rose-950/30",
    accent: "text-rose-800 dark:text-rose-300",
    badge: "bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200",
  },
  "enigma-otiliei": {
    Art: OtiliaArt,
    frame: "bg-linear-to-b from-violet-100 to-slate-50 dark:from-violet-950/70 dark:to-zinc-900",
    wash: "from-violet-50 via-surface to-surface dark:from-violet-950/30",
    accent: "text-violet-800 dark:text-violet-300",
    badge: "bg-violet-100 text-violet-900 dark:bg-violet-950 dark:text-violet-200",
  },
  "o-scrisoare-pierduta": {
    Art: ScenaArt,
    frame: "bg-linear-to-b from-rose-100 to-orange-50 dark:from-rose-950/70 dark:to-zinc-900",
    wash: "from-rose-50 via-surface to-surface dark:from-rose-950/30",
    accent: "text-rose-800 dark:text-rose-300",
    badge: "bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200",
  },
  "o-noapte-furtunoasa": {
    Art: ScenaArt,
    frame: "bg-linear-to-b from-fuchsia-100 to-rose-50 dark:from-fuchsia-950/70 dark:to-zinc-900",
    wash: "from-fuchsia-50 via-surface to-surface dark:from-fuchsia-950/30",
    accent: "text-fuchsia-800 dark:text-fuchsia-300",
    badge: "bg-fuchsia-100 text-fuchsia-900 dark:bg-fuchsia-950 dark:text-fuchsia-200",
  },
  iona: {
    Art: ScenaArt,
    frame: "bg-linear-to-b from-cyan-100 to-slate-50 dark:from-cyan-950/70 dark:to-zinc-900",
    wash: "from-cyan-50 via-surface to-surface dark:from-cyan-950/30",
    accent: "text-cyan-800 dark:text-cyan-300",
    badge: "bg-cyan-100 text-cyan-900 dark:bg-cyan-950 dark:text-cyan-200",
  },
  luceafarul: {
    Art: VersArt,
    frame: "bg-linear-to-b from-sky-100 to-indigo-50 dark:from-sky-950/70 dark:to-zinc-900",
    wash: "from-sky-50 via-surface to-surface dark:from-sky-950/30",
    accent: "text-sky-800 dark:text-sky-300",
    badge: "bg-sky-100 text-sky-900 dark:bg-sky-950 dark:text-sky-200",
  },
  plumb: {
    Art: VersArt,
    frame: "bg-linear-to-b from-slate-100 to-zinc-50 dark:from-slate-950/70 dark:to-zinc-900",
    wash: "from-slate-50 via-surface to-surface dark:from-slate-950/30",
    accent: "text-slate-800 dark:text-slate-300",
    badge: "bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-200",
  },
  testament: {
    Art: VersArt,
    frame: "bg-linear-to-b from-amber-100 to-stone-50 dark:from-amber-950/70 dark:to-zinc-900",
    wash: "from-amber-50 via-surface to-surface dark:from-amber-950/30",
    accent: "text-amber-800 dark:text-amber-300",
    badge: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200",
  },
  "scrisoarea-iii": {
    Art: VersArt,
    frame: "bg-linear-to-b from-red-100 to-orange-50 dark:from-red-950/70 dark:to-zinc-900",
    wash: "from-red-50 via-surface to-surface dark:from-red-950/30",
    accent: "text-red-800 dark:text-red-300",
    badge: "bg-red-100 text-red-900 dark:bg-red-950 dark:text-red-200",
  },
  "eu-nu-strivesc-corola-de-minuni-a-lumii": {
    Art: VersArt,
    frame: "bg-linear-to-b from-violet-100 to-sky-50 dark:from-violet-950/70 dark:to-zinc-900",
    wash: "from-violet-50 via-surface to-surface dark:from-violet-950/30",
    accent: "text-violet-800 dark:text-violet-300",
    badge: "bg-violet-100 text-violet-900 dark:bg-violet-950 dark:text-violet-200",
  },
  "leoaica-tanara-iubirea": {
    Art: VersArt,
    frame: "bg-linear-to-b from-orange-100 to-amber-50 dark:from-orange-950/70 dark:to-zinc-900",
    wash: "from-orange-50 via-surface to-surface dark:from-orange-950/30",
    accent: "text-orange-800 dark:text-orange-300",
    badge: "bg-orange-100 text-orange-900 dark:bg-orange-950 dark:text-orange-200",
  },
  baltagul: {
    Art: RomanArt,
    frame: "bg-linear-to-b from-emerald-100 to-lime-50 dark:from-emerald-950/70 dark:to-zinc-900",
    wash: "from-emerald-50 via-surface to-surface dark:from-emerald-950/30",
    accent: "text-emerald-800 dark:text-emerald-300",
    badge: "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200",
  },
  "ultima-noapte-de-dragoste": {
    Art: RomanArt,
    frame: "bg-linear-to-b from-stone-100 to-slate-50 dark:from-stone-950/70 dark:to-zinc-900",
    wash: "from-stone-50 via-surface to-surface dark:from-stone-950/30",
    accent: "text-stone-800 dark:text-stone-300",
    badge: "bg-stone-100 text-stone-900 dark:bg-stone-950 dark:text-stone-200",
  },
  "morometii-volumul-1": {
    Art: RomanArt,
    frame: "bg-linear-to-b from-yellow-100 to-lime-50 dark:from-yellow-950/70 dark:to-zinc-900",
    wash: "from-yellow-50 via-surface to-surface dark:from-yellow-950/30",
    accent: "text-yellow-800 dark:text-yellow-300",
    badge: "bg-yellow-100 text-yellow-900 dark:bg-yellow-950 dark:text-yellow-200",
  },
  "in-contra-directiei-de-astazi": {
    Art: StudiuArt,
    frame: "bg-linear-to-b from-teal-100 to-slate-50 dark:from-teal-950/70 dark:to-zinc-900",
    wash: "from-teal-50 via-surface to-surface dark:from-teal-950/30",
    accent: "text-teal-800 dark:text-teal-300",
    badge: "bg-teal-100 text-teal-900 dark:bg-teal-950 dark:text-teal-200",
  },
  "sincronismul-lovinescu": {
    Art: StudiuArt,
    frame: "bg-linear-to-b from-blue-100 to-sky-50 dark:from-blue-950/70 dark:to-zinc-900",
    wash: "from-blue-50 via-surface to-surface dark:from-blue-950/30",
    accent: "text-blue-800 dark:text-blue-300",
    badge: "bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200",
  },
};
