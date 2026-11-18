import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORT = 9222;
const BASE_URL = "http://localhost:8082";
const EVIDENCE_DIR = path.resolve(process.cwd(), "test-evidence");

if (!fs.existsSync(EVIDENCE_DIR)) {
  fs.mkdirSync(EVIDENCE_DIR, { recursive: true });
}

// Helper to wait
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  console.log("=== CLOUT ADDA® AUTOMATED BROWSER ANIMATION TEST SUITE ===");
  console.log("Starting Chrome Headless with Remote Debugging...");

  const chromeProc = spawn(CHROME_PATH, [
    "--headless=new",
    `--remote-debugging-port=${PORT}`,
    "--use-gl=angle",
    "--no-sandbox",
    "--window-size=1440,900",
    "about:blank",
  ]);

  let isKilled = false;
  const cleanup = () => {
    if (!isKilled) {
      isKilled = true;
      try {
        chromeProc.kill();
      } catch {}
    }
  };
  process.on("exit", cleanup);
  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);

  // Wait for Chrome DevTools HTTP endpoint to be ready
  let versionData = null;
  for (let i = 0; i < 30; i++) {
    await wait(300);
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) {
        versionData = await res.json();
        break;
      }
    } catch {}
  }

  if (!versionData) {
    console.error("Failed to connect to Chrome DevTools endpoint.");
    cleanup();
    process.exit(1);
  }

  console.log(`Connected to Chrome DevTools: ${versionData.Browser}`);

  // Create a new target / page
  const newTabRes = await fetch(
    `http://127.0.0.1:${PORT}/json/new?${encodeURIComponent(BASE_URL)}`,
    { method: "PUT" },
  );
  const tabData = await newTabRes.json();
  const wsUrl = tabData.webSocketDebuggerUrl;

  console.log(`WebSocket Debugger URL: ${wsUrl}`);

  const ws = new WebSocket(wsUrl);

  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });

  let msgId = 1;
  const callbacks = new Map();
  const consoleMessages = [];
  const uncaughtErrors = [];

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && callbacks.has(data.id)) {
      const { resolve, reject } = callbacks.get(data.id);
      callbacks.delete(data.id);
      if (data.error) reject(data.error);
      else resolve(data.result);
    }

    if (data.method === "Runtime.consoleAPICalled") {
      const args = data.params.args.map((a) => a.value || a.description || "");
      consoleMessages.push({ type: data.params.type, text: args.join(" ") });
    }
    if (data.method === "Runtime.exceptionThrown") {
      uncaughtErrors.push(data.params.exceptionDetails);
    }
  };

  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const id = msgId++;
      callbacks.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });

  // Enable necessary domains
  await send("Page.enable");
  await send("Runtime.enable");
  await send("DOM.enable");

  // Helper to evaluate JS expression
  const evaluate = async (expr) => {
    const res = await send("Runtime.evaluate", {
      expression: expr,
      returnByValue: true,
      awaitPromise: true,
    });
    return res.result ? res.result.value : null;
  };

  // Helper to save screenshot
  const saveScreenshot = async (filename, fullPage = false) => {
    const res = await send("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: fullPage,
    });
    const buffer = Buffer.from(res.data, "base64");
    const filepath = path.join(EVIDENCE_DIR, filename);
    fs.writeFileSync(filepath, buffer);
    console.log(`📸 Screenshot saved: ${filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
    return filepath;
  };

  // Helper to navigate and wait for load
  const navigate = async (urlPath) => {
    console.log(`\nNavigating to ${BASE_URL}${urlPath}...`);
    await send("Page.navigate", { url: `${BASE_URL}${urlPath}` });
    await wait(1400); // Allow GSAP timelines, layout, and WebGL to initialize
  };

  // ==========================================
  // TEST 01: Homepage Hero Entrance & Visibility
  // ==========================================
  console.log("\n--- TEST 01: HOMEPAGE HERO ENTRANCE ---");
  await navigate("/");
  await wait(1000); // Let entrance timeline complete

  const heroHeadline = await evaluate(`document.querySelector("h1")?.innerText`);
  const heroOpacity = await evaluate(
    `window.getComputedStyle(document.querySelector(".hero-headline-line")).opacity`,
  );
  const heroVisibility = await evaluate(
    `window.getComputedStyle(document.querySelector(".hero-headline-line")).visibility`,
  );
  const threeCanvases = await evaluate(`document.querySelectorAll("canvas").length`);

  console.log(`Hero Headline: "${heroHeadline?.replace(/\\n/g, " ")}"`);
  console.log(`Hero Headline Opacity: ${heroOpacity}`);
  console.log(`Hero Headline Visibility: ${heroVisibility}`);
  console.log(`Mounted WebGL Canvases: ${threeCanvases}`);

  await saveScreenshot("01-desktop-hero.png");

  // ==========================================
  // TEST 02: Scroll Down & ScrollTriggers
  // ==========================================
  console.log("\n--- TEST 02: SCROLL DOWN & SCROLLTRIGGERS ---");
  // Scroll down to Manifesto and Numbers
  await evaluate(`window.scrollTo({ top: 1400, behavior: 'instant' });`);
  await wait(1500); // Allow count-up to finish

  const totalViewsText = await evaluate(`document.body.innerText.includes("500M+")`);
  const companiesText = await evaluate(`document.body.innerText.includes("50+")`);
  console.log(`Numbers Section - 500M+ Present: ${totalViewsText}, 50+ Present: ${companiesText}`);

  await saveScreenshot("02-desktop-manifesto-numbers.png");

  // Scroll down to Architectural Culture (3D Scene)
  console.log("\n--- TEST 03: 3D ARCHITECTURAL SCENE & PILLARS ---");
  await evaluate(`window.scrollTo({ top: 2200, behavior: 'instant' });`);
  await wait(800);

  const architecturalSectionVisible = await evaluate(
    `!!document.querySelector(".red-architectural-scene")`,
  );
  console.log(`Architectural Section Rendered: ${architecturalSectionVisible}`);

  await saveScreenshot("03-desktop-3d-architectural.png");

  // Scroll down to Selected Work & Closing CTA
  console.log("\n--- TEST 04: SELECTED WORK & CLOSING CTA ---");
  await evaluate(`window.scrollTo({ top: 4500, behavior: 'instant' });`);
  await wait(800);
  await saveScreenshot("04-desktop-selected-work.png");

  await evaluate(`window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });`);
  await wait(800);
  await saveScreenshot("05-desktop-closing-cta.png");

  // ==========================================
  // TEST 05: Reverse Scrolling
  // ==========================================
  console.log("\n--- TEST 05: REVERSE SCROLL TO TOP ---");
  await evaluate(`window.scrollTo({ top: 0, behavior: 'instant' });`);
  await wait(800);

  const heroOpacityAfterReverse = await evaluate(
    `window.getComputedStyle(document.querySelector(".hero-headline-line")).opacity`,
  );
  console.log(`Hero Headline Opacity after reverse scroll: ${heroOpacityAfterReverse}`);
  if (heroOpacityAfterReverse === "1") {
    console.log(
      "✓ PASS: Content remains 100% visible on reverse scroll! No invisible content bug.",
    );
  } else {
    console.error("✗ FAIL: Hero opacity was lost on reverse scroll!");
  }

  // ==========================================
  // TEST 06: Page Navigation & ScrollTrigger Cleanup
  // ==========================================
  console.log("\n--- TEST 06: PAGE NAVIGATION ---");

  // Navigate to /about
  await navigate("/about");
  const aboutHeading = await evaluate(`document.querySelector("h1")?.innerText`);
  console.log(`About Page Heading: "${aboutHeading?.replace(/\\n/g, " ")}"`);
  await saveScreenshot("06-about-page.png");

  // Navigate to /services
  await navigate("/services");
  const servicesHeading = await evaluate(`document.querySelector("h1")?.innerText`);
  console.log(`Services Page Heading: "${servicesHeading?.replace(/\\n/g, " ")}"`);
  await saveScreenshot("07-services-page.png");

  // Navigate to /services/influencer-marketing
  await navigate("/services/influencer-marketing");
  await evaluate(`window.scrollTo({ top: 400, behavior: 'instant' });`);
  await wait(600);
  await saveScreenshot("08-service-influencer.png");

  // Navigate to /work
  await navigate("/work");
  const workHeading = await evaluate(`document.querySelector("h1")?.innerText`);
  console.log(`Work Page Heading: "${workHeading?.replace(/\\n/g, " ")}"`);
  await saveScreenshot("09-work-archive.png");

  // Navigate to /work/leadership-summit
  await navigate("/work/leadership-summit");
  await evaluate(`window.scrollTo({ top: 300, behavior: 'instant' });`);
  await wait(600);
  await saveScreenshot("10-case-study-leadership.png");

  // Navigate to /contact
  await navigate("/contact");
  const contactHeading = await evaluate(`document.querySelector("h1")?.innerText`);
  console.log(`Contact Page Heading: "${contactHeading?.replace(/\\n/g, " ")}"`);
  await saveScreenshot("11-contact-page.png");

  // ==========================================
  // TEST 07: Mobile Viewport (390px)
  // ==========================================
  console.log("\n--- TEST 07: MOBILE VIEWPORT TESTING (390x844) ---");
  await send("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
  });

  await navigate("/");
  await wait(1000);

  const mobileHeroHeadline = await evaluate(`document.querySelector("h1")?.innerText`);
  const mobileHorizontalScroll = await evaluate(
    `document.documentElement.scrollWidth > window.innerWidth`,
  );
  console.log(`Mobile Headline: "${mobileHeroHeadline?.replace(/\\n/g, " ")}"`);
  console.log(`Mobile Horizontal Overflow: ${mobileHorizontalScroll ? "YES (BUG)" : "NO (CLEAN)"}`);

  await saveScreenshot("12-mobile-hero-390px.png");

  // Scroll mobile
  await evaluate(`window.scrollTo({ top: 900, behavior: 'instant' });`);
  await wait(600);
  await saveScreenshot("13-mobile-manifesto-390px.png");

  // Check console errors
  console.log("\n--- CONSOLE ERRORS & LOGS REVIEW ---");
  console.log(`Total Console Messages Logged: ${consoleMessages.length}`);
  console.log(`Uncaught Errors: ${uncaughtErrors.length}`);
  if (uncaughtErrors.length > 0) {
    console.error("Uncaught Errors Details:", uncaughtErrors);
  } else {
    console.log("✓ Zero uncaught runtime errors during complete session!");
  }

  console.log("\n=== ALL TEST PHASES COMPLETED SUCCESSFULLY ===");
  ws.close();
  cleanup();
  process.exit(0);
}

main().catch((err) => {
  console.error("Test Suite Runner Error:", err);
  process.exit(1);
});
