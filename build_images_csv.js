const fs = require('fs');
const path = require('path');

// Proper CSV parser
function parseCSV(text) {
  const rows = [];
  let row = [], field = '', inQuote = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i], next = text[i + 1];
    if (inQuote) {
      if (ch === '"' && next === '"') { field += '"'; i++; }
      else if (ch === '"') inQuote = false;
      else field += ch;
    } else {
      if (ch === '"') inQuote = true;
      else if (ch === ',') { row.push(field); field = ''; }
      else if (ch === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else if (ch === '\r') {}
      else field += ch;
    }
  }
  if (row.length) { row.push(field); rows.push(row); }
  return rows;
}

function escapeCSV(val) {
  const s = String(val ?? '');
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

function rowToCSV(fields) {
  return fields.map(escapeCSV).join(',');
}

// Load products_export.csv
const exportData = fs.readFileSync('C:/Users/samue/Downloads/products_export_tmp/products_export.csv', 'utf8');
const exportRows = parseCSV(exportData);
const header = exportRows[0]; // 46 columns
const COL_HANDLE = 0;
const COL_TITLE = 1;
const COL_IMAGE_SRC = 32;
const COL_IMAGE_POS = 33;
const COL_IMAGE_ALT = 34;

// Build map: handle → first product row (with all product data)
const productRowMap = {};
for (let i = 1; i < exportRows.length; i++) {
  const r = exportRows[i];
  const handle = r[COL_HANDLE];
  if (handle && !productRowMap[handle]) {
    productRowMap[handle] = [...r]; // clone
  }
}

// Load images_found.csv
const imagesData = fs.readFileSync('C:/Users/samue/Downloads/images_found.csv', 'utf8');
const imageRows = parseCSV(imagesData);
// Group by handle
const imagesByHandle = {};
for (let i = 1; i < imageRows.length; i++) {
  const [handle, src, pos] = imageRows[i];
  if (!handle) continue;
  if (!imagesByHandle[handle]) imagesByHandle[handle] = [];
  imagesByHandle[handle].push({ src, pos: parseInt(pos) });
}

// Our 29 handles in order
const handles = [
  'round-wall-mixer-small-pin-lever-tiger-bronze-gold',
  'round-wall-mixer-short-pin-lever-finish-set-gun-metal',
  'wall-mixer-matt-black',
  'round-wall-mixer-tiger-bronze-gold',
  'round-wall-mixer-finish-set-gun-metal',
  'round-wall-mixer-polished-chrome',
  'round-diverter-mixer-tiger-bronze',
  'round-diverter-mixer-mw07ts-champagne',
  'round-gun-metal-diverter-mixer-finish-set',
  'round-diverter-mixer-finish-set-matte-black',
  'round-diverter-mixer-finish-set-champagne',
  'round-diverter-mixer-finish-set-gun-metal',
  'round-diverter-mixer-finish-set-polished-chrome',
  'round-curved-wall-spout-tiger-bronze',
  'round-curved-spout-gun-metal',
  'round-curved-wall-spout-chrome',
  'round-curved-wall-spout-matte-black-130mm',
  'round-curved-wall-spout-tiger-bronze-130mm',
  'round-curved-spout-champagne-130mm',
  'round-curved-spout-130mm-polished-chrome',
  'concealed-body-for-wall-mixers',
  'concealed-body-for-diverter-mixers',
  'wall-diverter-mixer-25mm-extension-set',
  'wall-mixer-25mm-extension-set',
  'round-shower-hose-tiger-bronze',
  'round-shower-hose-champagne',
  'round-shower-hose-gun-metal',
  'copy-of-round-shower-hose-polished-chrome',
  'round-shower-bracket-swivel-matte-black',
];

const outputRows = [header];

for (const handle of handles) {
  const productRow = productRowMap[handle];
  const images = imagesByHandle[handle];

  if (!productRow) { console.warn(`WARN: handle not found in export: ${handle}`); continue; }
  if (!images || images.length === 0) { console.warn(`WARN: no images for: ${handle}`); continue; }

  const title = productRow[COL_TITLE];

  // First image: full product row with image fields filled in
  const firstRow = [...productRow];
  firstRow[COL_IMAGE_SRC] = images[0].src;
  firstRow[COL_IMAGE_POS] = '1';
  firstRow[COL_IMAGE_ALT] = title;
  outputRows.push(firstRow);

  // Additional images: only handle + image fields, rest empty
  for (let i = 1; i < images.length; i++) {
    const emptyRow = new Array(header.length).fill('');
    emptyRow[COL_HANDLE] = handle;
    emptyRow[COL_IMAGE_SRC] = images[i].src;
    emptyRow[COL_IMAGE_POS] = String(i + 1);
    emptyRow[COL_IMAGE_ALT] = title;
    outputRows.push(emptyRow);
  }

  console.log(`✓ ${handle}: ${images.length} images`);
}

const csv = outputRows.map(rowToCSV).join('\r\n');
const outPath = 'C:/Users/samue/Downloads/images_found.csv';
fs.writeFileSync(outPath, csv, 'utf8');

console.log(`\n✓ CSV geschreven: ${outPath}`);
console.log(`✓ Totaal rijen (excl. header): ${outputRows.length - 1}`);
