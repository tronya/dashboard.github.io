(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[257],{5152:function(e,r,t){"use strict";t.d(r,{jA:function(){return f},YK:function(){return p}});var n=t(9499),u=t(29),s=t(7794),i=t.n(s),c=t(5321),o=t(2114);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=function(){var e=(0,u.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.PL)((0,c.hJ)(o.DB,"groups"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,u.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().then((function(e){var r=[];return e.forEach((function(e){var t=l({id:e.id},e.data());r.push(t)})),r}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,u.Z)(i().mark((function e(r,t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(n=t.user)&&void 0!==n&&n.uid){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,(0,c.ET)((0,c.hJ)(o.DB,"groups"),l(l({},r),{},{userCreate:t.user.uid}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()},988:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return F}});var n=t(6886),u=t(7473),s=t(5861),i=t(1057),c=t(9274),o=t(7932),a=t(2580),l=t(4231),d=t(7058),f=t(9499),p=t(7812),h=t(8462),m=t(7212),b=t(5071),j=t(8619),v=t(8987),x=t(9661),y=t(9953),O=t(7294),Z=t(2132),g=t(9865),w=t(315),P=t(5893);function k(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?k(Object(t),!0).forEach((function(r){(0,f.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var E=function(e){var r=e.selectedUsers,t=(0,O.useState)([]),n=t[0],u=t[1],s=(0,O.useState)([]),i=s[0],c=s[1];(0,O.useEffect)((function(){(0,g.R)().then((function(e){return c(e)})).catch((function(e){return Z.Am.error(e)}))}),[]);return(0,P.jsx)(h.Z,{dense:!0,sx:{width:"100%",maxWidth:360},children:i.map((function(e){var t,s="checkbox-list-secondary-label-".concat(e.uid);return(0,P.jsx)(m.ZP,{secondaryAction:(0,P.jsx)(b.Z,{edge:"end",onChange:(t=e.uid,function(){var e=(0,p.Z)(n);e.includes(t)?e.splice(e.indexOf(t),1):e.push(t),u(e),r(e)}),checked:n.includes(e.uid),inputProps:{"aria-labelledby":s}}),disablePadding:!0,children:(0,P.jsxs)(j.Z,{children:[(0,P.jsx)(v.Z,{children:(0,P.jsx)(x.Z,_({alt:"Avatar n\xb0".concat(e.displayName),src:e.photoURL},(0,w.GZ)(e.displayName)))}),(0,P.jsx)(y.Z,{id:s,primary:e.displayName})]})},e.uid)}))})},D=t(265),N=t(1795),S=t(5152),C=t(6489),A=t(1163),F=function(){var e=(0,d.$)().t,r=(0,N.a)(),t=l.Ry({name:l.Z_().min(4,"Group name should be of minimum 4 characters length").required("Name is required"),users:l.IX().min(1,"You should select minimum one User").required("Users should be selected")}),f=(0,a.TA)({initialValues:{name:"",users:[]},validationSchema:t,onSubmit:function(e){return function(e){var r=e.fields,t=e.user;return(0,S.YK)(r,t).then((function(){Z.Am.success("".concat(r.name," is successfully creeated!")),A.default.push("/groups/main")})).catch((function(e){Z.Am.error("error",e)}))}({fields:e,user:r})}});return(0,P.jsxs)(o.Z,{children:[(0,P.jsx)(C.Z,{breadcrumbText:e("titles.groups")}),(0,P.jsx)(c.Z,{title:e("titles.groups\u0421reate")}),(0,P.jsx)(n.ZP,{container:!0,justifyContent:"center",sx:{mt:2},children:(0,P.jsx)(n.ZP,{item:!0,xs:12,sm:6,children:(0,P.jsxs)("form",{onSubmit:f.handleSubmit,children:[(0,P.jsx)(u.Z,{sx:{m:1},fullWidth:!0,id:"name",name:"name",label:e("forms.createGroupForm.groupName"),value:f.values.name,onChange:f.handleChange,error:f.touched.name&&Boolean(f.errors.name),helperText:f.touched.name&&f.errors.name}),(0,P.jsx)(s.Z,{variant:"body1",sx:{m:1},children:e("forms.createGroupForm.addUsers")}),(0,P.jsx)(E,{selectedUsers:function(e){f.setFieldValue("users",e)}}),!!f.getFieldMeta("users").touched&&!!f.getFieldMeta("users").error&&(0,P.jsx)(s.Z,{variant:"caption",display:"block",color:D.Z[500],sx:{m:1},gutterBottom:!0,children:f.getFieldMeta("users").error}),(0,P.jsx)(i.Z,{type:"submit",disabled:!(f.isValid&&f.dirty),fullWidth:!0,variant:"outlined",sx:{mt:3,mb:2},children:e("forms.createGroupForm.submit")})]})})})]})}},6489:function(e,r,t){"use strict";var n=t(7812),u=t(122),s=t(5861),i=t(2963),c=t(1163),o=t(6215),a=t(7058),l=t(5893);r.Z=function(e){var r=e.otherBreadcrumbs,t=e.breadcrumbText,d=(0,c.useRouter)(),f=(0,a.$)().t,p=[(0,l.jsx)(u.Z,{underline:"hover",color:"inherit",href:"/",onClick:function(){return d.push("/")},children:f("dashboard.title")},"dashboard")].concat((0,n.Z)(null!==r&&void 0!==r?r:[]),[(0,l.jsx)(s.Z,{color:"text.primary",children:t},t)]);return(0,l.jsx)(i.Z,{separator:(0,l.jsx)(o.Z,{}),"aria-label":"breadcrumb",children:p})}},9274:function(e,r,t){"use strict";var n=t(5861),u=t(5893);r.Z=function(e){var r=e.title;return(0,u.jsx)(n.Z,{variant:"h3",component:"div",children:r})}},2996:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/groups/create",function(){return t(988)}])}},function(e){e.O(0,[885,389,240,792,493,983,774,888,179],(function(){return r=2996,e(e.s=r);var r}));var r=e.O();_N_E=r}]);