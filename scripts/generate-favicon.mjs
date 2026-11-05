import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../public');
const src = path.join(publicDir, 'r6-favicon-source.png');
const bg = { r: 255, g: 255, b: 255, alpha: 1 };

async function square(size, out) {
  await sharp(src)
    .resize(size, size, { fit: 'contain', background: bg })
    .png({ compressionLevel: 9, palette: size <= 32 })
    .toFile(out);
}

await square(16, path.join(publicDir, 'favicon-16.png'));
await square(32, path.join(publicDir, 'favicon-32.png'));
await square(180, path.join(publicDir, 'apple-touch-icon.png'));
await square(32, path.join(publicDir, 'favicon.ico'));

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="R6 Cheat">
  <rect width="64" height="64" fill="#ffffff"/>
  <image href="/favicon-32.png" width="64" height="64" preserveAspectRatio="xMidYMid meet"/>
</svg>
`;
writeFileSync(path.join(publicDir, 'favicon.svg'), svg);
console.log('Favicons generated from R6 logo.');
