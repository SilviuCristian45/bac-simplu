// Run with: npm run test:exercises
// Local saving of an exercise session: format, restore, invalid data, unavailable storage, scoring.
import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { ionExercises } from "../../content/romana/exercitii/ion.ts";
import { exerciseRevision, toPublicExercise } from "./grading.ts";
import { EMPTY_ENTRY, changeDraft, recordCheck, reopen, toAttempt } from "./session-state.ts";
import {
  SESSION_STORAGE_VERSION,
  createSessionStore,
  restoreSession,
  serializeSession,
  sessionStorageKey,
} from "./session-storage.ts";
import { countSession } from "./summary.ts";

const SET = ionExercises.key;
const exercises = ionExercises.exercises.map(toPublicExercise);
const blank = () => exercises.map(() => EMPTY_ENTRY);
const choice = (value) => ({ kind: "choice", value });
const text = (value) => ({ kind: "text", value });

/** In-memory Storage double; `failWrites` makes setItem throw like a full or blocked storage. */
function memoryStorage({ failWrites = false } = {}) {
  const data = new Map();
  return {
    data,
    failWrites,
    getItem: (key) => (data.has(key) ? data.get(key) : null),
    setItem(key, value) {
      if (this.failWrites) throw new Error("QuotaExceededError");
      data.set(key, String(value));
    },
    removeItem: (key) => data.delete(key),
  };
}

/** Session after answering exercise 1 wrong (b), then correcting it after the feedback (a). */
function sessionWithCorrection() {
  const entries = blank();
  entries[0] = recordCheck(changeDraft(EMPTY_ENTRY, choice("b")), choice("b"), "incorrect");
  entries[0] = recordCheck(changeDraft(reopen(entries[0]), choice("a")), choice("a"), "correct");
  entries[1] = changeDraft(EMPTY_ENTRY, choice("c")); // ales, neverificat
  return { index: 1, finished: false, entries };
}

describe("salvarea și restaurarea sesiunii", () => {
  it("restaurează poziția, răspunsurile și stările", () => {
    const snapshot = sessionWithCorrection();
    const restored = restoreSession(serializeSession(SET, exercises, snapshot), SET, exercises);
    assert.equal(restored.outcome, "restored");
    assert.equal(restored.resetCount, 0);
    assert.equal(restored.index, 1);
    assert.equal(restored.finished, false);
    assert.deepEqual(restored.entries, snapshot.entries);
  });

  it("fără date salvate pornește o sesiune goală", () => {
    const restored = restoreSession(null, SET, exercises);
    assert.equal(restored.outcome, "empty");
    assert.deepEqual(restored.entries, blank());
  });

  it("formatul are versiune, nu conține răspunsuri corecte, explicații sau exerciții neatinse", () => {
    const raw = serializeSession(SET, exercises, sessionWithCorrection(), new Date("2026-10-25T10:00:00Z"));
    const stored = JSON.parse(raw);
    assert.equal(stored.version, SESSION_STORAGE_VERSION);
    assert.equal(stored.setKey, SET);
    assert.equal(stored.savedAt, "2026-10-25T10:00:00.000Z");
    assert.deepEqual(Object.keys(stored.entries), ["ion-mc-context", "ion-mc-conflict-interior"]);
    for (const exercise of ionExercises.exercises) {
      assert.ok(!raw.includes(exercise.explanation), `explicația pentru ${exercise.id} a fost salvată`);
      if (exercise.type === "short-answer") assert.ok(!raw.includes(exercise.modelAnswer));
    }
    assert.ok(!/correctOptionId|correctAnswer|explanation|criteria/.test(raw));
  });

  it("cheia de stocare depinde de set", () => {
    assert.equal(sessionStorageKey("romana/ion"), "bac-simplu:exercitii:romana/ion");
  });
});

describe("reîncărcarea după un răspuns verificat", () => {
  it("răspunsul verificat rămâne blocat, cu starea primei verificări", () => {
    const entries = blank();
    entries[5] = recordCheck(EMPTY_ENTRY, choice("true"), "incorrect");
    const restored = restoreSession(serializeSession(SET, exercises, { index: 5, finished: false, entries }), SET, exercises);
    const entry = restored.entries[5];
    assert.equal(restored.index, 5);
    assert.equal(entry.checked, true);
    assert.deepEqual(entry.draft, choice("true"));
    assert.equal(entry.firstStatus, "incorrect");
    // Un răspuns blocat nu poate fi schimbat fără „Modifică răspunsul”.
    assert.deepEqual(changeDraft(entry, choice("false")), entry);
  });

  it("autoevaluarea și sesiunea încheiată se păstrează", () => {
    const entries = blank();
    entries[11] = { ...recordCheck(EMPTY_ENTRY, text("Ion sărută pământul."), "self-assessment"), selfAssessment: "met" };
    const restored = restoreSession(serializeSession(SET, exercises, { index: 11, finished: true, entries }), SET, exercises);
    assert.equal(restored.entries[11].selfAssessment, "met");
    assert.equal(restored.finished, true);
  });
});

