"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[85],{6637:function(e,t,n){n.d(t,{Z:function(){return K}});var r=n(7462),i=n(3366),o=n(7294),l=n(512),a=n(8510),s=n(948),u=n(1657),c=n(1705),p=n(2068),d=n(8992),h=n(7326),f=n(4578),m=n(220);function b(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)})),n}function v(e,t,n){return null!=n[t]?n[t]:e.props[t]}function g(e,t,n){var r=b(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var l in e)l in t?o.length&&(i[l]=o,o=[]):o.push(l);var a={};for(var s in t){if(i[s])for(r=0;r<i[s].length;r++){var u=i[s][r];a[i[s][r]]=n(u)}a[s]=n(s)}for(r=0;r<o.length;r++)a[o[r]]=n(o[r]);return a}(t,r);return Object.keys(i).forEach((function(l){var a=i[l];if((0,o.isValidElement)(a)){var s=l in t,u=l in r,c=t[l],p=(0,o.isValidElement)(c)&&!c.props.in;!u||s&&!p?u||!s||p?u&&s&&(0,o.isValidElement)(c)&&(i[l]=(0,o.cloneElement)(a,{onExited:n.bind(null,a),in:c.props.in,exit:v(a,"exit",e),enter:v(a,"enter",e)})):i[l]=(0,o.cloneElement)(a,{in:!1}):i[l]=(0,o.cloneElement)(a,{onExited:n.bind(null,a),in:!0,exit:v(a,"exit",e),enter:v(a,"enter",e)})}})),i}var x=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},y=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind((0,h.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,f.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,l=t.handleExited;return{children:t.firstRender?(n=e,r=l,b(n.children,(function(e){return(0,o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:v(e,"appear",n),enter:v(e,"enter",n),exit:v(e,"exit",n)})}))):g(e,i,l),firstRender:!1}},n.handleExited=function(e,t){var n=b(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,i.Z)(e,["component","childFactory"]),l=this.state.contextValue,a=x(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?o.createElement(m.Z.Provider,{value:l},a):o.createElement(m.Z.Provider,{value:l},o.createElement(t,r,a))},t}(o.Component);y.propTypes={},y.defaultProps={component:"div",childFactory:function(e){return e}};var R=y,Z=n(917),M=n(8849),E=n(5893);var k=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:a,rippleSize:s,in:u,onExited:c,timeout:p}=e,[d,h]=o.useState(!1),f=(0,l.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m={width:s,height:s,top:-s/2+a,left:-s/2+i},b=(0,l.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return u||d||h(!0),o.useEffect((()=>{if(!u&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,u,p]),(0,E.jsx)("span",{className:f,style:m,children:(0,E.jsx)("span",{className:b})})},T=n(1977);var C=(0,T.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);const P=["center","classes","className"];let V,S,w,$,D=e=>e;const j=(0,Z.F4)(V||(V=D`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),F=(0,Z.F4)(S||(S=D`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),L=(0,Z.F4)(w||(w=D`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),B=(0,s.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),N=(0,s.ZP)(k,{name:"MuiTouchRipple",slot:"Ripple"})($||($=D`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),C.rippleVisible,j,550,(({theme:e})=>e.transitions.easing.easeInOut),C.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),C.child,C.childLeaving,F,550,(({theme:e})=>e.transitions.easing.easeInOut),C.childPulsate,L,(({theme:e})=>e.transitions.easing.easeInOut));var I=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiTouchRipple"}),{center:a=!1,classes:s={},className:c}=n,p=(0,i.Z)(n,P),[d,h]=o.useState([]),f=o.useRef(0),m=o.useRef(null);o.useEffect((()=>{m.current&&(m.current(),m.current=null)}),[d]);const b=o.useRef(!1),v=(0,M.Z)(),g=o.useRef(null),x=o.useRef(null),y=o.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:o}=e;h((e=>[...e,(0,E.jsx)(N,{classes:{ripple:(0,l.Z)(s.ripple,C.ripple),rippleVisible:(0,l.Z)(s.rippleVisible,C.rippleVisible),ripplePulsate:(0,l.Z)(s.ripplePulsate,C.ripplePulsate),child:(0,l.Z)(s.child,C.child),childLeaving:(0,l.Z)(s.childLeaving,C.childLeaving),childPulsate:(0,l.Z)(s.childPulsate,C.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:i},f.current)])),f.current+=1,m.current=o}),[s]),Z=o.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:i=a||t.pulsate,fakeElement:o=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&b.current)return void(b.current=!1);"touchstart"===(null==e?void 0:e.type)&&(b.current=!0);const l=o?null:x.current,s=l?l.getBoundingClientRect():{width:0,height:0,left:0,top:0};let u,c,p;if(i||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(s.width/2),c=Math.round(s.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;u=Math.round(t-s.left),c=Math.round(n-s.top)}if(i)p=Math.sqrt((2*s.width**2+s.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((l?l.clientWidth:0)-u),u)+2,t=2*Math.max(Math.abs((l?l.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===g.current&&(g.current=()=>{y({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})},v.start(80,(()=>{g.current&&(g.current(),g.current=null)}))):y({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})}),[a,y,v]),k=o.useCallback((()=>{Z({},{pulsate:!0})}),[Z]),T=o.useCallback(((e,t)=>{if(v.clear(),"touchend"===(null==e?void 0:e.type)&&g.current)return g.current(),g.current=null,void v.start(0,(()=>{T(e,t)}));g.current=null,h((e=>e.length>0?e.slice(1):e)),m.current=t}),[v]);return o.useImperativeHandle(t,(()=>({pulsate:k,start:Z,stop:T})),[k,Z,T]),(0,E.jsx)(B,(0,r.Z)({className:(0,l.Z)(C.root,s.root,c),ref:x},p,{children:(0,E.jsx)(R,{component:null,exit:!0,children:d})}))})),z=n(8027);function O(e){return(0,z.ZP)("MuiButtonBase",e)}var X=(0,T.Z)("MuiButtonBase",["root","disabled","focusVisible"]);const U=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Y=(0,s.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${X.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}});var K=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiButtonBase"}),{action:s,centerRipple:h=!1,children:f,className:m,component:b="button",disabled:v=!1,disableRipple:g=!1,disableTouchRipple:x=!1,focusRipple:y=!1,LinkComponent:R="a",onBlur:Z,onClick:M,onContextMenu:k,onDragLeave:T,onFocus:C,onFocusVisible:P,onKeyDown:V,onKeyUp:S,onMouseDown:w,onMouseLeave:$,onMouseUp:D,onTouchEnd:j,onTouchMove:F,onTouchStart:L,tabIndex:B=0,TouchRippleProps:N,touchRippleRef:z,type:X}=n,K=(0,i.Z)(n,U),A=o.useRef(null),H=o.useRef(null),W=(0,c.Z)(H,z),{isFocusVisibleRef:_,onFocus:q,onBlur:G,ref:J}=(0,d.Z)(),[Q,ee]=o.useState(!1);v&&Q&&ee(!1),o.useImperativeHandle(s,(()=>({focusVisible:()=>{ee(!0),A.current.focus()}})),[]);const[te,ne]=o.useState(!1);o.useEffect((()=>{ne(!0)}),[]);const re=te&&!g&&!v;function ie(e,t,n=x){return(0,p.Z)((r=>{t&&t(r);return!n&&H.current&&H.current[e](r),!0}))}o.useEffect((()=>{Q&&y&&!g&&te&&H.current.pulsate()}),[g,y,Q,te]);const oe=ie("start",w),le=ie("stop",k),ae=ie("stop",T),se=ie("stop",D),ue=ie("stop",(e=>{Q&&e.preventDefault(),$&&$(e)})),ce=ie("start",L),pe=ie("stop",j),de=ie("stop",F),he=ie("stop",(e=>{G(e),!1===_.current&&ee(!1),Z&&Z(e)}),!1),fe=(0,p.Z)((e=>{A.current||(A.current=e.currentTarget),q(e),!0===_.current&&(ee(!0),P&&P(e)),C&&C(e)})),me=()=>{const e=A.current;return b&&"button"!==b&&!("A"===e.tagName&&e.href)},be=o.useRef(!1),ve=(0,p.Z)((e=>{y&&!be.current&&Q&&H.current&&" "===e.key&&(be.current=!0,H.current.stop(e,(()=>{H.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),V&&V(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!v&&(e.preventDefault(),M&&M(e))})),ge=(0,p.Z)((e=>{y&&" "===e.key&&H.current&&Q&&!e.defaultPrevented&&(be.current=!1,H.current.stop(e,(()=>{H.current.pulsate(e)}))),S&&S(e),M&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&M(e)}));let xe=b;"button"===xe&&(K.href||K.to)&&(xe=R);const ye={};"button"===xe?(ye.type=void 0===X?"button":X,ye.disabled=v):(K.href||K.to||(ye.role="button"),v&&(ye["aria-disabled"]=v));const Re=(0,c.Z)(t,J,A);const Ze=(0,r.Z)({},n,{centerRipple:h,component:b,disabled:v,disableRipple:g,disableTouchRipple:x,focusRipple:y,tabIndex:B,focusVisible:Q}),Me=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,o={root:["root",t&&"disabled",n&&"focusVisible"]},l=(0,a.Z)(o,O,i);return n&&r&&(l.root+=` ${r}`),l})(Ze);return(0,E.jsxs)(Y,(0,r.Z)({as:xe,className:(0,l.Z)(Me.root,m),ownerState:Ze,onBlur:he,onClick:M,onContextMenu:le,onFocus:fe,onKeyDown:ve,onKeyUp:ge,onMouseDown:oe,onMouseLeave:ue,onMouseUp:se,onDragLeave:ae,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:Re,tabIndex:v?-1:B,type:X},ye,K,{children:[f,re?(0,E.jsx)(I,(0,r.Z)({ref:W,center:h},N)):null]}))}))},220:function(e,t,n){var r=n(7294);t.Z=r.createContext(null)}}]);
//# sourceMappingURL=c071097ffc2ad7db9f315627ab15a2edcbd50261-1a8b3d45ca1720935f03.js.map