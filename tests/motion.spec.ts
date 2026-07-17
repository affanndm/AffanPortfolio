import { expect, test } from "@playwright/test";

test("hero navigation reaches the Vantage sequence", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.getByRole("link", { name: "Work", exact: true }).click();
  await expect(page).toHaveURL(/#all-work$/);
  await expect(page.getByRole("heading", { name: "Vantage", exact: true })).toBeVisible();
});

test("reduced motion keeps the lane identity and project media resolved", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.mouse.move(600, 300);

  await expect(page.locator(".fn-lane-name")).toBeVisible();
  await expect(page.locator(".fn-lane-scanner")).toBeHidden();
  await expect(page.locator(".fn-project-portal")).toHaveCSS("transform", "none");
  await expect(page.locator("html")).not.toHaveClass(/\blenis\b/);
});

test("mobile keeps native scrolling without loading the desktop motion runtime", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator("html")).not.toHaveClass(/\blenis\b/);
  await expect(page.locator(".fn-name-char")).toHaveCount(0);
});

test("work chooser advances horizontally with its visible controls", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const track = page.locator("[data-work-track]");
  await track.scrollIntoViewIfNeeded();
  const before = await track.evaluate((element) => element.scrollLeft);
  await page.getByRole("button", { name: "Show next work" }).click();
  await expect.poll(() => track.evaluate((element) => element.scrollLeft)).toBeGreaterThan(before);
});

test("fine-pointer movement changes the identity scanner position", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const hero = page.locator(".fn-lane-hero");
  await expect(hero).toBeVisible();
  const before = await hero.evaluate((element) => element.style.getPropertyValue("--scanner-left"));
  await page.mouse.move(700, 320);
  const after = await hero.evaluate((element) => element.style.getPropertyValue("--scanner-left"));
  expect(after).not.toBe(before);
});

test("project preview opens as a side-stage dialog and closes with Escape", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Open project" }).first();
  await trigger.scrollIntoViewIfNeeded();
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("heading", { name: "Vantage", exact: true })).toBeVisible();
  await expect(page.locator("html")).toHaveClass(/lenis-stopped/);

  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
  await expect(page.locator("html")).not.toHaveClass(/lenis-stopped/);
});

test("gRNAlytics preview uses the same side-stage interaction", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Open project" }).nth(1);
  await trigger.scrollIntoViewIfNeeded();
  await trigger.click();
  const dialog = page.locator("#grnalytics-drawer");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("heading", { name: "gRNAlytics", exact: true })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});
