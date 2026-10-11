import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const html = await readFile(new URL('index.html', root), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'HTML IDs must be unique');
for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(id), `Missing anchor: ${id}`);
const files = [...html.matchAll(/(?:src|href)="(assets\/[^"#]+)"/g)].map(match => match[1]);
for (const css of ['assets/base.css', 'assets/home.css']) {
  const source = await readFile(new URL(css, root), 'utf8');
  for (const [, path] of source.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)) await access(new URL(path, new URL(css, root)));
}
for (const file of files) await access(new URL(file, root));
console.log(`Checked ${ids.length} anchors and all referenced images, styles, scripts, and fonts.`);
