"use strict";(self.webpackChunksr_5000=self.webpackChunksr_5000||[]).push([[647],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>m});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),p=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||a;return r?t.createElement(m,c(c({ref:n},l),{},{components:r})):t.createElement(m,c({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=r[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4685:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2,hide_table_of_contents:!0},c="2\ufe0f\u20e3Process flow",s={unversionedId:"proces",id:"proces",title:"2\ufe0f\u20e3Process flow",description:"Current flow chart overview",source:"@site/docs/proces.mdx",sourceDirName:".",slug:"/proces",permalink:"/sr5000/docs/proces",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/proces.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"1\ufe0f\u20e3Intro",permalink:"/sr5000/docs/intro"},next:{title:"3\ufe0f\u20e3Products package",permalink:"/sr5000/docs/items"}},i={},p=[],l={toc:p},u="wrapper";function f(e){let{components:n,...a}=e;return(0,o.kt)(u,(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2\ufe0f\u20e3process-flow"},"2\ufe0f\u20e3Process flow"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Current flow chart overview")),(0,o.kt)("mermaid",{value:"flowchart LR;\ne1((End))\nDSA[(scm\\n-Receipts)]\nDIT[(scm-SKU)]\nRSC(Receipt Status\\n=Closed)\nsubgraph DF[EDI]\n    s1((Start))\n    ISA[(intermediate\\n-ASN)]\n    AIT[[SKU-API]] \n    CIT{have SKU?}\n    ASA[[ASN-API]]\nend\nsubgraph IF[Irregular Flow]\n    RPT(Report)\n    AMA(Auto mail\\nAlert)\n    WHG(W/H Group)\n    QAG(QA Group)\nend\nsubgraph CF[Cargoes Flow]\n    s2((Start))\n    ATA(Caroges\\n Arrival)\n    IQC{Inspection?}\n    OPE(Open Box)\nend\nsubgraph MS[mars]\n    WFR(WorkStation\\nReceiving)\n    ABR[[REC-API]]\nend\ns1--.dat via ftp--\x3eISA--OK--\x3eCIT--NO--\x3eAIT--OK--\x3eDIT\nCIT--YES--\x3eASA--OK--\x3eDSA\ns2--\x3eATA--\x3eIQC\nIQC--OK--\x3eOPE--\x3eWFR--\x3eABR--OK--\x3eDSA\nASA--NG--\x3eAMA\nABR--NG--\x3eAMA\nDSA--\x3eRSC--\x3ee1\n\nAMA--\x3eWHG\nIQC--NG--\x3eRPT--\x3eQAG\n\nstyle IF fill:#f9f"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WorkStation Receiving sequence Diagram")),(0,o.kt)("mermaid",{value:"sequenceDiagram\nautonumber\nScan->>UI: Select Printer\n\nloop Per Outer Box\n    Input--\x3e>UI: Select Invoice\n    loop Per Bundle\n        Input--\x3e>UI:  Scan MG(Market Group)\n        Input--\x3e>UI:  Count Number of boxes\n        Scan->>UI:  Scan One of 1D barcode as Sku master\n        loop Per Box\n            Scan->>UI: Scan each Data matrix barcode\n        end\n    end\nend\nUI->>DB: Batch data process\n\nDB->>API_Wrapper: .json file\nAPI_Wrapper->> UI: Return result"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"User Interface layout"),"\n",(0,o.kt)("img",{alt:"lp02",src:r(1028).Z,width:"1262",height:"680"})))}f.isMDXComponent=!0},1028:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/lp02-14e5545187fbc7f855abcc0274f1ecce.png"}}]);