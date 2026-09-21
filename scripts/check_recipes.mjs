import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { recipes } from "../src/lib/recipes.js";

assert.equal(recipes.length, 40, "expected 40 canonical recipes");
assert.equal(new Set(recipes.map((recipe) => recipe.id)).size, recipes.length, "duplicate recipe ID");

function slug(text) {
  return text.toLowerCase().trim().replace(/\s+/g, "-").replace(/[`~!@#$%^&*()+=\[\]{}\\|;:"',.<>/?]/g, "");
}

for (const recipe of recipes) {
  assert.match(recipe.id, /^[a-z][a-z0-9-]+$/);
  assert.ok(["read", "write", "exec", "destructive", "mixed", "unknown"].includes(recipe.effect), recipe.id);
  assert.ok(recipe.status && recipe.source && recipe.requires.length, recipe.id);
  assert.ok(recipe.title.ru && recipe.title.eng && recipe.command, recipe.id);
  const placeholders = [...recipe.command.matchAll(/{{([a-z]+)}}/g)].map((match) => match[1]);
  assert.deepEqual([...new Set(placeholders)].sort(), recipe.params.map((param) => param.name).sort(), recipe.id);
  for (const lang of ["ru", "eng"]) {
    const [path, hash] = recipe.links[lang].replace(".html", ".md").split("#");
    const headings = readFileSync(path, "utf8").split("\n").filter((line) => /^##+\s/.test(line)).map((line) => slug(line.replace(/^##+\s+/, "")));
    assert.ok(headings.includes(hash), `${recipe.id}: broken ${lang} anchor ${hash}`);
  }
}

console.log("OK: 40 bilingual recipes, schema and source anchors.");
