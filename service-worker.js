if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let o={};const r=e=>n(e,a),f={module:{uri:a},exports:o,require:r};s[a]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(i(...e),o)))}}define(["./workbox-0a446be4"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.js",revision:"90f17c950bf260cef9c9cd279e1ef67e"},{url:"icon.png",revision:"af5afcf427a05f9f2974c871e3e68251"},{url:"index.html",revision:"eda4ef751761a986500ae1b717f8ef85"},{url:"manifest.json",revision:"ddd2da02254b74a7696e5a6dbd8ab05e"},{url:"sample.png",revision:"f9b088b56d6deb495a68835a14167554"},{url:"style.css",revision:"bae19cf5c60caf8ae8f6b6cff4bf9924"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"images-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:html|css|js)$/,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[]}),"GET"),e.registerRoute(/\/api\/.*\/*.json/,new e.NetworkFirst({cacheName:"api-cache",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:3600})]}),"GET"),e.registerRoute(/.*/,new e.NetworkOnly({cacheName:"offline-cache",plugins:[{cacheWillUpdate:async({response:e})=>e&&200===e.status?e:caches.match("offline.html")}]}),"GET")}));
//# sourceMappingURL=service-worker.js.map