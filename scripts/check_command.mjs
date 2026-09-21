import assert from "node:assert/strict";
import { buildCommand } from "../src/lib/command.js";
import { recipeById } from "../src/lib/recipes.js";

assert.equal(buildCommand(recipeById["pod-logs"], { pod: "api-0" }, { context: "dev", namespace: "team" }).command,
  "kubectl --context='dev' --namespace='team' logs 'api-0'");
assert.equal(buildCommand(recipeById["pod-logs"], { pod: "$(touch /tmp/x)" }).ready, false);
assert.equal(buildCommand(recipeById["pod-logs"], { pod: "api-0;echo secret" }).ready, false);
assert.equal(buildCommand(recipeById["pod-logs"], { pod: "api-0\nwhoami" }).ready, false);
assert.equal(buildCommand(recipeById["deployment-diff"], { file: "a'b.yaml" }).command,
  `kubectl diff -f 'a'"'"'b.yaml'`);
assert.equal(buildCommand(recipeById["deployment-diff"], { file: "--help" }).ready, false);
assert.equal(buildCommand(recipeById["nodes-list"], {}, { namespace: "team" }).ready, false);
assert.equal(buildCommand(recipeById["pods-list"], {}, { namespace: "team", allNamespaces: true }).ready, false);
assert.equal(buildCommand(recipeById["pod-exec"], { pod: "api-0" }, { namespace: "team" }).command,
  "kubectl --namespace='team' exec -it 'api-0' -- sh");
assert.equal(buildCommand(recipeById["pod-logs"], {}).ready, false);
console.log("OK: command parameters, scope, flags and shell quoting.");
