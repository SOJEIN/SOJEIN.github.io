import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = resolve(__dirname, '../public/preview.svg');
const outPath = resolve(__dirname, '../public/preview.png');

const svg = readFileSync(svgPath, 'utf-8');
const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
const pngData = resvg.render();
const pngBuffer = pngData.asPng();
writeFileSync(outPath, pngBuffer);

console.log(`✓ preview.png generado en public/preview.png (${pngBuffer.length} bytes)`);