describe("rezultatul primei verificări și scorul", () => {
  it("prima verificare rămâne cea care contează și după reîncărcare", () => {
    const restored = restoreSession(serializeSession(SET, exercises, sessionWithCorrection()), SET, exercises);
    assert.deepEqual(toAttempt(restored.entries[0]), { first: "incorrect", latest: "correct" });
    const counts = countSession(restored.entries.map(toAttempt));
    assert.equal(counts.correct, 0);
    assert.equal(counts.incorrect, 1);
    assert.equal(counts.correctedLater, 1);
  });

  it("o nouă verificare nu suprascrie prima stare", () => {
    let entry = recordCheck(EMPTY_ENTRY, choice("b"), "incorrect");
    for (let i = 0; i < 3; i++) entry = recordCheck(reopen(entry), choice("a"), "correct");
    assert.equal(entry.firstStatus, "incorrect");
  });

  it("scorul nu este recalculat din răspunsul afișat", () => {
    // Răspunsul salvat este cel corect („a”), dar prima verificare a fost greșită: rămâne greșită.
    const restored = restoreSession(serializeSession(SET, exercises, sessionWithCorrection()), SET, exercises);
    assert.deepEqual(restored.entries[0].draft, choice("a"));
    assert.equal(restored.entries[0].firstStatus, "incorrect");
  });

  it("o stare inventată în stocare este ignorată", () => {
    const stored = JSON.parse(serializeSession(SET, exercises, sessionWithCorrection()));
    stored.entries["ion-mc-context"].firstStatus = "perfect";
    const entry = restoreSession(JSON.stringify(stored), SET, exercises).entries[0];
    assert.equal(entry.firstStatus, null);
    assert.equal(entry.checked, false);
  });
});

describe("date invalide sau versiuni vechi", () => {
  const valid = () => JSON.parse(serializeSession(SET, exercises, sessionWithCorrection()));

  it("JSON deteriorat, versiune necunoscută sau alt set: datele sunt ignorate", () => {
    const cases = [
      "{nu e json",
      JSON.stringify({ ...valid(), version: 0 }),
      JSON.stringify({ ...valid(), version: 99 }),
      JSON.stringify({ ...valid(), setKey: "romana/alta" }),
      JSON.stringify([1, 2]),
      JSON.stringify({ ...valid(), entries: "nu" }),
    ];
    for (const raw of cases) {
      const restored = restoreSession(raw, SET, exercises);
      assert.equal(restored.outcome, "discarded", raw.slice(0, 40));
      assert.deepEqual(restored.entries, blank());
    }
  });

  it("un exercițiu modificat între versiuni își pierde doar progresul lui", () => {
    const stored = valid();
    stored.entries["ion-mc-context"].revision = "versiune-veche";
    const restored = restoreSession(JSON.stringify(stored), SET, exercises);
    assert.equal(restored.outcome, "restored");
    assert.equal(restored.resetCount, 1);
    assert.deepEqual(restored.entries[0], EMPTY_ENTRY);
    assert.deepEqual(restored.entries[1].draft, choice("c"));
  });

  it("o sesiune terminată căreia i se invalidează toate răspunsurile nu mai e terminată", () => {
    const stored = valid();
    stored.finished = true;
    for (const entry of Object.values(stored.entries)) entry.revision = "versiune-veche";
    const restored = restoreSession(JSON.stringify(stored), SET, exercises);
    assert.equal(restored.finished, false);
    assert.deepEqual(restored.entries, blank());
  });

  it("o sesiune terminată rămâne terminată dacă măcar un răspuns se păstrează", () => {
    const stored = valid();
    stored.finished = true;
    stored.entries["ion-mc-context"].revision = "versiune-veche";
    assert.equal(restoreSession(JSON.stringify(stored), SET, exercises).finished, true);
  });

  it("o sesiune terminată fără niciun răspuns (doar parcursă) rămâne terminată", () => {
    const raw = serializeSession(SET, exercises, { index: 11, finished: true, entries: blank() });
    assert.equal(restoreSession(raw, SET, exercises).finished, true);
  });

  it("exercițiile retrase sunt ignorate, cele noi pornesc goale", () => {
    const stored = valid();
    stored.entries["ion-exercitiu-retras"] = { ...stored.entries["ion-mc-context"] };
    const restored = restoreSession(JSON.stringify(stored), SET, exercises);
    assert.equal(restored.entries.length, exercises.length);
    assert.equal(restored.resetCount, 0);
  });

  it("răspunsuri imposibile pentru exercițiu sunt eliminate", () => {
    const stored = valid();
    stored.entries["ion-mc-conflict-interior"].draft = { kind: "choice", value: "z" };
    stored.entries["ion-ra-partile-romanului"] = {
      revision: exercises[9].revision,
      draft: { kind: "text", value: "x".repeat(10_000) },
      checked: false,
      firstStatus: null,
      latestStatus: null,
      selfAssessment: null,
    };
    const restored = restoreSession(JSON.stringify(stored), SET, exercises);
    assert.equal(restored.resetCount, 2);
    assert.deepEqual(restored.entries[1], EMPTY_ENTRY);
    assert.deepEqual(restored.entries[9], EMPTY_ENTRY);
  });

  it("un răspuns marcat verificat fără stare nu rămâne blocat", () => {
    const stored = valid();
    Object.assign(stored.entries["ion-mc-conflict-interior"], { checked: true, firstStatus: null, latestStatus: null });
    const entry = restoreSession(JSON.stringify(stored), SET, exercises).entries[1];
    assert.equal(entry.checked, false);
    assert.deepEqual(entry.draft, choice("c"));
  });

  it("o poziție în afara listei revine la primul exercițiu", () => {
    for (const index of [-1, 12, 3.5, "2"]) {
      assert.equal(restoreSession(JSON.stringify({ ...valid(), index }), SET, exercises).index, 0);
    }
  });
});

