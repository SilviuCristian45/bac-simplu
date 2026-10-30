// The lesson fragments on the home page must be word-for-word quotes from the „Ion” lesson.

import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import { extractHeadings } from "../content/headings.ts";
import { SPECIMEN_FRAGMENTS, SPECIMEN_LESSON_TITLE, SPECIMEN_OFFICIAL } from "./specimen.ts";

const source = readFileSync(new URL("../../content/romana/opere/ion.mdx", import.meta.url), "utf8");
// Bold markers are formatting only; everything else must match exactly.
const plain = source.replaceAll("**", "");
const headings = new Set(extractHeadings(source, "ion").map((heading) => heading.text));

describe("fragmentele din lecția „Ion” de pe pagina principală", () => {
  for (const fragment of [SPECIMEN_OFFICIAL, ...SPECIMEN_FRAGMENTS]) {
    it(`„${fragment.label}” este citat exact: ${fragment.text.slice(0, 40)}…`, () => {
      assert.ok(plain.includes(fragment.text), "textul nu apare identic în ion.mdx");
      if (fragment.source) assert.ok(plain.includes(fragment.source), "sursa nu apare identic în ion.mdx");
      const located = headings.has(fragment.section) || plain.includes(`title="${fragment.section}"`);
      assert.ok(located, `secțiunea „${fragment.section}” nu există în lecție`);
      assert.ok(plain.includes(`${fragment.label}`), "eticheta nu apare în lecție");
    });
  }

  it("titlul lecției coincide cu cel din metadate", () => {
    assert.ok(source.includes(`title: "${SPECIMEN_LESSON_TITLE}"`));
  });
});
