import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE } from './config.js';
export function Seo({title,description,path='',schema}) {
 const full=title===SITE.name?title:title+' | '+SITE.name, canonical=SITE.domain+path;
 const data=schema==='article'?{'@context':'https://schema.org','@type':'Article',headline:title,description,author:{'@type':'Person',name:SITE.owner},mainEntityOfPage:canonical}:schema==='tool'?{'@context':'https://schema.org','@type':'WebApplication',name:title,description,applicationCategory:'UtilitiesApplication',operatingSystem:'Any',url:canonical}:null;
 return <Helmet><title>{full}</title><meta name="description" content={description}/><link rel="canonical" href={canonical}/><meta property="og:title" content={full}/><meta property="og:description" content={description}/>{data&&<script type="application/ld+json">{JSON.stringify(data)}</script>}</Helmet>;
}
export function AdSlot(){const live=SITE.adsenseClient.startsWith('ca-pub-')&&!SITE.adsenseClient.includes('XXXX')&&!SITE.adSlots.inline.includes('0000');const consented=typeof window!=='undefined'&&window.localStorage.getItem('invictus-consent')==='accepted';useEffect(()=>{if(!live||!consented)return;const s=document.createElement('script');s.async=true;s.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='+SITE.adsenseClient;s.crossOrigin='anonymous';document.head.appendChild(s);try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch{}},[live,consented]);if(!live||!consented)return null;return <aside className="ad" aria-label="Advertisement"><ins className="adsbygoogle" style={{display:'block'}} data-ad-client={SITE.adsenseClient} data-ad-slot={SITE.adSlots.inline} data-ad-format="auto" data-full-width-responsive="true"/></aside>}



