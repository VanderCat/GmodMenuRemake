(function(e){function t(t){for(var o,r,s=t[0],u=t[1],c=t[2],m=0,d=[];m<s.length;m++)r=s[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},i=[];function r(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8910af59"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=o);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=r(e);var c=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}a[e]=void 0}};var m=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a9d":function(e,t,n){"use strict";n("2fc4")},"2fc4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"app"},[n("v-main",{attrs:{id:"main"}},[n("router-view")],1),n("v-footer",{attrs:{padless:"",app:""}},[n("v-toolbar",{attrs:{dense:"",dark:""}},["/"!=e.$router.currentRoute.path?n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$router.push("/")}}},[n("v-icon",[e._v("mdi-arrow-left")])],1):e._e(),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-alert")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-wrench")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-translate")])],1),n("Gamemode",{attrs:{gamemodes:e.gamemodes,selectedItem:2}})],1)],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",a,!1),o),[n("v-icon",[e._v("mdi-gamepad-square")])],1)]}}])},[n("v-list",[n("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedItem,callback:function(t){e.selectedItem=t},expression:"selectedItem"}},e._l(e.gamemodes,(function(t,o){return n("v-list-item",{key:o},[n("v-list-item-avatar",{attrs:{height:"32",width:"32"}},[n("img",{attrs:{src:"../gamemodes/"+t.name+"/icon24.png"}})]),n("v-list-item-title",[e._v(e._s(t.title))])],1)})),1)],1)],1)],1)},s=[],u={name:"gamemode",props:["gamemodes","selectedItem"]},c=u,m=n("2877"),l=n("6544"),d=n.n(l),p=n("8336"),f=n("132d"),v=n("8860"),h=n("da13"),w=n("8270"),g=n("1baa"),b=n("5d23"),y=n("e449"),_=Object(m["a"])(c,r,s,!1,null,null,null),V=_.exports;d()(_,{VBtn:p["a"],VIcon:f["a"],VList:v["a"],VListItem:h["a"],VListItemAvatar:w["a"],VListItemGroup:g["a"],VListItemTitle:b["c"],VMenu:y["a"]});var I={name:"App",data:function(){return{gamemodes:{1:{menusystem:!1,maps:"",name:"base",title:"Base"},2:{menusystem:!0,maps:"",name:"fretta",title:"Fretta Gamemode Base"},3:{menusystem:!0,maps:"^gm_|^gmod_",name:"sandbox",title:"Sandbox"},4:{menusystem:!0,maps:"^ttt_",name:"terrortown",title:"Trouble In Terrorist Town"}}}},components:{Gamemode:V},created:function(){this.$store.commit("UpdateEngine"),this.$store.state.IN_ENGINE&&console.log("RUNLUA:LoadNewsList()")}},x=I,k=(n("5c0b"),n("7496")),C=n("553a"),S=n("f6c4"),L=n("2fa4"),N=n("71d9"),U=Object(m["a"])(x,a,i,!1,null,null,null),O=U.exports;d()(U,{VApp:k["a"],VBtn:p["a"],VFooter:C["a"],VIcon:f["a"],VMain:S["a"],VSpacer:L["a"],VToolbar:N["a"]});n("d3b7"),n("3ca3"),n("ddb0");var D=n("8c4f"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"app"},[n("v-navigation-drawer",{attrs:{app:"",permanent:""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[e._v(" Garry's Mod ")]),n("v-list-item-subtitle",[e._v(" Materialized ")])],1)],1),n("v-divider"),e._l(e.entries,(function(t,o){return n("v-list",{key:o,attrs:{dense:""}},[n("v-list-item-group",e._l(t,(function(t,o){return n("v-list-item",{key:o,on:{click:t.action}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.name)}})],1)],1)})),1)],1)}))],2),n("div",{staticStyle:{display:"flex","flex-direction":"row-reverse"}},[n("div"),n("div",{staticStyle:{margin:"64px"}},[n("news",{attrs:{news:this.$store.state.news}})],1)])],1)},$=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{"max-width":"512","max-height":"256","min-width":"512","min-height":"256"}},[n("v-carousel",{attrs:{cycle:"","show-arrows-on-hover":"",height:"256"}},e._l(e.news,(function(t,o){return n("v-carousel-item",{key:o},[n("v-sheet",{staticClass:"newsInfo"},[n("h3",[e._v(e._s(t.Title))]),n("div",[e._v(e._s(t.SummaryHtml))])]),n("v-img",{attrs:{src:t.HeaderImage,"aspect-ratio":"1.7778"}})],1)})),1)],1)},E=[],G={name:"news",data:function(){return{}},props:["news"]},A=G,H=(n("1a9d"),n("b0af")),P=n("5e66"),M=n("3e35"),q=n("adda"),R=n("8dd9"),B=Object(m["a"])(A,j,E,!1,null,null,null),F=B.exports;d()(B,{VCard:H["a"],VCarousel:P["a"],VCarouselItem:M["a"],VImg:q["a"],VSheet:R["a"]});var J={data:function(){return{entries:[[{icon:"mdi-gamepad-variant",name:"New Game",action:function(){window.Vue.$router.push("/newgame")}},{icon:"mdi-account-multiple",name:"Find Game",action:function(){window.Vue.$router.push("/servers")}}],[{icon:"mdi-toy-brick-search",name:"Addons",action:function(){window.Vue.$router.push("/workshop/addons")}},{icon:"mdi-content-copy",name:"Dupes",action:function(){window.Vue.$router.push("/workshop/dupes")}},{icon:"mdi-content-save-all",name:"Saves",action:function(){window.Vue.$router.push("/workshop/saves")}},{icon:"mdi-video",name:"Demos",action:function(){window.Vue.$router.push("/workshop/demos")}}],[{icon:"mdi-cog",name:"Options",action:function(){window.lua.runUICommand("OpenOptionsDialog")}}],[{icon:"mdi-exit-to-app",name:"Quit",action:function(){window.lua.runUICommand("Quit")}},{icon:"mdi-exit-run",name:"Disconnect",action:function(){window.lua.runUICommand("Disconnect")}}]]}},components:{news:F}},Q=J,z=n("ce7e"),W=n("34c3"),K=n("f774"),X=Object(m["a"])(Q,T,$,!1,null,null,null),Y=X.exports;d()(X,{VApp:k["a"],VDivider:z["a"],VIcon:f["a"],VList:v["a"],VListItem:h["a"],VListItemContent:b["a"],VListItemGroup:g["a"],VListItemIcon:W["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"],VNavigationDrawer:K["a"]}),o["a"].use(D["a"]);var Z=[{path:"/",name:"Main Menu",component:Y},{path:"/workshop/:type",name:"Workshop",component:function(){return n.e("about").then(n.bind(null,"fba8"))}},{path:"/newgame",name:"New Game",component:function(){return n.e("about").then(n.bind(null,"2871"))}},{path:"/servers",name:"Multiplayer",component:function(){return n.e("about").then(n.bind(null,"4388"))}}],ee=new D["a"]({routes:Z}),te=ee,ne=(n("d1e78"),n("f309"));o["a"].use(ne["a"]);var oe=new ne["a"]({icons:{iconfont:"md"}}),ae=n("2f62");o["a"].use(ae["a"]);var ie=new ae["a"].Store({state:{IN_ENGINE:!1,news:[{HeaderImage:"img/whatsnew.png",Title:"December 2018 Hotfix",SummaryHtml:"A security hotfix",Url:"https://google.com/?q=1",Date:Date.now()},{HeaderImage:"img/whatsnew.png",Title:"December 2018 Coldfix",SummaryHtml:"A very long security hotfix example indeed like it is so long that i dont know how I will fit this stuff in the box",Url:"https://google.com/?q=4",Date:0},{Title:"Post without an image",SummaryHtml:"They are very hard to make",Url:"https://google.com/?q=2",Date:Date.now()-6048e5-1e4},{HeaderImage:"img/whatsnew.png",Title:"December 2018 is a very long Security Hotfix that means we need to handle this",SummaryHtml:"A security hotfix",Url:"https://google.com/?q=3",Date:Date.now()-6048e5+1e4}]},mutations:{UpdateNews:function(e,t){e.news=t},UpdateEngine:function(e){e.IN_ENGINE=-1!=navigator.userAgent.indexOf("Valve Source Client")}},actions:{},modules:{}}),re=n("9944");window.UpdateNewsList=re.UpdateNewsList,window.lua=re.lua,o["a"].config.productionTip=!1,window.Vue=new o["a"]({router:te,vuetify:oe,store:ie,render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},9944:function(e,t){e.exports={UpdateNewsList:function(e,t){window.Vue.$store.commit("UpdateNews",e,t)},lua:{run:function(e){console.log("RUNLUA:"+e)},runUICommand:function(e){this.run("RunGameUICommand('"+e+"')")},playSound:function(e){this.run("surface.PlaySound('"+e+"')")},runHook:function(e){this.run("hook.Run("+e+")")},runConsoleCommand:function(e,t){this.run("RunConsoleCommand('"+e+("undefined"===typeof t||null===t?"":", '"+t+"'")+")")}}}},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.71451c3b.js.map