import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  argumenteQuiz,
  checklistGroupsMaiorescu,
  faptInterpretareQuiz,
  planArgumentativPlans,
  planIntroArgumentativ,
  procedeeQuiz,
  structuraContent,
  structuraItems,
} from "@/content/romana/opere/in-contra-directiei-de-astazi-interactiv";

// Figures of the Maiorescu lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/in-contra-directiei-de-astazi-interactiv.ts.

export function StructuraArgumentuluiMaiorescu() {
  return <DetailExplorer content={structuraContent} items={structuraItems} kicker="Figură interactivă · Structura argumentului" />;
}

export function ProcedeeMaiorescu() {
  return <ClassifyQuiz content={procedeeQuiz} kicker="Verifică-te · Procedee argumentative" />;
}

export function ArgumenteSiExempleMaiorescu() {
  return <ClassifyQuiz content={argumenteQuiz} kicker="Verifică-te · Ideile studiului" />;
}

export function FaptSauInterpretareMaiorescu() {
  return <ClassifyQuiz content={faptInterpretareQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function PlanArgumentativMaiorescu() {
  return <EssayPlanExplorer plans={planArgumentativPlans} intro={planIntroArgumentativ} />;
}

export function AutoevaluareMaiorescu() {
  return <SelfCheck groups={checklistGroupsMaiorescu} tasks={[{ id: "argumentare", label: "Eseul argumentativ" }]} />;
}
