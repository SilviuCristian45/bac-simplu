import { RelationMap, type RelationPersonData, type RelationTone } from "@/components/lesson/interactive/relation-map";
import {
  relationEdges,
  relationPeople,
  relationsFigure,
  type RelationPerson,
} from "@/content/romana/opere/ion-figuri";

// Node centres in percent of the canvas, and node colours (same as in the other „Ion” figures).
const LAYOUT: Record<RelationPerson, { position: { x: number; y: number }; tone: RelationTone }> = {
  ion: { position: { x: 50, y: 52 }, tone: "blue" },
  florica: { position: { x: 16, y: 18 }, tone: "rose" },
  ana: { position: { x: 84, y: 18 }, tone: "amber" },
  vasile: { position: { x: 84, y: 84 }, tone: "slate" },
};

const PEOPLE = Object.fromEntries(
  (Object.keys(relationPeople) as RelationPerson[]).map((id) => [id, { ...relationPeople[id], ...LAYOUT[id] }]),
) as Record<RelationPerson, RelationPersonData>;

export function HartaRelatiilorIon() {
  return (
    <RelationMap
      content={relationsFigure}
      people={PEOPLE}
      edges={relationEdges}
      order={["ion", "ana", "florica", "vasile"]}
      initial="ion"
    />
  );
}
