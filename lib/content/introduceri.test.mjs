// Checks the text of the lesson introductions (content/romana/opere/introduceri.ts).

import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import { LESSON_INTROS } from "../../content/romana/opere/introduceri.ts";
import { extractHeadings } from "./headings.ts";
import { OPERA_SLUGS } from "./romana-opere-slugs.ts";

const KINDS = ["text", "interpretare", "oficial", "recomandare"];

function lessonSource(slug) {
  return readFileSync(new URL(`../../content/romana/opere/${slug}.mdx`, import.meta.url), "utf8");
}

describe("introducerile lecțiilor", () => {
  it("fiecare operă are o introducere și nu există introduceri pentru opere necunoscute", () => {
    assert.deepEqual(Object.keys(LESSON_INTROS).sort(), [...OPERA_SLUGS].sort());
  });

  for (const slug of OPERA_SLUGS) {
    describe(slug, () => {
      const intro = LESSON_INTROS[slug];
      const source = lessonSource(slug);
      const headingTexts = new Set(extractHeadings(source, slug).map((heading) => heading.text));

      it("prezentarea are una sau două propoziții, fără un paragraf lung", () => {
        const sentences = intro.lead.split(/(?<=[.!?])\s+(?=[A-ZĂÂÎȘȚ„])/u);
        assert.ok(sentences.length >= 1 && sentences.length <= 2, intro.lead);
        assert.ok(intro.lead.length <= 260, `${intro.lead.length} caractere`);
      });

      it("are 3–4 etichete și 3–5 idei esențiale", () => {
        assert.ok(intro.facts.length >= 3 && intro.facts.length <= 4);
        assert.ok(intro.essentials.length >= 3 && intro.essentials.length <= 5);
      });

      it("fiecare trimitere duce la un titlu existent în lecție", () => {
        for (const item of [...intro.facts, ...intro.essentials]) {
          assert.ok(headingTexts.has(item.section), `„${item.section}” nu este un titlu din ${slug}.mdx`);
        }
      });

      it("tipurile sunt cele din lecție, iar tema este marcată ca interpretare", () => {
        for (const item of [...intro.facts, ...intro.essentials]) assert.ok(KINDS.includes(item.kind));
        const theme = intro.facts.find((fact) => fact.label === "Temă");
        assert.ok(theme, "lipsește tema");
        assert.equal(theme.kind, "interpretare");
        assert.ok(theme.note, "tema trebuie însoțită de o precizare");
      });

      it("eticheta pentru faptele despre text este una folosită în lecție", () => {
        assert.ok(source.includes(`**${intro.textLabel}**`), intro.textLabel);
      });

      it("anul apariției din introducere apare în fișa rapidă a lecției", () => {
        const year = intro.facts.find((fact) => fact.label === "Apariție");
        assert.ok(year);
        const fisa = source.slice(source.indexOf("## 2. Fișă rapidă"), source.indexOf("## 3."));
        assert.ok(fisa.includes(year.value), `${year.value} lipsește din fișa rapidă`);
      });

      it("primele trei idei (cele vizibile inițial) includ o cerință oficială", () => {
        assert.ok(intro.essentials.slice(0, 3).some((item) => item.kind === "oficial"));
      });

      const section = (from, to) => source.slice(source.indexOf(from), source.indexOf(to));

      it("blocurile pliabile se deschid și se închid corect și au un titlu", () => {
        const opened = source.match(/^<Disclosure title="[^"]+"[^>]*>$/gm) ?? [];
        assert.equal(opened.length, source.match(/^<Disclosure\b/gm)?.length);
        assert.equal(opened.length, source.match(/^<\/Disclosure>$/gm)?.length);
      });

      it("în secțiunea 1, fiecare citat oficial este într-un bloc pliabil, iar recomandările rămân vizibile", () => {
        const exam = section("## 1. Ce trebuie să știi despre examen", "## 2. Fișă rapidă");
        const officials = exam.match(/^> \*\*Cerință oficială\.\*\*/gm)?.length ?? 0;
        const wrapped = exam.match(/<Disclosure title="[^"]+" labels="Cerință oficială">\n\n> \*\*Cerință oficială\.\*\*/g)?.length ?? 0;
        assert.ok(officials > 0);
        assert.equal(wrapped, officials);
        for (const block of exam.split(/<\/Disclosure>/).map((part) => part.split(/<Disclosure[^>]*>/)[1] ?? "")) {
          assert.ok(!block.includes("**Recomandare.**"), "o recomandare este ascunsă");
        }
      });

      it("„Cum să folosești” este un singur bloc pliabil, cu cele patru etichete în titlu", () => {
        const guide = section("## Cum să folosești această lecție", "## 1. Ce trebuie să știi despre examen");
        assert.match(guide, /^## Cum să folosești această lecție\n\n<Disclosure /);
        assert.match(guide, new RegExp(`labels="${intro.textLabel}, Interpretare, Cerință oficială, Recomandare"`));
        assert.match(guide, /<\/Disclosure>\n*$/);
      });

      it("listele din „Cum să folosești” și din „Fișă rapidă” sunt afișate ca un set de carduri", () => {
        assert.equal(source.match(/^<CardGrid>$/gm)?.length, 2);
        assert.equal(source.match(/^<\/CardGrid>$/gm)?.length, 2);
      });
    });
  }

  it("„Povestea lui Harap-Alb”: anul păstrează avertismentul despre 1878", () => {
    const year = LESSON_INTROS["povestea-lui-harap-alb"].facts.find((fact) => fact.label === "Apariție");
    assert.match(year.note, /1878/);
  });

  it("„Alexandru Lăpușneanul”: introducerea spune că opera e material suplimentar", () => {
    assert.ok(LESSON_INTROS["alexandru-lapusneanul"].essentials.some((item) => /material suplimentar/.test(item.text)));
  });
});
