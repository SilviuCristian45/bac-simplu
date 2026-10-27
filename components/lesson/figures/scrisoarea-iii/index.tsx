import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  checklistGroupsScrisoareaIII,
  cineVorbesteQuiz,
  eseuPlansScrisoareaIII,
  faptInterpretareQuiz,
  planIntroScrisoareaIII,
  structuraPartilorContent,
  structuraPartilorItems,
  trasaturiRomantismQuiz,
} from "@/content/romana/opere/scrisoarea-iii-interactiv";

// Figures of the „Scrisoarea III” lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/scrisoarea-iii-interactiv.ts.

export function StructuraPartilorScrisoareaIII() {
  return <DetailExplorer content={structuraPartilorContent} items={structuraPartilorItems} kicker="Figură interactivă · Părțile poemului" />;
}

export function TrasaturiRomantismScrisoareaIII() {
  return <ClassifyQuiz content={trasaturiRomantismQuiz} kicker="Verifică-te · Încadrare" />;
}

export function CineVorbesteScrisoareaIII() {
  return <ClassifyQuiz content={cineVorbesteQuiz} kicker="Verifică-te · Cine rostește versurile" />;
}

export function FaptSauInterpretareScrisoareaIII() {
  return <ClassifyQuiz content={faptInterpretareQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function PlanEseuScrisoareaIII() {
  return <EssayPlanExplorer plans={eseuPlansScrisoareaIII} intro={planIntroScrisoareaIII} />;
}

export function AutoevaluareScrisoareaIII() {
  return <SelfCheck groups={checklistGroupsScrisoareaIII} tasks={[{ id: "poezie", label: "Particularitățile poemului" }]} />;
}
