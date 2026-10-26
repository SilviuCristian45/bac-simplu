export const SITE_NAME = "BAC Simplu";

export type SubjectId = "romana" | "matematica" | "informatica";

export type Subject = {
  id: SubjectId;
  title: string;
  description: string;
  /** Present only for subjects whose content is published. */
  link?: { href: string; label: string };
  note?: string;
};

export const SUBJECTS: Subject[] = [
  {
    id: "romana",
    title: "Limba și literatura română",
    description:
      "Lecții despre operele studiate pentru BAC: încadrare, temă, structură, personaje și redactarea eseului.",
    link: { href: "/romana/opere", label: "Vezi operele" },
    note: "Lecțiile publicate („Ion” de Liviu Rebreanu, „Moara cu noroc” de Ioan Slavici) sunt în curs de verificare.",
  },
  {
    id: "matematica",
    title: "Matematică",
    description: "Teorie și exerciții pentru proba de matematică. Materialele sunt în pregătire.",
  },
  {
    id: "informatica",
    title: "Informatică",
    description: "Teorie și probleme pentru proba de informatică. Materialele sunt în pregătire.",
  },
];

export type Step = {
  title: string;
  description: string;
  available: boolean;
};

export const STEPS: Step[] = [
  {
    title: "Învață teoria",
    description:
      "Citești lecții structurate după cerințele de la examen, cu explicații clare și exemple.",
    available: true,
  },
  {
    title: "Rezolvă exerciții",
    description: "Exersezi pe întrebări și sarcini asemănătoare celor de la BAC.",
    available: false,
  },
  {
    title: "Verifică răspunsurile",
    description: "Primești explicații pentru fiecare răspuns, ca să înțelegi ce ai greșit.",
    available: false,
  },
];
