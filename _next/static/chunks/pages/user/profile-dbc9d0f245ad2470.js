(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[872],{26215:function(e,r,t){"use strict";var n=t(95318);r.Z=void 0;var o=n(t(64938)),i=t(85893),c=(0,o.default)((0,i.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");r.Z=c},12963:function(e,r,t){"use strict";t.d(r,{Z:function(){return P}});var n=t(87462),o=t(63366),i=t(67294),c=(t(59864),t(86010)),a=t(27192),s=t(11496),l=t(27623),u=t(15861),d=t(41796),p=t(88169),f=t(85893),h=(0,p.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=t(49990);const x=(0,s.ZP)(m.Z,{skipSx:!0})((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,d._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,d._4)(e.palette.grey[600],.12)})}))),g=(0,s.ZP)(h)({width:24,height:16});var b=function(e){const r=e;return(0,f.jsx)("li",{children:(0,f.jsx)(x,(0,n.Z)({focusRipple:!0},e,{ownerState:r,children:(0,f.jsx)(g,{ownerState:r})}))})},v=t(28979);function j(e){return(0,v.Z)("MuiBreadcrumbs",e)}var Z=(0,t(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const y=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,s.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${Z.li}`]:r.li},r.root]})({}),O=(0,s.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),C=(0,s.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function S(e,r,t,n){return e.reduce(((o,i,c)=>(c<e.length-1?o=o.concat(i,(0,f.jsx)(C,{"aria-hidden":!0,className:r,ownerState:n,children:t},`separator-${c}`)):o.push(i),o)),[])}var P=i.forwardRef((function(e,r){const t=(0,l.Z)({props:e,name:"MuiBreadcrumbs"}),{children:s,className:u,component:d="nav",expandText:p="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:m=1,maxItems:x=8,separator:g="/"}=t,v=(0,o.Z)(t,y),[Z,C]=i.useState(!1),P=(0,n.Z)({},t,{component:d,expanded:Z,expandText:p,itemsAfterCollapse:h,itemsBeforeCollapse:m,maxItems:x,separator:g}),k=(e=>{const{classes:r}=e;return(0,a.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},j,r)})(P),N=i.useRef(null),R=i.Children.toArray(s).filter((e=>i.isValidElement(e))).map(((e,r)=>(0,f.jsx)("li",{className:k.li,children:e},`child-${r}`)));return(0,f.jsx)(w,(0,n.Z)({ref:r,component:d,color:"text.secondary",className:(0,c.Z)(k.root,u),ownerState:P},v,{children:(0,f.jsx)(O,{className:k.ol,ref:N,ownerState:P,children:S(Z||x&&R.length<=x?R:(e=>m+h>=e.length?e:[...e.slice(0,m),(0,f.jsx)(b,{"aria-label":p,onClick:()=>{C(!0);const e=N.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-h,e.length)])(R),k.separator,g,P)})}))}))},50122:function(e,r,t){"use strict";t.d(r,{Z:function(){return w}});var n=t(63366),o=t(87462),i=t(67294),c=t(86010),a=t(27192),s=t(54844),l=t(41796),u=t(98216),d=t(11496),p=t(27623),f=t(18791),h=t(51705),m=t(15861),x=t(28979);function g(e){return(0,x.Z)("MuiLink",e)}var b=(0,t(76087).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),v=t(85893);const j=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=(0,d.ZP)(m.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`underline${(0,u.Z)(t.underline)}`],"button"===t.component&&r.button]}})((({theme:e,ownerState:r})=>{const t=(0,s.D)(e,`palette.${(e=>Z[e]||e)(r.color)}`)||r.color;return(0,o.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==t?(0,l.Fq)(t,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${b.focusVisible}`]:{outline:"auto"}})}));var w=i.forwardRef((function(e,r){const t=(0,p.Z)({props:e,name:"MuiLink"}),{className:s,color:l="primary",component:d="a",onBlur:m,onFocus:x,TypographyClasses:b,underline:Z="always",variant:w="inherit"}=t,O=(0,n.Z)(t,j),{isFocusVisibleRef:C,onBlur:S,onFocus:P,ref:k}=(0,f.Z)(),[N,R]=i.useState(!1),T=(0,h.Z)(r,k),L=(0,o.Z)({},t,{color:l,component:d,focusVisible:N,underline:Z,variant:w}),E=(e=>{const{classes:r,component:t,focusVisible:n,underline:o}=e,i={root:["root",`underline${(0,u.Z)(o)}`,"button"===t&&"button",n&&"focusVisible"]};return(0,a.Z)(i,g,r)})(L);return(0,v.jsx)(y,(0,o.Z)({className:(0,c.Z)(E.root,s),classes:b,color:l,component:d,onBlur:e=>{S(e),!1===C.current&&R(!1),m&&m(e)},onFocus:e=>{P(e),!0===C.current&&R(!0),x&&x(e)},ref:T,ownerState:L,variant:w},O))}))},68082:function(e,r,t){"use strict";var n;t.d(r,{G:function(){return n}}),function(e){e.FAVORITES="favorites",e.GROUPS="groups",e.USERS="users",e.USERS_GEOLOCATION="usersGeolocation",e.CHATS="chats"}(n||(n={}))},22320:function(e,r,t){"use strict";t.d(r,{wZ:function(){return a},xf:function(){return s},Qc:function(){return l}});var n=t(87663),o=t(92114),i=t(68082),c=t(18459),a=function(e,r){var t;return{coords:{accuracy:e.coords.accuracy,altitude:e.coords.altitude,altitudeAccuracy:e.coords.altitudeAccuracy,heading:e.coords.heading,latitude:e.coords.latitude,longitude:e.coords.longitude,speed:e.coords.speed},timestamp:e.timestamp,displayName:r.displayName,photoURL:r.photoURL,uid:null!==(t=r.uid)&&void 0!==t?t:""}},s=function(e,r){return(0,n.t8)((0,n.iH)(o.UO,"".concat(i.G.USERS_GEOLOCATION,"/").concat(e)),r)},l=function(e,r){return fetch("".concat(c.gg).concat(e,",").concat(r,".json?limit=1&types=region&access_token=").concat("pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw")).then((function(e){return e.json()}))}},34738:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return w}});var n=t(59499),o=t(55113),i=t(87357),c=t(87952),a=t(15861),s=t(11057),l=t(77058),u=t(66001),d=t(6489),p=t(49274),f=t(70315),h=t(87305),m=t(72132),x=t(15101),g=t(22320),b=t(85893);function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Z=function(){var e=(0,l.$)().t,r=(0,u.a)(),t=r.user,n=r.loading,v=(0,x.ZA)().isLocationAllowed;if(!t)return null;if(n)return(0,b.jsx)(h.Z,{});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d.Z,{breadcrumbText:e("profile.title")}),(0,b.jsx)(p.Z,{title:e("profile.title")}),(0,b.jsx)(o.Z,{children:(0,b.jsxs)(i.Z,{display:"flex",flexDirection:"column",p:6,alignItems:"center",children:[t.displayName&&t.photoURL&&(0,b.jsx)(c.Z,j({alt:t.displayName,src:t.photoURL},((0,f.GZ)(t.displayName),{width:120,height:120}))),(0,b.jsxs)(i.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:6,children:[(0,b.jsx)(a.Z,{variant:"h6",sx:{color:"common.white"},children:t.displayName}),(0,b.jsx)(a.Z,{variant:"h6",sx:{color:"common.white"},children:t.email})]})]})}),!v&&(0,b.jsx)(i.Z,{width:1,mt:2,children:(0,b.jsx)(s.Z,{variant:"contained",fullWidth:!0,sx:{color:"common.white",backgroundColor:"green !important"},onClick:function(){navigator.geolocation.getCurrentPosition((function(r){(0,g.xf)(t.uid,(0,g.wZ)(r,t)).then((function(r){return m.Am.success(e("toastSuccess.acceptGeolocation"))})).catch((function(e){return console.error(e)}))}),(function(e){m.Am.error(e.message)}))},children:e("profile.allowLocationButtonText")})})]})},y=t(74447),w=function(){return(0,b.jsx)(y.Z,{children:(0,b.jsx)(Z,{})})}},6489:function(e,r,t){"use strict";var n=t(27812),o=t(50122),i=t(15861),c=t(12963),a=t(11163),s=t(26215),l=t(77058),u=t(85893);r.Z=function(e){var r=e.otherBreadcrumbs,t=e.breadcrumbText,d=e.breadcrumbTextHref,p=(0,a.useRouter)(),f=(0,l.$)().t,h=[(0,u.jsx)(o.Z,{underline:"hover",color:"inherit",href:"/",onClick:function(){return p.push("/")},children:f("dashboard.title")},"dashboard"),(0,u.jsx)(i.Z,{color:"text.primary",sx:{"&:hover":{cursor:null!==r&&void 0!==r&&r.length?"pointer":"default"}},onClick:function(){return(null===r||void 0===r?void 0:r.length)&&d&&p.push(d)},children:t},t)].concat((0,n.Z)(null!==r&&void 0!==r?r:[]));return(0,u.jsx)(c.Z,{separator:(0,u.jsx)(s.Z,{}),"aria-label":"breadcrumb",children:h})}},49274:function(e,r,t){"use strict";var n=t(15861),o=t(85893);r.Z=function(e){var r=e.title;return(0,o.jsx)(n.Z,{variant:"h3",component:"div",children:r})}},74447:function(e,r,t){"use strict";t.d(r,{Z:function(){return V}});var n=t(71927),o=t(10155),i=t(27948),c=t(87357),a=t(66720),s=t(59499),l=t(93946),u=t(15861),d=t(83984),p=t(87952),f=t(11057),h=t(67294),m=t(326),x=t(11496),g=t(42293),b=t(18459);function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var j=(0,x.ZP)(g.Z,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var r=e.theme,t=e.open;return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){(0,s.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({zIndex:r.zIndex.drawer+1,transition:r.transitions.create(["width","margin"],{easing:r.transitions.easing.sharp,duration:r.transitions.duration.leavingScreen})},t&&{marginLeft:b.pG,width:"calc(100% - ".concat(b.pG,"px)"),transition:r.transitions.create(["width","margin"],{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen})})})),Z=t(77058),y=t(56863),w=t(85893),O=function(){var e=(0,Z.$)().i18n,r=function(r){return e.changeLanguage(r.currentTarget.value)};return(0,w.jsxs)(y.Z,{variant:"outlined",children:[(0,w.jsx)(f.Z,{onClick:r,value:"en",sx:{color:"white"},children:"EN"}),(0,w.jsx)(f.Z,{onClick:r,value:"ua",sx:{color:"white"},children:"UA"})]})},C=t(77533),S=t(97212),P=t(48885),k=t(59334),N=t(67720),R=t(11163),T=function(e){var r=e.open,t=e.toggleDrawer,n=e.anchor,o=e.signOutButton,i=e.drawerList,a=(0,R.useRouter)(),s=(0,Z.$)().t;return(0,w.jsx)(C.ZP,{anchor:n,open:r,onClose:t(!1,n),children:(0,w.jsxs)(c.Z,{width:250,height:"100%",role:"presentation",display:"flex",justifyContent:"space-between",flexDirection:"column",onClick:t(!1,n),onKeyDown:t(!1,n),children:[(0,w.jsxs)(c.Z,{pt:8,children:[i.map((function(e){return(0,w.jsxs)(S.ZP,{button:!0,href:e.href,onClick:function(r){return function(e,r){e.preventDefault(),a.push(r)}(r,e.href)},children:[(0,w.jsx)(P.Z,{children:e.icon}),(0,w.jsx)(k.Z,{primary:s(e.text),sx:{color:"common.white"}})]},e.text)})),(0,w.jsx)(N.Z,{})]}),o]})})},L=t(66001),E=t(70315),D=t(88530),I=t(72132),A=t(15398),B=t(2684),G=t(14957),M=t(7078),_=[{href:"/user/profile",text:"profile.title",icon:(0,w.jsx)(A.Z,{sx:{color:"common.white"}})},{href:"/user/favorites",text:"favorites.title",icon:(0,w.jsx)(G.Z,{sx:{color:"common.white"}})}],F=[{href:"/groups",text:"mainMenu.groups",icon:(0,w.jsx)(B.Z,{sx:{color:"common.white"}})},{href:"/chats",text:"Chats",icon:(0,w.jsx)(M.Z,{sx:{color:"common.white"}})}];function U(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function $(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?U(Object(t),!0).forEach((function(r){(0,s.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var z=function(){var e=(0,Z.$)().t,r=(0,L.a)().user,t=(0,R.useRouter)(),n=(0,D.v0)(),i=(0,h.useState)({left:!1,right:!1}),a=i[0],x=i[1],g=function(e,r){return function(t){if("keydown"===t.type&&("Tab"===t.key||"Shift"===t.key))return null;x($($({},a),{},(0,s.Z)({},r,e)))}};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(j,{position:"fixed",open:!1,children:(0,w.jsxs)(o.Z,{children:[(0,w.jsx)(l.Z,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){return x((function(e){return $($({},a),{},{left:!e.left})}))},sx:{marginRight:"36px"},children:(0,w.jsx)(m.Z,{})}),(0,w.jsx)(u.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1,cursor:"pointer"},onClick:function(e){e.preventDefault(),t.push("/")},children:e("dashboard.title")}),(0,w.jsx)(c.Z,{pr:1,children:(0,w.jsx)(O,{})}),r&&r.displayName&&r.photoURL&&(0,w.jsx)(d.Z,{title:"Open settings",children:(0,w.jsx)(l.Z,{sx:{p:0},onClick:function(){return x((function(e){return $($({},a),{},{right:!e.right})}))},children:(0,w.jsx)(p.Z,$({alt:r.displayName,src:r.photoURL},(0,E.GZ)(r.displayName)))})})]})}),(0,w.jsx)(T,{open:a.left,toggleDrawer:g,anchor:b.yG.LEFT,drawerList:F}),(0,w.jsx)(T,{open:a.right,toggleDrawer:g,anchor:b.yG.RIGHT,signOutButton:(0,w.jsx)(c.Z,{p:2,display:"flex",justifyContent:"center",children:(0,w.jsx)(f.Z,{onClick:function(){return(0,D.w7)(n).then((function(){I.Am.success(e("toastSuccess.logOut")),t.push("/sign-in")})).catch((function(e){return I.Am.error("Error: ".concat(e))}))},variant:"outlined",size:"large",sx:{color:"white"},children:e("drawer.signOutButtonText")})}),drawerList:_})]})},H=t(34106),V=function(e){var r=e.children;return(0,w.jsx)(n.Z,{theme:H.Z,children:(0,w.jsxs)(c.Z,{sx:{display:"flex"},children:[(0,w.jsx)(a.ZP,{}),(0,w.jsx)(z,{}),(0,w.jsxs)(c.Z,{component:"main",sx:{flexGrow:1,height:"100vh"},children:[(0,w.jsx)(o.Z,{}),(0,w.jsx)(i.Z,{maxWidth:"xl",sx:{mt:2,mb:2},children:r})]})]})})}},18459:function(e,r,t){"use strict";t.d(r,{pG:function(){return i},TW:function(){return n},yG:function(){return o},gg:function(){return c},DM:function(){return a}});var n,o,i=240;!function(e){e.DESKTOP="DESKTOP",e.TABLET="TABLET",e.MOBILE="MOBILE",e.INITIAL="INITIAL"}(n||(n={})),function(e){e.RIGHT="right",e.LEFT="left"}(o||(o={}));var c="https://api.mapbox.com/geocoding/v5/mapbox.places/",a=["#264f9e","#f9992c","#455fb4","#ef80b0","#6bcf73","#9e9e9e","#d9afce","#eeeeee","#d0f7c3","#fde2d5"]},70315:function(e,r,t){"use strict";t.d(r,{J0:function(){return n},Tq:function(){return c},GZ:function(){return s},Yd:function(){return l}});var n,o=t(30381),i=t.n(o);!function(e){e.OFFLINE="Offline",e.ONLINE="Online"}(n||(n={}));var c=function(e){var r=i()().valueOf(),t=i()(r).diff(i()(e));return+i()(t).format("m")>2?n.OFFLINE:n.ONLINE},a=function(e){var r,t=0;for(r=0;r<e.length;r+=1)t=e.charCodeAt(r)+((t<<5)-t);var n="#";for(r=0;r<3;r+=1){n+="00".concat((t>>8*r&255).toString(16)).substr(-2)}return n},s=function(e){return{sx:{bgcolor:a(e)},children:l(e)}},l=function(e){return"".concat(null===e||void 0===e?void 0:e.split(" ")[0][0].toUpperCase()).concat(null===e||void 0===e?void 0:e.split(" ")[1][0].toUpperCase())}},5481:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/profile",function(){return t(34738)}])}},function(e){e.O(0,[885,228,463,774,888,179],(function(){return r=5481,e(e.s=r);var r}));var r=e.O();_N_E=r}]);