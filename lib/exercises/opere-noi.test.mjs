// Run with: npm run test:exercises
// Verificări comune pentru operele adăugate după primele cinci (lecție, set de exerciții, date interactive, registre).
// Fiecare operă nouă se adaugă în lista WORKS de mai jos.
import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import { extractHeadings, extractTitle, slugifyHeading } from "../content/headings.ts";
import { OPERA_SLUGS } from "../content/romana-opere-slugs.ts";
import { luceafarulExercises } from "../../content/romana/exercitii/luceafarul.ts";
import * as luceafarulContent from "../../content/romana/opere/luceafarul-interactiv.ts";
import { plumbExercises } from "../../content/romana/exercitii/plumb.ts";
import * as plumbContent from "../../content/romana/opere/plumb-interactiv.ts";
import { testamentExercises } from "../../content/romana/exercitii/testament.ts";
import * as testamentContent from "../../content/romana/opere/testament-interactiv.ts";
import { scrisoareaIIIExercises } from "../../content/romana/exercitii/scrisoarea-iii.ts";
import * as scrisoareaIIIContent from "../../content/romana/opere/scrisoarea-iii-interactiv.ts";
import { oNoapteFurtunoasaExercises } from "../../content/romana/exercitii/o-noapte-furtunoasa.ts";
import * as oNoapteFurtunoasaContent from "../../content/romana/opere/o-noapte-furtunoasa-interactiv.ts";
import { inContraDirectieiExercises } from "../../content/romana/exercitii/in-contra-directiei-de-astazi.ts";
import * as inContraDirectieiContent from "../../content/romana/opere/in-contra-directiei-de-astazi-interactiv.ts";
import { baltagulExercises } from "../../content/romana/exercitii/baltagul.ts";
import * as baltagulContent from "../../content/romana/opere/baltagul-interactiv.ts";
import { blagaExercises } from "../../content/romana/exercitii/eu-nu-strivesc-corola-de-minuni-a-lumii.ts";
import * as blagaContent from "../../content/romana/opere/eu-nu-strivesc-corola-de-minuni-a-lumii-interactiv.ts";
import { ultimaNoapteExercises } from "../../content/romana/exercitii/ultima-noapte-de-dragoste.ts";
import * as ultimaNoapteContent from "../../content/romana/opere/ultima-noapte-de-dragoste-interactiv.ts";
import { ionaExercises } from "../../content/romana/exercitii/iona.ts";
import * as ionaContent from "../../content/romana/opere/iona-interactiv.ts";
import { leoaicaExercises } from "../../content/romana/exercitii/leoaica-tanara-iubirea.ts";
import * as leoaicaContent from "../../content/romana/opere/leoaica-tanara-iubirea-interactiv.ts";
import { sincronismulExercises } from "../../content/romana/exercitii/sincronismul-lovinescu.ts";
import * as sincronismulContent from "../../content/romana/opere/sincronismul-lovinescu-interactiv.ts";
import { morometiiExercises } from "../../content/romana/exercitii/morometii-volumul-1.ts";
import * as morometiiContent from "../../content/romana/opere/morometii-volumul-1-interactiv.ts";
import { oScrisoarePierdutaExercises } from "../../content/romana/exercitii/o-scrisoare-pierduta.ts";
import * as oScrisoarePierdutaContent from "../../content/romana/opere/o-scrisoare-pierduta-interactiv.ts";
import { checkAnswer, findExerciseSetProblems, toPublicExercise } from "./grading.ts";

