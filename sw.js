if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let a={};const r=e=>n(e,i),o={module:{uri:i},exports:a,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(t(...e),a)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/220-7d7eb17ecf7549b8.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/241-c796811748bc52b3.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/255-2c08dd162b6eb172.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/2c796e83-50292833db2f9ec3.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/478-fbf7171b3a1370d7.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/48-234ad740e9dd0c4f.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/50-c175a158738cc318.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/573-f6902fbbd26b7328.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/584-3423d45f09382eba.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/651.c1e427124570bea0.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/727-668dc970507668ae.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/75fc9c18-404bbd6c974a5ba8.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/867-0025068ebc619eca.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/935-ba2c4c8606b6c7bb.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/framework-dc33c0b5493501f0.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/main-ec968a9fe59b558b.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/pages/_app-fcee0a16e8a9f515.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/pages/_error-d6f842417eba19a4.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/pages/groups-c53bbca3b990c005.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/pages/groups/%5Bid%5D-a6fa09f5473d8820.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/pages/groups/create-9d21e86bf4c617f9.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/pages/index-b3d8a1b7bf3226d8.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/pages/sign-in-e2a68e7c9c647796.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/pages/sign-up-ffb9958516aa5955.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/pages/user/favorites-137dfcfa09a42852.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/pages/user/profile-599fc39e92a8e0dd.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/chunks/webpack-1f380b751d4b4ba2.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/css/06d00023d4655ce2.css",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/css/cb04925fb251c1af.css",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/rJIlWIW6P40ncU4LKqc3W/_buildManifest.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/rJIlWIW6P40ncU4LKqc3W/_middlewareManifest.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/_next/static/rJIlWIW6P40ncU4LKqc3W/_ssgManifest.js",revision:"rJIlWIW6P40ncU4LKqc3W"},{url:"/favicon.ico",revision:"60ff2f13f26af59334b472bfe5b94369"},{url:"/logo_x192.png",revision:"513a915647da33c6b8e52de2f16f3330"},{url:"/logo_x384.png",revision:"9d148a1c64b13a3ca5d5a4a034b7201a"},{url:"/logo_x512.png",revision:"b78aa0906e2633c42cb126dd046a70c1"},{url:"/manifest.json",revision:"010b288cd99404cb7fe58371dc67e149"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
