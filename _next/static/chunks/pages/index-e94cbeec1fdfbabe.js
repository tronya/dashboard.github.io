(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1377:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(7812),o=n(9008),i=n(6886),c=n(7357),s=n(5861),a=n(6893),u=n(7294),l=n(1102),d=function(e){var t=e.users,n=e.onUserClick;return(0,u.createElement)(l.t,{users:t,onUserClick:n})},f=n(1163),p=n(7305),v=n(7932),m=n(1795),h=n(6158),x=n.n(h),y=(n(1634),n(5113)),g=n(5893),j=function(e){var t=e.mapNode;return(0,g.jsx)(y.Z,{sx:{height:600},children:(0,g.jsx)("div",{ref:t,style:{width:"100%",height:"100%"}})})},b=function(e,t){var n=new(x().Popup)({closeButton:!1,closeOnClick:!1});e.popup.addEventListener("mouseenter",(function(){e.popup.style.cursor="pointer",e.marker.properties.description&&n.setLngLat(e.marker.geometry.coordinates).setHTML(e.marker.properties.description).addTo(t)})),e.popup.addEventListener("mouseleave",(function(){e.popup.style.cursor="",n.remove()})),new(x().Marker)(e.popup).setLngLat(e.marker.geometry.coordinates).addTo(t)},Z=n(8189),w=function(){var e,t,n=(0,u.useState)(),r=n[0],o=n[1],i=(0,Z.H)(),c=(0,u.useRef)(null),s=[null!==(e=null===i||void 0===i?void 0:i.coords.longitude)&&void 0!==e?e:24.065285,null!==(t=null===i||void 0===i?void 0:i.coords.latitude)&&void 0!==t?t:49.8138699];return(0,u.useEffect)((function(){var e=c.current;if(null!==e){var t=new(x().Map)({container:e,accessToken:"pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw",style:"mapbox://styles/mapbox/streets-v11",center:s,zoom:11});o(t)}}),[]),{mapboxMap:r,mapNode:c}};function O(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw i}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P=function(e){var t=e.markers,n=e.selectedUser,r=w(),o=r.mapboxMap,i=r.mapNode;return(0,u.useEffect)((function(){if(o)return o.addControl(new(x().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserHeading:!0})),function(){o.remove()}}),[o]),(0,u.useEffect)((function(){n&&o&&o.flyTo({center:[null===n||void 0===n?void 0:n.coords.longitude,null===n||void 0===n?void 0:n.coords.latitude],essential:!0,zoom:14})}),[o,n]),(0,u.useEffect)((function(){if(null!==t&&void 0!==t&&t.length&&o){var e,n=O(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;b(r,o)}}catch(i){n.e(i)}finally{n.f()}}}),[o,t]),(0,u.createElement)(j,{mapNode:i})},E=n(315),N=function(e,t){var n=[];t&&[t].concat((0,r.Z)(e)).map((function(e){return{properties:{description:e.displayName,iconSize:[40,40],backgroundImage:e.photoURL,displayName:e.displayName},geometry:{type:"Point",coordinates:[e.coords.longitude,e.coords.latitude]}}})).forEach((function(e){var t=document.createElement("div"),r=e.properties.iconSize[0],o=e.properties.iconSize[1];t.style.borderRadius="50%",t.style.backgroundRepeat="no-repeat",t.style.backgroundImage=e.properties.backgroundImage?"url(".concat(e.properties.backgroundImage,")"):"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='30px' width='30px'><text x='6' y='20' fill='black' font-size='15'>".concat((0,E.Yd)(e.properties.displayName),'</text></svg>")'),t.style.width="".concat(r,"px"),t.style.height="".concat(o,"px"),t.style.backgroundSize="100%",n.push({popup:t,marker:e})}));return n},S=n(1057),U=function(e){var t=e.buttonText,n=e.buttonHref,r=e.title,o=(0,f.useRouter)();return(0,g.jsx)(y.Z,{sx:{p:4},children:(0,g.jsxs)(i.ZP,{container:!0,children:[(0,g.jsx)(i.ZP,{item:!0,xs:10,sm:10,lg:10,children:(0,g.jsx)(s.Z,{variant:"h6",sx:{color:"common.white"},children:r})}),t&&n&&(0,g.jsx)(i.ZP,{item:!0,xs:2,sm:2,lg:2,children:(0,g.jsx)(c.Z,{display:"flex",justifyContent:"end",height:1,children:(0,g.jsx)(S.Z,{variant:"contained",sx:{backgroundColor:"white !important",color:"primary.main",textAlign:"center"},onClick:function(e){e.preventDefault(),n&&o.push(n)},href:n,children:t})})})]})})},A=n(2267),I=n(7058),L=function(e){return null!==e&&void 0!==e},C=n(9944),T=n(5321),R=n(2114),_=n(3936),H=function(){var e=(0,u.useState)([]),t=e[0],n=e[1],l=(0,u.useState)(null),h=l[0],x=l[1],y=(0,f.useRouter)(),j=(0,I.$)().t,b=(0,m.a)(),Z=b.user,w=b.loading,O=(0,A.Z)(),k=O.isLocationAllowed,E=O.currentUserGeolocation,S=(0,_.Z)(),H=S.map((function(e){if(null!==t&&void 0!==t&&t.find((function(t){return t===e.uid})))return e})).filter(L),D=N(H,E);if((0,u.useEffect)((function(){if(null!==Z&&void 0!==Z&&Z.uid){var e=(0,T.IO)((0,T.hJ)(R.DB,"favorites"),(0,T.ar)("id","==",null===Z||void 0===Z?void 0:Z.uid));(0,T.cf)(e,(function(e){e.forEach((function(e){n(e.data().users)}))}))}}),[Z]),(0,u.useEffect)((function(){w||Z||y.push("/login")}),[Z,w,y]),!Z||!S)return(0,g.jsx)(p.Z,{});var z=E?[E].concat((0,r.Z)(H)):[];return(0,g.jsxs)(v.Z,{children:[(0,g.jsxs)(o.default,{children:[(0,g.jsx)("title",{children:"whereiam"}),(0,g.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,g.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,g.jsx)("main",{children:k?(0,g.jsxs)(i.ZP,{container:!0,children:[(0,g.jsxs)(i.ZP,{item:!0,xs:12,sm:6,lg:3,children:[(0,g.jsxs)(c.Z,{display:"flex",alignItems:"center",py:2,mr:2,children:[(0,g.jsx)(s.Z,{variant:"h4",children:j("dashboard.peopleYouFollow")}),(0,g.jsx)(a.Z,{title:j("dashboard.tooltip"),placement:"top",children:(0,g.jsx)(c.Z,{ml:1,children:(0,g.jsx)(C.Z,{sx:{width:15,height:15}})})})]}),(0,g.jsx)(d,{users:z,onUserClick:function(e){return x(e)}})]}),(0,g.jsx)(i.ZP,{item:!0,xs:12,sm:6,lg:9,children:(0,g.jsx)(P,{markers:D,selectedUser:h})})]}):(0,g.jsx)(U,{title:j("dashboard.bannerTitle"),buttonText:j("dashboard.bannerButtonText"),buttonHref:"/user/profile"})})]})}},1102:function(e,t,n){"use strict";n.d(t,{t:function(){return S}});var r,o,i=n(9499),c=n(7212),s=n(8987),a=n(9661),u=n(9953),l=n(5861),d=n(1519),f=n(8462),p=n(8078),v=n(5893),m=function(e){for(var t=e.count,n=[],r=0;r<t;r++)n.push(r);return(0,v.jsx)(f.Z,{sx:{width:240},children:n.map((function(e,t){return(0,v.jsxs)(c.ZP,{alignItems:"flex-start",children:[(0,v.jsx)(s.Z,{children:(0,v.jsx)(p.Z,{variant:"circular",width:40,height:40})}),(0,v.jsx)(u.Z,{primary:(0,v.jsx)(p.Z,{variant:"text"}),secondary:(0,v.jsx)(l.Z,{component:"span",variant:"body2",children:(0,v.jsx)(p.Z,{variant:"text"})})})]},t)}))})},h=n(7036),x=n(3486),y=n(1383),g=n(7357),j=n(5137),b=n(8797),Z=(0,b.ZP)(f.Z)(r||(r=(0,y.Z)(["\n  @media (max-width: 599px) {\n    margin-right: unset;\n  }\n"]))),w=(0,b.ZP)(g.Z)(o||(o=(0,y.Z)(["\n  &:hover {\n    li {\n      svg {\n        color: ",";\n      }\n    }\n  }\n"])),j.Z[500]),O=n(315),k=n(1795),P=n(7058);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){var t=e.users,n=e.onUserClick,r=e.starIcon,o=(0,k.a)().user,i=(0,P.$)().t;if(!t.length)return(0,v.jsx)(m,{count:6});var f=t[t.length-1].uid;return(0,v.jsx)(Z,{sx:{mr:2,mb:2,bgcolor:"background.paper"},children:t.map((function(e){var t=e.uid===(null===o||void 0===o?void 0:o.uid);return(0,v.jsxs)(w,{onClick:function(){return n(e)},sx:{cursor:"pointer"},children:[(0,v.jsxs)(c.ZP,{alignItems:"center",children:[e.displayName&&e.photoURL&&(0,v.jsx)(s.Z,{children:(0,v.jsx)(a.Z,N({alt:e.displayName,src:e.photoURL},(0,O.GZ)(e.displayName)))}),(0,v.jsx)(u.Z,{sx:{color:h.Z[300]},primary:(0,v.jsxs)(v.Fragment,{children:[e.displayName,(0,v.jsx)(l.Z,{variant:"caption",children:t&&i("usersList.itsYou")})]}),secondary:(0,v.jsx)(l.Z,{component:"span",variant:"body2",color:"Online"===(0,O.Tq)(e.timestamp)?x.Z[400]:h.Z[500],children:(0,O.Tq)(e.timestamp)})}),r&&r(e.uid)]}),f!==e.uid&&(0,v.jsx)(d.Z,{variant:"inset",component:"li"})]},e.uid)}))})}},7305:function(e,t,n){"use strict";var r=n(8456),o=n(7357),i=n(4106),c=n(5893);t.Z=function(){return(0,c.jsx)(o.Z,{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",children:(0,c.jsx)(r.Z,{size:100,sx:{color:i.Z.palette.primary.main}})})}},2267:function(e,t,n){"use strict";var r=n(7294),o=n(2132),i=n(9865),c=n(1795),s=n(3936);t.Z=function(){var e,t,n=(0,r.useState)([]),a=n[0],u=n[1],l=(0,c.a)().user,d=(0,s.Z)();(0,r.useEffect)((function(){(0,i.R)().then((function(e){return u(e)})).catch((function(e){return o.Am.error(e)}))}),[]);var f=null!==(e=null===a||void 0===a||null===(t=a.find((function(e){return e.uid===(null===l||void 0===l?void 0:l.uid)})))||void 0===t?void 0:t.isLocationAllowed)&&void 0!==e&&e;return{currentUserGeolocation:d.find((function(e){return e.uid===(null===l||void 0===l?void 0:l.uid)})),isLocationAllowed:f}}},8189:function(e,t,n){"use strict";n.d(t,{K:function(){return v},H:function(){return p}});var r=n(1163),o=n(7294),i=n(7058),c=n(2132),s=n(1795),a=n(9865),u=n(6256),l=n(2114),d=function(e,t){return(0,u.t8)((0,u.iH)(l.UO,"usersGeolocation/".concat(e)),t)},f=n(5893),p=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,r.useRouter)(),n=(0,s.a)(),a=(0,i.$)(),u=a.t,l=(0,o.useState)(),f=l[0],p=l[1];return(0,o.useEffect)((function(){e&&navigator.geolocation.getCurrentPosition((function(e){var r,o,i,s,a={coords:{accuracy:e.coords.accuracy,altitude:e.coords.altitude,altitudeAccuracy:e.coords.altitudeAccuracy,heading:e.coords.heading,latitude:e.coords.latitude,longitude:e.coords.longitude,speed:e.coords.speed},timestamp:e.timestamp,displayName:null===(r=n.user)||void 0===r?void 0:r.displayName,photoURL:null===(o=n.user)||void 0===o?void 0:o.photoURL,uid:null===(i=n.user)||void 0===i?void 0:i.uid};p(e),d(null===(s=n.user)||void 0===s?void 0:s.uid,a),c.Am.success(u("toastSuccess.acceptGeolocation")),t.push("/")}),(function(e){c.Am.error(e.message)}))}),[e,t,u,n]),f},v=function(e){var t=e.isLocationAllowed,n=e.children,r=p(t),i=(0,s.a)();return(0,o.useEffect)((function(){r&&(0,a.A)(i,t)}),[r,i,t]),(0,f.jsx)(f.Fragment,{children:n})}},3936:function(e,t,n){"use strict";var r=n(9499),o=n(6835),i=n(6256),c=n(7294),s=n(2114);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.Z=function(){var e=(0,c.useState)([]),t=e[0],n=e[1];return(0,c.useEffect)((function(){(0,i.jM)((0,i.iH)(s.UO,"usersGeolocation"),(function(e){var t,i=null===(t=Object.entries(e.val()))||void 0===t?void 0:t.map((function(e){var t=(0,o.Z)(e,2);t[0];return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t[1])}));n(i)}))}),[]),t}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1377)}])}},function(e){e.O(0,[885,634,389,240,910,883,983,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);