const WORKS = [
  {
    slug: "o-scrisoare-pierduta",
    title: "„O scrisoare pierdută” de I. L. Caragiale",
    set: oScrisoarePierdutaExercises,
    content: oScrisoarePierdutaContent,
    idPrefix: "scrisoare",
  },
  {
    slug: "luceafarul",
    title: "„Luceafărul” de Mihai Eminescu",
    set: luceafarulExercises,
    content: luceafarulContent,
    idPrefix: "luceafar",
  },
  {
    slug: "plumb",
    title: "„Plumb” de George Bacovia",
    set: plumbExercises,
    content: plumbContent,
    idPrefix: "plumb",
  },
  {
    slug: "testament",
    title: "„Testament” de Tudor Arghezi",
    set: testamentExercises,
    content: testamentContent,
    idPrefix: "testament",
  },
  {
    slug: "scrisoarea-iii",
    title: "„Scrisoarea III” de Mihai Eminescu",
    set: scrisoareaIIIExercises,
    content: scrisoareaIIIContent,
    idPrefix: "scrisoarea3",
  },
  {
    slug: "o-noapte-furtunoasa",
    title: "„O noapte furtunoasă” de I. L. Caragiale",
    set: oNoapteFurtunoasaExercises,
    content: oNoapteFurtunoasaContent,
    idPrefix: "noapte",
  },
  {
    slug: "in-contra-directiei-de-astazi",
    title: "„În contra direcției de astăzi în cultura română” de Titu Maiorescu",
    set: inContraDirectieiExercises,
    content: inContraDirectieiContent,
    idPrefix: "maiorescu",
  },
  {
    slug: "baltagul",
    title: "„Baltagul” de Mihail Sadoveanu",
    set: baltagulExercises,
    content: baltagulContent,
    idPrefix: "baltagul",
  },
  {
    slug: "eu-nu-strivesc-corola-de-minuni-a-lumii",
    title: "„Eu nu strivesc corola de minuni a lumii” de Lucian Blaga",
    set: blagaExercises,
    content: blagaContent,
    idPrefix: "blaga",
  },
  {
    slug: "ultima-noapte-de-dragoste",
    title: "„Ultima noapte de dragoste, întâia noapte de război” de Camil Petrescu",
    set: ultimaNoapteExercises,
    content: ultimaNoapteContent,
    idPrefix: "ultima",
  },
  {
    slug: "iona",
    title: "„Iona” de Marin Sorescu",
    set: ionaExercises,
    content: ionaContent,
    idPrefix: "iona",
  },
  {
    slug: "leoaica-tanara-iubirea",
    title: "„Leoaică tânără, iubirea” de Nichita Stănescu",
    set: leoaicaExercises,
    content: leoaicaContent,
    idPrefix: "leoaica",
  },
  {
    slug: "sincronismul-lovinescu",
    title: "„Sincronismul” în „Istoria literaturii române contemporane” de E. Lovinescu",
    set: sincronismulExercises,
    content: sincronismulContent,
    idPrefix: "sincronism",
  },
  {
    slug: "morometii-volumul-1",
    title: "„Moromeții” (volumul I) de Marin Preda",
    set: morometiiExercises,
    content: morometiiContent,
    idPrefix: "morometii",
  },
];

const lessonUrl = (slug) => new URL(`../../content/romana/opere/${slug}.mdx`, import.meta.url);

