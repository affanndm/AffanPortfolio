import { expect, test } from "@playwright/test";

const internalRoutes = ["/", "/projects/vantage", "/projects/grnalytics", "/lab", "/design-lab"];

for (const route of internalRoutes) {
  test(`internal route responds: ${route}`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("main#main")).toBeVisible();
  });
}

test("homepage primary links have hrefs", async ({ page }) => {
  await page.goto("/");
  const links = page.locator("main a[href]");
  const count = await links.count();
  expect(count).toBeGreaterThan(4);
});
