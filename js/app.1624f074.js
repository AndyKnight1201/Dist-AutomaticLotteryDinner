(function(){"use strict";var e={3423:function(e,t,n){var s=n(5130),o=n(6768);const a={id:"AutoLotteryDinner"},l={class:"h-100",style:{overflow:"auto"}};function r(e,t,n,r,i,c){const u=(0,o.g2)("LoadingScreen"),d=(0,o.g2)("Header"),p=(0,o.g2)("router-view"),w=(0,o.g2)("Footer");return(0,o.uX)(),(0,o.CE)("main",a,[(0,o.bo)((0,o.bF)(u,null,null,512),[[s.aG,!1]]),(0,o.bF)(d),(0,o.Lk)("section",l,[(0,o.bF)(p)]),(0,o.bF)(w)])}const i={class:"loading_screen"},c=(0,o.Lk)("div",{class:"loading_area"},[(0,o.Lk)("span",{class:"loader"}),(0,o.Lk)("div",{class:"mt-3 loading"},"Loading")],-1),u=[c];function d(e,t,n,s,a,l){return(0,o.uX)(),(0,o.CE)("div",i,u)}var p={name:"loading_screen",components:{},data(){return{list_area_loading:!1}},props:{},watch:{},methods:{},created:function(){},mounted:function(){}},w=n(1241);const f=(0,w.A)(p,[["render",d]]);var _=f;const m={class:"header p-3"},h=(0,o.Lk)("h1",null,"✨晚餐自動抽籤🍝",-1),g=[h];function k(e,t,n,s,a,l){return(0,o.uX)(),(0,o.CE)("div",m,g)}var L=n(1387),y={name:"side-bar",components:{},data(){return{selectedSW:{},router:(0,L.rd)(),route:(0,L.lq)()}},computed:{},watch:{},methods:{},created(){},mounted(){}};const v=(0,w.A)(y,[["render",k]]);var b=v;const x={class:"footer px-3 d-flex justify-content-between align-items-center"},D=(0,o.Lk)("div",{class:"d-flex align-items-center",style:{margin:"0 0 0 auto"}},[(0,o.Lk)("span",null,"2024/12/28 ©"),(0,o.eW)("  "),(0,o.Lk)("span",null,"Andy Chao Rights Reserved")],-1),C=[D];function R(e,t,n,s,a,l){return(0,o.uX)(),(0,o.CE)("footer",x,C)}var E={name:"goedge_footer",components:{},data(){return{}},computed:{},watch:{},methods:{},created(){},mounted(){}};const P=(0,w.A)(E,[["render",R]]);var I=P,W={name:"RetrievalAugmentedGeneration",components:{LoadingScreen:_,Header:b,Footer:I},data(){return{}},computed:{},watch:{},methods:{},created(){},mounted(){}};const S=(0,w.A)(W,[["render",r]]);var j=S,N=n(595),M=n(4249);function A(){return{LoadingScreenSW:{state:!1},Left_menu_sw:{expanded:!1,combine:!1},Right_menu_sw:{expanded:!1,combine:!1},Info_window_sw:{show_page:"",close_popup:!1,all_info_window:!1,error_window:!1,error_window_reload:!1,btn_control_info:!1,warning_control_info:!1,success_send_information:!1,confirm:!1,close:!0},Create_window_sw:{show_page:"",close_popup:!1,create_project:!1,create_group:!1,create_channel:!1}}}const F=A(),T={setLoadingScreenSW(e,t){e.LoadingScreenSW.state=t},setLeft_menu_sw(e,t){"string"===typeof t?e.Left_menu_sw[t]=!e.Left_menu_sw[t]:e.Left_menu_sw[t.name]=t.value},setRight_menu_sw(e,t){"string"===typeof t?e.Right_menu_sw[t]=!e.Right_menu_sw[t]:e.Right_menu_sw[t.name]=t.value},setInfo_window_sw(e,t){"close_popup"!==t?(e.Info_window_sw[t.area]=!0,"data_check"in t&&(!0===t.data_check?(e.Info_window_sw.confirm=!0,e.Info_window_sw.close=!0):(e.Info_window_sw.confirm=!1,e.Info_window_sw.close=!0)),e.Info_window_sw.show_page=t.area):(e.Info_window_sw[e.Info_window_sw.show_page]=!1,e.Info_window_sw.show_page=""),console.log(e.Info_window_sw)},setCreate_window_sw(e,t){"close_popup"!==t?(e.Create_window_sw[t]=!0,e.Create_window_sw.show_page=t):(e.Create_window_sw[e.Create_window_sw.show_page]=!1,e.Create_window_sw.show_page=""),console.log(e.Create_window_sw)}},O={updateLoadingScreenSW({commit:e},t){e("setLoadingScreenSW",t)},updateLeft_menu_sw({commit:e},t){e("setLeft_menu_sw",t)},updateRight_menu_sw({commit:e},t){e("setRight_menu_sw",t)},updateInfo_window_sw({commit:e},t){e("setInfo_window_sw",t)},updateMain_area_sw({commit:e},t){e("setMain_area_sw",t)},updateCreate_window_sw({commit:e},t){e("setCreate_window_sw",t)}},X={getLoadingScreenSW:e=>e.LoadingScreenSW.state,getLeft_menu_sw:e=>e.Left_menu_sw,getRight_menu_sw:e=>e.Right_menu_sw,getInfo_window_sw:e=>e.Info_window_sw,getMain_area_sw:e=>e.Main_area_sw,getCreate_window_sw:e=>e.Create_window_sw};var H={namespaced:!0,state:F,mutations:T,actions:O,getters:X},$=n(8626),K=n.n($);function U(){return{placesList:["鍋湯會","貴族世家(桃園)","千葉火鍋(新竹)","千葉火鍋(竹北)","紅吱吱","買便當","西堤牛排","竹東排骨酥","金元寶餃子大王"],history:[],noRepeat:!1}}const Q=U(),z={setNewPlace(e,t){e.placesList.push(t),console.log("placesList更新",e.placesList)},deletePlace(e,t){e.placesList.splice(t,1),console.log("placesList更新",e.placesList)},setNoRepeat(e,t){e.noRepeat=t?K().cloneDeep(t):!e.noRepeat,console.log("noRepeat更新",e.placesList)}},J={updateNewPlace({commit:e},t){e("setNewPlace",t)},updateDeletePlace({commit:e},t){e("deletePlace",t)},updateNoRepeat({commit:e},t){e("setNoRepeat",t)}},V={getPlacesList:e=>e.placesList,getHistory:e=>e.history,getNoRepeat:e=>e.noRepeat};var Z={namespaced:!0,state:Q,mutations:z,actions:J,getters:V};const q=(0,M.y$)({namespaced:!0,state:{},modules:{all_switch:H,lottery_data:Z},mutations:{},actions:{},getters:{}});var G=q,Y=n(4232);const B={id:"lottery_dinner",class:"d-flex w-100 h-100"},ee={class:"left_area p-3 d-flex flex-column w-50 flex-shrink-0"},te={class:"d-flex mb-2",style:{"flex-wrap":"wrap"}},ne={class:"d-flex justify-content-center align-items-center"},se=(0,o.Lk)("span",{class:"me-3",style:{"flex-shrink":"0"}},"老爸不想開車",-1),oe={class:"d-flex justify-content-center align-items-center"},ae=(0,o.Lk)("span",{class:"me-3",style:{"flex-shrink":"0"}},"不想吃太好",-1),le={class:"d-flex justify-content-center align-items-center"},re=(0,o.Lk)("span",{class:"me-3",style:{"flex-shrink":"0"}},"不想吃很貴的",-1),ie=(0,o.Lk)("input",{class:"me-2",style:{transform:"scale(1.5)",cursor:"pointer"},type:"checkbox"},null,-1),ce=(0,o.Lk)("span",{class:"me-3",style:{"flex-shrink":"0"}},"Rickrolling🕺",-1),ue=[ie,ce],de=(0,o.Lk)("input",{class:"me-2",style:{transform:"scale(1.5)",cursor:"pointer"},type:"checkbox"},null,-1),pe=(0,o.Lk)("span",{class:"me-3",style:{"flex-shrink":"0"}},"要不要吃🍈",-1),we=[de,pe],fe=(0,o.Lk)("input",{class:"me-2",style:{transform:"scale(1.5)",cursor:"pointer"},type:"checkbox"},null,-1),_e=(0,o.Lk)("span",{class:"me-3",style:{"flex-shrink":"0"}},"知道ㄌ🥗",-1),me=[fe,_e],he={class:"d-flex"},ge=["disabled"],ke={key:0,class:"h-100 pb-3 d-flex flex-column justify-content-center align-items-center"},Le=(0,o.Lk)("h3",{class:"p-2",style:{"font-size":"24px",color:"red","user-select":"none"}},"✨抽籤結果✨",-1),ye={style:{"font-size":"67px","font-weight":"800",color:"green"}},ve={class:"right_area w-50 h-100 d-flex flex-shrink-0"},be={class:"places_list w-50 h-100 flex-shrink-0",style:{overflow:"auto"}},xe=(0,o.Lk)("h5",{class:"p-3"},"地點清單：",-1),De={class:"p-3",style:{overflow:"auto"}},Ce=["onClick"],Re={class:"history_list w-50 h-100 flex-shrink-0",style:{overflow:"auto","border-left":"1px solid black"}},Ee=(0,o.Lk)("h5",{class:"p-3"},"歷史紀錄：",-1),Pe={class:"p-3",style:{overflow:"auto"}};function Ie(e,t,n,a,l,r){return(0,o.uX)(),(0,o.CE)("section",B,[(0,o.Lk)("section",ee,[(0,o.Lk)("div",te,[(0,o.Lk)("label",ne,[(0,o.bo)((0,o.Lk)("input",{class:"me-2",style:{transform:"scale(1.5)",cursor:"pointer"},type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>l.DadDoesntWant=e)},null,512),[[s.lH,l.DadDoesntWant]]),se]),(0,o.Lk)("label",oe,[(0,o.bo)((0,o.Lk)("input",{class:"me-2",style:{transform:"scale(1.5)",cursor:"pointer"},type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=e=>l.DoesntWantEatTooMuch=e)},null,512),[[s.lH,l.DoesntWantEatTooMuch]]),ae]),(0,o.Lk)("label",le,[(0,o.bo)((0,o.Lk)("input",{class:"me-2",style:{transform:"scale(1.5)",cursor:"pointer"},type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=e=>l.DoesntWantEatExpensive=e)},null,512),[[s.lH,l.DoesntWantEatExpensive]]),re]),(0,o.Lk)("label",{class:"d-flex justify-content-center align-items-center",onClick:t[3]||(t[3]=(0,s.D$)((e=>r.openInNewTab("Rickrolling")),["prevent"]))},ue),(0,o.Lk)("label",{class:"d-flex justify-content-center align-items-center",onClick:t[4]||(t[4]=(0,s.D$)((e=>r.openInNewTab("cantaloupe")),["prevent"]))},we),(0,o.Lk)("label",{class:"d-flex justify-content-center align-items-center",onClick:t[5]||(t[5]=(0,s.D$)((e=>r.openInNewTab("IKnown")),["prevent"]))},me)]),(0,o.Lk)("div",he,[(0,o.Lk)("button",{class:"btn btn-danger me-3",onClick:t[6]||(t[6]=(...e)=>r.drawRandomPlace&&r.drawRandomPlace(...e)),disabled:0===r.places.length},"抽籤",8,ge)]),l.result?((0,o.uX)(),(0,o.CE)("div",ke,[Le,(0,o.Lk)("p",ye,(0,Y.v_)(l.result),1)])):(0,o.Q3)("",!0)]),(0,o.Lk)("section",ve,[(0,o.Lk)("div",be,[xe,(0,o.Lk)("ul",De,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.places,((e,t)=>((0,o.uX)(),(0,o.CE)("li",{class:"mb-2 p-2 d-flex justify-content-between align-items-center",key:t},[(0,o.Lk)("p",null,(0,Y.v_)(e),1),(0,o.Lk)("button",{class:"btn btn-danger",onClick:e=>r.removePlace(t)},"刪除",8,Ce)])))),128))])]),(0,o.Lk)("div",Re,[Ee,(0,o.Lk)("ul",Pe,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.history,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.time,class:"mb-2 p-2 d-flex justify-content-between align-items-center"},(0,Y.v_)(e.time)+" - "+(0,Y.v_)(e.place),1)))),128))])])])])}n(3725),n(5019);var We={name:"DocumentLibrary",components:{},data(){return{router:(0,L.rd)(),oute:(0,L.lq)(),newPlace:"",result:null,history:[],DadDoesntWant:!1,DoesntWantEatTooMuch:!1,DoesntWantEatExpensive:!1,lastResult:null}},computed:{...(0,M.L8)("lottery_data",["getPlacesList","getHistory","getNoRepeat"]),places(){let e=K().cloneDeep(this.getPlacesList);return this.DadDoesntWant&&(e=e.filter((e=>!e.includes("貴族世家(桃園)")))),this.DoesntWantEatTooMuch&&(e=e.filter((e=>!e.includes("貴族世家"))),e=e.filter((e=>!e.includes("千葉火鍋"))),e=e.filter((e=>!e.includes("西堤牛排")))),this.DoesntWantEatExpensive&&(e=e.filter((e=>!e.includes("千葉火鍋(竹北)"))),e=e.filter((e=>!e.includes("西堤牛排")))),e}},watch:{},methods:{...(0,M.i0)("lottery_data",["updateNewPlace","updateDeletePlace","updateNoRepeat"]),addPlace(){""!==this.newPlace.trim()?this.updateNewPlace(K().cloneDeep(this.newPlace.trim())):alert("請輸入有效地點！")},removePlace(e){this.updateDeletePlace(e)},drawRandomPlace(){if(0===this.places.length)return void alert("目前沒有任何地點可供抽籤！");const e=Math.floor(Math.random()*this.places.length);this.result=this.places[e];const t=new Date,n=`${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;this.history.unshift({place:this.result,time:n}),this.lastResult=this.result},openInNewTab(e){"Rickrolling"===e&&window.open("https://youtu.be/dQw4w9WgXcQ?si=Kmp2rH8AlML4hspH","_blank"),"cantaloupe"===e&&window.open("https://youtu.be/zkd8bJF15pQ?si=TnmTgZYMoJ-IUZ7l","_blank"),"IKnown"===e&&window.open("https://youtu.be/A9sEPxLJSDc?si=3NUWN6CMcEFlfvnZ","_blank")}},created(){},mounted(){}};const Se=(0,w.A)(We,[["render",Ie]]);var je=Se;const Ne=[{path:"/",redirect:"/lotteryDinner"},{path:"/:pathMatch(.*)*",name:"notFoundRedirect",redirect:"/lotteryDinner"},{path:"/lotteryDinner",name:"lotteryDinner",component:je}],Me=(0,L.aE)({history:(0,L.LA)(),routes:Ne});var Ae=Me,Fe=n(6726);n(6587);const Te=(0,N.A)(),Oe=(0,s.Ef)(j);Oe.config.globalProperties.emitter=Te,Oe.use(Fe.Ay).use(G).use(Ae).mount("#app")}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var a=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,s,o,a){if(!s){var l=1/0;for(u=0;u<e.length;u++){s=e[u][0],o=e[u][1],a=e[u][2];for(var r=!0,i=0;i<s.length;i++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](s[i])}))?s.splice(i--,1):(r=!1,a<l&&(l=a));if(r){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[s,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,a,l=s[0],r=s[1],i=s[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(i)var u=i(n)}for(t&&t(s);c<l.length;c++)a=l[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},s=self["webpackChunkautomatic_lottery"]=self["webpackChunkautomatic_lottery"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[504],(function(){return n(3423)}));s=n.O(s)})();
//# sourceMappingURL=app.1624f074.js.map