describe("revizia exercițiilor", () => {
  const original = ionExercises.exercises[0];
  it("e stabilă și se schimbă când se schimbă răspunsul sau textul", () => {
    assert.equal(exerciseRevision(original), exerciseRevision(structuredClone(original)));
    assert.notEqual(exerciseRevision(original), exerciseRevision({ ...original, correctOptionId: "b" }));
    assert.notEqual(exerciseRevision(original), exerciseRevision({ ...original, prompt: `${original.prompt} ` }));
  });
  it("toate exercițiile au revizii diferite", () => {
    assert.equal(new Set(exercises.map((exercise) => exercise.revision)).size, exercises.length);
  });
});

describe("stocarea locală", () => {
  const KEY = sessionStorageKey(SET);

  it("scrie, citește și șterge progresul (sesiune nouă)", () => {
    const storage = memoryStorage();
    const store = createSessionStore(() => storage, KEY);
    assert.equal(store.getStatus(), "ok");
    store.write(serializeSession(SET, exercises, sessionWithCorrection()));
    assert.equal(restoreSession(store.read(), SET, exercises).entries[0].firstStatus, "incorrect");
    store.clear();
    assert.equal(store.read(), null);
    assert.equal(restoreSession(store.read(), SET, exercises).outcome, "empty");
    assert.deepEqual([...storage.data.keys()], []);
  });

  it("fără localStorage (acces blocat): exercițiile merg, progresul nu se salvează", () => {
    const store = createSessionStore(() => {
      throw new Error("SecurityError");
    }, KEY);
    assert.equal(store.getStatus(), "unavailable");
    store.write("{}");
    store.clear();
    assert.equal(store.read(), null);
    assert.equal(store.getStatus(), "unavailable");
  });

  it("localStorage care refuză scrierea de la început este considerat indisponibil", () => {
    const store = createSessionStore(() => memoryStorage({ failWrites: true }), KEY);
    assert.equal(store.getStatus(), "unavailable");
  });

  it("o scriere eșuată ulterior este raportată, iar o scriere reușită revine la normal", () => {
    const storage = memoryStorage();
    const store = createSessionStore(() => storage, KEY);
    let notified = 0;
    store.subscribe(() => notified++);
    storage.failWrites = true;
    store.write("{}");
    assert.equal(store.getStatus(), "failed");
    storage.failWrites = false;
    store.write("{}");
    assert.equal(store.getStatus(), "ok");
    assert.equal(notified, 2);
  });
});
