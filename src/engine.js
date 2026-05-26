(function () {
  window.KM1 = window.KM1 || {};

  function pad(num, size) {
    return String(num).padStart(size || 2, "0");
  }

  function formatTime(seconds) {
    const safeSeconds = Math.max(0, seconds);
    const minute = Math.floor(safeSeconds / 60);
    const second = safeSeconds % 60;
    return `${pad(minute)}:${pad(second)}`;
  }

  function normalizeQuestion(baseQuestion, index) {
    return {
      id: `${baseQuestion.id}-${pad(index + 1, 3)}`,
      sourceId: baseQuestion.id,
      type: baseQuestion.type,
      category: baseQuestion.category || "综合",
      difficulty: baseQuestion.difficulty || "easy",
      text: baseQuestion.text,
      options: baseQuestion.options.slice(),
      answer: baseQuestion.answer,
      explanation: baseQuestion.explanation || "",
      media: baseQuestion.media || null
    };
  }

  function buildPaper(questionBank, totalQuestions) {
    const paper = [];
    for (let index = 0; index < totalQuestions; index += 1) {
      paper.push(normalizeQuestion(questionBank[index % questionBank.length], index));
    }
    return paper;
  }

  function createSession(mode, questionBank, config) {
    const paper = buildPaper(questionBank, mode.totalQuestions);
    return {
      mode,
      candidate: config.defaultCandidate,
      current: 0,
      questions: paper,
      answers: Array(paper.length).fill(null),
      confirmed: Array(paper.length).fill(false),
      wrong: Array(paper.length).fill(false),
      secondsLeft: mode.durationSeconds,
      startedAt: null,
      finishedAt: null,
      reviewed: false,
      tourStep: 0
    };
  }

  function getCurrentQuestion(session) {
    return session.questions[session.current];
  }

  function selectAnswer(session, answerIndex) {
    if (session.reviewed || session.confirmed[session.current]) return session;
    session.answers[session.current] = answerIndex;
    return session;
  }

  function confirmCurrent(session) {
    if (session.answers[session.current] === null || session.confirmed[session.current]) {
      return { session, confirmed: false };
    }
    const question = getCurrentQuestion(session);
    session.confirmed[session.current] = true;
    session.wrong[session.current] = session.answers[session.current] !== question.answer;
    return { session, confirmed: true };
  }

  function move(session, step) {
    const next = session.current + step;
    if (next >= 0 && next < session.questions.length) {
      session.current = next;
    }
    return session;
  }

  function goTo(session, index) {
    if (index >= 0 && index < session.questions.length) {
      session.current = index;
    }
    return session;
  }

  function tick(session) {
    if (!session.mode.scored || session.secondsLeft <= 0) return session;
    session.secondsLeft -= 1;
    return session;
  }

  function computeStats(session) {
    const answered = session.answers.filter(answer => answer !== null).length;
    const confirmed = session.confirmed.filter(Boolean).length;
    const wrong = session.wrong.filter(Boolean).length;
    const correct = confirmed - wrong;
    const unanswered = session.questions.length - answered;
    const score = session.mode.scored ? Math.max(0, correct) : 0;
    const elapsed = session.mode.durationSeconds ? session.mode.durationSeconds - session.secondsLeft : 0;
    return {
      answered,
      confirmed,
      wrong,
      correct,
      unanswered,
      score,
      elapsed,
      passed: session.mode.scored ? score >= session.mode.passScore : false
    };
  }

  function finish(session) {
    session.finishedAt = Date.now();
    session.confirmed = session.confirmed.map((confirmed, index) => confirmed || session.answers[index] !== null);
    session.questions.forEach((question, index) => {
      if (session.answers[index] !== null) {
        session.wrong[index] = session.answers[index] !== question.answer;
      }
    });
    return session;
  }

  function getWeakCategories(session) {
    const counts = {};
    session.questions.forEach((question, index) => {
      if (!session.wrong[index]) return;
      counts[question.category] = (counts[question.category] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([category, count]) => ({ category, count }));
  }

  function getReviewRows(session, onlyWrong) {
    return session.questions
      .map((question, index) => ({
        index,
        question,
        userAnswer: session.answers[index],
        confirmed: session.confirmed[index],
        wrong: session.wrong[index]
      }))
      .filter(row => !onlyWrong || row.wrong);
  }

  window.KM1.engine = {
    createSession,
    getCurrentQuestion,
    selectAnswer,
    confirmCurrent,
    move,
    goTo,
    tick,
    finish,
    computeStats,
    getWeakCategories,
    getReviewRows,
    formatTime,
    pad
  };
})();
