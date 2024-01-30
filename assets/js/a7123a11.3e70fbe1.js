"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[298],{38570:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(70079);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=n(10328),a=(n(70079),n(38570));const i=n.p+"assets/images/custom-nodes__visual-4d7d3378a9f2ef63cb119025218b7153.png",r=n.p+"assets/images/custom-nodes__using-visual-208a1e3e324d1a0630630bc12078706e.gif",s={sidebar_position:5},l="Creating Custom Nodes",d={unversionedId:"custom-nodes",id:"custom-nodes",title:"Creating Custom Nodes",description:"Custom nodes allow you to extend Flyde's building blocks with your own logic.",source:"@site/docs/5-custom-nodes.mdx",sourceDirName:".",slug:"/custom-nodes",permalink:"/docs/custom-nodes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5-custom-nodes.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Integrating with Existing Code",permalink:"/docs/integrate-flows"},next:{title:"Testing & Deploying",permalink:"/docs/testing-deploying"}},u={},c=[{value:"Custom Code Nodes",id:"custom-code-nodes",level:2},{value:"Custom Visual Nodes",id:"custom-visual-nodes",level:2},{value:"Macro Nodes",id:"macro-nodes",level:2}],p={toc:c},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-custom-nodes"},"Creating Custom Nodes"),(0,a.kt)("p",null,"Custom nodes allow you to extend Flyde's building blocks with your own logic.",(0,a.kt)("br",{parentName:"p"}),"\n","Use-cases can vary from control flow utilities, and up to business logic wrappers that expose your existing code-base in a modular, and visual way."),(0,a.kt)("p",null,"Custom nodes can be built in 3 ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Code nodes - the simplest building block of Flyde. It declares its inputs and outputs, and runs some logic when it is executed."),(0,a.kt)("li",{parentName:"ul"},"Visual nodes - a group of nodes that are grouped together visually, and can be reused as a single node."),(0,a.kt)("li",{parentName:"ul"},'Macro nodes - macro nodes are like code nodes but with "edit-time" configuration. The runtime logic and visual representation of a macro node can be different depending on the configuration. The UI for editing the configuration of a macro node is also customizable. Some of the standard library nodes are implemented as macro nodes. For example, the "Conditional" node is a Macro Node that loads a custom UI, which is defined and loaded externally from Flyde\'s core.')),(0,a.kt)("h2",{id:"custom-code-nodes"},"Custom Code Nodes"),(0,a.kt)("p",null,"A Flyde custom code node can be created by exporting an object that implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"CodeNode")," interface from a TypeScript/JavaScript file ending with ",(0,a.kt)("inlineCode",{parentName:"p"},".flyde.ts")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".flyde.js"),". This convention helps the visual editor suggest your custom node when exploring the nodes library."),(0,a.kt)("p",null,"A custom code node consists of 2 parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"its metadata, which is used to describe the node in the visual editor. This includes the node's name, description, inputs, outputs, and icon."),(0,a.kt)("li",{parentName:"ul"},"its logic, which is the code that runs when the node is executed.")),(0,a.kt)("p",null,"The following example shows how to create a custom code node that adds two numbers together:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { CodeNode } from "@flyde/core";\n\nexport const Add: CodeNode = {\n  id: "Add",\n  description: "Emits the sum of two numbers",\n  inputs: {\n    n1: { description: "First number to add" },\n    n2: { description: "Second number to add" },\n  },\n  outputs: { sum: { description: "The sum of n1 and n2" } },\n  run: ({ n1, n2 }, { sum }) => sum.next(n1 + n2),\n};\n')),(0,a.kt)("p",null,"The first argument of the ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," function is an object containing the values of the inputs of the node when it is being executed. The second argument is an object containing the outputs of the node, as ",(0,a.kt)("a",{parentName:"p",href:"https://rxjs.dev/"},"RxJS")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Subject"),"s. The ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," function can emit values to the outputs of the node by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," on the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"Subject"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Flyde use of RxJS is ",(0,a.kt)("em",{parentName:"p"},"very")," simplistic and should be treated as a mere implementation detail. You don't need to know RxJS to create custom nodes. Neither should you rely on a full RxJS API being available in your custom nodes.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," function also accepts a third argument, which is an object containing advanced utilities to help author more complex custom nodes. One of these utilities is the ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," object, which gives the node access to state that will be available to it while the flow is running. The ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," object is ",(0,a.kt)("inlineCode",{parentName:"p"},"Map<string, any>"),"."),(0,a.kt)("p",null,"For example, the following custom node will emit the average of all the numbers it received since the flow started:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { CodeNode } from "@flyde/core";\n\nexport const Average: CodeNode = {\n  id: "Average",\n  description: "Emits the average of all the numbers it received",\n  inputs: { n: { description: "Number to add to the average" } },\n  outputs: { average: { description: "The average of all the numbers" } },\n  run: ({ n }, { average }, { state }) => {\n    const numbers = state.get("numbers") ?? [];\n    numbers.push(n);\n    state.set("numbers", numbers);\n    average.next(numbers.reduce((a, b) => a + b, 0) / numbers.length);\n  },\n};\n')),(0,a.kt)("p",null,"For more examples, please see how the standard library implemented. You can view it here on GitHub: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/tree/main/stdlib"},"flyde/stdlib"),"."),(0,a.kt)("h2",{id:"custom-visual-nodes"},"Custom Visual Nodes"),(0,a.kt)("p",null,"In Flyde, every Flow is also a visual node, this means you can import and use other flows as nodes in your flow."),(0,a.kt)("p",null,"For example, if you create a flow with 1 input and 1 output, which adds 1 to the input, as following:"),(0,a.kt)("img",{src:i,width:"400"}),(0,a.kt)("p",null,'It will appear on the "Current project" section of the "nodes library -> view all" modal:'),(0,a.kt)("img",{src:r}),(0,a.kt)("h2",{id:"macro-nodes"},"Macro Nodes"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Macro node docs are still in progress. Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/tree/main/stdlib"},"flyde/stdlib")," for examples.")),(0,a.kt)("p",null,"Each macro node is expected to expose an already bundled React component that can render and edit the node's configuration.\nEach component is expected to be bundled separately, and export a window variable named ",(0,a.kt)("inlineCode",{parentName:"p"},"__MacroNode__ID"),", which is the ID of the macro node.  "),(0,a.kt)("p",null,"Until this is properly documented, and potentially abstracted, you may follow the stdlib's bundle config to see how it is done there - ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/main/stdlib/package.json#L52"},"https://github.com/flydelabs/flyde/blob/main/stdlib/package.json#L52"),"."))}h.isMDXComponent=!0}}]);