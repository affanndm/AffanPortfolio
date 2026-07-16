import { expect, test } from "@playwright/test";

test("mobile menu opens with native disclosure behavior", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const mobileMenu = page.locator("details.mobile-menu");
  const menuButton = page.locator("summary.menu-button");
  await expect(mobileMenu).not.toHaveAttribute("open", "");

  await menuButton.click();
  await expect(mobileMenu).toHaveAttribute("open", "");

  const workLink = page.locator("#mobile-menu").getByRole("link", { name: "Work", exact: true });
  await expect(workLink).toBeVisible();

  await menuButton.click();
  await expect(mobileMenu).not.toHaveAttribute("open", "");
});

test("mobile menu closes on Escape and returns focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const mobileMenu = page.locator("details.mobile-menu");
  const menuButton = page.locator("summary.menu-button");
  await menuButton.focus();
  await page.keyboard.press("Enter");
  await expect(mobileMenu).toHaveAttribute("open", "");

  await page.keyboard.press("Escape");
  await expect(mobileMenu).not.toHaveAttribute("open", "");
  await expect(menuButton).toBeFocused();
});

test("mobile menu closes after selecting a section", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const mobileMenu = page.locator("details.mobile-menu");
  await page.locator("summary.menu-button").click();
  await page.locator("#mobile-menu").getByRole("link", { name: "Work", exact: true }).click();

  await expect(mobileMenu).not.toHaveAttribute("open", "");
  await expect(page).toHaveURL(/#work$/);
});
