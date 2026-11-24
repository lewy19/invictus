import { GUIDES } from '../src/data.js';
const count = text => text.trim().split(/\s+/).filter(Boolean).length;
for (const guide of GUIDES) {
  const total = guide.body.reduce((sum, item) => sum + count(typeof item === 'string' ? item : `${item.h} ${item.p}`), 0);
  console.log(`${guide.slug}: ${total}`);
}
