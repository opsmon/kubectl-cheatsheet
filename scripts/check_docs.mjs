import assert from "node:assert/strict";
import anchors from "../src/lib/generated-docs/anchors.json" with { type: "json" };

for (const lang of ["ru", "eng"]) {
  for (const [name, ids] of Object.entries(anchors[lang])) {
    const { default: html } = await import(`../src/lib/generated-docs/${lang}-${name}.js`);
    for (const id of ids) assert.ok(html.includes(`id="${id}"`), `${lang}/${name}: missing ${id}`);
    assert.ok(!/<script\b/i.test(html), `${lang}/${name}: raw script`);
    assert.ok(!/href="(?:javascript:|data:)/i.test(html), `${lang}/${name}: unsafe URL`);
    assert.ok(!html.includes("{{ site.baseurl }}"), `${lang}/${name}: unresolved template`);
  }
}
assert.ok((await import("../src/lib/generated-docs/ru-security.js")).default.includes("cat &lt;&lt;EOF"));
console.log("OK: generated docs retain anchors and code, with safe links.");
