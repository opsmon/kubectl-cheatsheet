import assert from "node:assert/strict";
import { runbooks } from "../src/lib/runbooks.js";
import { recipeById } from "../src/lib/recipes.js";

assert.deepEqual(runbooks.map((item) => item.id), ["crashloop", "pending", "service"]);
for (const item of runbooks) {
  assert.ok(item.title.ru && item.title.eng && item.expected.ru && item.expected.eng && item.limits.ru && item.limits.eng);
  assert.ok(item.observations.some((observation) => observation.id === "unknown"));
  assert.ok(item.steps.length >= 3);
  for (const id of item.steps) {
    assert.ok(recipeById[id], `${item.id}: missing ${id}`);
    assert.equal(recipeById[id].effect, "read", `${item.id}: mutating step ${id}`);
  }
  for (const observation of item.observations) assert.ok(observation.next.ru && observation.next.eng);
}
console.log("OK: three bilingual, read-only playbooks and branches.");
