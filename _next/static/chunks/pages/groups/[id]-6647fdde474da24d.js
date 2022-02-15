(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{2320:function(t,e,r){"use strict";r.d(e,{w:function(){return u},x:function(){return c}});var n=r(6256),o=r(2114),i=r(8082),u=function(t,e){var r;return{coords:{accuracy:t.coords.accuracy,altitude:t.coords.altitude,altitudeAccuracy:t.coords.altitudeAccuracy,heading:t.coords.heading,latitude:t.coords.latitude,longitude:t.coords.longitude,speed:t.coords.speed},timestamp:t.timestamp,displayName:e.displayName,photoURL:e.photoURL,uid:null!==(r=e.uid)&&void 0!==r?r:""}},c=function(t,e){return(0,n.t8)((0,n.iH)(o.UO,"".concat(i.G.USERS_GEOLOCATION,"/").concat(t)),e)}},7047:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return x}});var n=r(5861),o=r(7357),i=r(1163),u=r(7294),c=r(7058),a=r(2132),s=r(2442),l=r(2297),d=r(6489),f=r(240),p=r(9274),m=r(4447),v=r(3936),h=r(3580),g=function(t){return null!==t&&void 0!==t},y=r(5152),b=r(6001),w=r(5893),x=function(){var t=(0,u.useState)([]),e=t[0],r=t[1],x=(0,u.useState)(),j=x[0],O=x[1],E=(0,u.useState)(null),Z=E[0],k=E[1],T=(0,u.useState)([]),S=T[0],N=T[1],P=(0,i.useRouter)(),L=(0,b.a)().user,I=(0,c.$)().t,A=P.query.id,U=(0,v.Z)(),R=(0,h.Z)(S);if((0,u.useEffect)((function(){(0,y.jA)(null===L||void 0===L?void 0:L.uid).then((function(t){return r(t)})).catch((function(t){return a.Am.error("Something wrong happened",t)}))}),[]),(0,u.useEffect)((function(){var t=e.find((function(t){return t.id===A}));O(t)}),[e,A]),(0,u.useEffect)((function(){var t=null===j||void 0===j?void 0:j.users.map((function(t){return U.find((function(e){return e.uid===t}))})).filter(g);t&&N(t)}),[j,U]),!j)return(0,w.jsx)(f.Z,{});return(0,w.jsxs)(m.Z,{children:[(0,w.jsx)(d.Z,{breadcrumbText:I("group.groups"),otherBreadcrumbs:[(0,w.jsx)(n.Z,{color:"text.primary",children:I("group.groupDetails")},"group-detail")],breadcrumbTextHref:"/groups"}),(0,w.jsx)(p.Z,{title:"".concat(I("group.groupDetails"),": ").concat(j.name)}),(0,w.jsx)(o.Z,{display:"flex",p:1,children:(0,w.jsx)(l.Z,{users:S,onUserClick:function(t){return k(t)}})}),(0,w.jsx)(s.Z,{markers:R,selectedUser:Z})]})}},2442:function(t,e,r){"use strict";r.d(e,{Z:function(){return v}});var n=r(6158),o=r.n(n),i=(r(1634),r(7294)),u=r(5113),c=r(5893),a=function(t){var e=t.mapNode;return(0,c.jsx)(u.Z,{sx:{height:"calc(80vh)"},children:(0,c.jsx)("div",{ref:e,style:{width:"100%",height:"100%"}})})},s=r(1527),l=function(){var t=(0,i.useState)(),e=t[0],r=t[1],n=(0,i.useRef)(null),u=[24.065285,49.8138699];return(0,i.useEffect)((function(){var t=n.current;if(null!==t){var e=new(o().Map)({container:t,accessToken:"pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw",style:"mapbox://styles/tronya/cixa87ptp00g12qo9jjbqm9mk",center:u,zoom:11});r(e)}}),[]),{mapboxMap:e,mapNode:n}},d=r(2320),f=r(6001);function p(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"===typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){c=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw i}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var v=function(t){var e=t.markers,r=t.selectedUser,n=l(),u=n.mapboxMap,c=n.mapNode,m=(0,f.a)();return(0,i.useEffect)((function(){if(u)return u.addControl(new(o().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserHeading:!0})),function(){u.remove()}}),[u]),(0,i.useEffect)((function(){r&&u&&u.flyTo({center:[null===r||void 0===r?void 0:r.coords.longitude,null===r||void 0===r?void 0:r.coords.latitude],essential:!0,zoom:14})}),[u,r]),(0,i.useEffect)((function(){var t=navigator.geolocation.watchPosition((function(t){var e;null!==(e=m.user)&&void 0!==e&&e.uid&&(0,d.x)(m.user.uid,(0,d.w)(t,m.user))}));return function(){navigator.geolocation.clearWatch(t)}}),[]),(0,i.useEffect)((function(){if(null!==e&&void 0!==e&&e.length&&u){var t,r=p(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;(0,s.R)(n,u)}}catch(o){r.e(o)}finally{r.f()}}}),[u,e]),(0,i.createElement)(a,{mapNode:c})}},2763:function(t,e,r){"use strict";r.d(e,{CK:function(){return f},xu:function(){return p},j8:function(){return m}});var n,o,i=r(1383),u=r(8462),c=r(7357),a=r(1496),s=r(3851),l=r(5137),d=r(8797),f=(0,d.ZP)(u.Z)(n||(n=(0,i.Z)(["\n  @media (max-width: 599px) {\n    margin-right: unset;\n  }\n"]))),p=(0,d.ZP)(c.Z)(o||(o=(0,i.Z)(["\n  &:hover {\n    li {\n      svg {\n        color: ",";\n      }\n    }\n  }\n"])),l.Z[500]),m=(0,a.ZP)(s.Z)((function(){return{"& .MuiBadge-badge":{bottom:"10%",right:"23%","&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))},2297:function(t,e,r){"use strict";r.d(e,{Z:function(){return m}});var n=r(1107),o=r(3984),i=r(7952),u=r(8459),c=r(7294),a=function(){var t=(0,c.useState)(window.innerWidth),e=t[0],r=t[1],n=(0,c.useState)(u.TW.INITIAL),o=n[0],i=n[1];return(0,c.useEffect)((function(){var t=function(){r(window.innerWidth)};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),(0,c.useEffect)((function(){i(e>1300?u.TW.DESKTOP:e<=1300&&e>800?u.TW.TABLET:u.TW.MOBILE)}),[e]),{screenType:o,windowWidth:e}},s=r(315),l=r(2763),d=r(8078),f=r(5893),p=function(t){for(var e=t.count,r=[],o=0;o<e;o++)r.push(o);return(0,f.jsx)(n.Z,{max:e,total:e,children:r.map((function(t){return(0,f.jsx)(l.j8,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:(0,f.jsx)(d.Z,{variant:"circular",width:50,height:50})},t)}))})},m=function(t){var e=t.users,r=t.onUserClick,c=a().screenType;if(!e.length)return(0,f.jsx)(p,{count:5});var d=c===u.TW.DESKTOP?10:c===u.TW.TABLET?7:4;return(0,f.jsx)(n.Z,{max:d,total:e.length,children:e.map((function(t){return(0,f.jsx)(l.j8,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",onClick:function(){return r(t)},sx:{cursor:"pointer"},color:"Online"===(0,s.Tq)(t.timestamp)?"success":"error",children:(0,f.jsx)(o.Z,{title:t.displayName,placement:"bottom",arrow:!0,children:(0,f.jsx)(i.Z,{alt:t.displayName,src:t.photoURL,sx:{width:40,height:40}})})},t.uid)}))})}},3936:function(t,e,r){"use strict";var n=r(9499),o=r(6835),i=r(6256),u=r(7294),c=r(2114);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}e.Z=function(){var t=(0,u.useState)([]),e=t[0],r=t[1];return(0,u.useEffect)((function(){(0,i.jM)((0,i.iH)(c.UO,"usersGeolocation"),(function(t){var e,i=null===(e=Object.entries(t.val()))||void 0===e?void 0:e.map((function(t){var e=(0,o.Z)(t,2);e[0];return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},e[1])}));r(i)}))}),[]),e}},3580:function(t,e,r){"use strict";var n=r(1527),o=r(315);e.Z=function(t){var e=[];return(0,n.c)(t).forEach((function(t){var r=document.createElement("div"),n=t.properties.iconSize[0],i=t.properties.iconSize[1];r.style.borderRadius="50%",r.style.backgroundRepeat="no-repeat",r.style.backgroundImage=t.properties.backgroundImage?"url(".concat(t.properties.backgroundImage,")"):"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='30px' width='30px'><text x='6' y='20' fill='black' font-size='15'>".concat((0,o.Yd)(t.properties.displayName),'</text></svg>")'),r.style.width="".concat(n,"px"),r.style.height="".concat(i,"px"),r.style.backgroundSize="100%",e.push({popup:r,marker:t})})),e}},1527:function(t,e,r){"use strict";r.d(e,{c:function(){return i},R:function(){return u}});var n=r(6158),o=r.n(n),i=function(t){return t.map((function(t){return{properties:{description:t.displayName,iconSize:[40,40],backgroundImage:t.photoURL,displayName:t.displayName},geometry:{type:"Point",coordinates:[t.coords.longitude,t.coords.latitude]}}}))},u=function(t,e){var r=new(o().Popup)({closeButton:!1,closeOnClick:!1});t.popup.addEventListener("mouseenter",(function(){t.popup.style.cursor="pointer",t.marker.properties.description&&r.setLngLat(t.marker.geometry.coordinates).setHTML(t.marker.properties.description).addTo(e)})),t.popup.addEventListener("mouseleave",(function(){t.popup.style.cursor="",r.remove()})),new(o().Marker)(t.popup).setLngLat(t.marker.geometry.coordinates).addTo(e)}},6166:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/groups/[id]",function(){return r(7047)}])}},function(t){t.O(0,[885,634,478,421,787,913,471,50,774,888,179],(function(){return e=6166,t(t.s=e);var e}));var e=t.O();_N_E=e}]);