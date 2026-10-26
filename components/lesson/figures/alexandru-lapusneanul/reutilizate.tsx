import { ChapterMap } from "@/components/lesson/interactive/chapter-map";
import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { DetailExplorer } from "@/components/lesson/interactive/detail-explorer";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { RelationMap } from "@/components/lesson/interactive/relation-map";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  caracterizareQuiz,
  checklistGroupsLapusneanul,
  essayPlansLapusneanul,
  faptInterpretareQuiz,
  glosarQuiz,
  lapusneanulChapters,
  lapusneanulEdges,
  lapusneanulMoments,
  lapusneanulPeople,
  mottouriContent,
  mottouriItems,
  planIntroLapusneanul,
  relatiiLapusneanulFigure,
  replicileContent,
  replicileItems,
  structuraLapusneanulIntro,
  trasaturiRomantismQuiz,
} from "@/content/romana/opere/alexandru-lapusneanul-interactiv";

// Figures of the „Alexandru Lăpușneanul” lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/alexandru-lapusneanul-interactiv.ts.

export function StructuraNuveleiLapusneanul() {
  return (
    <ChapterMap
      intro={structuraLapusneanulIntro}
      groups={lapusneanulMoments}
      chapters={lapusneanulChapters}
      groupNoun="momentul"
      emptyMessage="Lecția nu rezumă acest capitol. Ce se întâmplă aici afli citind nuvela."
    />
  );
}

export function TrasaturiRomantismLapusneanul() {
  return <ClassifyQuiz content={trasaturiRomantismQuiz} kicker="Verifică-te · Încadrare" />;
}

export function MottourileCapitolelor() {
  return <DetailExplorer content={mottouriContent} items={mottouriItems} kicker="Figură interactivă · Motto-urile" />;
}

export function FaptSauInterpretareLapusneanul() {
  return <ClassifyQuiz content={faptInterpretareQuiz} kicker="Verifică-te · Fapt și interpretare" />;
}

export function GlosarNoteleAutorului() {
  return <ClassifyQuiz content={glosarQuiz} kicker="Verifică-te · Cuvinte vechi" />;
}

export function ReplicileTiranului() {
  return <DetailExplorer content={replicileContent} items={replicileItems} kicker="Figură interactivă · Replicile personajului" />;
}

export function HartaRelatiilorLapusneanul() {
  return (
    <RelationMap
      content={relatiiLapusneanulFigure}
      people={lapusneanulPeople}
      edges={lapusneanulEdges}
      order={["lapusneanul", "motoc", "ruxanda", "multimea", "spancioc"]}
      initial="lapusneanul"
      ratio="1 / 1"
    />
  );
}

export function CaracterizareLapusneanul() {
  return <ClassifyQuiz content={caracterizareQuiz} kicker="Verifică-te · Caracterizare" />;
}

export function PlanEseuLapusneanul() {
  return <EssayPlanExplorer plans={essayPlansLapusneanul} intro={planIntroLapusneanul} />;
}

export function AutoevaluareLapusneanul() {
  return (
    <SelfCheck
      groups={checklistGroupsLapusneanul}
      tasks={[
        { id: "particularitati", label: "Particularitățile nuvelei" },
        { id: "personaj", label: "Personajul Lăpușneanul" },
      ]}
    />
  );
}
