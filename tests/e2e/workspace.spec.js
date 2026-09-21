import { test, expect } from "@playwright/test";

test("search, build and copy exact command", async ({ page }) => {
  await page.goto("/");
  await page.locator("#recipe-search").fill("previous logs");
  await page.getByRole("option", { name: /Previous container logs/ }).click();
  await page.getByLabel("Pod name").fill("api-0");
  await page.getByLabel("Context").fill("dev");
  await page.getByRole("textbox", { name: "Namespace" }).fill("team");
  const expected = "kubectl --context='dev' --namespace='team' logs 'api-0' --previous";
  await expect(page.locator(".wb-code code")).toHaveText(expected);
  await page.getByRole("button", { name: "Copy command" }).click();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(expected);
  if (process.env.CAPTURE_SCREENSHOTS) await page.locator(".wb-detail").screenshot({ path: "docs/screenshots/recipe-builder.png" });
});

test("invalid parameter blocks copying and favorites survive reload", async ({ page }) => {
  await page.goto("/");
  await page.locator("#recipe-search").fill("pod logs");
  await page.getByRole("option", { name: /Pod logs/ }).click();
  await page.getByLabel("Pod name").fill("api;echo bad");
  await expect(page.getByRole("button", { name: "Copy command" })).toHaveCount(0);
  await page.getByRole("button", { name: "Favorite" }).click();
  await page.reload();
  await expect(page.getByRole("button", { name: "Remove favorite" })).toBeVisible();
});

test("palette works on documentation and language switch maps old anchor", async ({ page }) => {
  await page.goto("/ru/viewing.html#просмотр-логов-logs");
  await page.keyboard.press("ControlOrMeta+k");
  await expect(page.locator("#recipe-search")).toBeFocused();
  await page.getByRole("link", { name: "EN", exact: true }).click();
  await expect(page).toHaveURL(/\/eng\/viewing\.html#viewing-logs-logs$/);
  await expect(page.locator("#viewing-logs-logs")).toBeInViewport();
});

test("runbook supports insufficient evidence branch", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Service is unavailable" }).click();
  await page.getByLabel("What do you observe?").selectOption("unknown");
  await expect(page.locator(".runbook-next")).toContainText("Collect Service describe");
  if (process.env.CAPTURE_SCREENSHOTS) await page.locator(".runbook-card").screenshot({ path: "docs/screenshots/service-runbook.png" });
});

test("user input stays local", async ({ page }) => {
  const outgoing = [];
  page.on("request", (request) => { if (!request.url().startsWith("http://127.0.0.1:4173/")) outgoing.push(request.url()); });
  await page.goto("/");
  await page.locator("#recipe-search").fill("internal-secret-name");
  await page.getByRole("option", { name: /List Pods/ }).count();
  expect(outgoing).toEqual([]);
});

test("keyboard palette chooses a recipe and returns focus on Escape", async ({ page }) => {
  await page.goto("/");
  const trigger = page.getByRole("link", { name: "Documentation" });
  await trigger.focus();
  await page.keyboard.press("ControlOrMeta+k");
  await page.locator("#recipe-search").fill("previous logs");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await expect(page.locator(".wb-detail h3")).toHaveText("Previous container logs");
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
});

test("unavailable localStorage leaves browsing usable", async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(window, "localStorage", { get() { throw Error("blocked"); } }));
  await page.goto("/");
  await page.locator(".wb-collections summary").click();
  await expect(page.getByText("Local storage is unavailable; saving is disabled.")).toBeVisible();
  await page.locator("#recipe-search").fill("pod logs");
  await expect(page.getByRole("option", { name: /Pod logs/ })).toBeVisible();
});

test("small screen keeps builder usable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.locator("#recipe-search").fill("pod logs");
  await page.getByRole("option", { name: /Pod logs/ }).click();
  await page.getByLabel("Pod name").fill("api-0");
  await expect(page.getByRole("button", { name: "Copy command" })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
});

test("collection restores saved recipe without storing parameters", async ({ page }) => {
  await page.goto("/");
  await page.locator("#recipe-search").fill("previous logs");
  await page.getByRole("option", { name: /Previous container logs/ }).click();
  await page.getByLabel("Pod name").fill("private-pod-0");
  await page.locator(".wb-collections summary").click();
  await page.getByPlaceholder("Collection name").fill("On call");
  await page.getByRole("button", { name: "Create", exact: true }).click();
  await page.getByRole("button", { name: "Add to collection" }).click();
  await page.reload();
  await page.locator(".wb-collections summary").click();
  await page.locator(".wb-saved-list").getByRole("button", { name: "Previous container logs" }).click();
  await expect(page.getByLabel("Pod name")).toHaveValue("");
  const stored = await page.evaluate(() => localStorage.getItem("kubectl-cheatsheet-collections-v1"));
  expect(stored).toContain("pod-previous-logs");
  expect(stored).not.toContain("private-pod-0");
});
