const TOTAL_QUESTIONS = 100;
const EXAM_SECONDS = 45 * 60;
const PASS_SCORE = 90;

const questions = [
  {
    type: "单项选择题",
    text: "驾驶机动车在道路上违反道路交通安全法律、法规的行为，属于什么行为？",
    options: ["违章行为", "违法行为", "过失行为", "违规行为"],
    answer: 1,
    explanation: "道路交通安全法律、法规明确约束驾驶行为，违反后属于违法行为。"
  },
  {
    type: "判断题",
    text: "驾驶机动车上道路行驶，应当悬挂机动车号牌，放置检验合格标志、保险标志，并随车携带机动车行驶证。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "号牌、检验合格标志、保险标志和行驶证都是上道路行驶的基础要求。"
  },
  {
    type: "单项选择题",
    text: "这个标志表示前方道路有什么情况？",
    media: "speedLimit",
    options: ["限制最高时速为40公里", "限制最低时速为40公里", "解除40公里限速", "建议时速40公里"],
    answer: 0,
    explanation: "红圈白底黑字的数字标志表示限制最高速度。"
  },
  {
    type: "单项选择题",
    text: "驾驶机动车遇到前方人行横道有行人正在通过时，应当怎样做？",
    options: ["加速从行人前方通过", "鸣喇叭催促行人", "停车让行", "从行人后方绕行"],
    answer: 2,
    explanation: "行人正在通过人行横道时，机动车应停车让行。"
  },
  {
    type: "判断题",
    text: "驾驶机动车通过铁路道口时，应按照交通信号或者管理人员指挥通行。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "铁路道口风险高，应严格按信号或管理人员指挥通行。"
  },
  {
    type: "单项选择题",
    text: "这个交通标线区域通常提示驾驶人注意什么？",
    media: "crosswalk",
    options: ["注意前方施工", "注意行人横过道路", "注意前方会车", "注意路面低洼"],
    answer: 1,
    explanation: "斑马线用于提示车辆注意人行横道和行人通行。"
  },
  {
    type: "判断题",
    text: "机动车驾驶证被暂扣期间驾驶机动车的，一次记6分。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "这类题目要注意关键词：驾驶证暂扣期间不得驾驶机动车。"
  },
  {
    type: "单项选择题",
    text: "驾驶机动车在高速公路上发生故障，无法正常行驶时，警告标志应设置在车后多少米以外？",
    options: ["50米", "100米", "150米", "30米"],
    answer: 2,
    explanation: "高速公路车速快，警告标志应在来车方向150米以外设置。"
  },
  {
    type: "单项选择题",
    text: "这个标志的含义是什么？",
    media: "noEntry",
    options: ["禁止通行", "禁止停车", "禁止驶入", "禁止掉头"],
    answer: 2,
    explanation: "红底白横杠标志表示禁止车辆驶入。"
  },
  {
    type: "判断题",
    text: "驾驶机动车在没有中心线的道路上会车时，应当减速靠右行驶，并与其他车辆、行人保持必要的安全距离。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "窄路或无中心线道路会车，要减速靠右并留出安全距离。"
  },
  {
    type: "单项选择题",
    text: "夜间驾驶机动车在窄路、窄桥与非机动车会车时，应使用什么灯光？",
    options: ["远光灯", "近光灯", "危险报警闪光灯", "示廓灯"],
    answer: 1,
    explanation: "夜间会车应改用近光灯，避免强光影响对向交通参与者。"
  },
  {
    type: "判断题",
    text: "驾驶机动车拨打、接听手持电话的行为会影响安全驾驶。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "手持电话会分散注意力，也属于考试常见安全文明驾驶考点。"
  },
  {
    type: "单项选择题",
    text: "驾驶机动车通过没有交通信号灯控制也没有交通警察指挥的交叉路口时，应当怎样通行？",
    options: ["让右方道路来车先行", "大型车先行", "速度快的车辆先行", "左方道路来车先行"],
    answer: 0,
    explanation: "无信号、无交警的交叉路口，一般让右方道路来车先行。"
  },
  {
    type: "单项选择题",
    text: "这个标志提示驾驶人前方是什么路段？",
    media: "school",
    options: ["注意儿童", "注意牲畜", "注意行人", "注意落石"],
    answer: 0,
    explanation: "黄色三角形内有儿童图案，提示注意儿童。"
  },
  {
    type: "判断题",
    text: "饮酒后驾驶机动车的，可能被暂扣机动车驾驶证并处罚款。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "饮酒驾驶属于严重违法行为，处罚包含暂扣驾驶证、罚款等。"
  },
  {
    type: "单项选择题",
    text: "驾驶机动车行经漫水路或者漫水桥时，应当怎样通行？",
    options: ["停车察明水情，确认安全后低速通过", "加速冲过积水区域", "保持高速稳定通过", "紧跟前车通过"],
    answer: 0,
    explanation: "涉水路段应先停车观察，确认安全后低速通过。"
  },
  {
    type: "判断题",
    text: "车辆在道路上发生故障需要停车排除时，驾驶人应当立即开启危险报警闪光灯。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "故障停车要先警示后处理，开启危险报警闪光灯是第一步。"
  },
  {
    type: "单项选择题",
    text: "驾驶机动车下陡坡时，以下哪种做法是正确的？",
    options: ["空挡滑行", "熄火滑行", "利用发动机制动控制车速", "持续猛踩加速踏板"],
    answer: 2,
    explanation: "下陡坡要利用发动机制动，严禁空挡或熄火滑行。"
  },
  {
    type: "单项选择题",
    text: "图中道路场景中，驾驶人应优先注意什么？",
    media: "trafficLight",
    options: ["观察交通信号灯和停止线", "只观察右侧车辆", "直接加速通过", "关闭转向灯"],
    answer: 0,
    explanation: "路口通行优先看信号灯、停止线和周边交通参与者。"
  },
  {
    type: "判断题",
    text: "驾驶机动车在道路上追逐竞驶，情节恶劣的，可能构成犯罪。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "危险驾驶相关考点常出现，追逐竞驶情节恶劣可能构成犯罪。"
  }
];

