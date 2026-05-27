const sharp = require('sharp');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');

const conversions = [
    // Hero images — 1920px breed, hoge kwaliteit
    { input: 'founders-light.jpg',    width: 1920, quality: 82 },
    { input: 'founders-office.jpg',   width: 1920, quality: 82 },
    { input: 'founders-laptop.jpg',   width: 1920, quality: 82 },
    // Content images — 1400px breed
    { input: 'founders-strategy.jpg', width: 1400, quality: 80 },
    { input: 'founders-hero.jpg',     width: 1400, quality: 80 },
    { input: 'founders-close.jpg',    width: 1200, quality: 80 },
    { input: 'founders-discuss.jpg',  width: 1200, quality: 78 },
    { input: 'founders-working.jpg',  width: 1400, quality: 78 },
    { input: 'founders-handshake.jpeg', width: 1200, quality: 80 },
    // Portraits — 800px breed
    { input: 'thomas.jpg',            width: 800,  quality: 82 },
    { input: 'jelle.jpg',             width: 800,  quality: 82 },
    { input: 'thomas-portrait.jpg',   width: 800,  quality: 82 },
    { input: 'jelle-portrait.jpg',    width: 800,  quality: 82 },
    { input: 'thomas-casual.jpg',     width: 800,  quality: 80 },
    { input: 'jelle-casual.jpg',      width: 800,  quality: 80 },
    // Overige
    { input: 'over-ons-thomas.jpeg',  width: 800,  quality: 82 },
    { input: 'behind-the-scenes.jpeg',width: 1200, quality: 80 },
    { input: 'team-jelle.jpeg',       width: 800,  quality: 82 },
    // PNG → WebP
    { input: 'magazine-article.png',  width: 1200, quality: 85 },
];

async function convert() {
    for (const item of conversions) {
        const inputPath = path.join(imagesDir, item.input);
        const outputName = item.input.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        const outputPath = path.join(imagesDir, outputName);

        try {
            const info = await sharp(inputPath)
                .resize({ width: item.width, withoutEnlargement: true })
                .webp({ quality: item.quality, effort: 4 })
                .toFile(outputPath);

            const inputSize = require('fs').statSync(inputPath).size;
            const savings = ((1 - info.size / inputSize) * 100).toFixed(0);
            console.log(`✓ ${outputName} — ${(info.size/1024).toFixed(0)}KB (was ${(inputSize/1024/1024).toFixed(1)}MB, -${savings}%)`);
        } catch (err) {
            console.error(`✗ ${item.input}: ${err.message}`);
        }
    }
}

convert();
