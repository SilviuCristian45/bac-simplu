export const SITE_NAME = "BAC Simplu";
export const SITE_TAGLINE = "Română, pas cu pas.";
export const SITE_TITLE = `${SITE_NAME} — Bacalaureatul la Română`;
export const SITE_DESCRIPTION =
  "Pregătire gratuită pentru Bacalaureatul la Limba și literatura română: lecții despre operele studiate, exerciții cu explicații și planuri de eseu.";

export type Step = {
  title: string;
  description: string;
};

export const STEPS: Step[] = [
  {
    title: "Învață teoria",
    description:
      "Citești lecții structurate după cerințele de la examen, cu explicații clare și exemple.",
  },
  {
    title: "Rezolvă exerciții",
    description:
      "Exersezi pe întrebări cu alegere multiplă, adevărat/fals și răspuns scurt, pentru fiecare operă.",
  },
  {
    title: "Verifică răspunsurile",
    description: "Primești explicații pentru fiecare răspuns, ca să înțelegi ce ai greșit.",
  },
];
