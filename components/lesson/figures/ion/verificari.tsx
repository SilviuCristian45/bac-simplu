import { ClassifyQuiz } from "@/components/lesson/interactive/classify-quiz";
import {
  caracterizareQuiz,
  niveluriJustificareQuiz,
  tipuriInformatieQuiz,
  trasaturiRealismQuiz,
} from "@/content/romana/opere/ion-interactiv";

// Short self-checks placed in the lesson; the data and its sources live in ion-interactiv.ts.

export function TipuriDeInformatie() {
  return <ClassifyQuiz content={tipuriInformatieQuiz} kicker="Verifică-te · Cum citești lecția" />;
}

export function TrasaturiRealism() {
  return <ClassifyQuiz content={trasaturiRealismQuiz} kicker="Verifică-te · Încadrare" />;
}

export function NiveluriJustificare() {
  return <ClassifyQuiz content={niveluriJustificareQuiz} kicker="Verifică-te · Justificarea relevanței" />;
}

export function CaracterizareaLuiIon() {
  return <ClassifyQuiz content={caracterizareQuiz} kicker="Verifică-te · Caracterizare" />;
}
