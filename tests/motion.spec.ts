import { expect, test } from "@playwright/test";

test("ticker can be paused and resumed from the keyboard", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  const control = page.getByRole("button", { name: "Pause technical domains ticker" });
  await control.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Resume technical domains ticker" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await expect(page.locator(".ticker-section")).toHaveAttribute("data-paused", "");

  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Pause technical domains ticker" })).toHaveAttribute(
    "aria-pressed",
    "false",
  );
});

test("reduced motion uses static ticker and a resolved hero sculpture", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.mouse.move(600, 300);

  await expect(page.locator(".ticker-track")).toBeHidden();
  await expect(page.locator(".ticker-accessible")).toBeVisible();
  await expect(page.locator(".signal-sculpture")).toBeVisible();
});

test("fine-pointer movement changes the hero sculpture depth", async ({ page }) => {
  await page.addInitScript(() => {
    const nativeMatchMedia = window.matchMedia.bind(window);
    window.matchMedia = (query: string) => {
      const result = nativeMatchMedia(query);
      if (query === "(hover: hover) and (pointer: fine)") {
        Object.defineProperty(result, "matches", { configurable: true, value: true });
      }
      return result;
    };
  });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const sculpture = page.locator(".signal-sculpture");
  await expect(sculpture).toBeVisible();
  await page.waitForTimeout(1800);
  const before = await sculpture.evaluate((element) => getComputedStyle(element).transform);
  await page.mouse.move(700, 320);
  await page.waitForTimeout(900);
  const after = await sculpture.evaluate((element) => getComputedStyle(element).transform);
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
