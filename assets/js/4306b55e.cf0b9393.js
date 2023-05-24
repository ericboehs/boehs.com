"use strict";(self.webpackChunkboehs_com=self.webpackChunkboehs_com||[]).push([[5908],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),y=o,f=p["".concat(c,".").concat(y)]||p[y]||d[y]||a;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2744:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},s="Rails CDN and ActiveStorage",i={permalink:"/blog/2021/10/28/rails-cdn-and-active-storage",source:"@site/blog/2021-10-28-rails-cdn-and-active-storage.md",title:"Rails CDN and ActiveStorage",description:"When serving assets and attachments from Rails and ActiveStorage, a CDN is a great way to reduce load on your web server and speed up content delivery to your users.",date:"2021-10-28T00:00:00.000Z",formattedDate:"October 28, 2021",tags:[],readingTime:3.105,hasTruncateMarker:!0,authors:[],frontMatter:{},nextItem:{title:"MacBook Pro Battery Drain",permalink:"/blog/2021/10/24/macbook-pro-battery-drain"}},c={authorsImageUrls:[]},u=[{value:"Asset CDN",id:"asset-cdn",level:2},{value:"Setting up your Asset CDN",id:"setting-up-your-asset-cdn",level:3}],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When serving assets and attachments from Rails and ActiveStorage, a CDN is a great way to reduce load on your web server and speed up content delivery to your users."),(0,o.kt)("h2",{id:"asset-cdn"},"Asset CDN"),(0,o.kt)("p",null,"First, even if you're not using ActiveStorage, you'll want to set up a CDN to stand in front of your app. This will proxy requests for images, fonts, javascripts, and stylesheets that live in your app's repository."),(0,o.kt)("p",null,"The ideal setup here is to serve your assets from your app, set a high cache-expiration, and serve your assets through a CDN."),(0,o.kt)("h3",{id:"setting-up-your-asset-cdn"},"Setting up your Asset CDN"),(0,o.kt)("p",null,"For a CDN, I recommend Amazon CloudFront. You'll want to create a web distribution which points at the root of your app. Heroku ","[has a good guide][2]"," on that."))}d.isMDXComponent=!0}}]);