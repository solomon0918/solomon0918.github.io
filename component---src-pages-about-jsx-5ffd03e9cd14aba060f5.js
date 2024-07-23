"use strict";(self.webpackChunkerwin_mark_anora_eportfolio=self.webpackChunkerwin_mark_anora_eportfolio||[]).push([[96],{5327:function(e,t,n){var a;n.d(t,{A:function(){return u}});var r=n(6540),l=n(173),o=n(7340),s=n(3951);function i(e,t,n,a,o){const[s,i]=r.useState((()=>o&&n?n(e).matches:a?a(e).matches:t));return(0,l.A)((()=>{let t=!0;if(!n)return;const a=n(e),r=()=>{t&&i(a.matches)};return r(),a.addListener(r),()=>{t=!1,a.removeListener(r)}}),[e,n]),s}const c=(a||(a=n.t(r,2))).useSyncExternalStore;function m(e,t,n,a,l){const o=r.useCallback((()=>t),[t]),s=r.useMemo((()=>{if(l&&n)return()=>n(e).matches;if(null!==a){const{matches:t}=a(e);return()=>t}return o}),[o,e,a,l,n]),[i,m]=r.useMemo((()=>{if(null===n)return[o,()=>()=>{}];const t=n(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[o,n,e]);return c(m,i,s)}function u(e,t={}){const n=(0,s.A)(),a="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:r=!1,matchMedia:l=(a?window.matchMedia:null),ssrMatchMedia:u=null,noSsr:p=!1}=(0,o.A)({name:"MuiUseMediaQuery",props:t,theme:n});let d="function"==typeof e?e(n):e;d=d.replace(/^@media( ?)/m,"");return(void 0!==c?m:i)(d,r,l,u,p)}},970:function(e,t,n){var a=n(6540);t.A=()=>{const e=(0,a.useRef)(null),{0:t,1:n}=(0,a.useState)(!1),{0:r,1:l}=(0,a.useState)(!1),o=()=>{if(e.current){const t=e.current.getBoundingClientRect();n(t.top<window.innerHeight&&t.bottom>=0)}};return(0,a.useEffect)((()=>(o(),document.addEventListener("scroll",o),window.addEventListener("resize",o),()=>{document.removeEventListener("scroll",o),window.removeEventListener("resize",o)})),[]),(0,a.useEffect)((()=>{!r&&t&&e.current&&e.current.classList.add("tw-faded"),l(t)}),[t,r]),e}},6853:function(e,t,n){n.r(t),n.d(t,{Head:function(){return ae},default:function(){return re}});var a=n(6540),r=n(8674),l=n(5850),o=n(8168),s=n(8587),i=n(4164),c=n(4111),m=n(1848),u=n(3541);var p=a.createContext({}),d=n(7245),w=n(7553);function f(e){return(0,d.Ay)("MuiTimeline",e)}(0,w.A)("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);var h=n(8466);function g(e){return"alternate-reverse"===e?"positionAlternateReverse":`position${(0,h.A)(e)}`}var E=n(4848);const v=["position","className"],b=(0,m.Ay)("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.position&&t[g(n.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1});var x=a.forwardRef((function(e,t){const n=(0,u.A)({props:e,name:"MuiTimeline"}),{position:r="right",className:l}=n,m=(0,s.A)(n,v),d=(0,o.A)({},n,{position:r}),w=(e=>{const{position:t,classes:n}=e,a={root:["root",t&&g(t)]};return(0,c.A)(a,f,n)})(d),h=a.useMemo((()=>({position:r})),[r]);return(0,E.jsx)(p.Provider,{value:h,children:(0,E.jsx)(b,(0,o.A)({className:(0,i.A)(w.root,l),ownerState:d,ref:t},m))})}));function y(e){return(0,d.Ay)("MuiTimelineItem",e)}var A=(0,w.A)("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]),N=n(5602);function k(e){return(0,d.Ay)("MuiTimelineContent",e)}var S=(0,w.A)("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function M(e){return(0,d.Ay)("MuiTimelineOppositeContent",e)}var C=(0,w.A)("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);const T=["position","className"],I=(0,m.Ay)("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[g(n.position)]]}})((({ownerState:e})=>(0,o.A)({listStyle:"none",display:"flex",position:"relative",minHeight:70},"left"===e.position&&{flexDirection:"row-reverse"},("alternate"===e.position||"alternate-reverse"===e.position)&&{[`&:nth-of-type(${"alternate"===e.position?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${S.root}`]:{textAlign:"right"},[`& .${C.root}`]:{textAlign:"left"}}},!e.hasOppositeContent&&{"&::before":{content:'""',flex:1,padding:"6px 16px"}})));var R=a.forwardRef((function(e,t){const n=(0,u.A)({props:e,name:"MuiTimelineItem"}),{position:r,className:l}=n,m=(0,s.A)(n,T),{position:d}=a.useContext(p);let w=!1;a.Children.forEach(n.children,(e=>{(0,N.A)(e,["TimelineOppositeContent"])&&(w=!0)}));const f=(0,o.A)({},n,{position:r||d||"right",hasOppositeContent:w}),h=(e=>{const{position:t,classes:n,hasOppositeContent:a}=e,r={root:["root",g(t),!a&&"missingOppositeContent"]};return(0,c.A)(r,y,n)})(f),v=a.useMemo((()=>({position:f.position})),[f.position]);return(0,E.jsx)(p.Provider,{value:v,children:(0,E.jsx)(I,(0,o.A)({className:(0,i.A)(h.root,l),ownerState:f,ref:t},m))})}));function L(e){return(0,d.Ay)("MuiTimelineSeparator",e)}(0,w.A)("MuiTimelineSeparator",["root"]);const P=["className"],j=(0,m.Ay)("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"});var O=a.forwardRef((function(e,t){const n=(0,u.A)({props:e,name:"MuiTimelineSeparator"}),{className:a}=n,r=(0,s.A)(n,P),l=n,m=(e=>{const{classes:t}=e;return(0,c.A)({root:["root"]},L,t)})(l);return(0,E.jsx)(j,(0,o.A)({className:(0,i.A)(m.root,a),ownerState:l,ref:t},r))}));function D(e){return(0,d.Ay)("MuiTimelineConnector",e)}(0,w.A)("MuiTimelineConnector",["root"]);const F=["className"],J=(0,m.Ay)("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1})));var H=a.forwardRef((function(e,t){const n=(0,u.A)({props:e,name:"MuiTimelineConnector"}),{className:a}=n,r=(0,s.A)(n,F),l=n,m=(e=>{const{classes:t}=e;return(0,c.A)({root:["root"]},D,t)})(l);return(0,E.jsx)(J,(0,o.A)({className:(0,i.A)(m.root,a),ownerState:l,ref:t},r))})),V=n(6454);const W=["className"],$=(0,m.Ay)(V.A,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[g(n.position)]]}})((({ownerState:e})=>(0,o.A)({flex:1,padding:"6px 16px",textAlign:"left"},"left"===e.position&&{textAlign:"right"})));var G=a.forwardRef((function(e,t){const n=(0,u.A)({props:e,name:"MuiTimelineContent"}),{className:r}=n,l=(0,s.A)(n,W),{position:m}=a.useContext(p),d=(0,o.A)({},n,{position:m||"right"}),w=(e=>{const{position:t,classes:n}=e,a={root:["root",g(t)]};return(0,c.A)(a,k,n)})(d);return(0,E.jsx)($,(0,o.A)({component:"div",className:(0,i.A)(w.root,r),ownerState:d,ref:t},l))}));function Q(e){return(0,d.Ay)("MuiTimelineDot",e)}(0,w.A)("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const _=["className","color","variant"],z=(0,m.Ay)("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t["inherit"!==n.color&&`${n.variant}${(0,h.A)(n.color)}`],t[n.variant]]}})((({ownerState:e,theme:t})=>(0,o.A)({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(t.vars||t).shadows[1],margin:"11.5px 0"},"filled"===e.variant&&(0,o.A)({borderColor:"transparent"},"inherit"!==e.color&&(0,o.A)({},"grey"===e.color?{color:(t.vars||t).palette.grey[50],backgroundColor:(t.vars||t).palette.grey[400]}:{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main})),"outlined"===e.variant&&(0,o.A)({boxShadow:"none",backgroundColor:"transparent"},"inherit"!==e.color&&(0,o.A)({},"grey"===e.color?{borderColor:(t.vars||t).palette.grey[400]}:{borderColor:(t.vars||t).palette[e.color].main})))));var B=a.forwardRef((function(e,t){const n=(0,u.A)({props:e,name:"MuiTimelineDot"}),{className:a,color:r="grey",variant:l="filled"}=n,m=(0,s.A)(n,_),p=(0,o.A)({},n,{color:r,variant:l}),d=(e=>{const{color:t,variant:n,classes:a}=e,r={root:["root",n,"inherit"!==t&&`${n}${(0,h.A)(t)}`]};return(0,c.A)(r,Q,a)})(p);return(0,E.jsx)(z,(0,o.A)({className:(0,i.A)(d.root,a),ownerState:p,ref:t},m))})),K=n(3478),Y=n(5793),U=n(5327);const q=["className"],X=(0,m.Ay)(V.A,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[g(n.position)]]}})((({ownerState:e})=>(0,o.A)({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},"left"===e.position&&{textAlign:"left"}))),Z=a.forwardRef((function(e,t){const n=(0,u.A)({props:e,name:"MuiTimelineOppositeContent"}),{className:r}=n,l=(0,s.A)(n,q),{position:m}=a.useContext(p),d=(0,o.A)({},n,{position:m||"left"}),w=(e=>{const{position:t,classes:n}=e,a={root:["root",g(t)]};return(0,c.A)(a,M,n)})(d);return(0,E.jsx)(X,(0,o.A)({component:"div",className:(0,i.A)(w.root,r),ownerState:d,ref:t},l))}));Z.muiName="TimelineOppositeContent";var ee=Z,te=n(970);const ne=(0,K.A)({palette:{primary:{main:"#964734"}},components:{MuiTimelineDot:{styleOverrides:{root:{backgroundColor:"#964734",boxShadow:"0 0 0 8px #024950",padding:"9px"}}},MuiTimelineConnector:{styleOverrides:{root:{backgroundColor:"rgba(var(--text))"}}}}}),ae=()=>a.createElement(l.A,{title:"About Me"});var re=()=>{const e=(0,U.A)("(max-width:600px)"),t=(0,te.A)();return a.createElement(r.A,null,a.createElement("section",{className:"tw-container tw-mx-auto tw-py-20"},a.createElement("div",{className:"tw-flex tw-flex-col"},a.createElement("div",{className:"tw-relative"},a.createElement("div",{className:"tw-absolute tw--left-6 tw-hidden tw-h-full tw-w-4 tw-bg-primary_dark sm:tw-block dark:tw-bg-secondary"}),a.createElement("h1",{className:"tw-text-5xl tw-font-bold tw-uppercase"},"About Me")),a.createElement("p",{className:"tw-w-full tw-text-base tw-uppercase md:tw-w-[80%]"},"Proven track record of leveraging strong communication skills to effectively collaborate with teams and stakeholders. Committed to continuous learning and staying updated with industry trends. Proficient in Laravel for back-end development and skilled in front-end technologies including VueJS and ReactJS.")),a.createElement("div",{className:"tw-py-8 tw-fade-up",ref:t},a.createElement(Y.A,{theme:ne},e?a.createElement(x,{sx:{[`& .${A.root}:before`]:{flex:0,padding:0}}},a.createElement(R,null,a.createElement(O,null,a.createElement(B,null),a.createElement(H,null)),a.createElement(G,null,a.createElement("h6",{className:"tw-text-base tw-font-bold tw-uppercase"},"Freelance Full-stack Developer | Nov 2023 - Present"),a.createElement("p",{className:"tw-text-base tw-uppercase"},"Selft-Employed | Various Clients"),a.createElement("ul",{className:"tw-mt-3 tw-list-disc tw-space-y-2 tw-px-4 tw-text-base"},a.createElement("li",null,"Collaborated with multiple employers to identify and fix software bugs, enhancing system functionality and performance."),a.createElement("li",null,"Focused on identifying and fixing bugs in LMS ( Learning Management Systems ), improving functionality and user experience for multiple projects.")))),a.createElement(R,null,a.createElement(O,null,a.createElement(B,null),a.createElement(H,null)),a.createElement(G,null,a.createElement("h6",{className:"tw-text-base tw-font-bold tw-uppercase"},"Front-end Developer | Oct 2022 - Oct 2023"),a.createElement("p",{className:"tw-text-base tw-uppercase"},"Cenote Solutions (One Year Contract)"),a.createElement("p",{className:"tw-mt-3 tw-text-base"},"In my role as a front-end developer, I had several key responsibilities which primarily focused on enhancing and maintaining their product, Pulse. Additionally, I was tasked with the development of new modules using React and Typescript. I was responsible for building their IAM module, designed to config and analyze survey data collected from Qualtrics, where students provided their responses. Furthermore, I worked on overhauling various existing modules, notable the users and roles management, to improve their functionality and user experience."))),a.createElement(R,null,a.createElement(O,null,a.createElement(B,null),a.createElement(H,null)),a.createElement(G,null,a.createElement("h6",{className:"tw-text-base tw-font-bold tw-uppercase"},"Full-stack Web Developer | Feb 2022 - Oct 2022"),a.createElement("h6",{className:"tw-text-base tw-uppercase"},"Offshorly"),a.createElement("p",{className:"tw-mt-3 tw-text-base"},"Worked on a project called Auction Tale, focusing on the front-end development. The project uses Laravel 9 for the back-end and VueJS for the front-end. I managed the development team, which included three part-time back-end developers and one part-time front-end developer. Auction Tale is a bidding application."))),a.createElement(R,null,a.createElement(O,null,a.createElement(B,null),a.createElement(H,null)),a.createElement(G,null,a.createElement("h6",{className:"tw-text-base tw-font-bold tw-uppercase"},"Front-end Web Developer | Aug 2020 - Jun 2021"),a.createElement("h6",{className:"tw-text-base tw-uppercase"},"VirtualStaff PH"),a.createElement("p",{className:"tw-mt-3 tw-text-base"},"Worked on a new application for finding virtual assistants from scratch using ReactJS. The application includes dashboards for employers and job seekers with multiple features like chat and time tracking. The goal was to revamp their site."))),a.createElement(R,null,a.createElement(O,null,a.createElement(B,null),a.createElement(H,null)),a.createElement(G,null,a.createElement("h6",{className:"tw-text-base tw-font-bold tw-uppercase"},"Freelance Full-stack Developer | May 2018 - Jun 2022"),a.createElement("h6",{className:"tw-text-base tw-uppercase"},"Self-Employed | Various Clients"),a.createElement("ul",{className:"tw-mt-3 tw-list-disc tw-space-y-2 tw-px-4 tw-text-base"},a.createElement("li",null,"I worked as a freelancer for a"," ",a.createElement("strong",null,"traffic school"),", handling both the back-end (using Laravel) and the front-end (with VueJS 2) of a project. I also set up a new server running on CentOS 8."),a.createElement("li",null,"I worked as a freelancer for a construction company called ",a.createElement("strong",null,"SBHE Pte Ltd"),". I was responsible for their front-end project management website using AngularJS and also did some work on the back-end API, which is in Laravel."),a.createElement("li",null,"I worked part-time for a company called"," ",a.createElement("strong",null,"California Ticket King, PC"),", and then moved to full-time. I'm responsible for their payment portal using Slim PHP and jQuery, and their dashboard website using Laravel and VueJS.")))),a.createElement(R,null,a.createElement(O,null,a.createElement(B,null),a.createElement(H,null)),a.createElement(G,null,a.createElement("h6",{className:"tw-text-base tw-font-bold tw-uppercase"},"Web Developer | Mar 2017 - Jun 2018"),a.createElement("h6",{className:"tw-text-base tw-uppercase"},"Note-e-fied Incorporated"),a.createElement("p",{className:"tw-mt-3 tw-text-base"},"I was assigned to work on two applications for the company, using .NET for the back-end and AngularJS and jQuery for the front-end. My tasks involved developing new features, maintaining existing code, and ensuring smooth interaction between front-end and back-end elements. Throughout this process, I also ensured that the work complied with relevant regulations, such as HIPAA (Health Insurance Portability and Accountability Act) compliance. Given the sensitive nature of the data handled by the applications, ensuring HIPAA compliance was paramount to protect patient confidentiality and privacy. This experience gave me insights into managing complex web projects and collaborating effectively within a team."))),a.createElement(R,null,a.createElement(O,null,a.createElement(B,null),a.createElement(H,null)),a.createElement(G,null,a.createElement("h6",{className:"tw-text-base tw-font-bold tw-uppercase"},"Software Developer | Mar 2016 - Feb 2017"),a.createElement("h6",{className:"tw-text-base tw-uppercase"},"LOGIMINE S.A.S."),a.createElement("p",{className:"tw-mt-3 tw-text-base"},"I spent some time working on their PCC4 software using JavaEE, and then they switched me to manage over to a fuel management project.")))):a.createElement(x,{sx:{[`& .${C.root}`]:{flex:.2,paddingLeft:0,textAlign:"left"},[`& .${A.root}:before`]:{flex:0,padding:0}}},a.createElement(R,null,a.createElement(ee,null,a.createElement("p",{className:"tw-rounded-lg tw-bg-gray-500 tw-py-2 tw-text-center tw-text-base tw-uppercase tw-text-white"},"Nov 2023 - Present")),a.createElement(O,null,a.createElement(B,null),a.createElement(H,null)),a.createElement(G,null,a.createElement("h6",{className:"tw-text-lg tw-font-bold tw-uppercase"},"Freelance Full-stack Developer"),a.createElement("p",{className:"tw-text-base tw-uppercase"},"Self-Employed | Various Clients"),a.createElement("ul",{className:"tw-mt-3 tw-list-disc tw-space-y-2 tw-px-4 tw-text-base"},a.createElement("li",null,"Collaborated with multiple employers to identify and fix software bugs, enhancing system functionality and performance."),a.createElement("li",null,"Focused on identifying and fixing bugs in LMS ( Learning Management Systems ), improving functionality and user experience for multiple projects.")))),a.createElement(R,null,a.createElement(ee,null,a.createElement("p",{className:"tw-rounded-lg tw-bg-gray-500 tw-py-2 tw-text-center tw-text-base tw-uppercase tw-text-white"},"Oct 2022 - Oct 2023")),a.createElement(O,null,a.createElement(B,null),a.createElement(H,null)),a.createElement(G,null,a.createElement("h6",{className:"tw-text-lg tw-font-bold tw-uppercase"},"Front-end Developer"),a.createElement("p",{className:"tw-text-base tw-uppercase"},"Cenote Solutions (One Year Contract)"),a.createElement("p",{className:"tw-mt-3 tw-text-base"},"In my role as a front-end developer, I had several key responsibilities which primarily focused on enhancing and maintaining their product, Pulse. Additionally, I was tasked with the development of new modules using React and Typescript. I was responsible for building their IAM module, designed to config and analyze survey data collected from Qualtrics, where students provided their responses. Furthermore, I worked on overhauling various existing modules, notable the users and roles management, to improve their functionality and user experience."))),a.createElement(R,null,a.createElement(ee,null,a.createElement("p",{className:"tw-rounded-lg tw-bg-gray-500 tw-py-2 tw-text-center tw-text-base tw-uppercase tw-text-white"},"Feb 2022 - Oct 2022")),a.createElement(O,null,a.createElement(B,null),a.createElement(H,null)),a.createElement(G,null,a.createElement("h6",{className:"tw-text-lg tw-font-bold tw-uppercase"},"Full-stack Web Developer"),a.createElement("p",{className:"tw-text-base tw-uppercase"},"Offshorly"),a.createElement("p",{className:"tw-mt-3 tw-text-base"},"Worked on a project called Auction Tale, focusing on the front-end development. The project uses Laravel 9 for the back-end and VueJS for the front-end. I managed the development team, which included three part-time back-end developers and one part-time front-end developer. Auction Tale is a bidding application."))),a.createElement(R,null,a.createElement(ee,null,a.createElement("p",{className:"tw-rounded-lg tw-bg-gray-500 tw-py-2 tw-text-center tw-text-base tw-uppercase tw-text-white"},"Aug 2020 - Jun 2021")),a.createElement(O,null,a.createElement(B,null),a.createElement(H,null)),a.createElement(G,null,a.createElement("h6",{className:"tw-text-lg tw-font-bold tw-uppercase"},"Front-end Web Developer"),a.createElement("p",{className:"tw-text-base tw-uppercase"},"VirtualStaff PH"),a.createElement("p",{className:"tw-mt-3 tw-text-base"},"Worked on a new application for finding virtual assistants from scratch using ReactJS. The application includes dashboards for employers and job seekers with multiple features like chat and time tracking. The goal was to revamp their site."))),a.createElement(R,null,a.createElement(ee,null,a.createElement("p",{className:"tw-rounded-lg tw-bg-gray-500 tw-py-2 tw-text-center tw-text-base tw-uppercase tw-text-white"},"May 2018 - Jun 2022")),a.createElement(O,null,a.createElement(B,null),a.createElement(H,null)),a.createElement(G,null,a.createElement("h6",{className:"tw-text-lg tw-font-bold tw-uppercase"},"Freelance Full-stack Developer"),a.createElement("p",{className:"tw-text-base tw-uppercase"},"Self-Employed | Various Clients"),a.createElement("ul",{className:"tw-mt-3 tw-list-disc tw-space-y-2 tw-px-4 tw-text-base"},a.createElement("li",null,"I worked as a freelancer for a"," ",a.createElement("strong",null,"traffic school"),", handling both the back-end (using Laravel) and the front-end (with VueJS 2) of a project. I also set up a new server running on CentOS 8."),a.createElement("li",null,"I worked as a freelancer for a construction company called ",a.createElement("strong",null,"SBHE Pte Ltd"),". I was responsible for their front-end project management website using AngularJS and also did some work on the back-end API, which is in Laravel."),a.createElement("li",null,"I worked part-time for a company called"," ",a.createElement("strong",null,"California Ticket King, PC"),", and then moved to full-time. I'm responsible for their payment portal using Slim PHP and jQuery, and their dashboard website using Laravel and VueJS.")))),a.createElement(R,null,a.createElement(ee,null,a.createElement("p",{className:"tw-rounded-lg tw-bg-gray-500 tw-py-2 tw-text-center tw-text-base tw-uppercase tw-text-white"},"Mar 2017 - Jun 2018")),a.createElement(O,null,a.createElement(B,null),a.createElement(H,null)),a.createElement(G,null,a.createElement("h6",{className:"tw-text-lg tw-font-bold tw-uppercase"},"Web Developer"),a.createElement("p",{className:"tw-text-base tw-uppercase"},"Note-e-fied Incorporated"),a.createElement("p",{className:"tw-mt-3 tw-text-base"},"I was assigned to work on two applications for the company, using .NET for the back-end and AngularJS and jQuery for the front-end. My tasks involved developing new features, maintaining existing code, and ensuring smooth interaction between front-end and back-end elements. Throughout this process, I also ensured that the work complied with relevant regulations, such as HIPAA (Health Insurance Portability and Accountability Act) compliance. Given the sensitive nature of the data handled by the applications, ensuring HIPAA compliance was paramount to protect patient confidentiality and privacy. This experience gave me insights into managing complex web projects and collaborating effectively within a team."))),a.createElement(R,null,a.createElement(ee,null,a.createElement("p",{className:"tw-rounded-lg tw-bg-gray-500 tw-py-2 tw-text-center tw-text-base tw-uppercase tw-text-white"},"Mar 2016 - Feb 2017")),a.createElement(O,null,a.createElement(B,null),a.createElement(H,null)),a.createElement(G,null,a.createElement("h6",{className:"tw-text-lg tw-font-bold tw-uppercase"},"Software Developer"),a.createElement("p",{className:"tw-text-base tw-uppercase"},"LOGIMINE S.A.S."),a.createElement("p",{className:"tw-mt-3 tw-text-base"},"I spent some time working on their PCC4 software using JavaEE, and then they switched me to manage over to a fuel management project."))))))))}}}]);
//# sourceMappingURL=component---src-pages-about-jsx-5ffd03e9cd14aba060f5.js.map