const els = {
  startScreen: document.getElementById("startScreen"),
  examScreen: document.getElementById("examScreen"),
  resultScreen: document.getElementById("resultScreen"),
  startBtn: document.getElementById("startBtn"),
  timeLeft: document.getElementById("timeLeft"),
  questionIndex: document.getElementById("questionIndex"),
  questionType: document.getElementById("questionType"),
  questionText: document.getElementById("questionText"),
  questionMedia: document.getElementById("questionMedia"),
  options: document.getElementById("options"),
  questionHint: document.getElementById("questionHint"),
  answeredCount: document.getElementById("answeredCount"),
  unansweredCount: document.getElementById("unansweredCount"),
  wrongCount: document.getElementById("wrongCount"),
  scoreCount: document.getElementById("scoreCount"),
  answerSheet: document.getElementById("answerSheet"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  confirmBtn: document.getElementById("confirmBtn"),
  submitBtn: document.getElementById("submitBtn"),
  modalBackdrop: document.getElementById("modalBackdrop"),
  modalMessage: document.getElementById("modalMessage"),
  cancelSubmitBtn: document.getElementById("cancelSubmitBtn"),
  confirmSubmitBtn: document.getElementById("confirmSubmitBtn"),
  resultScore: document.getElementById("resultScore"),
  resultStatus: document.getElementById("resultStatus"),
  resultCorrect: document.getElementById("resultCorrect"),
  resultWrong: document.getElementById("resultWrong"),
  resultUnanswered: document.getElementById("resultUnanswered"),
  resultTime: document.getElementById("resultTime"),
  reviewBtn: document.getElementById("reviewBtn"),
  restartBtn: document.getElementById("restartBtn")
};

const state = {
  current: 0,
  answers: Array(TOTAL_QUESTIONS).fill(null),
  locked: Array(TOTAL_QUESTIONS).fill(false),
  wrong: Array(TOTAL_QUESTIONS).fill(false),
  secondsLeft: EXAM_SECONDS,
  timerId: null,
  startedAt: null,
  reviewed: false
};

function getQuestion(index) {
  return questions[index % questions.length];
}

function pad(num, size = 2) {
  return String(num).padStart(size, "0");
}

function formatTime(seconds) {
  const minute = Math.floor(seconds / 60);
  const second = seconds % 60;
  return `${pad(minute)}:${pad(second)}`;
}

function createMedia(name) {
  const media = {
    speedLimit: `
      <svg viewBox="0 0 360 210" role="img" aria-label="限速40标志">
        <rect width="360" height="210" fill="#d9edf7"/>
        <rect y="145" width="360" height="65" fill="#5a6671"/>
        <path d="M0 177 H360" stroke="#fff" stroke-width="10" stroke-dasharray="30 24"/>
        <circle cx="180" cy="82" r="58" fill="#fff" stroke="#d51d1d" stroke-width="13"/>
        <text x="180" y="102" text-anchor="middle" font-family="Arial" font-size="62" font-weight="700">40</text>
      </svg>`,
    crosswalk: `
      <svg viewBox="0 0 360 210" role="img" aria-label="人行横道场景">
        <rect width="360" height="210" fill="#b9d7ea"/>
        <rect y="82" width="360" height="128" fill="#606a73"/>
        <g fill="#fff">
          <rect x="72" y="94" width="28" height="104"/>
          <rect x="118" y="94" width="28" height="104"/>
          <rect x="164" y="94" width="28" height="104"/>
          <rect x="210" y="94" width="28" height="104"/>
          <rect x="256" y="94" width="28" height="104"/>
        </g>
        <circle cx="53" cy="58" r="16" fill="#1f66b2"/>
        <path d="M53 77 L40 117 M53 77 L68 117 M45 94 H66" stroke="#1f66b2" stroke-width="9" stroke-linecap="round"/>
      </svg>`,
    noEntry: `
      <svg viewBox="0 0 360 210" role="img" aria-label="禁止驶入标志">
        <rect width="360" height="210" fill="#eef3f8"/>
        <rect y="145" width="360" height="65" fill="#5d6770"/>
        <circle cx="180" cy="83" r="58" fill="#df2a2a"/>
        <rect x="128" y="69" width="104" height="28" rx="3" fill="#fff"/>
      </svg>`,
    school: `
      <svg viewBox="0 0 360 210" role="img" aria-label="注意儿童标志">
        <rect width="360" height="210" fill="#d7edf8"/>
        <polygon points="180,22 286,176 74,176" fill="#ffd64d" stroke="#1b1b1b" stroke-width="8"/>
        <circle cx="160" cy="82" r="13" fill="#1b1b1b"/>
        <circle cx="205" cy="75" r="12" fill="#1b1b1b"/>
        <path d="M160 99 L141 139 M160 99 L182 137 M203 91 L184 133 M203 91 L223 132 M151 112 H209" stroke="#1b1b1b" stroke-width="9" stroke-linecap="round"/>
      </svg>`,
    trafficLight: `
      <svg viewBox="0 0 360 210" role="img" aria-label="路口信号灯场景">
        <rect width="360" height="210" fill="#cbe3f4"/>
        <rect y="116" width="360" height="94" fill="#59636d"/>
        <rect x="165" y="116" width="30" height="94" fill="#45505a"/>
        <path d="M0 163 H360" stroke="#fff" stroke-width="8" stroke-dasharray="28 22"/>
        <rect x="254" y="22" width="34" height="86" rx="8" fill="#26313c"/>
        <circle cx="271" cy="43" r="11" fill="#b82020"/>
        <circle cx="271" cy="66" r="11" fill="#6b6f2b"/>
        <circle cx="271" cy="89" r="11" fill="#186f34"/>
        <rect x="268" y="108" width="6" height="62" fill="#26313c"/>
      </svg>`
  };
  return media[name] || "";
}

function startExam() {
  state.current = 0;
  state.answers = Array(TOTAL_QUESTIONS).fill(null);
  state.locked = Array(TOTAL_QUESTIONS).fill(false);
  state.wrong = Array(TOTAL_QUESTIONS).fill(false);
  state.secondsLeft = EXAM_SECONDS;
  state.startedAt = Date.now();
  state.reviewed = false;
  clearInterval(state.timerId);
  state.timerId = setInterval(tick, 1000);

  els.startScreen.classList.add("hidden");
  els.resultScreen.classList.add("hidden");
  els.examScreen.classList.remove("hidden");
  renderAnswerSheet();
  renderQuestion();
}

function tick() {
  state.secondsLeft -= 1;
  els.timeLeft.textContent = formatTime(state.secondsLeft);
  if (state.secondsLeft <= 0) {
    finishExam();
  }
}

function renderQuestion() {
  const question = getQuestion(state.current);
  const answer = state.answers[state.current];
  const isLocked = state.locked[state.current] || state.reviewed;

  els.questionIndex.textContent = `第 ${pad(state.current + 1, 3)} / ${TOTAL_QUESTIONS} 题`;
  els.questionType.textContent = question.type;
  els.questionText.textContent = question.text;
  els.options.innerHTML = "";

  if (question.media) {
    els.questionMedia.innerHTML = createMedia(question.media);
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
    input.disabled = isLocked;
    input.addEventListener("change", () => selectAnswer(index));
    const text = document.createElement("span");
    text.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    label.append(input, text);

    if (isLocked && index === question.answer) label.classList.add("correct");
    if (isLocked && answer === index && answer !== question.answer) label.classList.add("incorrect");
    els.options.appendChild(label);
  });

  if (state.reviewed) {
    els.questionHint.textContent = `本题答案：${String.fromCharCode(65 + question.answer)}。${question.explanation}`;
  } else if (state.locked[state.current]) {
    els.questionHint.textContent = state.wrong[state.current]
      ? `本题答错。${question.explanation}`
      : `本题答对。${question.explanation}`;
  } else {
    els.questionHint.textContent = answer === null ? "请选择答案。" : "已选择答案，确认本题后进入下一题。";
  }

  els.prevBtn.disabled = state.current === 0;
  els.nextBtn.disabled = state.current === TOTAL_QUESTIONS - 1;
  els.confirmBtn.disabled = state.reviewed || state.locked[state.current] || answer === null;
  renderStats();
  renderAnswerSheet();
}

