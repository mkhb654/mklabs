import { chromium } from 'playwright';
import fs from 'fs';

const URL = 'https://mklabs.vercel.app';
const VIEWPORT = { width: 1440, height: 900 };

async function runTests() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: VIEWPORT });
  const page = await context.newPage();

  console.log('='.repeat(60));
  console.log('MK LABS UI REGRESSION TEST');
  console.log('='.repeat(60));
  console.log(`URL: ${URL}`);
  console.log(`Viewport: ${VIEWPORT.width}x${VIEWPORT.height}`);
  console.log('');

  await page.goto(URL, { waitUntil: 'networkidle' });

  // Create screenshots directory
  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots');
  }

  // Full page screenshot
  await page.screenshot({ path: 'screenshots/full-page.png', fullPage: true });
  console.log('Full page screenshot saved');

  // Test each section
  const sections = [
    { name: 'Hero', selector: 'section:first-of-type' },
    { name: 'Problem', selector: 'section:nth-of-type(2)' },
    { name: 'Valuation', selector: 'section:nth-of-type(3)' },
    { name: 'WhatWeDo', selector: 'section:nth-of-type(4)' },
    { name: 'HowItWorks', selector: 'section:nth-of-type(5)' },
    { name: 'CTA', selector: 'section:nth-of-type(6)' },
  ];

  console.log('\n--- SECTION ANALYSIS ---\n');

  for (const section of sections) {
    try {
      const el = await page.$(section.selector);
      if (el) {
        const box = await el.boundingBox();
        const styles = await el.evaluate((e) => {
          const computed = window.getComputedStyle(e);
          return {
            height: e.offsetHeight,
            minHeight: computed.minHeight,
            display: computed.display,
            flexDirection: computed.flexDirection,
            justifyContent: computed.justifyContent,
            padding: computed.padding,
          };
        });

        const fillsViewport = styles.height >= VIEWPORT.height * 0.9;
        const status = fillsViewport ? 'PASS' : 'FAIL';

        console.log(`[${status}] ${section.name} Section:`);
        console.log(`      Height: ${styles.height}px (viewport: ${VIEWPORT.height}px)`);
        console.log(`      Min-Height: ${styles.minHeight}`);
        console.log(`      Display: ${styles.display}, Justify: ${styles.justifyContent}`);
        console.log(`      Fills Viewport: ${fillsViewport ? 'Yes' : 'NO - TOO SHORT'}`);
        console.log('');

        // Screenshot this section
        await el.screenshot({ path: `screenshots/${section.name.toLowerCase()}.png` });
      } else {
        console.log(`[SKIP] ${section.name}: Selector not found`);
      }
    } catch (e) {
      console.log(`[ERROR] ${section.name}: ${e.message}`);
    }
  }

  // Check for spacing issues
  console.log('--- SPACING ANALYSIS ---\n');

  const allSections = await page.$$('section');
  let totalHeight = 0;
  for (let i = 0; i < allSections.length; i++) {
    const height = await allSections[i].evaluate(e => e.offsetHeight);
    totalHeight += height;
    console.log(`Section ${i + 1}: ${height}px`);
  }

  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log(`\nTotal sections height: ${totalHeight}px`);
  console.log(`Page scroll height: ${pageHeight}px`);
  console.log(`Expected min (6 sections * viewport): ${VIEWPORT.height * 6}px`);

  if (totalHeight < VIEWPORT.height * 5) {
    console.log('\n*** WARNING: Sections are NOT filling full viewport! ***');
  }

  // Check CSS classes on sections
  console.log('\n--- CSS CLASS CHECK ---\n');
  const sectionClasses = await page.evaluate(() => {
    const sections = document.querySelectorAll('section');
    return Array.from(sections).map((s, i) => ({
      index: i + 1,
      hasMinHScreen: s.className.includes('min-h-screen'),
      hasFlex: s.className.includes('flex'),
      hasJustifyCenter: s.className.includes('justify-center'),
      classes: s.className.substring(0, 80) + '...'
    }));
  });

  for (const sec of sectionClasses) {
    const status = sec.hasMinHScreen ? 'PASS' : 'FAIL';
    console.log(`[${status}] Section ${sec.index}:`);
    console.log(`      min-h-screen: ${sec.hasMinHScreen}`);
    console.log(`      flex: ${sec.hasFlex}`);
    console.log(`      justify-center: ${sec.hasJustifyCenter}`);
  }

  await browser.close();

  console.log('\n' + '='.repeat(60));
  console.log('Screenshots saved to ./screenshots/');
  console.log('='.repeat(60));
}

runTests().catch(console.error);
