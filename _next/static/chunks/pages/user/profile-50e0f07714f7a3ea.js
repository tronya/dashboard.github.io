(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[872],{6215:function(e,r,t){"use strict";var n=t(5318);r.Z=void 0;var o=n(t(4938)),i=t(5893),a=(0,o.default)((0,i.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");r.Z=a},2963:function(e,r,t){"use strict";t.d(r,{Z:function(){return P}});var n=t(7462),o=t(3366),i=t(7294),a=(t(9864),t(6010)),c=t(7192),l=t(1496),s=t(7623),u=t(5861),d=t(1796),p=t(8169),f=t(5893),m=(0,p.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),h=t(2607);const v=(0,l.ZP)(h.Z,{skipSx:!0})((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,d._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,d._4)(e.palette.grey[600],.12)})}))),b=(0,l.ZP)(m)({width:24,height:16});var y=function(e){const r=e;return(0,f.jsx)("li",{children:(0,f.jsx)(v,(0,n.Z)({focusRipple:!0},e,{ownerState:r,children:(0,f.jsx)(b,{ownerState:r})}))})},g=t(8979);function x(e){return(0,g.Z)("MuiBreadcrumbs",e)}var Z=(0,t(6087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const j=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,l.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${Z.li}`]:r.li},r.root]})({}),O=(0,l.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),S=(0,l.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function C(e,r,t,n){return e.reduce(((o,i,a)=>(a<e.length-1?o=o.concat(i,(0,f.jsx)(S,{"aria-hidden":!0,className:r,ownerState:n,children:t},`separator-${a}`)):o.push(i),o)),[])}var P=i.forwardRef((function(e,r){const t=(0,s.Z)({props:e,name:"MuiBreadcrumbs"}),{children:l,className:u,component:d="nav",expandText:p="Show path",itemsAfterCollapse:m=1,itemsBeforeCollapse:h=1,maxItems:v=8,separator:b="/"}=t,g=(0,o.Z)(t,j),[Z,S]=i.useState(!1),P=(0,n.Z)({},t,{component:d,expanded:Z,expandText:p,itemsAfterCollapse:m,itemsBeforeCollapse:h,maxItems:v,separator:b}),k=(e=>{const{classes:r}=e;return(0,c.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},x,r)})(P),R=i.useRef(null),A=i.Children.toArray(l).filter((e=>i.isValidElement(e))).map(((e,r)=>(0,f.jsx)("li",{className:k.li,children:e},`child-${r}`)));return(0,f.jsx)(w,(0,n.Z)({ref:r,component:d,color:"text.secondary",className:(0,a.Z)(k.root,u),ownerState:P},g,{children:(0,f.jsx)(O,{className:k.ol,ref:R,ownerState:P,children:C(Z||v&&A.length<=v?A:(e=>h+m>=e.length?e:[...e.slice(0,h),(0,f.jsx)(y,{"aria-label":p,onClick:()=>{S(!0);const e=R.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-m,e.length)])(A),k.separator,b,P)})}))}))},122:function(e,r,t){"use strict";t.d(r,{Z:function(){return w}});var n=t(3366),o=t(7462),i=t(7294),a=t(6010),c=t(7192),l=t(4844),s=t(1796),u=t(8216),d=t(1496),p=t(7623),f=t(8791),m=t(1705),h=t(5861),v=t(8979);function b(e){return(0,v.Z)("MuiLink",e)}var y=(0,t(6087).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g=t(5893);const x=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=(0,d.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`underline${(0,u.Z)(t.underline)}`],"button"===t.component&&r.button]}})((({theme:e,ownerState:r})=>{const t=(0,l.D)(e,`palette.${(e=>Z[e]||e)(r.color)}`)||r.color;return(0,o.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==t?(0,s.Fq)(t,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${y.focusVisible}`]:{outline:"auto"}})}));var w=i.forwardRef((function(e,r){const t=(0,p.Z)({props:e,name:"MuiLink"}),{className:l,color:s="primary",component:d="a",onBlur:h,onFocus:v,TypographyClasses:y,underline:Z="always",variant:w="inherit"}=t,O=(0,n.Z)(t,x),{isFocusVisibleRef:S,onBlur:C,onFocus:P,ref:k}=(0,f.Z)(),[R,A]=i.useState(!1),N=(0,m.Z)(r,k),D=(0,o.Z)({},t,{color:s,component:d,focusVisible:R,underline:Z,variant:w}),L=(e=>{const{classes:r,component:t,focusVisible:n,underline:o}=e,i={root:["root",`underline${(0,u.Z)(o)}`,"button"===t&&"button",n&&"focusVisible"]};return(0,c.Z)(i,b,r)})(D);return(0,g.jsx)(j,(0,o.Z)({className:(0,a.Z)(L.root,l),classes:y,color:s,component:d,onBlur:e=>{C(e),!1===S.current&&A(!1),h&&h(e)},onFocus:e=>{P(e),!0===S.current&&A(!0),v&&v(e)},ref:N,ownerState:D,variant:w},O))}))},4738:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return j}});var n=t(9499),o=t(5113),i=t(7357),a=t(9661),c=t(5861),l=t(1057),s=t(7294),u=t(7058),d=t(2267),p=t(8189),f=t(1795),m=t(6489),h=t(9274),v=t(315),b=t(5893);function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var x=function(){var e=(0,u.$)().t,r=(0,f.a)().user,t=(0,d.Z)().isLocationAllowed,n=(0,s.useState)(!1),y=n[0],x=n[1];return r?(0,b.jsx)(p.K,{isLocationAllowed:y,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m.Z,{breadcrumbText:e("profile.title")}),(0,b.jsx)(h.Z,{title:e("profile.title")}),(0,b.jsx)(o.Z,{children:(0,b.jsxs)(i.Z,{display:"flex",flexDirection:"column",p:6,alignItems:"center",children:[r.displayName&&r.photoURL&&(0,b.jsx)(a.Z,g({alt:r.displayName,src:r.photoURL},((0,v.GZ)(r.displayName),{width:120,height:120}))),(0,b.jsxs)(i.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:6,children:[(0,b.jsx)(c.Z,{variant:"h6",sx:{color:"common.white"},children:r.displayName}),(0,b.jsx)(c.Z,{variant:"h6",sx:{color:"common.white"},children:r.email})]})]})}),!t&&(0,b.jsx)(i.Z,{width:1,mt:2,children:(0,b.jsx)(l.Z,{variant:"contained",fullWidth:!0,sx:{color:"common.white",backgroundColor:"green !important"},onClick:function(){return x(!0)},children:e("profile.allowLocationButtonText")})})]})}):null},Z=t(7932),j=function(){return(0,b.jsx)(Z.Z,{children:(0,b.jsx)(x,{})})}},6489:function(e,r,t){"use strict";var n=t(7812),o=t(122),i=t(5861),a=t(2963),c=t(1163),l=t(6215),s=t(7058),u=t(5893);r.Z=function(e){var r=e.otherBreadcrumbs,t=e.breadcrumbText,d=(0,c.useRouter)(),p=(0,s.$)().t,f=[(0,u.jsx)(o.Z,{underline:"hover",color:"inherit",href:"/",onClick:function(){return d.push("/")},children:p("dashboard.title")},"dashboard")].concat((0,n.Z)(null!==r&&void 0!==r?r:[]),[(0,u.jsx)(i.Z,{color:"text.primary",children:t},t)]);return(0,u.jsx)(a.Z,{separator:(0,u.jsx)(l.Z,{}),"aria-label":"breadcrumb",children:f})}},9274:function(e,r,t){"use strict";var n=t(5861),o=t(5893);r.Z=function(e){var r=e.title;return(0,o.jsx)(n.Z,{variant:"h3",component:"div",children:r})}},2267:function(e,r,t){"use strict";var n=t(7294),o=t(2132),i=t(9865),a=t(1795),c=t(3936);r.Z=function(){var e,r,t=(0,n.useState)([]),l=t[0],s=t[1],u=(0,a.a)().user,d=(0,c.Z)();(0,n.useEffect)((function(){(0,i.R)().then((function(e){return s(e)})).catch((function(e){return o.Am.error(e)}))}),[]);var p=null!==(e=null===l||void 0===l||null===(r=l.find((function(e){return e.uid===(null===u||void 0===u?void 0:u.uid)})))||void 0===r?void 0:r.isLocationAllowed)&&void 0!==e&&e;return{currentUserGeolocation:d.find((function(e){return e.uid===(null===u||void 0===u?void 0:u.uid)})),isLocationAllowed:p}}},8189:function(e,r,t){"use strict";t.d(r,{K:function(){return m},H:function(){return f}});var n=t(1163),o=t(7294),i=t(7058),a=t(2132),c=t(1795),l=t(9865),s=t(6256),u=t(2114),d=function(e,r){return(0,s.t8)((0,s.iH)(u.UO,"usersGeolocation/".concat(e)),r)},p=t(5893),f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=(0,n.useRouter)(),t=(0,c.a)(),l=(0,i.$)(),s=l.t,u=(0,o.useState)(),p=u[0],f=u[1];return(0,o.useEffect)((function(){e&&navigator.geolocation.getCurrentPosition((function(e){var n,o,i,c,l,u={coords:{accuracy:e.coords.accuracy,altitude:e.coords.altitude,altitudeAccuracy:e.coords.altitudeAccuracy,heading:e.coords.heading,latitude:e.coords.latitude,longitude:e.coords.longitude,speed:e.coords.speed},timestamp:e.timestamp,displayName:null===(n=t.user)||void 0===n?void 0:n.displayName,photoURL:null===(o=t.user)||void 0===o?void 0:o.photoURL,uid:null!==(i=null===(c=t.user)||void 0===c?void 0:c.uid)&&void 0!==i?i:""};f(e),d(null===(l=t.user)||void 0===l?void 0:l.uid,u),a.Am.success(s("toastSuccess.acceptGeolocation")),r.push("/")}),(function(e){a.Am.error(e.message)}))}),[e,r,s,t]),p},m=function(e){var r=e.isLocationAllowed,t=e.children,n=f(r),i=(0,c.a)();return(0,o.useEffect)((function(){n&&(0,l.A)(i,r)}),[n,i,r]),(0,p.jsx)(p.Fragment,{children:t})}},3936:function(e,r,t){"use strict";var n=t(9499),o=t(6835),i=t(6256),a=t(7294),c=t(2114);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}r.Z=function(){var e=(0,a.useState)([]),r=e[0],t=e[1];return(0,a.useEffect)((function(){(0,i.jM)((0,i.iH)(c.UO,"usersGeolocation"),(function(e){var r,i=null===(r=Object.entries(e.val()))||void 0===r?void 0:r.map((function(e){var r=(0,o.Z)(e,2);r[0];return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},r[1])}));t(i)}))}),[]),r}},5481:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/profile",function(){return t(4738)}])},6835:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(2937);function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,r)||(0,n.Z)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[885,389,240,983,774,888,179],(function(){return r=5481,e(e.s=r);var r}));var r=e.O();_N_E=r}]);