function selectAnswer(index) {
  if (state.locked[state.current] || state.reviewed) return;
  state.answers[state.current] = index;
  renderQuestion();
}

function confirmQuestion() {
  if (state.answers[state.current] === null || state.locked[state.current]) return;
  const question = getQuestion(state.current);
  state.locked[state.current] = true;
  state.wrong[state.current] = state.answers[state.current] !== question.answer;
  if (countWrong() >= 11) {
    showSubmitModal("已累计错误 11 题，按正式考试规则将无法达到 90 分。是否结束本次模拟？");
    return;
  }
  if (state.current < TOTAL_QUESTIONS - 1) {
    state.current += 1;
  }
  renderQuestion();
}

function moveQuestion(step) {
  const next = state.current + step;
  if (next < 0 || next >= TOTAL_QUESTIONS) return;
  state.current = next;
  renderQuestion();
}

function renderStats() {
  const answered = state.answers.filter(answer => answer !== null).length;
  const wrong = countWrong();
  const score = Math.max(0, answered - wrong);
  els.answeredCount.textContent = answered;
  els.unansweredCount.textContent = TOTAL_QUESTIONS - answered;
  els.wrongCount.textContent = wrong;
  els.scoreCount.textContent = score;
  els.timeLeft.textContent = formatTime(state.secondsLeft);
}

