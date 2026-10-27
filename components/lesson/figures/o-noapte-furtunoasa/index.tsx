import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { RelationMap } from "@/components/lesson/interactive/relation-map";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  checklistGroupsNoapte,
  cineVorbesteQuiz,
  eseuPlansNoapte,
  faptInterpretareQuiz,
  noapteEdges,
  noaptePeople,
  planIntroNoapte,
  relatiiNoapteFigure,
  structuraActelorContent,
  structuraActelorItems,
  tipuriDeComicQuiz,
} from "@/content/romana/opere/o-noapte-furtunoasa-interactiv";

// Figures of the „O noapte furtunoasă” lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/o-noapte-furtunoasa-interactiv.ts.

export function StructuraActelorNoapteFurtunoasa() {
  return <DetailExplorer content={structuraActelorContent} items={structuraActelorItems} kicker="Figură interactivă · Actele" />;
}

export function TipuriDeComicNoapteFurtunoasa() {
  return <ClassifyQuiz content={tipuriDeComicQuiz} kicker="Verifică-te · Tipuri de comic" />;
}

export function CineVorbesteNoapteFurtunoasa() {
  return <ClassifyQuiz content={cineVorbesteQuiz} kicker="Verifică-te · Cine spune replica" />;
}

export function FaptSauInterpretareNoapteFurtunoasa() {
  return <ClassifyQuiz content={faptInterpretareQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function HartaRelatiilorNoapteFurtunoasa() {
  return (
    <RelationMap
      content={relatiiNoapteFigure}
      people={noaptePeople}
      edges={noapteEdges}
      order={["dumitrache", "veta", "chiriac", "ipingescu", "zita", "rica"]}
      initial="dumitrache"
      ratio="1 / 1"
    />
  );
}

export function PlanEseuNoapteFurtunoasa() {
  return <EssayPlanExplorer plans={eseuPlansNoapte} intro={planIntroNoapte} />;
}

export function AutoevaluareNoapteFurtunoasa() {
  return (
    <SelfCheck
      groups={checklistGroupsNoapte}
      tasks={[{ id: "particularitati", label: "Particularitățile comediei" }]}
    />
  );
}
