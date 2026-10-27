import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { RelationMap } from "@/components/lesson/interactive/relation-map";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  checklistGroupsUltimaNoapte,
  eseuPlansUltimaNoapte,
  faptInterpretareQuiz,
  momenteContent,
  momenteItems,
  planIntroUltimaNoapte,
  relatiiUltimaNoapteFigure,
  rolQuiz,
  trasaturiQuiz,
  ultimaNoapteEdges,
  ultimaNoaptePeople,
} from "@/content/romana/opere/ultima-noapte-de-dragoste-interactiv";

// Figures of the Camil Petrescu lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/ultima-noapte-de-dragoste-interactiv.ts.

export function MomenteleSubiectuluiUltimaNoapte() {
  return <DetailExplorer content={momenteContent} items={momenteItems} kicker="Figură interactivă · Momentele subiectului" />;
}

export function TrasaturiRomanUltimaNoapte() {
  return <ClassifyQuiz content={trasaturiQuiz} kicker="Verifică-te · Încadrare" />;
}

export function RolulPersonajelorUltimaNoapte() {
  return <ClassifyQuiz content={rolQuiz} kicker="Verifică-te · Rolul personajelor" />;
}

export function FaptSauInterpretareUltimaNoapte() {
  return <ClassifyQuiz content={faptInterpretareQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function HartaRelatiilorUltimaNoapte() {
  return (
    <RelationMap
      content={relatiiUltimaNoapteFigure}
      people={ultimaNoaptePeople}
      edges={ultimaNoapteEdges}
      order={["stefan", "ela", "nae", "lumanararu", "grigoriade"]}
      initial="stefan"
      ratio="1 / 1"
    />
  );
}

export function PlanEseuUltimaNoapte() {
  return <EssayPlanExplorer plans={eseuPlansUltimaNoapte} intro={planIntroUltimaNoapte} />;
}

export function AutoevaluareUltimaNoapte() {
  return <SelfCheck groups={checklistGroupsUltimaNoapte} tasks={[{ id: "text-narativ", label: "Particularitățile romanului" }]} />;
}
