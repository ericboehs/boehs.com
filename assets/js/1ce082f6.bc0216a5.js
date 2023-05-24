"use strict";(self.webpackChunkboehs_com=self.webpackChunkboehs_com||[]).push([[27],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},i="Configuring a Heroku Review App to use another apps database",s={permalink:"/blog/2020/03/05/configuring-a-heroku-review-app-to-use-another-apps-database",source:"@site/blog/2020-03-05-configuring-a-heroku-review-app-to-use-another-apps-database.md",title:"Configuring a Heroku Review App to use another apps database",description:"In certain scenarios, I've found it useful to use our production app's Read Replica as a source for manual testing. It's not something I'm reaching for often but there are definitely cases where our seed data just doesn't cut it.",date:"2020-03-05T00:00:00.000Z",formattedDate:"March 5, 2020",tags:[],readingTime:1.41,hasTruncateMarker:!0,authors:[],frontMatter:{},prevItem:{title:"Monitoring my Internet Connection with Speedtest-cli",permalink:"/blog/2020/09/06/monitoring-my-internet-connection-with-speedtest-cli"},nextItem:{title:"Resolving Brakeman Errors",permalink:"/blog/2020/03/03/resolving-brakeman-errors"}},p={authorsImageUrls:[]},u=[{value:"Destroy",id:"destroy",level:2},{value:"Configure",id:"configure",level:2},{value:"Relish",id:"relish",level:2}],l={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In certain scenarios, I've found it useful to use our production app's Read Replica as a source for manual testing. It's not something I'm reaching for often but there are definitely cases where our seed data just doesn't cut it."),(0,a.kt)("p",null,"Since it's a read replica, no writes can be made to it and I don't have to worry (too much) about harming production. You'll want to make sure any external user operations aren't configured to happen automatically (e.g. sending email, cropping avatars, etc)."),(0,a.kt)("h2",{id:"destroy"},"Destroy"),(0,a.kt)("p",null,"In order to assign a different ",(0,a.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," to a review app, you'll need to destroy the postgres attachment on your review app. I knock this out by chaining some commands together:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"heroku addons:destroy $(heroku addons:info heroku-postgresql -a your_review_app | grep '===' | awk '{print $2}') -a your_review_app\n")),(0,a.kt)("p",null,"The sub-command here is getting the name of the add-on (e.g. postgresql-concentric-04442) and passing it to ",(0,a.kt)("inlineCode",{parentName:"p"},"heroku addons:destroy"),".",(0,a.kt)("sup",{parentName:"p",id:"fnref-1-764672"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1-764672",className:"footnote-ref"},"1"))),(0,a.kt)("h2",{id:"configure"},"Configure"),(0,a.kt)("p",null,"Now that we've gotten rid of that pesky, old database, we can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," on our review app. I also have a banger of a command for this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'heroku config:set DATABASE_URL="$(heroku config:get HEROKU_POSTGRESQL_PURPLE_URL -r production)" -a your_review_app\n')),(0,a.kt)("p",null,"In order to know what to substitute in for ",(0,a.kt)("inlineCode",{parentName:"p"},"HEROKU_POSTGRESQL_PURPLE_URL")," in your setup, run:",(0,a.kt)("sup",{parentName:"p",id:"fnref-2-764672"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2-764672",className:"footnote-ref"},"2"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"heroku pg:info -r production | grep Followers \n")),(0,a.kt)("p",null,"Use your discretion to determine your read-replica."),(0,a.kt)("h2",{id:"relish"},"Relish"),(0,a.kt)("p",null,"That's it. In my case, my app was rebooted and it read the ",(0,a.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," without a problem. If your app tries to do writes, it will most likely throw an exception."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1-764672"},"Of course, don't put your production app's name in this one. \ud83d\ude02\ud83d\ude31",(0,a.kt)("a",{parentName:"li",href:"#fnref-1-764672",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2-764672"},"Assuming you're using a read replica from Heroku",(0,a.kt)("a",{parentName:"li",href:"#fnref-2-764672",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);