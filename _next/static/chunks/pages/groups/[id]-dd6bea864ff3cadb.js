(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{68082:function(e,r,t){"use strict";var n;t.d(r,{G:function(){return n}}),function(e){e.FAVORITES="favorites",e.GROUPS="groups",e.USERS="users",e.USERS_GEOLOCATION="usersGeolocation",e.CHATS="chats"}(n||(n={}))},45152:function(e,r,t){"use strict";t.d(r,{jA:function(){return v},YK:function(){return m}});var n=t(27812),o=t(59499),u=t(50029),i=t(87794),c=t.n(i),a=t(25321),s=t(92114),d=t(68082);function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var p=function(){var e=(0,u.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(0,a.hJ)(s.DB,d.G.GROUPS),!r){e.next=7;break}return e.next=4,(0,a.PL)((0,a.IO)(t,(0,a.ar)("users","array-contains",r)));case 4:return e.abrupt("return",e.sent);case 7:return e.next=9,(0,a.PL)((0,a.IO)(t));case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,u.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(r);case 2:return t=e.sent,n=[],t.forEach((function(e){var r=l({id:e.id},e.data());n.push(r)})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,u.Z)(c().mark((function e(r,t){var o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(o=t.user)&&void 0!==o&&o.uid){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,(0,a.ET)((0,a.hJ)(s.DB,d.G.GROUPS),l(l({},r),{},{users:[].concat((0,n.Z)(r.users),[t.user.uid]),userCreate:t.user.uid}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()},22320:function(e,r,t){"use strict";t.d(r,{wZ:function(){return c},xf:function(){return a},Qc:function(){return s}});var n=t(87663),o=t(92114),u=t(68082),i=t(18459),c=function(e,r){var t;return{coords:{accuracy:e.coords.accuracy,altitude:e.coords.altitude,altitudeAccuracy:e.coords.altitudeAccuracy,heading:e.coords.heading,latitude:e.coords.latitude,longitude:e.coords.longitude,speed:e.coords.speed},timestamp:e.timestamp,displayName:r.displayName,photoURL:r.photoURL,uid:null!==(t=r.uid)&&void 0!==t?t:""}},a=function(e,r){return(0,n.t8)((0,n.iH)(o.UO,"".concat(u.G.USERS_GEOLOCATION,"/").concat(e)),r)},s=function(e,r){return fetch("".concat(i.gg).concat(e,",").concat(r,".json?limit=1&types=region&access_token=").concat("pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw")).then((function(e){return e.json()}))}},17047:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return w}});var n=t(15861),o=t(11163),u=t(67294),i=t(77058),c=t(72132),a=t(32442),s=t(9798),d=t(6489),f=t(87305),l=t(49274),p=t(74447),v=t(43936),m=t(33580),h=function(e){return null!==e&&void 0!==e},y=t(45152),g=t(66001),b=t(79951),x=t(85893),w=function(){var e=(0,u.useState)([]),r=e[0],t=e[1],w=(0,u.useState)(),k=w[0],O=w[1],j=(0,u.useState)(null),Z=j[0],S=j[1],E=(0,u.useState)([]),P=E[0],I=E[1],N=(0,o.useRouter)(),R=(0,g.a)().user,T=(0,i.$)().t,U=N.query.id,A=(0,v.Z)(),L=(0,m.Z)(P);if((0,u.useEffect)((function(){(0,y.jA)(null===R||void 0===R?void 0:R.uid).then((function(e){return t(e)})).catch((function(e){return c.Am.error("Something wrong happened",e)}))}),[null===R||void 0===R?void 0:R.uid]),(0,u.useEffect)((function(){var e=r.find((function(e){return e.id===U}));O(e)}),[r,U]),(0,u.useEffect)((function(){var e=null===k||void 0===k?void 0:k.users.map((function(e){return A.find((function(r){return r.uid===e}))})).filter(h);e&&I(e)}),[k,A]),!k)return(0,x.jsx)(f.Z,{});return(0,x.jsxs)(p.Z,{children:[(0,x.jsx)(d.Z,{breadcrumbText:T("group.groups"),otherBreadcrumbs:[(0,x.jsx)(n.Z,{color:"text.primary",children:T("group.groupDetails")},"group-detail")],breadcrumbTextHref:"/groups"}),(0,x.jsx)(l.Z,{title:"".concat(T("group.groupDetails"),": ").concat(k.name)}),(0,x.jsxs)(b.L,{children:[(0,x.jsx)(a.Z,{markers:L,selectedUser:Z}),(0,x.jsx)(b.Q,{children:(0,x.jsx)(s.Z,{users:P,onUserClick:function(e){return S(e)}})})]})]})}},32442:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var n=t(6158),o=t.n(n),u=(t(81634),t(67294)),i=t(55113),c=t(85893),a=function(e){var r=e.mapNode;return(0,c.jsx)(i.Z,{sx:{height:"calc(60vh)"},children:(0,c.jsx)("div",{ref:r,style:{width:"100%",height:"100%"}})})},s=t(1527),d=function(){var e=(0,u.useState)(),r=e[0],t=e[1],n=(0,u.useRef)(null),i=[24.065285,49.8138699];return(0,u.useEffect)((function(){var e=n.current;if(null!==e){var r=new(o().Map)({container:e,accessToken:"pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw",style:"mapbox://styles/tronya/cixa87ptp00g12qo9jjbqm9mk",center:i,zoom:11});t(r)}}),[]),{mapboxMap:r,mapNode:n}},f=t(22320),l=t(66001);function p(e,r){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"===typeof e)return v(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,r)}(e))||r&&e&&"number"===typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,u=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw u}}}}function v(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var m=function(e){var r=e.markers,t=e.selectedUser,n=d(),i=n.mapboxMap,c=n.mapNode,v=(0,l.a)();return(0,u.useEffect)((function(){if(i)return i.addControl(new(o().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserHeading:!0})),function(){i.remove()}}),[i]),(0,u.useEffect)((function(){t&&i&&i.flyTo({center:[null===t||void 0===t?void 0:t.coords.longitude,null===t||void 0===t?void 0:t.coords.latitude],essential:!0,zoom:14})}),[i,t]),(0,u.useEffect)((function(){var e=navigator.geolocation.watchPosition((function(e){var r;null!==(r=v.user)&&void 0!==r&&r.uid&&(0,f.xf)(v.user.uid,(0,f.wZ)(e,v.user))}));return function(){navigator.geolocation.clearWatch(e)}}),[v.user]),(0,u.useEffect)((function(){if(null!==r&&void 0!==r&&r.length&&i){var e,t=p(r);try{for(t.s();!(e=t.n()).done;){var n=e.value;(0,s.R)(n,i)}}catch(o){t.e(o)}finally{t.f()}}}),[i,r]),(0,u.createElement)(a,{mapNode:c})}},79951:function(e,r,t){"use strict";t.d(r,{L:function(){return u},Q:function(){return i}});var n=t(8797),o=t(87357),u=(0,n.ZP)(o.Z)({position:"relative",backgroundColor:"grey"}),i=(0,n.ZP)(o.Z)({position:"absolute",top:0,padding:"16px 24px",display:"flex",zIndex:9})},6489:function(e,r,t){"use strict";var n=t(27812),o=t(50122),u=t(15861),i=t(12963),c=t(11163),a=t(26215),s=t(77058),d=t(85893);r.Z=function(e){var r=e.otherBreadcrumbs,t=e.breadcrumbText,f=e.breadcrumbTextHref,l=(0,c.useRouter)(),p=(0,s.$)().t,v=[(0,d.jsx)(o.Z,{underline:"hover",color:"inherit",href:"/",onClick:function(){return l.push("/")},children:p("dashboard.title")},"dashboard"),(0,d.jsx)(u.Z,{color:"text.primary",sx:{"&:hover":{cursor:null!==r&&void 0!==r&&r.length?"pointer":"default"}},onClick:function(){return(null===r||void 0===r?void 0:r.length)&&f&&l.push(f)},children:t},t)].concat((0,n.Z)(null!==r&&void 0!==r?r:[]));return(0,d.jsx)(i.Z,{separator:(0,d.jsx)(a.Z,{}),"aria-label":"breadcrumb",children:v})}},33580:function(e,r,t){"use strict";var n=t(1527),o=t(70315);r.Z=function(e){var r=[];return(0,n.c)(e).forEach((function(e){var t=document.createElement("div"),n=e.properties.iconSize[0],u=e.properties.iconSize[1];t.style.borderRadius="50%",t.style.backgroundRepeat="no-repeat",t.style.backgroundImage=e.properties.backgroundImage?"url(".concat(e.properties.backgroundImage,")"):"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='30px' width='30px'><text x='6' y='20' fill='black' font-size='15'>".concat((0,o.Yd)(e.properties.displayName),'</text></svg>")'),t.style.width="".concat(n,"px"),t.style.height="".concat(u,"px"),t.style.backgroundSize="100%",r.push({popup:t,marker:e})})),r}},1527:function(e,r,t){"use strict";t.d(r,{c:function(){return u},R:function(){return i}});var n=t(6158),o=t.n(n),u=function(e){return e.map((function(e){return{properties:{description:e.displayName,iconSize:[40,40],backgroundImage:e.photoURL,displayName:e.displayName},geometry:{type:"Point",coordinates:[e.coords.longitude,e.coords.latitude]}}}))},i=function(e,r){var t=new(o().Popup)({closeButton:!1,closeOnClick:!1});e.popup.addEventListener("mouseenter",(function(){if(e.popup.style.cursor="pointer",e.marker.properties.description){var n='<p style="color:black;">'.concat(e.marker.properties.description,"</p>");t.setLngLat(e.marker.geometry.coordinates).setHTML(n).addTo(r)}})),e.popup.addEventListener("mouseleave",(function(){e.popup.style.cursor="",t.remove()})),new(o().Marker)(e.popup).setLngLat(e.marker.geometry.coordinates).addTo(r)}},46166:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/groups/[id]",function(){return t(17047)}])}},function(e){e.O(0,[885,634,228,463,584,913,867,153,774,888,179],(function(){return r=46166,e(e.s=r);var r}));var r=e.O();_N_E=r}]);