(function(t){function e(e){for(var n,o,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},a={app:0},i=[];function c(t){return s.p+"js/"+({about:"about","admin~login~register":"admin~login~register",admin:"admin",login:"login",register:"register",cart:"cart",menu:"menu",product:"product",shop:"shop"}[t]||t)+"."+{about:"2b4c7166","admin~login~register":"036544db",admin:"fb0ed20c",login:"7b099fcb",register:"bf976df5",cart:"2b953932",menu:"dbce336f",product:"3c784eee",shop:"d64703f3"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r={"admin~login~register":1,admin:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var n="css/"+({about:"about","admin~login~register":"admin~login~register",admin:"admin",login:"login",register:"register",cart:"cart",menu:"menu",product:"product",shop:"shop"}[t]||t)+"."+{about:"31d6cfe0","admin~login~register":"c9f5a90d",admin:"5f12ef22",login:"31d6cfe0",register:"31d6cfe0",cart:"31d6cfe0",menu:"31d6cfe0",product:"31d6cfe0",shop:"31d6cfe0"}[t]+".css",a=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===a))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===n||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[t],d.parentNode.removeChild(d),r(i)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"1cd1":function(t,e,r){t.exports=r.p+"img/logo_nav.519a9f54.png"},"56d7":function(t,e,r){"use strict";r.r(e);var n={};r.r(n),r.d(n,"login",(function(){return tt})),r.d(n,"logout",(function(){return et})),r.d(n,"getInfo",(function(){return rt}));var o={};r.r(o),r.d(o,"user",(function(){return ot}));var a={};r.r(a),r.d(a,"login",(function(){return at})),r.d(a,"logout",(function(){return it})),r.d(a,"getInfo",(function(){return ct})),r.d(a,"extend",(function(){return st}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{color:"red",height:"110"}},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("div",{staticClass:"navbar_logo"},[n("img",{attrs:{src:r("1cd1"),alt:"logo",contain:"",height:"100"}})])]),[n("v-tabs",{attrs:{"background-color":"deep-red","center-active":"",centered:"",dark:""}},[n("v-tab",{attrs:{to:"/"}},[n("h2",[t._v("首頁")])]),n("v-tab",{attrs:{to:"/about"}},[n("h2",[t._v("品牌介紹")])]),n("v-tab",{attrs:{to:"/menu"}},[n("h2",[t._v("菜單")])]),n("v-tab",{attrs:{to:"/shop"}},[n("h2",[t._v("網路商城")])]),n("v-tab",{attrs:{to:"/product"}},[n("h2",[t._v("商品")])]),t.user.isLogin?t._e():n("v-tab",{attrs:{to:"/register"}},[n("h2",[t._v("註冊")])]),t.user.isLogin?t._e():n("v-tab",{attrs:{to:"/login"}},[n("h2",[t._v("登入")])]),t.user.isLogin&&t.user.isAdmin?n("v-tab",{attrs:{to:"/admin"}},[n("h2",[t._v("管理")])]):t._e(),t.user.isLogin?n("v-tab",{on:{click:t.logout}},[n("h2",[t._v("登出")])]):t._e(),n("v-tab",{attrs:{to:"/cart"}},[n("h2",[t._v("購物車")])])],1)]],2),n("router-view"),n("Footer")],1)},s=[],u=r("1da1"),l=(r("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticStyle:{"background-color":"rgb(63, 62, 62)"}},[n("v-row",{staticClass:"justify-center"},[n("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"2"}},[n("img",{attrs:{src:r("cf05"),alt:"logo",width:"100px"}})]),n("v-col",{staticClass:"d-flex justify-center flex-column",staticStyle:{color:"white"},attrs:{cols:"2"}},[n("h2",{staticStyle:{color:"white","padding-top":"20px","padding-left":"60px"}},[t._v("麵屋號")]),n("p",[t._v("Email:ramen666@ramen.com")])])],1),n("v-col",{staticClass:"text-center footer mt-2",staticStyle:{color:"white"},attrs:{cols:"12"}},[t._v(" Copyright © "+t._s((new Date).getFullYear())+" "),n("strong",[t._v("純粹學習使用")]),t._v(". All rights reserved. 版權所有© "+t._s((new Date).getFullYear())+" ")])],1)}),f=[],d={name:"Footer",components:{}},m=d,p=r("2877"),g=r("6544"),h=r.n(g),v=r("62ad"),b=r("553a"),x=r("0fd9"),w=Object(p["a"])(m,l,f,!1,null,null,null),y=w.exports;h()(w,{VCol:v["a"],VFooter:b["a"],VRow:x["a"]});var _={name:"App",components:{Footer:y},methods:{logout:function(){this.$store.dispatch("user/logout")}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("user/getInfo");case 1:case"end":return e.stop()}}),e)})))()}},k=_,j=r("7496"),M=r("40dc"),A=r("71a3"),C=r("fe57"),D=Object(p["a"])(k,c,s,!1,null,null,null),S=D.exports;h()(D,{VApp:j["a"],VAppBar:M["a"],VTab:A["a"],VTabs:C["a"]});var B=r("9483");Object(B["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("d3b7"),r("3ca3"),r("ddb0");var O=r("8c4f"),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-carousel",{attrs:{cycle:"",height:"800","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.items,(function(t,e){return n("v-carousel-item",{key:e,attrs:{src:t.src}})})),1),n("v-container",{staticClass:"d-flex justify-center align-center",staticStyle:{"background-color":"rgb(253, 236, 0)","flex-direction":"column"}},[n("div",{staticClass:"d-flex justify-center"},[n("img",{attrs:{src:r("cf05"),alt:"logo",width:"100px"}}),n("h1",{staticStyle:{"text-align":"center","margin-top":"30px","font-size":"50px"}},[t._v("品牌介紹")])]),n("v-row",{staticClass:"justify-center mt-3 pt-5",staticStyle:{"background-color":"rgb(255, 255, 255)",width:"90%"}},[n("v-col",{attrs:{cols:"4"}},[n("img",{staticStyle:{"object-fit":"cover"},attrs:{src:r("d9d8")}})]),n("v-col",{staticStyle:{"font-size":"20px","font-weight":"600"},attrs:{cols:"5"}},[n("p",[t._v("一九八一年創立於九州熊本，已遷到東京的總社專注多種餐飲業的經營，以美味及創新為企業宗旨，除了拉麵以外，無論是引領風潮的新式漢堡，或是被評為全東京第一名的日式煎餃，都創造出新的美食型態！ 具有部份台灣血統的現任代表取締役坂田健先生賦與台灣分公司的唯一使命，就是將純正日本美食帶到台灣！希望這個分公司能擁有台灣人開創進取的精神，加上日本職人的堅持態度。 樂麵屋是由日本總公司直接在台灣所創立經營，有別於本地的公司代理日本既有拉麵品牌。建立直營的新品牌目的在於能夠即時以日本的標準直接管控餐點品質，同時不需背負既有品牌的限制，更能提出創新的做法及口味！這也是為什麼每個樂麵屋的分店都有不同的裝潢，氣氛及不同口味的特色拉麵，因為我們痛恨重複，創新求變和追求美味是根植在我們的基因裏的啊！")])])],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{color:"red",height:"60",to:"/about"}},[n("h2",{staticStyle:{color:"white"}},[t._v("了解更多")])])],1)],1)],1),n("v-container",{staticClass:"d-flex justify-center align-center",staticStyle:{"background-color":"rgb(253, 236, 0)","flex-direction":"column"}},[n("div",{staticClass:"d-flex justify-center"},[n("img",{attrs:{src:r("cf05"),alt:"logo",width:"100px"}}),n("h1",{staticStyle:{"text-align":"center","margin-top":"30px","font-size":"50px"}},[t._v("菜單")])]),n("v-row",{staticClass:"justify-center mt-3 pt-5",staticStyle:{"background-color":"rgb(255, 255, 255)",width:"90%"}},[n("v-col",{attrs:{cols:"3"}},[n("v-card",{staticClass:"justify-center d-flex flex-column align-center",attrs:{"max-width":"400"}},[n("v-img",{attrs:{src:"https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFtZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",height:"200px"}}),n("v-card-title",[n("h2",[t._v("豚骨拉麵")])]),n("v-card-text",{staticClass:"mx-auto justify-center d-flex flex-column align-center"},[n("h3",[t._v("黯然消魂的豚骨，最經典口味")])])],1)],1),n("v-col",{attrs:{cols:"3"}},[n("v-card",{staticClass:"justify-center d-flex flex-column align-center",attrs:{"max-width":"400"}},[n("v-img",{attrs:{src:"https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",height:"200px"}}),n("v-card-title",[n("h2",[t._v("泡菜拉麵")])]),n("v-card-text",{staticClass:"justify-center d-flex flex-column align-center"},[n("h3",[t._v("來自韓國的泡菜，阿你唷say唷")])])],1)],1),n("v-col",{attrs:{cols:"3"}},[n("v-card",{staticClass:"justify-center d-flex flex-column align-center",attrs:{"max-width":"400"}},[n("v-img",{attrs:{src:"https://images.unsplash.com/photo-1618889482923-38250401a84e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFtZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",height:"200px"}}),n("v-card-title",[n("h2",[t._v("雞白湯拉麵")])]),n("v-card-text",{staticClass:"mx-auto justify-center d-flex flex-column align-center"},[n("h3",[t._v("24小時舒肥雞肉，加上完美熬煮的雞湯")])])],1)],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{color:"red",height:"60",to:"/menu"}},[n("h2",{staticStyle:{color:"white"}},[t._v("更多餐點")])])],1)],1)],1)],1)},W=[],Z={name:"Home",data:function(){return{items:[{src:"https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFtZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},{src:"https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},{src:"https://images.unsplash.com/photo-1618889482923-38250401a84e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFtZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},{src:"https://images.unsplash.com/photo-1632440722549-692fc6af969e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFtZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}]}},components:{}},P=Z,E=r("8336"),H=r("b0af"),V=r("99d9"),z=r("5e66"),L=r("3e35"),R=r("a523"),T=r("adda"),N=Object(p["a"])(P,F,W,!1,null,null,null),q=N.exports;h()(N,{VApp:j["a"],VBtn:E["a"],VCard:H["a"],VCardText:V["b"],VCardTitle:V["c"],VCarousel:z["a"],VCarouselItem:L["a"],VCol:v["a"],VContainer:R["a"],VImg:T["a"],VRow:x["a"]});var I=r("2f62"),Y=r("0e44"),$=function(){return{token:"",account:"",role:0,email:"",cart:[]}},J=(r("caad"),r("2532"),r("bc3a")),U=r.n(J),X=r("130e"),K=r("3d20"),G=r.n(K),Q=U.a.create({baseURL:"https://ramen666.herokuapp.com/"});Q.interceptors.response.use((function(t){return t}),(function(t){if(t.response){if(401===t.response.status&&"/users/extend"!==t.config.url){var e=t.config;return Q.post("/users/extend",{},{headers:{authorization:"Bearer "+lt.state.user.token}}).then((function(t){var r=t.data;return lt.commit("user/extend",r.result.token),e.headers.authorization="Bearer "+lt.state.user.token,U()(e)})).catch((function(t){return lt.commit("user/logout"),mt.push("/login"),Promise.reject(t)}))}}else"ECONNABORTED"===t.code&&t.message.includes("timeout")?G.a.fire({icon:"error",title:"錯誤",text:"請求逾時"}):G.a.fire({icon:"error",title:"錯誤",text:"網路不穩定"});return Promise.reject(t)})),i["a"].use(X["a"],{axios:U.a,api:Q});var tt=function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e,r){var n,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,Q.post("/users/login",r);case 4:o=t.sent,a=o.data,n("login",a.result),mt.push("/"),G.a.fire({icon:"success",title:"成功",text:"登入成功"}),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),G.a.fire({icon:"error",title:"失敗",text:t.t0.response.data.message});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,r){return t.apply(this,arguments)}}(),et=function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.state,t.prev=1,t.next=4,Q.delete("/users/logout",{headers:{authorization:"Bearer "+n.token}});case 4:r("logout"),mt.push("/"),G.a.fire({icon:"success",title:"成功",text:"登出成功"}),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),G.a.fire({icon:"error",title:"失敗",text:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),rt=function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){var r,n,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.commit,n=e.state,0!==n.token.length){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,Q.get("/users/me",{headers:{authorization:"Bearer "+n.token}});case 6:o=t.sent,a=o.data,r("getInfo",a.result),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](3),r("logout");case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}(),nt=r("5530"),ot=function(t){return Object(nt["a"])({isLogin:t.token.length>0,isAdmin:1===t.role},t)},at=function(t,e){t.token=e.token,t.account=e.account,t.role=e.role,t.email=e.email,t.cart=e.cart},it=function(t,e){t.token="",t.account="",t.role=0,t.email="",t.cart=[]},ct=function(t,e){t.account=e.account,t.role=e.role,t.email=e.email,t.cart=e.cart},st=function(t,e){t.token=e},ut={namespaced:!0,state:$,actions:n,getters:o,mutations:a};i["a"].use(I["a"]);var lt=new I["a"].Store({state:{},mutations:{},actions:{},modules:{user:ut},plugins:[Object(Y["a"])({key:"shop",paths:["user.token"]})]});i["a"].use(O["a"]);var ft=[{path:"/",name:"Home",component:q,meta:{title:"麵屋號"}},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))},meta:{title:"麵屋號 | 品牌介紹"}},{path:"/shop",name:"Shop",component:function(){return r.e("shop").then(r.bind(null,"0fa5"))},meta:{title:"麵屋號 | 網路商城"}},{path:"/product",name:"Product",component:function(){return r.e("product").then(r.bind(null,"d2f1"))},meta:{title:"麵屋號 | 商品"}},{path:"/menu",name:"Menu",component:function(){return r.e("menu").then(r.bind(null,"9a0b"))},meta:{title:"麵屋號 | 菜單"}},{path:"/login",name:"Login",component:function(){return Promise.all([r.e("admin~login~register"),r.e("login")]).then(r.bind(null,"a55b"))},meta:{title:"麵屋號 | 登入"}},{path:"/register",name:"Register",component:function(){return Promise.all([r.e("admin~login~register"),r.e("register")]).then(r.bind(null,"73cf"))},meta:{title:"麵屋號 | 註冊"}},{path:"/cart",name:"Cart",component:function(){return r.e("cart").then(r.bind(null,"b789"))},meta:{title:"麵屋號 | 購物車"}},{path:"/admin",name:"Admin",component:function(){return Promise.all([r.e("admin~login~register"),r.e("admin")]).then(r.bind(null,"3530"))},children:[{path:"",name:"AdminHome",component:function(){return Promise.all([r.e("admin~login~register"),r.e("admin")]).then(r.bind(null,"c732"))},meta:{login:!0,admin:!0,title:"管理 | 購物網"}},{path:"products",name:"AdminProducts",component:function(){return Promise.all([r.e("admin~login~register"),r.e("admin")]).then(r.bind(null,"aa93"))},meta:{login:!0,admin:!0,title:"商品管理 | 購物網"}},{path:"orders",name:"AdminOrders",component:function(){return Promise.all([r.e("admin~login~register"),r.e("admin")]).then(r.bind(null,"ec5c"))},meta:{login:!0,admin:!0,title:"訂單管理 | 購物網"}}]}],dt=new O["a"]({routes:ft});dt.beforeEach((function(t,e,r){var n=lt.getters["user/user"];t.meta.login&&!n.isLogin?r("/login"):t.meta.admin&&!n.isAdmin?r("/"):r()})),dt.afterEach((function(t,e){document.title=t.meta.title}));var mt=dt,pt=r("f309");i["a"].use(pt["a"]);var gt=new pt["a"]({}),ht=r("f9d5"),vt=r.n(ht),bt=(r("4413"),r("c2f0"),{computed:{user:function(){return this.$store.getters["user/user"]}}}),xt=r("657c");r("2bd9");i["a"].component("ImgInputer",xt["a"]),i["a"].use(vt.a),i["a"].mixin(bt),i["a"].config.productionTip=!1,new i["a"]({router:mt,store:lt,vuetify:gt,render:function(t){return t(S)}}).$mount("#app")},c2f0:function(t,e,r){},cf05:function(t,e,r){t.exports=r.p+"img/logo.3c49a073.png"},d9d8:function(t,e,r){t.exports=r.p+"img/know001.408defa0.png"}});
//# sourceMappingURL=app.9ecfe95e.js.map