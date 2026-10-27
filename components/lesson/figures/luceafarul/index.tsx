import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { RelationMap } from "@/components/lesson/interactive/relation-map";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  checklistGroupsLuceafarul,
  cineVorbesteQuiz,
  eseuPlansLuceafarul,
  faptInterpretareQuiz,
  figuriDeStilQuiz,
  luceafarulEdges,
  luceafarulPeople,
  planIntroLuceafarul,
  relatiiLuceafarulFigure,
  structuraTablourilorContent,
  structuraTablourilorItems,
  trasaturiRomantismQuiz,
} from "@/content/romana/opere/luceafarul-interactiv";

// Figures of the „Luceafărul” lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/luceafarul-interactiv.ts.

export function StructuraTablourilor() {
  return <DetailExplorer content={structuraTablourilorContent} items={structuraTablourilorItems} kicker="Figură interactivă · Tablourile" />;
}

export function TrasaturiRomantismLuceafarul() {
  return <ClassifyQuiz content={trasaturiRomantismQuiz} kicker="Verifică-te · Încadrare" />;
}

export function CineVorbesteLuceafarul() {
  return <ClassifyQuiz content={cineVorbesteQuiz} kicker="Verifică-te · Cine rostește versurile" />;
}

export function FiguriDeStilLuceafarul() {
  return <ClassifyQuiz content={figuriDeStilQuiz} kicker="Verifică-te · Figuri de stil" />;
}

export function FaptSauInterpretareLuceafarul() {
  return <ClassifyQuiz content={faptInterpretareQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function HartaPersonajelorLuceafarul() {
  return (
    <RelationMap
      content={relatiiLuceafarulFigure}
      people={luceafarulPeople}
      edges={luceafarulEdges}
      order={["luceafarul", "fata", "catalin", "demiurg"]}
      initial="luceafarul"
      ratio="1 / 1"
    />
  );
}

export function PlanEseuLuceafarul() {
  return <EssayPlanExplorer plans={eseuPlansLuceafarul} intro={planIntroLuceafarul} />;
}

export function AutoevaluareLuceafarul() {
  return <SelfCheck groups={checklistGroupsLuceafarul} tasks={[{ id: "poem", label: "Particularitățile poemului" }]} />;
}
