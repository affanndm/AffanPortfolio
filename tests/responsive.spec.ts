import { expect, test } from "@playwright/test";

const routes = ["/", "/projects/vantage", "/projects/grnalytics", "/lab", "/design-lab", "/design-lab/hero-a", "/design-lab/hero-b", "/design-lab/hero-c"];

const viewports = [
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1440, height: 1000 },
  { width: 1920, height: 1080 },
];

for (const viewport of viewports) {
  for (const route of routes) {
    test(`no horizontal overflow ${route} at ${viewport.width}px`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });

      await page.setViewportSize(viewport);
      await page.goto(route, { waitUntil: "domcontentloaded" });
      await expect(page.locator("main#main")).toBeVisible();

      const overflow = await page.evaluate(() => {
        const documentWidth = document.documentElement.clientWidth;
        return Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - documentWidth;
      });

      expect(overflow).toBeLessThanOrEqual(1);
      expect(consoleErrors).toEqual([]);
    });
  }
}
