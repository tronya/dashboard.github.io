if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/CfVDm4PD90ngsD0qknxH5/_buildManifest.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/CfVDm4PD90ngsD0qknxH5/_middlewareManifest.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/CfVDm4PD90ngsD0qknxH5/_ssgManifest.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/2c796e83-23b9c3748c6d6112.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/324-dd424d83b5c1cb4c.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/388-6b4be4e1776f2446.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/389-8f216afb0c0c1248.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/493-9c2c020d66294886.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/582-8b9941f1384ec0ea.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/699-c7644f18f236693d.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/75fc9c18-4d2f0a9f494a9dad.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/792-b14802821b02e129.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/883-84f12203d96c96d0.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/main-a6735ee9e45730aa.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/pages/_app-29081905f85e12d6.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/pages/_error-2f883067a14f4c4a.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/pages/groups/%5Bgroups%5D-d8cc9bd5e24fb4a6.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/pages/groups/create-8bd6cf07f00260ed.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/pages/index-0fecc61042d853ba.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/pages/login-841129deda59ce6b.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/pages/user/favorites-d0fc76f4c4dc27bb.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/pages/user/profile-61059386c0a52208.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/chunks/webpack-6b9433e581e25399.js",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/css/06d00023d4655ce2.css",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/_next/static/css/589a36a5874cf99e.css",revision:"CfVDm4PD90ngsD0qknxH5"},{url:"/favicon.ico",revision:"60ff2f13f26af59334b472bfe5b94369"},{url:"/logo_x192.png",revision:"513a915647da33c6b8e52de2f16f3330"},{url:"/logo_x384.png",revision:"9d148a1c64b13a3ca5d5a4a034b7201a"},{url:"/logo_x512.png",revision:"b78aa0906e2633c42cb126dd046a70c1"},{url:"/manifest.json",revision:"998cdbb8fa2735ede015a97e26ded4d4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));