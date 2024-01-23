"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[673],{38570:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(70079);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,m=c["".concat(l,".").concat(u)]||c[u]||f[u]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:a,o[1]=d;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=n(10328),a=(n(70079),n(38570));const i={id:"CodeNode",title:"Interface: CodeNode",sidebar_label:"CodeNode",sidebar_position:0,custom_edit_url:null},o=void 0,d={unversionedId:"api-reference/interfaces/CodeNode",id:"api-reference/interfaces/CodeNode",title:"Interface: CodeNode",description:"Extended by VisualNode, CodeNode and InlineValueNode",source:"@site/docs/api-reference/interfaces/CodeNode.md",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/CodeNode",permalink:"/docs/api-reference/interfaces/CodeNode",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CodeNode",title:"Interface: CodeNode",sidebar_label:"CodeNode",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"BasePinData",permalink:"/docs/api-reference/interfaces/BasePinData"},next:{title:"DynamicOutput",permalink:"/docs/api-reference/interfaces/DynamicOutput"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"completionOutputs",id:"completionoutputs",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"defaultStyle",id:"defaultstyle",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"description",id:"description",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"displayName",id:"displayname",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"fn",id:"fn",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"id",id:"id",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"inputs",id:"inputs",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"namespace",id:"namespace",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"outputs",id:"outputs",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"reactiveInputs",id:"reactiveinputs",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"run",id:"run",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"searchKeywords",id:"searchkeywords",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-11",level:4}],s={toc:p},c="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Extended by ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/VisualNode"},"VisualNode"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/CodeNode"},"CodeNode")," and InlineValueNode"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseNode"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CodeNode"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"completionoutputs"},"completionOutputs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"completionOutputs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,'Instructs Flyde that the node is in "explicit completion" mode and describes which outputs trigger the node\'s completion. Receives a list of outputs that should trigger an explicit completion of the node when they emit a value. Any of the listed outputs will trigger a completion (i.e. completionOutput',"[0]"," ",(0,a.kt)("inlineCode",{parentName:"p"},"OR")," completionOutput","[1]",")\nLeave empty for implicit completion. This should work best for 99% of the case."),(0,a.kt)("p",null,"To declare that 2 different outputs must emit a value in order to trigger a completion, different outputs can be joined together with a ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," sign as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n...\n completionOutputs: ["data+headers", "error"] // this means either data AND headers, OR "error" will trigger an explicit completion.\n')),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/lifecycle"},"Nodes lifecycle")," for more info"),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#completionoutputs"},"completionOutputs")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/1eb0a07/core/src/node/node.ts#L144"},"core/src/node/node.ts:144")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"defaultstyle"},"defaultStyle"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"defaultStyle"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/NodeStyle"},(0,a.kt)("inlineCode",{parentName:"a"},"NodeStyle"))),(0,a.kt)("p",null,"All instances of this node will inherit the default style if it is supplied.\nSee ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/NodeStyle"},"NodeStyle")," for the full options supported"),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#defaultstyle"},"defaultStyle")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/1eb0a07/core/src/node/node.ts#L98"},"core/src/node/node.ts:98")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"description"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Is displayed in the visual editor and used to search for nodes."),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#description"},"description")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/1eb0a07/core/src/node/node.ts#L84"},"core/src/node/node.ts:84")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"displayname"},"displayName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"displayName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"A human readable name for the node. Used in the visual editor."),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#displayname"},"displayName")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/1eb0a07/core/src/node/node.ts#L80"},"core/src/node/node.ts:80")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fn"},"fn"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"fn"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/modules#runnodefunction"},(0,a.kt)("inlineCode",{parentName:"a"},"RunNodeFunction"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,a.kt)("p",null,"use ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/CodeNode"},"['run']")," instead"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/1eb0a07/core/src/node/node.ts#L161"},"core/src/node/node.ts:161")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Node's unique id. ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/VisualNode#instances"},"instances"),"  refer use this to refer to the correct node"),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#id"},"id")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/1eb0a07/core/src/node/node.ts#L75"},"core/src/node/node.ts:75")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inputs"},"inputs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"inputs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/InputPin"},(0,a.kt)("inlineCode",{parentName:"a"},"InputPin")),">"),(0,a.kt)("p",null,"A pin on a node that receives data. Each node can have zero or more input pins."),(0,a.kt)("p",null,"Example for the inputs of a mathematical multiplier node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n multiplicand: { description: "The number to be multiplied" },\n multiplier: { description: "The number with which we multiply" },\n}\n')),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#inputs"},"inputs")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/1eb0a07/core/src/node/node.ts#L116"},"core/src/node/node.ts:116")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"namespace"},"namespace"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"namespace"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"TBD"),(0,a.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#namespace"},"namespace")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/1eb0a07/core/src/node/node.ts#L92"},"core/src/node/node.ts:92")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"outputs"},"outputs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"outputs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/OutputPin"},(0,a.kt)("inlineCode",{parentName:"a"},"OutputPin")),">"),(0,a.kt)("p",null,'A pin on a node that sends data. Each node can have zero or more output pins.\nFor example, a "Split array" node might have one input pin for an array and two output pins for the first and second halves of the array:'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"{\n 'first half': { description: \"The first half of the array\" },\n 'second half': { description: \"The second half of the array\" },\n}\n")),(0,a.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#outputs"},"outputs")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/1eb0a07/core/src/node/node.ts#L129"},"core/src/node/node.ts:129")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"reactiveinputs"},"reactiveInputs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"reactiveInputs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TBD")),(0,a.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#reactiveinputs"},"reactiveInputs")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/1eb0a07/core/src/node/node.ts#L148"},"core/src/node/node.ts:148")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"run"},"run"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"run"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/modules#runnodefunction"},(0,a.kt)("inlineCode",{parentName:"a"},"RunNodeFunction"))),(0,a.kt)("p",null,"This function will run as soon as the node's inputs are satisfied.\nIt has access to the nodes inputs values, and output pins. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/modules#runnodefunction"},"RunNodeFunction")," for more information."),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/1eb0a07/core/src/node/node.ts#L157"},"core/src/node/node.ts:157")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"searchkeywords"},"searchKeywords"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"searchKeywords"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"A list of keywords that can be used to search for the node. Useful for node that users might search using different words."),(0,a.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#searchkeywords"},"searchKeywords")),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/flydelabs/flyde/blob/1eb0a07/core/src/node/node.ts#L88"},"core/src/node/node.ts:88")))}f.isMDXComponent=!0}}]);