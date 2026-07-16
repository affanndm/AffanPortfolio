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

test("reduced motion uses static ticker and does not load the hero canvas", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.mouse.move(600, 300);

  await expect(page.locator(".ticker-track")).toBeHidden();
  await expect(page.locator(".ticker-accessible")).toBeVisible();
  await expect(page.locator(".signal-field canvas")).toHaveCount(0);
});

test("fine-pointer movement progressively loads the hero canvas", async ({ page }) => {
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
  await expect(page.locator(".signal-field canvas")).toHaveCount(0);
  await page.waitForTimeout(500);
  await page.mouse.move(700, 320);
  await expect(page.locator(".signal-field canvas")).toHaveCount(1);
});
