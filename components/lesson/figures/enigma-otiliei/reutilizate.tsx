import { ChapterMap } from "@/components/lesson/interactive/chapter-map";
import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { RelationMap } from "@/components/lesson/interactive/relation-map";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  caracterizareOtiliaQuiz,
  checklistGroupsOtilia,
  essayPlansOtilia,
  faptInterpretareOtiliaQuiz,
  incipitFinalContent,
  incipitFinalItems,
  otiliaArcs,
  otiliaChapters,
  otiliaEdges,
  otiliaPeople,
  otiliaVazutaContent,
  otiliaVazutaItems,
  personajeTipQuiz,
  planIntroOtilia,
  relatiiOtiliaFigure,
  structuraOtiliaIntro,
  trasaturiRealismOtiliaQuiz,
} from "@/content/romana/opere/enigma-otiliei-interactiv";

// Figures of the „Enigma Otiliei” lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/enigma-otiliei-interactiv.ts.

export function StructuraRomanuluiOtilia() {
  return (
    <ChapterMap
      intro={structuraOtiliaIntro}
      groups={otiliaArcs}
      chapters={otiliaChapters}
      groupNoun="etapa"
      emptyMessage="Lecția nu rezumă acest capitol. Ce se întâmplă aici afli citind romanul."
    />
  );
}

export function TrasaturiRealismOtilia() {
  return <ClassifyQuiz content={trasaturiRealismOtiliaQuiz} kicker="Verifică-te · Încadrare" />;
}

export function IncipitSiFinalOtilia() {
  return <DetailExplorer content={incipitFinalContent} items={incipitFinalItems} kicker="Figură interactivă · Incipit și final" />;
}

export function FaptSauInterpretareOtilia() {
  return <ClassifyQuiz content={faptInterpretareOtiliaQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function OtiliaVazutaDeCeilalti() {
  return <DetailExplorer content={otiliaVazutaContent} items={otiliaVazutaItems} kicker="Figură interactivă · Perspective" />;
}

export function PersonajeTipOtilia() {
  return <ClassifyQuiz content={personajeTipQuiz} kicker="Verifică-te · Personaje-tip" />;
}

export function HartaRelatiilorOtilia() {
  return (
    <RelationMap
      content={relatiiOtiliaFigure}
      people={otiliaPeople}
      edges={otiliaEdges}
      order={["otilia", "felix", "pascalopol", "costache", "aglae", "stanica"]}
      initial="otilia"
      ratio="1 / 1"
    />
  );
}

export function CaracterizareOtilia() {
  return <ClassifyQuiz content={caracterizareOtiliaQuiz} kicker="Verifică-te · Caracterizare" />;
}

export function PlanEseuOtilia() {
  return <EssayPlanExplorer plans={essayPlansOtilia} intro={planIntroOtilia} />;
}

export function AutoevaluareOtilia() {
  return (
    <SelfCheck
      groups={checklistGroupsOtilia}
      tasks={[
        { id: "particularitati", label: "Particularitățile romanului" },
        { id: "personaj", label: "Construcția unui personaj" },
      ]}
    />
  );
}
