"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[673],{54852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(n),f=i,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:i,o[1]=d;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},78528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(24330),i=(n(49231),n(54852));const a={id:"CodeNode",title:"Interface: CodeNode",sidebar_label:"CodeNode",sidebar_position:0,custom_edit_url:null},o=void 0,d={unversionedId:"api-reference/interfaces/CodeNode",id:"api-reference/interfaces/CodeNode",title:"Interface: CodeNode",description:"Extended by VisualNode, CodeNode and InlineValueNode",source:"@site/docs/api-reference/interfaces/CodeNode.md",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/CodeNode",permalink:"/docs/api-reference/interfaces/CodeNode",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CodeNode",title:"Interface: CodeNode",sidebar_label:"CodeNode",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"BasePinData",permalink:"/docs/api-reference/interfaces/BasePinData"},next:{title:"DynamicOutput",permalink:"/docs/api-reference/interfaces/DynamicOutput"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"completionOutputs",id:"completionoutputs",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"customView",id:"customview",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"customViewCode",id:"customviewcode",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"defaultStyle",id:"defaultstyle",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"description",id:"description",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"fn",id:"fn",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"id",id:"id",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"inputs",id:"inputs",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"namespace",id:"namespace",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"outputs",id:"outputs",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"reactiveInputs",id:"reactiveinputs",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"run",id:"run",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"searchKeywords",id:"searchkeywords",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-12",level:4}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Extended by ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/VisualNode"},"VisualNode"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/CodeNode"},"CodeNode")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/InlineValueNode"},"InlineValueNode")),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseNode"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"CodeNode"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"completionoutputs"},"completionOutputs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"completionOutputs"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,'Instructs Flyde that the node is in "explicit completion" mode and describes which outputs trigger the node\'s completion. Receives a list of outputs that should trigger an explicit completion of the node when they emit a value. Any of the listed outputs will trigger a completion (i.e. completionOutput',"[0]"," ",(0,i.kt)("inlineCode",{parentName:"p"},"OR")," completionOutput","[1]",")\nLeave empty for implicit completion. This should work best for 99% of the case."),(0,i.kt)("p",null,"To declare that 2 different outputs must emit a value in order to trigger a completion, different outputs can be joined together with a ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," sign as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'{\n...\n completionOutputs: ["data+headers", "error"] // this means either data AND headers, OR "error" will trigger an explicit completion.\n')),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/lifecycle"},"Nodes lifecycle")," for more info"),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#completionoutputs"},"completionOutputs")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/node/node.ts#L131"},"core/src/node/node.ts:131")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"customview"},"customView"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"customView"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/modules#customnodeviewfn"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomNodeViewFn"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/node/node.ts#L174"},"core/src/node/node.ts:174")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"customviewcode"},"customViewCode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"customViewCode"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Supply a custom string template (in ",(0,i.kt)("a",{parentName:"p",href:"https://https://handlebarsjs.com/"},"Handlebars")," format) to control how an instance of this node will be rendered in the visual editor.\nThe template has access to static values, making it possible to expose valuable information in the instance itself:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("p",null,'A "Delay" node has 2 inputs: value and a time. In many cases, the ',(0,i.kt)("inlineCode",{parentName:"p"},"time"),' input will be provided statically.\nIt can be convenient to show the time input in the instance itself so it shows "Delay 500ms" instead of "Delay" (in the case 500 is the static value of ',(0,i.kt)("inlineCode",{parentName:"p"},"time"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n  ...,\n  customViewCode: `{{#if inputs.time}}\nDelay {{inputs.time}} ms\n{{else}}\nDelay\n{{/if}}`\n}\n")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#customviewcode"},"customViewCode")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/node/node.ts#L155"},"core/src/node/node.ts:155")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"defaultstyle"},"defaultStyle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"defaultStyle"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/NodeStyle"},(0,i.kt)("inlineCode",{parentName:"a"},"NodeStyle"))),(0,i.kt)("p",null,"All instances of this node will inherit the default style if it is supplied.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/NodeStyle"},"NodeStyle")," for the full options supported"),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#defaultstyle"},"defaultStyle")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/node/node.ts#L160"},"core/src/node/node.ts:160")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"description"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Is displayed in the visual editor and used to search for nodes."),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#description"},"description")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/node/node.ts#L84"},"core/src/node/node.ts:84")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fn"},"fn"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"fn"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/modules#runnodefunction"},(0,i.kt)("inlineCode",{parentName:"a"},"RunNodeFunction"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,i.kt)("p",null,"use ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/CodeNode"},"['run']")," instead"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/node/node.ts#L173"},"core/src/node/node.ts:173")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Node's unique id. ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/VisualNode#instances"},"instances"),"  refer use this to refer to the correct node"),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#id"},"id")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/node/node.ts#L80"},"core/src/node/node.ts:80")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inputs"},"inputs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"inputs"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/InputPin"},(0,i.kt)("inlineCode",{parentName:"a"},"InputPin")),">"),(0,i.kt)("p",null,"A pin on a node that receives data. Each node can have zero or more input pins."),(0,i.kt)("p",null,"Example for the inputs of a mathematical multiplier node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'{\n multiplicand: { description: "The number to be multiplied" },\n multiplier: { description: "The number with which we multiply" },\n}\n')),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#inputs"},"inputs")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/node/node.ts#L100"},"core/src/node/node.ts:100")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"namespace"},"namespace"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"namespace"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"TBD"),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#namespace"},"namespace")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/node/node.ts#L117"},"core/src/node/node.ts:117")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"outputs"},"outputs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"outputs"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/OutputPin"},(0,i.kt)("inlineCode",{parentName:"a"},"OutputPin")),">"),(0,i.kt)("p",null,'A pin on a node that sends data. Each node can have zero or more output pins.\nFor example, a "Split array" node might have one input pin for an array and two output pins for the first and second halves of the array:'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"{\n 'first half': { description: \"The first half of the array\" },\n 'second half': { description: \"The second half of the array\" },\n}\n")),(0,i.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#outputs"},"outputs")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/node/node.ts#L113"},"core/src/node/node.ts:113")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reactiveinputs"},"reactiveInputs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"reactiveInputs"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TBD")),(0,i.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#reactiveinputs"},"reactiveInputs")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/node/node.ts#L135"},"core/src/node/node.ts:135")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"run"},"run"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"run"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/modules#runnodefunction"},(0,i.kt)("inlineCode",{parentName:"a"},"RunNodeFunction"))),(0,i.kt)("p",null,"This function will run as soon as the node's inputs are satisfied.\nIt has access to the nodes inputs values, and output pins. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/modules#runnodefunction"},"RunNodeFunction")," for more information."),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/node/node.ts#L169"},"core/src/node/node.ts:169")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"searchkeywords"},"searchKeywords"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"searchKeywords"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"A list of keywords that can be used to search for the node. Useful for node that users might search using different words."),(0,i.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode"},"BaseNode"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BaseNode#searchkeywords"},"searchKeywords")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/node/node.ts#L88"},"core/src/node/node.ts:88")))}u.isMDXComponent=!0}}]);