function countWrong() {
  return state.wrong.filter(Boolean).length;
}

function renderAnswerSheet() {
  els.answerSheet.innerHTML = "";
  for (let i = 0; i < TOTAL_QUESTIONS; i += 1) {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "sheet-cell";
    cell.textContent = pad(i + 1);
    if (state.answers[i] !== null) cell.classList.add("answered");
    if (state.wrong[i]) cell.classList.add("wrong");
    if (i === state.current) cell.classList.add("current");
    cell.addEventListener("click", () => {
      state.current = i;
      renderQuestion();
    });
    els.answerSheet.appendChild(cell);
  }
}

function showSubmitModal(message) {
  const unanswered = state.answers.filter(answer => answer === null).length;
  els.modalMessage.textContent = message || `还有 ${unanswered} 题未作答，确认交卷后将结束考试。`;
  els.modalBackdrop.classList.remove("hidden");
}

function closeSubmitModal() {
  els.modalBackdrop.classList.add("hidden");
}

function finishExam() {
  clearInterval(state.timerId);
  state.locked = state.locked.map((locked, index) => locked || state.answers[index] !== null);
  for (let i = 0; i < TOTAL_QUESTIONS; i += 1) {
    if (state.answers[i] !== null) {
      state.wrong[i] = state.answers[i] !== getQuestion(i).answer;
    }
  }

  const answered = state.answers.filter(answer => answer !== null).length;
  const wrong = countWrong();
  const correct = answered - wrong;
  const score = correct;
  const elapsed = EXAM_SECONDS - state.secondsLeft;
  const passed = score >= PASS_SCORE;

  els.examScreen.classList.add("hidden");
  els.resultScreen.classList.remove("hidden");
  els.resultScore.textContent = `${score} 分`;
  els.resultStatus.textContent = passed ? "合格" : "未合格";
  els.resultStatus.classList.toggle("pass", passed);
  els.resultCorrect.textContent = correct;
  els.resultWrong.textContent = wrong;
  els.resultUnanswered.textContent = TOTAL_QUESTIONS - answered;
  els.resultTime.textContent = formatTime(elapsed);
  closeSubmitModal();
}

function reviewAnswers() {
  state.reviewed = true;
  state.current = 0;
  els.resultScreen.classList.add("hidden");
  els.examScreen.classList.remove("hidden");
  renderQuestion();
}

els.startBtn.addEventListener("click", startExam);
els.prevBtn.addEventListener("click", () => moveQuestion(-1));
els.nextBtn.addEventListener("click", () => moveQuestion(1));
els.confirmBtn.addEventListener("click", confirmQuestion);
els.submitBtn.addEventListener("click", () => showSubmitModal());
els.cancelSubmitBtn.addEventListener("click", closeSubmitModal);
els.confirmSubmitBtn.addEventListener("click", finishExam);
els.reviewBtn.addEventListener("click", reviewAnswers);
els.restartBtn.addEventListener("click", startExam);

document.addEventListener("keydown", event => {
  if (els.examScreen.classList.contains("hidden")) return;
  const question = getQuestion(state.current);
  const key = event.key.toUpperCase();
  const optionIndex = key.charCodeAt(0) - 65;
  if (optionIndex >= 0 && optionIndex < question.options.length) {
    selectAnswer(optionIndex);
  }
  if (event.key === "ArrowLeft") moveQuestion(-1);
  if (event.key === "ArrowRight") moveQuestion(1);
  if (event.key === "Enter") confirmQuestion();
});
