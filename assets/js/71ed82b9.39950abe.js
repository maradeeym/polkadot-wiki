"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8648],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(o),h=n,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return o?a.createElement(m,i(i({ref:t},d),{},{components:o})):a.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},4401:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),i=["components"],l={id:"start-building",title:"Build on Polkadot",sidebar_label:"Build on Polkadot",description:"Start Building with the Polkadot SDK.",slug:"../start-building"},s=void 0,p={unversionedId:"general/start-building",id:"general/start-building",title:"Build on Polkadot",description:"Start Building with the Polkadot SDK.",source:"@site/../docs/general/start-building.md",sourceDirName:"general",slug:"/start-building",permalink:"/docs/start-building",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/start-building.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1715065584,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"start-building",title:"Build on Polkadot",sidebar_label:"Build on Polkadot",description:"Start Building with the Polkadot SDK.",slug:"../start-building"},sidebar:"docs",previous:{title:"Transaction Verification",permalink:"/docs/transaction-attacks"},next:{title:"Research Pages",permalink:"/docs/research"}},d={},c=[{value:"Polkadot SDK",id:"polkadot-sdk",level:2},{value:"Requests for Comment (RFCs)",id:"requests-for-comment-rfcs",level:2}],u={toc:c},h="wrapper";function m(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)(h,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"polkadot-sdk"},"Polkadot SDK"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk"},"Polkadot SDK")," repository provides all the resources\nneeded to start building on the Polkadot network, a multi-chain blockchain platform that enables\ndifferent blockchains to interoperate and share information in a secure and scalable way. The\nPolkadot SDK comprises three main pieces of software:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot"},"Polkadot Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate"},"Substrate Blockchain SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot-sdk/tree/master/cumulus"},"Cumulus Tool Suite for Parachains"))),(0,r.kt)("p",null,"The programming language used for development is ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For more information about building on Polkadot, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-guide"},"the Builder's Guide"),".")),(0,r.kt)("h2",{id:"requests-for-comment-rfcs"},"Requests for Comment (RFCs)"),(0,r.kt)("p",null,"With the release of ",(0,r.kt)("a",{parentName:"p",href:"/docs/polkadot-v1"},"Polkadot runtime 1.0"),", Polkadot's codebase is in the hands of\nthe community. Anyone can open a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/RFCs"},"Request for Comment (RFC)")," to propose and discuss changes\nto the network protocol, runtime logic, public interfaces, and other technical matters."),(0,r.kt)("p",null,"To submit an RFC, follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/RFCs#process"},"here"),"."),(0,r.kt)("p",null,"RFCs can only be approved and merged by III-Dan members of\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-technical-fellowship"},"Polkadot Technical Fellowship")," via on-chain voting\nmechanism. Definitive approval or rejection is done by issuing the ",(0,r.kt)("inlineCode",{parentName:"p"},"RFC_APPROVE(xxxx, h)")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"RFC_REJECT(xxxx, h)")," on-chain remark from the Fellowship origin on the Polkadot Collectives\nparachain, where ",(0,r.kt)("inlineCode",{parentName:"p"},"xxxx")," is the RFC number and ",(0,r.kt)("inlineCode",{parentName:"p"},"h")," is the hash of the raw proposal text."),(0,r.kt)("p",null,"For example, the first RFC ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/RFCs/pull/1"},"RFC-1")," about Agile\nCoretime was proposed by Gavin Wood on the 30th of June 2023 and merged on the 12th of August 2023.\nSubsequently, the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate/pull/14568"},"code for the Agile Coretime Broker pallet"),"\nwas added to the Substrate FRAME system."),(0,r.kt)("p",null,"In general, the workflow from RFC write-up submission to its implementation follows the timeline\nbelow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RFC submitted by following the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/polkadot-fellows/RFCs#process"},"instructions"),"."),(0,r.kt)("li",{parentName:"ul"},"RFC review by the Technical Fellowship ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/polkadot-fellows/RFCs"},"via GitHub")),(0,r.kt)("li",{parentName:"ul"},"Polkadot Technical Fellowship Referendum of the RFC submitted to the Track ",(0,r.kt)("inlineCode",{parentName:"li"},"3 / Fellows")," by\nmembers with a rank greater than or equal to 3."),(0,r.kt)("li",{parentName:"ul"},"If the Referendum is approved through on-chain vote by the Technical Fellowship, changes discussed\nin the RFC will be implemented."),(0,r.kt)("li",{parentName:"ul"},"If the changes requested through the RFC require a broader consensus of DOT holders, an OpenGov\nreferendum may be created. For instance,\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/polkadot-fellows/RFCs/blob/main/text/0012-process-for-adding-new-collectives.md"},"adding a new system collective"),"\nor making changes to network parameters like inflation rate, treasury inflow etc.")),(0,r.kt)("admonition",{title:"Polkadot Runtime Code Changes through Root track",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Although the Technical Fellowship maintains the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/runtimes"},"runtimes of Polkadot and Kusama"),", changes to the\nnetwork protocol are not gated by the fellowship. Any DOT holder can submit a referendum on\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-origins#root"},"the Polkadot OpenGov Root track")," to set the\nruntime code with the proposed changes.")),(0,r.kt)("p",null,"For more information about the adoption of RFCs within the Polkadot ecosystem, see\n",(0,r.kt)("a",{parentName:"p",href:"https://www.polkadotphilosophy.com/polkadots-strategic-adoption-of-rfcs-pioneering-a-collaborative-future-in-blockchain-3330843cfd4f"},"this Medium article"),"\nand the\n",(0,r.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/polkadot-protocol-proposals-rfc-process/1421/1"},"original Polkadot Forum post"),"."))}m.isMDXComponent=!0}}]);