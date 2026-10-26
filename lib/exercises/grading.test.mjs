// Run with: npm run test:exercises
// Tests the pure grading logic and validates every exercise set against its lesson headings.
import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import { extractHeadings } from "../content/headings.ts";
import { ionExercises } from "../../content/romana/exercitii/ion.ts";
import { moaraCuNorocExercises } from "../../content/romana/exercitii/moara-cu-noroc.ts";
import { povesteaLuiHarapAlbExercises } from "../../content/romana/exercitii/povestea-lui-harap-alb.ts";
import { checkAnswer, containsTerm, findExerciseSetProblems, normalizeText, toPublicExercise } from "./grading.ts";

const SETS = [
  { set: ionExercises, lesson: new URL("../../content/romana/opere/ion.mdx", import.meta.url) },
  { set: moaraCuNorocExercises, lesson: new URL("../../content/romana/opere/moara-cu-noroc.mdx", import.meta.url) },
  { set: povesteaLuiHarapAlbExercises, lesson: new URL("../../content/romana/opere/povestea-lui-harap-alb.mdx", import.meta.url) },
];

describe("normalizeText / containsTerm", () => {
  it("ignoră diacriticele, majusculele și punctuația", () => {
    assert.equal(normalizeText("„Glasul Pământului”!"), "glasul pamantului");
    assert.equal(normalizeText("ŞŢ șț"), "st st");
  });
  it("potrivește doar cuvinte întregi", () => {
    assert.ok(containsTerm("Este stilul indirect liber.", "indirect liber"));
    assert.ok(!containsTerm("indirectliber", "indirect liber"));
    assert.ok(!containsTerm("orice", ""));
  });
});

describe("checkAnswer", () => {
  const byId = (id) => ionExercises.exercises.find((exercise) => exercise.id === id);

  it("alegere multiplă: corect, greșit, variantă inexistentă", () => {
    const exercise = byId("ion-mc-context");
    assert.equal(checkAnswer(exercise, { type: "multiple-choice", optionId: "a" }).status, "correct");
    const wrong = checkAnswer(exercise, { type: "multiple-choice", optionId: "b" });
    assert.equal(wrong.status, "incorrect");
    assert.equal(wrong.correctOptionId, "a");
    assert.equal(checkAnswer(exercise, { type: "multiple-choice", optionId: "z" }), null);
  });

  it("adevărat/fals", () => {
    const exercise = byId("ion-af-pamant-dupa-nunta");
    assert.equal(checkAnswer(exercise, { type: "true-false", value: false }).status, "correct");
    assert.equal(checkAnswer(exercise, { type: "true-false", value: true }).status, "incorrect");
  });

  it("răspuns scurt cu termeni-cheie: variante de scriere acceptate, lipsă de termen nerecunoscută", () => {
    const exercise = byId("ion-ra-partile-romanului");
    for (const text of ["glasul pamantului si glasul iubirii", "Glasul iubirii; Glasul Pământului", "„Glasul pământului” și „Glasul iubirii”"]) {
      assert.equal(checkAnswer(exercise, { type: "short-answer", text }).status, "correct", text);
    }
    assert.equal(checkAnswer(exercise, { type: "short-answer", text: "Glasul pământului" }).status, "not-recognized");
    assert.equal(checkAnswer(exercise, { type: "short-answer", text: "   " }), null);
    assert.equal(checkAnswer(exercise, { type: "short-answer", text: "x".repeat(exercise.maxLength + 1) }), null);
  });

  it("răspuns scurt cu autoevaluare: întoarce criteriile, fără verdict", () => {
    const result = checkAnswer(byId("ion-ra-interpretare-sarutare"), { type: "short-answer", text: "Un răspuns." });
    assert.equal(result.status, "self-assessment");
    assert.ok(result.criteria.length > 0);
  });

  it("tip de răspuns nepotrivit", () => {
    assert.equal(checkAnswer(byId("ion-mc-context"), { type: "true-false", value: true }), null);
  });
});

describe("toPublicExercise nu dezvăluie răspunsuri", () => {
  for (const exercise of ionExercises.exercises) {
    it(exercise.id, () => {
      const serialized = JSON.stringify(toPublicExercise(exercise));
      for (const secret of ["correctOptionId", "correct\"", "explanation", "modelAnswer", "criteria", "requiredGroups", "basis"]) {
        assert.ok(!serialized.includes(secret), `${exercise.id} conține ${secret}`);
      }
      if (exercise.type === "short-answer") assert.ok(!serialized.includes(exercise.modelAnswer));
    });
  }
});

describe("seturile de exerciții sunt valide", () => {
  for (const { set, lesson } of SETS) {
    it(set.key, () => {
      const sectionIds = new Set(extractHeadings(readFileSync(lesson, "utf8"), set.key).map((heading) => heading.id));
      assert.deepEqual(findExerciseSetProblems(set, sectionIds), []);
    });
  }
  it("conține tipurile cerute", () => {
    const counts = Object.groupBy(ionExercises.exercises, (exercise) => exercise.type);
    assert.equal(counts["multiple-choice"].length, 5);
    assert.equal(counts["true-false"].length, 4);
    assert.equal(counts["short-answer"].length, 3);
  });
  it("răspunsurile corecte la alegere multiplă nu sunt mereu pe aceeași poziție", () => {
    const positions = new Set(
      ionExercises.exercises
        .filter((exercise) => exercise.type === "multiple-choice")
        .map((exercise) => exercise.options.findIndex((option) => option.id === exercise.correctOptionId)),
    );
    assert.ok(positions.size > 1);
  });
});

describe("răspuns scurt: variante acceptate și limite (audit 2026-10-25)", () => {
  const byId = (id) => ionExercises.exercises.find((exercise) => exercise.id === id);
  const status = (id, text) => checkAnswer(byId(id), { type: "short-answer", text }).status;

  it("acceptă ortografia cu „î” și forma articulată", () => {
    assert.equal(status("ion-ra-partile-romanului", "Glasul pămîntului și Glasul iubirii"), "correct");
    assert.equal(status("ion-ra-stil-indirect-liber", "indirectul liber"), "correct");
  });
  it("nu acceptă răspunsuri incomplete", () => {
    assert.equal(status("ion-ra-stil-indirect-liber", "stil indirect"), "not-recognized");
    assert.equal(status("ion-ra-partile-romanului", "Glasul pământului"), "not-recognized");
  });
  it("limită documentată: negațiile nu sunt înțelese", () => {
    // Interfața avertizează elevul; testul fixează comportamentul ca să nu fie schimbat din greșeală.
    assert.equal(status("ion-ra-stil-indirect-liber", "nu e stil indirect liber"), "correct");
  });
});
