"use strict";(self.webpackChunkyour_pet_frontend=self.webpackChunkyour_pet_frontend||[]).push([[828],{2828:function(r,e,t){t.r(e),t.d(e,{default:function(){return V}});var n=t(2791),a=t(9434),o=t(1483),i=t(9230),s=t(3625),l=function(r){return r.friends.items},c=function(r){return r.friends.isLoading},d=t(1413),u=t(9439),m=t(890),p="WorkDaysDropdown_customTypography__zd0pb",h="WorkDaysDropdown_timeBox__J92OR",v="WorkDaysDropdown_timeList__NYJBe",f="WorkDaysDropdown_timeItem__B5br4",g=t(3329),y=function(r){var e=r.workDays,t=(0,n.useState)(!1),a=(0,u.Z)(t,2),o=a[0],s=a[1],l=(0,i.$G)().t,c=(0,n.useState)(function(){if(e&&e.length>0){var r=e[0],t=r.from?r.from:"11:00",n=r.to?r.to:"16:00";return"".concat(t," - ").concat(n)}return"Default time range"}()),d=(0,u.Z)(c,1)[0];var y=[l("MN"),l("TU"),l("WE"),l("TH"),l("FR"),l("SA"),l("SU")];return(0,g.jsxs)("div",{children:[(0,g.jsxs)(m.Z,{variant:"body1",component:"p",gutterBottom:!0,onClick:function(){s(!o)},className:p,sx:{"&:hover":{color:"#54ADFF",cursor:"pointer"}},children:[(0,g.jsxs)("strong",{children:[l("Time"),":"]})," ",(0,g.jsx)("br",{})," ",d]}),o&&(0,g.jsx)("div",{onClick:function(r){r.stopPropagation()},className:h,children:e.length>0?(0,g.jsx)("ul",{className:v,children:e.map((function(r,e){return(0,g.jsxs)("li",{className:f,children:[(0,g.jsx)("strong",{children:y[e]})," ",r.from,"-",r.to]},e)}))}):(0,g.jsx)("div",{children:"No working hours available"})})]})},x=t(4942),Z=t(3366),b=t(7462),j=t(8182),_=t(4419),w=t(1402),N=t(6934),C=t(5878),k=t(1217);function M(r){return(0,k.Z)("MuiCardHeader",r)}var P=(0,C.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),T=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],B=(0,N.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(r,e){var t;return(0,b.Z)((t={},(0,x.Z)(t,"& .".concat(P.title),e.title),(0,x.Z)(t,"& .".concat(P.subheader),e.subheader),t),e.root)}})({display:"flex",alignItems:"center",padding:16}),S=(0,N.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(r,e){return e.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),F=(0,N.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(r,e){return e.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),D=(0,N.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(r,e){return e.content}})({flex:"1 1 auto"}),R=n.forwardRef((function(r,e){var t=(0,w.Z)({props:r,name:"MuiCardHeader"}),n=t.action,a=t.avatar,o=t.className,i=t.component,s=void 0===i?"div":i,l=t.disableTypography,c=void 0!==l&&l,d=t.subheader,u=t.subheaderTypographyProps,p=t.title,h=t.titleTypographyProps,v=(0,Z.Z)(t,T),f=(0,b.Z)({},t,{component:s,disableTypography:c}),y=function(r){var e=r.classes;return(0,_.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},M,e)}(f),x=p;null==x||x.type===m.Z||c||(x=(0,g.jsx)(m.Z,(0,b.Z)({variant:a?"body2":"h5",className:y.title,component:"span",display:"block"},h,{children:x})));var N=d;return null==N||N.type===m.Z||c||(N=(0,g.jsx)(m.Z,(0,b.Z)({variant:a?"body2":"body1",className:y.subheader,color:"text.secondary",component:"span",display:"block"},u,{children:N}))),(0,g.jsxs)(B,(0,b.Z)({className:(0,j.Z)(y.root,o),as:s,ref:e,ownerState:f},v,{children:[a&&(0,g.jsx)(S,{className:y.avatar,ownerState:f,children:a}),(0,g.jsxs)(D,{className:y.content,ownerState:f,children:[x,N]}),n&&(0,g.jsx)(F,{className:y.action,ownerState:f,children:n})]}))})),I=t(4554);function O(r){return(0,k.Z)("MuiCardMedia",r)}(0,C.Z)("MuiCardMedia",["root","media","img"]);var W=["children","className","component","image","src","style"],A=(0,N.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(r,e){var t=r.ownerState,n=t.isMediaComponent,a=t.isImageComponent;return[e.root,n&&e.media,a&&e.img]}})((function(r){var e=r.ownerState;return(0,b.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})})),L=["video","audio","picture","iframe","img"],U=["picture","img"],E=n.forwardRef((function(r,e){var t=(0,w.Z)({props:r,name:"MuiCardMedia"}),n=t.children,a=t.className,o=t.component,i=void 0===o?"div":o,s=t.image,l=t.src,c=t.style,d=(0,Z.Z)(t,W),u=-1!==L.indexOf(i),m=!u&&s?(0,b.Z)({backgroundImage:'url("'.concat(s,'")')},c):c,p=(0,b.Z)({},t,{component:i,isMediaComponent:u,isImageComponent:-1!==U.indexOf(i)}),h=function(r){var e=r.classes,t={root:["root",r.isMediaComponent&&"media",r.isImageComponent&&"img"]};return(0,_.Z)(t,O,e)}(p);return(0,g.jsx)(A,(0,b.Z)({className:(0,j.Z)(h.root,a),as:i,role:!u&&s?"img":void 0,ref:e,style:m,ownerState:p,src:u?s||l:void 0},d,{children:n}))})),H="OurFriendsItem_cardItem__fCoIU",z="OurFriendsItem_customTypography__3ufll",G="OurFriendsItem_customCardMedia__0oQSO",J="OurFriendsItem_friendLink__Td6T5",$=function(r){var e=r._id,t=r.url,n=r.title,a=r.imageUrl,o=r.workDays,s=r.address,l=r.addressUrl,c=r.email,u=r.phone,p=(0,i.$G)().t;return(0,g.jsxs)("li",{className:H,children:[(0,g.jsx)(R,{sx:{padding:0},title:(0,g.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:J,children:n})}),(0,g.jsxs)(I.Z,{sx:{display:"flex",justifyContent:"flex-start"},children:[(0,g.jsx)(E,{sx:{width:146,height:104,backgroundSize:"contain"},className:G,image:a,title:n}),(0,g.jsxs)(I.Z,{sx:{display:"flex",flexDirection:"column"},children:[!o&&(0,g.jsxs)(m.Z,{variant:"body1",component:"p",gutterBottom:!0,className:z,children:[(0,g.jsxs)("strong",{children:[p("Time"),":"]})," ",(0,g.jsx)("br",{})," ",p("day and night")]}),o&&(0,g.jsx)(y,{workDays:o}),(0,g.jsxs)(m.Z,{variant:"body1",component:"p",gutterBottom:!0,className:z,sx:(0,d.Z)({"&:hover":{color:"#54ADFF"}},s?{}:{"&:hover":{color:"inherit"}}),children:[(0,g.jsxs)("strong",{children:[p("Address"),":"]}),(0,g.jsx)("br",{}),s?(0,g.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:s}):p("website only")]}),(0,g.jsxs)(m.Z,{variant:"body1",component:"p",gutterBottom:!0,className:z,sx:(0,d.Z)({"&:hover":{color:"#54ADFF"}},c?{}:{"&:hover":{color:"inherit"}}),children:[(0,g.jsxs)("strong",{children:[p("Email"),":"]})," ",(0,g.jsx)("br",{}),c?(0,g.jsx)("a",{href:"mailto:".concat(c),children:c}):"website only"]}),(0,g.jsxs)(m.Z,{variant:"body1",component:"p",gutterBottom:!0,className:z,sx:(0,d.Z)({"&:hover":{color:"#54ADFF"}},u?{}:{"&:hover":{color:"inherit"}}),children:[(0,g.jsxs)("strong",{children:[p("Phone"),":"]})," ",(0,g.jsx)("br",{}),u?(0,g.jsx)("a",{href:"tel:".concat(u),children:u}):"email only"]})]})]})]},e)},Q="OurFriendsList_cardList__DcpoE",Y=function(){var r=(0,a.v9)(l);return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("ul",{className:Q,children:r.map((function(r){var e=r._id,t=r.url,n=r.title,a=r.imageUrl,o=r.workDays,i=r.address,s=r.addressUrl,l=r.email,c=r.phone;return(0,g.jsx)($,{url:t,title:n,imageUrl:a,workDays:o,address:i,addressUrl:s,email:l,phone:c},e)}))})})},K=t(1107),X={title:"OurFriendsPage_title__9QCXb","my\u0421omponent":"OurFriendsPage_my\u0421omponent__PjPTF",dark:"OurFriendsPage_dark__yPTzk"},q=t(9506),V=function(){var r=(0,a.v9)(c),e=(0,n.useContext)(o.N).theme,t=(0,i.$G)().t,l=(0,a.I0)();return(0,n.useEffect)((function(){l((0,s.n)())}),[l]),(0,g.jsx)("div",{className:"".concat(X["my\u0421omponent"]," ").concat("light"===e?X.light:X.dark),children:(0,g.jsxs)("div",{className:"container",children:[(0,g.jsx)("h2",{className:X.title,children:t("Our friends")}),r&&(0,g.jsx)(K.Z,{}),(0,g.jsx)(Y,{}),(0,g.jsx)(q.Z,{})]})})}},9506:function(r,e,t){t.d(e,{Z:function(){return l}});var n=t(9439),a=t(2791),o=t(5678),i="ScrollButton_scrollButton__NLri3",s=t(3329),l=function(){var r=(0,a.useState)(!1),e=(0,n.Z)(r,2),t=e[0],l=e[1];(0,a.useEffect)((function(){var r=function(){var r=window.pageYOffset;l(r>300)};return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}}),[]);return(0,s.jsx)(s.Fragment,{children:t&&(0,s.jsx)("div",{className:i,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,s.jsx)(o.Z,{fontSize:"large"})})})}},5678:function(r,e,t){var n=t(4836);e.Z=void 0;var a=n(t(5649)),o=t(3329),i=(0,a.default)((0,o.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");e.Z=i},4554:function(r,e,t){t.d(e,{Z:function(){return y}});var n=t(7462),a=t(3366),o=t(2791),i=t(8182),s=t(3842),l=t(104),c=t(8519),d=t(3459),u=t(3329),m=["className","component"];var p=t(5902),h=t(9311),v=t(988),f=(0,h.Z)(),g=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=r.themeId,t=r.defaultTheme,p=r.defaultClassName,h=void 0===p?"MuiBox-root":p,v=r.generateClassName,f=(0,s.ZP)("div",{shouldForwardProp:function(r){return"theme"!==r&&"sx"!==r&&"as"!==r}})(l.Z),g=o.forwardRef((function(r,o){var s=(0,d.Z)(t),l=(0,c.Z)(r),p=l.className,g=l.component,y=void 0===g?"div":g,x=(0,a.Z)(l,m);return(0,u.jsx)(f,(0,n.Z)({as:y,ref:o,className:(0,i.Z)(p,v?v(h):h),theme:e&&s[e]||s},x))}));return g}({themeId:v.Z,defaultTheme:f,defaultClassName:"MuiBox-root",generateClassName:p.Z.generate}),y=g},890:function(r,e,t){t.d(e,{Z:function(){return Z}});var n=t(3366),a=t(7462),o=t(2791),i=t(8182),s=t(8519),l=t(4419),c=t(6934),d=t(1402),u=t(4036),m=t(5878),p=t(1217);function h(r){return(0,p.Z)("MuiTypography",r)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=t(3329),f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(r,e){var t=r.ownerState;return[e.root,t.variant&&e[t.variant],"inherit"!==t.align&&e["align".concat((0,u.Z)(t.align))],t.noWrap&&e.noWrap,t.gutterBottom&&e.gutterBottom,t.paragraph&&e.paragraph]}})((function(r){var e=r.theme,t=r.ownerState;return(0,a.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=o.forwardRef((function(r,e){var t=(0,d.Z)({props:r,name:"MuiTypography"}),o=function(r){return x[r]||r}(t.color),c=(0,s.Z)((0,a.Z)({},t,{color:o})),m=c.align,p=void 0===m?"inherit":m,Z=c.className,b=c.component,j=c.gutterBottom,_=void 0!==j&&j,w=c.noWrap,N=void 0!==w&&w,C=c.paragraph,k=void 0!==C&&C,M=c.variant,P=void 0===M?"body1":M,T=c.variantMapping,B=void 0===T?y:T,S=(0,n.Z)(c,f),F=(0,a.Z)({},c,{align:p,color:o,className:Z,component:b,gutterBottom:_,noWrap:N,paragraph:k,variant:P,variantMapping:B}),D=b||(k?"p":B[P]||y[P])||"span",R=function(r){var e=r.align,t=r.gutterBottom,n=r.noWrap,a=r.paragraph,o=r.variant,i=r.classes,s={root:["root",o,"inherit"!==r.align&&"align".concat((0,u.Z)(e)),t&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,l.Z)(s,h,i)}(F);return(0,v.jsx)(g,(0,a.Z)({as:D,ref:e,ownerState:F,className:(0,i.Z)(R.root,Z)},S))}))},8519:function(r,e,t){t.d(e,{Z:function(){return c}});var n=t(3433),a=t(7462),o=t(3366),i=t(2466),s=t(7416),l=["sx"];function c(r){var e,t=r.sx,c=function(r){var e,t,n={systemProps:{},otherProps:{}},a=null!=(e=null==r||null==(t=r.theme)?void 0:t.unstable_sxConfig)?e:s.Z;return Object.keys(r).forEach((function(e){a[e]?n.systemProps[e]=r[e]:n.otherProps[e]=r[e]})),n}((0,o.Z)(r,l)),d=c.systemProps,u=c.otherProps;return e=Array.isArray(t)?[d].concat((0,n.Z)(t)):"function"===typeof t?function(){var r=t.apply(void 0,arguments);return(0,i.P)(r)?(0,a.Z)({},d,r):d}:(0,a.Z)({},d,t),(0,a.Z)({},u,{sx:e})}}}]);
//# sourceMappingURL=828.01d73903.chunk.js.map