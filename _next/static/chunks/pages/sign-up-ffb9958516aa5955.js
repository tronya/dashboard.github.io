(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[801],{44387:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return c}});var r=i(67294),t=i(54122),s=function(e){var n=e.onSignUp;return(0,r.createElement)(t.Z,{onAuthUser:n,title:"Sign Up",switchPagesHref:"/sign-in",switchPagesTitle:"Already have an account? Sign In"})},a=i(88530),o=i(11163),l=i(72132),d=i(85893),c=function(){var e=(0,a.v0)(),n=(0,o.useRouter)();return(0,d.jsx)(s,{onSignUp:function(i,r){if("email"===i){var t=r,s=t.email,o=t.password;(0,a.Xb)(e,s,o).then((function(e){e.user&&n.push("/sign-in")})).catch((function(e){return l.Am.error(e.message)}))}}})}},54122:function(e,n,i){"use strict";i.d(n,{Z:function(){return j}});var r=i(86886),t=i(87357),s=i(50122),a=i(15861),o=i(67473),l=i(11057),d=i(21519),c=i(82580),u=i(11163),h=i(34106),m=i(85893),p=function(){return(0,m.jsxs)(a.Z,{variant:"body2",color:"text.secondary",align:"center",sx:{mt:5},children:["Copyright \xa9 ",(0,m.jsx)(s.Z,{color:"inherit",href:"https://tronya.github.io",children:"whereiam"})," ",(new Date).getFullYear()]})},f=function(){return(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"30px",height:"30px",children:[(0,m.jsx)("path",{fill:"#fbc02d",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\ts5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20\ts20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),(0,m.jsx)("path",{fill:"#e53935",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039\tl5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),(0,m.jsx)("path",{fill:"#4caf50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\tc-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),(0,m.jsx)("path",{fill:"#1565c0",d:"M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\tc0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})]})},x=function(e){var n=e.onSignIn,i=e.fullWidth;return(0,m.jsxs)(l.Z,{variant:"outlined",onClick:function(){return n("google")},fullWidth:i,children:[(0,m.jsx)(f,{}),(0,m.jsx)(t.Z,{pl:1,children:"Login with Google"})]})},g=i(74231),w=g.Ry({email:g.Z_().email("Invalid email format").required("Email address is required"),password:g.Z_().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")}),j=function(e){var n=e.onAuthUser,i=e.title,f=e.switchPagesTitle,g=e.switchPagesHref,j=e.isSignInPage,v=(0,c.TA)({initialValues:{email:"",password:""},validationSchema:w,onSubmit:function(e){var i=e.email,r=e.password;return n("email",{email:i,password:r})}});return(0,m.jsxs)(r.ZP,{container:!0,component:"main",sx:{height:"100vh"},children:[(0,m.jsx)(r.ZP,{item:!0,xs:!1,sm:4,md:5,sx:{backgroundImage:"url(https://www.pngkit.com/png/full/332-3325220_transparent-cat-face-tumblr-download-.png)",backgroundRepeat:"no-repeat",backgroundColor:h.Z.palette.primary.main,backgroundSize:"cover",backgroundPosition:"center"}}),(0,m.jsx)(r.ZP,{item:!0,xs:12,sm:8,md:7,sx:{height:"100vh"},children:(0,m.jsxs)(t.Z,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",py:2,px:4,children:[(0,m.jsx)(t.Z,{width:1,display:"flex",justifyContent:"flex-end",children:(0,m.jsx)(s.Z,{component:"button",href:"#",variant:"body2",disabled:!0,children:"Need help?"})}),(0,m.jsxs)(t.Z,{display:"flex",flexDirection:"column",width:1,alignItems:"center",component:"form",noValidate:!0,onSubmit:v.handleSubmit,sx:{mt:1},children:[(0,m.jsx)(a.Z,{component:"h1",variant:"h5",children:i}),(0,m.jsx)(o.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Email Address",name:"email",autoComplete:"email",error:Boolean(v.errors.email),helperText:v.errors.email,value:v.values.email,onChange:v.handleChange}),(0,m.jsx)(o.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",value:v.values.password,onChange:v.handleChange,autoComplete:"current-password",error:Boolean(v.errors.password),helperText:v.errors.password}),(0,m.jsx)(l.Z,{type:"submit",disabled:!(v.isValid&&v.dirty),fullWidth:!0,variant:"outlined",sx:{mt:3,mb:2},children:i}),(0,m.jsxs)(r.ZP,{container:!0,children:[(0,m.jsx)(r.ZP,{item:!0,xs:!0,children:j&&(0,m.jsx)(s.Z,{component:"button",href:"#",variant:"body2",disabled:!0,children:"Forgot password?"})}),(0,m.jsx)(r.ZP,{item:!0,children:(0,m.jsx)(s.Z,{component:"button",href:"/sign-up",variant:"body2",onClick:function(){return u.default.push(g)},children:f})})]}),j&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{width:1,m:5,children:(0,m.jsx)(d.Z,{children:(0,m.jsx)(a.Z,{children:"OR"})})}),(0,m.jsx)(x,{onSignIn:function(){return n("google")},fullWidth:!0})]})]}),(0,m.jsx)(p,{})]})})]})}},89015:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-up",function(){return i(44387)}])}},function(e){e.O(0,[241,220,573,774,888,179],(function(){return n=89015,e(e.s=n);var n}));var n=e.O();_N_E=n}]);