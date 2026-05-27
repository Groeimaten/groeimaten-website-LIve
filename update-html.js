const fs = require('fs');
const path = require('path');

const htmlFiles = [
    'index.html',
    'diensten.html',
    'over-ons.html',
    'cases.html',
    'prijzen.html',
    'contact.html',
];

// Image replacements: old → new
const imageReplacements = [
    ['founders-light.jpg', 'founders-light.webp'],
    ['founders-office.jpg', 'founders-office.webp'],
    ['founders-laptop.jpg', 'founders-laptop.webp'],
    ['founders-strategy.jpg', 'founders-strategy.webp'],
    ['founders-hero.jpg', 'founders-hero.webp'],
    ['founders-close.jpg', 'founders-close.webp'],
    ['founders-discuss.jpg', 'founders-discuss.webp'],
    ['founders-working.jpg', 'founders-working.webp'],
    ['founders-handshake.jpeg', 'founders-handshake.webp'],
    ['thomas.jpg', 'thomas.webp'],
    ['jelle.jpg', 'jelle.webp'],
    ['thomas-portrait.jpg', 'thomas-portrait.webp'],
    ['jelle-portrait.jpg', 'jelle-portrait.webp'],
    ['thomas-casual.jpg', 'thomas-casual.webp'],
    ['jelle-casual.jpg', 'jelle-casual.webp'],
    ['over-ons-thomas.jpeg', 'over-ons-thomas.webp'],
    ['behind-the-scenes.jpeg', 'behind-the-scenes.webp'],
    ['team-jelle.jpeg', 'team-jelle.webp'],
    ['magazine-article.png', 'magazine-article.webp'],
];

// Font preload block to insert before first <link rel="stylesheet">
const fontPreloads = `    <link rel="preload" href="fonts/playfair-400.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="fonts/playfair-400-italic.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="fonts/dm-sans-400-normal.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="fonts/dm-sans-700-normal.woff2" as="font" type="font/woff2" crossorigin>`;

for (const file of htmlFiles) {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) { console.log(`Skip: ${file} niet gevonden`); continue; }

    let html = fs.readFileSync(filePath, 'utf8');

    // 1. Remove Google Fonts preconnect + link lines (various patterns)
    // Pattern 1: preconnect to fonts.googleapis.com
    html = html.replace(/[ \t]*<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com"[^>]*>\n?/g, '');
    html = html.replace(/[ \t]*<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com"[^>]*>\n?/g, '');
    // Pattern 2: blocking stylesheet link to Google Fonts
    html = html.replace(/[ \t]*<link href="https:\/\/fonts\.googleapis\.com[^"]*" rel="stylesheet"[^>]*>\n?/g, '');
    // Pattern 3: async preload pattern (index.html style)
    html = html.replace(/[ \t]*<link rel="preload" as="style" href="https:\/\/fonts\.googleapis\.com[^"]*"[^>]*>\n?/g, '');
    html = html.replace(/[ \t]*<noscript><link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^"]*"><\/noscript>\n?/g, '');

    // 2. Replace image paths
    for (const [from, to] of imageReplacements) {
        html = html.split(from).join(to);
    }

    // 3. Add font preloads before first <link rel="stylesheet" href="css/">
    if (!html.includes('rel="preload" href="fonts/')) {
        html = html.replace(
            /(<link rel="stylesheet" href="css\/main\.css">)/,
            `${fontPreloads}\n    $1`
        );
    }

    // 4. Remove inline --font-serif variable that still references 'Playfair Display' (already in main.css)
    //    Keep the inline style block but remove the extra font-serif declaration if present
    // (Actually fine to leave — it overrides to same value, no harm)

    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✓ ${file} bijgewerkt`);
}
