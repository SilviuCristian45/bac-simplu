import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  checklistGroupsPlumb,
  elementeLimbajPlumbQuiz,
  eseuPlansPlumb,
  faptInterpretarePlumbQuiz,
  planIntroPlumb,
  structuraPlumbContent,
  structuraPlumbItems,
  trasaturiSimbolismQuiz,
} from "@/content/romana/opere/plumb-interactiv";

// Figures of the „Plumb” lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/plumb-interactiv.ts.

export function StructuraPlumb() {
  return <DetailExplorer content={structuraPlumbContent} items={structuraPlumbItems} kicker="Figură interactivă · Strofele" />;
}

export function TrasaturiSimbolismPlumb() {
  return <ClassifyQuiz content={trasaturiSimbolismQuiz} kicker="Verifică-te · Încadrare" />;
}

export function ElementeDeLimbajPlumb() {
  return <ClassifyQuiz content={elementeLimbajPlumbQuiz} kicker="Verifică-te · Limbaj artistic" />;
}

export function FaptSauInterpretarePlumb() {
  return <ClassifyQuiz content={faptInterpretarePlumbQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function PlanEseuPlumb() {
  return <EssayPlanExplorer plans={eseuPlansPlumb} intro={planIntroPlumb} />;
}

export function AutoevaluarePlumb() {
  return <SelfCheck groups={checklistGroupsPlumb} tasks={[{ id: "poezie", label: "Particularitățile poeziei" }]} />;
}
