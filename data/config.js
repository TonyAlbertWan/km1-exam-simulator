(function () {
  window.KM1 = window.KM1 || {};

  window.KM1.config = {
    projectUrl: "https://github.com/TonyAlbertWan/km1-exam-simulator",
    demoUrl: "https://tonyalbertwan.github.io/km1-exam-simulator/",
    totalQuestions: 100,
    passScore: 90,
    wrongStopThreshold: 11,
    defaultCandidate: {
      name: "模拟考生",
      id: "**************1234",
      examId: "KM1-0001",
      vehicle: "C1 / C2",
      session: "上午第一场",
      seat: "第01考台"
    },
    modes: {
      exam: {
        id: "exam",
        name: "全真彩排",
        label: "100题 / 45分钟 / 90分合格",
        description: "模拟正式机考节奏，确认后不显示即时解析，交卷后再回看。",
        totalQuestions: 100,
        durationSeconds: 45 * 60,
        passScore: 90,
        immediateFeedback: false,
        scored: true,
        tour: false
      },
      quick: {
        id: "quick",
        name: "快速熟悉",
        label: "20题 / 10分钟 / 即时解析",
        description: "适合第一次摸界面，确认本题后立即看到答案和解释。",
        totalQuestions: 20,
        durationSeconds: 10 * 60,
        passScore: 18,
        immediateFeedback: true,
        scored: true,
        tour: false
      },
      tour: {
        id: "tour",
        name: "界面导览",
        label: "5步说明 / 不计分",
        description: "高亮考场系统的主要区域，先知道考试时该看哪里、点哪里。",
        totalQuestions: 5,
        durationSeconds: 0,
        passScore: 0,
        immediateFeedback: true,
        scored: false,
        tour: true
      }
    },
    tourSteps: [
      {
        target: ".left-panel",
        title: "考生信息区",
        body: "正式考试前先核对姓名、证件号、准驾车型和考台信息。"
      },
      {
        target: ".timer-block",
        title: "剩余时间",
        body: "全真彩排为45分钟。剩余5分钟会变橙色，最后1分钟变红色。"
      },
      {
        target: ".question-panel",
        title: "题目和选项",
        body: "点击选项或按 A/B/C/D 作答，再点确认本题进入下一步。"
      },
      {
        target: ".right-panel",
        title: "答题卡",
        body: "题号颜色会显示未答、已确认、当前题和错题状态，也可以直接跳题。"
      },
      {
        target: "#submitBtn",
        title: "交卷确认",
        body: "提前交卷会弹出确认窗口；时间到会自动交卷并生成彩排报告。"
      }
    ]
  };
})();
