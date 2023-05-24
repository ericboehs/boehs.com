"use strict";(self.webpackChunkboehs_com=self.webpackChunkboehs_com||[]).push([[640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,g=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},l="Instant Google Results in Alfred",i={permalink:"/blog/2020/09/07/instant-google-results-in-alfred",source:"@site/blog/2020-09-07-instant-google-results-in-alfred.md",title:"Instant Google Results in Alfred",description:"I've been searching for a solution to allow me to instantly search Google from anywhere on my Mac. My goal is to access the result I want as fast as possible.",date:"2020-09-07T00:00:00.000Z",formattedDate:"September 7, 2020",tags:[],readingTime:1.445,hasTruncateMarker:!0,authors:[],frontMatter:{},prevItem:{title:"Ping Tools in macOS",permalink:"/blog/2021/10/23/ping-tools-in-macos"},nextItem:{title:"Monitoring my Internet Connection with Speedtest-cli",permalink:"/blog/2020/09/06/monitoring-my-internet-connection-with-speedtest-cli"}},s={authorsImageUrls:[]},p=[{value:"Enter googler",id:"enter-googler",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I've been searching for a solution to allow me to instantly search Google from anywhere on my Mac. My goal is to access the result I want as fast as possible."),(0,o.kt)("p",null,"My previous solution was to use the default fallback search in Alfred. I hit ",(0,o.kt)("inlineCode",{parentName:"p"},"Option-Space")," typed my search and pressed ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter"),". This was pretty good. It would open Safari with my query's Google results. The page would take two seconds to load and then I'd have to figure out how to select the result I wanted."),(0,o.kt)("p",null,"Ideally, I'd just press 1, 2, 3, etc on my keyboard to launch the corresponding result. But the closest I could find was a vim-like browser plugin (such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/televator-apps/vimari"},"Vimari"),") which gives all links a letter combination to type to navigate to it. Or ",(0,o.kt)("a",{parentName:"p",href:"https://shortcatapp.com"},"Shortcat"),", which I use for navigating all macOS UI.",(0,o.kt)("sup",{parentName:"p",id:"fnref-1-89810a"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1-89810a",className:"footnote-ref"},"1"))),(0,o.kt)("p",null,"This solution wasn't fast enough for me though. I wanted a more modal experience where I hop into an ephemeral search session."),(0,o.kt)("h2",{id:"enter-googler"},"Enter googler"),(0,o.kt)("p",null,"In my search for instantly navigating Google results, I came across ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jarun/googler"},"googler")," which displays google results on the command line. You can type a number followed by ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter")," and it opens your default browser to that result. Getting closer."),(0,o.kt)("p",null,"After looking for an existing solution and turning up empty, I decided to make my own via Alfred Workflows."),(0,o.kt)("p",null,"I really liked ",(0,o.kt)("inlineCode",{parentName:"p"},"googler")," and essentially wanted to interface with it through Alfred. So I picked up my favorite programming language, and started writing. The end result is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ericboehs/alfred-googler"},"Alfred googler"),". Here's a demo:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/ericboehs/alfred-googler/raw/master/demo.gif",alt:"demo gif"})),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ericboehs/alfred-googler#readme"},"README")," for info on installation and features."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1-89810a"},"There's an alternative to Shortcat called ",(0,o.kt)("a",{parentName:"li",href:"https://vimacapp.com/"},"Vimac")," but I still prefer Shortcat even though it's not maintained.",(0,o.kt)("a",{parentName:"li",href:"#fnref-1-89810a",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);