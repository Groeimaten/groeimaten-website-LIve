const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  // Test search on meirstore
  console.log('=== MEIRSTORE SEARCH ===');
  await page.goto('https://meirstore.nl/nl/zoeken?q=MW03S-FIN-BB', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page.waitForTimeout(2000);

  // Get all links with href
  const allLinks = await page.$$eval('a[href]', els =>
    els.map(el => ({ href: el.href, text: el.innerText?.trim().slice(0, 60), class: el.className?.slice(0, 80) }))
      .filter(l => l.href.includes('meirstore'))
      .slice(0, 30)
  );
  console.log('All meirstore links:');
  allLinks.forEach(l => console.log(`  ${l.href} | class="${l.class}" | text="${l.text}"`));

  // Get page title
  const title = await page.title();
  console.log('\nPage title:', title);

  // Get the URL after navigation
  console.log('Final URL:', page.url());

  // Check for product grid items
  const productCards = await page.$$eval(
    '.product-item, .product-card, .grid__item, [class*="product"], article',
    els => els.slice(0, 5).map(el => ({
      tag: el.tagName,
      class: el.className?.slice(0, 100),
      html: el.outerHTML?.slice(0, 200)
    }))
  );
  console.log('\nProduct cards found:', productCards.length);
  productCards.forEach(c => console.log(`  ${c.tag}.${c.class}\n  ${c.html}\n`));

  // Try mastello
  console.log('\n=== MASTELLO SEARCH ===');
  await page.goto('https://www.mastello.nl/zoeken?type=product&q=MW03S-FIN-BB', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page.waitForTimeout(2000);

  const mastelloTitle = await page.title();
  console.log('Page title:', mastelloTitle);
  console.log('Final URL:', page.url());

  const mastelloLinks = await page.$$eval('a[href]', els =>
    els.map(el => ({ href: el.href, text: el.innerText?.trim().slice(0, 60) }))
      .filter(l => l.href.includes('mastello'))
      .slice(0, 20)
  );
  console.log('Mastello links:');
  mastelloLinks.forEach(l => console.log(`  ${l.href} | "${l.text}"`));

  await browser.close();
})();
