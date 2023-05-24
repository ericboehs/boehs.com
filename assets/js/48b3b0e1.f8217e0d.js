"use strict";(self.webpackChunkboehs_com=self.webpackChunkboehs_com||[]).push([[7502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3240:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="MacBook Pro Battery Drain",c={permalink:"/boehs.com/blog/2021/10/24/macbook-pro-battery-drain",source:"@site/blog/2021-10-24-macbook-pro-battery-drain/index.md",title:"MacBook Pro Battery Drain",description:"My main computer is my iMac. It seemed like every time I opened my MacBook Pro, it would show this screen:",date:"2021-10-24T00:00:00.000Z",formattedDate:"October 24, 2021",tags:[],readingTime:.925,hasTruncateMarker:!0,authors:[],frontMatter:{},prevItem:{title:"Rails CDN and ActiveStorage",permalink:"/boehs.com/blog/2021/10/28/rails-cdn-and-active-storage"},nextItem:{title:"Ping Tools in macOS",permalink:"/boehs.com/blog/2021/10/23/ping-tools-in-macos"}},l={authorsImageUrls:[]},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"My main computer is my iMac. It seemed like every time I opened my MacBook Pro, it would show this screen:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MacBook Pro showing low battery full screen",src:r(2141).Z,width:"1680",height:"840"})),(0,o.kt)("p",null,"So I researched a bit and fixed it. Here's what I did:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},'Turn off "PowerNap while on battery power"'),". This is the Energy preference pane."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},'Turn off "Allow Bluetooth devices to wake this computer"'),". This is in the Bluetooth preference pane under Advanced.")),(0,o.kt)("p",null,"That's it."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now, when I open my MacBook the battery has barely moved from the previous day. For example, 3 days ago I closed my laptop with 64% battery. I opened it this morning with 50% battery. A 5%/day battery drain is excellent for a computer that's keeping its running memory actively powered. Previously I'd see what seemed to be 5%/hour (I didn't actually measure it but rarely did I open my laptop and it wasn't dead). "),(0,o.kt)("p",null,"If you want to track your battery usage, check out ",(0,o.kt)("a",{parentName:"p",href:"https://bjango.com/mac/istatmenus/"},"iStat Menus"),". It has a graph to show battery drain over time (past hour, day, week, month)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iStat Menus Battery Screenshot",src:r(3021).Z,width:"1856",height:"1212"})))}m.isMDXComponent=!0},3021:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/istat-battery-screenshot-6a6e4dc5b19dbbfaae0f79a183d8d827.png"},2141:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/macbook-low-battery-d48262613821dbd9fe27dcb9ed13a242.jpg"}}]);