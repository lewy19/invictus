import fs from 'node:fs';
import { SITE } from '../src/config.js';
import { TOOLS } from '../src/tools.js';
import { GUIDES } from '../src/data.js';
const paths=['/','/tools','/guides','/methodology','/about','/contact','/privacy','/terms',...TOOLS.map(t=>'/tools/'+t.slug),...GUIDES.map(g=>'/guides/'+g.slug)];
const xml='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+paths.map(p=>'  <url><loc>'+SITE.domain+p+'</loc></url>').join('\n')+'\n</urlset>\n';
fs.writeFileSync('public/sitemap.xml',xml);
console.log('sitemap: '+paths.length+' urls');

