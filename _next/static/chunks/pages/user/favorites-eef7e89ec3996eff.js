(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{8082:function(r,n,t){"use strict";var e;t.d(n,{G:function(){return e}}),function(r){r.FAVORITES="favorites",r.GROUPS="groups",r.USERS="users",r.USERS_GEOLOCATION="usersGeolocation"}(e||(e={}))},7985:function(r,n,t){"use strict";t.r(n),t.d(n,{default:function(){return $}});var e=t(7812),i=t(7294),s=t(7357),u=t(5861),o=t(5113),c=t(7058),a=t(6489),l=t(9499),d=t(7212),f=t(8987),p=t(7952),h=t(9953),v=t(1519),x=t(8462),j=t(8078),Z=t(5893),b=function(r){for(var n=r.count,t=[],e=0;e<n;e++)t.push(e);return(0,Z.jsx)(x.Z,{sx:{width:240},children:t.map((function(r){return(0,Z.jsxs)(d.ZP,{alignItems:"flex-start",children:[(0,Z.jsx)(f.Z,{children:(0,Z.jsx)(j.Z,{variant:"circular",width:40,height:40})}),(0,Z.jsx)(h.Z,{primary:(0,Z.jsx)(j.Z,{variant:"text"}),secondary:(0,Z.jsx)(u.Z,{component:"span",variant:"body2",children:(0,Z.jsx)(j.Z,{variant:"text"})})})]},r)}))})},m=t(7036),O=t(3486),y=t(2763),g=t(315),w=t(6001);function E(r,n){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),t.push.apply(t,e)}return t}function k(r){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){(0,l.Z)(r,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))}))}return r}var P=function(r){var n=r.users,t=r.onUserClick,e=r.starIcon,i=(0,w.a)().user,s=(0,c.$)().t;if(!n.length)return(0,Z.jsx)(b,{count:6});var o=n[n.length-1].uid;return(0,Z.jsx)(y.CK,{sx:{mr:2,mb:2,bgcolor:"background.paper"},children:n.map((function(r){var n=r.uid===(null===i||void 0===i?void 0:i.uid);return(0,Z.jsxs)(y.xu,{onClick:function(){return t(r)},sx:{cursor:"pointer"},children:[(0,Z.jsxs)(d.ZP,{alignItems:"center",children:[r.displayName&&r.photoURL&&(0,Z.jsx)(f.Z,{children:(0,Z.jsx)(p.Z,k({alt:r.displayName,src:r.photoURL},(0,g.GZ)(r.displayName)))}),(0,Z.jsx)(h.Z,{sx:{color:m.Z[300]},primary:(0,Z.jsxs)(Z.Fragment,{children:[r.displayName,(0,Z.jsx)(u.Z,{variant:"caption",children:n&&s("usersList.itsYou")})]}),secondary:(0,Z.jsx)(u.Z,{component:"span",variant:"body2",color:"Online"===(0,g.Tq)(r.timestamp)?O.Z[400]:m.Z[500],children:(0,g.Tq)(r.timestamp)})}),e&&e(r.uid)]}),o!==r.uid&&(0,Z.jsx)(v.Z,{variant:"inset",component:"li"})]},r.uid)}))})},_=t(3329),C=t(8153),N=t(5137),S=function(r){var n=r.users,t=r.onUserClick,e=r.favorites,i=(0,c.$)().t;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(a.Z,{breadcrumbText:i("favorites.title")}),(0,Z.jsx)(s.Z,{py:2,children:(0,Z.jsx)(u.Z,{variant:"h4",children:i("favorites.title")})}),(0,Z.jsx)(o.Z,{children:(0,Z.jsx)(P,{users:n,onUserClick:t,starIcon:function(r){return null!==e&&void 0!==e&&e.find((function(n){return n===r}))?(0,Z.jsx)(C.Z,{sx:{color:N.Z[500]}}):(0,Z.jsx)(_.Z,{sx:{color:"white"}})}})})]})},U=t(240),T=t(8332),I=t(29),R=t(7794),D=t.n(R),G=t(5321),F=t(2114),L=t(8082);var A=function(){var r=(0,I.Z)(D().mark((function r(n,t){return D().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,G.pl)((0,G.JU)(F.DB,L.G.FAVORITES,n),{users:t,id:n});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})));return function(n,t){return r.apply(this,arguments)}}(),B=t(3936),$=function(){var r=(0,w.a)().user,n=(0,B.Z)(),t=(0,i.useState)([]),s=t[0],u=t[1];if((0,i.useEffect)((function(){if(null!==r&&void 0!==r&&r.uid){var n=(0,G.IO)((0,G.hJ)(F.DB,"favorites"),(0,G.ar)("id","==",null===r||void 0===r?void 0:r.uid));(0,G.cf)(n,(function(r){r.forEach((function(r){u(r.data().users)}))}))}}),[r]),!n||!r)return(0,Z.jsx)(U.Z,{});var o=function(n){u(n),A(r.uid,n)},c=n.filter((function(n){return r.uid!==n.uid})).sort((function(r,n){return null!==s&&void 0!==s&&s.includes(n.uid)?1:null!==s&&void 0!==s&&s.includes(r.uid)?-1:0}));return(0,Z.jsx)(T.Z,{children:(0,Z.jsx)(S,{users:c,onUserClick:function(r){if(!s.some((function(n){return n===r.uid}))&&r.uid){var n=[].concat((0,e.Z)(s),[r.uid]);o(n)}else{var t=s.filter((function(n){return r.uid!==n}));o(t)}},favorites:s})})}},6489:function(r,n,t){"use strict";var e=t(7812),i=t(122),s=t(5861),u=t(2963),o=t(1163),c=t(6215),a=t(7058),l=t(5893);n.Z=function(r){var n=r.otherBreadcrumbs,t=r.breadcrumbText,d=(0,o.useRouter)(),f=(0,a.$)().t,p=[(0,l.jsx)(i.Z,{underline:"hover",color:"inherit",href:"/",onClick:function(){return d.push("/")},children:f("dashboard.title")},"dashboard")].concat((0,e.Z)(null!==n&&void 0!==n?n:[]),[(0,l.jsx)(s.Z,{color:"text.primary",children:t},t)]);return(0,l.jsx)(u.Z,{separator:(0,l.jsx)(c.Z,{}),"aria-label":"breadcrumb",children:p})}},1466:function(r,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/favorites",function(){return t(7985)}])}},function(r){r.O(0,[885,701,953,481,229,162,774,888,179],(function(){return n=1466,r(r.s=n);var n}));var n=r.O();_N_E=n}]);