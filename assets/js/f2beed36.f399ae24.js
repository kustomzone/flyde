"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[512],{38570:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(70079);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=a,m=c["".concat(d,".").concat(f)]||c[f]||u[f]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},28584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(10328),a=(n(70079),n(38570));const r={id:"VisualNode",title:"Interface: VisualNode",sidebar_label:"VisualNode",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"api-reference/interfaces/VisualNode",id:"api-reference/interfaces/VisualNode",title:"Interface: VisualNode",description:"A visual node is what makes Flyde special. It represents a node created visually in the editor.",source:"@site/docs/api-reference/interfaces/VisualNode.md",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/VisualNode",permalink:"/docs/api-reference/interfaces/VisualNode",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"VisualNode",title:"Interface: VisualNode",sidebar_label:"VisualNode",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"RefNodeInstance",permalink:"/docs/api-reference/interfaces/RefNodeInstance"}},d={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"completionOutputs",id:"completionoutputs",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"connections",id:"connections",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"customView",id:"customview",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"customViewCode",id:"customviewcode",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"defaultStyle",id:"defaultstyle",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"description",id:"description",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"id",id:"id",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"inputs",id:"inputs",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"inputsPosition",id:"inputsposition",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"instances",id:"instances",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"namespace",id:"namespace",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"outputs",id:"outputs",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"outputsPosition",id:"outputsposition",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"reactiveInputs",id:"reactiveinputs",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"searchKeywords",id:"searchkeywords",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-14",level:4}],p={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'A visual node is what makes Flyde special. It represents a node created visually in the editor.\nIt consists of node instances and connections. Each node instance will either refer to an imported node (by id), or include the node "inline".\nEach connection will represent a "wire" between 2 instances, or between an instance and a main input/output pin.\nConnecting to a main input or output is the way that a visual nodes\' internal implementation can communicate with its external API.'),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseNode"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"VisualNode"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"completionoutputs"},"completionOutputs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"completionOutputs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,'Instructs Flyde that the node is in "explicit completion" mode and describes which outputs trigger the node\'s completion. Receives a list of outputs that should trigger an explicit completion of the node when they emit a value. Any of the listed outputs will trigger a completion (i.e. completionOutput',"[0]"," ",(0,a.kt)("inlineCode",{parentName:"p"},"OR")," completionOutput","[1]",")\nLeave empty for implicit completion. This should work best for 99% of the case."),(0,a.kt)("p",null,"To declare that 2 different outputs must emit a value in order to trigger a completion, different outputs can be joined together with a ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," sign as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n...\n completionOutputs: ["data+headers", "error"] // this means either data AND headers, OR "error" will trigger an explicit completion.\n')),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/lifecycle"},"Nodes lifecycle")," for more info"),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#completionoutputs"},"completionOutputs")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/e8cc49d/core/src/node/node.ts#L131"},"core/src/node/node.ts:131")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"connections"},"connections"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"connections"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/modules#connectiondata"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionData")),"[]"),(0,a.kt)("p",null,'each connection represents a "wire" between 2 different instances, or between an instance and a main input/output'),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/e8cc49d/core/src/node/node.ts#L209"},"core/src/node/node.ts:209")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"customview"},"customView"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"customView"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/modules#customnodeviewfn"},(0,a.kt)("inlineCode",{parentName:"a"},"CustomNodeViewFn"))),(0,a.kt)("p",null,"TODO - either deprecate this or ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#customviewcode"},"customViewCode")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/e8cc49d/core/src/node/node.ts#L211"},"core/src/node/node.ts:211")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"customviewcode"},"customViewCode"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"customViewCode"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Supply a custom string template (in ",(0,a.kt)("a",{parentName:"p",href:"https://https://handlebarsjs.com/"},"Handlebars")," format) to control how an instance of this node will be rendered in the visual editor.\nThe template has access to static values, making it possible to expose valuable information in the instance itself:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("p",null,'A "Delay" node has 2 inputs: value and a time. In many cases, the ',(0,a.kt)("inlineCode",{parentName:"p"},"time"),' input will be provided statically.\nIt can be convenient to show the time input in the instance itself so it shows "Delay 500ms" instead of "Delay" (in the case 500 is the static value of ',(0,a.kt)("inlineCode",{parentName:"p"},"time"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  ...,\n  customViewCode: `{{#if inputs.time}}\nDelay {{inputs.time}} ms\n{{else}}\nDelay\n{{/if}}`\n}\n")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#customviewcode"},"customViewCode")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/e8cc49d/core/src/node/node.ts#L155"},"core/src/node/node.ts:155")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"defaultstyle"},"defaultStyle"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"defaultStyle"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/NodeStyle"},(0,a.kt)("inlineCode",{parentName:"a"},"NodeStyle"))),(0,a.kt)("p",null,"All instances of this node will inherit the default style if it is supplied.\nSee ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/NodeStyle"},"NodeStyle")," for the full options supported"),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#defaultstyle"},"defaultStyle")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/e8cc49d/core/src/node/node.ts#L160"},"core/src/node/node.ts:160")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"description"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Is displayed in the visual editor and used to search for nodes."),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#description"},"description")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/e8cc49d/core/src/node/node.ts#L84"},"core/src/node/node.ts:84")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Node's unique id. ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/VisualNode#instances"},"instances"),"  refer use this to refer to the correct node"),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#id"},"id")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/e8cc49d/core/src/node/node.ts#L80"},"core/src/node/node.ts:80")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inputs"},"inputs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"inputs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/InputPin"},(0,a.kt)("inlineCode",{parentName:"a"},"InputPin")),">"),(0,a.kt)("p",null,"A pin on a node that receives data. Each node can have zero or more input pins."),(0,a.kt)("p",null,"Example for the inputs of a mathematical multiplier node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n multiplicand: { description: "The number to be multiplied" },\n multiplier: { description: "The number with which we multiply" },\n}\n')),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#inputs"},"inputs")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/e8cc49d/core/src/node/node.ts#L100"},"core/src/node/node.ts:100")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inputsposition"},"inputsPosition"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"inputsPosition"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/OMap"},(0,a.kt)("inlineCode",{parentName:"a"},"OMap")),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/modules#pos"},(0,a.kt)("inlineCode",{parentName:"a"},"Pos")),">"),(0,a.kt)("p",null,"a map holding the position for each main input. Used in the editor only."),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/e8cc49d/core/src/node/node.ts#L203"},"core/src/node/node.ts:203")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"instances"},"instances"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"instances"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/modules#nodeinstance-1"},(0,a.kt)("inlineCode",{parentName:"a"},"NodeInstance")),"[]"),(0,a.kt)("p",null,"the visual nodes internal node instances, either referring to other nodes by id or by value (inline)"),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/e8cc49d/core/src/node/node.ts#L207"},"core/src/node/node.ts:207")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"namespace"},"namespace"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"namespace"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"TBD"),(0,a.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#namespace"},"namespace")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/e8cc49d/core/src/node/node.ts#L117"},"core/src/node/node.ts:117")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"outputs"},"outputs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"outputs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/OutputPin"},(0,a.kt)("inlineCode",{parentName:"a"},"OutputPin")),">"),(0,a.kt)("p",null,'A pin on a node that sends data. Each node can have zero or more output pins.\nFor example, a "Split array" node might have one input pin for an array and two output pins for the first and second halves of the array:'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"{\n 'first half': { description: \"The first half of the array\" },\n 'second half': { description: \"The second half of the array\" },\n}\n")),(0,a.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#outputs"},"outputs")),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/e8cc49d/core/src/node/node.ts#L113"},"core/src/node/node.ts:113")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"outputsposition"},"outputsPosition"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"outputsPosition"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/OMap"},(0,a.kt)("inlineCode",{parentName:"a"},"OMap")),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/modules#pos"},(0,a.kt)("inlineCode",{parentName:"a"},"Pos")),">"),(0,a.kt)("p",null,"a map holding the position for each main output. Used in the editor only."),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/e8cc49d/core/src/node/node.ts#L205"},"core/src/node/node.ts:205")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"reactiveinputs"},"reactiveInputs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"reactiveInputs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TBD")),(0,a.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#reactiveinputs"},"reactiveInputs")),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/e8cc49d/core/src/node/node.ts#L135"},"core/src/node/node.ts:135")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"searchkeywords"},"searchKeywords"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"searchKeywords"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"A list of keywords that can be used to search for the node. Useful for node that users might search using different words."),(0,a.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#searchkeywords"},"searchKeywords")),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/e8cc49d/core/src/node/node.ts#L88"},"core/src/node/node.ts:88")))}u.isMDXComponent=!0}}]);