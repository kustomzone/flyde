"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[876],{38570:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(70079);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(10328),r=(n(70079),n(38570));const a={sidebar_position:2},i="Core Concepts",c={unversionedId:"core-concepts",id:"core-concepts",title:"Core Concepts",description:"This article introduces some of the core concepts of Flyde.",source:"@site/docs/2-core-concepts.md",sourceDirName:".",slug:"/core-concepts",permalink:"/docs/core-concepts",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2-core-concepts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Integrating with Existing Code",permalink:"/docs/integrate-flows"}},s={},l=[{value:"Nodes",id:"nodes",level:2},{value:"Connections",id:"connections",level:2},{value:"Flow",id:"flow",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"core-concepts"},"Core Concepts"),(0,r.kt)("p",null,"This article introduces some of the core concepts of Flyde."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A deeper dive into each concept is available in the ",(0,r.kt)("a",{parentName:"p",href:"../advanced-concepts"},"advanced concepts")," article.")),(0,r.kt)("h2",{id:"nodes"},"Nodes"),(0,r.kt)("p",null,"Each node in Flyde is an isolated, modular unit that runs some logic when it is executed.\nA node has ",(0,r.kt)("strong",{parentName:"p"},"inputs")," and ",(0,r.kt)("strong",{parentName:"p"},"outputs")," that allow it to interact with other nodes."),(0,r.kt)("p",null,"When a node runs, it can read the values of its inputs, and emit values to its outputs. The logic of a node is implemented either using code (TypeScript or JavaScript), or using Flyde, by grouping other nodes together."),(0,r.kt)("p",null,"For example, a node that adds two numbers together, will have two inputs, and one output, and will emit the sum of the two inputs to its output, once both inputs are received values."),(0,r.kt)("p",null,"Unlike regular functions, nodes can have multiple outputs, and can emit values to their outputs multiple times. For example, a node might receive a tuple of values, and emit each value to a different output."),(0,r.kt)("h2",{id:"connections"},"Connections"),(0,r.kt)("p",null,"Nodes are connected together using ",(0,r.kt)("strong",{parentName:"p"},"connections"),". Connections are the wires that connect nodes together, and allow them to communicate. Each connection connects an output of one node, to an input of another node."),(0,r.kt)("p",null,"Whenever a node emits a value to one of its outputs, the value is sent to all the inputs of nodes that are connected to that output. The connected nodes will receive emitted value."),(0,r.kt)("h2",{id:"flow"},"Flow"),(0,r.kt)("p",null,"A Flyde flow consists of ",(0,r.kt)("strong",{parentName:"p"},"nodes")," and ",(0,r.kt)("strong",{parentName:"p"},"connections")," between them. Nodes are the building blocks of a flow, and connections are the wires that connect them together."),(0,r.kt)("p",null,"A flow can also have ",(0,r.kt)("strong",{parentName:"p"},"inputs")," and ",(0,r.kt)("strong",{parentName:"p"},"outputs")," that allow it to interact with the outside world."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Flyde Core Concepts",src:n(54598).Z,width:"1212",height:"1056"})))}d.isMDXComponent=!0},54598:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concepts-overview-5dd89e03cbc052a7c3d0a9a1839bdc4f.png"}}]);