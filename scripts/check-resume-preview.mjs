import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const pdf = readFileSync(new URL('public/Portfolio_Resume.pdf', root));
const preview = JSON.parse(readFileSync(new URL('src/data/resume-preview.json', root), 'utf8'));

if (createHash('sha256').update(pdf).digest('hex') !== preview.sourceSha256) {
  throw new Error('The resume preview is out of date. Run npm run resume:preview after replacing the PDF.');
}
if (!Array.isArray(preview.pages) || preview.pages.length === 0) {
  throw new Error('The resume preview has no pages. Run npm run resume:preview.');
}
for (const page of preview.pages) {
  const image = new URL(`src/assets/resume/${page.image}`, root);
  if (!existsSync(image)) throw new Error(`Missing resume preview: ${fileURLToPath(image)}`);
}
console.log('Resume preview matches the original PDF.');
