import type {
  CharacterPortrait,
  CharacterPortraitsIntro,
} from "@/components/lesson/character-portraits";

export const portreteIntro: CharacterPortraitsIntro = {
  kicker: "Personajele",
  title: "Ion, Ana și Florica",
  summary: "Cele trei personaje din lista fișei rapide care au și o imagine în această lecție.",
  note: "Imaginile sunt ilustrații generate cu inteligență artificială (Google Flow) pentru această platformă. Sunt interpretări vizuale: nu provin din roman și nu înlocuiesc textul acestuia.",
};

export const portrete: CharacterPortrait[] = [
  {
    id: "ion",
    name: "Ion",
    caption: "fiul lui Alexandru Glanetașu",
    src: "/romana/ion/ion.webp",
    width: 1376,
    height: 768,
    alt: "Ilustrație: un tânăr țăran cu pălărie neagră, cămașă albă cu broderie la gât, curea lată de piele și haină neagră pusă pe umeri stă în picioare pe un drum de țară, între garduri de lemn și case de sat, cu dealuri în fundal.",
  },
  {
    id: "ana",
    name: "Ana",
    caption: "fiica lui Vasile Baciu",
    src: "/romana/ion/ana.webp",
    width: 1376,
    height: 768,
    alt: "Ilustrație: o tânără țărancă cu năframă pe cap și cămașă albă brodată privește gânditoare în depărtare, în fața unui gard de lemn și a unei case cu acoperiș de șindrilă.",
  },
  {
    id: "florica",
    name: "Florica",
    src: "/romana/ion/florica.webp",
    width: 1376,
    height: 768,
    alt: "Ilustrație: o tânără zâmbitoare, cu părul împletit în cozi și flori în păr, îmbrăcată într-o cămașă populară brodată cu roșu și albastru și într-o fustă cu motive, stă într-o livadă cu meri.",
  },
];
