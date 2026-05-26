const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function test(name, fn) {
  try {
    fn();
    console.log(`ok - ${name}`);
  } catch (error) {
    console.error(`not ok - ${name}`);
    throw error;
  }
}

test("README hero assets and links point to project-owned files", () => {
  const readme = read("README.md");
  assert.match(readme, /https:\/\/tonyalbertwan\.github\.io\/km1-exam-simulator\//);
  assert.match(readme, /https:\/\/github\.com\/TonyAlbertWan\/km1-exam-simulator\/issues/);
  assert.match(readme, /docs\/screenshot-home\.png/);
  assert.equal(exists("docs/screenshot-home.png"), true);
});

test("index.html loads scripts in the required no-build order", () => {
  const html = read("index.html");
  const expectedOrder = [
    "data/config.js",
    "data/questions.sample.js",
    "data/media.js",
    "src/engine.js",
    "src/ui.js",
    "app.js"
  ];

  let previous = -1;
  for (const scriptPath of expectedOrder) {
    const current = html.indexOf(`src="${scriptPath}"`);
    assert.ok(current > previous, `${scriptPath} should appear after the previous script`);
    assert.equal(exists(scriptPath), true, `${scriptPath} should exist`);
    previous = current;
  }
});

test("GitHub community and deployment files exist", () => {
  [
    "AGENTS.md",
    "CONTRIBUTING.md",
    "CHANGELOG.md",
    ".github/workflows/ci.yml",
    ".github/workflows/pages.yml",
    ".github/ISSUE_TEMPLATE/bug_report.md",
    ".github/ISSUE_TEMPLATE/exam-room-difference.md",
    ".github/ISSUE_TEMPLATE/question-sample.md",
    ".nojekyll"
  ].forEach(relativePath => {
    assert.equal(exists(relativePath), true, `${relativePath} should exist`);
  });
});

test("contribution docs preserve privacy and copyright guardrails", () => {
  const agents = read("AGENTS.md");
  const contributing = read("CONTRIBUTING.md");
  assert.match(agents, /Road Test Lab <36988005\+TonyAlbertWan@users\.noreply\.github\.com>/);
  assert.match(agents, /Do not fake contributors/);
  assert.match(contributing, /不接受什么/);
  assert.match(contributing, /商业刷题 App/);
});
