"use strict";(self.webpackChunkboehs_com=self.webpackChunkboehs_com||[]).push([[822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Configuring Pow including SSL",l={permalink:"/blog/2015/01/20/configuring-pow-including-ssl.html",source:"@site/blog/2015-01-20-configuring-pow-including-ssl.html.md",title:"Configuring Pow including SSL",description:"I used pow in the past and didn't like it. I've given it a second chance and it seems to be working out. I'd like to give Invoker a try though but I'll save that for another day.",date:"2015-01-20T00:00:00.000Z",formattedDate:"January 20, 2015",tags:[],readingTime:2.81,hasTruncateMarker:!0,authors:[],frontMatter:{},prevItem:{title:"Adding a Custom Postgres Type in Rails 4.2",permalink:"/blog/2015/09/17/adding-a-custom-postgres-type-in-rails-4-2.html"},nextItem:{title:"Parsing null terminated key/value ASCII strings in Ruby",permalink:"/blog/2014/10/31/parsing-null-terminated-key-value-ascii-strings-in-ruby.html"}},s={authorsImageUrls:[]},p=[{value:"Install Pow",id:"install-pow",level:2},{value:"Configure SSL with tunnelss",id:"configure-ssl-with-tunnelss",level:2},{value:"Adding the SSL certificate to iOS",id:"adding-the-ssl-certificate-to-ios",level:3},{value:"Logs, restarting, pry and misc",id:"logs-restarting-pry-and-misc",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I used pow in the past and didn't like it. I've given it a second chance and it seems to be working out. I'd like to give ",(0,a.kt)("a",{parentName:"p",href:"http://invoker.codemancers.com"},"Invoker")," a try though but I'll save that for another day."),(0,a.kt)("p",null,"Pow is a daemon that runs your rack (Rails) apps in the background when you request them at a special ",(0,a.kt)("inlineCode",{parentName:"p"},"example_app.dev")," domain. You don't have to start your app manually anymore (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"rails s"),"). If you don't use your app for 15 minutes it kills your app's process to free up memory (restarting it on the next request). It doesn't run workers (I recommend inline ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chanks/que"},"que")," workers via ActiveJob) or other daemons such as those in your ",(0,a.kt)("inlineCode",{parentName:"p"},"Procfile"),". It just looks for a ",(0,a.kt)("inlineCode",{parentName:"p"},"config.ru")," and (presumably) does a ",(0,a.kt)("inlineCode",{parentName:"p"},"rackup")," on it. It's very simple to set up and it's Mac OS X only."),(0,a.kt)("h2",{id:"install-pow"},"Install Pow"),(0,a.kt)("p",null,"Before running the install script, configure pow to use port ",(0,a.kt)("inlineCode",{parentName:"p"},"3300")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"80"),"; this makes port forwarding easier and avoids unnecessary sudoing. You may prefer to skip this step or choose another port besides ",(0,a.kt)("inlineCode",{parentName:"p"},"3300"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export POW_DST_PORT=3300' >> ~/.powconfig\n")),(0,a.kt)("p",null,"Run the ",(0,a.kt)("a",{parentName:"p",href:"http://pow.cx"},"pow")," install script and configure pow to serve your app"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl get.pow.cx | sh\ncd ~/.pow\nln -s ~/Code/example_co/example_app # Or where ever your repo is\n")),(0,a.kt)("p",null,"Ensure your application is running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"open http://example_app.dev:3300\n")),(0,a.kt)("h2",{id:"configure-ssl-with-tunnelss"},"Configure SSL with tunnelss"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rchampourlier/tunnelss"},"tunnelss")," on your system:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gem install tunnelss\n")),(0,a.kt)("p",null,"Start tunnelss (I recommend 4430 as it does not require ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tunnelss 4430 3300 # Change port 3300 if you changed DST_PORT (80 is default)\n")),(0,a.kt)("p",null,"Open the SSL URL to the app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"open https://example_app.dev:4430\n")),(0,a.kt)("p",null,'Trust the "unverified" self-signed certificate when prompted (should require admin password). ',(0,a.kt)("a",{parentName:"p",href:"https://cloud.githubusercontent.com/assets/28198/5825515/9d33e926-a0b1-11e4-8fa2-8fb5157b2e86.png"},"Screenshot for Safari"),"."),(0,a.kt)("h3",{id:"adding-the-ssl-certificate-to-ios"},"Adding the SSL certificate to iOS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In your shell, run ",(0,a.kt)("inlineCode",{parentName:"li"},"open ~/.tunnelss"),"."),(0,a.kt)("li",{parentName:"ul"},"Send ",(0,a.kt)("inlineCode",{parentName:"li"},"cert.pem")," to yourself (email/iMessage)."),(0,a.kt)("li",{parentName:"ul"},"Open the attachment on your iOS device and install the certificate (should require your pass code and warn you about it not be a verified certificate)."),(0,a.kt)("li",{parentName:"ul"},"To access your application, use ",(0,a.kt)("a",{parentName:"li",href:"http://xip.io"},"xip.io"),". On your mac run ",(0,a.kt)("inlineCode",{parentName:"li"},"ipconfig getifaddr en0")," to get your local IP to use in the xip.io URL (e.g. https://example","_","app.10.0.1.4.xip.io:4430).")),(0,a.kt)("p",null,"Note: If you're testing remotely you will need an SSH or VPN tunnel."),(0,a.kt)("h2",{id:"logs-restarting-pry-and-misc"},"Logs, restarting, pry and misc"),(0,a.kt)("p",null,"Logs can be viewed in ",(0,a.kt)("inlineCode",{parentName:"p"},"log/development.log"),". A useful alias for this is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"alias devlogs='tail -f ~/Code/*/*/log/development.log' # May need to change path\n")),(0,a.kt)("p",null,"Restart the application using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"touch tmp/restart.txt # Will restart on next page load\n")),(0,a.kt)("p",null,"As usual, Rails handles much of the code reloading for you so you won't have to do this with every request. Just the typical reasons you'd need to restart the server for (modifying initializers, adding gems, modifying load paths, etc)."),(0,a.kt)("p",null,"Since ",(0,a.kt)("a",{parentName:"p",href:"http://pryrepl.org"},"pry")," isn't connected to a tty, you won't be able to start a debugger from your code the normal way (",(0,a.kt)("inlineCode",{parentName:"p"},"binding.pry"),"). ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mon-Ouie/pry-remote"},"pry-remote")," has our back. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"binding.remote_pry")," in your code and then run ",(0,a.kt)("inlineCode",{parentName:"p"},"pry-remote"),". This will attach your terminal to the pry debugging session."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"binding.remote_pry # In your code\npry-remote # In your shell\n")),(0,a.kt)("p",null,"For memory efficiency, pow will shut down applications that are not used for some time (default is 15 minutes). Your application will take a few extra seconds to load the first time you come back to it."))}d.isMDXComponent=!0}}]);