const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const products = [
  { handle: 'round-wall-mixer-small-pin-lever-tiger-bronze-gold', sku: 'MW03S-FIN-BB' },
  { handle: 'round-wall-mixer-short-pin-lever-finish-set-gun-metal', sku: 'MW03S-FIN-PVDGM' },
  { handle: 'wall-mixer-matt-black', sku: 'MW03S-FIN' },
  { handle: 'round-wall-mixer-tiger-bronze-gold', sku: 'MW03-FIN-BB' },
  { handle: 'round-wall-mixer-finish-set-gun-metal', sku: 'MW03-FIN-PVDGM' },
  { handle: 'round-wall-mixer-polished-chrome', sku: 'MW03-FIN-C' },
  { handle: 'round-diverter-mixer-tiger-bronze', sku: 'MW07TS-FIN-BB' },
  { handle: 'round-diverter-mixer-mw07ts-champagne', sku: 'MW07TS-FIN-CH' },
  { handle: 'round-gun-metal-diverter-mixer-finish-set', sku: 'MW07TS-FIN-PVDGM' },
  { handle: 'round-diverter-mixer-finish-set-matte-black', sku: 'MW07-FIN' },
  { handle: 'round-diverter-mixer-finish-set-champagne', sku: 'MW07-FIN-CH' },
  { handle: 'round-diverter-mixer-finish-set-gun-metal', sku: 'MW07-FIN-PVDGM' },
  { handle: 'round-diverter-mixer-finish-set-polished-chrome', sku: 'MW07-FIN-C' },
  { handle: 'round-curved-wall-spout-tiger-bronze', sku: 'MS05-BB' },
  { handle: 'round-curved-spout-gun-metal', sku: 'MS05-PVDGM' },
  { handle: 'round-curved-wall-spout-chrome', sku: 'MS05-C' },
  { handle: 'round-curved-wall-spout-matte-black-130mm', sku: 'MS05-130' },
  { handle: 'round-curved-wall-spout-tiger-bronze-130mm', sku: 'MS05-130-BB' },
  { handle: 'round-curved-spout-champagne-130mm', sku: 'MS05-130-CH' },
  { handle: 'round-curved-spout-130mm-polished-chrome', sku: 'MS05-130-C' },
  { handle: 'concealed-body-for-wall-mixers', sku: 'MW13BDY' },
  { handle: 'concealed-body-for-diverter-mixers', sku: 'MW27BDY' },
  { handle: 'wall-diverter-mixer-25mm-extension-set', sku: 'MW27BDY-EXT' },
  { handle: 'wall-mixer-25mm-extension-set', sku: 'MW13BDY-EXT' },
  { handle: 'round-shower-hose-tiger-bronze', sku: 'MP02-BR-BB' },
  { handle: 'round-shower-hose-champagne', sku: 'MP02-BR-CH' },
  { handle: 'round-shower-hose-gun-metal', sku: 'MP02-BR-PVDGM' },
  { handle: 'copy-of-round-shower-hose-polished-chrome', sku: 'MP02-BR-C' },
  { handle: 'round-shower-bracket-swivel-matte-black', sku: 'MP07Z' },
];

