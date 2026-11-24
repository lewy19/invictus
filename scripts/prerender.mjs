import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import { TOOLS } from '../src/tools.js';
import { GUIDES } from '../src/data.js';
const routes=['/','/tools','/guides','/methodology','/about','/contact','/privacy','/terms',...TOOLS.map(t=>'/tools/'+t.slug),...GUIDES.map(g=>'/guides/'+g.slug)];
const vite=await createServer({server:{middlewareMode:true},appType:'custom'});
try {
 const {default:App}=await vite.ssrLoadModule('/src/App.jsx');
 const {HelmetProvider}=await vite.ssrLoadModule('react-helmet-async');
 const base=fs.readFileSync('dist/index.html','utf8').replace(/\s*<title>[\s\S]*?<\/title>/,'').replace(/\s*<meta name="description"[^>]*>/,'');
 for(const route of routes) {
  const context={};
  const html=renderToString(React.createElement(HelmetProvider,{context},React.createElement(StaticRouter,{location:route},React.createElement(App))));
  const h=context.helmet;
  const head=[h.title.toString(),h.meta.toString(),h.link.toString(),h.script.toString()].filter(Boolean).join('\n');
  const page=base.replace('<div id="root"></div>','<div id="root">'+html+'</div>').replace('</head>',head+'\n</head>');
  const file=route==='/'?path.join('dist','index.html'):path.join('dist',route.slice(1),'index.html');
  fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,page);
 }
 console.log('prerendered '+routes.length+' routes');
} finally {await vite.close()}







