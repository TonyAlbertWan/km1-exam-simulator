const assert = require("node:assert/strict");

global.window = { KM1: {} };

require("../src/engine.js");

const engine = global.window.KM1.engine;

const config = {
  defaultCandidate: {
    name: "测试考生"
  }
};

const examMode = {
  id: "exam",
  totalQuestions: 3,
  durationSeconds: 45 * 60,
  passScore: 2,
  scored: true
};

const tourMode = {
  id: "tour",
  totalQuestions: 2,
  durationSeconds: 0,
  passScore: 0,
  scored: false
};

const questions = [
  {
    id: "q1",
    type: "single",
    category: "法律法规",
    difficulty: "easy",
    text: "题目一",
    options: ["A", "B", "C", "D"],
    answer: 1,
    explanation: "解析一"
  },
  {
    id: "q2",
    type: "judge",
    category: "安全文明",
    difficulty: "easy",
    text: "题目二",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "解析二"
  }
];

function test(name, fn) {
  try {
    fn();
    console.log(`ok - ${name}`);
  } catch (error) {
    console.error(`not ok - ${name}`);
    throw error;
  }
}

test("creates a paper by repeating sample questions without mutating source options", () => {
  const session = engine.createSession(examMode, questions, config);
  assert.equal(session.questions.length, 3);
  assert.equal(session.questions[0].id, "q1-001");
  assert.equal(session.questions[2].sourceId, "q1");
  session.questions[0].options[0] = "changed";
  assert.equal(questions[0].options[0], "A");
});

test("selects and confirms a correct answer", () => {
  const session = engine.createSession(examMode, questions, config);
  engine.selectAnswer(session, 1);
  const result = engine.confirmCurrent(session);
  const stats = engine.computeStats(session);
  assert.equal(result.confirmed, true);
  assert.equal(session.confirmed[0], true);
  assert.equal(session.wrong[0], false);
  assert.equal(stats.score, 1);
  assert.equal(stats.correct, 1);
});

test("blocks answer changes after confirmation", () => {
  const session = engine.createSession(examMode, questions, config);
  engine.selectAnswer(session, 1);
  engine.confirmCurrent(session);
  engine.selectAnswer(session, 0);
  assert.equal(session.answers[0], 1);
});

test("computes wrong answers, weak categories, and pass state", () => {
  const session = engine.createSession(examMode, questions, config);
  engine.selectAnswer(session, 0);
  engine.confirmCurrent(session);
  engine.move(session, 1);
  engine.selectAnswer(session, 0);
  engine.confirmCurrent(session);
  const stats = engine.computeStats(session);
  const weak = engine.getWeakCategories(session);
  assert.equal(stats.confirmed, 2);
  assert.equal(stats.wrong, 1);
  assert.equal(stats.score, 1);
  assert.equal(stats.passed, false);
  assert.deepEqual(weak, [{ category: "法律法规", count: 1 }]);
});

test("finish confirms answered questions and leaves unanswered questions unconfirmed", () => {
  const session = engine.createSession(examMode, questions, config);
  engine.selectAnswer(session, 1);
  engine.move(session, 1);
  engine.selectAnswer(session, 1);
  engine.finish(session);
  assert.equal(session.confirmed[0], true);
  assert.equal(session.confirmed[1], true);
  assert.equal(session.confirmed[2], false);
  assert.equal(session.wrong[1], true);
});

test("tick changes scored sessions but not tour sessions", () => {
  const session = engine.createSession(examMode, questions, config);
  engine.tick(session);
  assert.equal(session.secondsLeft, examMode.durationSeconds - 1);

  const tour = engine.createSession(tourMode, questions, config);
  engine.tick(tour);
  assert.equal(tour.secondsLeft, 0);
});

test("formats time safely", () => {
  assert.equal(engine.formatTime(65), "01:05");
  assert.equal(engine.formatTime(-3), "00:00");
});
