# Contributing

感谢你愿意让这个科目一机考彩排器更接近真实考场。

## 可以贡献什么

- 反馈你所在地区考场界面和本项目的差异
- 修复交互、布局、移动端兼容问题
- 增加原创示例题或题目分类
- 改进 README、截图、导览文案和开源传播材料

## 不接受什么

- 从商业刷题 App、网站、题库中搬运原题
- 伪造官方考试成绩或证件信息的功能
- 需要登录、后端服务或复杂构建流程的改动

## 本地开发

项目没有构建步骤。你可以直接打开：

```text
index.html
```

或者启动静态服务器：

```bash
python -m http.server 8000
```

## 题目贡献规范

题目位于 `data/questions.sample.js`，请使用原创表达，并补齐这些字段：

- `id`
- `type`
- `category`
- `difficulty`
- `text`
- `options`
- `answer`
- `explanation`
- `media`，可选

## 提交前检查

- 双击 `index.html` 可以打开
- `python -m http.server 8000` 可以打开
- 全真彩排、快速熟悉、界面导览三种模式都能启动
- Chrome/Edge 控制台没有错误
- 移动端 360px 宽度下按钮和弹窗不溢出
