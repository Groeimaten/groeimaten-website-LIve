const https = require('https');
const fs = require('fs');
const path = require('path');

const fontsDir = path.join(__dirname, 'fonts');

// Fetch Google Fonts CSS with modern UA to get woff2 URLs
const googleFontsUrl = 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,300;1,9..40,400&display=swap';

function fetchText(url, headers = {}) {
    return new Promise((resolve, reject) => {
        const options = new URL(url);
        options.headers = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/125.0 Safari/537.36', ...headers };
        https.get(options, (res) => {
            let data = '';
            res.on('data', c => data += c);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 Chrome/125.0' } }, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                file.close();
                return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
            }
            res.pipe(file);
            file.on('finish', () => { file.close(); resolve(dest); });
        }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
    });
}

async function main() {
    const css = await fetchText(googleFontsUrl);

    // Extract all woff2 entries: url + descriptors
    const blockRegex = /\/\*\s*([\w\s-]+)\s*\*\/[\s\S]*?@font-face\s*\{([^}]+)\}/g;
    const urlRegex = /src:\s*url\(([^)]+)\)\s*format\('woff2'\)/;
    const weightRegex = /font-weight:\s*(\S+)/;
    const styleRegex = /font-style:\s*(\S+)/;

    const downloads = [];
    let m;
    while ((m = blockRegex.exec(css)) !== null) {
        const subset = m[1].trim().toLowerCase().replace(/\s+/g, '-');
        const block = m[2];

        if (!subset.includes('latin') || subset.includes('latin-ext')) continue; // only latin

        const urlM = block.match(urlRegex);
        const weightM = block.match(weightRegex);
        const styleM = block.match(styleRegex);
        if (!urlM || !weightM) continue;

        const url = urlM[1];
        const weight = weightM[1];
        const style = styleM ? styleM[1] : 'normal';
        const filename = `dm-sans-${weight}-${style}.woff2`;
        downloads.push({ url, filename, weight, style });
    }

    // Download unique files
    const seen = new Set();
    for (const item of downloads) {
        if (seen.has(item.filename)) continue;
        seen.add(item.filename);
        const dest = path.join(fontsDir, item.filename);
        await downloadFile(item.url, dest);
        const size = fs.statSync(dest).size;
        console.log(`✓ ${item.filename} — ${(size/1024).toFixed(0)}KB (weight: ${item.weight}, style: ${item.style})`);
    }

    // Output @font-face CSS
    console.log('\n--- @font-face CSS voor main.css ---');
    for (const item of [...seen].sort()) {
        const [, weight, style] = item.match(/dm-sans-(\S+)-(\S+)\.woff2/) || [];
        if (weight && style) {
            console.log(`@font-face {
    font-family: 'DM Sans';
    font-style: ${style};
    font-weight: ${weight};
    font-display: swap;
    src: url('../fonts/${item}') format('woff2');
}`);
        }
    }
}

main().catch(console.error);
