import { SelfCheck } from "@/components/lesson/interactive/self-check";
import { checklistGroups } from "@/content/romana/opere/ion-interactiv";

/** The self-assessment lists from section 8 of the „Ion” lesson. */
export function Autoevaluare() {
  return (
    <SelfCheck
      groups={checklistGroups}
      tasks={[
        { id: "particularitati", label: "Particularitățile romanului" },
        { id: "personaj", label: "Personajul" },
      ]}
    />
  );
}