async function scrapeImages(page, sku, handle) {
  const results = [];

  // --- Try meirstore.nl ---
  const searchUrl = `https://meirstore.nl/nl/zoeken?q=${encodeURIComponent(sku)}`;
  console.log(`  [meirstore] Searching: ${searchUrl}`);

  try {
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(1500);

    // Find first product link in search results
    const productLink = await page.$('a[href*="/nl/"]');
    // Look for product cards / search result links more specifically
    const links = await page.$$eval('a', els =>
      els
        .map(el => el.href)
        .filter(href =>
          href.includes('meirstore.nl/nl/') &&
          !href.includes('zoeken') &&
          !href.includes('categorie') &&
          href.split('/').length > 5
        )
    );

    if (links.length > 0) {
      const productUrl = links[0];
      console.log(`  [meirstore] Found product page: ${productUrl}`);
      await page.goto(productUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForTimeout(1500);

      // Extract product images - try multiple selectors
      const images = await page.$$eval(
        '.product-image img, .product-gallery img, .swiper-slide img, .product__media img, [data-media-type="image"] img, .product-single__photo img, figure img',
        imgs => imgs
          .map(img => img.src || img.dataset.src || img.dataset.lazySrc)
          .filter(src => src && src.startsWith('http') && !src.includes('placeholder'))
      );

      // Also try to get high-res versions from srcset or data attributes
      const imagesSrcset = await page.$$eval(
        '.product-image img, .product-gallery img, .swiper-slide img, .product__media img, [data-media-type="image"] img, .product-single__photo img, figure img',
        imgs => imgs.flatMap(img => {
          const sources = [];
          if (img.dataset.src) sources.push(img.dataset.src);
          if (img.src) sources.push(img.src);
          if (img.srcset) {
            const largest = img.srcset.split(',')
              .map(s => s.trim().split(' ')[0])
              .filter(s => s.startsWith('http'))
              .pop();
            if (largest) sources.push(largest);
          }
          return sources;
        }).filter(src => src && src.startsWith('http') && !src.includes('placeholder'))
      );

      // Merge and deduplicate
      const allImages = [...new Set([...images, ...imagesSrcset])];

      if (allImages.length > 0) {
        allImages.forEach((src, i) => {
          // Upgrade to full resolution (remove size suffixes like _200x200)
          const fullSrc = src.replace(/_([\d]+x[\d]*|x[\d]+)\.(jpg|png|webp)/i, '.$2');
          results.push({ handle, src: fullSrc, position: i + 1, source: 'meirstore' });
        });
        console.log(`  [meirstore] Found ${allImages.length} images for ${sku}`);
        return results;
      }
    } else {
      console.log(`  [meirstore] No product links found for ${sku}`);
    }
  } catch (err) {
    console.log(`  [meirstore] Error for ${sku}: ${err.message}`);
  }

  // --- Fallback: mastello.nl ---
  const mastelloSearch = `https://www.mastello.nl/zoeken?type=product&q=${encodeURIComponent(sku)}`;
  console.log(`  [mastello] Searching: ${mastelloSearch}`);
  try {
    await page.goto(mastelloSearch, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(1500);

    const mastelloLinks = await page.$$eval('a', els =>
      els
        .map(el => el.href)
        .filter(href =>
          href.includes('mastello.nl') &&
          (href.includes('/products/') || href.includes('/nl/')) &&
          !href.includes('zoeken')
        )
    );

    if (mastelloLinks.length > 0) {
      const productUrl = mastelloLinks[0];
      console.log(`  [mastello] Found product page: ${productUrl}`);
      await page.goto(productUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForTimeout(1500);

      const images = await page.$$eval(
        '.product__media img, .product-image img, .product-gallery img, [data-media-type="image"] img, .product-single__photo img, figure img, .swiper-slide img',
        imgs => imgs
          .map(img => img.src || img.dataset.src)
          .filter(src => src && src.startsWith('http') && !src.includes('placeholder'))
      );

      const allImages = [...new Set(images)];
      if (allImages.length > 0) {
        allImages.forEach((src, i) => {
          const fullSrc = src.replace(/_([\d]+x[\d]*|x[\d]+)\.(jpg|png|webp)/i, '.$2');
          results.push({ handle, src: fullSrc, position: i + 1, source: 'mastello' });
        });
        console.log(`  [mastello] Found ${allImages.length} images for ${sku}`);
        return results;
      }
    }
  } catch (err) {
    console.log(`  [mastello] Error for ${sku}: ${err.message}`);
  }

  console.log(`  !! No images found for ${sku}`);
  return [];
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  const rows = [['Handle', 'Image Src', 'Image Position']];
  const notFound = [];

  for (const product of products) {
    console.log(`\n[${product.sku}] Processing ${product.handle}`);
    const images = await scrapeImages(page, product.sku, product.handle);
    if (images.length === 0) {
      notFound.push(product.sku);
    }
    for (const img of images) {
      rows.push([img.handle, img.src, img.position]);
    }
    // Small delay between products
    await page.waitForTimeout(500);
  }

  await browser.close();

  const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
  const outPath = path.join('C:\\Users\\samue\\Downloads', 'images_found.csv');
  fs.writeFileSync(outPath, csv, 'utf8');

  console.log(`\n✓ CSV written to: ${outPath}`);
  console.log(`✓ Total rows (excl. header): ${rows.length - 1}`);
  if (notFound.length > 0) {
    console.log(`\n!! No images found for ${notFound.length} SKUs:`);
    notFound.forEach(s => console.log(`   - ${s}`));
  }
})();
