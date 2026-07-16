import { expect, test } from "@playwright/test";

test("homepage exposes core SEO and social metadata", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Affan Nadeem - Signal \/ Systems/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /complex systems/i);
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /Affan Nadeem/);
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /opengraph-image/);
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
});

test("case studies expose the complete narrative structure", async ({ page }) => {
  await page.goto("/projects/vantage");
  for (const heading of [
    "A path through the search space.",
    "My Contribution",
    "Decisions that shaped the system.",
    "The system, made visible.",
    "What the evidence supports",
    "The principle carried forward",
    "Team And Credits",
    "Next Project",
  ]) {
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  }
  for (const sectionLabel of ["The Signal", "The Noise", "The System", "Important Decisions", "Product In Motion", "Verified Outcome", "What Changed In My Thinking"]) {
    await expect(page.getByText(sectionLabel, { exact: true }).first()).toBeVisible();
  }
});

test("404 route returns a useful not-found page", async ({ page }) => {
  const response = await page.goto("/this-route-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("robots and sitemap keep design lab private", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();
  expect(await robots.text()).toContain("Disallow: /design-lab");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  const body = await sitemap.text();
  expect(body).toContain("/projects/vantage");
  expect(body).not.toContain("/design-lab");
});
