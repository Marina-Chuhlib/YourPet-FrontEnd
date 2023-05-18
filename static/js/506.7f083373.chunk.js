"use strict";(self.webpackChunkyour_pet_frontend=self.webpackChunkyour_pet_frontend||[]).push([[506],{7506:function(e,r,s){s.r(r),s.d(r,{default:function(){return A}});var a=s(5861),n=s(9439),t=s(4687),i=s.n(t),o=s(2791),l=s(7689),d=s(1087),u=s(9434),m=s(5705),c=s(6727),p=s(4554),x=s(7997),f=s(3400),h=s(3710),w=s(9569),g=s(427),b="registerFormDetails_form__wOm+e",Z="registerFormDetails_title__pAFRD",j="registerFormDetails_questionText__V7bgL",_="registerFormDetails_loginLink__yz5Gz",y="registerFormDetails_buttonContainer__5y6Jx",F="registerFormDetails_button__VJfUX",v=s(8724),I=s(3329),P=c.Ry().shape({name:c.Z_().required("Name is required"),email:c.Z_().email("Invalid email").required("Email is required"),password:c.Z_().required("Password is required").min(6,"Password must be at least 6 characters").max(16,"Password must be at most 16 characters").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z]{6,})*$/,"Password must contain at least one uppercase letter, one lowercase letter, and one digit"),confirmPassword:c.Z_().required("Confirm password is required").oneOf([c.iH("password"),null],"Passwords must match")}),C={name:"",email:"",password:"",confirmPassword:""},z=function(){var e=(0,o.useState)(!1),r=(0,n.Z)(e,2),s=r[0],t=r[1],c=(0,o.useState)(!1),z=(0,n.Z)(c,2),D=z[0],A=z[1],B=(0,l.s0)(),R=function(){return t((function(e){return!e}))},q=function(){return A((function(e){return!e}))},k=(0,u.I0)(),M=function(){var e=(0,a.Z)(i().mark((function e(r){var s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={name:r.name,email:r.email,password:r.password},e.next=3,k((0,v.z2)(s));case 3:B("/user");case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(m.J9,{initialValues:C,onSubmit:M,validationSchema:P,children:function(e){var r=e.values,a=e.errors,n=e.touched,t=e.handleSubmit,i=e.handleChange;return(0,I.jsxs)(m.l0,{className:b,onSubmit:t,children:[(0,I.jsx)("h2",{className:Z,children:"Registration"}),(0,I.jsx)(p.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,I.jsx)(x.Z,{name:"name",type:"text",label:"Name",size:"small",fullWidth:!0,sx:{".MuiInputBase-root.MuiOutlinedInput-root":{borderRadius:"40px"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid #54ADFF"}}},onChange:i,value:r.name,error:n.name&&Boolean(a.name),helperText:n.name&&a.name})}),(0,I.jsx)(p.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,I.jsx)(x.Z,{name:"email",type:"email",label:"Email",size:"small",fullWidth:!0,sx:{".MuiInputBase-root.MuiOutlinedInput-root":{borderRadius:"40px"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid #54ADFF"}}},onChange:i,value:r.email,error:n.email&&Boolean(a.email),helperText:n.email&&a.email})}),(0,I.jsx)(p.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,I.jsx)(x.Z,{name:"password",type:s?"text":"password",label:"Password",size:"small",fullWidth:!0,sx:{"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid #54ADFF"}}},InputProps:{endAdornment:(0,I.jsx)(f.Z,{"aria-label":"toggle password visibility",onClick:R,edge:"end",size:"small",children:s?(0,I.jsx)(h.Z,{style:{color:g.Z[300]}}):(0,I.jsx)(w.Z,{style:{color:g.Z[300]}})})},onChange:i,value:r.password,error:n.password&&Boolean(a.password),helperText:n.password&&a.password})}),(0,I.jsx)(p.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,I.jsx)(x.Z,{name:"confirmPassword",type:D?"text":"password",label:"Confirm password",size:"small",fullWidth:!0,sx:{"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid #54ADFF"}}},InputProps:{endAdornment:(0,I.jsx)(f.Z,{"aria-label":"toggle password visibility",onClick:q,edge:"end",size:"small",children:D?(0,I.jsx)(h.Z,{style:{color:g.Z[300]}}):(0,I.jsx)(w.Z,{style:{color:g.Z[300]}})})},onChange:i,value:r.confirmPassword,error:n.confirmPassword&&Boolean(a.confirmPassword),helperText:n.confirmPassword&&a.confirmPassword})}),(0,I.jsx)("div",{className:y,children:(0,I.jsx)("button",{type:"submit",className:F,children:"Registration"})}),(0,I.jsxs)("p",{className:j,children:["Already have an account?"," ",(0,I.jsx)(d.rU,{to:"/login",className:_,children:"Login"})]})]})}})})},D=function(){return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(z,{})})},A=function(){return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(D,{})})}}}]);
//# sourceMappingURL=506.7f083373.chunk.js.map