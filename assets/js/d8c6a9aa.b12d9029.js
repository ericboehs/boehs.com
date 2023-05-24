"use strict";(self.webpackChunkboehs_com=self.webpackChunkboehs_com||[]).push([[1949],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),f=n,h=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3556:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={},s="Rails CDN and ActiveStorage",i={permalink:"/blog/2021/10/28/rails-cdn-and-active-storage",source:"@site/blog/2021-10-28-rails-cdn-and-active-storage.md",title:"Rails CDN and ActiveStorage",description:"When serving assets and attachments from Rails and ActiveStorage, a CDN is a great way to reduce load on your web server and speed up content delivery to your users.",date:"2021-10-28T00:00:00.000Z",formattedDate:"October 28, 2021",tags:[],readingTime:3.105,hasTruncateMarker:!0,authors:[],frontMatter:{},nextItem:{title:"MacBook Pro Battery Drain",permalink:"/blog/2021/10/24/macbook-pro-battery-drain"}},l={authorsImageUrls:[]},p=[{value:"Asset CDN",id:"asset-cdn",level:2},{value:"Setting up your Asset CDN",id:"setting-up-your-asset-cdn",level:3},{value:"ActiveStorage Attachments served through a CDN",id:"activestorage-attachments-served-through-a-cdn",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When serving assets and attachments from Rails and ActiveStorage, a CDN is a great way to reduce load on your web server and speed up content delivery to your users."),(0,n.kt)("h2",{id:"asset-cdn"},"Asset CDN"),(0,n.kt)("p",null,"First, even if you're not using ActiveStorage, you'll want to set up a CDN to stand in front of your app. This will proxy requests for images, fonts, javascripts, and stylesheets that live in your app's repository."),(0,n.kt)("p",null,"The ideal setup here is to serve your assets from your app, set a high cache-expiration, and serve your assets through a CDN."),(0,n.kt)("h3",{id:"setting-up-your-asset-cdn"},"Setting up your Asset CDN"),(0,n.kt)("p",null,"For a CDN, I recommend Amazon CloudFront. You'll want to create a web distribution which points at the root of your app. Heroku ",(0,n.kt)("a",{parentName:"p",href:"https://help.heroku.com/8JTD2TJ6/how-should-i-configure-cloudfront-to-work-with-heroku"},"has a good guide")," on that."),(0,n.kt)("p",null,"Once it's set up, set an environment variable",(0,n.kt)("sup",{parentName:"p",id:"fnref-1-9e2216"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1-9e2216",className:"footnote-ref"},"1"))," (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"ASSET_HOST"),") to the distribution domain name and configure your ",(0,n.kt)("inlineCode",{parentName:"p"},"asset_host"),". Also, set a long expiration for your assets. In ",(0,n.kt)("inlineCode",{parentName:"p"},"config/environments/production.rb")," ",(0,n.kt)("sup",{parentName:"p",id:"fnref-2-9e2216"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2-9e2216",className:"footnote-ref"},"2"))," ",(0,n.kt)("sup",{parentName:"p",id:"fnref-3-9e2216"},(0,n.kt)("a",{parentName:"sup",href:"#fn-3-9e2216",className:"footnote-ref"},"3")),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"# Tell our CDN and browser to cache assets for a year.\nconfig.public_file_server.headers = { 'Cache-Control' => 'public, max-age=31536000' }\n\n# Serve images, stylesheets, and javascripts from an asset server.\nconfig.action_controller.asset_host = ENV['ASSET_HOST']\n")),(0,n.kt)("p",null,"Once you've configured the above, your production assets should serve from your CloudFront CDN."),(0,n.kt)("p",null,"For more information, on serving assets, caching, and cache invalidation, see the ",(0,n.kt)("a",{parentName:"p",href:"https://guides.rubyonrails.org/asset_pipeline.html#cdns-and-the-cache-control-header"},"Rails Guides"),"."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"activestorage-attachments-served-through-a-cdn"},"ActiveStorage Attachments served through a CDN"),(0,n.kt)("p",null,"When you serve attachments from a cloud storage service (I'm using S3), it will be coming from a different domain than your app. One solution to this would be to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rails/rails/issues/31419#issuecomment-399118697",title:"on Jun 21, 2018"},"stream the file contents through your app"),"."),(0,n.kt)("p",null,"I opted for creating a second CDN distribution that sits in front of the cloud storage provider that ActiveStorage serves for its 302 redirect ",(0,n.kt)("sup",{parentName:"p",id:"fnref-4-9e2216"},(0,n.kt)("a",{parentName:"sup",href:"#fn-4-9e2216",className:"footnote-ref"},"4")),". This does require a little configuration. Thankfully nothing needs to be monkey patched."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a second CloudFront web distribution that points to your S3 bucket and point your ",(0,n.kt)("inlineCode",{parentName:"p"},"ATTACHMENT_HOST")," env variable at it (prepended with https://).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("inlineCode",{parentName:"p"},"lib/active_storage/service/s3_directory_service.rb"),", create the service in ",(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/ericboehs/59ff72b7beeb2724a0979247d0fe7541"},"this gist"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("inlineCode",{parentName:"p"},"config/environment/production.rb"),", set ActiveStorage's ",(0,n.kt)("inlineCode",{parentName:"p"},"service_urls_expire_in")," :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"# Tell our CDN and browser to cache attachments for a year.\nconfig.active_storage.service_urls_expire_in = 1.year\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In config/storage.yml, configure the service and default ",(0,n.kt)("inlineCode",{parentName:"p"},"cache_control")," for uploaded attachments ",(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/58290203"},"by adding the upload key")," ",(0,n.kt)("sup",{parentName:"p",id:"fnref-5-9e2216"},(0,n.kt)("a",{parentName:"sup",href:"#fn-5-9e2216",className:"footnote-ref"},"5")),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"amazon:\n  service: S3Directory\n  # ...\n  upload:\n    cache_control: 'public, max-age=31536000'\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When linking to the attachments, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"rails_blob_url")," helper like so: ",(0,n.kt)("sup",{parentName:"p",id:"fnref-6-9e2216"},(0,n.kt)("a",{parentName:"sup",href:"#fn-6-9e2216",className:"footnote-ref"},"6"))," "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"rails_blob_url user.avatar, host: ENV['ASSET_HOST']\n")),(0,n.kt)("p",{parentName:"li"},"(For variants, you'll need to call ",(0,n.kt)("inlineCode",{parentName:"p"},"rails_representation_url")," instead.)"))),(0,n.kt)("p",null,"Now your ActiveStorage attachments will serve through the two CDNs: the first request will hit Rails' Representations or Blob controller (through the Asset CDN) which will redirect to the service url for the attachment (through the Attachment CDN). If this attachment has been served to a previous user, no request will hit your web server as CloudFront will have it in its cache. If that user has requested the attachment before, it well be served from the browser's memory and no request will be made.",(0,n.kt)("sup",{parentName:"p",id:"fnref-7-9e2216"},(0,n.kt)("a",{parentName:"sup",href:"#fn-7-9e2216",className:"footnote-ref"},"7"))),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1-9e2216"},"Prepend the host with https://.",(0,n.kt)("a",{parentName:"li",href:"#fnref-1-9e2216",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2-9e2216"},"If you're using Heroku Review Apps, you'll want to conditionally use ",(0,n.kt)("inlineCode",{parentName:"li"},"ENV['HEROKU_APP_NAME']")," based on ",(0,n.kt)("inlineCode",{parentName:"li"},"ENV['HEROKU_PARENT_APP_NAME']"),".",(0,n.kt)("a",{parentName:"li",href:"#fnref-2-9e2216",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-3-9e2216"},"You may also want to ",(0,n.kt)("a",{parentName:"li",href:"https://guides.rubyonrails.org/action_mailer_basics.html#adding-images-in-action-mailer-views"},"set your mailers' asset host"),".",(0,n.kt)("a",{parentName:"li",href:"#fnref-3-9e2216",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-4-9e2216"},"See Rails' Representation and Variants controller to see how that works.",(0,n.kt)("a",{parentName:"li",href:"#fnref-4-9e2216",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-5-9e2216"},"If you already have ActiveStorage attachments uploaded in production, you can make them public and add a cache-control header ",(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/30225271"},"by using aws cli tools"),".",(0,n.kt)("a",{parentName:"li",href:"#fnref-5-9e2216",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-6-9e2216"},"You may want to create a helper method to make this a little cleaner.",(0,n.kt)("a",{parentName:"li",href:"#fnref-6-9e2216",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-7-9e2216"},"The same is true for your assets and the Asset CDN.",(0,n.kt)("a",{parentName:"li",href:"#fnref-7-9e2216",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);