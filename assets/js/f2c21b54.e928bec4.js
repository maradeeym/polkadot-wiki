"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4363],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),h=n,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3011:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),s=["components"],i={id:"build-storage",title:"Decentralized Storage Systems",sidebar_label:"Decentralized Storage",description:"Information about building with decentralized storage.",keywords:["build","cloud","storage"],slug:"../build-storage"},l=void 0,d={unversionedId:"build/build-storage",id:"build/build-storage",title:"Decentralized Storage Systems",description:"Information about building with decentralized storage.",source:"@site/../docs/build/build-storage.md",sourceDirName:"build",slug:"/build-storage",permalink:"/docs/build-storage",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-storage.md",tags:[],version:"current",lastUpdatedBy:"Dan Shields",lastUpdatedAt:1656334890,formattedLastUpdatedAt:"Jun 27, 2022",frontMatter:{id:"build-storage",title:"Decentralized Storage Systems",sidebar_label:"Decentralized Storage",description:"Information about building with decentralized storage.",keywords:["build","cloud","storage"],slug:"../build-storage"},sidebar:"docs",previous:{title:"Parachain Development",permalink:"/docs/build-pdk"},next:{title:"Smart Contracts",permalink:"/docs/build-smart-contracts"}},p={},u=[{value:"DCS (Decentralized Cloud Storage)",id:"dcs-decentralized-cloud-storage",level:2},{value:"IPFS (Interplanetary File System)",id:"ipfs-interplanetary-file-system",level:3},{value:"Brief comparison of IPFS &amp; HTTP:",id:"brief-comparison-of-ipfs--http",level:4},{value:"Filecoin",id:"filecoin",level:3},{value:"Substrate Storage",id:"substrate-storage",level:2},{value:"Crust Storage",id:"crust-storage",level:3},{value:"PolkadotJS Storage",id:"polkadotjs-storage",level:3},{value:"Substrate Files",id:"substrate-files",level:3}],c={toc:u};function h(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Storage is an integral part of modern computer systems, and the same is true for distributed\nand decentralized systems like a blockchain. When interacting with the Polkadot ecosystem, it\nwill be helpful if you familiarize yourself with the current WEB3 approach to decentralized\nstorage systems, and how these systems can support your endeavors."),(0,o.kt)("h2",{id:"dcs-decentralized-cloud-storage"},"DCS (Decentralized Cloud Storage)"),(0,o.kt)("p",null,"The key attribute that characterizes centralized cloud storage is the location of data."),(0,o.kt)("p",null,"In decentralized cloud storage, the key attribute becomes the data itself instead of the data's\nlocation."),(0,o.kt)("p",null,"This can be viewed as the shift from the centralized ",(0,o.kt)("em",{parentName:"p"},"location-centric")," storage approach to the\ndecentralized ",(0,o.kt)("em",{parentName:"p"},"content-centric")," approach."),(0,o.kt)("h3",{id:"ipfs-interplanetary-file-system"},"IPFS (Interplanetary File System)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"IPFS")," is a peer-to-peer distributed file system that seeks to connect all\ncomputing devices with the same system of files, by utilizing features such as content-addressing,\ncontent-signing, and enhanced security methods through encryption. IPFS aims to address the current\nhurdles of the HTTP-based Internet."),(0,o.kt)("h4",{id:"brief-comparison-of-ipfs--http"},"Brief comparison of IPFS & HTTP:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"IPFS"),(0,o.kt)("th",{parentName:"tr",align:null},"HTTP"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"network: peer-to-peer model (decentralized)"),(0,o.kt)("td",{parentName:"tr",align:null},"network: client-server model (centralized)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"requests: use a cryptographic hash of that data"),(0,o.kt)("td",{parentName:"tr",align:null},"requests: use the address on which data is hosted")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"accessibility: data is distributed to multiple nodes and can be accessed at any time. Bandwidth is high: nearest peer can serve the data"),(0,o.kt)("td",{parentName:"tr",align:null},"accessibility: data can only be accessed if the server is live and there are no interruptions in transmission. Bandwidth is limited: clients send requests to the same server")))),(0,o.kt)("h3",{id:"filecoin"},"Filecoin"),(0,o.kt)("p",null,"Like IPFS, ",(0,o.kt)("a",{parentName:"p",href:"https://filecoin.io/"},"Filecoin")," is a protocol developed by ",(0,o.kt)("a",{parentName:"p",href:"https://protocol.ai/"},"Protocol Labs"),"\nthat offers a decentralized storage network. Filecoin's main focus is the storage itself and uses IPFS as a\n","[complementary]"," back-end protocol."),(0,o.kt)("h2",{id:"substrate-storage"},"Substrate Storage"),(0,o.kt)("p",null,"Substrate takes a layered approach to storage by using a key-value data store that is implemented\nas a database-backed, modified Merkle tree. Substrate's higher-layer storage abstractions are\nbuilt on the key-value store."),(0,o.kt)("p",null,"The key-value data store is backed by ",(0,o.kt)("a",{parentName:"p",href:"https://rocksdb.org/"},"RocksDB"),", and it also supports an\nexperimental ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-db"},"Parity database"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The database is used for components that require persistent storage\nThese are components like Substrate clients, Substrate light-clients & off-chain workers.\nFor more information, check out\nSubstrate documentation ",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/main-docs/build/runtime-storage/"},"Storage Page"),".")),(0,o.kt)("p",null,"When building on Substrate, runtime developers can utilize of Substrate's FRAME ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage pallet"),"\nwhich gives access to Substrate's storage APIs. These storage items support values that are encoded by\nParity's ",(0,o.kt)("inlineCode",{parentName:"p"},"SCALE (Simple Concatenated Aggregate Little-Endian) Codec"),"."),(0,o.kt)("p",null,"There is a\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/frame_support/storage/trait.StorageValue.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Storage Value"))," API\nthat is used to store single values,\na ",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/frame_support/storage/trait.StorageMap.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Storage Map"))," API\nthat is used to a key-value hash map,\na ",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/frame_support/storage/trait.StorageDoubleMap.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Storage Double Map"))," API\nthat creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"storage map")," with two keys to provide the ability to efficiently remove all entries that have\na common first key, and a ",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/frame_support/storage/trait.StorageNMap.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Storage N Map")),"\nAPI that can be used to store a hash map with any arbitrary number of keys."),(0,o.kt)("p",null,"These layered APIs act as runtime storage that allows you to store data in your blockchain. More information can\nbe found at the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/main-docs/build/runtime-storage/"},(0,o.kt)("inlineCode",{parentName:"a"},"Runtime Storage Page"))," on Substrate Developer Hub."),(0,o.kt)("h3",{id:"crust-storage"},"Crust Storage"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://crust.network"},"Crust Network")," provides a Web3.0 decentralized storage network for the Metaverse. It is designed to realize core values of decentralization, privacy, and assurance. Crust supports multiple storage-layer protocols such as ",(0,o.kt)("a",{parentName:"p",href:"#ipfs-interplanetary-file-system"},"IPFS"),", and exposes instant accessible on-chain storage functions to users. Crust\u02bcs technical stack is also capable of supporting data manipulating and computing."),(0,o.kt)("p",null,"Crust provides a native cross-chain communication communication pallet based on ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-crosschain"},"XCMP"),", called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/crustio/crust/tree/parachain/shadow/crust-collator/pallets/xstorage"},"xStorage"),"."),(0,o.kt)("p",null,"The protocol also supports most smart contract platforms, including Ethereum, with its ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.crust.network/docs/en/buildCrossChainSolution"},"cross-chain dStorage solution"),"."),(0,o.kt)("admonition",{title:"Learn more about Crust",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To learn more about Crust, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.crust.network/en"},"Crust Network Wiki"),".\nTry integrating with Crust by following their ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.crust.network/docs/en/build101"},"Crust Storage 101")," guide.")),(0,o.kt)("h3",{id:"polkadotjs-storage"},"PolkadotJS Storage"),(0,o.kt)("p",null,"The PolkadotJS API offers storage methods that are part of the default Substrate runtime.\nThey are exposed via ",(0,o.kt)("inlineCode",{parentName:"p"},"api.query.<module>.<method>"),".\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/substrate/storage/"},"official docs")," for more details."),(0,o.kt)("h3",{id:"substrate-files"},"Substrate Files"),(0,o.kt)("p",null,"PolkadotJS Apps includes a decentralized storage module that allows Substrate-based chain\nusers to upload their files to ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.crust.network/docs/en/buildIPFSWeb3AuthGW"},"IPFS W3Auth Gateway")," and use the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.crust.network/docs/en/buildIPFSW3AuthPin"},"IPFS W3Auth Pinning Service")," to pin their files on Crust Network. "),(0,o.kt)("p",null,"Start by uploading a single file or folder:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"upload",src:a(8260).Z,width:"1917",height:"968"})),(0,o.kt)("p",null,"Choose a Gateway:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gateway",src:a(7771).Z,width:"1916",height:"966"})),(0,o.kt)("p",null,"Sign the message:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sign",src:a(4407).Z,width:"1918",height:"968"})),(0,o.kt)("p",null,"You should be able to view the file info, as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"file info",src:a(1879).Z,width:"1917",height:"966"})),(0,o.kt)("p",null,"As well as the file status:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"file statue",src:a(8608).Z,width:"1916",height:"966"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The whole files module is decentralized, so your file directory is only cached in browser.\nThe file directory info will not be visible if you switch to a new browser or clear the browser cache.\nThe storage module allows you to export file directory info from the current browser and import it to the new browser.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"manage file dir",src:a(7329).Z,width:"1917",height:"965"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"These above images are taken from this\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/apps/pull/6106"},"pull request"))))}h.isMDXComponent=!0},8260:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/substrate-files-1-b911815ce2aa992118b70e76adff406a.png"},7771:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/substrate-files-2-b16e86055a05152fd766c6c8fb2478b3.png"},4407:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/substrate-files-3-6b5badf567f42956c47ce5dcd7edd78c.png"},1879:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/substrate-files-4-80c0cc191b4a9d3dbcd336f2413e1922.png"},8608:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/substrate-files-5-9906fb4cea40075a2e3eb225a9d14dd7.png"},7329:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/substrate-files-6-e1d84abd6cf39f3b3651ae30a33b38b5.png"}}]);