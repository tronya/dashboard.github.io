if(!self.define){let e,s={};const c=(c,t)=>(c=new URL(c+".js",t).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(t,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const r=e=>c(e,n),o={module:{uri:n},exports:a,require:r};s[n]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(i(...e),a)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/cUNciUBNlv9LCFCThkcGt/_buildManifest.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/cUNciUBNlv9LCFCThkcGt/_middlewareManifest.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/cUNciUBNlv9LCFCThkcGt/_ssgManifest.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/162-75b1c951dad7e867.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/217-8a3d650d0025ec86.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/229-16d08d2a24d700df.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/2c796e83-23b9c3748c6d6112.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/371-7db98ec5459f5d12.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/418-5512943ca29a9b5f.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/481-8de134990ca6fd48.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/701-fdc39d9cde806645.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/75fc9c18-4d2f0a9f494a9dad.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/792-b14802821b02e129.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/953-d65a789a02c18803.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/992-762f61b009a04f8d.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/main-a6735ee9e45730aa.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/pages/_app-20f4f227118eb2ef.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/pages/_error-2f883067a14f4c4a.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/pages/groups/%5Bgroups%5D-8362eed50f927df4.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/pages/groups/create-873b816b16af9d4a.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/pages/index-48739e4b181f819b.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/pages/login-d37740a1bf6d3d9c.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/pages/user/favorites-eef7e89ec3996eff.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/pages/user/profile-c9a649e37eccc7a0.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/chunks/webpack-343cc5b48ea601df.js",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/css/06d00023d4655ce2.css",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/_next/static/css/589a36a5874cf99e.css",revision:"cUNciUBNlv9LCFCThkcGt"},{url:"/favicon.ico",revision:"60ff2f13f26af59334b472bfe5b94369"},{url:"/logo_x192.png",revision:"513a915647da33c6b8e52de2f16f3330"},{url:"/logo_x384.png",revision:"9d148a1c64b13a3ca5d5a4a034b7201a"},{url:"/logo_x512.png",revision:"b78aa0906e2633c42cb126dd046a70c1"},{url:"/manifest.json",revision:"998cdbb8fa2735ede015a97e26ded4d4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
