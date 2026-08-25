import { chromium } from "playwright";
const browser = await chromium.launch();

const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await desktop.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await desktop.waitForTimeout(1200);
await desktop.screenshot({ path: "/tmp/pwk-hero-desktop.png" });

const consoleErrors = [];
desktop.on("console", (m) => m.type() === "error" && consoleErrors.push(m.text()));
desktop.on("pageerror", (e) => consoleErrors.push(e.message));
await desktop.reload({ waitUntil: "networkidle" });
await desktop.waitForTimeout(1200);
console.log("errors:", JSON.stringify(consoleErrors));

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await mobile.waitForTimeout(1200);
await mobile.screenshot({ path: "/tmp/pwk-hero-mobile.png", fullPage: false });

await browser.close();
console.log("done");
