import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
const page = await browser.newPage();
const cases = [
  ['kcse-mean', 'A\nA\nA\nA-\nA-\nA-\nA-', 'Mean grade A-'],
  ['gpa-cgpa', '3.7, 3\n3.3, 4\n4, 2', 'GPA: 3.59'],
  ['attachment-letter', 'Information Technology\nExample College\nMay to July 2027\nAmina Otieno\n0712345678', 'Amina Otieno'],
  ['cv-word-counter', 'Built a responsive page. Tested forms.', '6 words'],
  ['json-formatter', '{"course":"IT","year":2}', '"course": "IT"'],
  ['qr-generator', 'https://example.org/portfolio', null],
  ['word-counter', 'Build, test, and document.\n\nReview the result.', '7 words · 46 characters · 2 sentences · 2 paragraphs'],
  ['unit-converter', '2.4\nkm\nm', '2,400 m'],
  ['password-generator', '24', null],
  ['age-date-difference', '2005-10-10\n2025-10-24', '20 years, 0 months and 14 days (7319 total days)'],
  ['percentage-calculator', '15\n2400', '15% of 2400 = 360.00'],
];
const failures = [];
for (const [slug, input, expected] of cases) {
  await page.goto(`http://127.0.0.1:4173/tools/${slug}`);
  if (slug === 'qr-generator') {
    await page.locator('textarea').fill(input);
    if (await page.locator('svg').count() < 1) failures.push(`${slug}: no SVG preview`);
  } else {
    await page.locator('textarea').fill(input);
    await page.getByRole('button', { name: slug === 'json-formatter' ? 'Format and validate' : 'Calculate' }).click();
    const output = await page.locator('pre.result').textContent();
    if (expected && !output.includes(expected)) failures.push(`${slug}: expected ${expected}; got ${output}`);
  }
  console.log(`${slug}: checked`);
}
await page.goto('http://127.0.0.1:4173/tools/age-date-difference');
await page.locator('textarea').fill('2025-02-31\n2025-03-02');
await page.getByRole('button', { name: 'Calculate' }).click();
if (!(await page.locator('pre.result').textContent()).includes('Enter real calendar dates')) failures.push('age-date-difference: impossible date accepted');
await page.goto('http://127.0.0.1:4173/tools/image-compressor');
const imageBytes = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/p5sAAAAASUVORK5CYII=', 'base64');
await page.locator('input[type=file]').setInputFiles({ name: 'pixel.png', mimeType: 'image/png', buffer: imageBytes });
await page.waitForSelector('a[download="compressed.jpg"]');
if (!(await page.locator('img.preview').getAttribute('src')).startsWith('data:image/jpeg')) failures.push('image-compressor: no JPEG preview');
console.log('image-compressor: checked');
await browser.close();
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
