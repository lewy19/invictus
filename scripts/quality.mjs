import fs from 'node:fs';
import path from 'node:path';
import { GUIDES } from '../src/data.js';
import { TOOLS } from '../src/tools.js';

const failures = [];
const words = value => String(value).trim().split(/\s+/).filter(Boolean).length;
const seen = new Map();
for (const guide of GUIDES) {
  const count = guide.body.reduce((total, block) => total + words(typeof block === 'string' ? block : `${block.h} ${block.p}`), 0);
  if (count < 900 || count > 1400) failures.push(`${guide.slug}: guide has ${count} words (required 900–1,400)`);
  for (const block of guide.body) {
    const paragraph = (typeof block === 'string' ? block : block.p).toLowerCase().replace(/\s+/g, ' ').trim();
    if (seen.has(paragraph)) failures.push(`${guide.slug}: paragraph duplicates ${seen.get(paragraph)}`);
    else seen.set(paragraph, guide.slug);
  }
}
for (const tool of TOOLS) {
  const count = words(tool.explanation);
  if (count < 150 || count > 300) failures.push(`${tool.slug}: explanation has ${count} words (required 150–300)`);
}
function scan(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) scan(file);
    else if (/\.(html|xml|txt|js|css|json)$/i.test(entry.name) && fs.readFileSync(file, 'utf8').includes('YOURDOMAIN')) failures.push(`${file}: contains forbidden placeholder YOURDOMAIN`);
  }
}
scan('dist');
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Quality gate passed: ${GUIDES.length} guides; ${TOOLS.length} tool explainers; dist has no YOURDOMAIN.`);
