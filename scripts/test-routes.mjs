// Automated Route & SSR Accessibility Verification Script
const PORT = process.env.PORT || 3000;
const BASE_URL = `http://127.0.0.1:${PORT}`;

const ROUTES_TO_TEST = [
  { path: "/", expectedText: "moves fast" },
  { path: "/about", expectedText: "Our Perspective" },
  { path: "/services", expectedText: "Good ideas deserve great" },
  { path: "/services/social-media-marketing", expectedText: "Social Media Marketing" },
  { path: "/services/pr-meme-marketing", expectedText: "Meme Marketing" },
  { path: "/services/influencer-marketing", expectedText: "Verified Creators" },
  { path: "/services/social-events-marketing", expectedText: "Social Events Marketing" },
  { path: "/services/podcasting", expectedText: "Podcasting" },
  { path: "/work", expectedText: "PORTFOLIO ARCHIVE" },
  { path: "/work/leadership-summit", expectedText: "Leadership Summit" },
  { path: "/work/instaconfluence", expectedText: "InstaConfluence" },
  { path: "/work/bizfluence-2", expectedText: "Bizfluence 2.0" },
  { path: "/work/myntra-glamfest", expectedText: "Myntra Glamfest" },
  { path: "/work/coke-studio-bharat", expectedText: "Coke Studio Bharat" },
  { path: "/contact", expectedText: "Talk directly with our" },
];

async function runTests() {
  console.log(`Starting automated route checks on ${BASE_URL}...\n`);
  let passed = 0;
  let failed = 0;

  for (const route of ROUTES_TO_TEST) {
    const url = `${BASE_URL}${route.path}`;
    try {
      const startTime = Date.now();
      const res = await fetch(url);
      const elapsed = Date.now() - startTime;
      const html = await res.text();

      if (res.status === 200 && html.includes(route.expectedText)) {
        console.log(
          `✓ [200 OK] ${route.path.padEnd(35)} (${elapsed}ms) - Verified text "${route.expectedText}"`,
        );
        passed++;
      } else {
        console.error(
          `✗ [FAIL] ${route.path} - Status: ${res.status}, Contains text: ${html.includes(route.expectedText)}`,
        );
        failed++;
      }
    } catch (err) {
      console.error(`✗ [ERROR] ${route.path} - ${err.message}`);
      failed++;
    }
  }

  console.log(`\n========================================`);
  console.log(`Total Routes Tested: ${ROUTES_TO_TEST.length}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`========================================\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
