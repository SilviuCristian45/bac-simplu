import { CharacterPortraits } from "@/components/lesson/character-portraits";
import { portrete, portreteIntro } from "@/content/romana/opere/ion-portrete";

/** Illustrated portraits of Ion, Ana and Florica, shown in the quick-reference section. */
export function PortreteleProtagonistilor() {
  return <CharacterPortraits intro={portreteIntro} portraits={portrete} />;
}
