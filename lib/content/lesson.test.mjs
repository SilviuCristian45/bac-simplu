// Checks the short and long title helpers (lib/content/lesson.ts).

import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import { shortTitle, titleWithoutAuthor } from "./lesson.ts";
import { OPERA_SLUGS } from "./romana-opere-slugs.ts";

const meta = (title, author) => ({ title, author });

function balanced(text) {
  const count = (char) => text.split(char).length - 1;
  return count("„") === count("”");
}

describe("titlurile lecțiilor", () => {
  it("scoate autorul și ghilimelele care înconjoară titlul", () => {
    assert.equal(shortTitle(meta("„Ion” de Liviu Rebreanu", "Liviu Rebreanu")), "Ion");
    assert.equal(
      shortTitle(meta("„În contra direcției de astăzi în cultura română” de Titu Maiorescu", "Titu Maiorescu")),
      "În contra direcției de astăzi în cultura română",
    );
  });

  it("nu pierde ghilimeaua de deschidere când titlul continuă după prima pereche", () => {
    assert.equal(
      shortTitle(meta("„Moromeții” (volumul I) de Marin Preda", "Marin Preda")),
      "Moromeții (volumul I)",
    );
    assert.equal(
      shortTitle(
        meta("„Sincronismul” în „Istoria literaturii române contemporane” de E. Lovinescu", "E. Lovinescu"),
      ),
      "Sincronismul în „Istoria literaturii române contemporane”",
    );
  });

  it("lasă neschimbat un titlu fără ghilimele sau cu ghilimea neînchisă", () => {
    assert.equal(shortTitle(meta("Ion", "Liviu Rebreanu")), "Ion");
    assert.equal(shortTitle(meta("„Ion de Liviu Rebreanu", "Liviu Rebreanu")), "„Ion");
  });

  it("titleWithoutAuthor păstrează ghilimelele titlului", () => {
    assert.equal(
      titleWithoutAuthor(meta("„Moromeții” (volumul I) de Marin Preda", "Marin Preda")),
      "„Moromeții” (volumul I)",
    );
  });

  for (const slug of OPERA_SLUGS) {
    it(`titlul lecției „${slug}” rămâne echilibrat în ambele forme`, () => {
      const source = readFileSync(new URL(`../../content/romana/opere/${slug}.mdx`, import.meta.url), "utf8");
      const title = /title: "([^"]*)"/.exec(source)?.[1];
      const author = /author: "([^"]*)"/.exec(source)?.[1];
      assert.ok(title && author, slug);
      const lesson = meta(title, author);
      assert.ok(balanced(shortTitle(lesson)), shortTitle(lesson));
      assert.ok(balanced(titleWithoutAuthor(lesson)), titleWithoutAuthor(lesson));
      assert.ok(shortTitle(lesson).length > 0 && !shortTitle(lesson).startsWith("”"));
    });
  }
});
