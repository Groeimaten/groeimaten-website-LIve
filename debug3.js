const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  const queries = ['MW03S', 'MW03S-FIN', 'round wall mixer finish', 'afbouwdeel', 'MW03'];

  console.log('=== MEIRSTORE SHOPIFY API ===');
  for (const q of queries) {
    const url = `https://meirstore.nl/search/suggest.json?q=${encodeURIComponent(q)}&resources[type]=product&resources[limit]=5`;
    const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    const body = await page.evaluate(() => document.body.innerText);
    const data = JSON.parse(body);
    const products = data?.resources?.results?.products || [];
    console.log(`\nQuery "${q}": ${products.length} results`);
    products.forEach(p => console.log(`  - ${p.title} | url: ${p.url} | sku?`));
  }

  console.log('\n=== MASTELLO SHOPIFY API ===');
  for (const q of ['MW03S-FIN-BB', 'MW03S', 'meir round']) {
    const url = `https://www.mastello.nl/search/suggest.json?q=${encodeURIComponent(q)}&resources[type]=product&resources[limit]=5`;
    const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    const body = await page.evaluate(() => document.body.innerText);
    const data = JSON.parse(body);
    const products = data?.resources?.results?.products || [];
    console.log(`\nQuery "${q}": ${products.length} results`);
    products.forEach(p => console.log(`  - ${p.title} | url: ${p.url}`));
  }

  // Try browsing the parts collection on meirstore
  console.log('\n=== MEIRSTORE PARTS COLLECTION ===');
  const res = await page.goto('https://meirstore.nl/nl/collections/parts.json?limit=5', { waitUntil: 'domcontentloaded', timeout: 15000 });
  const body = await page.evaluate(() => document.body.innerText);
  const data = JSON.parse(body);
  console.log('Sample products:');
  (data?.products || []).slice(0, 5).forEach(p => {
    console.log(`  - ${p.title} | handle: ${p.handle}`);
    (p.variants || []).forEach(v => console.log(`    variant: ${v.title} | sku: ${v.sku}`));
  });

  // Try meirstore products API to find the finish sets
  console.log('\n=== MEIRSTORE PRODUCTS SEARCH ===');
  const res2 = await page.goto('https://meirstore.nl/nl/products.json?limit=50&page=1', { waitUntil: 'domcontentloaded', timeout: 15000 });
  const body2 = await page.evaluate(() => document.body.innerText);
  const data2 = JSON.parse(body2);
  const meir_products = (data2?.products || []).filter(p =>
    p.title?.toLowerCase().includes('fin') ||
    p.variants?.some(v => v.sku?.includes('FIN'))
  );
  console.log(`Found ${meir_products.length} products with FIN in title/sku:`);
  meir_products.slice(0, 5).forEach(p => {
    console.log(`  - ${p.title} | handle: ${p.handle}`);
    (p.variants || []).forEach(v => console.log(`    variant: ${v.title} | sku: ${v.sku}`));
  });

  await browser.close();
})();
