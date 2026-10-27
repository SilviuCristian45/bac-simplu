import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  checklistGroupsStanescu,
  eseuPlansStanescu,
  faptInterpretareQuiz,
  fragmenteContent,
  fragmenteItems,
  planIntroStanescu,
  trasaturiQuiz,
} from "@/content/romana/opere/leoaica-tanara-iubirea-interactiv";

// Figures of the Stănescu lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/leoaica-tanara-iubirea-interactiv.ts.

export function FragmenteVerificateStanescu() {
  return <DetailExplorer content={fragmenteContent} items={fragmenteItems} kicker="Figură interactivă · Fragmentul verificat" />;
}

export function TrasaturiNeomodernismStanescu() {
  return <ClassifyQuiz content={trasaturiQuiz} kicker="Verifică-te · Ce arată elementul" />;
}

export function FaptSauInterpretareStanescu() {
  return <ClassifyQuiz content={faptInterpretareQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function PlanEseuStanescu() {
  return <EssayPlanExplorer plans={eseuPlansStanescu} intro={planIntroStanescu} />;
}

export function AutoevaluareStanescu() {
  return <SelfCheck groups={checklistGroupsStanescu} tasks={[{ id: "poezie", label: "Particularitățile poeziei" }]} />;
}
