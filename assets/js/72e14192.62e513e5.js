"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7239],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,y=d["".concat(u,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64732:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=n(52685),o=n(1244),l=(n(27378),n(35318)),i=["components"],a={},u="Flyde Quick Start Guide",c={unversionedId:"quick-start",id:"quick-start",title:"Flyde Quick Start Guide",description:"Welcome to Flyde! This quick start guide will help you get up and running with Flyde in no time.",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quick-start.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lifecycle of a Part",permalink:"/docs/lifecycle"},next:{title:"Terminology Reference",permalink:"/docs/terminology"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Create a new Flyde project",id:"step-1-create-a-new-flyde-project",level:2},{value:"Step 2: Install the Flyde runtime",id:"step-2-install-the-flyde-runtime",level:2},{value:"Step 3: Create a new Flyde flow",id:"step-3-create-a-new-flyde-flow",level:3},{value:"Step 4: Build your flow",id:"step-4-build-your-flow",level:2},{value:"Step 5: Run your flow from code",id:"step-5-run-your-flow-from-code",level:2}],d={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"flyde-quick-start-guide"},"Flyde Quick Start Guide"),(0,l.kt)("p",null,"Welcome to Flyde! This quick start guide will help you get up and running with Flyde in no time."),(0,l.kt)("p",null,"Note: this guide is meant to cater to the impatient! Checking out the in-depth ",(0,l.kt)("a",{parentName:"p",href:"/docs/Tutorials/hello-world-with-flyde"},"hello world")," guide is highly recommended."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"VS Code with the ",(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=flyde.flyde-vscode"},"Flyde extension")," installed "),(0,l.kt)("li",{parentName:"ul"},"Node.js and npm (comes with Node)")),(0,l.kt)("h2",{id:"step-1-create-a-new-flyde-project"},"Step 1: Create a new Flyde project"),(0,l.kt)("p",null,"Open Visual Studio Code and create a new empty directory for your Flyde project."),(0,l.kt)("h2",{id:"step-2-install-the-flyde-runtime"},"Step 2: Install the Flyde runtime"),(0,l.kt)("p",null,"In the terminal, navigate to your project directory and run the following command:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"npm install @flyde/runtime")),(0,l.kt)("p",null,"This will install the Flyde runtime, which is needed to execute Flyde flows."),(0,l.kt)("h3",{id:"step-3-create-a-new-flyde-flow"},"Step 3: Create a new Flyde flow"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In Visual Studio, open the command palette (cmd+k or ctrl+k)"),(0,l.kt)("li",{parentName:"ol"},"type in ",(0,l.kt)("inlineCode",{parentName:"li"},"Flyde"),' and selected "Flyde: New Visual Flow"')),(0,l.kt)("h2",{id:"step-4-build-your-flow"},"Step 4: Build your flow"),(0,l.kt)("p",null,"Double click (or press ",(0,l.kt)("inlineCode",{parentName:"p"},"A"),") to open Flyde's command palette.\nAdd some parts and connect them together by selecting inputs and outputs"),(0,l.kt)("h2",{id:"step-5-run-your-flow-from-code"},"Step 5: Run your flow from code"),(0,l.kt)("p",null,"To run your Flyde flow from code, you can use the loadFlow function from the Flyde runtime. This function takes the name of your Flyde flow file as an argument and returns a function that can be used to execute the flow."),(0,l.kt)("p",null,"Here's an example of how to use loadFlow:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const { loadFlow } = require('@flyde/runtime');\nconst executeFlow = loadFlow('MyFlow.flyde');\n\nexecuteFlow()\n  .then(({ message }) => console.log(message))\n")),(0,l.kt)("p",null,"You can also pass input values to your flow by passing an object to the executeFlow function. The object keys should match the input pin names of your flow."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"executeFlow({ input1: 'Hello', input2: 'World' })\n  .then(({ output1, output2 }) => console.log(output1, output2))\n")),(0,l.kt)("p",null,"That's it! You're now ready to start building powerful applications with Flyde. Happy ~coding~ building!"))}f.isMDXComponent=!0}}]);