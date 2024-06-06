/*! For license information please see component---src-templates-project-jsx-5fad23f3b9d4da11a34c.js.LICENSE.txt */
"use strict";(self.webpackChunkerwin_mark_anora_eportfolio=self.webpackChunkerwin_mark_anora_eportfolio||[]).push([[360],{7958:function(e,t,a){var r=a(4836);t.Z=void 0;var o=r(a(4938)),l=a(5893);t.Z=(0,o.default)((0,l.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext")},3023:function(e,t){var a,r=Symbol.for("react.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),p=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case s:case n:case m:case u:return e;default:switch(e=e&&e.$$typeof){case p:case c:case d:case f:case h:case i:return e;default:return t}}case o:return t}}}a=Symbol.for("react.module.reference")},6607:function(e,t,a){a(3023)},9640:function(e,t,a){a.r(t),a.d(t,{Head:function(){return ce},default:function(){return pe}});var r=a(7294),o=a(2706),l=a(9357),n=a(7462),s=a(3366),i=(a(6607),a(512)),c=a(3224),p=a(8510),d=a(948),m=a(1657),u=a(2658),h=a(2101),f=a(5949),g=a(5893),x=(0,f.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),v=a(6637);const y=["slots","slotProps"],b=(0,d.ZP)(v.Z)((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,h._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,h._4)(e.palette.grey[600],.12)})}))),Z=(0,d.ZP)(x)({width:24,height:16});var w=function(e){const{slots:t={},slotProps:a={}}=e,r=(0,s.Z)(e,y),o=e;return(0,g.jsx)("li",{children:(0,g.jsx)(b,(0,n.Z)({focusRipple:!0},r,{ownerState:o,children:(0,g.jsx)(Z,(0,n.Z)({as:t.CollapsedIcon,ownerState:o},a.collapsedIcon))}))})},S=a(1977),k=a(8027);function C(e){return(0,k.ZP)("MuiBreadcrumbs",e)}var P=(0,S.Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const W=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],N=(0,d.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${P.li}`]:t.li},t.root]})({}),I=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),M=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function j(e,t,a,r){return e.reduce(((o,l,n)=>(n<e.length-1?o=o.concat(l,(0,g.jsx)(M,{"aria-hidden":!0,className:t,ownerState:r,children:a},`separator-${n}`)):o.push(l),o)),[])}var E=r.forwardRef((function(e,t){const a=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),{children:o,className:l,component:d="nav",slots:u={},slotProps:h={},expandText:f="Show path",itemsAfterCollapse:x=1,itemsBeforeCollapse:v=1,maxItems:y=8,separator:b="/"}=a,Z=(0,s.Z)(a,W),[S,k]=r.useState(!1),P=(0,n.Z)({},a,{component:d,expanded:S,expandText:f,itemsAfterCollapse:x,itemsBeforeCollapse:v,maxItems:y,separator:b}),M=(e=>{const{classes:t}=e;return(0,p.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},C,t)})(P),E=(0,c.y)({elementType:u.CollapsedIcon,externalSlotProps:h.collapsedIcon,ownerState:P}),$=r.useRef(null),R=r.Children.toArray(o).filter((e=>r.isValidElement(e))).map(((e,t)=>(0,g.jsx)("li",{className:M.li,children:e},`child-${t}`)));return(0,g.jsx)(N,(0,n.Z)({ref:t,component:d,color:"text.secondary",className:(0,i.Z)(M.root,l),ownerState:P},Z,{children:(0,g.jsx)(I,{className:M.ol,ref:$,ownerState:P,children:j(S||y&&R.length<=y?R:(e=>v+x>=e.length?e:[...e.slice(0,v),(0,g.jsx)(w,{"aria-label":f,slots:{CollapsedIcon:u.CollapsedIcon},slotProps:{collapsedIcon:E},onClick:()=>{k(!0);const e=$.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-x,e.length)])(R),M.separator,b,P)})}))})),$=a(7958),R=a(2440),B=a(8032);function D(e){return(0,k.ZP)("MuiImageList",e)}(0,S.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);var F=r.createContext({});const L=["children","className","cols","component","rowHeight","gap","style","variant"],_=(0,d.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant]]}})((({ownerState:e})=>(0,n.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===e.variant&&{display:"block"})));var A=r.forwardRef((function(e,t){const a=(0,m.Z)({props:e,name:"MuiImageList"}),{children:o,className:l,cols:c=2,component:d="ul",rowHeight:u="auto",gap:h=4,style:f,variant:x="standard"}=a,v=(0,s.Z)(a,L),y=r.useMemo((()=>({rowHeight:u,gap:h,variant:x})),[u,h,x]);r.useEffect((()=>{0}),[]);const b="masonry"===x?(0,n.Z)({columnCount:c,columnGap:h},f):(0,n.Z)({gridTemplateColumns:`repeat(${c}, 1fr)`,gap:h},f),Z=(0,n.Z)({},a,{component:d,gap:h,rowHeight:u,variant:x}),w=(e=>{const{classes:t,variant:a}=e,r={root:["root",a]};return(0,p.Z)(r,D,t)})(Z);return(0,g.jsx)(_,(0,n.Z)({as:d,className:(0,i.Z)(w.root,w[x],l),ref:t,style:b,ownerState:Z},v,{children:(0,g.jsx)(F.Provider,{value:y,children:o})}))})),T=a(2282);function z(e){return(0,k.ZP)("MuiImageListItem",e)}var H=(0,S.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]);const G=["children","className","cols","component","rows","style"],K=(0,d.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[{[`& .${H.img}`]:t.img},t.root,t[a.variant]]}})((({ownerState:e})=>(0,n.Z)({display:"block",position:"relative"},"standard"===e.variant&&{display:"flex",flexDirection:"column"},"woven"===e.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{[`& .${H.img}`]:(0,n.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===e.variant&&{height:"auto",flexGrow:1})})));var Y=r.forwardRef((function(e,t){const a=(0,m.Z)({props:e,name:"MuiImageListItem"}),{children:o,className:l,cols:c=1,component:d="li",rows:u=1,style:h}=a,f=(0,s.Z)(a,G),{rowHeight:x="auto",gap:v,variant:y}=r.useContext(F);let b="auto";"woven"===y?b=void 0:"auto"!==x&&(b=x*u+v*(u-1));const Z=(0,n.Z)({},a,{cols:c,component:d,gap:v,rowHeight:x,rows:u,variant:y}),w=(e=>{const{classes:t,variant:a}=e,r={root:["root",a],img:["img"]};return(0,p.Z)(r,z,t)})(Z);return(0,g.jsx)(K,(0,n.Z)({as:d,className:(0,i.Z)(w.root,w[y],l),ref:t,style:(0,n.Z)({height:b,gridColumnEnd:"masonry"!==y?`span ${c}`:void 0,gridRowEnd:"masonry"!==y?`span ${u}`:void 0,marginBottom:"masonry"===y?v:void 0,breakInside:"masonry"===y?"avoid":void 0},h),ownerState:Z},f,{children:r.Children.map(o,(e=>r.isValidElement(e)?"img"===e.type||(0,T.Z)(e,["Image"])?r.cloneElement(e,{className:(0,i.Z)(w.img,e.props.className)}):e:null))}))})),q=a(9326),X=a(8216),J=a(4714),O=a(6628),V=a(4680);function Q(e){return(0,k.ZP)("MuiDialog",e)}var U=(0,S.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var ee=r.createContext({}),te=a(4567),ae=a(2734);const re=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],oe=(0,d.ZP)(te.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),le=(0,d.ZP)(J.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),ne=(0,d.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.container,t[`scroll${(0,X.Z)(a.scroll)}`]]}})((({ownerState:e})=>(0,n.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}))),se=(0,d.ZP)(V.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.paper,t[`scrollPaper${(0,X.Z)(a.scroll)}`],t[`paperWidth${(0,X.Z)(String(a.maxWidth))}`],a.fullWidth&&t.paperFullWidth,a.fullScreen&&t.paperFullScreen]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===t.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===t.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===t.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${U.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&"xs"!==t.maxWidth&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${U.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${U.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})));var ie=r.forwardRef((function(e,t){const a=(0,m.Z)({props:e,name:"MuiDialog"}),o=(0,ae.Z)(),l={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{"aria-describedby":c,"aria-labelledby":d,BackdropComponent:u,BackdropProps:h,children:f,className:x,disableEscapeKeyDown:v=!1,fullScreen:y=!1,fullWidth:b=!1,maxWidth:Z="sm",onBackdropClick:w,onClick:S,onClose:k,open:C,PaperComponent:P=V.Z,PaperProps:W={},scroll:N="paper",TransitionComponent:I=O.Z,transitionDuration:M=l,TransitionProps:j}=a,E=(0,s.Z)(a,re),$=(0,n.Z)({},a,{disableEscapeKeyDown:v,fullScreen:y,fullWidth:b,maxWidth:Z,scroll:N}),R=(e=>{const{classes:t,scroll:a,maxWidth:r,fullWidth:o,fullScreen:l}=e,n={root:["root"],container:["container",`scroll${(0,X.Z)(a)}`],paper:["paper",`paperScroll${(0,X.Z)(a)}`,`paperWidth${(0,X.Z)(String(r))}`,o&&"paperFullWidth",l&&"paperFullScreen"]};return(0,p.Z)(n,Q,t)})($),B=r.useRef(),D=(0,q.Z)(d),F=r.useMemo((()=>({titleId:D})),[D]);return(0,g.jsx)(le,(0,n.Z)({className:(0,i.Z)(R.root,x),closeAfterTransition:!0,components:{Backdrop:oe},componentsProps:{backdrop:(0,n.Z)({transitionDuration:M,as:u},h)},disableEscapeKeyDown:v,onClose:k,open:C,ref:t,onClick:e=>{S&&S(e),B.current&&(B.current=null,w&&w(e),k&&k(e,"backdropClick"))},ownerState:$},E,{children:(0,g.jsx)(I,(0,n.Z)({appear:!0,in:C,timeout:M,role:"presentation"},j,{children:(0,g.jsx)(ne,{className:(0,i.Z)(R.container),onMouseDown:e=>{B.current=e.target===e.currentTarget},ownerState:$,children:(0,g.jsx)(se,(0,n.Z)({as:P,elevation:24,role:"dialog","aria-describedby":c,"aria-labelledby":D},W,{className:(0,i.Z)(R.paper,W.className),ownerState:$,children:(0,g.jsx)(ee.Provider,{value:F,children:f})}))})}))}))}));const ce=e=>{let{data:t}=e;const a=t.projectsJson;return r.createElement(l.Z,{title:null==a?void 0:a.title})};var pe=e=>{let{data:t}=e;const a=t.projectsJson,l=t.allFile,{0:n,1:s}=(0,r.useState)(void 0),{0:i,1:c}=(0,r.useState)(!1);return r.createElement(o.Z,null,r.createElement("section",{className:"h-screen"},r.createElement("div",{className:"container h-full flex flex-col items-center content-center justify-center"},r.createElement(E,{separator:r.createElement($.Z,{fontSize:"small",className:"text-white"}),"aria-label":"breadcrumb",style:{fontFamily:"Nunito",letterSpacing:"0.1em"}},r.createElement(R.Z,{cover:!0,bg:"#004AAD",to:"/projects",className:" text-white uppercase text-inherit"},r.createElement("span",{style:{textDecoration:"underline"}},"Projects")),r.createElement(u.Z,{className:"uppercase text-[12px] md:text-[19px]",style:{fontFamily:"Nunito",color:"#f0f0f0"}},a.title)),r.createElement("h1",{className:"text-[40px] md:text-[70px] font-bold uppercase text-white text-center tracking-widest"},a.title),r.createElement("h6",{className:"text-white text-center text-[16px] md:text-[25px] px-0 md:px-40 tracking-wider"},a.description))),r.createElement("div",{className:"container flex flex-col text-white py-5 space-y-4 px-0 md:px-[200px]"},r.createElement(A,{variant:"masonry",cols:2,gap:18},a.images.map((e=>{const t=l.edges.find((t=>t.node.relativePath===e));return t?r.createElement(Y,{key:e,onClick:()=>(e=>{e&&s(e),c(!0)})(t)},r.createElement(B.G,{className:"h-full w-auto object-cover cursor-pointer",image:t.node.childImageSharp.gatsbyImageData,style:{width:"100%",height:"auto"},formats:["auto","webp"],loading:"lazy",alt:a.title})):r.createElement(r.Fragment,null)}))),r.createElement(ie,{className:"flex items-center justify-center ",fullWidth:!0,maxWidth:"lg",open:i,onClose:()=>{c(!1)},scroll:"body"},n?r.createElement(B.G,{className:"h-full w-auto object-cover",image:null==n?void 0:n.node.childImageSharp.gatsbyImageData,style:{width:"100%",height:"auto"},formats:["auto","webp"],loading:"lazy",alt:a.title}):r.createElement(r.Fragment,null))))}}}]);
//# sourceMappingURL=component---src-templates-project-jsx-5fad23f3b9d4da11a34c.js.map