import { ChapterMap, type ChapterGroup } from "@/components/lesson/interactive/chapter-map";
import { bookParts, chapters, structuraIntro } from "@/content/romana/opere/ion-interactiv";

const PART_TONES = { pamant: "amber", iubire: "rose" } as const;

const GROUPS: ChapterGroup[] = bookParts.map((part) => ({
  ...part,
  tone: PART_TONES[part.id as keyof typeof PART_TONES],
  quoted: true,
}));

/** The two parts and 13 chapters of the novel; each chapter shows what the lesson says about it. */
export function StructuraRomanului() {
  return (
    <ChapterMap
      intro={structuraIntro}
      groups={GROUPS}
      chapters={chapters}
      groupNoun="partea"
      emptyMessage="Lecția nu discută acest capitol. Ce se întâmplă aici afli citind romanul."
    />
  );
}
