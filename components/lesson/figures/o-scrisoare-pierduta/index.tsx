import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { RelationMap } from "@/components/lesson/interactive/relation-map";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  caracterizareQuiz,
  checklistGroupsScrisoare,
  eseuPlansScrisoare,
  faptInterpretareQuiz,
  planIntroScrisoare,
  relatiiScrisoareFigure,
  scrisoareEdges,
  scrisoarePeople,
  structuraActelorContent,
  structuraActelorItems,
  tipuriDeComicQuiz,
} from "@/content/romana/opere/o-scrisoare-pierduta-interactiv";

// Figures of the „O scrisoare pierdută” lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/o-scrisoare-pierduta-interactiv.ts.

export function StructuraActelor() {
  return <DetailExplorer content={structuraActelorContent} items={structuraActelorItems} kicker="Figură interactivă · Actele" />;
}

export function TipuriDeComic() {
  return <ClassifyQuiz content={tipuriDeComicQuiz} kicker="Verifică-te · Tipuri de comic" />;
}

export function FaptSauInterpretareScrisoare() {
  return <ClassifyQuiz content={faptInterpretareQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function HartaRelatiilorScrisoare() {
  return (
    <RelationMap
      content={relatiiScrisoareFigure}
      people={scrisoarePeople}
      edges={scrisoareEdges}
      order={["tipatescu", "zoe", "trahanache", "catavencu", "pristanda"]}
      initial="tipatescu"
      ratio="1 / 1"
    />
  );
}

export function CaracterizareScrisoare() {
  return <ClassifyQuiz content={caracterizareQuiz} kicker="Verifică-te · Cine spune replica" />;
}

export function PlanEseuScrisoare() {
  return <EssayPlanExplorer plans={eseuPlansScrisoare} intro={planIntroScrisoare} />;
}

export function AutoevaluareScrisoare() {
  return (
    <SelfCheck
      groups={checklistGroupsScrisoare}
      tasks={[
        { id: "particularitati", label: "Particularitățile comediei" },
        { id: "personaj", label: "Un personaj (Cațavencu)" },
      ]}
    />
  );
}
