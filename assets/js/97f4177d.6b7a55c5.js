"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1301],{35318:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var a=o(27378);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(o),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||n;return o?a.createElement(h,i(i({ref:t},u),{},{components:o})):a.createElement(h,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<n;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},50136:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=o(52685),r=o(1244),n=(o(27378),o(35318)),i=["components"],l={slug:"introducing-flyde",title:"Introducing Flyde",authors:["gabigrin"],tags:["flyde","intro"]},s=void 0,d={permalink:"/blog/introducing-flyde",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-11-12-introducing-flyde/index.md",source:"@site/blog/2022-11-12-introducing-flyde/index.md",title:"Introducing Flyde",description:"I'm thrilled to introduce the Alpha version of Flyde!",date:"2022-11-12T00:00:00.000Z",formattedDate:"November 12, 2022",tags:[{label:"flyde",permalink:"/blog/tags/flyde"},{label:"intro",permalink:"/blog/tags/intro"}],readingTime:5.075,hasTruncateMarker:!1,authors:[{name:"Gabriel Grinberg",title:"Creator of Flyde",url:"https://github.com/gabigrin",imageURL:"https://github.com/gabigrin.png",key:"gabigrin"}],frontMatter:{slug:"introducing-flyde",title:"Introducing Flyde",authors:["gabigrin"],tags:["flyde","intro"]}},u={authorsImageUrls:[void 0]},c=[{value:"Why Visual?",id:"why-visual",level:2},{value:"How Does It Work",id:"how-does-it-work",level:2},{value:"Fully Integrated With Your Code",id:"fully-integrated-with-your-code",level:2},{value:"Flow-Based Programming / Other tools",id:"flow-based-programming--other-tools",level:2},{value:"Scratch / Blockly",id:"scratch--blockly",level:3},{value:"Node-RED",id:"node-red",level:3},{value:"NoFlo",id:"noflo",level:3},{value:"Getting Started With Flyde",id:"getting-started-with-flyde",level:2}],p={toc:c};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"I'm thrilled to introduce the Alpha version of Flyde!",(0,n.kt)("br",{parentName:"p"}),"\n","Flyde is a visual programming tool that helps developers build better software, faster. While it was built with backend projects in mind, it can used to build anything! From automation scripts, to backends, front-ends and even CLI tools!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"./hello-world-result.gif",src:o(50007).Z,width:"1816",height:"1520"})),(0,n.kt)("h2",{id:"why-visual"},"Why Visual?"),(0,n.kt)("p",null,"Textual coding is great, and Flyde doesn't aim to replace that. On the contrary, Flyde is made to be fully integrable with existing code-bases, elevating only high-level flows into the visual space."),(0,n.kt)("p",null,'However, I believe that a lot of modern backend code is what we call "glue-code". Code integrating several APIs together, usually involving high concurrency. Such flows are easily conveyed in a white-board/design documents, taking advantage of our spatial abilities to the fullest.'),(0,n.kt)("p",null,"By using a visual tool to build higher level flows of applications, many benefits are unlocked:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"collaboration with non-dev team members (such as product owners, qa, support and more) becomes much easier. Turn your code-base into a own the Looking at a Flyde flow is much more intuitive than reading code. It's like Zapier and your Codebase had an awesome baby!"),(0,n.kt)("li",{parentName:"ul"},"flows act as an always-correct flow chart, acting as living documentation for new team members"),(0,n.kt)("li",{parentName:"ul"},"visual programming opens new ways of reasoning about code. For example, Flyde parts light up as data passes through them, creating a new type of feedback-loop while programming"),(0,n.kt)("li",{parentName:"ul"},'Monitoring and observability data can reside on top of the "code" itself, making troubleshooting much faster.')),(0,n.kt)("h2",{id:"how-does-it-work"},"How Does It Work"),(0,n.kt)("p",null,"Flyde's visual flow editor allows software to be built by connecting parts together via a nodes-and-wires editor.",(0,n.kt)("br",{parentName:"p"}),"\n","It comes with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("em",{parentName:"li"},"visual editor")," (VSCode extension and stand-alone)"),(0,n.kt)("li",{parentName:"ul"},"a runtime library and"),(0,n.kt)("li",{parentName:"ul"},"a robust standard library of ready-made components. Install or publish more Flyde components easily via the known and loved NPM ecosystem")),(0,n.kt)("p",null,"Using the visual editor, you can build flows that use standard library parts alongside your own parts (more on that below). After flows are created, execute them back from your own code using Flyde's runtime library."),(0,n.kt)("h2",{id:"fully-integrated-with-your-code"},"Fully Integrated With Your Code"),(0,n.kt)("p",null,"Flyde aims to ",(0,n.kt)("strong",{parentName:"p"},"augment current workflows"),", not replace them. Many other visual tools usually live outside of your existing codebase, excluding them from key aspects of modern software engineering such as version control and build/test pipelines (CI/CD).",(0,n.kt)("br",{parentName:"p"}),"\n","Flyde takes a difference approach, and fully ingrates with existing code-bases and their flows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Flow files are committed to ",(0,n.kt)("strong",{parentName:"li"},"your version control")," system of choice like any other file. This means anything from revisions to branches and pull-requests work seamlessly with Flyde"),(0,n.kt)("li",{parentName:"ul"},"Flyde flows are executed from your existing codebase, making use of your ",(0,n.kt)("strong",{parentName:"li"},"existing production environment"),". No other platforms to manage or security risks to worry about"),(0,n.kt)("li",{parentName:"ul"},"Flyde flows can be tested using your ",(0,n.kt)("strong",{parentName:"li"},"existing testing frameworks")," and technologies, just like any part of your code. Nothing stops you from even writing test cases in Flyde that test your conventional code as well!")),(0,n.kt)("p",null,"The integration to existing code is done in two ways:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Flyde parts can be either visual parts, or code based parts. Code based parts support being imported from a local file in your project, meaning you can abstract any functionality in your code-base into a Flyde part and use it in a visual flow."),(0,n.kt)("li",{parentName:"ol"},"Flyde flows run from your code. For example, if you build ",(0,n.kt)("inlineCode",{parentName:"li"},"my-cool-flow1.flyde"),", you will need to call ",(0,n.kt)("inlineCode",{parentName:"li"},"execute('my-cool-flow')")," from your code again, and choose what will you do with the response. Classic use-cases are handling HTTP requests, building bots, and many more!")),(0,n.kt)("h2",{id:"flow-based-programming--other-tools"},"Flow-Based Programming / Other tools"),(0,n.kt)("h3",{id:"scratch--blockly"},"Scratch / Blockly"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://scratch.mit.edu/"},"Scratch")," and ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/blockly"},"Blockly")," are both considered as mostly educational environments. They both belong to a more procedural and imperative style of programming.\nFlyde takes a functional-reactive approach, embracing the style of modern applications. And while Flyde can be a great education tool, it is built with the full intent of becoming a production tool used by professional software teams."),(0,n.kt)("h3",{id:"node-red"},"Node-RED"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://noflojs.org/"},"Node-RED")," is a great tool. It helped exposed many engineers to the benefits of visual programming tools.",(0,n.kt)("br",{parentName:"p"}),"\n","It has shown itself a great tool for building standalone home automation, and other IoT projects, but never became a tool developers use for more traditional and professional projects. Flyde is built to co-exist with current code-bases, making it easier to cater to a wider audience of developers and projects."),(0,n.kt)("h3",{id:"noflo"},"NoFlo"),(0,n.kt)("p",null,"NoFlo is perhaps the most similar project to Flyde available. It started 10 years ago and I think it's main reason for not becoming popular was that it was ahead of it's time. One main difference is the fact that NoFlo is decoupled from its visual editor - ",(0,n.kt)("a",{parentName:"p",href:"https://flowhub.io/"},"FlowHub")," which came years later via a highly covered ",(0,n.kt)("a",{parentName:"p",href:"https://www.kickstarter.com/projects/noflo/noflo-development-environment/posts/998057"},"Kickstarter campaign"),". I believe the decision to split the UI from the actual runtime comes from 2 reasons:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"NoFlo is heavily inspired from ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=up2yhNTsaDs"},"J. Paul Morrison's flow-based programming"),", which sees the value of looking at software as if it were nodes connected by wires even without a visual editor. While Flyde takes inspiration from the original FBP movement, it takes a more pragmatic and simple stance. The topic of Flow-Based Programming and Flyde deserves a blog post on its own, stay tuned :)"),(0,n.kt)("li",{parentName:"ol"},"Building rich browser applications a decade ago was much harder then today. The lack of libraries available, problematic browser support and immature ecosystem made it hard to build a browser based editor that users will love.")),(0,n.kt)("h2",{id:"getting-started-with-flyde"},"Getting Started With Flyde"),(0,n.kt)("p",null,"to get a feeling of how Flyde works, the best place to start is to visit the ",(0,n.kt)("a",{parentName:"p",href:"/playground"},"Flyde Playground"),"!",(0,n.kt)("br",{parentName:"p"}),"\n","It has some simple examples that showcases the visual editor, and how building a Flyde flow looks like."),(0,n.kt)("p",null,"The next step is to the checkout the tutorials section of this site to learn how to integrate Flyde into real world projects"),(0,n.kt)("p",null,"If you've read so far I'd really appreciate showing support by ",(0,n.kt)("a",{parentName:"p",href:"https://www.github.com/flydehq/flyde"},"staring the project")," and sending any feedback or comment via a github issue or via ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/invite/x7t4tjZQP8"},"Flyde's Discord channel")),(0,n.kt)("p",null,"Thanks and stay tuned for more blog posts!"),(0,n.kt)("p",null,"Yours, Gabriel"))}m.isMDXComponent=!0},50007:function(e,t,o){t.Z=o.p+"assets/images/hello-world-final-result-e85a36b7c5314775465fbf724063b1ca.gif"}}]);