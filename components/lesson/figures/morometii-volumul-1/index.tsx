import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  checklistGroupsMorometii,
  eseuPlansMorometii,
  faptInterpretareQuiz,
  planIntroMorometii,
  rolQuiz,
  sceneContent,
  sceneItems,
  trasaturiQuiz,
} from "@/content/romana/opere/morometii-volumul-1-interactiv";

// Figures of the „Moromeții” lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/morometii-volumul-1-interactiv.ts.

export function ScenelePrincipaleMorometii() {
  return <DetailExplorer content={sceneContent} items={sceneItems} kicker="Figură interactivă · Scenele principale" />;
}

export function TrasaturiMorometii() {
  return <ClassifyQuiz content={trasaturiQuiz} kicker="Verifică-te · Încadrare" />;
}

export function RolulPersonajelorMorometii() {
  return <ClassifyQuiz content={rolQuiz} kicker="Verifică-te · Rolul personajelor" />;
}

export function FaptSauInterpretareMorometii() {
  return <ClassifyQuiz content={faptInterpretareQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function PlanEseuMorometii() {
  return <EssayPlanExplorer plans={eseuPlansMorometii} intro={planIntroMorometii} />;
}

export function AutoevaluareMorometii() {
  return <SelfCheck groups={checklistGroupsMorometii} tasks={[{ id: "text-narativ", label: "Particularitățile romanului" }]} />;
}
