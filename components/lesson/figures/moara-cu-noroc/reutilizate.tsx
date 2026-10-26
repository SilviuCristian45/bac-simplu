import { ChapterMap } from "@/components/lesson/interactive/chapter-map";
import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { RelationMap } from "@/components/lesson/interactive/relation-map";
import { SelfCheck } from "@/components/lesson/interactive/self-check";
import {
  alegeriQuiz,
  caracterizareMoaraQuiz,
  checklistGroupsMoara,
  essayPlansMoara,
  moaraChapters,
  moaraEdges,
  moaraMoments,
  moaraPeople,
  planIntroMoara,
  relationsFigureMoara,
  structuraNuveleiIntro,
  trasaturiRealismMoaraQuiz,
} from "@/content/romana/opere/moara-cu-noroc-interactiv";

// Figures of the „Moara cu noroc” lesson built from the shared interactive components;
// the texts and their sources live in content/romana/opere/moara-cu-noroc-interactiv.ts.

export function StructuraNuvelei() {
  return (
    <ChapterMap
      intro={structuraNuveleiIntro}
      groups={moaraMoments}
      chapters={moaraChapters}
      groupNoun="momentul"
      emptyMessage="Lecția nu rezumă acest capitol. Ce se întâmplă aici afli citind nuvela."
    />
  );
}

export function TrasaturiRealismMoara() {
  return <ClassifyQuiz content={trasaturiRealismMoaraQuiz} kicker="Verifică-te · Încadrare" />;
}

export function AlegerileLuiGhita() {
  return <ClassifyQuiz content={alegeriQuiz} kicker="Verifică-te · Alegerile personajului" />;
}

export function CaracterizareMoara() {
  return <ClassifyQuiz content={caracterizareMoaraQuiz} kicker="Verifică-te · Caracterizare" />;
}

export function HartaRelatiilorMoara() {
  return (
    <RelationMap
      content={relationsFigureMoara}
      people={moaraPeople}
      edges={moaraEdges}
      order={["ghita", "ana", "lica", "pintea", "batrana"]}
      initial="ghita"
    />
  );
}

export function PlanEseuMoara() {
  return <EssayPlanExplorer plans={essayPlansMoara} intro={planIntroMoara} />;
}

export function AutoevaluareMoara() {
  return (
    <SelfCheck
      groups={checklistGroupsMoara}
      tasks={[
        { id: "particularitati", label: "Particularitățile nuvelei" },
        { id: "personaj", label: "Personajul Ghiță" },
      ]}
    />
  );
}
