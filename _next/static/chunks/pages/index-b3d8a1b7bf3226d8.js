(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{68082:function(t,e,n){"use strict";var r;n.d(e,{G:function(){return r}}),function(t){t.FAVORITES="favorites",t.GROUPS="groups",t.USERS="users",t.USERS_GEOLOCATION="usersGeolocation"}(r||(r={}))},22320:function(t,e,n){"use strict";n.d(e,{wZ:function(){return a},xf:function(){return s},Qc:function(){return u}});var r=n(87663),o=n(92114),i=n(68082),c=n(18459),a=function(t,e){var n;return{coords:{accuracy:t.coords.accuracy,altitude:t.coords.altitude,altitudeAccuracy:t.coords.altitudeAccuracy,heading:t.coords.heading,latitude:t.coords.latitude,longitude:t.coords.longitude,speed:t.coords.speed},timestamp:t.timestamp,displayName:e.displayName,photoURL:e.photoURL,uid:null!==(n=e.uid)&&void 0!==n?n:""}},s=function(t,e){return(0,r.t8)((0,r.iH)(o.UO,"".concat(i.G.USERS_GEOLOCATION,"/").concat(t)),e)},u=function(t,e){return fetch("".concat(c.gg).concat(t,",").concat(e,".json?limit=1&types=region&access_token=").concat("pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw")).then((function(t){return t.json()}))}},35498:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return ct}});var r,o=n(9008),i=n(11163),c=n(67294),a=n(74447),s=n(66001),u=n(32442),l=n(33580),f=n(55113),d=n(86886),p=n(15861),h=n(87357),m=n(11057),g=n(85893),x=function(t){var e=t.buttonText,n=t.buttonHref,r=t.title,o=(0,i.useRouter)();return(0,g.jsx)(f.Z,{sx:{p:4},children:(0,g.jsxs)(d.ZP,{container:!0,children:[(0,g.jsx)(d.ZP,{item:!0,xs:10,sm:10,lg:10,children:(0,g.jsx)(p.Z,{variant:"h6",sx:{color:"common.white"},children:r})}),e&&n&&(0,g.jsx)(d.ZP,{item:!0,xs:2,sm:2,lg:2,children:(0,g.jsx)(h.Z,{display:"flex",justifyContent:"end",height:1,children:(0,g.jsx)(m.Z,{variant:"contained",sx:{backgroundColor:"white !important",color:"primary.main",textAlign:"center"},onClick:function(t){t.preventDefault(),n&&o.push(n)},href:n,children:e})})})]})})},v=n(77058),j=n(43936),b=n(15101),y=n(52297),w=n(49274),O=n(79951),Z=n(29009),E=n(4668),T=n(3023),k=n(75358),P=n(14888),S=n(14195),I=n(66538),N=n(43815),L=function(t){var e=t.active,n=t.payload,r=t.label;return e?(0,g.jsxs)(h.Z,{bgcolor:"white",p:2,children:[(0,g.jsx)(p.Z,{variant:"body1",sx:{color:null===n||void 0===n?void 0:n[0].payload.fill},fontWeight:"bold",children:r}),(0,g.jsx)(p.Z,{variant:"body1",color:"black",children:"Total: ".concat(null===n||void 0===n?void 0:n[0].value)})]}):null},C=function(t){var e=t.data;return(0,g.jsx)(Z.h,{width:"95%",height:"95%",children:(0,g.jsxs)(E.v,{width:250,height:200,data:e,margin:{top:10,right:0,left:0,bottom:10},barSize:25,children:[(0,g.jsx)(T.K,{dataKey:"name",scale:"point",padding:{left:10,right:10}}),(0,g.jsx)(k.B,{allowDecimals:!1}),(0,g.jsx)(P.u,{content:(0,g.jsx)(L,{})}),(0,g.jsx)(S.q,{strokeDasharray:"3 3"}),(0,g.jsx)(I.$,{dataKey:"total",name:"Total",children:e.map((function(t){return(0,g.jsx)(N.b,{fill:t.fill},"cell-".concat(t.name))}))})]})})},D=function(t){var e=t.data,n=t.title;return(0,g.jsxs)(f.Z,{sx:{height:250,width:"100%",padding:2},children:[(0,g.jsx)(p.Z,{variant:"h6",children:n}),(0,g.jsx)(C,{data:e})]})},A=n(59499),R=n(27812),U=n(16835),z=n(22320),G=n(18459),W=n(70315);function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){(0,A.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}!function(t){t.CITIES="cities",t.STATUSES="statuses"}(r||(r={}));var B,_=function(t,e){var n=0;return Object.entries(t).map((function(t){var r=(0,U.Z)(t,2),o=r[0],i=r[1],c=G.DM[n];return++n>G.DM.length-1&&(n=0),{name:o,total:i,fill:"cities"===e?c:o===W.J0.ONLINE?"#66bb6a":"#f44336"}}))},H=function(t){var e,n=(0,c.useState)([]),o=n[0],i=n[1];(0,c.useEffect)((function(){t.forEach((function(t){(0,z.Qc)(t.coords.longitude,t.coords.latitude).then((function(e){var n=e.features[0].text;i((function(e){return[].concat((0,R.Z)(e),[M(M({},t),{},{region:n})])}))}))}))}),[t]);var a=(0,R.Z)(new Map(o.map((function(t){return[t.uid,t]}))).values()).reduce((function(t,e){return t[e.region]?t[e.region]+=1:t[e.region]=1,t}),{}),s=t.reduce((function(t,e){return(0,W.Tq)(e.timestamp)===W.J0.ONLINE&&(t[W.J0.ONLINE]+=1),(0,W.Tq)(e.timestamp)===W.J0.OFFLINE&&(t[W.J0.OFFLINE]+=1),t}),(e={},(0,A.Z)(e,W.J0.ONLINE,0),(0,A.Z)(e,W.J0.OFFLINE,0),e));return{statusesData:_(s,r.STATUSES),citiesData:_(a,r.CITIES)}},J=n(20240),K=n(57922),q=n(73350),Y=n(11496),Q=(0,Y.ZP)("span")((function(t){var e,n=t.theme;return e={fontSize:"4rem",fontWeight:900,lineHeight:".8",flexDirection:"column",textAlign:"center",color:n.palette.primary.contrastText,display:"block"},(0,A.Z)(e,n.breakpoints.up("md"),{fontSize:"6rem"}),(0,A.Z)(e,n.breakpoints.up("xl"),{fontSize:"8rem"}),e})),$=(0,Y.ZP)(h.Z)((function(t){return{backgroundColor:t.theme.palette.common.black,flexWrap:"wrap",flexDirection:"column",width:"100vw",height:"100vh",display:"flex",textAlign:"center",alignItems:"end",justifyContent:"flex-end",paddingRight:"2rem"}})),X=(0,Y.ZP)(Q)((function(t){var e=t.theme;return{transform:"rotateX(145deg)","&:after":(0,A.Z)({content:'""',display:"block",position:"absolute",width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0,0,0,.5) 20%, rgba(0,0,0,.9) 35%,rgba(0,0,0,1) 50%)",bottom:"0rem"},e.breakpoints.up("md"),{bottom:"0rem"})}})),V=["Where","I","Am","???"],tt=function(){var t=(0,c.useState)(["..."]),e=t[0],n=t[1],r=(0,i.useRouter)();(0,c.useEffect)((function(){o(0)}),[]);var o=function(t){t===V.length&&(!function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];window.localStorage.setItem("splashScreenViewed",String(t))}(!0),setTimeout((function(){r.reload()}),2e3)),setTimeout((function(){n([].concat((0,R.Z)(e),[V[t]]))}),800)};return(0,g.jsx)($,{children:(0,g.jsx)(q.Z,{children:e.map((function(t,e){return(0,g.jsxs)(K.Z,{orientation:"horizontal",in:!0,onEnter:function(t){return o(e)},children:[(0,g.jsx)(Q,{children:t}),(0,g.jsx)(X,{children:t})]},t)}))})})},et=n(71383),nt=n(8797),rt=n(14113),ot=(0,nt.ZP)(rt.Z)(B||(B=(0,et.Z)(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  height: 40px;\n  width: 40px;\n  z-index: 1000;\n  cursor: pointer;\n  animation: fadeIn 0.3s;\n  transition: opacity 0.4s;\n  opacity: 0.5;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 0.5;\n    }\n  }\n"]))),it=function(){var t=(0,c.useState)(!1),e=t[0],n=t[1];return(0,c.useEffect)((function(){var t=function(){window.pageYOffset>100?n(!0):n(!1)};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]),(0,g.jsx)(ot,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:e?"flex":"none"}})},ct=function(){var t=(0,c.useState)(null),e=t[0],n=t[1],r=(0,i.useRouter)(),f=(0,v.$)().t,p=(0,s.a)(),h=p.user,m=p.loading,Z=(0,b.ZA)().isLocationAllowed,E=(0,j.Z)(),T=H(E),k=T.statusesData,P=T.citiesData,S=(0,l.Z)(E);if((0,c.useEffect)((function(){m||h||r.push("/sign-in")}),[h,m,r]),!Boolean(localStorage.getItem("splashScreenViewed")))return(0,g.jsx)(tt,{});if(!E)return(0,g.jsx)(J.Z,{});return(0,g.jsxs)(a.Z,{children:[(0,g.jsxs)(o.default,{children:[(0,g.jsx)("title",{children:"whereiam"}),(0,g.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,g.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,g.jsx)("main",{children:Z?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(w.Z,{title:f("dashboard.users")}),(0,g.jsxs)(O.L,{children:[(0,g.jsx)(u.Z,{markers:S,selectedUser:e}),(0,g.jsx)(O.Q,{children:(0,g.jsx)(y.Z,{users:E,onUserClick:function(t){return n(t)}})})]}),(0,g.jsxs)(d.ZP,{container:!0,spacing:2,sx:{pt:2},children:[(0,g.jsx)(d.ZP,{item:!0,lg:6,md:6,sm:12,xs:12,children:(0,g.jsx)(D,{data:k,title:"Statuses"})}),(0,g.jsx)(d.ZP,{item:!0,lg:6,md:6,sm:12,xs:12,children:(0,g.jsx)(D,{data:P,title:"Cities"})})]})]}):(0,g.jsx)(x,{title:f("dashboard.bannerTitle"),buttonText:f("dashboard.bannerButtonText"),buttonHref:"/user/profile"})}),(0,g.jsx)(it,{})]})}},32442:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var r=n(6158),o=n.n(r),i=(n(81634),n(67294)),c=n(55113),a=n(85893),s=function(t){var e=t.mapNode;return(0,a.jsx)(c.Z,{sx:{height:"calc(60vh)"},children:(0,a.jsx)("div",{ref:e,style:{width:"100%",height:"100%"}})})},u=n(1527),l=function(){var t=(0,i.useState)(),e=t[0],n=t[1],r=(0,i.useRef)(null),c=[24.065285,49.8138699];return(0,i.useEffect)((function(){var t=r.current;if(null!==t){var e=new(o().Map)({container:t,accessToken:"pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw",style:"mapbox://styles/tronya/cixa87ptp00g12qo9jjbqm9mk",center:c,zoom:11});n(e)}}),[]),{mapboxMap:e,mapNode:r}},f=n(22320),d=n(66001);function p(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){a=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw i}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var m=function(t){var e=t.markers,n=t.selectedUser,r=l(),c=r.mapboxMap,a=r.mapNode,h=(0,d.a)();return(0,i.useEffect)((function(){if(c)return c.addControl(new(o().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserHeading:!0})),function(){c.remove()}}),[c]),(0,i.useEffect)((function(){n&&c&&c.flyTo({center:[null===n||void 0===n?void 0:n.coords.longitude,null===n||void 0===n?void 0:n.coords.latitude],essential:!0,zoom:14})}),[c,n]),(0,i.useEffect)((function(){var t=navigator.geolocation.watchPosition((function(t){var e;null!==(e=h.user)&&void 0!==e&&e.uid&&(0,f.xf)(h.user.uid,(0,f.wZ)(t,h.user))}));return function(){navigator.geolocation.clearWatch(t)}}),[h.user]),(0,i.useEffect)((function(){if(null!==e&&void 0!==e&&e.length&&c){var t,n=p(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;(0,u.R)(r,c)}}catch(o){n.e(o)}finally{n.f()}}}),[c,e]),(0,i.createElement)(s,{mapNode:a})}},79951:function(t,e,n){"use strict";n.d(e,{L:function(){return i},Q:function(){return c}});var r=n(8797),o=n(87357),i=(0,r.ZP)(o.Z)({position:"relative",backgroundColor:"grey"}),c=(0,r.ZP)(o.Z)({position:"absolute",top:0,padding:"16px 24px",display:"flex",zIndex:9})},82763:function(t,e,n){"use strict";n.d(e,{CK:function(){return d},xu:function(){return p},j8:function(){return h}});var r,o,i=n(71383),c=n(78462),a=n(87357),s=n(11496),u=n(88082),l=n(55137),f=n(8797),d=(0,f.ZP)(c.Z)(r||(r=(0,i.Z)(["\n  @media (max-width: 599px) {\n    margin-right: unset;\n  }\n"]))),p=(0,f.ZP)(a.Z)(o||(o=(0,i.Z)(["\n  &:hover {\n    li {\n      svg {\n        color: ",";\n      }\n    }\n  }\n"])),l.Z[500]),h=(0,s.ZP)(u.Z)((function(){return{"& .MuiBadge-badge":{bottom:"10%",right:"23%","&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))},52297:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var r=n(51107),o=n(83984),i=n(87952),c=n(18459),a=n(67294),s=function(){var t=(0,a.useState)(window.innerWidth),e=t[0],n=t[1],r=(0,a.useState)(c.TW.INITIAL),o=r[0],i=r[1];return(0,a.useEffect)((function(){var t=function(){n(window.innerWidth)};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),(0,a.useEffect)((function(){i(e>1300?c.TW.DESKTOP:e<=1300&&e>800?c.TW.TABLET:c.TW.MOBILE)}),[e]),{screenType:o,windowWidth:e}},u=n(70315),l=n(82763),f=n(88078),d=n(85893),p=function(t){for(var e=t.count,n=[],o=0;o<e;o++)n.push(o);return(0,d.jsx)(r.Z,{max:e,total:e,children:n.map((function(t){return(0,d.jsx)(l.j8,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:(0,d.jsx)(f.Z,{variant:"circular",width:50,height:50})},t)}))})},h=function(t){var e=t.users,n=t.onUserClick,a=s().screenType;if(!e.length)return(0,d.jsx)(p,{count:5});var f=a===c.TW.DESKTOP?10:a===c.TW.TABLET?7:4,h=e.sort((function(t,e){return(0,u.Tq)(e.timestamp)===u.J0.ONLINE?1:(0,u.Tq)(t.timestamp)===u.J0.ONLINE?-1:0}));return(0,d.jsx)(r.Z,{max:f,total:e.length,children:h.map((function(t){var e;return(0,d.jsx)(l.j8,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",onClick:function(){return n(t)},sx:{cursor:"pointer"},color:(0,u.Tq)(t.timestamp)===u.J0.ONLINE?"success":"error",children:(0,d.jsx)(o.Z,{title:null!==(e=t.displayName)&&void 0!==e?e:"",placement:"bottom",arrow:!0,children:(0,d.jsx)(i.Z,{alt:t.displayName,src:t.photoURL,sx:{width:40,height:40}})})},t.uid)}))})}},49274:function(t,e,n){"use strict";var r=n(15861),o=n(85893);e.Z=function(t){var e=t.title;return(0,o.jsx)(r.Z,{variant:"h3",component:"div",children:e})}},74447:function(t,e,n){"use strict";n.d(e,{Z:function(){return H}});var r=n(71927),o=n(10155),i=n(27948),c=n(87357),a=n(66720),s=n(59499),u=n(93946),l=n(15861),f=n(83984),d=n(87952),p=n(11057),h=n(67294),m=n(326),g=n(11496),x=n(42293),v=n(18459);function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var b=(0,g.ZP)(x.Z,{shouldForwardProp:function(t){return"open"!==t}})((function(t){var e=t.theme,n=t.open;return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){(0,s.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},n&&{marginLeft:v.pG,width:"calc(100% - ".concat(v.pG,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})})})),y=n(77058),w=n(56863),O=n(85893),Z=function(){var t=(0,y.$)().i18n,e=function(e){return t.changeLanguage(e.currentTarget.value)};return(0,O.jsxs)(w.Z,{variant:"outlined",children:[(0,O.jsx)(p.Z,{onClick:e,value:"en",sx:{color:"white"},children:"EN"}),(0,O.jsx)(p.Z,{onClick:e,value:"ua",sx:{color:"white"},children:"UA"})]})},E=n(77533),T=n(97212),k=n(10796),P=n(79953),S=n(21519),I=n(11163),N=function(t){var e=t.open,n=t.toggleDrawer,r=t.anchor,o=t.signOutButton,i=t.drawerList,a=(0,I.useRouter)(),s=(0,y.$)().t;return(0,O.jsx)(E.ZP,{anchor:r,open:e,onClose:n(!1,r),children:(0,O.jsxs)(c.Z,{width:250,height:"100%",role:"presentation",display:"flex",justifyContent:"space-between",flexDirection:"column",onClick:n(!1,r),onKeyDown:n(!1,r),children:[(0,O.jsxs)(c.Z,{pt:8,children:[i.map((function(t){return(0,O.jsxs)(T.ZP,{button:!0,href:t.href,onClick:function(e){return function(t,e){t.preventDefault(),a.push(e)}(e,t.href)},children:[(0,O.jsx)(k.Z,{children:t.icon}),(0,O.jsx)(P.Z,{primary:s(t.text),sx:{color:"common.white"}})]},t.text)})),(0,O.jsx)(S.Z,{})]}),o]})})},L=n(66001),C=n(70315),D=n(88530),A=n(72132),R=n(15398),U=n(2684),z=n(14957),G=[{href:"/user/profile",text:"profile.title",icon:(0,O.jsx)(R.Z,{sx:{color:"common.white"}})},{href:"/user/favorites",text:"favorites.title",icon:(0,O.jsx)(z.Z,{sx:{color:"common.white"}})}],W=[{href:"/groups",text:"mainMenu.groups",icon:(0,O.jsx)(U.Z,{sx:{color:"common.white"}})}];function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){(0,s.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var B=function(){var t=(0,y.$)().t,e=(0,L.a)().user,n=(0,I.useRouter)(),r=(0,D.v0)(),i=(0,h.useState)({left:!1,right:!1}),a=i[0],g=i[1],x=function(t,e){return function(n){if("keydown"===n.type&&("Tab"===n.key||"Shift"===n.key))return null;g(M(M({},a),{},(0,s.Z)({},e,t)))}};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(b,{position:"absolute",open:!1,children:(0,O.jsxs)(o.Z,{children:[(0,O.jsx)(u.Z,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){return g((function(t){return M(M({},a),{},{left:!t.left})}))},sx:{marginRight:"36px"},children:(0,O.jsx)(m.Z,{})}),(0,O.jsx)(l.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1,cursor:"pointer"},onClick:function(t){t.preventDefault(),n.push("/")},children:t("dashboard.title")}),(0,O.jsx)(c.Z,{pr:1,children:(0,O.jsx)(Z,{})}),e&&e.displayName&&e.photoURL&&(0,O.jsx)(f.Z,{title:"Open settings",children:(0,O.jsx)(u.Z,{sx:{p:0},onClick:function(){return g((function(t){return M(M({},a),{},{right:!t.right})}))},children:(0,O.jsx)(d.Z,M({alt:e.displayName,src:e.photoURL},(0,C.GZ)(e.displayName)))})})]})}),(0,O.jsx)(N,{open:a.left,toggleDrawer:x,anchor:v.yG.LEFT,drawerList:W}),(0,O.jsx)(N,{open:a.right,toggleDrawer:x,anchor:v.yG.RIGHT,signOutButton:(0,O.jsx)(c.Z,{p:2,display:"flex",justifyContent:"center",children:(0,O.jsx)(p.Z,{onClick:function(){return(0,D.w7)(r).then((function(){A.Am.success(t("toastSuccess.logOut")),n.push("/sign-in")})).catch((function(t){return A.Am.error("Error: ".concat(t))}))},variant:"outlined",size:"large",sx:{color:"white"},children:t("drawer.signOutButtonText")})}),drawerList:G})]})},_=n(34106),H=function(t){var e=t.children;return(0,O.jsx)(r.Z,{theme:_.Z,children:(0,O.jsxs)(c.Z,{sx:{display:"flex"},children:[(0,O.jsx)(a.ZP,{}),(0,O.jsx)(B,{}),(0,O.jsxs)(c.Z,{component:"main",sx:{flexGrow:1,height:"100vh"},children:[(0,O.jsx)(o.Z,{}),(0,O.jsx)(i.Z,{maxWidth:"xl",sx:{mt:2,mb:2},children:e})]})]})})}},18459:function(t,e,n){"use strict";n.d(e,{pG:function(){return i},TW:function(){return r},yG:function(){return o},gg:function(){return c},DM:function(){return a}});var r,o,i=240;!function(t){t.DESKTOP="DESKTOP",t.TABLET="TABLET",t.MOBILE="MOBILE",t.INITIAL="INITIAL"}(r||(r={})),function(t){t.RIGHT="right",t.LEFT="left"}(o||(o={}));var c="https://api.mapbox.com/geocoding/v5/mapbox.places/",a=["#264f9e","#f9992c","#455fb4","#ef80b0","#6bcf73","#9e9e9e","#d9afce","#eeeeee","#d0f7c3","#fde2d5"]},43936:function(t,e,n){"use strict";var r=n(59499),o=n(16835),i=n(87663),c=n(67294),a=n(92114);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}e.Z=function(){var t=(0,c.useState)([]),e=t[0],n=t[1];return(0,c.useEffect)((function(){(0,i.jM)((0,i.iH)(a.UO,"usersGeolocation"),(function(t){var e,i=null===(e=Object.entries(t.val()))||void 0===e?void 0:e.map((function(t){var e=(0,o.Z)(t,2);e[0];return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e[1])}));n(i)}))}),[]),e}},33580:function(t,e,n){"use strict";var r=n(1527),o=n(70315);e.Z=function(t){var e=[];return(0,r.c)(t).forEach((function(t){var n=document.createElement("div"),r=t.properties.iconSize[0],i=t.properties.iconSize[1];n.style.borderRadius="50%",n.style.backgroundRepeat="no-repeat",n.style.backgroundImage=t.properties.backgroundImage?"url(".concat(t.properties.backgroundImage,")"):"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='30px' width='30px'><text x='6' y='20' fill='black' font-size='15'>".concat((0,o.Yd)(t.properties.displayName),'</text></svg>")'),n.style.width="".concat(r,"px"),n.style.height="".concat(i,"px"),n.style.backgroundSize="100%",e.push({popup:n,marker:t})})),e}},1527:function(t,e,n){"use strict";n.d(e,{c:function(){return i},R:function(){return c}});var r=n(6158),o=n.n(r),i=function(t){return t.map((function(t){return{properties:{description:t.displayName,iconSize:[40,40],backgroundImage:t.photoURL,displayName:t.displayName},geometry:{type:"Point",coordinates:[t.coords.longitude,t.coords.latitude]}}}))},c=function(t,e){var n=new(o().Popup)({closeButton:!1,closeOnClick:!1});t.popup.addEventListener("mouseenter",(function(){if(t.popup.style.cursor="pointer",t.marker.properties.description){var r='<p style="color:black;">'.concat(t.marker.properties.description,"</p>");n.setLngLat(t.marker.geometry.coordinates).setHTML(r).addTo(e)}})),t.popup.addEventListener("mouseleave",(function(){t.popup.style.cursor="",n.remove()})),new(o().Marker)(t.popup).setLngLat(t.marker.geometry.coordinates).addTo(e)}},70315:function(t,e,n){"use strict";n.d(e,{J0:function(){return r},Tq:function(){return c},GZ:function(){return s},Yd:function(){return u}});var r,o=n(30381),i=n.n(o);!function(t){t.OFFLINE="Offline",t.ONLINE="Online"}(r||(r={}));var c=function(t){var e=i()().valueOf(),n=i()(e).diff(i()(t));return+i()(n).format("m")>2?r.OFFLINE:r.ONLINE},a=function(t){var e,n=0;for(e=0;e<t.length;e+=1)n=t.charCodeAt(e)+((n<<5)-n);var r="#";for(e=0;e<3;e+=1){r+="00".concat((n>>8*e&255).toString(16)).substr(-2)}return r},s=function(t){return{sx:{bgcolor:a(t)},children:u(t)}},u=function(t){return"".concat(null===t||void 0===t?void 0:t.split(" ")[0][0].toUpperCase()).concat(null===t||void 0===t?void 0:t.split(" ")[1][0].toUpperCase())}},45301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(35498)}])}},function(t){t.O(0,[885,634,241,48,220,584,913,478,774,888,179],(function(){return e=45301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);