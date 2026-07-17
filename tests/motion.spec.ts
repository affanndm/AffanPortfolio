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
  await expect(page.locator(".fn-carousel-slide-vantage")).toBeVisible();
  await expect(page.locator("html")).not.toHaveClass(/\blenis\b/);
});

test("mobile keeps native scrolling without loading the desktop motion runtime", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator("html")).not.toHaveClass(/\blenis\b/);
  await expect(page.locator(".fn-name-char")).toHaveCount(0);
});

test("project carousel advances with its visible controls", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const carousel = page.locator("[data-project-carousel]");
  await expect(carousel).toHaveAttribute("data-enhanced", "true");
  await carousel.evaluate((element) => window.scrollTo(0, element.getBoundingClientRect().top + window.scrollY));
  await page.waitForTimeout(900);
  await expect(page.locator("[data-carousel-status]")).toContainText("Project 1 of 6: Vantage");
  await page.getByRole("button", { name: "Show next project" }).click();
  await expect(page.locator("[data-carousel-status]")).toContainText("Project 2 of 6: gRNAlytics", { timeout: 5000 });
});

test("experience archive keeps the revised voice and supports keyboard tab selection", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", {
    name: "I like problems with information and no obvious first move.",
  })).toBeVisible();
  await expect(page.getByText("too much information", { exact: false })).toHaveCount(0);

  const experience = page.locator("#experience");
  await experience.scrollIntoViewIfNeeded();
  await expect(experience).toHaveAttribute("data-enhanced", "true");
  const firstTab = page.getByRole("tab", { name: /Experience/ });
  await firstTab.focus();
  await page.keyboard.press("ArrowRight");

  const competitionTab = page.getByRole("tab", { name: /Competition/ });
  await expect(competitionTab).toBeFocused();
  await expect(competitionTab).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel", { name: /Competition/ })).toContainText("2nd place in Canada");
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

  await expect(page.locator("[data-project-carousel]")).toHaveAttribute("data-enhanced", "true");
  await page.locator("[data-carousel-tab]").filter({ hasText: "gRNAlytics" }).click();
  const trigger = page.locator("#work-grnalytics").getByRole("button", { name: "Open project" });
  await expect(page.locator("[data-carousel-status]")).toContainText("gRNAlytics", { timeout: 10000 });
  await expect(trigger).toBeVisible({ timeout: 10000 });
  await trigger.click();
  const dialog = page.locator("#grnalytics-drawer");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("heading", { name: "gRNAlytics", exact: true })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});