for (const work of WORKS) {
  const source = readFileSync(lessonUrl(work.slug), "utf8");
  const headings = extractHeadings(source, `${work.slug}.mdx`);
  const headingText = new Map(headings.map((heading) => [heading.id, heading.text]));
  const exercises = work.set.exercises;
  const choiceExercises = exercises.filter((exercise) => exercise.type === "multiple-choice");
  const values = Object.values(work.content);
  const quizzes = values.filter((value) => value && !Array.isArray(value) && Array.isArray(value.items) && Array.isArray(value.choices));
  const essayPlans = values.filter((value) => Array.isArray(value) && value.every((item) => item && Array.isArray(item.blocks)));
  const detailLists = values.filter((value) => Array.isArray(value) && value.length > 0 && value.every((item) => item && Array.isArray(item.fields)));

  describe(`lecția „${work.slug}”`, () => {
    it("este înregistrată, are titlul din metadate și rămâne nevalidată", () => {
      assert.ok(OPERA_SLUGS.includes(work.slug));
      assert.equal(extractTitle(source), work.title);
      assert.match(source, new RegExp(`slug: "${work.slug}"`));
      assert.match(source, /status: "draft-neverificat"/);
      assert.match(source, /lastReviewed: null/);
    });

    it("spune în text că nu a fost validată de un profesor", () => {
      assert.match(source, /nu a fost validată de un profesor/);
    });

    it("fiecare componentă importată este folosită, iar fiecare componentă folosită este importată", () => {
      const match = /import \{([^}]*)\} from "@\/components\/lesson\/figures\/[a-z0-9-]+"/.exec(source);
      assert.ok(match, "lipsește importul figurilor");
      const imported = match[1].split(",").map((name) => name.trim()).filter(Boolean);
      const used = [...source.matchAll(/^<([A-Z]\w*) \/>$/gm)].map((item) => item[1]);
      assert.deepEqual([...new Set(used)].sort(), [...imported].sort());
    });

    it("are cel puțin opt secțiuni principale și ancore unice", () => {
      assert.ok(headings.filter((heading) => heading.level === 2).length >= 8);
      assert.equal(new Set(headings.map((heading) => heading.id)).size, headings.length);
    });

    it("conține secțiunea de surse și limite", () => {
      assert.ok(headings.some((heading) => /^\d+\. Surse și limite$/.test(heading.text)));
    });
  });

  describe(`setul de exerciții „${work.slug}”`, () => {
    it("este valid față de titlurile lecției", () => {
      assert.deepEqual(findExerciseSetProblems(work.set, new Set(headings.map((heading) => heading.id))), []);
    });

    it("are 12–16 exerciții, de tipuri și dificultăți variate", () => {
      assert.ok(exercises.length >= 12 && exercises.length <= 16, `${exercises.length} exerciții`);
      assert.deepEqual([...new Set(exercises.map((exercise) => exercise.type))].sort(), ["multiple-choice", "short-answer", "true-false"]);
      assert.equal(new Set(exercises.map((exercise) => exercise.difficulty)).size, 3);
    });

    it("id-urile au prefixul operei și sunt unice", () => {
      for (const exercise of exercises) assert.match(exercise.id, new RegExp(`^${work.idPrefix}-(mc|af|ra)-[a-z0-9-]+$`));
      assert.equal(new Set(exercises.map((exercise) => exercise.id)).size, exercises.length);
    });

    it("etichetele secțiunilor sunt chiar titlurile din lecție", () => {
      for (const exercise of exercises) assert.equal(headingText.get(exercise.lessonSection.id), exercise.lessonSection.label, exercise.id);
    });

    it("variantele corecte nu sunt în mod repetat cele mai lungi și nu stau mereu pe aceeași poziție", () => {
      const longest = choiceExercises.filter((exercise) => {
        const correct = exercise.options.find((option) => option.id === exercise.correctOptionId);
        return exercise.options.every((option) => option === correct || option.text.length < correct.text.length);
      });
      assert.ok(longest.length <= Math.floor(choiceExercises.length / 3), `${longest.length} din ${choiceExercises.length} au varianta corectă cea mai lungă`);
      const positions = new Set(choiceExercises.map((exercise) => exercise.options.findIndex((option) => option.id === exercise.correctOptionId)));
      assert.equal(positions.size, 4);
    });

    it("întrebările adevărat/fals au ambele răspunsuri", () => {
      const answers = exercises.filter((exercise) => exercise.type === "true-false").map((exercise) => exercise.correct);
      assert.ok(answers.includes(true) && answers.includes(false));
    });

    it("alegerile multiple au câte patru variante distincte", () => {
      for (const exercise of choiceExercises) {
        assert.equal(exercise.options.length, 4, exercise.id);
        assert.equal(new Set(exercise.options.map((option) => option.text)).size, 4, exercise.id);
      }
    });

    it("fiecare exercițiu are explicație și sursă", () => {
      for (const exercise of exercises) {
        assert.ok(exercise.explanation.length > 60, exercise.id);
        assert.ok(exercise.basis.length > 0, exercise.id);
      }
    });

    it("răspunsurile corecte nu ajung în datele publice", () => {
      for (const exercise of exercises) {
        const serialized = JSON.stringify(toPublicExercise(exercise));
        for (const secret of ["correctOptionId", "explanation", "modelAnswer", "criteria", "requiredGroups", "basis"]) {
          assert.ok(!serialized.includes(secret), `${exercise.id} conține ${secret}`);
        }
        assert.ok(!serialized.includes(exercise.explanation), exercise.id);
        if (exercise.type === "short-answer") assert.ok(!serialized.includes(exercise.modelAnswer), exercise.id);
      }
    });

    it("corectarea recunoaște varianta corectă și respinge celelalte", () => {
      for (const exercise of choiceExercises) {
        for (const option of exercise.options) {
          const expected = option.id === exercise.correctOptionId ? "correct" : "incorrect";
          assert.equal(checkAnswer(exercise, { type: "multiple-choice", optionId: option.id }).status, expected, `${exercise.id}/${option.id}`);
        }
      }
      for (const exercise of exercises.filter((item) => item.type === "true-false")) {
        assert.equal(checkAnswer(exercise, { type: "true-false", value: exercise.correct }).status, "correct", exercise.id);
        assert.equal(checkAnswer(exercise, { type: "true-false", value: !exercise.correct }).status, "incorrect", exercise.id);
      }
    });

    it("răspunsurile scurte: modelul trece verificarea, autoevaluarea nu dă verdict", () => {
      for (const exercise of exercises.filter((item) => item.type === "short-answer")) {
        const result = checkAnswer(exercise, { type: "short-answer", text: exercise.modelAnswer });
        if (exercise.grading.mode === "keywords") assert.equal(result.status, "correct", exercise.id);
        else {
          assert.equal(result.status, "self-assessment", exercise.id);
          assert.ok(result.criteria.length >= 3, exercise.id);
        }
      }
    });
  });

  describe(`datele figurilor interactive „${work.slug}”`, () => {
    it("există cel puțin un quiz, un plan de eseu și o listă de verificare", () => {
      assert.ok(quizzes.length >= 2);
      assert.ok(essayPlans.length >= 1);
      assert.ok(values.some((value) => Array.isArray(value) && value.every((item) => item && Array.isArray(item.items) && typeof item.title === "string" && !("choices" in item))));
    });

    it("quiz-urile: răspunsul corect există printre variante, fiecare enunț are explicație și sursă", () => {
      for (const quiz of quizzes) {
        const ids = quiz.choices.map((choice) => choice.id);
        assert.equal(new Set(ids).size, ids.length, quiz.title);
        assert.equal(new Set(quiz.items.map((item) => item.id)).size, quiz.items.length, quiz.title);
        for (const item of quiz.items) {
          assert.match(item.id, /^[a-z0-9-]+$/, `${quiz.title}/${item.id}`);
          const choices = item.choices ?? quiz.choices;
          assert.ok(choices.length >= 2, `${quiz.title}/${item.id}`);
          assert.ok(choices.some((choice) => choice.id === item.correct), `${quiz.title}/${item.id}`);
          assert.ok(item.explanation.length > 30 && item.source.length > 0, `${quiz.title}/${item.id}`);
        }
      }
    });

    it("explorările: id-uri unice, câmpuri și sursă prezente", () => {
      for (const items of detailLists) {
        assert.equal(new Set(items.map((item) => item.id)).size, items.length);
        for (const item of items) {
          assert.ok(item.fields.length >= 2 && item.source.length > 0, item.id);
          assert.equal(new Set(item.fields.map((field) => field.label)).size, item.fields.length, item.id);
        }
      }
    });

    it("planurile de eseu trimit doar la titluri care există în lecție", () => {
      for (const plans of essayPlans) {
        for (const plan of plans) {
          for (const block of plan.blocks) {
            for (const heading of block.see) assert.ok(headingText.has(slugifyHeading(heading)) && headingText.get(slugifyHeading(heading)) === heading, `${plan.id}/${block.id}: „${heading}”`);
          }
        }
      }
    });

    it("hărțile relațiilor: muchiile leagă personaje existente, la etape existente", () => {
      const people = values.find((value) => value && !Array.isArray(value) && Object.values(value).every((item) => item && item.position && Array.isArray(item.details)));
      const edges = values.find((value) => Array.isArray(value) && value.length > 0 && value.every((item) => item && "from" in item && "to" in item));
      const figure = values.find((value) => value && !Array.isArray(value) && Array.isArray(value.steps) && typeof value.summary === "string");
      if (!people || !edges) return;
      assert.ok(figure);
      assert.equal(new Set(figure.steps.map((step) => step.id)).size, figure.steps.length);
      for (const edge of edges) {
        assert.ok(edge.from in people && edge.to in people, `${edge.from}-${edge.to}`);
        assert.ok(edge.step >= 0 && edge.step < figure.steps.length, `${edge.from}-${edge.to}`);
      }
    });
  });
}
