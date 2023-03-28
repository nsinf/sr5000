"use strict";(self.webpackChunksr_5000=self.webpackChunksr_5000||[]).push([[772],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2474:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:4,hide_table_of_contents:!1},i="4\ufe0f\u20e3Environment",c={unversionedId:"env",id:"env",title:"4\ufe0f\u20e3Environment",description:"4\ufe0f\u20e31\ufe0f\u20e3Intranet environment",source:"@site/docs/env.mdx",sourceDirName:".",slug:"/env",permalink:"/sr5000/docs/env",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/env.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"3\ufe0f\u20e3Products package",permalink:"/sr5000/docs/items"},next:{title:"5\ufe0f\u20e3Requirement",permalink:"/sr5000/docs/require"}},s={},l=[{value:"4\ufe0f\u20e31\ufe0f\u20e3Intranet environment",id:"4\ufe0f\u20e31\ufe0f\u20e3intranet-environment",level:2},{value:"4\ufe0f\u20e32\ufe0f\u20e3Roller conveyor",id:"4\ufe0f\u20e32\ufe0f\u20e3roller-conveyor",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...a}=e;return(0,o.kt)(p,(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"4\ufe0f\u20e3environment"},"4\ufe0f\u20e3Environment"),(0,o.kt)("h2",{id:"4\ufe0f\u20e31\ufe0f\u20e3intranet-environment"},"4\ufe0f\u20e31\ufe0f\u20e3Intranet environment"),(0,o.kt)("p",null,"When we are connected to the internet and using a proxy server while browsing the web, that traffic goes through the proxy server instaed of coming directly from client PC. Due MIS policy, we were blocked some of cloud service such as Github, Google Cloud, MS Azure..."),(0,o.kt)("mermaid",{value:"flowchart LR;\nsubgraph SG cloud\n    db[(scm-DB)]\n\nend\nsubgraph Local network\n    pc[Computer]\n    gw{{VPN Gateway}}        \n    px[[proxy]]\nend\nsubgraph internet\n    cs[others cloud service?]\nend\npc--\x3epx--\x3egw-.->db\npx--\x3ecs"}),(0,o.kt)("h2",{id:"4\ufe0f\u20e32\ufe0f\u20e3roller-conveyor"},"4\ufe0f\u20e32\ufe0f\u20e3Roller conveyor"),(0,o.kt)("p",null,"Roller conveyor is used to reduce human movement and staging area for awaiting scanning. The length of the conveyor is subject to one outer box base.\nIt can adjust height around 2cm only."),(0,o.kt)("p",null,"Below is the standard facility in warehouse 2m or 3m length and 0.6m width per one set,\n",(0,o.kt)("img",{alt:"conveyor",src:t(2522).Z,width:"2979",height:"1150"})))}d.isMDXComponent=!0},2522:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/conveyor-d98666f8e5ed1b0984c1e0f6d2cebbaa.png"}}]);