(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[883],{9944:function(e,t,r){"use strict";var n=r(5318);t.Z=void 0;var i=n(r(4938)),o=r(5893),a=(0,i.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"Help");t.Z=a},6886:function(e,t,r){"use strict";r.d(t,{ZP:function(){return b}});var n=r(3366),i=r(7462),o=r(7294),a=r(6010),s=r(5408),c=r(9707),u=r(7192),p=r(1496),d=r(7623);var l=o.createContext(),f=r(8979);function m(e){return(0,f.Z)("MuiGrid",e)}const g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var h=(0,r(6087).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...g.map((e=>`grid-xs-${e}`)),...g.map((e=>`grid-sm-${e}`)),...g.map((e=>`grid-md-${e}`)),...g.map((e=>`grid-lg-${e}`)),...g.map((e=>`grid-xl-${e}`))]),v=r(5893);const x=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function w(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function y(e,t,r={}){if(!t||!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[r[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`];const{xs:n,sm:i,md:o,lg:a,xl:s}=e;return[Number(n)>0&&(r[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`),Number(i)>0&&(r[`spacing-sm-${String(i)}`]||`spacing-sm-${String(i)}`),Number(o)>0&&(r[`spacing-md-${String(o)}`]||`spacing-md-${String(o)}`),Number(a)>0&&(r[`spacing-lg-${String(a)}`]||`spacing-lg-${String(a)}`),Number(s)>0&&(r[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const S=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{container:r,direction:n,item:i,lg:o,md:a,sm:s,spacing:c,wrap:u,xl:p,xs:d,zeroMinWidth:l}=e.ownerState;return[t.root,r&&t.container,i&&t.item,l&&t.zeroMinWidth,...y(c,r,t),"row"!==n&&t[`direction-xs-${String(n)}`],"wrap"!==u&&t[`wrap-xs-${String(u)}`],!1!==d&&t[`grid-xs-${String(d)}`],!1!==s&&t[`grid-sm-${String(s)}`],!1!==a&&t[`grid-md-${String(a)}`],!1!==o&&t[`grid-lg-${String(o)}`],!1!==p&&t[`grid-xl-${String(p)}`]]}})((({ownerState:e})=>(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"nowrap"===e.wrap&&{flexWrap:"nowrap"},"reverse"===e.wrap&&{flexWrap:"wrap-reverse"})),(function({theme:e,ownerState:t}){const r=(0,s.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},r,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${h.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:r,rowSpacing:n}=t;let i={};if(r&&0!==n){const t=(0,s.P$)({values:n,breakpoints:e.breakpoints.values});i=(0,s.k9)({theme:e},t,(t=>{const r=e.spacing(t);return"0px"!==r?{marginTop:`-${w(r)}`,[`& > .${h.item}`]:{paddingTop:w(r)}}:{}}))}return i}),(function({theme:e,ownerState:t}){const{container:r,columnSpacing:n}=t;let i={};if(r&&0!==n){const t=(0,s.P$)({values:n,breakpoints:e.breakpoints.values});i=(0,s.k9)({theme:e},t,(t=>{const r=e.spacing(t);return"0px"!==r?{width:`calc(100% + ${w(r)})`,marginLeft:`-${w(r)}`,[`& > .${h.item}`]:{paddingLeft:w(r)}}:{}}))}return i}),(function({theme:e,ownerState:t}){let r;return e.breakpoints.keys.reduce(((n,o)=>{let a={};if(t[o]&&(r=t[o]),!r)return n;if(!0===r)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.P$)({values:t.columns,breakpoints:e.breakpoints.values}),u="object"===typeof c?c[o]:c;if(void 0===u||null===u)return n;const p=Math.round(r/u*1e8)/1e6+"%";let d={};if(t.container&&t.item&&0!==t.columnSpacing){const r=e.spacing(t.columnSpacing);if("0px"!==r){const e=`calc(${p} + ${w(r)})`;d={flexBasis:e,maxWidth:e}}}a=(0,i.Z)({flexBasis:p,flexGrow:0,maxWidth:p},d)}return 0===e.breakpoints.values[o]?Object.assign(n,a):n[e.breakpoints.up(o)]=a,n}),{})}));var b=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiGrid"}),s=(0,c.Z)(r),{className:p,columns:f,columnSpacing:g,component:h="div",container:w=!1,direction:b="row",item:$=!1,lg:O=!1,md:M=!1,rowSpacing:k,sm:P=!1,spacing:j=0,wrap:_="wrap",xl:C=!1,xs:W=!1,zeroMinWidth:Z=!1}=s,z=(0,n.Z)(s,x),N=k||j,A=g||j,D=o.useContext(l),E=f||D||12,H=(0,i.Z)({},s,{columns:E,container:w,direction:b,item:$,lg:O,md:M,sm:P,rowSpacing:N,columnSpacing:A,wrap:_,xl:C,xs:W,zeroMinWidth:Z}),R=(e=>{const{classes:t,container:r,direction:n,item:i,lg:o,md:a,sm:s,spacing:c,wrap:p,xl:d,xs:l,zeroMinWidth:f}=e,g={root:["root",r&&"container",i&&"item",f&&"zeroMinWidth",...y(c,r),"row"!==n&&`direction-xs-${String(n)}`,"wrap"!==p&&`wrap-xs-${String(p)}`,!1!==l&&`grid-xs-${String(l)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==d&&`grid-xl-${String(d)}`]};return(0,u.Z)(g,m,t)})(H);return G=(0,v.jsx)(S,(0,i.Z)({ownerState:H,className:(0,a.Z)(R.root,p),as:h,ref:t},z)),12!==E?(0,v.jsx)(l.Provider,{value:E,children:G}):G;var G}))},8e3:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var i=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=i},5646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(o.AmpStateContext))};var n,i=(n=r(7294))&&n.__esModule?n:{default:n},o=r(8e3);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,i=void 0!==n&&n,o=e.hasQuery,a=void 0!==o&&o;return r||i&&a}},2717:function(e,t,r){"use strict";var n=r(930);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),s=(o=r(1585))&&o.__esModule?o:{default:o},c=r(8e3),u=r(5850),p=r(5646);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(i){var o=!0,a=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){a=!0;var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var p=f[c];if(i.props.hasOwnProperty(p))if("charSet"===p)r.has(p)?o=!1:r.add(p);else{var d=i.props[p],l=n[p]||new Set;"name"===p&&a||!l.has(d)?(l.add(d),n[p]=l):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,a.default.cloneElement(e,s)}return a.default.cloneElement(e,{key:o})}))}var g=function(e){var t=e.children,r=a.useContext(c.AmpStateContext),n=a.useContext(u.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:m,headManager:n,inAmpMode:p.isInAmpMode(r)},t)};t.default=g},1585:function(e,t,r){"use strict";var n=r(7980),i=r(3227),o=r(8361),a=(r(2191),r(5971)),s=r(2715),c=r(1193);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var i=c(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return s(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var d=function(e){a(r,e);var t=u(r);function r(e){var o;return i(this,r),(o=t.call(this,e)).emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(p.Component);t.default=d},1634:function(){},9008:function(e,t,r){e.exports=r(2717)}}]);