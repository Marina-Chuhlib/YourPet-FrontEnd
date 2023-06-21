"use strict";(self.webpackChunkyour_pet_frontend=self.webpackChunkyour_pet_frontend||[]).push([[617],{9617:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r=n(2791),a=n(1483),o=n(9439),s=n(9434),i=n(9230),c=n(292),l=n(3466),u=n(3400),d=n(2167),x=n(8940),h=function(e){return e.news.items},m=function(e){return e.news.totalPages},_=function(e){return e.news.page},g=function(e){return e.news.loading},p=n(4701),f={item:"NewsItem_item__MEfKI",img:"NewsItem_img__71sdZ",textBox:"NewsItem_textBox__v4bwS",title:"NewsItem_title__M-F28",text:"NewsItem_text__SlkoJ",dateBox:"NewsItem_dateBox__jJUlE",link:"NewsItem_link__Wd4aC",date:"NewsItem_date__omjXo",dark:"NewsItem_dark__I2d+7"},j=n(3329),N=function(e){var t=e._id,n=e.text,o=e.imgUrl,s=e.title,c=e.url,l=e.date,u=(0,i.$G)().t,d=(0,r.useContext)(a.N).theme,x=(0,r.useMemo)((function(){var e=new Date(l),t=e.getDate(),n=e.getMonth()+1,r=e.getFullYear();return"".concat(t,"/").concat(n<10?"0"+n:n,"/").concat(r)}),[l]);return(0,j.jsxs)("li",{className:"".concat(f.item," ").concat("light"===d?f.light:f.dark),children:[(0,j.jsx)("img",{src:o,alt:s,className:f.img}),(0,j.jsxs)("div",{className:f.textBox,children:[(0,j.jsx)("h3",{className:f.title,children:s}),(0,j.jsx)("p",{className:f.text,children:n}),(0,j.jsxs)("div",{className:f.dateBox,children:[(0,j.jsx)("p",{className:f.date,children:x}),(0,j.jsx)("a",{className:f.link,href:c,target:"_blank",rel:"noreferrer noopener",children:u("Read more")})]})]})]},t)},w=n(1107),v="NewsList_list__tLUl5",k="NewsList_helperText__UqUoN",C=function(){var e=(0,s.v9)(h),t=(0,s.v9)(g),n=(0,i.$G)().t;return(0,j.jsxs)(j.Fragment,{children:[t&&(0,j.jsx)(w.Z,{}),0!==e.length||t?(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("ul",{className:v,children:e.map((function(e){var t=e._id,n=e.text,r=e.imgUrl,a=e.title,o=e.url,s=e.date;return(0,j.jsx)(N,{text:n,imgUrl:r,title:a,url:o,date:s},t)}))})}):(0,j.jsx)("p",{className:k,children:n("There are no results matching your search.")})]})},F=n(1413),b=n(1582),Z=n(1333),S=n(6563),E=n(7394),I=n(8264);var y=function(e){var t=e.totalPages,n=e.onChange,o=e.currentPage,s=(0,r.useContext)(a.N).theme,i=function(e,t){window.scrollTo({top:0,behavior:"smooth"}),n(t)};return(0,j.jsx)(b.Z,{spacing:2,children:t>1&&(0,j.jsx)(Z.Z,{count:t,page:o,color:"primary",variant:"outlined",onChange:i,sx:{marginX:"auto",marginBottom:"20px",boxShadow:"3px 8px 14px rgba(136, 198, 253, 0.19)",borderRadius:"45px",padding:"8px 12px",background:"".concat("light"===s?"#FEF9F9":"transparent")},renderItem:function(e){return(0,j.jsx)(S.Z,(0,F.Z)({sx:{"&.Mui-selected":{background:"#54ADFF",color:"#FEF9F9",border:"none"},background:"".concat("light"===s?"#FEF9F9":"#538690"),color:"#CCE4FB",borderColor:"#CCE4FB"},icons:{previous:(0,j.jsx)(E.Z,{}),next:(0,j.jsx)(I.Z,{})},component:"button",onClick:function(t){return i(0,e.page)}},e))}})})},B=n(5074),U={placeholder:"NewsSearch_placeholder__Lh0yT",inputContainer:"NewsSearch_inputContainer__mQowr",title:"NewsSearch_title__CxfuK","my\u0421omponent":"NewsSearch_my\u0421omponent__6Uu8j",dark:"NewsSearch_dark__D2eho"},P=function(){var e=(0,r.useState)(""),t=(0,o.Z)(e,2),n=t[0],h=t[1],g=(0,r.useState)(!1),f=(0,o.Z)(g,2),N=f[0],w=f[1],v=(0,r.useState)(1),k=(0,o.Z)(v,2),F=k[0],b=k[1],Z=(0,r.useState)(1),S=(0,o.Z)(Z,2),E=S[0],I=S[1],P=(0,s.v9)(m),L=(0,s.v9)(_),D=Number(L),M=(0,s.I0)(),T=(0,r.useContext)(a.N).theme,$=(0,i.$G)().t;(0,r.useEffect)((function(){N||(M((0,p.V)(F)),I(1))}),[F,N,M]),(0,r.useEffect)((function(){N&&M((0,p.O)({query:n,page:E}))}),[N,n,E,M]);var G=function(e){e.preventDefault(),""===n.trim()?((0,B.L$)($("Please enter something")),h("")):w(!0)};return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{className:"".concat(U["my\u0421omponent"]," ").concat("light"===T?U.light:U.dark),children:[(0,j.jsx)("div",{className:U.inputContainer,children:(0,j.jsx)("form",{onSubmit:G,children:(0,j.jsx)(c.Z,{value:n,onChange:function(e){var t=e.target.value;h(t),I(1)},placeholder:$("Search"),disableUnderline:!0,style:{borderRadius:"20px",border:"1px solid #aeadad",background:"transparent",padding:"0px 14px 0px 20px",height:"43px",boxShadow:"3px 8px 14px rgba(136, 198, 253, 0.19)"},inputProps:{className:U.placeholder},endAdornment:(0,j.jsxs)(l.Z,{position:"end",children:[(0,j.jsx)(u.Z,{onClick:G,style:{color:"#54ADFF"},children:(0,j.jsx)(d.Z,{})}),n&&(0,j.jsx)(u.Z,{onClick:function(){h(""),w(!1),b(1),I(1)},style:{color:"#FFC107"},children:(0,j.jsx)(x.Z,{})})]}),fullWidth:!0})})}),(0,j.jsx)(C,{}),(0,j.jsx)(y,{totalPages:P,currentPage:D,onChange:function(e){N||function(e){b(e)}(e),function(e){I(e)}(e)}})]})})},L={title:"NewsPage_title__9UiEo",dark:"NewsPage_dark__SFdUo"},D=n(9506),M=function(){var e=(0,s.v9)(g),t=(0,r.useContext)(a.N).theme,n=(0,i.$G)().t;return(0,j.jsxs)("div",{className:"container",children:[(0,j.jsx)("h2",{className:"".concat(L.title," ").concat("light"===t?L.light:L.dark),children:n("News")}),e&&(0,j.jsx)(w.Z,{}),(0,j.jsx)(P,{}),(0,j.jsx)(D.Z,{})]})}},9506:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(9439),a=n(2791),o=n(5678),s="ScrollButton_scrollButton__NLri3",i=n(3329),c=function(){var e=(0,a.useState)(!1),t=(0,r.Z)(e,2),n=t[0],c=t[1];(0,a.useEffect)((function(){var e=function(){var e=window.pageYOffset;c(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);return(0,i.jsx)(i.Fragment,{children:n&&(0,i.jsx)("div",{className:s,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,i.jsx)(o.Z,{fontSize:"large"})})})}}}]);
//# sourceMappingURL=617.d742e160.chunk.js.map