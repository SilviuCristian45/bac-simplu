/**
 * Fragments of the „Ion” lesson shown on the home page, to let visitors see what a lesson looks
 * like. The sentences are copied word for word from content/romana/opere/ion.mdx (checked by
 * lib/site/specimen.test.mjs); `section` is the heading or title where the full text sits.
 */

export type SpecimenKind = "text" | "interpretare" | "oficial" | "recomandare";

export type SpecimenFragment = {
  kind: SpecimenKind;
  /** Chip text, exactly as the lesson writes the label. */
  label: string;
  text: string;
  /** Source line printed in the lesson under official requirements. */
  source?: string;
  section: string;
};

export const SPECIMEN_LESSON_HREF = "/romana/opere/ion";
export const SPECIMEN_LESSON_TITLE = "„Ion” de Liviu Rebreanu";

export const SPECIMEN_OFFICIAL: SpecimenFragment = {
  kind: "oficial",
  label: "Cerință oficială",
  text: "În toate variantele 2026 analizate pentru filierele teoretică (profil real și profil umanist), tehnologică și vocațională, la Subiectul al III-lea se cere un eseu de minimum 400 de cuvinte, notat cu 30 de puncte: 18 puncte pentru conținut (câte 6 puncte pentru fiecare dintre cele trei repere) și 12 puncte pentru redactare.",
  source:
    "Examenul național de bacalaureat 2026, Proba E. a), filiera teoretică – profil real; filiera tehnologică, Varianta 4, p. 2 (subiect și barem)",
  section: "Subiectul al III-lea: eseu de minimum 400 de cuvinte, 30 de puncte (subiectele 2026, p. 2)",
};

export const SPECIMEN_FRAGMENTS: SpecimenFragment[] = [
  {
    kind: "text",
    label: "Despre roman",
    text: "Ion este fiul lui Alexandru Glanetașu, o familie săracă din Pripas.",
    section: "6.2. Statutul personajului",
  },
  {
    kind: "interpretare",
    label: "Interpretare",
    text: "statutul lui Ion se schimbă pe parcursul romanului – de la țăranul sărac și disprețuit la proprietarul de pământ. Schimbarea nu-i aduce însă împlinirea.",
    section: "6.2. Statutul personajului",
  },
  {
    kind: "recomandare",
    label: "Recomandare",
    text: "Baremul cere o prezentare „nuanțată”. Nu reduce personajul la „bun” sau „rău”.",
    section: "6.2. Statutul personajului",
  },
];
