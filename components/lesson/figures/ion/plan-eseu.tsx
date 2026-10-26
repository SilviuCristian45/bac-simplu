import { EssayPlanExplorer } from "@/components/lesson/interactive/essay-plan";
import { essayPlans, planIntro } from "@/content/romana/opere/ion-interactiv";

/** The essay plans from 7.2–7.3. */
export function PlanEseu() {
  return <EssayPlanExplorer plans={essayPlans} intro={planIntro} />;
}
