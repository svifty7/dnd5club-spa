"use strict";(self["webpackChunkdnd5club_spa"]=self["webpackChunkdnd5club_spa"]||[]).push([[554],{8847:function(e,t,s){s.d(t,{Z:function(){return g}});var n=s(9199);const o={class:"section-header"},a={class:"section-header__body"},i={class:"section-header__title"},l={class:"section-header__title--text"},c={key:0,class:"section-header__subtitle"},r={key:0,class:"section-header__controls"},d={key:0,class:"section-header__controls--optional"},u={key:1,type:"button",class:"section-header__control--optional is-only-desktop"},p={key:1,class:"section-header__controls--main"};function _(e,t,s,_,h,y){const m=(0,n.up)("svg-icon");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",a,[(0,n._)("div",i,[(0,n._)("div",l,(0,n.zw)(s.title),1),s.copy?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"section-header__title--copy",onClick:t[0]||(t[0]=(0,n.iM)(((...e)=>y.copyText&&y.copyText(...e)),["left","exact","prevent","stop"]))},[(0,n.Wm)(m,{"icon-name":"copy"})])):(0,n.kq)("",!0)]),s.subtitle?((0,n.wg)(),(0,n.iD)("div",c,(0,n.zw)(s.subtitle),1)):(0,n.kq)("",!0)]),y.hasControls?((0,n.wg)(),(0,n.iD)("div",r,[y.hasOptionalControls?((0,n.wg)(),(0,n.iD)("div",d,[s.print?((0,n.wg)(),(0,n.iD)("button",{key:0,type:"button",class:"section-header__control--optional is-only-desktop",onClick:t[1]||(t[1]=(0,n.iM)(((...e)=>y.openPrintWindow&&y.openPrintWindow(...e)),["left","exact","prevent","stop"]))},[(0,n.Wm)(m,{"icon-name":"print"})])):(0,n.kq)("",!0),s.exportFoundry?((0,n.wg)(),(0,n.iD)("button",u,[(0,n.Wm)(m,{"icon-name":"export-foundry"})])):(0,n.kq)("",!0)])):(0,n.kq)("",!0),y.hasMainControls?((0,n.wg)(),(0,n.iD)("div",p,[s.fullscreen?((0,n.wg)(),(0,n.iD)("button",{key:0,type:"button",class:"section-header__control--main is-only-desktop",onClick:t[2]||(t[2]=(0,n.iM)((t=>e.uiStore.setFullscreenState(!e.uiStore.getContentConfig.fullscreen)),["left","exact","prevent"]))},[(0,n.Wm)(m,{"icon-name":e.uiStore.getContentConfig.fullscreen?"exit-fullscreen":"fullscreen"},null,8,["icon-name"])])):(0,n.kq)("",!0),s.close?((0,n.wg)(),(0,n.iD)("button",{key:1,type:"button",class:"section-header__control--main",onClick:t[3]||(t[3]=(0,n.iM)((e=>s.close()),["left","exact","prevent","stop"]))},[(0,n.Wm)(m,{"icon-name":"close"})])):(0,n.kq)("",!0)])):(0,n.kq)("",!0)])):(0,n.kq)("",!0)])}var h=s(5537),y=s(5669),m={name:"SectionHeader",components:{SvgIcon:h.Z},props:{title:{type:String,required:!0},subtitle:{type:String,default:""},copy:{type:String,default:""},print:{type:Boolean,default:!1},exportFoundry:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},close:{type:Function,default:void 0}},data:()=>({uiStore:(0,y.H)()}),computed:{hasOptionalControls(){return!!this.print||!!this.exportFoundry},hasMainControls(){return!!this.close||!!this.fullscreen},hasControls(){return!!this.hasOptionalControls||!!this.hasMainControls}},methods:{async copyText(){if(navigator.clipboard)try{return void await navigator.clipboard.writeText(this.copy)}catch(t){console.error(t)}const e=document.body.appendChild(document.createElement("input"));e.value=this.copy,e.focus(),e.select(),document.execCommand("copy"),e.parentNode.removeChild(e)},openPrintWindow(){window.print()}}},b=s(89);const f=(0,b.Z)(m,[["render",_],["__scopeId","data-v-187985b8"]]);var g=f},9554:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});var n=s(9199);const o={key:0,class:"class-detail"},a={class:"class-detail__tabs"},i=["onClick"],l={class:"class-detail__tab_icon"},c={class:"class-detail__tab_name"},r={class:"class-detail__body"},d={key:1,class:"class-detail"},u={class:"class-detail__loader"},p={class:"class-detail__loader_img"},_=["src"];function h(e,t,h,y,m,b){const f=(0,n.up)("section-header"),g=(0,n.up)("svg-icon");return e.loading?((0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("div",u,[(0,n._)("div",p,[(0,n._)("img",{src:s(594),alt:""},null,8,_)])])])):((0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(f,{title:b.currentClass.name.rus,subtitle:b.currentClass.name.eng,copy:b.urlForCopy,close:b.closeClass,fullscreen:""},null,8,["title","subtitle","copy","close"]),(0,n._)("div",a,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(b.currentClass.tabs,((t,s)=>((0,n.wg)(),(0,n.iD)("button",{key:s,class:(0,n.C_)(["class-detail__tab",{"is-active":e.currentTab.name===t.name}]),onClick:(0,n.iM)((e=>b.setTab(s)),["left","exact","prevent"])},[(0,n._)("span",l,[(0,n.Wm)(g,{"icon-name":t.icon},null,8,["icon-name"])]),(0,n._)("span",c,(0,n.zw)(t.name),1)],10,i)))),128))]),(0,n._)("div",r,(0,n.zw)(e.currentTab?.name),1)]))}var y=s(1351),m=s(8847),b=s(5537),f={name:"ClassDetail",components:{SvgIcon:b.Z,SectionHeader:m.Z},beforeRouteUpdate(e,t,s){this.loading=!0;const n=(0,y.q)();n.deselectClass(),n.setClassInfo(e.params.className,e.params?.classArchetype).then((()=>{this.loading=!1,this.setTab(0),s()})).catch((e=>{console.log(e)}))},data:()=>({classesStore:(0,y.q)(),loading:!1,currentTab:void 0}),computed:{urlForCopy(){return window.location.origin+this.$route.fullPath},currentClass(){return this.classesStore.getCurrentClass}},beforeMount(){this.setTab(0)},methods:{closeClass(){this.$router.push({name:"classes"})},setTab(e){this.currentTab=this.currentClass.tabs[e]}}},g=s(89);const v=(0,g.Z)(f,[["render",h],["__scopeId","data-v-004664f9"]]);var C=v},594:function(e,t,s){e.exports=s.p+"img/loader.79102b2b.png"}}]);