import { chromium } from 'playwright';
import fs from 'fs';

const URL = 'https://mklabs.vercel.app';
const VIEWPORT = { width: 1440, height: 900 };

async function runTests() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: VIEWPORT });
  const page = await context.newPage();

  console.log('='.repeat(60));
  console.log('MK LABS - FINAL PRODUCTION TEST');
  console.log('='.repeat(60));
  console.log(`URL: ${URL}`);
  console.log(`Viewport: ${VIEWPORT.width}x${VIEWPORT.height}\n`);

  await page.goto(URL, { waitUntil: 'networkidle' });

  if (!fs.existsSync('screenshots')) fs.mkdirSync('screenshots');
  await page.screenshot({ path: 'screenshots/production-final.png', fullPage: true });

  const sections = await page.$$('section');
  console.log('--- RESULTS ---\n');

  for (let i = 0; i < sections.length; i++) {
    const m = await sections[i].evaluate((el) => ({
      width: el.getBoundingClientRect().width,
      height: el.getBoundingClientRect().height,
    }));
    const pct = ((m.width / VIEWPORT.width) * 100).toFixed(0);
    const status = m.width >= VIEWPORT.width * 0.95 ? 'FULL' : m.width >= VIEWPORT.width * 0.8 ? 'WIDE' : 'NARROW';
    console.log(`Section ${i + 1}: ${m.width}px (${pct}%) - ${status}`);
  }

  const h1 = await page.$('h1');
  if (h1) {
    const size = await h1.evaluate(el => window.getComputedStyle(el).fontSize);
    console.log(`\nH1 font-size: ${size}`);
  }

  const h2 = await page.$('h2');
  if (h2) {
    const size = await h2.evaluate(el => window.getComputedStyle(el).fontSize);
    console.log(`H2 font-size: ${size}`);
  }

  await browser.close();
  console.log('\n' + '='.repeat(60));
  console.log('LIVE: https://mklabs.vercel.app');
  console.log('='.repeat(60));
}

runTests().catch(console.error);
