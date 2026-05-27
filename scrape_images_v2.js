const https = require('https');
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

function fetchJSON(url) {
  return new Promise((resolve) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; scraper/1.0)' }
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        // Follow redirect
        return fetchJSON(res.headers.location).then(resolve);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, data: JSON.parse(data) }); }
        catch { resolve({ status: res.statusCode, data: null }); }
      });
    });
    req.on('error', () => resolve({ status: 0, data: null }));
    req.setTimeout(15000, () => { req.destroy(); resolve({ status: 0, data: null }); });
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// Build mastello SKU-to-handle map via their products.json
async function buildMastelloMap(skus) {
  const map = {};
  let page = 1;
  while (true) {
    const res = await fetchJSON(`https://www.mastello.nl/products.json?limit=250&page=${page}`);
    if (!res.data || !res.data.products || res.data.products.length === 0) break;
    for (const p of res.data.products) {
      for (const v of (p.variants || [])) {
        if (skus.includes(v.sku)) {
          map[v.sku] = p.handle;
          console.log(`  [mastello map] ${v.sku} → ${p.handle}`);
        }
      }
    }
    if (res.data.products.length < 250) break;
    page++;
    await sleep(300);
  }
  return map;
}

(async () => {
  const skus = products.map(p => p.sku);

  // Build mastello lookup table
  console.log('Building mastello SKU map...');
  const mastelloMap = await buildMastelloMap(skus);
  console.log(`Mastello map: ${Object.keys(mastelloMap).length} SKUs found\n`);

  const rows = [['Handle', 'Image Src', 'Image Position']];
  const notFound = [];

  for (const product of products) {
    console.log(`[${product.sku}] ${product.handle}`);
    const seenFilenames = new Set();
    let combined = [];

    // Helper: extract filename from CDN URL for deduplication
    const filename = url => url.split('/').pop().split('?')[0];

    // 1. Fetch from meirstore.nl
    const meirUrl = `https://meirstore.nl/products/${product.handle}.json`;
    const meirRes = await fetchJSON(meirUrl);
    if (meirRes.status === 200 && meirRes.data?.product?.images?.length) {
      for (const img of meirRes.data.product.images) {
        const src = img.src.replace(/\?v=\d+$/, '');
        const fn = filename(src);
        if (!seenFilenames.has(fn)) { seenFilenames.add(fn); combined.push(src); }
      }
      console.log(`  ✓ meirstore: ${combined.length} images`);
    } else {
      console.log(`  - meirstore: not found (status ${meirRes.status})`);
    }

    // 2. ALWAYS also fetch from mastello.nl and merge unique images
    const mastelloHandle = mastelloMap[product.sku];
    if (mastelloHandle) {
      const mastelloUrl = `https://www.mastello.nl/products/${mastelloHandle}.json`;
      const mastelloRes = await fetchJSON(mastelloUrl);
      if (mastelloRes.status === 200 && mastelloRes.data?.product?.images?.length) {
        let added = 0;
        for (const img of mastelloRes.data.product.images) {
          const src = img.src.replace(/\?v=\d+$/, '');
          const fn = filename(src);
          if (!seenFilenames.has(fn)) { seenFilenames.add(fn); combined.push(src); added++; }
        }
        console.log(`  ✓ mastello: +${added} extra images (total: ${combined.length})`);
      }
    }

    const images = combined.map((src, i) => ({ src, position: i + 1 }));

    if (images.length === 0) {
      notFound.push(product.sku);
    }

    for (const img of images) {
      rows.push([product.handle, img.src, img.position]);
    }

    await sleep(200);
  }

  const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\r\n');
  const outPath = path.join('C:\\Users\\samue\\Downloads', 'images_found.csv');
  fs.writeFileSync(outPath, csv, 'utf8');

  console.log(`\n✓ CSV written to: ${outPath}`);
  console.log(`✓ Total image rows: ${rows.length - 1}`);
  if (notFound.length > 0) {
    console.log(`\n!! No images found for ${notFound.length} SKUs:`);
    notFound.forEach(s => console.log(`   - ${s}`));
  } else {
    console.log('\n✓ All 29 products have images!');
  }
})();
