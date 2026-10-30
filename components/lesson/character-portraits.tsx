import Image from "next/image";
import { FigureShell } from "./interactive/figure-shell";

export type CharacterPortrait = {
  id: string;
  name: string;
  /** Short line under the name; keep it to what the lesson itself says about the character. */
  caption?: string;
  /** Path under /public. */
  src: string;
  width: number;
  height: number;
  /** Describes what the image shows, not who the character is. */
  alt: string;
};

export type CharacterPortraitsIntro = {
  kicker: string;
  title: string;
  summary: string;
  note: string;
};

/**
 * Portraits of the characters of a lesson. Images keep their own aspect ratio: the first one
 * spans the full width, the others share the next row (two columns from the small breakpoint).
 */
export function CharacterPortraits({
  intro,
  portraits,
}: {
  intro: CharacterPortraitsIntro;
  portraits: CharacterPortrait[];
}) {
  return (
    <FigureShell kicker={intro.kicker} title={intro.title} summary={intro.summary} note={intro.note}>
      <ul className="grid list-none gap-4 pl-0 sm:grid-cols-2">
        {portraits.map((portrait, index) => (
          <li
            key={portrait.id}
            className={`m-0 overflow-hidden rounded-xl border border-line bg-surface-muted ${
              index === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <Image
              src={portrait.src}
              width={portrait.width}
              height={portrait.height}
              alt={portrait.alt}
              sizes={index === 0 ? "(min-width: 1024px) 720px, 100vw" : "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"}
              className="block h-auto w-full"
            />
            <p className="px-4 py-3 text-ink-body">
              <strong className="font-semibold text-ink">{portrait.name}</strong>
              {portrait.caption && <span className="text-ink-muted"> · {portrait.caption}</span>}
            </p>
          </li>
        ))}
      </ul>
    </FigureShell>
  );
}
