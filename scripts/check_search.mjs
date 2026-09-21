import assert from "node:assert/strict";
import { recipes } from "../src/lib/recipes.js";
import { searchRecipes } from "../src/lib/search.js";

const cases = [
  ["ru", "прошлые логи", "pod-previous-logs"], ["eng", "previous logs", "pod-previous-logs"],
  ["ru", "под перезапускается", "pod-previous-logs"], ["eng", "crashloopbackoff", "pod-previous-logs"],
  ["ru", "список подов", "pods-list"], ["eng", "list pods", "pods-list"],
  ["ru", "состояние пода", "pod-describe"], ["eng", "pod pending", "pod-describe"],
  ["ru", "логи пода", "pod-logs"], ["eng", "pod logs", "pod-logs"],
  ["ru", "проверить перед apply", "deployment-diff"], ["eng", "diff before apply", "deployment-diff"],
  ["ru", "применить конфигурацию", "file-apply"], ["eng", "apply configuration", "file-apply"],
  ["ru", "перезапустить deployment", "deployment-restart"], ["eng", "restart deployment", "deployment-restart"],
  ["ru", "откатить deployment", "deployment-undo"], ["eng", "undo deployment", "deployment-undo"],
  ["ru", "service не отвечает", "service-slices"], ["eng", "service unavailable", "service-slices"],
  ["ru", "права доступа", "can-i"], ["eng", "check permission", "can-i"],
  ["ru", "список нод", "nodes-list"], ["eng", "list nodes", "nodes-list"],
  ["ru", "текущий контекст", "current-context"], ["eng", "current context", "current-context"],
  ["ru", "список событий", "events-list"], ["eng", "list events", "events-list"],
  ["eng", "pod logz", "pod-logs"], ["eng", "rollout stats", "deployment-status"]
];

let hits = 0;
for (const [lang, query, expected] of cases) {
  const top = searchRecipes(recipes, query, lang).slice(0, 5).map((item) => item.id);
  if (top.includes(expected)) hits++;
  else console.error(`${lang}: ${query} -> ${top.join(", ")}; expected ${expected}`);
}
assert.ok(hits >= 27, `${hits}/30 editorial searches hit Top 5`);
assert.equal(searchRecipes(recipes, "pod logs", "eng")[0].id, "pod-logs", "exact match precedes typo match");
assert.ok(searchRecipes(recipes, "", "eng", { category: "storage", effect: "read" }).every((item) => item.category === "storage" && item.effect === "read"));
assert.ok(searchRecipes(recipes, "", "eng", { tool: "helm" }).every((item) => item.command.startsWith("helm ")));
assert.ok(searchRecipes(recipes, "", "eng", { resource: "pod", task: "diagnose", requires: "kubectl", compatibility: "unknown", shell: "posix" }).every((item) => item.resource === "pod" && item.task === "diagnose"));
console.log(`OK: ${hits}/30 editorial searches hit Top 5.`);
