"use strict";(self["webpackChunkdnd5club_spa"]=self["webpackChunkdnd5club_spa"]||[]).push([[124],{4771:function(e,t,s){s.d(t,{Z:function(){return h}});var a=s(3396),r=s(7139);const i={class:"content-layout__body"},n={class:"content-layout__list"},c={key:0,class:"content-layout__filter"},o={class:"content-layout__items"},u={key:0,class:"content-layout__selected"};function l(e,t,s,l,m,_){const d=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",{class:(0,r.C_)(["content-layout",_.layoutClasses])},[(0,a._)("div",i,[(0,a._)("div",n,[e.$slots.filter?((0,a.wg)(),(0,a.iD)("div",c,[(0,a.WI)(e.$slots,"filter",{},void 0,!0)])):(0,a.kq)("",!0),(0,a._)("div",o,[(0,a.WI)(e.$slots,"items",{},void 0,!0)])]),s.showRightSide?((0,a.wg)(),(0,a.iD)("div",u,[(0,a.Wm)(d)])):(0,a.kq)("",!0)])],2)}var m=s(9494),_={name:"ContentLayout",props:{showRightSide:{type:Boolean,default:!1}},data:()=>({uiStore:(0,m.H)()}),computed:{layoutClasses(){return{"is-showed-right-side":this.showRightSide,"is-fullscreen":this.uiStore.getContentConfig.fullscreen,"is-small":!this.uiStore.getContentConfig.fullscreen}}}},d=s(89);const p=(0,d.Z)(_,[["render",l],["__scopeId","data-v-60271a05"]]);var h=p},4925:function(e,t,s){s.r(t),s.d(t,{default:function(){return U}});var a=s(3396);const r={"transition-duration":"0.15s",class:"races__items_body--inner","item-selector":".race-item",gutter:"16","percent-position":"true","horizontal-order":"true"};function i(e,t,s,i,n,c){const o=(0,a.up)("filter-item-source"),u=(0,a.up)("filter-item-checkboxes"),l=(0,a.up)("list-filter"),m=(0,a.up)("race-item"),_=(0,a.up)("content-layout"),d=(0,a.Q2)("masonry");return(0,a.wg)(),(0,a.j4)(_,{"show-right-side":"raceDetail"===e.$route.name},{filter:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[(0,a.Wm)(o),(0,a.Wm)(u,{name:"Кость хитов"})])),_:1})])),items:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.getRaces,((e,t)=>((0,a.wg)(),(0,a.j4)(m,{key:t,"race-item":e},null,8,["race-item"])))),128))])),[[d,"races-items"]])])),_:1},8,["show-right-side"])}var n=s(6693),c=s(6095),o=s(4821),u=s(5543),l=s(7769),m=s(4771),_=s(9242),d=s(7139);const p={class:"race-item__content"},h={class:"race-item__main"},w=["href","onClick"],b={class:"race-item__icon"},g={class:"race-item__body"},v={class:"race-item__body_row"},f={class:"race-item__name"},y={class:"race-item__name--rus"},k={class:"race-item__name--eng"},I={class:"race-item__book"},C={class:"race-item__body_row"},D={class:"race-item__abilities"},S={class:"race-item__subrace-type_name"},$={class:"race-item__subrace-type_items"},z={class:"race-item__subrace-item_name"},R={class:"race-item__subrace-item_book"},O=(0,a.Uk)(" / ");function Z(e,t,s,r,i,n){const c=(0,a.up)("svg-icon"),o=(0,a.up)("router-link"),u=(0,a.Q2)("tooltip"),l=(0,a.Q2)("masonry-tile");return"undefined"!==typeof s.raceItem.url?((0,a.wg)(),(0,a.j4)(o,(0,a.dG)({key:0},e.$props,{custom:"",to:{path:s.raceItem.url}}),{default:(0,a.w5)((({href:r,navigate:m,isActive:Z})=>[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",(0,a.dG)({ref:"raceItem"},e.$attrs,{class:["race-item",n.getParentClasses(Z)]}),[(0,a._)("div",p,[(0,a._)("div",h,[(0,a._)("a",{href:r,class:"race-item__link",onClick:(0,_.iM)((e=>m()),["left","prevent","exact"])},[(0,a._)("span",b,[(0,a.Wm)(c,{"icon-name":s.raceItem.icon},null,8,["icon-name"])]),(0,a._)("span",g,[(0,a._)("span",v,[(0,a._)("span",f,[(0,a._)("span",y,(0,d.zw)(s.raceItem.name.rus),1),(0,a._)("span",k," ["+(0,d.zw)(s.raceItem.name.eng)+"] ",1)]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("span",I,[(0,a.Uk)((0,d.zw)(s.raceItem.source.shortName),1)])),[[u,{content:s.raceItem.source.name}]])]),(0,a._)("span",C,[(0,a._)("span",D,(0,d.zw)(s.raceItem.abilities),1)])])],8,w),n.hasSubraces?(0,a.wy)(((0,a.wg)(),(0,a.iD)("button",{key:0,type:"button",class:(0,d.C_)(["race-item__toggle",{"is-active":i.submenu.show}]),onClick:t[0]||(t[0]=(0,_.iM)(((...e)=>n.toggleSubrace&&n.toggleSubrace(...e)),["left","exact","prevent"]))},[(0,a.Wm)(c,{"icon-name":"expand-down"})],2)),[[u,{content:"Разновидности"},void 0,{left:!0}]]):(0,a.kq)("",!0)]),n.hasSubraces?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,d.C_)([{"is-active":n.isOpenedSubraces},"race-item__subrace-list"])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.raceItem.subraces,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:"race-item__subrace-list_col"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:"race-item__subrace-type"},[(0,a._)("div",S,(0,d.zw)(e.name),1),(0,a._)("div",$,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.list,((e,t)=>((0,a.wg)(),(0,a.j4)(o,{key:t,to:{path:e.url},class:"race-item__subrace-item"},{default:(0,a.w5)((()=>[(0,a._)("span",z,(0,d.zw)(e.name.rus),1),(0,a._)("span",R,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("span",null,[(0,a.Uk)((0,d.zw)(e.source.shortName),1)])),[[u,{content:e.source.name}]]),O,(0,a._)("span",null,(0,d.zw)(e.name.eng),1)])])),_:2},1032,["to"])))),128))])])))),128))])))),128))],2)):(0,a.kq)("",!0)])],16)),[[l]])])),_:1},16,["to"])):(0,a.kq)("",!0)}var x=s(9322),W=s(678),G={name:"RaceItem",components:{SvgIcon:x.Z},props:{raceItem:{type:Object,default:()=>null,required:!0},...W.rH.props},data(){return{submenu:{show:!1},resizeObserver:null}},computed:{isOpenedSubraces(){return this.$route.params?.raceName===this.raceItem.url||this.submenu.show},hasSubraces(){return!!this.raceItem?.subraces?.length}},watch:{submenu:{deep:!0,handler(){this.updateGrid()}},isOpenedSubraces(){this.updateGrid()}},mounted(){this.$nextTick((()=>{this.resizeObserver=new ResizeObserver(this.updateGrid),this.resizeObserver.observe(this.$refs.raceItem),this.updateGrid()}))},beforeUnmount(){this.resizeObserver.unobserve(this.$refs.raceItem)},methods:{getParentClasses(e){return{"router-link-active":e||this.$route.fullPath.match(new RegExp(`^${this.raceItem.url}`)),"is-race-selected":"raceDetail"===this.$route.name,"is-green":"homebrew"===this.raceItem.type?.name.toLowerCase()}},toggleSubrace(){this.submenu.show=!this.submenu.show},updateGrid(){this.$nextTick((()=>this.$redrawVueMasonry("races-items")))}}},q=s(89);const H=(0,q.Z)(G,[["render",Z],["__scopeId","data-v-07b2ee3f"]]);var j=H,L={name:"RacesView",components:{RaceItem:j,ContentLayout:m.Z,FilterItemCheckboxes:o.Z,FilterItemSource:c.Z,ListFilter:n.Z},async beforeRouteEnter(){const e=(0,l.t)();await e.initRaceList()},computed:{...(0,u.rn)(l.t,["getRaces","getCurrentRace"])}};const K=(0,q.Z)(L,[["render",i]]);var U=K}}]);