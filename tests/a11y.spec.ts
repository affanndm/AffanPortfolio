import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = ["/", "/projects/vantage", "/projects/grnalytics", "/lab", "/design-lab", "/design-lab/hero-a", "/design-lab/hero-b", "/design-lab/hero-c"];

for (const route of routes) {
  test(`axe scan ${route}`, async ({ page }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}
