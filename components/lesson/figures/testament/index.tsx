import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  checklistGroupsTestament,
  eseuPlansTestament,
  faptInterpretareQuiz,
  fragmenteContent,
  fragmenteItems,
  planIntroTestament,
  trasaturiQuiz,
} from "@/content/romana/opere/testament-interactiv";

// Figures of the „Testament” lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/testament-interactiv.ts.

export function FragmenteVerificateTestament() {
  return <DetailExplorer content={fragmenteContent} items={fragmenteItems} kicker="Figură interactivă · Fragmentele verificate" />;
}

export function TrasaturiModernismTestament() {
  return <ClassifyQuiz content={trasaturiQuiz} kicker="Verifică-te · Ce arată versul" />;
}

export function FaptSauInterpretareTestament() {
  return <ClassifyQuiz content={faptInterpretareQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function PlanEseuTestament() {
  return <EssayPlanExplorer plans={eseuPlansTestament} intro={planIntroTestament} />;
}

export function AutoevaluareTestament() {
  return <SelfCheck groups={checklistGroupsTestament} tasks={[{ id: "poezie", label: "Particularitățile poeziei" }]} />;
}
