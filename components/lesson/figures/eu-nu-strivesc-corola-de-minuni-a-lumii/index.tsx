import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  checklistGroupsBlaga,
  eseuPlansBlaga,
  faptInterpretareQuiz,
  fragmenteContent,
  fragmenteItems,
  planIntroBlaga,
  trasaturiQuiz,
} from "@/content/romana/opere/eu-nu-strivesc-corola-de-minuni-a-lumii-interactiv";

// Figures of the Blaga lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/eu-nu-strivesc-corola-de-minuni-a-lumii-interactiv.ts.

export function FragmenteVerificateBlaga() {
  return <DetailExplorer content={fragmenteContent} items={fragmenteItems} kicker="Figură interactivă · Fragmentele verificate" />;
}

export function TrasaturiModernismBlaga() {
  return <ClassifyQuiz content={trasaturiQuiz} kicker="Verifică-te · Ce arată fragmentul" />;
}

export function FaptSauInterpretareBlaga() {
  return <ClassifyQuiz content={faptInterpretareQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function PlanEseuBlaga() {
  return <EssayPlanExplorer plans={eseuPlansBlaga} intro={planIntroBlaga} />;
}

export function AutoevaluareBlaga() {
  return <SelfCheck groups={checklistGroupsBlaga} tasks={[{ id: "poezie", label: "Particularitățile poeziei" }]} />;
}
