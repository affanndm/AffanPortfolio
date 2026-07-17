import { expect, test } from "@playwright/test";

const internalRoutes = ["/", "/projects/vantage", "/projects/grnalytics", "/lab", "/design-lab", "/design-lab/hero-a", "/design-lab/hero-b", "/design-lab/hero-c"];

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
  expect(count).toBeGreaterThan(3);
});

test("homepage in-page links resolve to existing targets", async ({ page }) => {
  await page.goto("/");
  const hashes = await page.locator('a[href^="#"], a[href^="/#"]').evaluateAll((links) =>
    links.map((link) => new URL((link as HTMLAnchorElement).href).hash),
  );

  for (const hash of new Set(hashes)) {
    await expect(page.locator(hash)).toHaveCount(1);
  }
});

test("public external links use safe new-tab attributes", async ({ page }) => {
  await page.goto("/");
  const externalLinks = page.locator('main a[target="_blank"]');
  const count = await externalLinks.count();
  expect(count).toBeGreaterThan(4);

  for (let index = 0; index < count; index += 1) {
    const link = externalLinks.nth(index);
    await expect(link).toHaveAttribute("href", /^https:\/\//);
    await expect(link).toHaveAttribute("rel", /noreferrer/);
  }
});

test("homepage exposes a public email link", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Email", exact: true })).toHaveAttribute(
    "href",
    "mailto:nadeemaffan23@gmail.com",
  );
});

test("homepage exposes every verified work entry and both public profiles", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".fn-work-choice")).toHaveCount(6);
  await expect(page.locator(".lab-row")).toHaveCount(3);
  await expect(page.getByRole("heading", { name: "gRNAlytics", exact: true })).toBeVisible();
  await expect(page.locator('.fn-profile-links a[href="https://github.com/affanndm"]')).toHaveCount(1);
  await expect(page.locator('.fn-profile-links a[href="https://www.linkedin.com/in/affan-nadeem-9b4aa0250/"]')).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/affan-nadeem-9b4aa0250/",
  );
});
