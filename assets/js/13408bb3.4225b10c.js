"use strict";(self.webpackChunkboehs_com=self.webpackChunkboehs_com||[]).push([[675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,h=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},s="Instant Google Results in Alfred",l={permalink:"/blog/2020/09/07/instant-google-results-in-alfred",source:"@site/blog/2020-09-07-instant-google-results-in-alfred.md",title:"Instant Google Results in Alfred",description:"I've been searching for a solution to allow me to instantly search Google from anywhere on my Mac. My goal is to access the result I want as fast as possible.",date:"2020-09-07T00:00:00.000Z",formattedDate:"September 7, 2020",tags:[],readingTime:1.445,hasTruncateMarker:!0,authors:[],frontMatter:{},prevItem:{title:"Ping Tools in macOS",permalink:"/blog/2021/10/23/ping-tools-in-macos"},nextItem:{title:"Monitoring my Internet Connection with Speedtest-cli",permalink:"/blog/2020/09/06/monitoring-my-internet-connection-with-speedtest-cli"}},i={authorsImageUrls:[]},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I've been searching for a solution to allow me to instantly search Google from anywhere on my Mac. My goal is to access the result I want as fast as possible."),(0,o.kt)("p",null,"My previous solution was to use the default fallback search in Alfred. I hit ",(0,o.kt)("inlineCode",{parentName:"p"},"Option-Space")," typed my search and pressed ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter"),". This was pretty good. It would open Safari with my query's Google results. The page would take two seconds to load and then I'd have to figure out how to select the result I wanted."),(0,o.kt)("p",null,"Ideally, I'd just press 1, 2, 3, etc on my keyboard to launch the corresponding result. But the closest I could find was a vim-like browser plugin (such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/televator-apps/vimari"},"Vimari"),") which gives all links a letter combination to type to navigate to it. Or ",(0,o.kt)("a",{parentName:"p",href:"https://shortcatapp.com"},"Shortcat"),", which I use for navigating all macOS UI.",(0,o.kt)("sup",{parentName:"p",id:"fnref-1-89810a"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1-89810a",className:"footnote-ref"},"1"))),(0,o.kt)("p",null,"This solution wasn't fast enough for me though. I wanted a more modal experience where I hop into an ephemeral search session."))}m.isMDXComponent=!0}}]);