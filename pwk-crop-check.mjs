import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.screenshot({ path: "/tmp/pwk-hero-crop2.png", clip: { x: 760, y: 500, width: 250, height: 400 } });
await page.screenshot({ path: "/tmp/pwk-hero-full2.png" });
await browser.close();
