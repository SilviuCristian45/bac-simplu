// Run with: npm run test:exercises
// Session scoring: the first checked answer counts, later corrections are reported separately.
import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { correctedLater, countSession, scoredStatus } from "./summary.ts";

describe("scoredStatus / correctedLater", () => {
  it("numără primul răspuns verificat, nu ultimul", () => {
    const record = { first: "incorrect", latest: "correct" };
    assert.equal(scoredStatus(record), "incorrect");
    assert.ok(correctedLater(record));
  });
  it("un exercițiu neverificat rămâne fără răspuns", () => {
    assert.equal(scoredStatus({ first: null, latest: null }), "unanswered");
    assert.ok(!correctedLater({ first: null, latest: null }));
  });
  it("un răspuns corect de la început nu este „corectat ulterior”", () => {
    assert.ok(!correctedLater({ first: "correct", latest: "correct" }));
  });
  it("un răspuns nerecunoscut, corectat apoi, este semnalat", () => {
    assert.ok(correctedLater({ first: "not-recognized", latest: "correct" }));
  });
});

describe("countSession", () => {
  it("calculează scorul după primele răspunsuri", () => {
    const counts = countSession([
      { first: "correct", latest: "correct" },
      { first: "incorrect", latest: "correct" },
      { first: "incorrect", latest: null },
      { first: "not-recognized", latest: "not-recognized" },
      { first: "self-assessment", latest: "self-assessment" },
      { first: null, latest: null },
    ]);
    assert.deepEqual(counts, {
      correct: 1,
      incorrect: 2,
      notRecognized: 1,
      selfAssessed: 1,
      unanswered: 1,
      autoGraded: 4,
      correctedLater: 1,
    });
  });
});
