"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50],{8082:function(r,e,n){var t;n.d(e,{G:function(){return t}}),function(r){r.FAVORITES="favorites",r.GROUPS="groups",r.USERS="users",r.USERS_GEOLOCATION="usersGeolocation"}(t||(t={}))},5152:function(r,e,n){n.d(e,{jA:function(){return d},YK:function(){return x}});var t=n(7812),o=n(9499),i=n(29),c=n(7794),u=n.n(c),s=n(5321),a=n(2114),l=n(8082);function f(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function p(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){(0,o.Z)(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}var h=function(){var r=(0,i.Z)(u().mark((function r(e){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=(0,s.hJ)(a.DB,l.G.GROUPS),!e){r.next=7;break}return r.next=4,(0,s.PL)((0,s.IO)(n,(0,s.ar)("users","array-contains",e)));case 4:return r.abrupt("return",r.sent);case 7:return r.next=9,(0,s.PL)((0,s.IO)(n));case 9:return r.abrupt("return",r.sent);case 10:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),d=function(){var r=(0,i.Z)(u().mark((function r(e){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,h(e);case 2:return n=r.sent,t=[],n.forEach((function(r){var e=p({id:r.id},r.data());t.push(e)})),r.abrupt("return",t);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),x=function(){var r=(0,i.Z)(u().mark((function r(e,n){var o;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(null!==(o=n.user)&&void 0!==o&&o.uid){r.next=2;break}return r.abrupt("return",null);case 2:return r.next=4,(0,s.ET)((0,s.hJ)(a.DB,l.G.GROUPS),p(p({},e),{},{users:[].concat((0,t.Z)(e.users),[n.user.uid]),userCreate:n.user.uid}));case 4:return r.abrupt("return",r.sent);case 5:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}()},6489:function(r,e,n){var t=n(7812),o=n(122),i=n(5861),c=n(2963),u=n(1163),s=n(6215),a=n(7058),l=n(5893);e.Z=function(r){var e=r.otherBreadcrumbs,n=r.breadcrumbText,f=r.breadcrumbTextHref,p=(0,u.useRouter)(),h=(0,a.$)().t,d=[(0,l.jsx)(o.Z,{underline:"hover",color:"inherit",href:"/",onClick:function(){return p.push("/")},children:h("dashboard.title")},"dashboard"),(0,l.jsx)(i.Z,{color:"text.primary",sx:{"&:hover":{cursor:null!==e&&void 0!==e&&e.length?"pointer":"default"}},onClick:function(){return(null===e||void 0===e?void 0:e.length)&&f&&p.push(f)},children:n},n)].concat((0,t.Z)(null!==e&&void 0!==e?e:[]));return(0,l.jsx)(c.Z,{separator:(0,l.jsx)(s.Z,{}),"aria-label":"breadcrumb",children:d})}},9274:function(r,e,n){var t=n(5861),o=n(5893);e.Z=function(r){var e=r.title;return(0,o.jsx)(t.Z,{variant:"h3",component:"div",children:e})}},4447:function(r,e,n){n.d(e,{Z:function(){return H}});var t=n(1927),o=n(155),i=n(7948),c=n(7357),u=n(6720),s=n(9499),a=n(3946),l=n(5861),f=n(3984),p=n(7952),h=n(1057),d=n(7294),x=n(326),j=n(1496),O=n(2293),v=n(8459);function b(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}var g=(0,j.ZP)(O.Z,{shouldForwardProp:function(r){return"open"!==r}})((function(r){var e=r.theme,n=r.open;return function(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){(0,s.Z)(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}({zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},n&&{marginLeft:v.pG,width:"calc(100% - ".concat(v.pG,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})})})),y=n(7058),w=n(6863),m=n(5893),Z=function(){var r=(0,y.$)().i18n,e=function(e){return r.changeLanguage(e.currentTarget.value)};return(0,m.jsxs)(w.Z,{variant:"outlined",children:[(0,m.jsx)(h.Z,{onClick:e,value:"en",sx:{color:"white"},children:"EN"}),(0,m.jsx)(h.Z,{onClick:e,value:"ua",sx:{color:"white"},children:"UA"})]})},P=n(7533),E=n(7212),k=n(796),D=n(9953),L=n(1519),S=n(1163),T=function(r){var e=r.open,n=r.toggleDrawer,t=r.anchor,o=r.signOutButton,i=r.drawerList,u=(0,S.useRouter)(),s=(0,y.$)().t;return(0,m.jsx)(P.ZP,{anchor:t,open:e,onClose:n(!1,t),children:(0,m.jsxs)(c.Z,{width:250,height:"100%",role:"presentation",display:"flex",justifyContent:"space-between",flexDirection:"column",onClick:n(!1,t),onKeyDown:n(!1,t),children:[(0,m.jsxs)(c.Z,{pt:8,children:[i.map((function(r){return(0,m.jsxs)(E.ZP,{button:!0,href:r.href,onClick:function(e){return function(r,e){r.preventDefault(),u.push(e)}(e,r.href)},children:[(0,m.jsx)(k.Z,{children:r.icon}),(0,m.jsx)(D.Z,{primary:s(r.text),sx:{color:"common.white"}})]},r.text)})),(0,m.jsx)(L.Z,{})]}),o]})})},C=n(6001),G=n(315),I=n(8530),N=n(2132),R=n(5398),A=n(2684),B=n(8153),U=[{href:"/user/profile",text:"profile.title",icon:(0,m.jsx)(R.Z,{sx:{color:"common.white"}})},{href:"/user/favorites",text:"favorites.title",icon:(0,m.jsx)(B.Z,{sx:{color:"common.white"}})}],F=[{href:"/groups/main",text:"mainMenu.groups",icon:(0,m.jsx)(A.Z,{sx:{color:"common.white"}})}];function _(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function K(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){(0,s.Z)(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}var $=function(){var r=(0,y.$)().t,e=(0,C.a)().user,n=(0,S.useRouter)(),t=(0,I.v0)(),i=(0,d.useState)({left:!1,right:!1}),u=i[0],j=i[1],O=function(r,e){return function(n){if("keydown"===n.type&&("Tab"===n.key||"Shift"===n.key))return null;j(K(K({},u),{},(0,s.Z)({},e,r)))}};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g,{position:"absolute",open:!1,children:(0,m.jsxs)(o.Z,{children:[(0,m.jsx)(a.Z,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){return j((function(r){return K(K({},u),{},{left:!r.left})}))},sx:{marginRight:"36px"},children:(0,m.jsx)(x.Z,{})}),(0,m.jsx)(l.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1,cursor:"pointer"},onClick:function(r){r.preventDefault(),n.push("/")},children:r("dashboard.title")}),(0,m.jsx)(c.Z,{pr:1,children:(0,m.jsx)(Z,{})}),e&&e.displayName&&e.photoURL&&(0,m.jsx)(f.Z,{title:"Open settings",children:(0,m.jsx)(a.Z,{sx:{p:0},onClick:function(){return j((function(r){return K(K({},u),{},{right:!r.right})}))},children:(0,m.jsx)(p.Z,K({alt:e.displayName,src:e.photoURL},(0,G.GZ)(e.displayName)))})})]})}),(0,m.jsx)(T,{open:u.left,toggleDrawer:O,anchor:v.yG.LEFT,drawerList:F}),(0,m.jsx)(T,{open:u.right,toggleDrawer:O,anchor:v.yG.RIGHT,signOutButton:(0,m.jsx)(c.Z,{p:2,display:"flex",justifyContent:"center",children:(0,m.jsx)(h.Z,{onClick:function(){return(0,I.w7)(t).then((function(){N.Am.success(r("toastSuccess.logOut")),n.push("/login")})).catch((function(r){return N.Am.error("Error: ".concat(r))}))},variant:"outlined",size:"large",sx:{color:"white"},children:r("drawer.signOutButtonText")})}),drawerList:U})]})},z=n(4106),H=function(r){var e=r.children;return(0,m.jsx)(t.Z,{theme:z.Z,children:(0,m.jsxs)(c.Z,{sx:{display:"flex"},children:[(0,m.jsx)(u.ZP,{}),(0,m.jsx)($,{}),(0,m.jsxs)(c.Z,{component:"main",sx:{flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,m.jsx)(o.Z,{}),(0,m.jsx)(i.Z,{maxWidth:"xl",sx:{mt:2,mb:2},children:e})]})]})})}},8459:function(r,e,n){n.d(e,{pG:function(){return i},TW:function(){return t},yG:function(){return o}});var t,o,i=240;!function(r){r.DESKTOP="DESKTOP",r.TABLET="TABLET",r.MOBILE="MOBILE",r.INITIAL="INITIAL"}(t||(t={})),function(r){r.RIGHT="right",r.LEFT="left"}(o||(o={}))},315:function(r,e,n){n.d(e,{Tq:function(){return c},GZ:function(){return s},Yd:function(){return a}});var t,o=n(381),i=n.n(o);!function(r){r.OFFLINE="Offline",r.ONLINE="Online"}(t||(t={}));var c=function(r){var e=i()().valueOf(),n=i()(e).diff(i()(r));return+i()(n).format("m")>2?t.OFFLINE:t.ONLINE},u=function(r){var e,n=0;for(e=0;e<r.length;e+=1)n=r.charCodeAt(e)+((n<<5)-n);var t="#";for(e=0;e<3;e+=1){t+="00".concat((n>>8*e&255).toString(16)).substr(-2)}return t},s=function(r){return{sx:{bgcolor:u(r)},children:a(r)}},a=function(r){return"".concat(null===r||void 0===r?void 0:r.split(" ")[0][0].toUpperCase()).concat(null===r||void 0===r?void 0:r.split(" ")[1][0].toUpperCase())}}}]);