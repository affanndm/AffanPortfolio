import { expect, test } from "@playwright/test";

test("hero navigation reaches the Vantage sequence", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.getByRole("link", { name: "Work", exact: true }).click();
  await expect(page).toHaveURL(/#work$/);
  await expect(page.getByRole("heading", { name: "Vantage", exact: true })).toBeVisible();
});

test("reduced motion keeps the hero artifact and project media resolved", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.mouse.move(600, 300);

  await expect(page.locator(".fn-artifact")).toBeVisible();
  await expect(page.locator(".fn-project-portal")).toHaveCSS("transform", "none");
});

test("fine-pointer movement changes the interface artifact depth", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const artifact = page.locator(".fn-artifact");
  await expect(artifact).toBeVisible();
  await page.waitForTimeout(1800);
  const before = await artifact.evaluate((element) => getComputedStyle(element).transform);
  await page.mouse.move(700, 320);
  await page.waitForTimeout(900);
  const after = await artifact.evaluate((element) => getComputedStyle(element).transform);
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

  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
});
