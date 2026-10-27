import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  checklistGroupsIona,
  eseuPlansIona,
  faptInterpretareQuiz,
  planIntroIona,
  simboluriQuiz,
  structuraContent,
  structuraItems,
} from "@/content/romana/opere/iona-interactiv";

// Figures of the „Iona” lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/iona-interactiv.ts.

export function StructuraTablourilorIona() {
  return <DetailExplorer content={structuraContent} items={structuraItems} kicker="Figură interactivă · Tablourile" />;
}

export function SimboluriIona() {
  return <ClassifyQuiz content={simboluriQuiz} kicker="Verifică-te · Simboluri" />;
}

export function FaptSauInterpretareIona() {
  return <ClassifyQuiz content={faptInterpretareQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function PlanEseuIona() {
  return <EssayPlanExplorer plans={eseuPlansIona} intro={planIntroIona} />;
}

export function AutoevaluareIona() {
  return <SelfCheck groups={checklistGroupsIona} tasks={[{ id: "text-dramatic", label: "Particularitățile textului dramatic" }]} />;
}
