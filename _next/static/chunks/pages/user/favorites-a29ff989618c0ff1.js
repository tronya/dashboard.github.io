(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{68082:function(r,t,n){"use strict";var e;n.d(t,{G:function(){return e}}),function(r){r.FAVORITES="favorites",r.GROUPS="groups",r.USERS="users",r.USERS_GEOLOCATION="usersGeolocation",r.CHATS="chats"}(e||(e={}))},93040:function(r,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var e=n(27812),i=n(67294),o=n(87357),c=n(15861),s=n(77058),u=n(6489),a=n(37917),l=n(43329),f=n(14957),d=n(55137),p=n(85893),h=function(r){var t=r.users,n=r.onUserClick,e=r.favorites,i=(0,s.$)().t;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u.Z,{breadcrumbText:i("favorites.title")}),(0,p.jsx)(o.Z,{py:2,children:(0,p.jsx)(c.Z,{variant:"h4",children:i("favorites.title")})}),(0,p.jsx)(a.t,{users:t,onUserClick:n,starIcon:function(r){return null!==e&&void 0!==e&&e.find((function(t){return t===r}))?(0,p.jsx)(f.Z,{sx:{color:d.Z[500]}}):(0,p.jsx)(l.Z,{sx:{color:"white"}})}})]})},x=n(87305),j=n(74447),v=n(66001),O=n(50029),b=n(87794),g=n.n(b),Z=n(25321),m=n(92114),y=n(68082);var w=function(){var r=(0,O.Z)(g().mark((function r(t,n){return g().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,Z.pl)((0,Z.JU)(m.DB,y.G.FAVORITES,t),{users:n,id:t});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})));return function(t,n){return r.apply(this,arguments)}}(),P=n(43936),E=function(){var r=(0,v.a)().user,t=(0,P.Z)(),n=(0,i.useState)([]),o=n[0],c=n[1];if((0,i.useEffect)((function(){if(null!==r&&void 0!==r&&r.uid){var t=(0,Z.IO)((0,Z.hJ)(m.DB,"favorites"),(0,Z.ar)("id","==",null===r||void 0===r?void 0:r.uid));(0,Z.cf)(t,(function(r){r.forEach((function(r){c(r.data().users)}))}))}}),[r]),!t||!r)return(0,p.jsx)(x.Z,{});var s=function(t){c(t),w(r.uid,t)},u=t.filter((function(t){return r.uid!==t.uid})).sort((function(r,t){return null!==o&&void 0!==o&&o.includes(t.uid)?1:null!==o&&void 0!==o&&o.includes(r.uid)?-1:0}));return(0,p.jsx)(j.Z,{children:(0,p.jsx)(h,{users:u,onUserClick:function(r){if(!o.some((function(t){return t===r.uid}))&&r.uid){var t=[].concat((0,e.Z)(o),[r.uid]);s(t)}else{var n=o.filter((function(t){return r.uid!==t}));s(n)}},favorites:o})})}},82763:function(r,t,n){"use strict";n.d(t,{CK:function(){return d},xu:function(){return p},j8:function(){return h}});var e,i,o=n(71383),c=n(78462),s=n(87357),u=n(11496),a=n(88082),l=n(55137),f=n(8797),d=(0,f.ZP)(c.Z)(e||(e=(0,o.Z)(["\n  @media (max-width: 599px) {\n    margin-right: unset;\n  }\n"]))),p=(0,f.ZP)(s.Z)(i||(i=(0,o.Z)(["\n  &:hover {\n    li {\n      svg {\n        color: ",";\n      }\n    }\n  }\n"])),l.Z[500]),h=(0,u.ZP)(a.Z)((function(){return{"& .MuiBadge-badge":{bottom:"10%",right:"23%","&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))},37917:function(r,t,n){"use strict";n.d(t,{t:function(){return m}});var e=n(59499),i=n(97212),o=n(18987),c=n(87952),s=n(59334),u=n(15861),a=n(67720),l=n(78462),f=n(88078),d=n(85893),p=function(r){for(var t=r.count,n=[],e=0;e<t;e++)n.push(e);return(0,d.jsx)(l.Z,{sx:{width:240},children:n.map((function(r){return(0,d.jsxs)(i.ZP,{alignItems:"flex-start",children:[(0,d.jsx)(o.Z,{children:(0,d.jsx)(f.Z,{variant:"circular",width:40,height:40})}),(0,d.jsx)(s.Z,{primary:(0,d.jsx)(f.Z,{variant:"text"}),secondary:(0,d.jsx)(u.Z,{component:"span",variant:"body2",children:(0,d.jsx)(f.Z,{variant:"text"})})})]},r)}))})},h=n(47036),x=n(13486),j=n(82763),v=n(70315),O=n(66001),b=n(77058);function g(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.push.apply(n,e)}return n}function Z(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,e.Z)(r,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(n,t))}))}return r}var m=function(r){var t=r.users,n=r.onUserClick,e=r.starIcon,l=(0,O.a)().user,f=(0,b.$)().t;if(!t.length)return(0,d.jsx)(p,{count:6});var g=t[t.length-1].uid;return(0,d.jsx)(j.CK,{sx:{mr:2,mb:2,bgcolor:"background.paper"},children:t.map((function(r){var t=r.uid===(null===l||void 0===l?void 0:l.uid);return(0,d.jsxs)(j.xu,{onClick:function(){return n(r)},sx:{cursor:"pointer"},children:[(0,d.jsxs)(i.ZP,{alignItems:"center",children:[r.displayName&&r.photoURL&&(0,d.jsx)(o.Z,{children:(0,d.jsx)(c.Z,Z({alt:r.displayName,src:r.photoURL},(0,v.GZ)(r.displayName)))}),(0,d.jsx)(s.Z,{sx:{color:h.Z[300]},primary:(0,d.jsxs)(d.Fragment,{children:[r.displayName,(0,d.jsx)(u.Z,{variant:"caption",children:t&&f("usersList.itsYou")})]}),secondary:(0,d.jsx)(u.Z,{component:"span",variant:"body2",color:"Online"===(0,v.Tq)(r.timestamp)?x.Z[400]:h.Z[500],children:(0,v.Tq)(r.timestamp)})}),e&&e(r.uid)]}),g!==r.uid&&(0,d.jsx)(a.Z,{variant:"inset",component:"li"})]},r.uid)}))})}},6489:function(r,t,n){"use strict";var e=n(27812),i=n(50122),o=n(15861),c=n(12963),s=n(11163),u=n(26215),a=n(77058),l=n(85893);t.Z=function(r){var t=r.otherBreadcrumbs,n=r.breadcrumbText,f=r.breadcrumbTextHref,d=(0,s.useRouter)(),p=(0,a.$)().t,h=[(0,l.jsx)(i.Z,{underline:"hover",color:"inherit",href:"/",onClick:function(){return d.push("/")},children:p("dashboard.title")},"dashboard"),(0,l.jsx)(o.Z,{color:"text.primary",sx:{"&:hover":{cursor:null!==t&&void 0!==t&&t.length?"pointer":"default"}},onClick:function(){return(null===t||void 0===t?void 0:t.length)&&f&&d.push(f)},children:n},n)].concat((0,e.Z)(null!==t&&void 0!==t?t:[]));return(0,l.jsx)(c.Z,{separator:(0,l.jsx)(u.Z,{}),"aria-label":"breadcrumb",children:h})}},74447:function(r,t,n){"use strict";n.d(t,{Z:function(){return q}});var e=n(71927),i=n(10155),o=n(27948),c=n(87357),s=n(66720),u=n(59499),a=n(93946),l=n(15861),f=n(83984),d=n(87952),p=n(11057),h=n(67294),x=n(326),j=n(11496),v=n(42293),O=n(18459);function b(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.push.apply(n,e)}return n}var g=(0,j.ZP)(v.Z,{shouldForwardProp:function(r){return"open"!==r}})((function(r){var t=r.theme,n=r.open;return function(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,u.Z)(r,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(n,t))}))}return r}({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{marginLeft:O.pG,width:"calc(100% - ".concat(O.pG,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})})),Z=n(77058),m=n(56863),y=n(85893),w=function(){var r=(0,Z.$)().i18n,t=function(t){return r.changeLanguage(t.currentTarget.value)};return(0,y.jsxs)(m.Z,{variant:"outlined",children:[(0,y.jsx)(p.Z,{onClick:t,value:"en",sx:{color:"white"},children:"EN"}),(0,y.jsx)(p.Z,{onClick:t,value:"ua",sx:{color:"white"},children:"UA"})]})},P=n(77533),E=n(97212),k=n(48885),C=n(59334),D=n(67720),T=n(11163),S=function(r){var t=r.open,n=r.toggleDrawer,e=r.anchor,i=r.signOutButton,o=r.drawerList,s=(0,T.useRouter)(),u=(0,Z.$)().t;return(0,y.jsx)(P.ZP,{anchor:e,open:t,onClose:n(!1,e),children:(0,y.jsxs)(c.Z,{width:250,height:"100%",role:"presentation",display:"flex",justifyContent:"space-between",flexDirection:"column",onClick:n(!1,e),onKeyDown:n(!1,e),children:[(0,y.jsxs)(c.Z,{pt:8,children:[o.map((function(r){return(0,y.jsxs)(E.ZP,{button:!0,href:r.href,onClick:function(t){return function(r,t){r.preventDefault(),s.push(t)}(t,r.href)},children:[(0,y.jsx)(k.Z,{children:r.icon}),(0,y.jsx)(C.Z,{primary:u(r.text),sx:{color:"common.white"}})]},r.text)})),(0,y.jsx)(D.Z,{})]}),i]})})},I=n(66001),L=n(70315),N=n(88530),G=n(72132),R=n(15398),U=n(2684),_=n(14957),A=n(7078),F=[{href:"/user/profile",text:"profile.title",icon:(0,y.jsx)(R.Z,{sx:{color:"common.white"}})},{href:"/user/favorites",text:"favorites.title",icon:(0,y.jsx)(_.Z,{sx:{color:"common.white"}})}],B=[{href:"/groups",text:"mainMenu.groups",icon:(0,y.jsx)(U.Z,{sx:{color:"common.white"}})},{href:"/chats",text:"Chats",icon:(0,y.jsx)(A.Z,{sx:{color:"common.white"}})}];function M(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.push.apply(n,e)}return n}function $(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,u.Z)(r,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(n,t))}))}return r}var H=function(){var r=(0,Z.$)().t,t=(0,I.a)().user,n=(0,T.useRouter)(),e=(0,N.v0)(),o=(0,h.useState)({left:!1,right:!1}),s=o[0],j=o[1],v=function(r,t){return function(n){if("keydown"===n.type&&("Tab"===n.key||"Shift"===n.key))return null;j($($({},s),{},(0,u.Z)({},t,r)))}};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g,{position:"fixed",open:!1,children:(0,y.jsxs)(i.Z,{children:[(0,y.jsx)(a.Z,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){return j((function(r){return $($({},s),{},{left:!r.left})}))},sx:{marginRight:"36px"},children:(0,y.jsx)(x.Z,{})}),(0,y.jsx)(l.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1,cursor:"pointer"},onClick:function(r){r.preventDefault(),n.push("/")},children:r("dashboard.title")}),(0,y.jsx)(c.Z,{pr:1,children:(0,y.jsx)(w,{})}),t&&t.displayName&&t.photoURL&&(0,y.jsx)(f.Z,{title:"Open settings",children:(0,y.jsx)(a.Z,{sx:{p:0},onClick:function(){return j((function(r){return $($({},s),{},{right:!r.right})}))},children:(0,y.jsx)(d.Z,$({alt:t.displayName,src:t.photoURL},(0,L.GZ)(t.displayName)))})})]})}),(0,y.jsx)(S,{open:s.left,toggleDrawer:v,anchor:O.yG.LEFT,drawerList:B}),(0,y.jsx)(S,{open:s.right,toggleDrawer:v,anchor:O.yG.RIGHT,signOutButton:(0,y.jsx)(c.Z,{p:2,display:"flex",justifyContent:"center",children:(0,y.jsx)(p.Z,{onClick:function(){return(0,N.w7)(e).then((function(){G.Am.success(r("toastSuccess.logOut")),n.push("/sign-in")})).catch((function(r){return G.Am.error("Error: ".concat(r))}))},variant:"outlined",size:"large",sx:{color:"white"},children:r("drawer.signOutButtonText")})}),drawerList:F})]})},K=n(34106),q=function(r){var t=r.children;return(0,y.jsx)(e.Z,{theme:K.Z,children:(0,y.jsxs)(c.Z,{sx:{display:"flex"},children:[(0,y.jsx)(s.ZP,{}),(0,y.jsx)(H,{}),(0,y.jsxs)(c.Z,{component:"main",sx:{flexGrow:1,height:"100vh"},children:[(0,y.jsx)(i.Z,{}),(0,y.jsx)(o.Z,{maxWidth:"xl",sx:{mt:2,mb:2},children:t})]})]})})}},18459:function(r,t,n){"use strict";n.d(t,{pG:function(){return o},TW:function(){return e},yG:function(){return i},gg:function(){return c},DM:function(){return s}});var e,i,o=240;!function(r){r.DESKTOP="DESKTOP",r.TABLET="TABLET",r.MOBILE="MOBILE",r.INITIAL="INITIAL"}(e||(e={})),function(r){r.RIGHT="right",r.LEFT="left"}(i||(i={}));var c="https://api.mapbox.com/geocoding/v5/mapbox.places/",s=["#264f9e","#f9992c","#455fb4","#ef80b0","#6bcf73","#9e9e9e","#d9afce","#eeeeee","#d0f7c3","#fde2d5"]},43936:function(r,t,n){"use strict";var e=n(59499),i=n(16835),o=n(87663),c=n(67294),s=n(92114);function u(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.push.apply(n,e)}return n}t.Z=function(){var r=(0,c.useState)([]),t=r[0],n=r[1];return(0,c.useEffect)((function(){(0,o.jM)((0,o.iH)(s.UO,"usersGeolocation"),(function(r){var t,o=null===(t=Object.entries(r.val()))||void 0===t?void 0:t.map((function(r){var t=(0,i.Z)(r,2);t[0];return function(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,e.Z)(r,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(n,t))}))}return r}({},t[1])}));n(o)}))}),[]),t}},70315:function(r,t,n){"use strict";n.d(t,{J0:function(){return e},Tq:function(){return c},GZ:function(){return u},Yd:function(){return a}});var e,i=n(30381),o=n.n(i);!function(r){r.OFFLINE="Offline",r.ONLINE="Online"}(e||(e={}));var c=function(r){var t=o()().valueOf(),n=o()(t).diff(o()(r));return+o()(n).format("m")>2?e.OFFLINE:e.ONLINE},s=function(r){var t,n=0;for(t=0;t<r.length;t+=1)n=r.charCodeAt(t)+((n<<5)-n);var e="#";for(t=0;t<3;t+=1){e+="00".concat((n>>8*t&255).toString(16)).substr(-2)}return e},u=function(r){return{sx:{bgcolor:s(r)},children:a(r)}},a=function(r){return"".concat(null===r||void 0===r?void 0:r.split(" ")[0][0].toUpperCase()).concat(null===r||void 0===r?void 0:r.split(" ")[1][0].toUpperCase())}},21466:function(r,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/favorites",function(){return n(93040)}])}},function(r){r.O(0,[885,228,463,584,935,774,888,179],(function(){return t=21466,r(r.s=t);var t}));var t=r.O();_N_E=t}]);