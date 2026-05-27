const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  // Test Shopify predictive search API on meirstore
  console.log('=== SHOPIFY SUGGEST API - meirstore ===');
  const res1 = await page.goto(
    'https://meirstore.nl/search/suggest.json?q=MW03S-FIN-BB&resources[type]=product&resources[limit]=5',
    { waitUntil: 'domcontentloaded', timeout: 20000 }
  );
  const body1 = await page.evaluate(() => document.body.innerText);
  console.log('Status:', res1.status());
  console.log('Response:', body1.slice(0, 800));

  // Try without locale
  console.log('\n=== meirstore /search ===');
  const res2 = await page.goto(
    'https://meirstore.nl/search?q=MW03S-FIN-BB&type=product',
    { waitUntil: 'networkidle', timeout: 25000 }
  );
  console.log('Status:', res2.status(), '| URL:', page.url());
  const links2 = await page.$$eval('a[href*="/products/"]', els => els.slice(0, 10).map(el => ({href: el.href, text: el.innerText?.trim().slice(0,60)})));
  console.log('Product links:', links2);

  // Try meirstore.nl/nl/search
  console.log('\n=== meirstore /nl/search ===');
  const res3 = await page.goto(
    'https://meirstore.nl/nl/search?q=MW03-FIN-BB&type=product',
    { waitUntil: 'networkidle', timeout: 25000 }
  );
  console.log('Status:', res3.status(), '| URL:', page.url());
  const links3 = await page.$$eval('a[href*="/products/"]', els => els.slice(0, 10).map(el => ({href: el.href, text: el.innerText?.trim().slice(0,60)})));
  console.log('Product links:', links3);

  // Try Shopify API on mastello
  console.log('\n=== SHOPIFY SUGGEST API - mastello ===');
  const res4 = await page.goto(
    'https://www.mastello.nl/search/suggest.json?q=MW03S-FIN-BB&resources[type]=product&resources[limit]=5',
    { waitUntil: 'domcontentloaded', timeout: 20000 }
  );
  const body4 = await page.evaluate(() => document.body.innerText);
  console.log('Status:', res4.status());
  console.log('Response:', body4.slice(0, 800));

  // Try mastello search
  console.log('\n=== mastello /search ===');
  const res5 = await page.goto(
    'https://www.mastello.nl/search?q=MW03S-FIN-BB&type=product',
    { waitUntil: 'networkidle', timeout: 25000 }
  );
  console.log('Status:', res5.status(), '| URL:', page.url());
  const links5 = await page.$$eval('a[href*="/products/"]', els => els.slice(0, 10).map(el => ({href: el.href, text: el.innerText?.trim().slice(0,60)})));
  console.log('Product links:', links5);

  await browser.close();
})();
