import { cp, mkdir, readFile, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
const html = await readFile(new URL('index.html', root), 'utf8');
const originals = new Set([...html.matchAll(/data-image="([^"]+)"/g)].map(([, name]) => fileURLToPath(new URL(`assets/${name}.png`, root))));
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(new URL('index.html', root), new URL('index.html', output));
// Keep source PNGs available for editing, but ship only responsive WebP assets.
await cp(new URL('assets/', root), new URL('assets/', output), {
  recursive: true,
  filter: source => !originals.has(source),
});
console.log(`Built static website: ${fileURLToPath(output)}`);
