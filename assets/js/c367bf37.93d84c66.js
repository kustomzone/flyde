"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2422],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),f=i,g=s["".concat(o,".").concat(f)]||s[f]||d[f]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:i,l[1]=u;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=n(24330),i=(n(49231),n(54852));const a={id:"DebuggerEventType",title:"Enumeration: DebuggerEventType",sidebar_label:"DebuggerEventType",sidebar_position:0,custom_edit_url:null},l=void 0,u={unversionedId:"api-reference/enums/DebuggerEventType",id:"api-reference/enums/DebuggerEventType",title:"Enumeration: DebuggerEventType",description:"Enumeration Members",source:"@site/docs/api-reference/enums/DebuggerEventType.md",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/DebuggerEventType",permalink:"/docs/api-reference/enums/DebuggerEventType",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"DebuggerEventType",title:"Enumeration: DebuggerEventType",sidebar_label:"DebuggerEventType",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"DataShapeType",permalink:"/docs/api-reference/enums/DataShapeType"},next:{title:"InlineValueNodeType",permalink:"/docs/api-reference/enums/InlineValueNodeType"}},o={},p=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"ERROR",id:"error",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"INPUTS_STATE_CHANGE",id:"inputs_state_change",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"INPUT_CHANGE",id:"input_change",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"OUTPUT_CHANGE",id:"output_change",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"PROCESSING_CHANGE",id:"processing_change",level:3},{value:"Defined in",id:"defined-in-4",level:4}],c={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("h3",{id:"error"},"ERROR"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ERROR")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"err"')),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/execute/debugger/events.ts#L7"},"core/src/execute/debugger/events.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inputs_state_change"},"INPUTS","_","STATE","_","CHANGE"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"INPUTS","_","STATE","_","CHANGE")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"isc"')),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/execute/debugger/events.ts#L8"},"core/src/execute/debugger/events.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"input_change"},"INPUT","_","CHANGE"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"INPUT","_","CHANGE")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"i"')),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/execute/debugger/events.ts#L4"},"core/src/execute/debugger/events.ts:4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"output_change"},"OUTPUT","_","CHANGE"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"OUTPUT","_","CHANGE")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"o"')),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/execute/debugger/events.ts#L5"},"core/src/execute/debugger/events.ts:5")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"processing_change"},"PROCESSING","_","CHANGE"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"PROCESSING","_","CHANGE")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"pc"')),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/041ee82/core/src/execute/debugger/events.ts#L6"},"core/src/execute/debugger/events.ts:6")))}d.isMDXComponent=!0}}]);