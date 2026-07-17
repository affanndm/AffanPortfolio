import { expect, test } from "@playwright/test";

test("study exposes all eight review compositions", async ({ page }) => {
  await page.goto("/design-lab/filippo-study");

  for (const id of ["identity-a", "identity-b", "identity-c", "menu-study", "system-study", "about-study", "personal-study", "work-study"]) {
    await expect(page.locator(`#${id}`)).toBeAttached();
  }

  await expect(page.getByRole("heading", { level: 1, name: "The portfolio is about Affan." })).toBeVisible();
  await expect(page.getByText("NEEDS_AFFAN_CONFIRMATION", { exact: false })).toHaveCount(2);
});

test("menu, calibration, and easter egg remain operable", async ({ page }) => {
  await page.goto("/design-lab/filippo-study");

  const menuButton = page.getByRole("button", { name: "Close" });
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await menuButton.click();
  await expect(page.getByRole("button", { name: "Open index" })).toHaveAttribute("aria-expanded", "false");

  await page.getByRole("tab", { name: "02 Signature" }).click();
  await expect(page.getByRole("tabpanel")).toContainText("#3157FF");

  const easterEgg = page.getByRole("button", { name: /Press A/ });
  await easterEgg.click();
  await expect(easterEgg).toHaveAttribute("aria-pressed", "true");
});

test("reduced motion keeps study content available", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/design-lab/filippo-study");

  await expect(page.locator("#identity-b")).toBeVisible();
  await expect(page.locator("#work-study")).toBeAttached();
  const duration = await page.locator(".lane-stack span").first().evaluate((element) => getComputedStyle(element).transitionDuration);
  expect(duration).toBe("0.001s");

  await context.close();
});
