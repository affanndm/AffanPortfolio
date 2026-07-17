import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:3010";
const outputDirectory = "qa/visual-review/filippo-study";
const sections = [
  "identity-a",
  "identity-b",
  "identity-c",
  "menu-study",
  "system-study",
  "about-study",
  "personal-study",
  "work-study",
];
const viewports = {
  desktop: { width: 1440, height: 1000 },
  mobile: { width: 390, height: 844 },
};

await mkdir(outputDirectory, { recursive: true });

const browser = await chromium.launch({ headless: true });

try {
  for (const [profile, viewport] of Object.entries(viewports)) {
    const context = await browser.newContext({ viewport, deviceScaleFactor: 1, reducedMotion: "no-preference" });
    const page = await context.newPage();
    await page.goto(`${baseUrl}/design-lab/filippo-study`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.addStyleTag({ content: ".study-bar,.skip-link{display:none!important}.study-section{scroll-margin-top:0!important}" });

    for (const section of sections) {
      const target = page.locator(`#${section}`);
      await target.scrollIntoViewIfNeeded();
      await page.evaluate(() => {
        document.scrollingElement?.scrollTo({ left: 0 });
        document.querySelector(".personal-track")?.scrollTo({ left: 0 });
      });
      if (section === "personal-study") {
        await page.evaluate(() => document.querySelector("#personal-study")?.scrollIntoView({ block: "start" }));
        await page.evaluate(() => document.querySelector(".personal-track")?.scrollTo({ left: 0 }));
        await page.screenshot({ path: `${outputDirectory}/${section}-${profile}.png` });
      } else {
        await target.screenshot({ path: `${outputDirectory}/${section}-${profile}.png` });
      }
    }

    await context.close();
  }
} finally {
  await browser.close();
}
