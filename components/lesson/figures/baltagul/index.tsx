import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { RelationMap } from "@/components/lesson/interactive/relation-map";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  baltagulEdges,
  baltagulPeople,
  checklistGroupsBaltagul,
  eseuPlansBaltagul,
  faptInterpretareQuiz,
  momenteContent,
  momenteItems,
  planIntroBaltagul,
  relatiiBaltagulFigure,
  rolQuiz,
  trasaturiQuiz,
} from "@/content/romana/opere/baltagul-interactiv";

// Figures of the „Baltagul” lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/baltagul-interactiv.ts.

export function MomenteleSubiectuluiBaltagul() {
  return <DetailExplorer content={momenteContent} items={momenteItems} kicker="Figură interactivă · Momentele subiectului" />;
}

export function TrasaturiTraditionalismBaltagul() {
  return <ClassifyQuiz content={trasaturiQuiz} kicker="Verifică-te · Încadrare" />;
}

export function RolulPersonajelorBaltagul() {
  return <ClassifyQuiz content={rolQuiz} kicker="Verifică-te · Rolul personajelor" />;
}

export function FaptSauInterpretareBaltagul() {
  return <ClassifyQuiz content={faptInterpretareQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function HartaRelatiilorBaltagul() {
  return (
    <RelationMap
      content={relatiiBaltagulFigure}
      people={baltagulPeople}
      edges={baltagulEdges}
      order={["vitoria", "gheorghita", "nechifor", "bogza", "cutui", "lupu"]}
      initial="vitoria"
      ratio="1 / 1"
    />
  );
}

export function PlanEseuBaltagul() {
  return <EssayPlanExplorer plans={eseuPlansBaltagul} intro={planIntroBaltagul} />;
}

export function AutoevaluareBaltagul() {
  return <SelfCheck groups={checklistGroupsBaltagul} tasks={[{ id: "text-narativ", label: "Particularitățile romanului" }]} />;
}
