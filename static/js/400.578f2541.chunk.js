"use strict";(self.webpackChunkyour_pet_frontend=self.webpackChunkyour_pet_frontend||[]).push([[400],{6400:function(e,t,a){a.r(t),a.d(t,{default:function(){return Re}});var o=a(9439),n=a(2791),r=a(9434),i=a(4701),s=function(e){return e.news.items},c=function(e){return e.news.totalPages},l=function(e){return e.news.page},d="NewsItem_item__MEfKI",u="NewsItem_img__71sdZ",p="NewsItem_textBox__v4bwS",v="NewsItem_title__M-F28",m="NewsItem_text__SlkoJ",g="NewsItem_dateBox__jJUlE",h="NewsItem_link__Wd4aC",f="NewsItem_date__omjXo",x=a(3329),b=function(e){var t=e._id,a=e.text,o=e.imgUrl,r=e.title,i=e.url,s=e.date,c=(0,n.useMemo)((function(){var e=new Date(s),t=e.getDate(),a=e.getMonth()+1,o=e.getFullYear();return"".concat(t,"/").concat(a<10?"0"+a:a,"/").concat(o)}),[s]);return(0,x.jsxs)("li",{className:d,children:[(0,x.jsx)("img",{src:o,alt:r,className:u}),(0,x.jsxs)("div",{className:p,children:[(0,x.jsx)("h3",{className:v,children:r}),(0,x.jsx)("p",{className:m,children:a}),(0,x.jsxs)("div",{className:g,children:[(0,x.jsx)("p",{className:f,children:c}),(0,x.jsx)("a",{className:h,href:i,target:"_blank",rel:"noreferrer noopener",children:"Read more"})]})]})]},t)},Z="NewsList_list__tLUl5",y="NewsList_helperText__UqUoN",N=function(){var e=(0,r.v9)(s);return(0,x.jsx)(x.Fragment,{children:0===e.length?(0,x.jsx)("p",{className:y,children:"There are no results matching your search."}):(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("ul",{className:Z,children:e.map((function(e){var t=e._id,a=e.text,o=e.imgUrl,n=e.title,r=e.url,i=e.date;return(0,x.jsx)(b,{text:a,imgUrl:o,title:n,url:r,date:i},t)}))})})})},w=a(7078),j=a(3466),C=a(3400),k=a(890),_=a(2167),P=a(8940),S="NewsSearch_placeholder__Lh0yT",z="NewsSearch_inputContainer__mQowr",M=function(){var e=(0,n.useState)(""),t=(0,o.Z)(e,2),a=t[0],s=t[1],c=(0,n.useState)(!1),l=(0,o.Z)(c,2),d=l[0],u=l[1],p=(0,n.useState)(!1),v=(0,o.Z)(p,2),m=v[0],g=v[1],h=(0,r.I0)();(0,n.useEffect)((function(){m&&(h((0,i.O)(a)),g(!1),s(""))}),[m,a,h]);var f=function(e){e.preventDefault(),""===a.trim()?u(!0):(g(!0),console.log("\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u043c\u0443 \u0441\u043b\u043e\u0432\u0443:",a))};return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:z,children:(0,x.jsxs)("form",{onSubmit:f,children:[(0,x.jsx)(w.Z,{value:a,onChange:function(e){var t=e.target.value;s(t),u(!1),g(!1)},placeholder:"Search",disableUnderline:!0,style:{borderRadius:"20px",backgroundColor:"#FFFFFF",padding:"0px 14px 0px 20px",height:"43px",boxShadow:"3px 8px 14px rgba(136, 198, 253, 0.19)"},inputProps:{className:S},endAdornment:(0,x.jsxs)(j.Z,{position:"end",children:[(0,x.jsx)(C.Z,{onClick:f,style:{color:"#54ADFF"},children:(0,x.jsx)(_.Z,{})}),a&&(0,x.jsx)(C.Z,{onClick:function(){s(""),u(!1),g(!1)},style:{color:"#FFC107"},children:(0,x.jsx)(P.Z,{})})]}),fullWidth:!0}),d&&(0,x.jsx)(k.Z,{variant:"caption",color:"error",marginLeft:"40px",fontSize:"16px",children:"Please enter something."})]})})})},F=a(1413),L=a(4942),R=a(3366),B=a(7462),I=a(8182),O=a(2466),A=a(4419),T=a(1217),U=a(3457),W=a(6083),q=a(8519),E=a(5080),D=a(1184),G=a(5682),V=["component","direction","spacing","divider","children","className","useFlexGap"],H=(0,E.Z)(),$=(0,U.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}});function J(e){return(0,W.Z)({props:e,name:"MuiStack",defaultTheme:H})}function X(e,t){var a=n.Children.toArray(e).filter(Boolean);return a.reduce((function(e,o,r){return e.push(o),r<a.length-1&&e.push(n.cloneElement(t,{key:"separator-".concat(r)})),e}),[])}var K=function(e){var t=e.ownerState,a=e.theme,o=(0,B.Z)({display:"flex",flexDirection:"column"},(0,D.k9)({theme:a},(0,D.P$)({values:t.direction,breakpoints:a.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var n=(0,G.hB)(a),r=Object.keys(a.breakpoints.values).reduce((function(e,a){return("object"===typeof t.spacing&&null!=t.spacing[a]||"object"===typeof t.direction&&null!=t.direction[a])&&(e[a]=!0),e}),{}),i=(0,D.P$)({values:t.direction,base:r}),s=(0,D.P$)({values:t.spacing,base:r});"object"===typeof i&&Object.keys(i).forEach((function(e,t,a){if(!i[e]){var o=t>0?i[a[t-1]]:"column";i[e]=o}}));o=(0,O.Z)(o,(0,D.k9)({theme:a},s,(function(e,a){return t.useFlexGap?{gap:(0,G.NA)(n,e)}:{"& > :not(style) + :not(style)":(0,L.Z)({margin:0},"margin".concat((o=a?i[a]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,G.NA)(n,e))};var o})))}return o=(0,D.dt)(a.breakpoints,o)};var Q=a(6934),Y=a(1402),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,a=void 0===t?$:t,o=e.useThemeProps,r=void 0===o?J:o,i=e.componentName,s=void 0===i?"MuiStack":i,c=function(){return(0,A.Z)({root:["root"]},(function(e){return(0,T.Z)(s,e)}),{})},l=a(K),d=n.forwardRef((function(e,t){var a=r(e),o=(0,q.Z)(a),n=o.component,i=void 0===n?"div":n,s=o.direction,d=void 0===s?"column":s,u=o.spacing,p=void 0===u?0:u,v=o.divider,m=o.children,g=o.className,h=o.useFlexGap,f=void 0!==h&&h,b=(0,R.Z)(o,V),Z={direction:d,spacing:p,useFlexGap:f},y=c();return(0,x.jsx)(l,(0,B.Z)({as:i,ownerState:Z,ref:t,className:(0,I.Z)(y.root,g)},b,{children:v?X(m,v):m}))}));return d}({createStyledComponent:(0,Q.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}}),useThemeProps:function(e){return(0,Y.Z)({props:e,name:"MuiStack"})}}),te=ee,ae=a(5878);function oe(e){return(0,T.Z)("MuiPagination",e)}(0,ae.Z)("MuiPagination",["root","ul","outlined","text"]);var ne=a(3433),re=a(8959),ie=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var se=a(2065);function ce(e){return(0,T.Z)("MuiPaginationItem",e)}var le=(0,ae.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),de=a(3967),ue=a(335),pe=a(4036),ve=a(9201),me=(0,ve.Z)((0,x.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),ge=(0,ve.Z)((0,x.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),he=(0,ve.Z)((0,x.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),fe=(0,ve.Z)((0,x.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),xe=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],be=function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat((0,pe.Z)(a.size))],"text"===a.variant&&t["text".concat((0,pe.Z)(a.color))],"outlined"===a.variant&&t["outlined".concat((0,pe.Z)(a.color))],"rounded"===a.shape&&t.rounded,"page"===a.type&&t.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&t.ellipsis,("previous"===a.type||"next"===a.type)&&t.previousNext,("first"===a.type||"last"===a.type)&&t.firstLast]},Ze=(0,Q.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:be})((function(e){var t=e.theme,a=e.ownerState;return(0,B.Z)({},t.typography.body2,(0,L.Z)({borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto"},"&.".concat(le.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity}),"small"===a.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===a.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:t.typography.pxToRem(15)})})),ye=(0,Q.ZP)(ue.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:be})((function(e){var t,a,o=e.theme,n=e.ownerState;return(0,B.Z)({},o.typography.body2,(a={borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(o.vars||o).palette.text.primary},(0,L.Z)(a,"&.".concat(le.focusVisible),{backgroundColor:(o.vars||o).palette.action.focus}),(0,L.Z)(a,"&.".concat(le.disabled),{opacity:(o.vars||o).palette.action.disabledOpacity}),(0,L.Z)(a,"transition",o.transitions.create(["color","background-color"],{duration:o.transitions.duration.short})),(0,L.Z)(a,"&:hover",{backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}),(0,L.Z)(a,"&.".concat(le.selected),(t={backgroundColor:(o.vars||o).palette.action.selected,"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.selected," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.hoverOpacity,"))"):(0,se.Fq)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(o.vars||o).palette.action.selected}}},(0,L.Z)(t,"&.".concat(le.focusVisible),{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.selected," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.focusOpacity,"))"):(0,se.Fq)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}),(0,L.Z)(t,"&.".concat(le.disabled),{opacity:1,color:(o.vars||o).palette.action.disabled,backgroundColor:(o.vars||o).palette.action.selected}),t)),a),"small"===n.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===n.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:o.typography.pxToRem(15)},"rounded"===n.shape&&{borderRadius:(o.vars||o).shape.borderRadius})}),(function(e){var t=e.theme,a=e.ownerState;return(0,B.Z)({},"text"===a.variant&&(0,L.Z)({},"&.".concat(le.selected),(0,B.Z)({},"standard"!==a.color&&(0,L.Z)({color:(t.vars||t).palette[a.color].contrastText,backgroundColor:(t.vars||t).palette[a.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[a.color].main}}},"&.".concat(le.focusVisible),{backgroundColor:(t.vars||t).palette[a.color].dark}),(0,L.Z)({},"&.".concat(le.disabled),{color:(t.vars||t).palette.action.disabled}))),"outlined"===a.variant&&(0,L.Z)({border:t.vars?"1px solid rgba(".concat(t.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"&.".concat(le.selected),(0,B.Z)({},"standard"!==a.color&&(0,L.Z)({color:(t.vars||t).palette[a.color].main,border:"1px solid ".concat(t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / 0.5)"):(0,se.Fq)(t.palette[a.color].main,.5)),backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / ").concat(t.vars.palette.action.activatedOpacity,")"):(0,se.Fq)(t.palette[a.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / calc(").concat(t.vars.palette.action.activatedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,se.Fq)(t.palette[a.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(le.focusVisible),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / calc(").concat(t.vars.palette.action.activatedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,se.Fq)(t.palette[a.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}),(0,L.Z)({},"&.".concat(le.disabled),{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}))))})),Ne=(0,Q.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:function(e,t){return t.icon}})((function(e){var t=e.theme,a=e.ownerState;return(0,B.Z)({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},"small"===a.size&&{fontSize:t.typography.pxToRem(18)},"large"===a.size&&{fontSize:t.typography.pxToRem(22)})})),we=n.forwardRef((function(e,t){var a=(0,Y.Z)({props:e,name:"MuiPaginationItem"}),o=a.className,n=a.color,r=void 0===n?"standard":n,i=a.component,s=a.components,c=void 0===s?{}:s,l=a.disabled,d=void 0!==l&&l,u=a.page,p=a.selected,v=void 0!==p&&p,m=a.shape,g=void 0===m?"circular":m,h=a.size,f=void 0===h?"medium":h,b=a.slots,Z=void 0===b?{}:b,y=a.type,N=void 0===y?"page":y,w=a.variant,j=void 0===w?"text":w,C=(0,R.Z)(a,xe),k=(0,B.Z)({},a,{color:r,disabled:d,selected:v,shape:g,size:f,type:N,variant:j}),_=(0,de.Z)(),P=function(e){var t=e.classes,a=e.color,o=e.disabled,n=e.selected,r=e.size,i=e.shape,s=e.type,c=e.variant,l={root:["root","size".concat((0,pe.Z)(r)),c,i,"standard"!==a&&"".concat(c).concat((0,pe.Z)(a)),o&&"disabled",n&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[s]],icon:["icon"]};return(0,A.Z)(l,ce,t)}(k),S=("rtl"===_.direction?{previous:Z.next||c.next||fe,next:Z.previous||c.previous||he,last:Z.first||c.first||me,first:Z.last||c.last||ge}:{previous:Z.previous||c.previous||he,next:Z.next||c.next||fe,first:Z.first||c.first||me,last:Z.last||c.last||ge})[N];return"start-ellipsis"===N||"end-ellipsis"===N?(0,x.jsx)(Ze,{ref:t,ownerState:k,className:(0,I.Z)(P.root,o),children:"\u2026"}):(0,x.jsxs)(ye,(0,B.Z)({ref:t,ownerState:k,component:i,disabled:d,className:(0,I.Z)(P.root,o)},C,{children:["page"===N&&u,S?(0,x.jsx)(Ne,{as:S,ownerState:k,className:P.icon}):null]}))})),je=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],Ce=(0,Q.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant]]}})({}),ke=(0,Q.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:function(e,t){return t.ul}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function _e(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var Pe=n.forwardRef((function(e,t){var a=(0,Y.Z)({props:e,name:"MuiPagination"}),n=a.boundaryCount,r=void 0===n?1:n,i=a.className,s=a.color,c=void 0===s?"standard":s,l=a.count,d=void 0===l?1:l,u=a.defaultPage,p=void 0===u?1:u,v=a.disabled,m=void 0!==v&&v,g=a.getItemAriaLabel,h=void 0===g?_e:g,f=a.hideNextButton,b=void 0!==f&&f,Z=a.hidePrevButton,y=void 0!==Z&&Z,N=a.renderItem,w=void 0===N?function(e){return(0,x.jsx)(we,(0,B.Z)({},e))}:N,j=a.shape,C=void 0===j?"circular":j,k=a.showFirstButton,_=void 0!==k&&k,P=a.showLastButton,S=void 0!==P&&P,z=a.siblingCount,M=void 0===z?1:z,F=a.size,L=void 0===F?"medium":F,O=a.variant,T=void 0===O?"text":O,U=(0,R.Z)(a,je),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,n=e.componentName,r=void 0===n?"usePagination":n,i=e.count,s=void 0===i?1:i,c=e.defaultPage,l=void 0===c?1:c,d=e.disabled,u=void 0!==d&&d,p=e.hideNextButton,v=void 0!==p&&p,m=e.hidePrevButton,g=void 0!==m&&m,h=e.onChange,f=e.page,x=e.showFirstButton,b=void 0!==x&&x,Z=e.showLastButton,y=void 0!==Z&&Z,N=e.siblingCount,w=void 0===N?1:N,j=(0,R.Z)(e,ie),C=(0,re.Z)({controlled:f,default:l,name:r,state:"page"}),k=(0,o.Z)(C,2),_=k[0],P=k[1],S=function(e,t){f||P(t),h&&h(e,t)},z=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},M=z(1,Math.min(a,s)),F=z(Math.max(s-a+1,a+1),s),L=Math.max(Math.min(_-w,s-a-2*w-1),a+2),I=Math.min(Math.max(_+w,a+2*w+2),F.length>0?F[0]-2:s-1),O=[].concat((0,ne.Z)(b?["first"]:[]),(0,ne.Z)(g?[]:["previous"]),(0,ne.Z)(M),(0,ne.Z)(L>a+2?["start-ellipsis"]:a+1<s-a?[a+1]:[]),(0,ne.Z)(z(L,I)),(0,ne.Z)(I<s-a-1?["end-ellipsis"]:s-a>a?[s-a]:[]),(0,ne.Z)(F),(0,ne.Z)(v?[]:["next"]),(0,ne.Z)(y?["last"]:[])),A=function(e){switch(e){case"first":return 1;case"previous":return _-1;case"next":return _+1;case"last":return s;default:return null}},T=O.map((function(e){return"number"===typeof e?{onClick:function(t){S(t,e)},type:"page",page:e,selected:e===_,disabled:u,"aria-current":e===_?"true":void 0}:{onClick:function(t){S(t,A(e))},type:e,page:A(e),selected:!1,disabled:u||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?_>=s:_<=1)}}));return(0,B.Z)({items:T},j)}((0,B.Z)({},a,{componentName:"Pagination"})),q=W.items,E=(0,B.Z)({},a,{boundaryCount:r,color:c,count:d,defaultPage:p,disabled:m,getItemAriaLabel:h,hideNextButton:b,hidePrevButton:y,renderItem:w,shape:C,showFirstButton:_,showLastButton:S,siblingCount:M,size:L,variant:T}),D=function(e){var t=e.classes,a={root:["root",e.variant],ul:["ul"]};return(0,A.Z)(a,oe,t)}(E);return(0,x.jsx)(Ce,(0,B.Z)({"aria-label":"pagination navigation",className:(0,I.Z)(D.root,i),ownerState:E,ref:t},U,{children:(0,x.jsx)(ke,{className:D.ul,ownerState:E,children:q.map((function(e,t){return(0,x.jsx)("li",{children:w((0,B.Z)({},e,{color:c,"aria-label":h(e.type,e.page,e.selected),shape:C,size:L,variant:T}))},t)}))})}))})),Se=Pe,ze=a(7394),Me=a(8264),Fe=function(e){var t=e.totalPages,a=e.onChange,o=(0,r.v9)(l);console.log(o);var n=Number(o),i=function(e,t){a(t)};return(0,x.jsx)(te,{spacing:2,children:t>1&&(0,x.jsx)(Se,{count:t,page:n,color:"primary",variant:"outlined",onChange:i,sx:{marginX:"auto"},renderItem:function(e){return(0,x.jsx)(we,(0,F.Z)({icons:{previous:(0,x.jsx)(ze.Z,{}),next:(0,x.jsx)(Me.Z,{})},component:"button",onClick:function(t){return i(0,e.page)}},e))}})})},Le="NewsPage_title__9UiEo",Re=function(){var e=(0,r.I0)(),t=(0,n.useState)(1),a=(0,o.Z)(t,2),s=a[0],l=a[1],d=(0,r.v9)(c);(0,n.useEffect)((function(){e((0,i.V)(s))}),[s,e]);return(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("h2",{className:Le,children:"News"}),(0,x.jsx)(M,{}),(0,x.jsx)(N,{}),(0,x.jsx)(Fe,{totalPages:d,currentPage:s,onChange:function(e){l(e)}})]})}},7394:function(e,t,a){var o=a(4836);t.Z=void 0;var n=o(a(5649)),r=a(3329),i=(0,n.default)((0,r.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.Z=i},8264:function(e,t,a){var o=a(4836);t.Z=void 0;var n=o(a(5649)),r=a(3329),i=(0,n.default)((0,r.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.Z=i}}]);
//# sourceMappingURL=400.578f2541.chunk.js.map