(function () {
  window.KM1 = window.KM1 || {};

  window.KM1.questions = [
    {
      id: "sample-001",
      type: "single",
      category: "法律法规",
      difficulty: "easy",
      text: "驾驶机动车在道路上违反道路交通安全法律、法规的行为，属于什么行为？",
      options: ["违章行为", "违法行为", "过失行为", "违规行为"],
      answer: 1,
      explanation: "道路交通安全法律、法规明确约束驾驶行为，违反后属于违法行为。"
    },
    {
      id: "sample-002",
      type: "judge",
      category: "证件与号牌",
      difficulty: "easy",
      text: "驾驶机动车上道路行驶，应当悬挂机动车号牌，放置检验合格标志、保险标志，并随车携带机动车行驶证。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "号牌、检验合格标志、保险标志和行驶证都是上道路行驶的基础要求。"
    },
    {
      id: "sample-003",
      type: "single",
      category: "交通标志",
      difficulty: "easy",
      text: "这个标志表示前方道路有什么限制？",
      media: "speedLimit",
      options: ["限制最高时速为40公里", "限制最低时速为40公里", "解除40公里限速", "建议时速40公里"],
      answer: 0,
      explanation: "红圈白底黑字的数字标志表示限制最高速度。"
    },
    {
      id: "sample-004",
      type: "single",
      category: "安全文明",
      difficulty: "easy",
      text: "驾驶机动车遇到前方人行横道有行人正在通过时，应当怎样做？",
      options: ["加速从行人前方通过", "鸣喇叭催促行人", "停车让行", "从行人后方绕行"],
      answer: 2,
      explanation: "行人正在通过人行横道时，机动车应停车让行。"
    },
    {
      id: "sample-005",
      type: "judge",
      category: "路口通行",
      difficulty: "easy",
      text: "驾驶机动车通过铁路道口时，应按照交通信号或者管理人员指挥通行。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "铁路道口风险高，应严格按信号或管理人员指挥通行。"
    },
    {
      id: "sample-006",
      type: "single",
      category: "交通标线",
      difficulty: "easy",
      text: "这个交通标线区域通常提示驾驶人注意什么？",
      media: "crosswalk",
      options: ["注意前方施工", "注意行人横过道路", "注意前方会车", "注意路面低洼"],
      answer: 1,
      explanation: "斑马线用于提示车辆注意人行横道和行人通行。"
    },
    {
      id: "sample-007",
      type: "judge",
      category: "记分规则",
      difficulty: "medium",
      text: "机动车驾驶证被暂扣期间驾驶机动车的，一次记6分。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "这类题目要注意关键词：驾驶证暂扣期间不得驾驶机动车。"
    },
    {
      id: "sample-008",
      type: "single",
      category: "高速公路",
      difficulty: "medium",
      text: "驾驶机动车在高速公路上发生故障，无法正常行驶时，警告标志应设置在车后多少米以外？",
      options: ["50米", "100米", "150米", "30米"],
      answer: 2,
      explanation: "高速公路车速快，警告标志应在来车方向150米以外设置。"
    },
    {
      id: "sample-009",
      type: "single",
      category: "交通标志",
      difficulty: "easy",
      text: "这个标志的含义是什么？",
      media: "noEntry",
      options: ["禁止通行", "禁止停车", "禁止驶入", "禁止掉头"],
      answer: 2,
      explanation: "红底白横杠标志表示禁止车辆驶入。"
    },
    {
      id: "sample-010",
      type: "judge",
      category: "会车让行",
      difficulty: "easy",
      text: "驾驶机动车在没有中心线的道路上会车时，应当减速靠右行驶，并与其他车辆、行人保持必要的安全距离。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "窄路或无中心线道路会车，要减速靠右并留出安全距离。"
    },
    {
      id: "sample-011",
      type: "single",
      category: "灯光使用",
      difficulty: "easy",
      text: "夜间驾驶机动车在窄路、窄桥与非机动车会车时，应使用什么灯光？",
      options: ["远光灯", "近光灯", "危险报警闪光灯", "示廓灯"],
      answer: 1,
      explanation: "夜间会车应改用近光灯，避免强光影响对向交通参与者。"
    },
    {
      id: "sample-012",
      type: "judge",
      category: "安全文明",
      difficulty: "easy",
      text: "驾驶机动车拨打、接听手持电话的行为会影响安全驾驶。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "手持电话会分散注意力，也属于考试常见安全文明驾驶考点。"
    },
    {
      id: "sample-013",
      type: "single",
      category: "路口通行",
      difficulty: "medium",
      text: "驾驶机动车通过没有交通信号灯控制也没有交通警察指挥的交叉路口时，应当怎样通行？",
      options: ["让右方道路来车先行", "大型车先行", "速度快的车辆先行", "左方道路来车先行"],
      answer: 0,
      explanation: "无信号、无交警的交叉路口，一般让右方道路来车先行。"
    },
    {
      id: "sample-014",
      type: "single",
      category: "交通标志",
      difficulty: "easy",
      text: "这个标志提示驾驶人前方是什么路段？",
      media: "school",
      options: ["注意儿童", "注意牲畜", "注意行人", "注意落石"],
      answer: 0,
      explanation: "黄色三角形内有儿童图案，提示注意儿童。"
    },
    {
      id: "sample-015",
      type: "judge",
      category: "违法处罚",
      difficulty: "easy",
      text: "饮酒后驾驶机动车的，可能被暂扣机动车驾驶证并处罚款。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "饮酒驾驶属于严重违法行为，处罚包含暂扣驾驶证、罚款等。"
    },
    {
      id: "sample-016",
      type: "single",
      category: "特殊路段",
      difficulty: "medium",
      text: "驾驶机动车行经漫水路或者漫水桥时，应当怎样通行？",
      options: ["停车察明水情，确认安全后低速通过", "加速冲过积水区域", "保持高速稳定通过", "紧跟前车通过"],
      answer: 0,
      explanation: "涉水路段应先停车观察，确认安全后低速通过。"
    },
    {
      id: "sample-017",
      type: "judge",
      category: "事故处理",
      difficulty: "easy",
      text: "车辆在道路上发生故障需要停车排除时，驾驶人应当立即开启危险报警闪光灯。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "故障停车要先警示后处理，开启危险报警闪光灯是第一步。"
    },
    {
      id: "sample-018",
      type: "single",
      category: "安全驾驶",
      difficulty: "medium",
      text: "驾驶机动车下陡坡时，以下哪种做法是正确的？",
      options: ["空挡滑行", "熄火滑行", "利用发动机制动控制车速", "持续猛踩加速踏板"],
      answer: 2,
      explanation: "下陡坡要利用发动机制动，严禁空挡或熄火滑行。"
    },
    {
      id: "sample-019",
      type: "single",
      category: "路口通行",
      difficulty: "easy",
      text: "图中道路场景中，驾驶人应优先注意什么？",
      media: "trafficLight",
      options: ["观察交通信号灯和停止线", "只观察右侧车辆", "直接加速通过", "关闭转向灯"],
      answer: 0,
      explanation: "路口通行优先看信号灯、停止线和周边交通参与者。"
    },
    {
      id: "sample-020",
      type: "judge",
      category: "违法处罚",
      difficulty: "medium",
      text: "驾驶机动车在道路上追逐竞驶，情节恶劣的，可能构成犯罪。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "危险驾驶相关考点常出现，追逐竞驶情节恶劣可能构成犯罪。"
    }
  ];
})();
