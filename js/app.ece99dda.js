(function(){"use strict";var t={4493:function(t,e,r){function n(t,e){let r=null;return function(...n){r&&clearTimeout(r),r=setTimeout((()=>{t.apply(this,n)}),e)}}function o(t){return Number.parseFloat(t).toFixed(2)}r.d(e,{D:function(){return n},Q:function(){return o}})},6277:function(t,e,r){var n=r(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1),e("tabbar",[e("tabbar-item-list",{attrs:{"item-list":t.itemList}})],1)],1)},i=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab-bar-box",attrs:{id:"tab-bar-box"}},[t._t("default",(function(){return[t._v("默认插槽内容")]}))],2)},s=[],c={name:"Tabbar"},u=c,l=r(3736),f=(0,l.Z)(u,a,s,!1,null,"652916ca",null),d=f.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabbar-list"},t._l(t.itemList,(function(t){return e("tabbar-item",{key:t.title,attrs:{item:t}})})),1)},p=[],h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabbar-item",on:{click:function(e){return t.itemClick(t.item.path)}}},[e("img",{directives:[{name:"show",rawName:"v-show",value:!t.isActive,expression:"!isActive"}],attrs:{src:t.item.img}}),e("img",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],attrs:{src:t.item.activeImg}}),e("div",{staticClass:"title",class:{active:t.isActive}},[t._v(t._s(t.item.title))])])},v=[],b={name:"TabbarItem",data(){return{}},computed:{isActive(){return this.$route.path.includes(this.item.path)}},methods:{itemClick(t){t!==this.$route.path&&this.$router.replace(t)}},props:{item:{type:Object,required:!0}}},g=b,y=(0,l.Z)(g,h,v,!1,null,"2313feb8",null),_=y.exports,C={name:"TabbarItemList",props:{itemList:{type:Array,required:!0}},components:{TabbarItem:_}},w=C,O=(0,l.Z)(w,m,p,!1,null,"a260157a",null),T=O.exports,A={name:"app",data(){return{itemList:[{img:r(9537),activeImg:r(996),path:"/home",title:"首页"},{img:r(4166),activeImg:r(1488),path:"/category",title:"分类"},{img:r(782),activeImg:r(7870),path:"/cart",title:"购物车"},{img:r(8561),activeImg:r(5120),path:"/profile",title:"我的"}]}},components:{Tabbar:d,TabbarItemList:T},created(){window.sessionStorage?(sessionStorage.getItem("store")&&this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("store")))),window.addEventListener("beforeunload",(()=>{sessionStorage.setItem("store",JSON.stringify(this.$store.state))}))):console.error("不支持 sessionStorage")}},x=A,j=(0,l.Z)(x,o,i,!1,null,"55f3999f",null),k=j.exports,E=r(2631);n["default"].use(E.ZP);const P=()=>Promise.all([r.e(707),r.e(21),r.e(297)]).then(r.bind(r,4765)),S=()=>r.e(890).then(r.bind(r,7890)),N=()=>Promise.all([r.e(142),r.e(169)]).then(r.bind(r,509)),I=()=>Promise.all([r.e(142),r.e(707),r.e(738)]).then(r.bind(r,5903)),L=()=>Promise.all([r.e(142),r.e(707),r.e(21),r.e(424)]).then(r.bind(r,6262)),$=[{path:"/",redirect:"/home"},{path:"/home",component:P},{path:"/profile",component:S},{path:"/cart",component:N},{path:"/category",component:I},{path:"/detail/:iid",component:L}],D=new E.ZP({mode:"history",base:"/",routes:$});var F=D,Z=r(3822),R=r(8762);n["default"].use(Z.ZP);var K=new Z.ZP.Store({state:{carts:{}},getters:{cartsCount(t,e){return e.cartsKeys.length},cartsValues(t){return Object.values(t.carts)},cartsKeys(t){return Object.keys(t.carts)},cartsChose(t){return Object.values(t.carts).filter((t=>t.checked))},cartsChoseIds(t,e){return e.cartsChose.map((t=>t.iid))},cartsChoseCount(t,e){return e.cartsChose.length},cartsChoseTotal(t,e){return e.cartsChose.map((t=>parseFloat(t.realPrice)*t.num)).reduce(((t,e)=>t+e),0)},cartsIsChose:t=>e=>t.carts[e].checked,cartIsAllChose(t,e){return e.cartsChoseCount===e.cartsCount}},mutations:{[R.yf](t,e){let r=e.iid;if(void 0!==t.carts[r]){let e=t.carts[r];e.num+=1}else n["default"].set(t.carts,e.iid,e)},[R.dh](t,{num:e,iid:r}){if(void 0!==t.carts[r]){let n=t.carts[r];n.num=e}else console.error(`Not Found Product iid: ${r}`)},[R.RS](t,{checked:e,iid:r}){if(void 0!==t.carts[r]){let n=t.carts[r];n.checked=e}else console.error(`Not Found Product iid: ${r}`)},[R.r$](t,e){Object.values(t.carts).forEach((t=>t.checked=e))},[R._4](t,e){console.log(e),e.forEach((e=>n["default"]["delete"](t.carts,e)))}},actions:{[R.fc](t,e){return new Promise(((r,n)=>{try{t.commit(R.yf,e),r()}catch(o){n(o)}}))}},modules:{}}),M=r(4493),U=r(6531),q=r.n(U),B=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[e("div",{staticClass:"tips"},[t._v(t._s(t.message))])])},H=[],J={name:"Toast",data(){return{message:"",isShow:!1}},methods:{show(t,e=1500){this.message=t,this.isShow=!0,setTimeout((()=>{this.message="",this.isShow=!1}),e)}}},Q=J,V=(0,l.Z)(Q,B,H,!1,null,"ad65ab2a",null),Y=V.exports;const z={install:t=>{const e=t.extend(Y),r=new e;r.$mount(document.createElement("div")),document.body.appendChild(r.$el),t.prototype.$toast=r}};var G=z,W=r(4926),X=r.n(W);n["default"].use(q()),n["default"].use(G),n["default"].use(X(),{preLoad:2,error:r.e(203).then(r.t.bind(r,9203,17)),attempt:1}),n["default"].filter("filterPrice",M.Q),n["default"].config.productionTip=!1,n["default"].prototype.$bus=new n["default"],new n["default"]({router:F,store:K,toast:G,render:t=>t(k)}).$mount("#app")},8762:function(t,e,r){r.d(e,{RS:function(){return a},_4:function(){return c},dh:function(){return i},fc:function(){return o},r$:function(){return s},yf:function(){return n}});const n="ADD_CART",o="ADD_CART_ASYNC",i="UPDATE_CART_NUM",a="UPDATE_CART_CHECKED",s="UPDATE_CART_CHECKED_ALL",c="DELETE_CART"},782:function(t,e,r){t.exports=r.p+"img/cart.b7cf4b23.svg"},7870:function(t,e,r){t.exports=r.p+"img/cart_active.3bf6ff8c.svg"},4166:function(t,e,r){t.exports=r.p+"img/category.df2cbb0d.svg"},1488:function(t,e,r){t.exports=r.p+"img/category_active.2222fc82.svg"},9537:function(t,e,r){t.exports=r.p+"img/home.b4d4a58d.svg"},996:function(t,e,r){t.exports=r.p+"img/home_active.9de4e92c.svg"},8561:function(t,e,r){t.exports=r.p+"img/profile.0eebe132.svg"},5120:function(t,e,r){t.exports=r.p+"img/profile_active.a0ccf9c8.svg"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,n,o,i){if(!n){var a=1/0;for(l=0;l<t.length;l++){n=t[l][0],o=t[l][1],i=t[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((function(t){return r.O[t](n[c])}))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,o,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};t=t||[null,e({}),e([]),e(e)];for(var s=2&o&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((function(t){a[t]=function(){return n[t]}}));return a["default"]=function(){return n},r.d(i,a),i}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,n){return r.f[n](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{21:"70c49c5d",142:"f2b699a7",169:"6f76d6f8",203:"cd9464a7",297:"ed1f8c1f",424:"c05d3ff7",707:"d30a115f",738:"55488604",890:"6ba5ef4e"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+t+"."+{169:"05d91291",297:"f8798040",424:"f6f72eda",738:"c5780644",890:"56c1ced3"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="mall-mogujie:";r.l=function(n,o,i,a){if(t[n])t[n].push(o);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==e+i){s=f;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",e+i),s.src=n),t[n]=[o];var d=function(e,r){s.onerror=s.onload=null,clearTimeout(m);var o=t[n];if(delete t[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(r)})),e)return e(r)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t=function(t,e,r,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,o.parentNode.removeChild(o),n(c)}};return o.onerror=o.onload=i,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){o=a[n],i=o.getAttribute("data-href");if(i===t||i===e)return o}},n=function(n){return new Promise((function(o,i){var a=r.miniCssF(n),s=r.p+a;if(e(a,s))return o();t(n,s,o,i)}))},o={143:0};r.f.miniCss=function(t,e){var r={169:1,297:1,424:1,738:1,890:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=n(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};r.f.j=function(e,n){var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(r,n){o=t[e]=[r,n]}));n.push(o[2]=i);var a=r.p+r.u(e),s=new Error,c=function(n){if(r.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};r.l(a,c,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,i,a=n[0],s=n[1],c=n[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var l=c(r)}for(e&&e(n);u<a.length;u++)i=a[u],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(l)},n=self["webpackChunkmall_mogujie"]=self["webpackChunkmall_mogujie"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(6277)}));n=r.O(n)})();
//# sourceMappingURL=app.ece99dda.js.map