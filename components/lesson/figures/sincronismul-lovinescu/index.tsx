import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  checklistGroupsLovinescu,
  conceptelePrincipaleQuiz,
  faptInterpretareQuiz,
  planArgumentativPlans,
  planIntroArgumentativ,
  structuraContent,
  structuraItems,
} from "@/content/romana/opere/sincronismul-lovinescu-interactiv";

// Figures of the Lovinescu lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/sincronismul-lovinescu-interactiv.ts.

export function StructuraFragmentuluiLovinescu() {
  return <DetailExplorer content={structuraContent} items={structuraItems} kicker="Figură interactivă · Structura fragmentului" />;
}

export function ConceptelePrincipaleLovinescu() {
  return <ClassifyQuiz content={conceptelePrincipaleQuiz} kicker="Verifică-te · Ideile fragmentului" />;
}

export function FaptSauInterpretareLovinescu() {
  return <ClassifyQuiz content={faptInterpretareQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function PlanArgumentativLovinescu() {
  return <EssayPlanExplorer plans={planArgumentativPlans} intro={planIntroArgumentativ} />;
}

export function AutoevaluareLovinescu() {
  return <SelfCheck groups={checklistGroupsLovinescu} tasks={[{ id: "argumentare", label: "Eseul argumentativ" }]} />;
}
