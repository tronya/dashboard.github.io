(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{22320:function(t,e,n){"use strict";n.d(e,{wZ:function(){return c},xf:function(){return a},Qc:function(){return s}});var r=n(87663),o=n(92114),i=n(68082),u=n(18459),c=function(t,e){var n;return{coords:{accuracy:t.coords.accuracy,altitude:t.coords.altitude,altitudeAccuracy:t.coords.altitudeAccuracy,heading:t.coords.heading,latitude:t.coords.latitude,longitude:t.coords.longitude,speed:t.coords.speed},timestamp:t.timestamp,displayName:e.displayName,photoURL:e.photoURL,uid:null!==(n=e.uid)&&void 0!==n?n:""}},a=function(t,e){return(0,r.t8)((0,r.iH)(o.UO,"".concat(i.G.USERS_GEOLOCATION,"/").concat(t)),e)},s=function(t,e){return fetch("".concat(u.gg).concat(t,",").concat(e,".json?limit=1&types=region&access_token=").concat("pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw")).then((function(t){return t.json()}))}},17047:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var r=n(15861),o=n(11163),i=n(67294),u=n(77058),c=n(72132),a=n(32442),s=n(52297),l=n(6489),d=n(20240),f=n(49274),p=n(74447),m=n(43936),v=n(33580),h=function(t){return null!==t&&void 0!==t},g=n(45152),y=n(66001),b=n(79951),w=n(85893),x=function(){var t=(0,i.useState)([]),e=t[0],n=t[1],x=(0,i.useState)(),j=x[0],O=x[1],Z=(0,i.useState)(null),k=Z[0],E=Z[1],T=(0,i.useState)([]),N=T[0],I=T[1],S=(0,o.useRouter)(),L=(0,y.a)().user,P=(0,u.$)().t,U=S.query.id,A=(0,m.Z)(),R=(0,v.Z)(N);if((0,i.useEffect)((function(){(0,g.jA)(null===L||void 0===L?void 0:L.uid).then((function(t){return n(t)})).catch((function(t){return c.Am.error("Something wrong happened",t)}))}),[null===L||void 0===L?void 0:L.uid]),(0,i.useEffect)((function(){var t=e.find((function(t){return t.id===U}));O(t)}),[e,U]),(0,i.useEffect)((function(){var t=null===j||void 0===j?void 0:j.users.map((function(t){return A.find((function(e){return e.uid===t}))})).filter(h);t&&I(t)}),[j,A]),!j)return(0,w.jsx)(d.Z,{});return(0,w.jsxs)(p.Z,{children:[(0,w.jsx)(l.Z,{breadcrumbText:P("group.groups"),otherBreadcrumbs:[(0,w.jsx)(r.Z,{color:"text.primary",children:P("group.groupDetails")},"group-detail")],breadcrumbTextHref:"/groups"}),(0,w.jsx)(f.Z,{title:"".concat(P("group.groupDetails"),": ").concat(j.name)}),(0,w.jsxs)(b.L,{children:[(0,w.jsx)(a.Z,{markers:R,selectedUser:k}),(0,w.jsx)(b.Q,{children:(0,w.jsx)(s.Z,{users:N,onUserClick:function(t){return E(t)}})})]})]})}},32442:function(t,e,n){"use strict";n.d(e,{Z:function(){return v}});var r=n(6158),o=n.n(r),i=(n(81634),n(67294)),u=n(55113),c=n(85893),a=function(t){var e=t.mapNode;return(0,c.jsx)(u.Z,{sx:{height:"calc(60vh)"},children:(0,c.jsx)("div",{ref:e,style:{width:"100%",height:"100%"}})})},s=n(1527),l=function(){var t=(0,i.useState)(),e=t[0],n=t[1],r=(0,i.useRef)(null),u=[24.065285,49.8138699];return(0,i.useEffect)((function(){var t=r.current;if(null!==t){var e=new(o().Map)({container:t,accessToken:"pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw",style:"mapbox://styles/tronya/cixa87ptp00g12qo9jjbqm9mk",center:u,zoom:11});n(e)}}),[]),{mapboxMap:e,mapNode:r}},d=n(22320),f=n(66001);function p(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){c=!0,i=t},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw i}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var v=function(t){var e=t.markers,n=t.selectedUser,r=l(),u=r.mapboxMap,c=r.mapNode,m=(0,f.a)();return(0,i.useEffect)((function(){if(u)return u.addControl(new(o().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserHeading:!0})),function(){u.remove()}}),[u]),(0,i.useEffect)((function(){n&&u&&u.flyTo({center:[null===n||void 0===n?void 0:n.coords.longitude,null===n||void 0===n?void 0:n.coords.latitude],essential:!0,zoom:14})}),[u,n]),(0,i.useEffect)((function(){var t=navigator.geolocation.watchPosition((function(t){var e;null!==(e=m.user)&&void 0!==e&&e.uid&&(0,d.xf)(m.user.uid,(0,d.wZ)(t,m.user))}));return function(){navigator.geolocation.clearWatch(t)}}),[m.user]),(0,i.useEffect)((function(){if(null!==e&&void 0!==e&&e.length&&u){var t,n=p(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;(0,s.R)(r,u)}}catch(o){n.e(o)}finally{n.f()}}}),[u,e]),(0,i.createElement)(a,{mapNode:c})}},79951:function(t,e,n){"use strict";n.d(e,{L:function(){return i},Q:function(){return u}});var r=n(8797),o=n(87357),i=(0,r.ZP)(o.Z)({position:"relative",backgroundColor:"grey"}),u=(0,r.ZP)(o.Z)({position:"absolute",top:0,padding:"16px 24px",display:"flex",zIndex:9})},82763:function(t,e,n){"use strict";n.d(e,{CK:function(){return f},xu:function(){return p},j8:function(){return m}});var r,o,i=n(71383),u=n(78462),c=n(87357),a=n(11496),s=n(88082),l=n(55137),d=n(8797),f=(0,d.ZP)(u.Z)(r||(r=(0,i.Z)(["\n  @media (max-width: 599px) {\n    margin-right: unset;\n  }\n"]))),p=(0,d.ZP)(c.Z)(o||(o=(0,i.Z)(["\n  &:hover {\n    li {\n      svg {\n        color: ",";\n      }\n    }\n  }\n"])),l.Z[500]),m=(0,a.ZP)(s.Z)((function(){return{"& .MuiBadge-badge":{bottom:"10%",right:"23%","&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))},52297:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var r=n(51107),o=n(83984),i=n(87952),u=n(18459),c=n(67294),a=function(){var t=(0,c.useState)(window.innerWidth),e=t[0],n=t[1],r=(0,c.useState)(u.TW.INITIAL),o=r[0],i=r[1];return(0,c.useEffect)((function(){var t=function(){n(window.innerWidth)};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),(0,c.useEffect)((function(){i(e>1300?u.TW.DESKTOP:e<=1300&&e>800?u.TW.TABLET:u.TW.MOBILE)}),[e]),{screenType:o,windowWidth:e}},s=n(70315),l=n(82763),d=n(88078),f=n(85893),p=function(t){for(var e=t.count,n=[],o=0;o<e;o++)n.push(o);return(0,f.jsx)(r.Z,{max:e,total:e,children:n.map((function(t){return(0,f.jsx)(l.j8,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:(0,f.jsx)(d.Z,{variant:"circular",width:50,height:50})},t)}))})},m=function(t){var e=t.users,n=t.onUserClick,c=a().screenType;if(!e.length)return(0,f.jsx)(p,{count:5});var d=c===u.TW.DESKTOP?10:c===u.TW.TABLET?7:4,m=e.sort((function(t,e){return(0,s.Tq)(e.timestamp)===s.J0.ONLINE?1:(0,s.Tq)(t.timestamp)===s.J0.ONLINE?-1:0}));return(0,f.jsx)(r.Z,{max:d,total:e.length,children:m.map((function(t){var e;return(0,f.jsx)(l.j8,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",onClick:function(){return n(t)},sx:{cursor:"pointer"},color:(0,s.Tq)(t.timestamp)===s.J0.ONLINE?"success":"error",children:(0,f.jsx)(o.Z,{title:null!==(e=t.displayName)&&void 0!==e?e:"",placement:"bottom",arrow:!0,children:(0,f.jsx)(i.Z,{alt:t.displayName,src:t.photoURL,sx:{width:40,height:40}})})},t.uid)}))})}},43936:function(t,e,n){"use strict";var r=n(59499),o=n(16835),i=n(87663),u=n(67294),c=n(92114);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}e.Z=function(){var t=(0,u.useState)([]),e=t[0],n=t[1];return(0,u.useEffect)((function(){(0,i.jM)((0,i.iH)(c.UO,"usersGeolocation"),(function(t){var e,i=null===(e=Object.entries(t.val()))||void 0===e?void 0:e.map((function(t){var e=(0,o.Z)(t,2);e[0];return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e[1])}));n(i)}))}),[]),e}},33580:function(t,e,n){"use strict";var r=n(1527),o=n(70315);e.Z=function(t){var e=[];return(0,r.c)(t).forEach((function(t){var n=document.createElement("div"),r=t.properties.iconSize[0],i=t.properties.iconSize[1];n.style.borderRadius="50%",n.style.backgroundRepeat="no-repeat",n.style.backgroundImage=t.properties.backgroundImage?"url(".concat(t.properties.backgroundImage,")"):"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='30px' width='30px'><text x='6' y='20' fill='black' font-size='15'>".concat((0,o.Yd)(t.properties.displayName),'</text></svg>")'),n.style.width="".concat(r,"px"),n.style.height="".concat(i,"px"),n.style.backgroundSize="100%",e.push({popup:n,marker:t})})),e}},1527:function(t,e,n){"use strict";n.d(e,{c:function(){return i},R:function(){return u}});var r=n(6158),o=n.n(r),i=function(t){return t.map((function(t){return{properties:{description:t.displayName,iconSize:[40,40],backgroundImage:t.photoURL,displayName:t.displayName},geometry:{type:"Point",coordinates:[t.coords.longitude,t.coords.latitude]}}}))},u=function(t,e){var n=new(o().Popup)({closeButton:!1,closeOnClick:!1});t.popup.addEventListener("mouseenter",(function(){if(t.popup.style.cursor="pointer",t.marker.properties.description){var r='<p style="color:black;">'.concat(t.marker.properties.description,"</p>");n.setLngLat(t.marker.geometry.coordinates).setHTML(r).addTo(e)}})),t.popup.addEventListener("mouseleave",(function(){t.popup.style.cursor="",n.remove()})),new(o().Marker)(t.popup).setLngLat(t.marker.geometry.coordinates).addTo(e)}},46166:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/groups/[id]",function(){return n(17047)}])}},function(t){t.O(0,[885,634,241,48,584,913,867,50,774,888,179],(function(){return e=46166,t(t.s=e);var e}));var e=t.O();_N_E=e}]);