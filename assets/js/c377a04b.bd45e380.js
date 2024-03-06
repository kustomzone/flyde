"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6971],{38570:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(70079);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,y=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(10328),a=(n(70079),n(38570));const o={sidebar_position:1},i="Introduction",l={unversionedId:"index",id:"index",title:"Introduction",description:"Flyde is visual, flow-based, programming toolkit that integrates with your existing code. It allows you to create and run visual programs.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Core Concepts",permalink:"/docs/core-concepts"}},s={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Playground",id:"playground",level:3},{value:"Running locally",id:"running-locally",level:3},{value:"Motivation",id:"motivation",level:2},{value:"Overview",id:"overview",level:2},{value:"Getting Started",id:"getting-started",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Flyde is visual, flow-based, programming toolkit that ",(0,a.kt)("strong",{parentName:"p"},"integrates with your existing code"),". It allows you to create and run visual programs."),(0,a.kt)("p",null,"Flyde integrates with TypeScript (and JavaScript) on Node.js and frontend projects."),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("h3",{id:"playground"},"Playground"),(0,a.kt)("p",null,"The easiest way to experiment with Flyde is to visit the ",(0,a.kt)("a",{parentName:"p",href:"https://flyde.dev/playground"},"online playground"),", which allows you to create and run flows in the browser."),(0,a.kt)("h3",{id:"running-locally"},"Running locally"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the ",(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=flyde.flyde-vscode"},"VSCode extension")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"mkdir my-flyde-project && cd my-flyde-project")),(0,a.kt)("li",{parentName:"ol"},"Open your project in VSCode"),(0,a.kt)("li",{parentName:"ol"},"Command Palette (Ctrl+Shift+P) -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Flyde: New visual flow")),(0,a.kt)("li",{parentName:"ol"},"Check out the ",(0,a.kt)("a",{parentName:"li",href:"./integrate-flows"},"Integrating with Existing Code")," guide to learn how to integrate your flows with your code")),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"Modern development involves asynchronous and concurrency actions, which are more difficult to convey with text-based coding, and ",(0,a.kt)("strong",{parentName:"p"},"easier, and more intuitive")," to build, visualize and debug using a visual programming language."),(0,a.kt)("p",null,"Flyde was built ",(0,a.kt)("strong",{parentName:"p"},"not to replace textual programming"),", but augment it with a higher-level abstraction, ",(0,a.kt)("strong",{parentName:"p"},"only when it makes sense to.")),(0,a.kt)("p",null,"Flyde makes it easier for ",(0,a.kt)("strong",{parentName:"p"},"less skilled technical members to understand, and even contribute"),", to business logic. It helps more seasoned developers by ",(0,a.kt)("strong",{parentName:"p"},"having an always-correct diagram")," of the program, as well as open new ways to troubleshoot functional and performance issues."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Flyde's main building blocks are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},".flyde files, which represent Flyde flows. They are YAML files behind the scenes and describe which nodes are in the flow, and how they are connected."),(0,a.kt)("li",{parentName:"ul"},"The visual flow editor, which edits .flyde files. Available as a ",(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=flyde.flyde-vscode"},"VSCode extension")),(0,a.kt)("li",{parentName:"ul"},"The runtime library, an npm package ",(0,a.kt)("inlineCode",{parentName:"li"},"@flyde/runtime"),", which runs loads and runs .flyde files. Both on NodeJS and the browser (via a webpack loader)"),(0,a.kt)("li",{parentName:"ul"},"The standard library, an npm package ",(0,a.kt)("inlineCode",{parentName:"li"},"@flyde/stdlib"),", which contains a set of built-in nodes that can be used to create flows. Note: ",(0,a.kt)("inlineCode",{parentName:"li"},"@flyde/runtime")," depends on ",(0,a.kt)("inlineCode",{parentName:"li"},"@flyde/stdlib"),", so you don't need to install it separately.")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"If you want to learn how to integrate Flyde with your code, jump straight to the the ",(0,a.kt)("a",{parentName:"p",href:"./integrate-flows"},"Integrating with Existing Code")," guide."),(0,a.kt)("p",null,"The playground has many examples and showcases not only the visual editor, but also the runtime library, and how to integrate it with your own code."),(0,a.kt)("p",null,"After you've played with the playground, you can install the VSCode extension, and start creating your own flows and integrating them with your code."),(0,a.kt)("p",null,"Read more about Flyde's core concepts in the next article: ",(0,a.kt)("a",{parentName:"p",href:"./core-concepts"},"Core Concepts"),"."))}p.isMDXComponent=!0}}]);