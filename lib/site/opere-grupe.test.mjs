// Checks the navigation groups of works (lib/site/opere-grupe.ts).

import { strict as assert } from "node:assert";
import { readdirSync } from "node:fs";
import { describe, it } from "node:test";
import { OPERA_SLUGS } from "../content/romana-opere-slugs.ts";
import { GRUPE, GRUPE_NOTA, OPERA_GRUPA, groupOpere } from "./opere-grupe.ts";

const GROUP_IDS = GRUPE.map((grupa) => grupa.id);

function countIn(id) {
  return Object.values(OPERA_GRUPA).filter((value) => value === id).length;
}

describe("gruparea operelor pentru navigare", () => {
  it("fiecare slug din OPERA_SLUGS are exact o grupă validă", () => {
    for (const slug of OPERA_SLUGS) {
      assert.ok(Object.hasOwn(OPERA_GRUPA, slug), `lipsește grupa pentru „${slug}”`);
      assert.ok(GROUP_IDS.includes(OPERA_GRUPA[slug]), `grupă necunoscută pentru „${slug}”: ${OPERA_GRUPA[slug]}`);
    }
  });

  it("harta nu conține slug-uri inexistente", () => {
    assert.deepEqual(Object.keys(OPERA_GRUPA).sort(), [...OPERA_SLUGS].sort());
  });

  it("distribuția finală este 8 / 6 / 3 / 2", () => {
    assert.deepEqual(
      GRUPE.map((grupa) => [grupa.title, countIn(grupa.id)]),
      [
        ["Proză", 8],
        ["Poezie", 6],
        ["Teatru", 3],
        ["Critică și teorie literară", 2],
      ],
    );
    assert.equal(OPERA_SLUGS.length, 19);
  });

  it("încadrările confirmate explicit rămân neschimbate", () => {
    assert.equal(OPERA_GRUPA["scrisoarea-iii"], "poezie");
    assert.equal(OPERA_GRUPA["ultima-noapte-de-dragoste"], "proza");
    assert.equal(OPERA_GRUPA["povestea-lui-harap-alb"], "proza");
  });

  it("fiecare lecție din content/ are o grupă, deci nu poate lipsi de pe pagina principală", () => {
    const lessons = readdirSync(new URL("../../content/romana/opere/", import.meta.url))
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
    assert.deepEqual([...lessons].sort(), [...OPERA_SLUGS].sort());
    for (const slug of lessons) assert.ok(Object.hasOwn(OPERA_GRUPA, slug), slug);
  });

  it("groupOpere păstrează toate operele și le ordonează după titlu", () => {
    const items = OPERA_SLUGS.map((slug) => ({ slug, title: slug.split("-").reverse().join("-") }));
    const groups = groupOpere(items);
    assert.deepEqual(groups.map((group) => group.items.length), [8, 6, 3, 2]);
    assert.equal(groups.flatMap((group) => group.items).length, OPERA_SLUGS.length);
    for (const group of groups) {
      const titles = group.items.map((item) => item.title);
      assert.deepEqual(titles, [...titles].sort((a, b) => a.localeCompare(b, "ro")));
    }
  });

  it("groupOpere refuză o operă fără grupă, în loc să o ascundă", () => {
    assert.throws(() => groupOpere([{ slug: "opera-noua", title: "Opera nouă" }]), /nu are o grupă/);
  });

  it("nota despre navigare spune că nu e clasificare oficială", () => {
    assert.match(GRUPE_NOTA, /nu reprezintă o clasificare oficială a programei BAC/);
  });
});
