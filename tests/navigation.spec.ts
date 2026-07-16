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
