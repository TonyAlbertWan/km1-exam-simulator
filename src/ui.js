(function () {
  window.KM1 = window.KM1 || {};

  const els = {};
  const state = {
    session: null,
    selectedMode: null,
    timerId: null,
    showOnlyWrong: false
  };

  function $(id) {
    return document.getElementById(id);
  }

  function collectElements() {
    [
      "modeScreen", "verifyScreen", "examScreen", "resultScreen", "modalBackdrop",
      "modeCards", "verifyTitle", "verifyRules", "verifyStartBtn", "backToModesBtn",
      "modeBadge", "timeLeft", "questionIndex", "questionType", "questionText",
      "questionMedia", "options", "questionHint", "answeredCount", "unansweredCount",
      "wrongCount", "scoreCount", "answerSheet", "prevBtn", "nextBtn", "confirmBtn",
      "submitBtn", "modalTitle", "modalMessage", "cancelSubmitBtn", "confirmSubmitBtn",
      "resultScore", "resultStatus", "resultCorrect", "resultWrong", "resultUnanswered",
      "resultTime", "weakList", "reviewList", "reviewBtn", "wrongReviewBtn",
      "restartBtn", "copyLinkBtn", "tourOverlay", "tourTitle", "tourBody",
      "tourStepText", "tourPrevBtn", "tourNextBtn", "tourEndBtn"
    ].forEach(id => {
      els[id] = $(id);
    });
  }

  function showScreen(name) {
    ["modeScreen", "verifyScreen", "examScreen", "resultScreen"].forEach(id => {
      els[id].classList.toggle("hidden", id !== name);
    });
  }

  function modeList() {
    return Object.values(window.KM1.config.modes);
  }

  function renderModeCards() {
    els.modeCards.innerHTML = "";
    modeList().forEach(mode => {
      const card = document.createElement("button");
      card.className = "mode-card";
      card.type = "button";
      card.innerHTML = `
        <span class="mode-card-kicker">${mode.tour ? "操作演示" : "考前彩排"}</span>
        <strong>${mode.name}</strong>
        <span>${mode.label}</span>
        <em>${mode.description}</em>
      `;
      card.addEventListener("click", () => openVerify(mode.id));
      els.modeCards.appendChild(card);
    });
  }

  function openVerify(modeId) {
    const mode = window.KM1.config.modes[modeId];
    state.selectedMode = mode;
    els.verifyTitle.textContent = `${mode.name}确认`;
    els.verifyRules.innerHTML = mode.tour
      ? `
        <li>本模式只讲解界面，不计分、不生成正式成绩。</li>
        <li>跟随高亮提示认识考生信息、倒计时、答题区、答题卡和交卷。</li>
        <li>导览结束后可以切换到全真彩排或快速熟悉。</li>
      `
      : `
        <li>${mode.label}，默认车型为 C1/C2 小型汽车。</li>
        <li>${mode.immediateFeedback ? "确认本题后会立即显示解析。" : "确认本题后不显示解析，交卷后再统一回看。"}</li>
        <li>可用 A/B/C/D 选择答案，方向键切题，Enter 确认本题。</li>
      `;
    showScreen("verifyScreen");
  }

  function startSelectedMode() {
    state.session = window.KM1.engine.createSession(
      state.selectedMode,
      window.KM1.questions,
      window.KM1.config
    );
    state.session.startedAt = Date.now();
    state.showOnlyWrong = false;
    clearInterval(state.timerId);
    if (!state.session.mode.tour && state.session.mode.durationSeconds) {
      state.timerId = setInterval(handleTick, 1000);
    }
    showScreen("examScreen");
    renderQuestion();
    if (state.session.mode.tour) {
      showTourStep(0);
    } else {
      hideTour();
    }
  }

  function handleTick() {
    window.KM1.engine.tick(state.session);
    renderStats();
    if (state.session.secondsLeft <= 0) {
      finishExam();
    }
  }

  function currentQuestion() {
    return window.KM1.engine.getCurrentQuestion(state.session);
  }

  function renderQuestion() {
    const session = state.session;
    const question = currentQuestion();
    const answer = session.answers[session.current];
    const isLocked = session.confirmed[session.current] || session.reviewed;
    const showFeedback = session.reviewed || (session.confirmed[session.current] && session.mode.immediateFeedback);

    els.modeBadge.textContent = session.mode.name;
    els.questionIndex.textContent = `第 ${window.KM1.engine.pad(session.current + 1, 3)} / ${session.questions.length} 题`;
    els.questionType.textContent = question.type === "judge" ? "判断题" : "单项选择题";
    els.questionText.textContent = question.text;
    els.options.innerHTML = "";

    if (question.media && window.KM1.media[question.media]) {
      els.questionMedia.innerHTML = window.KM1.media[question.media];
      els.questionMedia.classList.remove("hidden");
    } else {
      els.questionMedia.innerHTML = "";
      els.questionMedia.classList.add("hidden");
    }

    question.options.forEach((option, index) => {
      const label = document.createElement("label");
      label.className = "option";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = index;
      input.checked = answer === index;
      input.disabled = isLocked || session.mode.tour;
      input.addEventListener("change", () => {
        window.KM1.engine.selectAnswer(session, index);
        renderQuestion();
      });
      const text = document.createElement("span");
      text.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
      label.append(input, text);
      if (showFeedback && index === question.answer) label.classList.add("correct");
      if (showFeedback && answer === index && answer !== question.answer) label.classList.add("incorrect");
      els.options.appendChild(label);
    });

    els.questionHint.textContent = getQuestionHint(question, answer, showFeedback);
    els.prevBtn.disabled = session.current === 0;
    els.nextBtn.disabled = session.current === session.questions.length - 1;
    els.confirmBtn.disabled = session.mode.tour || session.reviewed || session.confirmed[session.current] || answer === null;
    renderStats();
    renderAnswerSheet();
  }

  function getQuestionHint(question, answer, showFeedback) {
    const session = state.session;
    if (session.mode.tour) return "界面导览中：跟随高亮提示熟悉操作区域。";
    if (showFeedback) {
      return `本题答案：${String.fromCharCode(65 + question.answer)}。${question.explanation}`;
    }
    if (session.confirmed[session.current] && !session.mode.immediateFeedback) {
      return "本题已确认。全真彩排会在交卷后统一显示答案和解析。";
    }
    return answer === null ? "请选择答案。" : "已选择答案，确认本题后进入下一步。";
  }

  function renderStats() {
    const stats = window.KM1.engine.computeStats(state.session);
    els.answeredCount.textContent = stats.confirmed;
    els.unansweredCount.textContent = state.session.questions.length - stats.answered;
    els.wrongCount.textContent = state.session.mode.immediateFeedback || state.session.reviewed ? stats.wrong : "-";
    els.scoreCount.textContent = state.session.mode.scored ? stats.score : "-";
    els.timeLeft.textContent = state.session.mode.durationSeconds ? window.KM1.engine.formatTime(state.session.secondsLeft) : "--:--";
    els.timeLeft.classList.toggle("time-warning", state.session.secondsLeft <= 300 && state.session.secondsLeft > 60);
    els.timeLeft.classList.toggle("time-danger", state.session.secondsLeft <= 60 && state.session.mode.durationSeconds > 0);
  }

  function renderAnswerSheet() {
    els.answerSheet.innerHTML = "";
    state.session.questions.forEach((question, index) => {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "sheet-cell";
      cell.textContent = window.KM1.engine.pad(index + 1);
      if (state.session.answers[index] !== null) cell.classList.add("answered");
      if (state.session.confirmed[index]) cell.classList.add("confirmed");
      if ((state.session.mode.immediateFeedback || state.session.reviewed) && state.session.wrong[index]) cell.classList.add("wrong");
      if (index === state.session.current) cell.classList.add("current");
      cell.addEventListener("click", () => {
        window.KM1.engine.goTo(state.session, index);
        renderQuestion();
      });
      els.answerSheet.appendChild(cell);
    });
  }

  function confirmQuestion() {
    const result = window.KM1.engine.confirmCurrent(state.session);
    if (!result.confirmed) return;
    const stats = window.KM1.engine.computeStats(state.session);
    if (state.session.mode.scored && stats.wrong >= window.KM1.config.wrongStopThreshold) {
      showSubmitModal("已累计错误 11 题，按90分合格规则将无法通过。本次彩排是否现在结束？");
      renderQuestion();
      return;
    }
    if (state.session.mode.immediateFeedback) {
      renderQuestion();
      return;
    }
    if (state.session.current < state.session.questions.length - 1) {
      window.KM1.engine.move(state.session, 1);
    }
    renderQuestion();
  }

  function moveQuestion(step) {
    window.KM1.engine.move(state.session, step);
    renderQuestion();
  }

  function showSubmitModal(message) {
    const stats = window.KM1.engine.computeStats(state.session);
    els.modalTitle.textContent = "确认交卷";
    els.modalMessage.textContent = message || `还有 ${stats.unanswered} 题未作答，确认交卷后将结束本次彩排。`;
    els.modalBackdrop.classList.remove("hidden");
  }

  function closeSubmitModal() {
    els.modalBackdrop.classList.add("hidden");
  }

  function finishExam() {
    clearInterval(state.timerId);
    window.KM1.engine.finish(state.session);
    state.session.reviewed = true;
    closeSubmitModal();
    renderResult();
    showScreen("resultScreen");
    hideTour();
  }

  function renderResult() {
    const stats = window.KM1.engine.computeStats(state.session);
    const weakCategories = window.KM1.engine.getWeakCategories(state.session);
    els.resultScore.textContent = state.session.mode.scored ? `${stats.score} 分` : "导览完成";
    els.resultStatus.textContent = state.session.mode.scored ? (stats.passed ? "合格" : "未合格") : "不计分";
    els.resultStatus.classList.toggle("pass", stats.passed || !state.session.mode.scored);
    els.resultCorrect.textContent = stats.correct;
    els.resultWrong.textContent = stats.wrong;
    els.resultUnanswered.textContent = stats.unanswered;
    els.resultTime.textContent = window.KM1.engine.formatTime(stats.elapsed);
    els.weakList.innerHTML = weakCategories.length
      ? weakCategories.map(item => `<span>${item.category} ${item.count}题</span>`).join("")
      : "<span>暂无明显薄弱分类</span>";
    renderReviewList();
  }

  function renderReviewList() {
    const rows = window.KM1.engine.getReviewRows(state.session, state.showOnlyWrong);
    els.reviewList.innerHTML = rows.map(row => {
      const userAnswer = row.userAnswer === null ? "未答" : String.fromCharCode(65 + row.userAnswer);
      const rightAnswer = String.fromCharCode(65 + row.question.answer);
      return `
        <article class="review-item ${row.wrong ? "review-wrong" : ""}">
          <strong>${window.KM1.engine.pad(row.index + 1)}. ${row.question.category}</strong>
          <p>${row.question.text}</p>
          <span>你的答案：${userAnswer} / 正确答案：${rightAnswer}</span>
          <em>${row.question.explanation}</em>
        </article>
      `;
    }).join("") || "<p class=\"empty-review\">没有可回看的错题。</p>";
  }

  function showTourStep(step) {
    const steps = window.KM1.config.tourSteps;
    state.session.tourStep = Math.max(0, Math.min(step, steps.length - 1));
    const current = steps[state.session.tourStep];
    document.querySelectorAll(".tour-highlight").forEach(node => node.classList.remove("tour-highlight"));
    const target = document.querySelector(current.target);
    if (target) target.classList.add("tour-highlight");
    els.tourTitle.textContent = current.title;
    els.tourBody.textContent = current.body;
    els.tourStepText.textContent = `${state.session.tourStep + 1} / ${steps.length}`;
    els.tourPrevBtn.disabled = state.session.tourStep === 0;
    els.tourNextBtn.textContent = state.session.tourStep === steps.length - 1 ? "完成导览" : "下一步";
    els.tourOverlay.classList.remove("hidden");
  }

  function hideTour() {
    document.querySelectorAll(".tour-highlight").forEach(node => node.classList.remove("tour-highlight"));
    els.tourOverlay.classList.add("hidden");
  }

  function nextTourStep() {
    const lastIndex = window.KM1.config.tourSteps.length - 1;
    if (state.session.tourStep >= lastIndex) {
      finishExam();
      return;
    }
    showTourStep(state.session.tourStep + 1);
  }

  function prevTourStep() {
    showTourStep(state.session.tourStep - 1);
  }

  function restart() {
    openVerify(state.selectedMode.id);
  }

  function copyProjectLink() {
    const text = window.KM1.config.projectUrl;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        els.copyLinkBtn.textContent = "已复制";
      }).catch(() => {
        window.prompt("复制项目链接", text);
      });
    } else {
      window.prompt("复制项目链接", text);
    }
  }

  function bindEvents() {
    els.verifyStartBtn.addEventListener("click", startSelectedMode);
    els.backToModesBtn.addEventListener("click", () => showScreen("modeScreen"));
    els.prevBtn.addEventListener("click", () => moveQuestion(-1));
    els.nextBtn.addEventListener("click", () => moveQuestion(1));
    els.confirmBtn.addEventListener("click", confirmQuestion);
    els.submitBtn.addEventListener("click", () => {
      if (state.session.mode.tour) {
        finishExam();
      } else {
        showSubmitModal();
      }
    });
    els.cancelSubmitBtn.addEventListener("click", closeSubmitModal);
    els.confirmSubmitBtn.addEventListener("click", finishExam);
    els.reviewBtn.addEventListener("click", () => {
      state.showOnlyWrong = false;
      renderReviewList();
    });
    els.wrongReviewBtn.addEventListener("click", () => {
      state.showOnlyWrong = true;
      renderReviewList();
    });
    els.restartBtn.addEventListener("click", restart);
    els.copyLinkBtn.addEventListener("click", copyProjectLink);
    els.tourPrevBtn.addEventListener("click", prevTourStep);
    els.tourNextBtn.addEventListener("click", nextTourStep);
    els.tourEndBtn.addEventListener("click", finishExam);

    document.addEventListener("keydown", event => {
      if (!state.session || els.examScreen.classList.contains("hidden") || state.session.mode.tour) return;
      const question = currentQuestion();
      const key = event.key.toUpperCase();
      const optionIndex = key.charCodeAt(0) - 65;
      if (optionIndex >= 0 && optionIndex < question.options.length) {
        window.KM1.engine.selectAnswer(state.session, optionIndex);
        renderQuestion();
      }
      if (event.key === "ArrowLeft") moveQuestion(-1);
      if (event.key === "ArrowRight") moveQuestion(1);
      if (event.key === "Enter") confirmQuestion();
    });
  }

  function init() {
    collectElements();
    renderModeCards();
    bindEvents();
    showScreen("modeScreen");
  }

  window.KM1.ui = { init };
})();
