"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9802],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||s;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},39420:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=["components"],o={id:"learn-wasm",title:"WebAssembly (Wasm)",sidebar_label:"WebAssembly (Wasm)",description:"Learn how Wasm plays a role in Polkadot's runtime.",keywords:["webassembly","wasm","runtime"],slug:"../learn-wasm"},l=void 0,c={unversionedId:"learn/learn-wasm",id:"learn/learn-wasm",title:"WebAssembly (Wasm)",description:"Learn how Wasm plays a role in Polkadot's runtime.",source:"@site/../docs/learn/learn-wasm.md",sourceDirName:"learn",slug:"/learn-wasm",permalink:"/docs/learn-wasm",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-wasm.md",tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1669041500,formattedLastUpdatedAt:"Nov 21, 2022",frontMatter:{id:"learn-wasm",title:"WebAssembly (Wasm)",sidebar_label:"WebAssembly (Wasm)",description:"Learn how Wasm plays a role in Polkadot's runtime.",keywords:["webassembly","wasm","runtime"],slug:"../learn-wasm"},sidebar:"docs",previous:{title:"Staking Miner",permalink:"/docs/learn-staking-miner"},next:{title:"Parachains",permalink:"/docs/learn-parachains"}},m={},p=[{value:"What is WebAssembly?",id:"what-is-webassembly",level:2},{value:"Why WebAssembly?",id:"why-webassembly",level:2},{value:"Forkless Upgrades",id:"forkless-upgrades",level:3},{value:"Resources",id:"resources",level:2}],u={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"WebAssembly is used in Polkadot and Substrate as the compilation target for the runtime."),(0,s.kt)("h2",{id:"what-is-webassembly"},"What is WebAssembly?"),(0,s.kt)("p",null,"WebAssembly, shortened to simply ",(0,s.kt)("em",{parentName:"p"},"Wasm"),", is a binary instruction format for a stack-based virtual\nmachine. Wasm is designed as a portable target for compilation of high-level languages like\nC/C++/Rust, enabling deployment on the web for client and server applications."),(0,s.kt)("h2",{id:"why-webassembly"},"Why WebAssembly?"),(0,s.kt)("p",null,"WebAssembly is a platform agnostic binary format, meaning that it will run the same instructions\nacross whatever machine it is operating on. Blockchains need determinacy in order to have reliable\nstate transition updates across all nodes in the peer-to-peer network without forcing every peer to\nrun the same exact hardware. Wasm is a nice fit for reliability among the possibly diverse set of\nmachines. Wasm is both efficient and fast. The efficiency means that it can be uploaded onto the\nchain as a blob of code without causing too much state bloat while keeping its ability to execute at\nnear-native speeds."),(0,s.kt)("h3",{id:"forkless-upgrades"},"Forkless Upgrades"),(0,s.kt)("p",null,"By using Wasm in Substrate, the framework powering Polkadot, Kusama, and many connecting chains, the\nchains are given the ability to upgrade their runtime logic without hard forking. Hard forking is a\nstandard method of upgrading a blockchain that is slow, inefficient, and error prone due to the\nlevels of offline coordination required, and thus, the propensity to bundle many upgrades into one\nlarge-scale event. By deploying Wasm on-chain and having nodes auto-enact the new logic at a certain\nblock height, upgrades can be small, isolated, and very specific."),(0,s.kt)("p",null,"As a result of storing the Runtime as part of the state, the Runtime code itself becomes state\nsensitive and calls to Runtime can change the Runtime code itself. Therefore the Polkadot Host needs\nto always make sure it provides the Runtime corresponding to the state in which the entrypoint has\nbeen called."),(0,s.kt)("h2",{id:"resources"},"Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://webassembly.org/"},"WebAssembly.org")," - WebAssembly homepage that contains a link to the\nspec."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/paritytech/Wasmi"},"Wasmi")," - WebAssembly interpreter written in Rust."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/paritytech/parity-Wasm"},"Parity Wasm")," - WebAssembly\nserialization/deserialization in Rust."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/paritytech/Wasm-utils"},"Wasm utils")," - Collection of Wasm utilities used in\nParity and Wasm contract development.")))}d.isMDXComponent=!0}}]);