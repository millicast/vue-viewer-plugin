(function(){"use strict";var e={6322:function(e,t,s){var n=s(9242),i=s(3396);const a={id:"container",class:"row"},r={id:"video-player",class:"col d-flex align-items-center py-3"},o={key:1,class:"alert alert-danger fade show",role:"alert"};function l(e,t,s,n,l,u){const c=(0,i.up)("VideoPlayer"),d=(0,i.up)("LiveChat");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",r,[l.streamId.accountId&&l.streamId.streamName?((0,i.wg)(),(0,i.j4)(c,{key:0,paramsOptions:l.streamId,class:"video-container"},null,8,["paramsOptions"])):((0,i.wg)(),(0,i.iD)("div",o," You have not settled your Millicast credentials in the .ENV file. "))]),(0,i.Wm)(d)])}var u=s(7139);const c={key:0,id:"chat",class:"col-lg-3"},d={id:"chat-container",class:"card"},m={class:"card-header msg-head"},p={class:"d-flex bd-highlight"},g={class:"img-cont"},h={class:"header-profile-image d-flex align-items-center justify-content-center"},f={class:"user-info"},b=(0,i._)("span",null,"Live chat",-1),v=(0,i._)("i",{class:"bi bi-gear"},null,-1),w=[v],y={key:0,class:"action-menu"},_=(0,i._)("i",{class:"bi bi-pen"},null,-1),M={id:"chat-list",class:"card-body msg-card-body pb-0 sc1"},N=["id"],x={key:0,class:"img-cont-msg mr-2"},S={class:"profile-image d-flex align-items-center justify-content-center"},k={key:1,class:"msg-container"},O={class:"message-content"},D={class:"user-name"},U={class:"msg-time"},j={key:2,class:"msg-container-send"},T={class:"msg-time-send"},I={class:"card-footer"},Y={class:"input-group"},A=(0,i._)("div",{class:"input-group-append"},[(0,i._)("button",{id:"emoji-btn",class:"input-group-text"})],-1),V={class:"input-group-append"},z=(0,i._)("i",{class:"bi bi-arrow-right-circle"},null,-1),C=[z],E={key:1},L=(0,i._)("div",{class:"alert alert-danger fade show"}," You have not settled your PubNub credentials in the .ENV file. ",-1),P=[L];function q(e,t,s,a,r,o){const l=(0,i.up)("b-form-input"),v=(0,i.up)("b-form-group"),z=(0,i.up)("b-modal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(z,{modelValue:r.modalShow,"onUpdate:modelValue":t[2]||(t[2]=e=>r.modalShow=e),title:"Change username","ok-only":""},{default:(0,i.w5)((()=>[(0,i._)("form",{ref:"form",onSubmit:t[1]||(t[1]=(0,n.iM)(((...t)=>e.handleSubmit&&e.handleSubmit(...t)),["stop","prevent"]))},[(0,i.Wm)(v,{label:"Username","label-for":"name-input","invalid-feedback":"This will only affect your messages from now on."},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{id:"name-input",modelValue:r.userName,"onUpdate:modelValue":t[0]||(t[0]=e=>r.userName=e),required:""},null,8,["modelValue"])])),_:1})],544)])),_:1},8,["modelValue"]),r.pubnubSettled?((0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",d,[(0,i._)("div",m,[(0,i._)("div",p,[(0,i._)("div",g,[(0,i._)("div",h,[(0,i._)("p",null,(0,u.zw)(o.initialUserName(r.userName)),1)])]),(0,i._)("div",f,[b,(0,i._)("p",null,(0,u.zw)(r.userName),1)])]),(0,i._)("span",{id:"action-menu-btn",onClick:t[3]||(t[3]=(...e)=>o.toggleActionMenu&&o.toggleActionMenu(...e))},w),r.showActionMenu?((0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("ul",null,[(0,i._)("li",{onClick:t[4]||(t[4]=(...e)=>o.changeUsername&&o.changeUsername(...e))},[_,(0,i.Uk)(" Change username")])])])):(0,i.kq)("",!0)]),(0,i._)("div",M,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.messages,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id,id:"m"+e.id,class:(0,u.C_)(["d-flex mb-4",o.messageAligne(e.userName)])},[o.isUser(e.userName)?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",x,[(0,i._)("div",S,[(0,i._)("p",null,(0,u.zw)(o.initialUserName(e.userName)),1)])])),o.isUser(e.userName)?((0,i.wg)(),(0,i.iD)("div",j,[(0,i._)("p",null,(0,u.zw)(e.text),1),(0,i._)("span",T,(0,u.zw)(e.time),1)])):((0,i.wg)(),(0,i.iD)("div",k,[(0,i._)("div",O,[(0,i._)("span",D,(0,u.zw)(e.userName),1),(0,i._)("p",null,(0,u.zw)(e.text),1)]),(0,i._)("span",U,(0,u.zw)(e.time),1)]))],10,N)))),128))]),(0,i._)("div",I,[(0,i._)("div",Y,[A,(0,i.wy)((0,i._)("input",{id:"text-msg",type:"text","onUpdate:modelValue":t[5]||(t[5]=e=>r.textMsg=e),onKeyup:t[6]||(t[6]=(0,n.D2)(((...e)=>o.publishSampleMessage&&o.publishSampleMessage(...e)),["enter"])),class:"form-control",placeholder:"Type your message..."},null,544),[[n.nr,r.textMsg]]),(0,i._)("div",V,[(0,i._)("button",{id:"send-btn",onClick:t[7]||(t[7]=(...e)=>o.publishSampleMessage&&o.publishSampleMessage(...e)),class:"input-group-text"},C)])])])])])):((0,i.wg)(),(0,i.iD)("div",E,P))],64)}s(7658);var K=s(7690);const F=s(8266),W="sec-c-YTk0OTgxY2QtMDE1NS00YzFiLTllNDEtY2M4YTc2MGI1N2Nis",Z=W?new F({publishKey:"pub-c-a28ab223-731d-429c-bc65-036855275f9d",subscribeKey:"sub-c-fb440493-81a5-407c-9dcf-2f2001d1ead2",uuid:"sec-c-YTk0OTgxY2QtMDE1NS00YzFiLTllNDEtY2M4YTc2MGI1N2Nis"}):null;var H={data(){return{showActionMenu:!1,userName:K.ZP.internet.userName(),messages:[],textMsg:"",streamId:"tnJhvK/l3yjerc8",pubnubSettled:W,modalShow:!1}},methods:{async publishSampleMessage(){if(""!==this.textMsg){const e=this.textMsg;this.resetInput(),await Z.publish({channel:this.streamId,message:{userName:this.userName,text:e,time:this.formatTime()}})}},subscribe(){Z.subscribe({channels:[this.streamId]})},pubnubListeners(){Z.addListener({message:e=>{this.messages.push({id:this.messages.length,userName:e.message.userName,text:e.message.text,time:e.message.time}),this.waitForElm("#m"+this.messages.length).then((e=>{e.scrollIntoView({behaviour:"smooth"})}))}})},messageAligne(e){return this.isUser(e)?{"justify-content-end":this.isUser}:{"justify-content-start":this.isUser}},resetInput(){this.textMsg=""},isUser(e){return this.userName===e},initialUserName(e){return e.charAt(0)},waitForElm(e){return new Promise((t=>{if(document.querySelector(e))return t(document.querySelector(e));const s=new MutationObserver((()=>{document.querySelector(e)&&(t(document.querySelector(e)),s.disconnect())}));s.observe(document.body,{childList:!0,subtree:!0})}))},formatTime(){var e=new Date,t=e.getHours(),s=e.getMinutes(),n=t>=12?"p.m":"a.m";t%=12,t=t||12,s=s<10?"0"+s:s;var i=t+":"+s+" "+n;return i},toggleActionMenu(){this.showActionMenu=!this.showActionMenu},changeUsername(){this.modalShow=!this.modalShow,this.toggleActionMenu()}},mounted(){this.pubnubSettled&&(this.pubnubListeners(),this.subscribe())}},G=s(89);const J=(0,G.Z)(H,[["render",q]]);var Q=J,B={name:"App",components:{LiveChat:Q},data(){return{streamId:{accountId:"tnJhvK",streamName:"l3yjerc8"}}}};const R=(0,G.Z)(B,[["render",l],["__scopeId","data-v-254750a6"]]);var X=R,$=s(6017),ee=s.n($),te=s(2026);const se=(0,n.ri)(X,{});se.use(ee(),{}),se.use(te.ZP),se.mount("#app")}},t={};function s(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,n,i,a){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],a=e[c][2];for(var o=!0,l=0;l<n.length;l++)(!1&a||r>=a)&&Object.keys(s.O).every((function(e){return s.O[e](n[l])}))?n.splice(l--,1):(o=!1,a<r&&(r=a));if(o){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,i,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,r=n[0],o=n[1],l=n[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(l)var c=l(s)}for(t&&t(n);u<r.length;u++)a=r[u],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(c)},n=self["webpackChunklive_chat"]=self["webpackChunklive_chat"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(6322)}));n=s.O(n)})();
//# sourceMappingURL=app.040c71a5.js.map