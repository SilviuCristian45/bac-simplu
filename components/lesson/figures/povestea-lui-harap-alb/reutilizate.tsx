import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { RelationMap } from "@/components/lesson/interactive/relation-map";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  caracterizareQuiz,
  checklistGroupsHarap,
  comparatieContent,
  comparatieItems,
  essayPlansHarap,
  faptInterpretareQuiz,
  formuleContent,
  formuleItems,
  harapEdges,
  harapPeople,
  laboratorContent,
  laboratorItems,
  planIntroHarap,
  probeContent,
  probeItems,
  relatiiFigure,
  trasaturiBasmQuiz,
} from "@/content/romana/opere/povestea-lui-harap-alb-interactiv";

// Figures of the „Povestea lui Harap-Alb” lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/povestea-lui-harap-alb-interactiv.ts.

export function TrasaturiBasm() {
  return <ClassifyQuiz content={trasaturiBasmQuiz} kicker="Verifică-te · Trăsături ale basmului" />;
}

export function FaptSauInterpretare() {
  return <ClassifyQuiz content={faptInterpretareQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function CaracterizareHarap() {
  return <ClassifyQuiz content={caracterizareQuiz} kicker="Verifică-te · Caracterizare" />;
}

export function DiagramaProbelor() {
  return <DetailExplorer content={probeContent} items={probeItems} kicker="Figură interactivă · Probele" />;
}

export function FormuleSiOralitate() {
  return <DetailExplorer content={formuleContent} items={formuleItems} kicker="Figură interactivă · Formule și oralitate" />;
}

export function ComparatieHarapSpan() {
  return <DetailExplorer content={comparatieContent} items={comparatieItems} kicker="Figură interactivă · Protagonist și antagonist" />;
}

export function LaboratorInterpretare() {
  return <DetailExplorer content={laboratorContent} items={laboratorItems} kicker="Figură interactivă · Laborator de interpretare" />;
}

export function HartaRelatiilorHarap() {
  return (
    <RelationMap
      content={relatiiFigure}
      people={harapPeople}
      edges={harapEdges}
      order={["harap", "span", "duminica", "cal", "fata"]}
      initial="harap"
      ratio="1 / 1"
    />
  );
}

export function PlanEseuHarap() {
  return <EssayPlanExplorer plans={essayPlansHarap} intro={planIntroHarap} />;
}

export function AutoevaluareHarap() {
  return (
    <SelfCheck
      groups={checklistGroupsHarap}
      tasks={[
        { id: "personaj", label: "Personajul Harap-Alb" },
        { id: "particularitati", label: "Particularitățile basmului cult" },
      ]}
    />
  );
}
