import assert from "node:assert/strict";
import { normalizeCollections, readCollections, writeCollections } from "../src/lib/collections.js";

const ids = ["pods-list", "pod-logs"];
assert.deepEqual(normalizeCollections({ favorites: ["pods-list", "pods-list", "deleted-id"], collections: [{ name: " Ops ", ids: ["pod-logs", "deleted-id"] }] }, ids),
  { version: 1, favorites: ["pods-list"], collections: [{ name: "Ops", ids: ["pod-logs"] }] });
assert.equal(readCollections({ getItem: () => "{bad" }, ids).available, false);
assert.equal(writeCollections({ setItem: () => { throw Error("denied"); } }, normalizeCollections(null, ids)), false);
console.log("OK: collections migration and unavailable storage.");
